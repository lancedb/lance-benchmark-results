#!/usr/bin/env python3
"""Parse the benchmark results and generate a json file for uploading/plotting"""
import json
from pathlib import Path
import platform
import subprocess
import datetime

import click


def get_commit_sha():
    """Get the commit sha"""
    return subprocess.check_output(["git", "rev-parse", "HEAD"]).decode("utf-8").strip()


def get_current_datetime():
    """Get the current datetime"""
    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def get_os():
    """Get the operating system"""
    return platform.system()


def get_arch():
    """Get the architecture"""
    return platform.machine()


def parse_one(path: Path):
    """Parse one benchmark result"""
    name = path.name
    commit_sha = get_commit_sha()
    datetime_str = get_current_datetime()
    os = get_os()
    arch = get_arch()
    with (path / "new" / "estimates.json").open() as f:
        estimates = json.load(f)
        duration_ns = estimates["mean"]["point_estimate"]
        standard_error = estimates["mean"]["standard_error"]
    return {
        "name": name,
        "commit": commit_sha,
        "datetime": datetime_str,
        "os": os,
        "arch": arch,
        "mean_duration_ns": duration_ns,
        "standard_error": standard_error
    }


def parse_all(lance_root):
    """
    Parse all the benchmark results

    Parameters
    ----------
    lance_root : Path
        The root directory of the lance repo
    """
    results = []
    for path in (lance_root / "rust" / "target" / "criterion").iterdir():
        if path.is_dir():
            results.append(parse_one(path))
    return results


def dedup(json_list, dedup_key):
    """
    Deduplicate a list of json objects by a key

    Parameters
    ----------
    json_list : list
        The list of json objects
    dedup_key : str
        The key to deduplicate

    Returns
    -------
    list
        The deduplicated list of json objects
    """
    dedup_dict = {}
    for json_obj in json_list:
        dedup_dict[json_obj[dedup_key]] = json_obj
    return list(dedup_dict.values())


@click.command()
@click.argument("output-path", type=click.Path(exists=False, path_type=Path))
@click.option("--lance-root", default=None, help="The root directory of the lance repo")
@click.option("--mode", default="merge", help="What to do if output-path exists")
def main(output_path, lance_root=None, mode="merge"):
    """Parse all the benchmark results and save to a json file"""
    if lance_root is None:
        lance_root = Path().absolute()
    else:
        lance_root = Path(lance_root)
    rs = parse_all(lance_root)

    output_path = Path(output_path).expanduser().absolute()
    if output_path.exists():
        if mode == "merge":
            with output_path.open() as f:
                old_rs = json.load(f)
            rs = dedup(old_rs + rs, "commit")
        else:
            raise ValueError(f"output-path {output_path} already exists")

    with output_path.open("w") as f:
        json.dump(rs, f, indent=2)


if __name__ == "__main__":
    main()
