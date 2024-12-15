window.BENCHMARK_DATA = {
  "lastUpdate": 1734255377495,
  "repoUrl": "https://github.com/lancedb/lance",
  "entries": {
    "Lance Rust Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "lancedb",
            "username": "lancedb"
          },
          "committer": {
            "name": "lancedb",
            "username": "lancedb"
          },
          "id": "80322c731398210b7c0f2c06d1dc86214f993612",
          "message": "ci: run rust benchmark and generate report",
          "timestamp": "2024-10-01T01:20:49Z",
          "url": "https://github.com/lancedb/lance/pull/2964/commits/80322c731398210b7c0f2c06d1dc86214f993612"
        },
        "date": 1727751251478,
        "tool": "cargo",
        "benches": [
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4439087761,
            "range": "± 8823953",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 293913864,
            "range": "± 747261",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 665012140,
            "range": "± 2009741",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 353263618,
            "range": "± 210736",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 376203527,
            "range": "± 1804646",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1049775861,
            "range": "± 2908441",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 660715433,
            "range": "± 309913",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3638397,
            "range": "± 8990",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 139556749,
            "range": "± 122618",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 143626479,
            "range": "± 850723",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lancedb",
            "username": "lancedb"
          },
          "committer": {
            "name": "lancedb",
            "username": "lancedb"
          },
          "id": "d08e474e7e5038cfe6cce44ae5639471c553e39d",
          "message": "ci: run rust benchmark and generate report",
          "timestamp": "2024-10-01T01:20:49Z",
          "url": "https://github.com/lancedb/lance/pull/2964/commits/d08e474e7e5038cfe6cce44ae5639471c553e39d"
        },
        "date": 1727751538024,
        "tool": "cargo",
        "benches": [
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4447666835,
            "range": "± 14309029",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 293705952,
            "range": "± 460801",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 664593825,
            "range": "± 1545041",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 356393988,
            "range": "± 416485",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 378784983,
            "range": "± 2668931",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1051051141,
            "range": "± 3198500",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 655341430,
            "range": "± 422134",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3620941,
            "range": "± 7823",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 139266300,
            "range": "± 358385",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 142838411,
            "range": "± 1144632",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lancedb",
            "username": "lancedb"
          },
          "committer": {
            "name": "lancedb",
            "username": "lancedb"
          },
          "id": "e00ff8f0d53aedb3e36830e121841d574b361323",
          "message": "ci: run rust benchmark and generate report",
          "timestamp": "2024-10-01T01:20:49Z",
          "url": "https://github.com/lancedb/lance/pull/2964/commits/e00ff8f0d53aedb3e36830e121841d574b361323"
        },
        "date": 1727752838162,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10513957753,
            "range": "± 21668708",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 393077474,
            "range": "± 935264",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4630976330,
            "range": "± 9255948",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 286226152,
            "range": "± 427358",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 721595722,
            "range": "± 2669510",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 353854652,
            "range": "± 186910",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1195567658,
            "range": "± 1885417",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 720753705,
            "range": "± 2149549",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4184852,
            "range": "± 15711",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 790672582,
            "range": "± 6218317",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 281502588,
            "range": "± 855986",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 281908097,
            "range": "± 16395525",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1880630547,
            "range": "± 8314208",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 661596639,
            "range": "± 1454942",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 333072710,
            "range": "± 143737",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 331072271,
            "range": "± 812521",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1020527573,
            "range": "± 2644266",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 617924193,
            "range": "± 420308",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5221661,
            "range": "± 68013",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83609493,
            "range": "± 1851605",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25566338089,
            "range": "± 159024731",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 67178458,
            "range": "± 2571329",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4442229270,
            "range": "± 22140138",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 293279232,
            "range": "± 636223",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 664312051,
            "range": "± 1499335",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 354608919,
            "range": "± 364822",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 375401040,
            "range": "± 450515",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1054236708,
            "range": "± 107625054",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 652484246,
            "range": "± 792325",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3563302,
            "range": "± 9346",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 139123361,
            "range": "± 271286",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 142476129,
            "range": "± 216327",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4244710648,
            "range": "± 15797139",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1827842783,
            "range": "± 6917896",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 785678887,
            "range": "± 5590595",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 363311950,
            "range": "± 949571",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 259631425,
            "range": "± 312678",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 661871623,
            "range": "± 1138578",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 298139765,
            "range": "± 4305034",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 298703813,
            "range": "± 319732",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 943508027,
            "range": "± 1314813",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 605007839,
            "range": "± 2607464",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lancedb",
            "username": "lancedb"
          },
          "committer": {
            "name": "lancedb",
            "username": "lancedb"
          },
          "id": "3156b6eaa191936d4f0ef7fd100d370451fda832",
          "message": "ci: run rust benchmark and generate report",
          "timestamp": "2024-10-01T01:20:49Z",
          "url": "https://github.com/lancedb/lance/pull/2964/commits/3156b6eaa191936d4f0ef7fd100d370451fda832"
        },
        "date": 1727754894321,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10609320935,
            "range": "± 24787837",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 397479216,
            "range": "± 2201193",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4689692063,
            "range": "± 18491648",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 286871673,
            "range": "± 1069124",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 726596760,
            "range": "± 2879757",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 347482110,
            "range": "± 237421",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1201711695,
            "range": "± 2982670",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 712233117,
            "range": "± 2229661",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4221275,
            "range": "± 15094",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 795189720,
            "range": "± 6963953",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 282396109,
            "range": "± 1528787",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 283832657,
            "range": "± 836741",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1888746352,
            "range": "± 8259270",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 667754202,
            "range": "± 22828696",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 330188417,
            "range": "± 490875",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 334674059,
            "range": "± 497841",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1018752076,
            "range": "± 2138496",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 623927523,
            "range": "± 525171",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5208464,
            "range": "± 100940",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 81037876,
            "range": "± 1682004",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25876993069,
            "range": "± 693228347",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 67674900,
            "range": "± 4315994",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4999008339,
            "range": "± 349738013",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 293332152,
            "range": "± 403080",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 665985748,
            "range": "± 1862589",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 357617366,
            "range": "± 305888",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 376977526,
            "range": "± 2631768",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1048826521,
            "range": "± 2521594",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 653521551,
            "range": "± 364515",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3553714,
            "range": "± 9321",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 139471986,
            "range": "± 700652",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 143212246,
            "range": "± 333768",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4237703512,
            "range": "± 11824808",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1821251055,
            "range": "± 5275281",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 784708563,
            "range": "± 6632904",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 363040000,
            "range": "± 1190914",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 260756686,
            "range": "± 312453",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 662903875,
            "range": "± 1423824",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 299789217,
            "range": "± 358985",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 298226541,
            "range": "± 241630",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 941425456,
            "range": "± 1796913",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 602153407,
            "range": "± 1045017",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lancedb",
            "username": "lancedb"
          },
          "committer": {
            "name": "lancedb",
            "username": "lancedb"
          },
          "id": "e13d70e22fcf7c0bf9bfa63af611405035b3e500",
          "message": "ci: run rust benchmark and generate report",
          "timestamp": "2024-10-01T03:23:17Z",
          "url": "https://github.com/lancedb/lance/pull/2964/commits/e13d70e22fcf7c0bf9bfa63af611405035b3e500"
        },
        "date": 1727756996694,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10584585692,
            "range": "± 68830991",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 394839443,
            "range": "± 1715334",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4657836065,
            "range": "± 6196911",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 285856721,
            "range": "± 1079850",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 722207488,
            "range": "± 2639082",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 355486309,
            "range": "± 168785",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1195591749,
            "range": "± 922859",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 718724423,
            "range": "± 1199590",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4197249,
            "range": "± 14190",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 789193442,
            "range": "± 8687896",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 280199384,
            "range": "± 618680",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 281559556,
            "range": "± 563781",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1821062420,
            "range": "± 5579463",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 660473977,
            "range": "± 1087856",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 333418188,
            "range": "± 152019",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 333298503,
            "range": "± 204487",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1016017912,
            "range": "± 2579000",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 622823353,
            "range": "± 712875",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5244390,
            "range": "± 106547",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82524517,
            "range": "± 1544264",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25657339203,
            "range": "± 71073530",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 66377317,
            "range": "± 3872671",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4421020922,
            "range": "± 13000135",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 293421466,
            "range": "± 1116014",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 664107311,
            "range": "± 1364436",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 356473172,
            "range": "± 616946",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 373062766,
            "range": "± 340251",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1050366681,
            "range": "± 4125358",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 654250866,
            "range": "± 1147537",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3606351,
            "range": "± 15470",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 138756937,
            "range": "± 548217",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 142258181,
            "range": "± 517121",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4272213357,
            "range": "± 11534019",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1825659005,
            "range": "± 5684555",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 781443930,
            "range": "± 4409293",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 363206389,
            "range": "± 1150251",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 260420305,
            "range": "± 370479",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 663590810,
            "range": "± 1155542",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 300152205,
            "range": "± 194884",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 298589891,
            "range": "± 347164",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 947343020,
            "range": "± 625338",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 606213091,
            "range": "± 641362",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1733028965,
            "range": "± 60673509",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 763923,
            "range": "± 5620",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 556613,
            "range": "± 28683",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2233883651,
            "range": "± 8050477",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2916289451,
            "range": "± 8968431",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 338582091,
            "range": "± 2962625",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 351389124,
            "range": "± 2925725",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 347,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 359,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 370,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 426,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Xu",
            "username": "eddyxu",
            "email": "lei@lancedb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6e042ac9365bbce6b0840cfd91e847bfd38e7f5f",
          "message": "ci: run rust benchmark and generate report (#2964)\n\nCronjob to generate report on\r\nhttps://lancedb.github.io/lance-benchmark-results/dev/bench/",
          "timestamp": "2024-10-01T04:31:04Z",
          "url": "https://github.com/lancedb/lance/commit/6e042ac9365bbce6b0840cfd91e847bfd38e7f5f"
        },
        "date": 1727775299629,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10543062686,
            "range": "± 35956729",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 394360759,
            "range": "± 1352903",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4629801752,
            "range": "± 16368940",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 281526397,
            "range": "± 752706",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 722078369,
            "range": "± 2257747",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 352619265,
            "range": "± 144535",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1175876345,
            "range": "± 1389796",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 718038096,
            "range": "± 1352099",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4178622,
            "range": "± 6304",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 793475458,
            "range": "± 5251427",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 277213579,
            "range": "± 9198315",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 277566676,
            "range": "± 436152",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1805889785,
            "range": "± 5633992",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 658329569,
            "range": "± 3076412",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 333286415,
            "range": "± 76001",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 330555768,
            "range": "± 1850813",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1015870862,
            "range": "± 1280995",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 621186757,
            "range": "± 1133016",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5276228,
            "range": "± 82744",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83484422,
            "range": "± 1636344",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25582458488,
            "range": "± 504535169",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 66422652,
            "range": "± 4155565",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4420626446,
            "range": "± 11989056",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 286546828,
            "range": "± 377389",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 661594725,
            "range": "± 2936681",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 353379296,
            "range": "± 5692115",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 375643080,
            "range": "± 494917",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1044604979,
            "range": "± 2655704",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 659894745,
            "range": "± 576789",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3574949,
            "range": "± 11426",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136971167,
            "range": "± 146332",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 140284203,
            "range": "± 1065836",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4262898094,
            "range": "± 11735171",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1820633699,
            "range": "± 7934848",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 785527829,
            "range": "± 4848275",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 365310226,
            "range": "± 665811",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 260075335,
            "range": "± 465484",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 657456255,
            "range": "± 10055301",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 297367169,
            "range": "± 1379593",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 295946509,
            "range": "± 482556",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 938765188,
            "range": "± 986202",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 605878058,
            "range": "± 830402",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1752463870,
            "range": "± 72559660",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 755119,
            "range": "± 7108",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 558762,
            "range": "± 32480",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2210884748,
            "range": "± 9576544",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2919073259,
            "range": "± 14205063",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 339272892,
            "range": "± 2273649",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 353574622,
            "range": "± 2836042",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 347,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 358,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 367,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 424,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lancedb",
            "username": "lancedb"
          },
          "committer": {
            "name": "lancedb",
            "username": "lancedb"
          },
          "id": "a1e832739aa8d0179141b0848df321d63d8ca2dd",
          "message": "chore: re-enable all benchmarks under linalg",
          "timestamp": "2024-10-01T04:31:08Z",
          "url": "https://github.com/lancedb/lance/pull/2965/commits/a1e832739aa8d0179141b0848df321d63d8ca2dd"
        },
        "date": 1727800676757,
        "tool": "cargo",
        "benches": [
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1724614052,
            "range": "± 116494686",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 767088,
            "range": "± 5884",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 556501,
            "range": "± 27237",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2211369286,
            "range": "± 13751964",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2978568411,
            "range": "± 10532670",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 341121620,
            "range": "± 1824992",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 354993407,
            "range": "± 7640508",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 349,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 359,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 367,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 420,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Xu",
            "username": "eddyxu",
            "email": "lei@lancedb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6e042ac9365bbce6b0840cfd91e847bfd38e7f5f",
          "message": "ci: run rust benchmark and generate report (#2964)\n\nCronjob to generate report on\r\nhttps://lancedb.github.io/lance-benchmark-results/dev/bench/",
          "timestamp": "2024-10-01T04:31:04Z",
          "url": "https://github.com/lancedb/lance/commit/6e042ac9365bbce6b0840cfd91e847bfd38e7f5f"
        },
        "date": 1727861702437,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10658304398,
            "range": "± 31915079",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 394082673,
            "range": "± 1019683",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4664050844,
            "range": "± 22011157",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 281417036,
            "range": "± 879464",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 722172343,
            "range": "± 2747549",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 353548358,
            "range": "± 278561",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1174550823,
            "range": "± 1620492",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 716760255,
            "range": "± 17825511",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4189037,
            "range": "± 26082",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 785893213,
            "range": "± 4640119",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 275944698,
            "range": "± 1539762",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 277363714,
            "range": "± 539678",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1827306359,
            "range": "± 6232830",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 658515448,
            "range": "± 2645275",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 329308161,
            "range": "± 136468",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 329339602,
            "range": "± 188193",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1016573046,
            "range": "± 1916165",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 625194922,
            "range": "± 400359",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5246606,
            "range": "± 71835",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83623486,
            "range": "± 1946450",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25741583234,
            "range": "± 557987778",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 73446453,
            "range": "± 6918244",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4417789929,
            "range": "± 14115099",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 286210459,
            "range": "± 669593",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 661570262,
            "range": "± 2915787",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 355005350,
            "range": "± 7982045",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 376035614,
            "range": "± 3093583",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1046632720,
            "range": "± 2676435",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 660874604,
            "range": "± 654811",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3554665,
            "range": "± 14915",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136104746,
            "range": "± 437129",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 140285371,
            "range": "± 299112",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4208027057,
            "range": "± 11218353",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1822878230,
            "range": "± 6725666",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 786197917,
            "range": "± 4911001",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 364202448,
            "range": "± 4737883",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 259510005,
            "range": "± 351902",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 656669199,
            "range": "± 1892033",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 299882188,
            "range": "± 911848",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 296211788,
            "range": "± 612044",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 937246479,
            "range": "± 1066351",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 607329070,
            "range": "± 1180397",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1708854673,
            "range": "± 63227534",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 748415,
            "range": "± 4202",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 561341,
            "range": "± 29935",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2209791354,
            "range": "± 12614958",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2915804661,
            "range": "± 8147490",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 341119459,
            "range": "± 3304893",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 354038784,
            "range": "± 3386227",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 347,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 359,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 367,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 422,
            "range": "± 17",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jacketsj",
            "username": "jacketsj",
            "email": "jacketsj@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fdbe4a8167d562cd1a0165ec59516384245ed629",
          "message": "feat: cuda acceleration for PQ builds/assignments (#2946)\n\nCurrently if an accelerator is used, it's only used for IVF training and\nassignments. This PR extends it to also run on PQ training &\nassignments.\nI benchmarked on a gcloud n1-standard-16 instance with an attached\nnvidia T4, using the wikipedia dataset with 50 in-sample queries (so qps\nwill be a bit noisy).\n\nBefore:\n\n![results_static_20240927_210452_plot_dataset_wikipedia_k_10](https://github.com/user-attachments/assets/1eabc795-e025-4bbf-b3cf-2d98e6057223)\n\n\nAfter:\n\n![results_static_20240927_202649_plot_dataset_wikipedia_k_10](https://github.com/user-attachments/assets/74887ca6-4fca-4c6b-b752-aab1c8128917)\n\nThere's some noise due to randomness, but these plots can be considered\nto be essentially the same, except for the faster build time.\n\n\nUpdate: I've verified that there are no regressions from the latest\nchanges.",
          "timestamp": "2024-10-09T00:34:10Z",
          "url": "https://github.com/lancedb/lance/commit/fdbe4a8167d562cd1a0165ec59516384245ed629"
        },
        "date": 1728491005731,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10804058820,
            "range": "± 93067001",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 399696986,
            "range": "± 3720595",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4761832207,
            "range": "± 38666819",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 282718942,
            "range": "± 966779",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 723556201,
            "range": "± 2640421",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 344072954,
            "range": "± 490621",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1197601207,
            "range": "± 2494050",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 723779814,
            "range": "± 2279073",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4156946,
            "range": "± 18385",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 812195575,
            "range": "± 4120391",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 278476415,
            "range": "± 908220",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 277698419,
            "range": "± 830592",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1808225594,
            "range": "± 7913576",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 660141311,
            "range": "± 2005934",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 329526314,
            "range": "± 123371",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 331036684,
            "range": "± 446490",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1008954810,
            "range": "± 2161584",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 621262761,
            "range": "± 784284",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5588363,
            "range": "± 76985",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 81929064,
            "range": "± 1404403",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25300397437,
            "range": "± 124865903",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 62086090,
            "range": "± 3981628",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4531186078,
            "range": "± 37299372",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 290889123,
            "range": "± 522675",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 662666517,
            "range": "± 2991099",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 356351517,
            "range": "± 553203",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 376454298,
            "range": "± 506669",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1038947022,
            "range": "± 5318642",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 652634395,
            "range": "± 8290380",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3551381,
            "range": "± 16636",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 137061980,
            "range": "± 7361789",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 140750768,
            "range": "± 584837",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4392486702,
            "range": "± 41691514",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1861697531,
            "range": "± 9085027",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 797209964,
            "range": "± 5294769",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 366095528,
            "range": "± 1367877",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 257757928,
            "range": "± 400282",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 660237282,
            "range": "± 2252203",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 299875675,
            "range": "± 432442",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 297732516,
            "range": "± 239888",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 947652510,
            "range": "± 8036210",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 606084317,
            "range": "± 7770498",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1715197862,
            "range": "± 63924640",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 780274,
            "range": "± 11379",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 557626,
            "range": "± 27426",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2363784378,
            "range": "± 17220846",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2944754001,
            "range": "± 11051121",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 372924140,
            "range": "± 3384713",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 388745346,
            "range": "± 2909011",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 347,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 356,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 420,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jacketsj",
            "username": "jacketsj",
            "email": "jacketsj@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8e3570bf9cc1f59e163ecaf4aee7de433638a2b9",
          "message": "chore: option to disable null/nan filter during builds (#2970)",
          "timestamp": "2024-10-10T01:57:44Z",
          "url": "https://github.com/lancedb/lance/commit/8e3570bf9cc1f59e163ecaf4aee7de433638a2b9"
        },
        "date": 1728552960286,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10720242849,
            "range": "± 57936616",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 399528541,
            "range": "± 1991316",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4699435832,
            "range": "± 27395498",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 277132549,
            "range": "± 1243036",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 725846261,
            "range": "± 2725683",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 339443985,
            "range": "± 300726",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1174229420,
            "range": "± 2123966",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 725317333,
            "range": "± 3023990",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4186374,
            "range": "± 34590",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 806726957,
            "range": "± 3035763",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 274137309,
            "range": "± 717892",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 273419526,
            "range": "± 637411",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1823882038,
            "range": "± 11617548",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 656344345,
            "range": "± 2379625",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 329777109,
            "range": "± 117427",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 329695389,
            "range": "± 159058",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1010685975,
            "range": "± 1352696",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 617582086,
            "range": "± 2181863",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5242899,
            "range": "± 61863",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82578885,
            "range": "± 1406040",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25671267312,
            "range": "± 96632489",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 64876354,
            "range": "± 4305053",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4476499921,
            "range": "± 12237917",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 283135960,
            "range": "± 710217",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 661464091,
            "range": "± 4271774",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 353636175,
            "range": "± 935933",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 378115443,
            "range": "± 1487289",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1045697483,
            "range": "± 3965057",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 651289097,
            "range": "± 671438",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3501185,
            "range": "± 36159",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 133837165,
            "range": "± 302508",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138123446,
            "range": "± 676287",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4368438728,
            "range": "± 24749467",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1867042958,
            "range": "± 7482498",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 797928659,
            "range": "± 8066078",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 366229747,
            "range": "± 2679964",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 257520551,
            "range": "± 515366",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 658834452,
            "range": "± 3445640",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 296657590,
            "range": "± 427470",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 297794396,
            "range": "± 417235",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 934356000,
            "range": "± 2379842",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 603409973,
            "range": "± 48812971",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1764965912,
            "range": "± 87638380",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 770990,
            "range": "± 9474",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 555801,
            "range": "± 41540",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2341791014,
            "range": "± 17052649",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2943941995,
            "range": "± 158460421",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 344496516,
            "range": "± 2196873",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 353364708,
            "range": "± 4033097",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 345,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 359,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 366,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 418,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "eeebbffc634e4644d6aa0a7f3654865b33300991",
          "message": "chore: move fsst directory to rust/lance-encoding/src/compression_algo (#2984)",
          "timestamp": "2024-10-10T14:42:22Z",
          "url": "https://github.com/lancedb/lance/commit/eeebbffc634e4644d6aa0a7f3654865b33300991"
        },
        "date": 1728639327799,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10776073668,
            "range": "± 25893367",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 400541381,
            "range": "± 1707578",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4743107485,
            "range": "± 19227947",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 282659980,
            "range": "± 607734",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 730276931,
            "range": "± 3113649",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 354155172,
            "range": "± 377600",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1173365571,
            "range": "± 2181801",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 702697174,
            "range": "± 2070162",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4235756,
            "range": "± 12920",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 797491552,
            "range": "± 4686964",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 277967528,
            "range": "± 562640",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 278096472,
            "range": "± 492181",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1852249138,
            "range": "± 7860033",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 657152641,
            "range": "± 4436785",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 328775377,
            "range": "± 117105",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 329011961,
            "range": "± 180653",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1010886083,
            "range": "± 2126676",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 624971108,
            "range": "± 1054395",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5235281,
            "range": "± 76982",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82318904,
            "range": "± 929399",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25585528293,
            "range": "± 104947536",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 64137103,
            "range": "± 3810371",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4513168186,
            "range": "± 32549778",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 286848371,
            "range": "± 410685",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 663448867,
            "range": "± 2689216",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 353442406,
            "range": "± 432562",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 378807044,
            "range": "± 4274167",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1050586408,
            "range": "± 2564056",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 655477784,
            "range": "± 840394",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3566834,
            "range": "± 8122",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 137432335,
            "range": "± 2188644",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 140479674,
            "range": "± 484286",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4306412906,
            "range": "± 13886856",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1848016343,
            "range": "± 8446670",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 796597401,
            "range": "± 6866525",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 368460609,
            "range": "± 16082326",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 259386727,
            "range": "± 450243",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 657267547,
            "range": "± 1992545",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 298301402,
            "range": "± 2223074",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 298588602,
            "range": "± 466616",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 942443696,
            "range": "± 1623635",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 605999024,
            "range": "± 1175919",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1703904829,
            "range": "± 69594387",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 778482,
            "range": "± 7807",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 549380,
            "range": "± 30146",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2354146677,
            "range": "± 22273230",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2915186191,
            "range": "± 6361708",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 374990978,
            "range": "± 1653004",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 392378193,
            "range": "± 1990335",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 346,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 356,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 369,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 422,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cdac5deeaa2fbe41387112e21186637214a1fe1e",
          "message": "feat: add some basic primitive for working with repdef data (#2998)",
          "timestamp": "2024-10-11T21:46:59Z",
          "url": "https://github.com/lancedb/lance/commit/cdac5deeaa2fbe41387112e21186637214a1fe1e"
        },
        "date": 1728725733855,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10787867439,
            "range": "± 57708679",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 400960714,
            "range": "± 2249887",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4756467133,
            "range": "± 15251724",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 275205741,
            "range": "± 717080",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 728931417,
            "range": "± 2054117",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 353339274,
            "range": "± 186071",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1156452065,
            "range": "± 7444515",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 704444145,
            "range": "± 1747468",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4190635,
            "range": "± 12511",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 803147512,
            "range": "± 8388872",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 268483153,
            "range": "± 847834",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 270321222,
            "range": "± 611946",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1871360128,
            "range": "± 10226525",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 659800282,
            "range": "± 3665204",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 328850812,
            "range": "± 18422142",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 326758194,
            "range": "± 557094",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1016616426,
            "range": "± 28096201",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 626368560,
            "range": "± 660558",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5264702,
            "range": "± 74981",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82168900,
            "range": "± 1733624",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25659882805,
            "range": "± 549330626",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 64479920,
            "range": "± 4641311",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4545912566,
            "range": "± 22255491",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 279119241,
            "range": "± 938226",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 662023586,
            "range": "± 24884972",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 353305545,
            "range": "± 374486",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 380196014,
            "range": "± 462086",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1049214007,
            "range": "± 2987933",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 647918490,
            "range": "± 972491",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3523819,
            "range": "± 5723",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 132496142,
            "range": "± 366612",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 135994117,
            "range": "± 494135",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4328327430,
            "range": "± 36688444",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1860409468,
            "range": "± 5510446",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 802903440,
            "range": "± 7308967",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 368753714,
            "range": "± 994888",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 260465874,
            "range": "± 303789",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 656475029,
            "range": "± 2579239",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 300718617,
            "range": "± 452693",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 296681739,
            "range": "± 306588",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 935947245,
            "range": "± 1706774",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 602384870,
            "range": "± 759226",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1754926182,
            "range": "± 61786320",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 785022,
            "range": "± 6754",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 560295,
            "range": "± 33171",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2333697522,
            "range": "± 55807087",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2974138131,
            "range": "± 9027035",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 376192394,
            "range": "± 4434204",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 389988901,
            "range": "± 3140183",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 350,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 360,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 369,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 425,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cdac5deeaa2fbe41387112e21186637214a1fe1e",
          "message": "feat: add some basic primitive for working with repdef data (#2998)",
          "timestamp": "2024-10-11T21:46:59Z",
          "url": "https://github.com/lancedb/lance/commit/cdac5deeaa2fbe41387112e21186637214a1fe1e"
        },
        "date": 1728812183903,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10848942689,
            "range": "± 71975832",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404293945,
            "range": "± 2732697",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4767054310,
            "range": "± 20340491",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 285526196,
            "range": "± 856759",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 739765302,
            "range": "± 2321766",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 354438965,
            "range": "± 429995",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1196131016,
            "range": "± 2042024",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 733467302,
            "range": "± 1476989",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4306056,
            "range": "± 34642",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 800598330,
            "range": "± 5567129",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 281347298,
            "range": "± 591202",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 281601913,
            "range": "± 956317",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1838187615,
            "range": "± 8761912",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 668457409,
            "range": "± 2248583",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 336377296,
            "range": "± 117778",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 336633680,
            "range": "± 3137383",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1043248675,
            "range": "± 1836909",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 637287819,
            "range": "± 637755",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5231872,
            "range": "± 65890",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82216282,
            "range": "± 1018242",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26176906365,
            "range": "± 147898636",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 64503708,
            "range": "± 3440500",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4514359560,
            "range": "± 21206211",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 291242807,
            "range": "± 929475",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 672477676,
            "range": "± 2486541",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 364097037,
            "range": "± 593851",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 389159056,
            "range": "± 452292",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1087063983,
            "range": "± 42763087",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 668433557,
            "range": "± 432640",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3647778,
            "range": "± 12254",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 137881893,
            "range": "± 314857",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 141303204,
            "range": "± 369500",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4287080451,
            "range": "± 30429508",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1850270381,
            "range": "± 9599829",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 797293949,
            "range": "± 4244697",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374733729,
            "range": "± 1423323",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 266638364,
            "range": "± 9627236",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 675822512,
            "range": "± 3386281",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 305963211,
            "range": "± 344431",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 303777204,
            "range": "± 594116",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 968411544,
            "range": "± 1759257",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 612226220,
            "range": "± 905398",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1704525543,
            "range": "± 56617190",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 801565,
            "range": "± 8762",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 569781,
            "range": "± 36992",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2356467982,
            "range": "± 27655200",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2996815778,
            "range": "± 42104333",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 377718207,
            "range": "± 2576049",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 390210654,
            "range": "± 1229682",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 353,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 364,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 372,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jacketsj",
            "username": "jacketsj",
            "email": "jacketsj@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d207aa840f6fe565f8e39e9be034bea003f5a01f",
          "message": "feat: one-pass IVF_PQ accelerated builds (#3001)\n\nThis feature improves disk IO dependence, but it is quite limited. This\r\nonly works if the index type is IVF_PQ, and it will not work efficiently\r\nfor local PQ in the future (unless we store _all_ the PQ models in\r\nVRAM).\r\nImportantly, this allows us to bypass local temp storage for storing\r\nresiduals. However, this still stores PQ codes locally temporarily due\r\nto how we've implemented accelerator support, but these are much smaller\r\n(exact ratio depends on params).\r\n\r\nI tested on my local machine, which is sufficiently fast that the\r\naccelerated builds are mostly IO limited (but IO is also fast). I used\r\nwikipedia-40M\r\n\r\nNew feature disabled:\r\n\r\n![results_static_20241011_224535_plot_dataset_wikipedia-few-queries_k_10](https://github.com/user-attachments/assets/9a9285e1-1814-4215-a4c9-2a3f3a16c874)\r\nivf training time: 52s\r\nivf transform time: 89s\r\npq training time: 18s\r\npq assignment time: 143s\r\ncreate_index rust time: 8.9s\r\n\r\nNew feature enabled:\r\n\r\n![results_static_20241011_203303_plot_dataset_wikipedia-few-queries_k_10](https://github.com/user-attachments/assets/9d94f50b-e3b6-42f8-8357-3cb477e6279b)\r\ncombined training time: 63.7s (not actually sure why this is faster, but\r\nit's not the big part anyway)\r\ncombined transform time: 158.8s\r\ncreate_index rust time: 8.6s\r\n\r\nImprovement should be more noticeable for bigger datasets, as usual.",
          "timestamp": "2024-10-14T01:41:52Z",
          "url": "https://github.com/lancedb/lance/commit/d207aa840f6fe565f8e39e9be034bea003f5a01f"
        },
        "date": 1728898592802,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10783310716,
            "range": "± 47456245",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 406744276,
            "range": "± 2316327",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4772869838,
            "range": "± 18112459",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 274146008,
            "range": "± 1254765",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 731896722,
            "range": "± 3164434",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 359121250,
            "range": "± 231249",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1157256388,
            "range": "± 1237811",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 718568261,
            "range": "± 12816303",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4237928,
            "range": "± 20310",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 809264374,
            "range": "± 7357704",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 268960407,
            "range": "± 561946",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 269494646,
            "range": "± 769124",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1784440387,
            "range": "± 9460350",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 663784129,
            "range": "± 2892652",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 332915985,
            "range": "± 113053",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 333797155,
            "range": "± 541966",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1024185049,
            "range": "± 1437520",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 633336863,
            "range": "± 3974539",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5294540,
            "range": "± 60568",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84753998,
            "range": "± 1394998",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25947673995,
            "range": "± 118025800",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 63092777,
            "range": "± 3692752",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4551917935,
            "range": "± 21541506",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 278021860,
            "range": "± 983945",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 664036608,
            "range": "± 14975092",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 362163570,
            "range": "± 543276",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 383507464,
            "range": "± 733786",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1065425609,
            "range": "± 2251842",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 664887155,
            "range": "± 560861",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3614749,
            "range": "± 16381",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135086171,
            "range": "± 140001",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138198353,
            "range": "± 641820",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4261022593,
            "range": "± 14320319",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1848976101,
            "range": "± 7397302",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 799677600,
            "range": "± 5250527",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 373914428,
            "range": "± 2793274",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 263538996,
            "range": "± 261498",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 658590528,
            "range": "± 25975141",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 303068732,
            "range": "± 1507901",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 299772516,
            "range": "± 820407",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 952744781,
            "range": "± 2042346",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613715582,
            "range": "± 888757",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1719449448,
            "range": "± 57055634",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 782344,
            "range": "± 11033",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 546355,
            "range": "± 24468",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2399571989,
            "range": "± 37130120",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3001628925,
            "range": "± 8859718",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 379121278,
            "range": "± 2614571",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 391235241,
            "range": "± 2318061",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 352,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 362,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jacketsj",
            "username": "jacketsj",
            "email": "jacketsj@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6473f26a66efa1340a0a52dd45a21ac6ab47c682",
          "message": "chore: make ivf fields public (#3003)",
          "timestamp": "2024-10-15T03:37:02Z",
          "url": "https://github.com/lancedb/lance/commit/6473f26a66efa1340a0a52dd45a21ac6ab47c682"
        },
        "date": 1728984939805,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10850225492,
            "range": "± 34175017",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 406400405,
            "range": "± 2271046",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4760024128,
            "range": "± 22028410",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 274658842,
            "range": "± 760333",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 737431972,
            "range": "± 2261628",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 360293064,
            "range": "± 243969",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1173205886,
            "range": "± 1936717",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 725011131,
            "range": "± 4073715",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4320943,
            "range": "± 42997",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 802298535,
            "range": "± 3434084",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 271115924,
            "range": "± 420556",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 271234665,
            "range": "± 905782",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1860469209,
            "range": "± 10020808",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 666589087,
            "range": "± 2001466",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 333033801,
            "range": "± 1190000",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 332494227,
            "range": "± 186624",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1039940112,
            "range": "± 2116951",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 634279011,
            "range": "± 719082",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5218717,
            "range": "± 96378",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82036918,
            "range": "± 1057933",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26132622793,
            "range": "± 98193836",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 62984974,
            "range": "± 2582171",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4524627005,
            "range": "± 14992530",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 279324993,
            "range": "± 758768",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 667587132,
            "range": "± 4887158",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 362568099,
            "range": "± 448554",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 390077954,
            "range": "± 1853460",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1079761328,
            "range": "± 12365470",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 662908400,
            "range": "± 1412269",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3658388,
            "range": "± 14115",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135294631,
            "range": "± 377484",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139062409,
            "range": "± 3046353",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4262054365,
            "range": "± 21166519",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1870213070,
            "range": "± 11702200",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 798126640,
            "range": "± 8772209",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 372501416,
            "range": "± 1559927",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 264193571,
            "range": "± 270420",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 661631600,
            "range": "± 2980124",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 302759151,
            "range": "± 368551",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 301761175,
            "range": "± 504455",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 949596113,
            "range": "± 1807981",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 614797185,
            "range": "± 752244",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1702161166,
            "range": "± 115633048",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 774578,
            "range": "± 9034",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 571485,
            "range": "± 27616",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2384758952,
            "range": "± 16763432",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2958232528,
            "range": "± 18906221",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 378666185,
            "range": "± 2491411",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 391270842,
            "range": "± 1346286",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 353,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 366,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 376,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 433,
            "range": "± 13",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "631e9bff6c2674d7887b6b461c68757cff1ef8f8",
          "message": "refactor: convert scan args into struct (#2976)\n\nI was trying to add a new option (load_blobs) to the scan exec and\r\nrealized the args had gotten a little out of control. I refactored them\r\ninto a struct. I've since abandoned my original idea (load_blobs) but\r\nwanted to see if others felt the refactor was worth keeping.\r\n\r\n---------\r\n\r\nCo-authored-by: Will Jones <willjones127@gmail.com>",
          "timestamp": "2024-10-16T05:03:52Z",
          "url": "https://github.com/lancedb/lance/commit/631e9bff6c2674d7887b6b461c68757cff1ef8f8"
        },
        "date": 1729071346552,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10801897537,
            "range": "± 57377333",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 402745328,
            "range": "± 1883342",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4766712577,
            "range": "± 25562662",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 284846370,
            "range": "± 667052",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 736908906,
            "range": "± 5393122",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 359202791,
            "range": "± 280458",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1174241389,
            "range": "± 1851900",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 733911861,
            "range": "± 3311146",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4221548,
            "range": "± 19653",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 803142307,
            "range": "± 11383936",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 278768729,
            "range": "± 1034179",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 280260886,
            "range": "± 1013278",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1930345863,
            "range": "± 5824619",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 661005302,
            "range": "± 4428404",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 335360894,
            "range": "± 1753803",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 334811648,
            "range": "± 254444",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1034985478,
            "range": "± 2106155",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 635144865,
            "range": "± 2404964",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5337691,
            "range": "± 79226",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 81929631,
            "range": "± 1347527",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26125514194,
            "range": "± 508573545",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 64365817,
            "range": "± 2251438",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4569326138,
            "range": "± 25649072",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 289666655,
            "range": "± 938672",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 672440573,
            "range": "± 4383301",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 363420945,
            "range": "± 557160",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 387244013,
            "range": "± 948765",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1067309292,
            "range": "± 6000476",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 672523623,
            "range": "± 3001363",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3686455,
            "range": "± 14610",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136660939,
            "range": "± 182234",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139989742,
            "range": "± 511333",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4348450087,
            "range": "± 14384474",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1848059869,
            "range": "± 11327796",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 790034608,
            "range": "± 4626728",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 373664267,
            "range": "± 1326112",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 266529249,
            "range": "± 811909",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 664559846,
            "range": "± 2683947",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 304045373,
            "range": "± 416236",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 302656435,
            "range": "± 357241",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 946661309,
            "range": "± 1361001",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613383388,
            "range": "± 828253",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1729268791,
            "range": "± 67356680",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 787872,
            "range": "± 5036",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 563756,
            "range": "± 31112",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2342565338,
            "range": "± 30431052",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2946402417,
            "range": "± 25891870",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 347013097,
            "range": "± 2316109",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 360199439,
            "range": "± 2582398",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 353,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 364,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 371,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 426,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "631e9bff6c2674d7887b6b461c68757cff1ef8f8",
          "message": "refactor: convert scan args into struct (#2976)\n\nI was trying to add a new option (load_blobs) to the scan exec and\r\nrealized the args had gotten a little out of control. I refactored them\r\ninto a struct. I've since abandoned my original idea (load_blobs) but\r\nwanted to see if others felt the refactor was worth keeping.\r\n\r\n---------\r\n\r\nCo-authored-by: Will Jones <willjones127@gmail.com>",
          "timestamp": "2024-10-16T05:03:52Z",
          "url": "https://github.com/lancedb/lance/commit/631e9bff6c2674d7887b6b461c68757cff1ef8f8"
        },
        "date": 1729157734252,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10815373513,
            "range": "± 40861579",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404610385,
            "range": "± 2034672",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4772771336,
            "range": "± 25406786",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 281361271,
            "range": "± 1297979",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 742539985,
            "range": "± 3627932",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 362941050,
            "range": "± 238206",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1180420617,
            "range": "± 2285708",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 742248368,
            "range": "± 22592804",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4318598,
            "range": "± 20426",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 810312865,
            "range": "± 5981470",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 275977360,
            "range": "± 1107807",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 276929694,
            "range": "± 985692",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1888986771,
            "range": "± 11643711",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 667998657,
            "range": "± 2782532",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 335039903,
            "range": "± 1466395",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 338090587,
            "range": "± 397125",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1046191275,
            "range": "± 2698746",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 637183420,
            "range": "± 2179303",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5241431,
            "range": "± 149828",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82794576,
            "range": "± 1076486",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26139819728,
            "range": "± 143295964",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 63161232,
            "range": "± 3398290",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4529615882,
            "range": "± 31490368",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 285721860,
            "range": "± 431544",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 676192919,
            "range": "± 2546257",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 366764759,
            "range": "± 1068236",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 392163856,
            "range": "± 330812",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1079867754,
            "range": "± 3336255",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 673322249,
            "range": "± 310549",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3678038,
            "range": "± 10539",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135235152,
            "range": "± 625242",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138794068,
            "range": "± 530207",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4334069871,
            "range": "± 18266001",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1858415778,
            "range": "± 18994739",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 797690299,
            "range": "± 3619600",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 375792490,
            "range": "± 2046571",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 269201858,
            "range": "± 291091",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 668472964,
            "range": "± 1703043",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 307778480,
            "range": "± 564653",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 306174125,
            "range": "± 496848",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 969803796,
            "range": "± 2499520",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 618574486,
            "range": "± 486433",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1742037816,
            "range": "± 44885767",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 792674,
            "range": "± 11849",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 560248,
            "range": "± 31892",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2386378210,
            "range": "± 18803040",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2967463568,
            "range": "± 13167677",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 354684846,
            "range": "± 3473460",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 369043054,
            "range": "± 2830612",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 380,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f9024cedcdbc2a57f60d67947f4c71af662e1b8e",
          "message": "fix: update cursor correctly in blob file API (#3018)\n\nWhen `read` returns it should update the cursor to the end of the data\r\njust read. However, we were calculating this as `end` and not `end -\r\nposition`.\r\n\r\nThe cursor is supposed to be relative to the start of the blob in the\r\nfile (e.g. 0 == `position`).",
          "timestamp": "2024-10-18T00:24:40Z",
          "url": "https://github.com/lancedb/lance/commit/f9024cedcdbc2a57f60d67947f4c71af662e1b8e"
        },
        "date": 1729244207147,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10797385814,
            "range": "± 27723060",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 400288795,
            "range": "± 2124664",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4709052164,
            "range": "± 32128610",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 272065729,
            "range": "± 799361",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 730006167,
            "range": "± 3829618",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 358790939,
            "range": "± 210303",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1163806272,
            "range": "± 1643816",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 725007259,
            "range": "± 1166656",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4277860,
            "range": "± 26962",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 813319997,
            "range": "± 6091199",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 268265690,
            "range": "± 544308",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 268887001,
            "range": "± 742965",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1795272221,
            "range": "± 9926458",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 668521621,
            "range": "± 2553166",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 333408402,
            "range": "± 118976",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 332078798,
            "range": "± 401086",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1031082735,
            "range": "± 1204110",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 634413055,
            "range": "± 613066",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5227556,
            "range": "± 78540",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84527423,
            "range": "± 762604",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26054107648,
            "range": "± 141348747",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 66456301,
            "range": "± 3764476",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4483381602,
            "range": "± 28339081",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 277410570,
            "range": "± 1025435",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 670565346,
            "range": "± 3002356",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 364154643,
            "range": "± 484895",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 387728183,
            "range": "± 494564",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1067715093,
            "range": "± 2690404",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 649735350,
            "range": "± 6205302",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3608640,
            "range": "± 12113",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135627401,
            "range": "± 179306",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139277772,
            "range": "± 417374",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4348903166,
            "range": "± 12697663",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1855742024,
            "range": "± 7391365",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 790405192,
            "range": "± 5527977",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374329916,
            "range": "± 1327455",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 264890146,
            "range": "± 3029394",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 661457501,
            "range": "± 2432321",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 303035271,
            "range": "± 430742",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 303912310,
            "range": "± 539120",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 948615270,
            "range": "± 1677822",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 609312856,
            "range": "± 4163450",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1766408785,
            "range": "± 84988183",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 797661,
            "range": "± 3881",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 547553,
            "range": "± 28271",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2366676095,
            "range": "± 38460421",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2973958473,
            "range": "± 17657008",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 382508991,
            "range": "± 2670806",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 400431903,
            "range": "± 4544924",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 353,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 431,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f9024cedcdbc2a57f60d67947f4c71af662e1b8e",
          "message": "fix: update cursor correctly in blob file API (#3018)\n\nWhen `read` returns it should update the cursor to the end of the data\r\njust read. However, we were calculating this as `end` and not `end -\r\nposition`.\r\n\r\nThe cursor is supposed to be relative to the start of the blob in the\r\nfile (e.g. 0 == `position`).",
          "timestamp": "2024-10-18T00:24:40Z",
          "url": "https://github.com/lancedb/lance/commit/f9024cedcdbc2a57f60d67947f4c71af662e1b8e"
        },
        "date": 1729330611501,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10830989582,
            "range": "± 36517978",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 406769045,
            "range": "± 2954919",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4756783520,
            "range": "± 14592598",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276186100,
            "range": "± 721921",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 735301037,
            "range": "± 2294682",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 364851386,
            "range": "± 5652112",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1172966146,
            "range": "± 3786646",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 727649492,
            "range": "± 1200290",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4303675,
            "range": "± 19450",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 800991379,
            "range": "± 8380802",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 272102907,
            "range": "± 644171",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272979922,
            "range": "± 654317",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1810545527,
            "range": "± 19052207",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 667719217,
            "range": "± 3704855",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 335150155,
            "range": "± 274543",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 335687502,
            "range": "± 242604",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1045990246,
            "range": "± 10847554",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 640643479,
            "range": "± 788692",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5219579,
            "range": "± 62294",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83183176,
            "range": "± 1277668",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26541377460,
            "range": "± 119443653",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 64521734,
            "range": "± 2642445",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4534582950,
            "range": "± 18784454",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 280752865,
            "range": "± 695869",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 669002401,
            "range": "± 3462893",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 365068848,
            "range": "± 473477",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 385279323,
            "range": "± 1456456",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1082376163,
            "range": "± 2817907",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 665112086,
            "range": "± 546506",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3659203,
            "range": "± 13713",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136487245,
            "range": "± 433333",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138973609,
            "range": "± 270127",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4314337371,
            "range": "± 31816017",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1881979582,
            "range": "± 7456223",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 810728515,
            "range": "± 14237346",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374659475,
            "range": "± 1605867",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 262840697,
            "range": "± 335951",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 669761908,
            "range": "± 1914045",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 307990520,
            "range": "± 3882650",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 303720742,
            "range": "± 513111",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 965793258,
            "range": "± 921286",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 620751586,
            "range": "± 5490309",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1738883194,
            "range": "± 80699319",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 793883,
            "range": "± 5400",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 535672,
            "range": "± 31435",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2369440469,
            "range": "± 23272091",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2983262289,
            "range": "± 154776170",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 375311419,
            "range": "± 2521996",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 393509358,
            "range": "± 3755073",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 352,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 371,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f9024cedcdbc2a57f60d67947f4c71af662e1b8e",
          "message": "fix: update cursor correctly in blob file API (#3018)\n\nWhen `read` returns it should update the cursor to the end of the data\r\njust read. However, we were calculating this as `end` and not `end -\r\nposition`.\r\n\r\nThe cursor is supposed to be relative to the start of the blob in the\r\nfile (e.g. 0 == `position`).",
          "timestamp": "2024-10-18T00:24:40Z",
          "url": "https://github.com/lancedb/lance/commit/f9024cedcdbc2a57f60d67947f4c71af662e1b8e"
        },
        "date": 1729416959421,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10810194911,
            "range": "± 38282055",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 403321680,
            "range": "± 861246",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4758830122,
            "range": "± 19450767",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 275847850,
            "range": "± 737116",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 739886035,
            "range": "± 3573826",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 360766120,
            "range": "± 213027",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1174382773,
            "range": "± 9018428",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 737774968,
            "range": "± 1594924",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4271580,
            "range": "± 22049",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 806973967,
            "range": "± 6940807",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 270918452,
            "range": "± 552783",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272646713,
            "range": "± 697198",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1801498010,
            "range": "± 13137629",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 670462884,
            "range": "± 2757278",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 338381289,
            "range": "± 160754",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 338571926,
            "range": "± 1347683",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1049093094,
            "range": "± 2055400",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 640254915,
            "range": "± 5553601",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5197293,
            "range": "± 49321",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84728563,
            "range": "± 2165580",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26340473091,
            "range": "± 185968501",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 63997924,
            "range": "± 3513734",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4526620010,
            "range": "± 23651463",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 281481762,
            "range": "± 1033875",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 673350959,
            "range": "± 1919288",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 362533473,
            "range": "± 996219",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 389419679,
            "range": "± 677297",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1082514882,
            "range": "± 2417658",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 673027844,
            "range": "± 813741",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3692339,
            "range": "± 22243",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136096172,
            "range": "± 426609",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139830068,
            "range": "± 798095",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4318982490,
            "range": "± 27457716",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1870839115,
            "range": "± 10777008",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 800745045,
            "range": "± 6903077",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 372336368,
            "range": "± 1125838",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268258847,
            "range": "± 1668323",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 667801303,
            "range": "± 1682333",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 302803455,
            "range": "± 298340",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 303557321,
            "range": "± 414520",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 965065648,
            "range": "± 1021409",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 618192703,
            "range": "± 798595",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1732437529,
            "range": "± 60513270",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 769845,
            "range": "± 11177",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 555907,
            "range": "± 35896",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2276716445,
            "range": "± 36414539",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2987707080,
            "range": "± 10676872",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 380542401,
            "range": "± 6464387",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 396918035,
            "range": "± 1710182",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 352,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 372,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f9024cedcdbc2a57f60d67947f4c71af662e1b8e",
          "message": "fix: update cursor correctly in blob file API (#3018)\n\nWhen `read` returns it should update the cursor to the end of the data\r\njust read. However, we were calculating this as `end` and not `end -\r\nposition`.\r\n\r\nThe cursor is supposed to be relative to the start of the blob in the\r\nfile (e.g. 0 == `position`).",
          "timestamp": "2024-10-18T00:24:40Z",
          "url": "https://github.com/lancedb/lance/commit/f9024cedcdbc2a57f60d67947f4c71af662e1b8e"
        },
        "date": 1729503396491,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10819743362,
            "range": "± 37409945",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 410786114,
            "range": "± 3040436",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4771800152,
            "range": "± 17733452",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 277510400,
            "range": "± 9565973",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 740507291,
            "range": "± 2779911",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 360653967,
            "range": "± 2744704",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1175367046,
            "range": "± 1008146",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 737969004,
            "range": "± 1279589",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4251263,
            "range": "± 7963",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 809455876,
            "range": "± 5284406",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 271915704,
            "range": "± 985881",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 271098296,
            "range": "± 302521",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1778851047,
            "range": "± 13844516",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 672563893,
            "range": "± 3010965",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 328496173,
            "range": "± 1468735",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 337593765,
            "range": "± 441618",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1051545698,
            "range": "± 1429826",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 642089378,
            "range": "± 3664167",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5273804,
            "range": "± 76214",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84560599,
            "range": "± 1240056",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26372558408,
            "range": "± 63375141",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 68145309,
            "range": "± 4691744",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4521385140,
            "range": "± 22283037",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 281583826,
            "range": "± 722853",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 672482851,
            "range": "± 17532970",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 367847518,
            "range": "± 1521726",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 389953587,
            "range": "± 1270903",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1099141412,
            "range": "± 1642092",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 678693945,
            "range": "± 459954",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3685039,
            "range": "± 17018",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136256380,
            "range": "± 294823",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 140157815,
            "range": "± 2509892",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4277766524,
            "range": "± 40814346",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1870708846,
            "range": "± 6435484",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 806671749,
            "range": "± 5102316",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 375413867,
            "range": "± 904441",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 267082168,
            "range": "± 225237",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 663556145,
            "range": "± 1668132",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 307017319,
            "range": "± 288902",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305800226,
            "range": "± 1466131",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 959206434,
            "range": "± 1732028",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613399661,
            "range": "± 994963",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1712440751,
            "range": "± 55116748",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 788787,
            "range": "± 13163",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 546292,
            "range": "± 25415",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2376714699,
            "range": "± 50810125",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2946665149,
            "range": "± 10352715",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 348871504,
            "range": "± 4199964",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 363753919,
            "range": "± 3602054",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 351,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 364,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 372,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "BubbleCal",
            "username": "BubbleCal",
            "email": "bubble-cal@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7413344dedcefd6bf2251ef5d5de85771f615aeb",
          "message": "feat: support FTS on multiple fields (#3025)",
          "timestamp": "2024-10-22T02:57:20Z",
          "url": "https://github.com/lancedb/lance/commit/7413344dedcefd6bf2251ef5d5de85771f615aeb"
        },
        "date": 1729589794874,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10862637955,
            "range": "± 34498135",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 409744100,
            "range": "± 1682548",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4759541031,
            "range": "± 26094308",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 275637693,
            "range": "± 1082562",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 738351028,
            "range": "± 1997455",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 364156868,
            "range": "± 230967",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1175854088,
            "range": "± 2969746",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 741702169,
            "range": "± 10365054",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4305130,
            "range": "± 185878",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 808112534,
            "range": "± 9543805",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 271286231,
            "range": "± 889642",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 271253583,
            "range": "± 497388",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1838177905,
            "range": "± 7983761",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 673500503,
            "range": "± 2130167",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 338347543,
            "range": "± 1487487",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 338309021,
            "range": "± 162319",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1045710209,
            "range": "± 1986289",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 639110226,
            "range": "± 469832",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5272996,
            "range": "± 74496",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 85088260,
            "range": "± 1273016",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 27958289476,
            "range": "± 424361908",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 74468807,
            "range": "± 5595476",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4563299513,
            "range": "± 27583557",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 281309231,
            "range": "± 967433",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 674202125,
            "range": "± 2262658",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 368115199,
            "range": "± 796183",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 390622553,
            "range": "± 716077",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1087006949,
            "range": "± 1006141",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 674750920,
            "range": "± 674242",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3671127,
            "range": "± 10914",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136329081,
            "range": "± 208817",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139778180,
            "range": "± 251824",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4335124271,
            "range": "± 15952359",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1877696038,
            "range": "± 10607991",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 800892481,
            "range": "± 9976196",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374761025,
            "range": "± 1485372",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 266628531,
            "range": "± 317893",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 668798193,
            "range": "± 1841533",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 305345813,
            "range": "± 605936",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 304052817,
            "range": "± 526486",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 960387601,
            "range": "± 1264723",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613575295,
            "range": "± 1246253",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1735693037,
            "range": "± 70331706",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 780339,
            "range": "± 11782",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 919715,
            "range": "± 18682",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2408247029,
            "range": "± 21703909",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2983999513,
            "range": "± 19075849",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 345501875,
            "range": "± 2664070",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 355947411,
            "range": "± 3239557",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 366,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 381,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "BubbleCal",
            "username": "BubbleCal",
            "email": "bubble-cal@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "536e73d9b850ac366b46606b42a496b56c29fa98",
          "message": "chore: make clippy happy (#3035)\n\nfix this\r\n[check](https://github.com/lancedb/lancedb/actions/runs/11455252884/job/31870908428?pr=1762)\r\n\r\nSigned-off-by: BubbleCal <bubble-cal@outlook.com>\r\nCo-authored-by: Ryan Green <ryang@ryang.ca>",
          "timestamp": "2024-10-22T15:13:46Z",
          "url": "https://github.com/lancedb/lance/commit/536e73d9b850ac366b46606b42a496b56c29fa98"
        },
        "date": 1729676167366,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10822969172,
            "range": "± 74201189",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 406069605,
            "range": "± 6058268",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4739957490,
            "range": "± 39698199",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 278716772,
            "range": "± 888447",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 740067830,
            "range": "± 5690923",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 365422326,
            "range": "± 339138",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1174413303,
            "range": "± 2392154",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 736674806,
            "range": "± 2282791",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4304558,
            "range": "± 35729",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 802753613,
            "range": "± 7419709",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 273778944,
            "range": "± 642343",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 274385888,
            "range": "± 606077",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1804793642,
            "range": "± 12451458",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 672552157,
            "range": "± 2113713",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 335662062,
            "range": "± 803779",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 336324583,
            "range": "± 204145",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1044044171,
            "range": "± 2583627",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 623791686,
            "range": "± 799040",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5257876,
            "range": "± 55669",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83599693,
            "range": "± 1467883",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26266690438,
            "range": "± 78915002",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 62161854,
            "range": "± 2429506",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4563477746,
            "range": "± 23621354",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 284515357,
            "range": "± 5468150",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 670814915,
            "range": "± 1279871",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 367377883,
            "range": "± 576214",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 391021801,
            "range": "± 770438",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1089057441,
            "range": "± 4325889",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 676846152,
            "range": "± 18939325",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3655044,
            "range": "± 13391",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 138928511,
            "range": "± 2244449",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139973631,
            "range": "± 361725",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4332369627,
            "range": "± 25420864",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1858563554,
            "range": "± 12727532",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 802150112,
            "range": "± 5214416",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 377451942,
            "range": "± 2044446",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268099054,
            "range": "± 443669",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 668402589,
            "range": "± 2064415",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 305158898,
            "range": "± 404832",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305613005,
            "range": "± 517646",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 957305597,
            "range": "± 1530156",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 614055035,
            "range": "± 821298",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1708706094,
            "range": "± 50288111",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 774960,
            "range": "± 13618",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 928631,
            "range": "± 13328",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2377554003,
            "range": "± 13544322",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3010672092,
            "range": "± 107806217",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 348801921,
            "range": "± 3274847",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 358080446,
            "range": "± 3190096",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 356,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 370,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 377,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "BubbleCal",
            "username": "BubbleCal",
            "email": "bubble-cal@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "536e73d9b850ac366b46606b42a496b56c29fa98",
          "message": "chore: make clippy happy (#3035)\n\nfix this\r\n[check](https://github.com/lancedb/lancedb/actions/runs/11455252884/job/31870908428?pr=1762)\r\n\r\nSigned-off-by: BubbleCal <bubble-cal@outlook.com>\r\nCo-authored-by: Ryan Green <ryang@ryang.ca>",
          "timestamp": "2024-10-22T15:13:46Z",
          "url": "https://github.com/lancedb/lance/commit/536e73d9b850ac366b46606b42a496b56c29fa98"
        },
        "date": 1729762619380,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10822841331,
            "range": "± 21015759",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 403594202,
            "range": "± 2022531",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4755336833,
            "range": "± 20879236",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 279801997,
            "range": "± 1990724",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 740086634,
            "range": "± 4236957",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 359134537,
            "range": "± 315086",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1184169739,
            "range": "± 2431491",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 737392108,
            "range": "± 19322506",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4342267,
            "range": "± 168797",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 810590497,
            "range": "± 5780981",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 276002468,
            "range": "± 517108",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 276439474,
            "range": "± 491773",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1808807793,
            "range": "± 6490016",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 668673634,
            "range": "± 1344726",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 337436652,
            "range": "± 2842209",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 338263859,
            "range": "± 514537",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1056066071,
            "range": "± 1447523",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 641711946,
            "range": "± 582681",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5260649,
            "range": "± 42276",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83235090,
            "range": "± 1211246",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26259019447,
            "range": "± 73595971",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 65563176,
            "range": "± 4272318",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4501099856,
            "range": "± 22520129",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 286852024,
            "range": "± 1076555",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 675101946,
            "range": "± 2106637",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 365452764,
            "range": "± 601732",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 392595602,
            "range": "± 593555",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1083096391,
            "range": "± 1406499",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 666521454,
            "range": "± 671788",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3686434,
            "range": "± 8001",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135871888,
            "range": "± 265459",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139484721,
            "range": "± 617858",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4264478620,
            "range": "± 14674686",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1835974982,
            "range": "± 9626978",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 791946968,
            "range": "± 6876185",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 377476011,
            "range": "± 776431",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268216580,
            "range": "± 125942",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 664433171,
            "range": "± 1973300",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 305228451,
            "range": "± 269524",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 303561177,
            "range": "± 282991",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 967571826,
            "range": "± 5834474",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 617615400,
            "range": "± 827386",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1748960804,
            "range": "± 61133425",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 790920,
            "range": "± 10644",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 930873,
            "range": "± 14767",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2396513152,
            "range": "± 21843041",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2966374694,
            "range": "± 96120111",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 376918214,
            "range": "± 3845384",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 393295797,
            "range": "± 3274982",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 353,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 374,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 427,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b1abfff9b6cf2aaa3f9d04e53d6a33ff9a6340a9",
          "message": "feat: add 2.1 read path (#2968)\n\nUnlike the write path we were not able to get away with subtle changes\r\nto the existing traits. Most of the read traits needed to be duplicated.\r\nOn the bright side, there is very little impact to the existing reader\r\ncode though :)",
          "timestamp": "2024-10-25T01:36:48Z",
          "url": "https://github.com/lancedb/lance/commit/b1abfff9b6cf2aaa3f9d04e53d6a33ff9a6340a9"
        },
        "date": 1729849034119,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10880122795,
            "range": "± 56613235",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 408224709,
            "range": "± 1951908",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4734862116,
            "range": "± 26688108",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 277575362,
            "range": "± 3646862",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 742579819,
            "range": "± 2915137",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 355968648,
            "range": "± 304373",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1178169875,
            "range": "± 2833802",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 737151530,
            "range": "± 1942746",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4224699,
            "range": "± 16820",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 814792286,
            "range": "± 8336398",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 273048184,
            "range": "± 926535",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272533870,
            "range": "± 608358",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1889854910,
            "range": "± 11681603",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 667975521,
            "range": "± 3120434",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334409075,
            "range": "± 1068376",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 337275166,
            "range": "± 217118",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1050326336,
            "range": "± 3378297",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 634701643,
            "range": "± 667999",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5277223,
            "range": "± 52650",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 86136501,
            "range": "± 1137482",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26301103211,
            "range": "± 55663265",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 65194143,
            "range": "± 5151468",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4561768607,
            "range": "± 21757467",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 282322339,
            "range": "± 921135",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 676592599,
            "range": "± 4210015",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 368096270,
            "range": "± 805973",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 390008957,
            "range": "± 2747899",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1091358542,
            "range": "± 1346380",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 679884661,
            "range": "± 1159263",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3635110,
            "range": "± 215107",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136542196,
            "range": "± 1544997",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139810776,
            "range": "± 390462",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4297797583,
            "range": "± 16034208",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1849799067,
            "range": "± 7770403",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 792234459,
            "range": "± 6605855",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 375120642,
            "range": "± 1797000",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268977164,
            "range": "± 359542",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 667603553,
            "range": "± 1530777",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 310418085,
            "range": "± 16447649",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 304324627,
            "range": "± 222071",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 956534064,
            "range": "± 1395093",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613733193,
            "range": "± 671784",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1716412743,
            "range": "± 36517926",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 783187,
            "range": "± 4346",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1194489,
            "range": "± 22777",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2374618348,
            "range": "± 28279384",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2945005484,
            "range": "± 16490933",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 348068347,
            "range": "± 2674389",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 362842294,
            "range": "± 2557230",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 356,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 367,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 374,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c9cabc1c197c9de4bf67aaa6f741227dfdcc2f0e",
          "message": "feat: more flexible and sophisticated handling of non-null constraints (#2467)\n\nPreviously, we used batch schema to check if incoming data was\r\ncompatible with the dataset. This has a few problems:\r\n\r\n* You couldn't add a non-nullable batch to a nullable dataset even\r\nthough this should be perfectly valid\r\n* You couldn't add a nullable batch to a non-nullable dataset even when\r\nthe batch didn't contain nulls\r\n* It's possible (and with pyarrow, easy) to create a batch that has\r\nnulls but the fields are marked non-null, this led to confusing errors.\r\n\r\nThis PR resolves those issues by checking the null count of the actual\r\narrays instead of relying on the schema assigned to the data.\r\n\r\nCloses #1936",
          "timestamp": "2024-10-25T17:02:43Z",
          "url": "https://github.com/lancedb/lance/commit/c9cabc1c197c9de4bf67aaa6f741227dfdcc2f0e"
        },
        "date": 1729935401959,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10769942202,
            "range": "± 80072717",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 405782049,
            "range": "± 9599537",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4777230738,
            "range": "± 18247859",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276214293,
            "range": "± 518359",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 739331896,
            "range": "± 4476734",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 364010055,
            "range": "± 520075",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1187639752,
            "range": "± 10509703",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 735305951,
            "range": "± 1953846",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4310391,
            "range": "± 23735",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 812642695,
            "range": "± 6103279",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 271433626,
            "range": "± 444338",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272366403,
            "range": "± 627457",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1873116768,
            "range": "± 10324773",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 673165210,
            "range": "± 1318222",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334751441,
            "range": "± 1839201",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 338072852,
            "range": "± 1359406",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1053829730,
            "range": "± 2084472",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 643026101,
            "range": "± 736729",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5310778,
            "range": "± 89498",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 85595900,
            "range": "± 1591374",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26184389192,
            "range": "± 189601823",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 64863921,
            "range": "± 4841780",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4527050647,
            "range": "± 13288994",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 280966150,
            "range": "± 490958",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 673690965,
            "range": "± 2517960",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 367309839,
            "range": "± 178300",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 388942962,
            "range": "± 382544",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1090659979,
            "range": "± 17210939",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 670286425,
            "range": "± 1618072",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3705247,
            "range": "± 10385",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136516996,
            "range": "± 319707",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139347553,
            "range": "± 449120",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4272068270,
            "range": "± 34573883",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1869183503,
            "range": "± 14451616",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 809027555,
            "range": "± 8496644",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 375509227,
            "range": "± 1141582",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 267475229,
            "range": "± 243910",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 667294709,
            "range": "± 7804904",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 307291767,
            "range": "± 381203",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305710144,
            "range": "± 341739",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 968026049,
            "range": "± 1062373",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 618136724,
            "range": "± 900894",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1726260154,
            "range": "± 53411939",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 793457,
            "range": "± 8226",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1176172,
            "range": "± 24755",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2362269459,
            "range": "± 21040246",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2959429090,
            "range": "± 21462535",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 378513077,
            "range": "± 3857886",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 390153687,
            "range": "± 3033888",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 356,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 374,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c9cabc1c197c9de4bf67aaa6f741227dfdcc2f0e",
          "message": "feat: more flexible and sophisticated handling of non-null constraints (#2467)\n\nPreviously, we used batch schema to check if incoming data was\r\ncompatible with the dataset. This has a few problems:\r\n\r\n* You couldn't add a non-nullable batch to a nullable dataset even\r\nthough this should be perfectly valid\r\n* You couldn't add a nullable batch to a non-nullable dataset even when\r\nthe batch didn't contain nulls\r\n* It's possible (and with pyarrow, easy) to create a batch that has\r\nnulls but the fields are marked non-null, this led to confusing errors.\r\n\r\nThis PR resolves those issues by checking the null count of the actual\r\narrays instead of relying on the schema assigned to the data.\r\n\r\nCloses #1936",
          "timestamp": "2024-10-25T17:02:43Z",
          "url": "https://github.com/lancedb/lance/commit/c9cabc1c197c9de4bf67aaa6f741227dfdcc2f0e"
        },
        "date": 1730021768453,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10794434170,
            "range": "± 25441770",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404135317,
            "range": "± 13524009",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4797846455,
            "range": "± 14231429",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276999891,
            "range": "± 718627",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 742647406,
            "range": "± 14983904",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 363041226,
            "range": "± 299720",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1177099685,
            "range": "± 1206099",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 720126458,
            "range": "± 5471251",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4336929,
            "range": "± 46162",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 803631158,
            "range": "± 6272913",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 273636877,
            "range": "± 4604107",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 273087332,
            "range": "± 728454",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1848067788,
            "range": "± 12781954",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 668654996,
            "range": "± 1830745",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334468084,
            "range": "± 159793",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 338240533,
            "range": "± 1036675",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1042491090,
            "range": "± 1857969",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 638236454,
            "range": "± 897363",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5250697,
            "range": "± 34316",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84658073,
            "range": "± 1126732",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26296236273,
            "range": "± 571759214",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 65250188,
            "range": "± 3706012",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4508819008,
            "range": "± 27320317",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 282238782,
            "range": "± 1331687",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 671479320,
            "range": "± 3714439",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 366191416,
            "range": "± 1044624",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 386671947,
            "range": "± 449688",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1087845565,
            "range": "± 39109529",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 672493894,
            "range": "± 507405",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3632189,
            "range": "± 14511",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135970564,
            "range": "± 217934",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 140050473,
            "range": "± 286515",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4330398782,
            "range": "± 23481700",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1865753485,
            "range": "± 9493514",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 799429409,
            "range": "± 5529752",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374453416,
            "range": "± 1890792",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 267547643,
            "range": "± 223604",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 668214845,
            "range": "± 3426272",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 304521256,
            "range": "± 577108",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 303540747,
            "range": "± 413605",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 959933449,
            "range": "± 1473641",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 619166750,
            "range": "± 1075015",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1740160547,
            "range": "± 78446736",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 795365,
            "range": "± 4453",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1203815,
            "range": "± 29047",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2414738456,
            "range": "± 21535174",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2989278754,
            "range": "± 9102690",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 351369511,
            "range": "± 3178833",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 370588404,
            "range": "± 4707765",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 354,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 369,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 374,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 435,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c9cabc1c197c9de4bf67aaa6f741227dfdcc2f0e",
          "message": "feat: more flexible and sophisticated handling of non-null constraints (#2467)\n\nPreviously, we used batch schema to check if incoming data was\r\ncompatible with the dataset. This has a few problems:\r\n\r\n* You couldn't add a non-nullable batch to a nullable dataset even\r\nthough this should be perfectly valid\r\n* You couldn't add a nullable batch to a non-nullable dataset even when\r\nthe batch didn't contain nulls\r\n* It's possible (and with pyarrow, easy) to create a batch that has\r\nnulls but the fields are marked non-null, this led to confusing errors.\r\n\r\nThis PR resolves those issues by checking the null count of the actual\r\narrays instead of relying on the schema assigned to the data.\r\n\r\nCloses #1936",
          "timestamp": "2024-10-25T17:02:43Z",
          "url": "https://github.com/lancedb/lance/commit/c9cabc1c197c9de4bf67aaa6f741227dfdcc2f0e"
        },
        "date": 1730108180747,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10754219170,
            "range": "± 65204056",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 405415355,
            "range": "± 3312457",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4745810568,
            "range": "± 17218632",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276273780,
            "range": "± 873479",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 736108893,
            "range": "± 2236778",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 361994024,
            "range": "± 271705",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1173343387,
            "range": "± 1999176",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 721443326,
            "range": "± 2557013",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4276974,
            "range": "± 29143",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 804929820,
            "range": "± 13437530",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 271771648,
            "range": "± 595290",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272433828,
            "range": "± 435475",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1810407191,
            "range": "± 16604656",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 671771755,
            "range": "± 2024670",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 338851733,
            "range": "± 153879",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 336037968,
            "range": "± 246502",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1048552122,
            "range": "± 50870663",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 638243554,
            "range": "± 736861",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5256600,
            "range": "± 89645",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84647670,
            "range": "± 1850436",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26320975770,
            "range": "± 130366802",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 65996034,
            "range": "± 3424266",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4494857519,
            "range": "± 37202488",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 280052520,
            "range": "± 703264",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 670485291,
            "range": "± 1887549",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 365884688,
            "range": "± 744263",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 390516097,
            "range": "± 876867",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1084879373,
            "range": "± 3505179",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 675606465,
            "range": "± 445500",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3675841,
            "range": "± 29651",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136406155,
            "range": "± 178506",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139536689,
            "range": "± 178042",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4335134347,
            "range": "± 21404887",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1871943544,
            "range": "± 8662206",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 798826607,
            "range": "± 6939030",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 377292831,
            "range": "± 1729004",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268353230,
            "range": "± 1460009",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 667649442,
            "range": "± 4002937",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 307455070,
            "range": "± 366968",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 303702876,
            "range": "± 1343790",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 964237536,
            "range": "± 965621",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 618106955,
            "range": "± 706038",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1727563411,
            "range": "± 79492791",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 778018,
            "range": "± 4013",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1178575,
            "range": "± 21435",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2376292076,
            "range": "± 16308084",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2974102385,
            "range": "± 93410807",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 375358681,
            "range": "± 2159785",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 394885513,
            "range": "± 5626533",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 354,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 374,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rob Meng",
            "username": "chebbyChefNEQ",
            "email": "rob.xu.meng@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "411568fccf372285722b9ee67634e0099c8ded16",
          "message": "perf: use total cmp for ordered float (#3059)",
          "timestamp": "2024-10-29T03:13:38Z",
          "url": "https://github.com/lancedb/lance/commit/411568fccf372285722b9ee67634e0099c8ded16"
        },
        "date": 1730194628389,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10938888521,
            "range": "± 63787158",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 400972600,
            "range": "± 2657681",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4729108778,
            "range": "± 27948913",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276112867,
            "range": "± 2070408",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 736258600,
            "range": "± 3157004",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 358313596,
            "range": "± 188618",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1181021253,
            "range": "± 24808249",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 734955307,
            "range": "± 4753291",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4301430,
            "range": "± 20627",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 815528406,
            "range": "± 12232233",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 271290168,
            "range": "± 778799",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 271989384,
            "range": "± 791565",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1854992429,
            "range": "± 10924400",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 672224155,
            "range": "± 2507139",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 335547915,
            "range": "± 139676",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 336708283,
            "range": "± 543430",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1045789733,
            "range": "± 1207396",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 639538476,
            "range": "± 2433494",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5276931,
            "range": "± 43470",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82761603,
            "range": "± 1278409",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26508585412,
            "range": "± 157445561",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 66850025,
            "range": "± 1909439",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4527862303,
            "range": "± 14774924",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 281083779,
            "range": "± 1034168",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 672319124,
            "range": "± 24666859",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 367317817,
            "range": "± 546610",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 390074166,
            "range": "± 1451596",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1087015356,
            "range": "± 1808481",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 679711932,
            "range": "± 325181",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3676478,
            "range": "± 19340",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135572656,
            "range": "± 223609",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139389357,
            "range": "± 415292",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4303474873,
            "range": "± 29226216",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1877663972,
            "range": "± 12120244",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 796124843,
            "range": "± 6076035",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 373284271,
            "range": "± 1639162",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268891019,
            "range": "± 321380",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 666400210,
            "range": "± 1359367",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 305418148,
            "range": "± 534180",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305563048,
            "range": "± 1179978",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 963303129,
            "range": "± 2301483",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 617689590,
            "range": "± 12643829",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1731265741,
            "range": "± 120824394",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 780075,
            "range": "± 9145",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1186047,
            "range": "± 35966",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2356839931,
            "range": "± 23186285",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2950351984,
            "range": "± 14446985",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 346509458,
            "range": "± 3885675",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 358720503,
            "range": "± 3562311",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 375,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 431,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e183222b3d8fa50dc57070d0aaa02bb851342d7",
          "message": "chore: enable nightly run file verification (#3063)\n\nThis PR moves the\r\n`.github/workflows/write_read_roundtrip_test/action.yml` to\r\n`.github/workflows/file_verification.yml` to enable it to be `github\r\naction triggered`.\r\n\r\nThis PR also enables nightly run file verification workflow and renames\r\na directory",
          "timestamp": "2024-10-29T20:50:05Z",
          "url": "https://github.com/lancedb/lance/commit/9e183222b3d8fa50dc57070d0aaa02bb851342d7"
        },
        "date": 1730280978281,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10846458898,
            "range": "± 54874216",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404491218,
            "range": "± 1503252",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4701778377,
            "range": "± 28449134",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 278624962,
            "range": "± 437322",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 732003168,
            "range": "± 1811326",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 361315337,
            "range": "± 370533",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1185369526,
            "range": "± 2914089",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 737804829,
            "range": "± 1952165",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4377438,
            "range": "± 96598",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 802551292,
            "range": "± 4579984",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 274037600,
            "range": "± 1731853",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 274262576,
            "range": "± 3326706",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1824596840,
            "range": "± 7693691",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 669963843,
            "range": "± 2215724",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334773445,
            "range": "± 3145570",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 338346533,
            "range": "± 931688",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1049884555,
            "range": "± 2589435",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 637393959,
            "range": "± 13183224",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5274061,
            "range": "± 129343",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82563526,
            "range": "± 1563042",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26283486684,
            "range": "± 143476538",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 65191142,
            "range": "± 3298463",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4493263100,
            "range": "± 17060743",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 281850880,
            "range": "± 509381",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 673400784,
            "range": "± 1844033",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 364473893,
            "range": "± 568844",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 391482325,
            "range": "± 674826",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1082837931,
            "range": "± 3662455",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 663966343,
            "range": "± 1175281",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3667452,
            "range": "± 9138",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136291149,
            "range": "± 408037",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139420765,
            "range": "± 491075",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4297502172,
            "range": "± 28194573",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1870790641,
            "range": "± 7098150",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 804741806,
            "range": "± 4840175",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 375875893,
            "range": "± 1349246",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 269341036,
            "range": "± 392671",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 667243623,
            "range": "± 2816864",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 304855973,
            "range": "± 414937",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 303309763,
            "range": "± 333531",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 970086369,
            "range": "± 2354915",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613238583,
            "range": "± 494947",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1740736960,
            "range": "± 61130893",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 764043,
            "range": "± 9636",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1191016,
            "range": "± 42769",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2375136390,
            "range": "± 18024027",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2920395400,
            "range": "± 10292216",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 348877833,
            "range": "± 3127953",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 354730575,
            "range": "± 2435267",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 366,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 375,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "huangzhaowei",
            "username": "SaintBacchus",
            "email": "carlmartinmax@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2377632a47c39211257dca5c05a5830e38e38fcd",
          "message": "feat: support build lance java with rust release mode (#3051)\n\nNow the lance java package only support build with debug mode.\r\nAdd a propertiy to support build with release mode.\r\n```bash\r\n## release mode\r\nmvn clean package -DskipTests -Drust.release.build=true\r\n\r\n## debug mode(default)\r\nmvn clean package -DskipTests\r\n```",
          "timestamp": "2024-10-30T23:36:18Z",
          "url": "https://github.com/lancedb/lance/commit/2377632a47c39211257dca5c05a5830e38e38fcd"
        },
        "date": 1730367415335,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10883832645,
            "range": "± 80778609",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 403294993,
            "range": "± 4919790",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4741516119,
            "range": "± 30599979",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276917811,
            "range": "± 476485",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 735074531,
            "range": "± 3120406",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 356007836,
            "range": "± 346273",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1178251767,
            "range": "± 2905282",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 721199085,
            "range": "± 2179679",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4267647,
            "range": "± 17457",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 811749281,
            "range": "± 4574987",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 273814622,
            "range": "± 465549",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 274235169,
            "range": "± 1279391",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1826165488,
            "range": "± 10578636",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 671019276,
            "range": "± 1050364",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334201229,
            "range": "± 331035",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 337506133,
            "range": "± 454801",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1044463005,
            "range": "± 1758102",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 640605278,
            "range": "± 783404",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5239169,
            "range": "± 75562",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83893928,
            "range": "± 1446276",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26437690068,
            "range": "± 137460195",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 67030520,
            "range": "± 3075744",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4551444498,
            "range": "± 13845088",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 283167181,
            "range": "± 1598523",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 672879409,
            "range": "± 2324934",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 367949564,
            "range": "± 966805",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 392340400,
            "range": "± 729946",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1077771237,
            "range": "± 2809719",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 672959368,
            "range": "± 526645",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3652418,
            "range": "± 16492",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135759516,
            "range": "± 3220628",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139553336,
            "range": "± 473991",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4287294484,
            "range": "± 12409516",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1864272396,
            "range": "± 10255797",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 798579568,
            "range": "± 3582828",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374097754,
            "range": "± 1932517",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 267826208,
            "range": "± 442739",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 662183212,
            "range": "± 2442049",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 306461040,
            "range": "± 352619",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 304887504,
            "range": "± 4626499",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 953468044,
            "range": "± 1141174",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 616085963,
            "range": "± 18160166",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1735799265,
            "range": "± 109988816",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 757004,
            "range": "± 8396",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1178578,
            "range": "± 13091",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2290260431,
            "range": "± 42818738",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2943420960,
            "range": "± 148390310",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 344509447,
            "range": "± 3338941",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 357447072,
            "range": "± 3218547",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 362,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 431,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "54053e62daf94bc995f7868e9d0e2ba3460721fe",
          "message": "feat: bitpack with miniblock (#3067)\n\nThis PR tries to add bit-packing encoding in the mini-block encoding\r\npath.\r\nIn this PR, each chunk(1024 values) has it's own bit-width parameter and\r\nit's stored in each chunk\r\n\r\nI found that the current implementation to get the `bit_width` of every\r\n1024 values is very slow and hurts the write speed significantly, more\r\ninvestigation needed, I will deal with it by filling a different issue\r\nand PR.\r\n\r\n#3052",
          "timestamp": "2024-10-31T21:01:00Z",
          "url": "https://github.com/lancedb/lance/commit/54053e62daf94bc995f7868e9d0e2ba3460721fe"
        },
        "date": 1730453815004,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10795775926,
            "range": "± 62563530",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 407644430,
            "range": "± 14560608",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4699986354,
            "range": "± 21408099",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 284533450,
            "range": "± 983381",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 741047269,
            "range": "± 1837119",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 361404968,
            "range": "± 265098",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1196791458,
            "range": "± 2283466",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 734927544,
            "range": "± 36698669",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4298851,
            "range": "± 13821",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 803995398,
            "range": "± 6806801",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 280177543,
            "range": "± 502266",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 281579734,
            "range": "± 1122153",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1874542022,
            "range": "± 12291539",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 671588866,
            "range": "± 2250672",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 338601506,
            "range": "± 10351639",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 330613486,
            "range": "± 1163863",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1048531410,
            "range": "± 2414665",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 638580288,
            "range": "± 941739",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5269135,
            "range": "± 52622",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83722358,
            "range": "± 654211",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26359657943,
            "range": "± 98900768",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 64100269,
            "range": "± 2138658",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4520136496,
            "range": "± 14584428",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 291318638,
            "range": "± 424080",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 675661135,
            "range": "± 3149680",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 360224299,
            "range": "± 11860889",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 389823584,
            "range": "± 493300",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1089554127,
            "range": "± 18234534",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 678026298,
            "range": "± 497322",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3656387,
            "range": "± 18481",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136039269,
            "range": "± 290157",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139986746,
            "range": "± 305667",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4289430968,
            "range": "± 23095955",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1855562483,
            "range": "± 7164561",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 797778338,
            "range": "± 6698510",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 377126717,
            "range": "± 1735057",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 269328781,
            "range": "± 370950",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 668348221,
            "range": "± 1861248",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 306899807,
            "range": "± 320818",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 304666884,
            "range": "± 806899",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 969223649,
            "range": "± 4024800",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 618241746,
            "range": "± 575118",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1689734881,
            "range": "± 62941554",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 784590,
            "range": "± 11193",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1174817,
            "range": "± 21801",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2313611999,
            "range": "± 65187632",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3002903341,
            "range": "± 55862296",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 347844008,
            "range": "± 2098145",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 361348529,
            "range": "± 4336183",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 353,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 367,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ceaf49c9d24eab6cf2dd61712849cb4f3bd14d69",
          "message": "chore: remove cardinality statistic gathering for fixed width data block (#3076)\n\nThis PR tries to remove the cardinality calculation for fixed width data\r\nblock, so we can speed up the write speed.\r\n#3069",
          "timestamp": "2024-11-02T01:51:53Z",
          "url": "https://github.com/lancedb/lance/commit/ceaf49c9d24eab6cf2dd61712849cb4f3bd14d69"
        },
        "date": 1730540219100,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10777106697,
            "range": "± 35244183",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 409128504,
            "range": "± 2075776",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4813656889,
            "range": "± 36816549",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276985075,
            "range": "± 616740",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 740306148,
            "range": "± 2880964",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 365446253,
            "range": "± 327137",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1170237553,
            "range": "± 2025639",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 744032101,
            "range": "± 2449048",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4369688,
            "range": "± 42151",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 803083088,
            "range": "± 8184559",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 275372642,
            "range": "± 4520496",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272241820,
            "range": "± 851054",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1825171516,
            "range": "± 14756440",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 667117242,
            "range": "± 3519938",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 336896019,
            "range": "± 167100",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 337609199,
            "range": "± 230720",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1040188256,
            "range": "± 3158105",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 639564995,
            "range": "± 766811",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5252959,
            "range": "± 99798",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 85252685,
            "range": "± 2056150",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26288946467,
            "range": "± 566625083",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 64094198,
            "range": "± 1890996",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4492816054,
            "range": "± 30495995",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 282405921,
            "range": "± 3222689",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 669289032,
            "range": "± 2583227",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 368355160,
            "range": "± 683997",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 392809607,
            "range": "± 2664216",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1087352754,
            "range": "± 2443275",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 674794377,
            "range": "± 519072",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3646602,
            "range": "± 8296",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136467709,
            "range": "± 242475",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139942542,
            "range": "± 301518",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4319100671,
            "range": "± 14572346",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1885305209,
            "range": "± 16173816",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 796373725,
            "range": "± 5512660",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 373281097,
            "range": "± 1449317",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 260110484,
            "range": "± 170894",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 666862762,
            "range": "± 3053873",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 308274504,
            "range": "± 905465",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 306737808,
            "range": "± 435333",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 971657001,
            "range": "± 2501172",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 621721618,
            "range": "± 1063003",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1732575663,
            "range": "± 49226231",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 772301,
            "range": "± 7687",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1167939,
            "range": "± 31731",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2396193851,
            "range": "± 16810703",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2963424837,
            "range": "± 14796326",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 378314364,
            "range": "± 2200298",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 392396998,
            "range": "± 3854570",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 368,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 375,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 435,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ceaf49c9d24eab6cf2dd61712849cb4f3bd14d69",
          "message": "chore: remove cardinality statistic gathering for fixed width data block (#3076)\n\nThis PR tries to remove the cardinality calculation for fixed width data\r\nblock, so we can speed up the write speed.\r\n#3069",
          "timestamp": "2024-11-02T01:51:53Z",
          "url": "https://github.com/lancedb/lance/commit/ceaf49c9d24eab6cf2dd61712849cb4f3bd14d69"
        },
        "date": 1730626661137,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10856006046,
            "range": "± 56427522",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 402336695,
            "range": "± 2131250",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4763756685,
            "range": "± 25554580",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 274763658,
            "range": "± 806546",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 738034321,
            "range": "± 4381975",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 362235974,
            "range": "± 178649",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1171626574,
            "range": "± 2189900",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 720045150,
            "range": "± 1208058",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4291364,
            "range": "± 106159",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 805325543,
            "range": "± 14838644",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 270173475,
            "range": "± 437616",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 271590855,
            "range": "± 661509",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1834476856,
            "range": "± 13792309",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 670547268,
            "range": "± 1822161",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334507005,
            "range": "± 155489",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 334064751,
            "range": "± 1348653",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1041542614,
            "range": "± 2391009",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 634500852,
            "range": "± 511751",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5237891,
            "range": "± 64913",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83028100,
            "range": "± 1241196",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26144197833,
            "range": "± 203025673",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 72026886,
            "range": "± 3335808",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4562123186,
            "range": "± 16894978",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 280973206,
            "range": "± 978850",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 674061156,
            "range": "± 2088611",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 366048174,
            "range": "± 414935",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 390749581,
            "range": "± 2209807",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1069828192,
            "range": "± 13162828",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 664986100,
            "range": "± 470971",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3737126,
            "range": "± 13849",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135753810,
            "range": "± 107658",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138824482,
            "range": "± 302883",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4357525542,
            "range": "± 13721965",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1842832237,
            "range": "± 7657831",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 802444434,
            "range": "± 5643290",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 375110756,
            "range": "± 640673",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 267671025,
            "range": "± 340755",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 663897956,
            "range": "± 2235399",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 305439529,
            "range": "± 416513",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 303901703,
            "range": "± 1580168",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 954270694,
            "range": "± 6416732",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613417908,
            "range": "± 713112",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1702770071,
            "range": "± 50610820",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 784384,
            "range": "± 7385",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1187998,
            "range": "± 29659",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2331622212,
            "range": "± 32867285",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3026651919,
            "range": "± 45692056",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 353783455,
            "range": "± 2510291",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 363512777,
            "range": "± 2962362",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 354,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ceaf49c9d24eab6cf2dd61712849cb4f3bd14d69",
          "message": "chore: remove cardinality statistic gathering for fixed width data block (#3076)\n\nThis PR tries to remove the cardinality calculation for fixed width data\r\nblock, so we can speed up the write speed.\r\n#3069",
          "timestamp": "2024-11-02T01:51:53Z",
          "url": "https://github.com/lancedb/lance/commit/ceaf49c9d24eab6cf2dd61712849cb4f3bd14d69"
        },
        "date": 1730712976345,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10839111939,
            "range": "± 49726171",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 401089724,
            "range": "± 1795553",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4725450916,
            "range": "± 15355056",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 271558658,
            "range": "± 3556156",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 730369731,
            "range": "± 4119552",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 360592920,
            "range": "± 1055098",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1156063555,
            "range": "± 1492143",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 729746876,
            "range": "± 1959859",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4240174,
            "range": "± 26186",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 810527864,
            "range": "± 7094734",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 267555839,
            "range": "± 2584041",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 266727689,
            "range": "± 736638",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1823312379,
            "range": "± 8613306",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 665020369,
            "range": "± 1543496",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 331052864,
            "range": "± 151495",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 334001493,
            "range": "± 335957",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1026373615,
            "range": "± 4946410",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 625608767,
            "range": "± 661401",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5254209,
            "range": "± 164809",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83795873,
            "range": "± 1178701",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26250822528,
            "range": "± 186719041",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 67194428,
            "range": "± 3304438",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4510779286,
            "range": "± 24223090",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 276178318,
            "range": "± 725829",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 663372902,
            "range": "± 2461239",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 360772401,
            "range": "± 452669",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 384429162,
            "range": "± 558245",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1055554319,
            "range": "± 2388496",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 662933195,
            "range": "± 533812",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3580309,
            "range": "± 14595",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 133813584,
            "range": "± 2627644",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 137744471,
            "range": "± 304201",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4328895531,
            "range": "± 16503556",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1869259935,
            "range": "± 7739968",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 804964599,
            "range": "± 6710130",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 372409610,
            "range": "± 1129874",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 262660621,
            "range": "± 223046",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 658489667,
            "range": "± 2480727",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 303104160,
            "range": "± 542902",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 301851162,
            "range": "± 419581",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 943932228,
            "range": "± 903965",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 603661014,
            "range": "± 949508",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1751811943,
            "range": "± 54116243",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 771956,
            "range": "± 7783",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1170756,
            "range": "± 23996",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2417640494,
            "range": "± 20307559",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2977051440,
            "range": "± 13674015",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 349032756,
            "range": "± 4079635",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 359126972,
            "range": "± 4259458",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 353,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 371,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ceaf49c9d24eab6cf2dd61712849cb4f3bd14d69",
          "message": "chore: remove cardinality statistic gathering for fixed width data block (#3076)\n\nThis PR tries to remove the cardinality calculation for fixed width data\r\nblock, so we can speed up the write speed.\r\n#3069",
          "timestamp": "2024-11-02T01:51:53Z",
          "url": "https://github.com/lancedb/lance/commit/ceaf49c9d24eab6cf2dd61712849cb4f3bd14d69"
        },
        "date": 1730799369337,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10889812172,
            "range": "± 56862623",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404252171,
            "range": "± 2827103",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4745931543,
            "range": "± 36370338",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 288204949,
            "range": "± 7001611",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 733529934,
            "range": "± 2534618",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 358533653,
            "range": "± 314940",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1207663734,
            "range": "± 2419549",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 726614792,
            "range": "± 1787801",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4328564,
            "range": "± 21861",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 802065891,
            "range": "± 2653556",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 284203126,
            "range": "± 794855",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 284880412,
            "range": "± 470736",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1833326767,
            "range": "± 12598593",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 670687922,
            "range": "± 1945790",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 336731495,
            "range": "± 139631",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 331091139,
            "range": "± 1272149",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1037026987,
            "range": "± 4648880",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 634332365,
            "range": "± 704118",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5287716,
            "range": "± 74711",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84942416,
            "range": "± 1447075",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26024034262,
            "range": "± 142049143",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 67953896,
            "range": "± 3675951",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4523028059,
            "range": "± 11872968",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 293858847,
            "range": "± 594751",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 674478810,
            "range": "± 3424064",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 365232858,
            "range": "± 1349561",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 381032632,
            "range": "± 885410",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1074683643,
            "range": "± 54186469",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 670533997,
            "range": "± 335224",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3690618,
            "range": "± 9451",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 140036054,
            "range": "± 179470",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 144365251,
            "range": "± 1095301",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4322368828,
            "range": "± 24339841",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1884089888,
            "range": "± 27047853",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 796342251,
            "range": "± 5188127",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 368316884,
            "range": "± 20390148",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 264551897,
            "range": "± 382865",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 670027830,
            "range": "± 12555777",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 304218883,
            "range": "± 846619",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 300518593,
            "range": "± 235935",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 966759747,
            "range": "± 57840768",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 614157817,
            "range": "± 5501994",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1726695540,
            "range": "± 61901717",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 757736,
            "range": "± 7642",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1169331,
            "range": "± 27703",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2378832994,
            "range": "± 32279052",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2945519429,
            "range": "± 65681860",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 347752816,
            "range": "± 2434332",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 357050870,
            "range": "± 2981091",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 348,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 361,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 370,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 423,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Will Jones",
            "username": "wjones127",
            "email": "willjones127@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a6053ca8f6353f2649266c550ca53e3368e418cd",
          "message": "ci(rust): pass `--locked` to builds (#3095)",
          "timestamp": "2024-11-05T23:11:08Z",
          "url": "https://github.com/lancedb/lance/commit/a6053ca8f6353f2649266c550ca53e3368e418cd"
        },
        "date": 1730885810047,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10898737209,
            "range": "± 29385908",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 402246670,
            "range": "± 2119617",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4780478057,
            "range": "± 37902853",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 282918915,
            "range": "± 510780",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 734248112,
            "range": "± 4946421",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 355176978,
            "range": "± 145213",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1184343786,
            "range": "± 1121318",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 724561298,
            "range": "± 1928539",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4296396,
            "range": "± 49177",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 794728786,
            "range": "± 9184255",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 278740503,
            "range": "± 736891",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 278311969,
            "range": "± 899553",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1841927112,
            "range": "± 13671921",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 660943019,
            "range": "± 2633113",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334159135,
            "range": "± 4286204",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 334989999,
            "range": "± 13218268",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1032518814,
            "range": "± 2147245",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 634831710,
            "range": "± 8234950",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5576287,
            "range": "± 96676",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82088503,
            "range": "± 1256819",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25846531649,
            "range": "± 169601337",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 67283725,
            "range": "± 2732550",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4542410482,
            "range": "± 25507797",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 287284532,
            "range": "± 3731149",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 667572795,
            "range": "± 9332486",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 362472389,
            "range": "± 3620915",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 381622523,
            "range": "± 1239006",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1064292284,
            "range": "± 2672721",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 665155321,
            "range": "± 598691",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3609281,
            "range": "± 167727",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 134935758,
            "range": "± 166826",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138312760,
            "range": "± 809283",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4308994735,
            "range": "± 43568824",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1855997433,
            "range": "± 9066871",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 802192385,
            "range": "± 7278705",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 372356612,
            "range": "± 640208",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 264048761,
            "range": "± 17115263",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 666547354,
            "range": "± 3473487",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 304820937,
            "range": "± 16604861",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 300867064,
            "range": "± 341003",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 944293310,
            "range": "± 6540374",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 607577219,
            "range": "± 1127985",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1763431629,
            "range": "± 56825139",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 766302,
            "range": "± 12003",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1165292,
            "range": "± 16202",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2410849970,
            "range": "± 19990682",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2990662074,
            "range": "± 65771082",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 346535701,
            "range": "± 3047646",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 359390369,
            "range": "± 3827573",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 349,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 361,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 372,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 424,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Will Jones",
            "username": "wjones127",
            "email": "willjones127@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a6053ca8f6353f2649266c550ca53e3368e418cd",
          "message": "ci(rust): pass `--locked` to builds (#3095)",
          "timestamp": "2024-11-05T23:11:08Z",
          "url": "https://github.com/lancedb/lance/commit/a6053ca8f6353f2649266c550ca53e3368e418cd"
        },
        "date": 1730972173558,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10942306765,
            "range": "± 75543697",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 406163464,
            "range": "± 3155686",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4783922380,
            "range": "± 19836494",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 281820492,
            "range": "± 2076310",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 740468570,
            "range": "± 5333425",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 364028811,
            "range": "± 1743138",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1188407227,
            "range": "± 2743048",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 742429958,
            "range": "± 1588793",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4326882,
            "range": "± 15933",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 807168460,
            "range": "± 5663050",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 276999228,
            "range": "± 1133550",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 278315346,
            "range": "± 8846158",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1815137835,
            "range": "± 12008436",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 671530954,
            "range": "± 1281375",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 333976322,
            "range": "± 175091",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 337468572,
            "range": "± 935816",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1053905645,
            "range": "± 19366021",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 637269541,
            "range": "± 910941",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5572997,
            "range": "± 59950",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84879302,
            "range": "± 1657227",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26308393801,
            "range": "± 711278124",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 66229969,
            "range": "± 3151178",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4511614159,
            "range": "± 33712731",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 285619414,
            "range": "± 711253",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 678900476,
            "range": "± 2431861",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 367166376,
            "range": "± 2811996",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 384609527,
            "range": "± 217344",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1082543234,
            "range": "± 4884715",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 678838333,
            "range": "± 5589114",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3702581,
            "range": "± 7881",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135583678,
            "range": "± 183771",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139731940,
            "range": "± 499211",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4284939468,
            "range": "± 18599212",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1871315353,
            "range": "± 11661302",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 802156856,
            "range": "± 8082962",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374205877,
            "range": "± 2391669",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 267356671,
            "range": "± 448675",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 666948540,
            "range": "± 1625346",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 304789543,
            "range": "± 468174",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 304711447,
            "range": "± 1402855",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 970320212,
            "range": "± 1281641",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613443541,
            "range": "± 798719",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1698564783,
            "range": "± 67965949",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 784764,
            "range": "± 5902",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1189114,
            "range": "± 27186",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2368972915,
            "range": "± 71401266",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3009018612,
            "range": "± 12046436",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 346237992,
            "range": "± 3225578",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 357027689,
            "range": "± 3079636",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 353,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 362,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 372,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rob Meng",
            "username": "chebbyChefNEQ",
            "email": "rob.xu.meng@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "822cf820d7ee881ee3b17729d8b72702236da51b",
          "message": "fix: fp16 GPU training (#3105)\n\n* cast ivf centroids to the same type as vectors before inference\r\n* cast codebook to the same type as ivf centroid before passing to rust\r\n* fix typing syntax",
          "timestamp": "2024-11-08T04:10:20Z",
          "url": "https://github.com/lancedb/lance/commit/822cf820d7ee881ee3b17729d8b72702236da51b"
        },
        "date": 1731058571826,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10926526117,
            "range": "± 39145930",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 407689228,
            "range": "± 1786275",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4781125006,
            "range": "± 13519419",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276970612,
            "range": "± 606421",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 734318138,
            "range": "± 2613838",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 359020312,
            "range": "± 244015",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1178363789,
            "range": "± 2299880",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 737552430,
            "range": "± 2040053",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4361345,
            "range": "± 21521",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 810474282,
            "range": "± 5105463",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 271515667,
            "range": "± 395919",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272753774,
            "range": "± 537034",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1914454864,
            "range": "± 7122617",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 671287122,
            "range": "± 7214204",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 336471000,
            "range": "± 155668",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 339362594,
            "range": "± 849887",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1045921084,
            "range": "± 2545780",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 640317809,
            "range": "± 14531750",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5558716,
            "range": "± 52681",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83154055,
            "range": "± 1247014",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26299884223,
            "range": "± 163453309",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 67026730,
            "range": "± 3742042",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4518914597,
            "range": "± 33146278",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 281363416,
            "range": "± 1343036",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 674643747,
            "range": "± 30072243",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 364386810,
            "range": "± 416436",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 389414975,
            "range": "± 3880224",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1081923663,
            "range": "± 31076952",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 669484959,
            "range": "± 993631",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3728288,
            "range": "± 14830",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136652740,
            "range": "± 286388",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139822295,
            "range": "± 844097",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4319338764,
            "range": "± 22462349",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1872999624,
            "range": "± 9072810",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 800429449,
            "range": "± 8617544",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374678753,
            "range": "± 1959496",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 265541451,
            "range": "± 390844",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 669533076,
            "range": "± 2958914",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 304596798,
            "range": "± 453095",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305406303,
            "range": "± 1616570",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 963164129,
            "range": "± 6878690",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 620651423,
            "range": "± 9069175",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1709794628,
            "range": "± 40956323",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 750354,
            "range": "± 4187",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1188270,
            "range": "± 37392",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2394314215,
            "range": "± 32169133",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2938353757,
            "range": "± 77184604",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 342114130,
            "range": "± 2855396",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 357264366,
            "range": "± 3626731",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 351,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 371,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 431,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c237bcb9318d30cf382aecd56b673aae85b2c555",
          "message": "chore: fix miniblock selection logic error (#3107)\n\nThis PR tries to fix a logic error during selecting miniblock encoder.",
          "timestamp": "2024-11-08T22:33:32Z",
          "url": "https://github.com/lancedb/lance/commit/c237bcb9318d30cf382aecd56b673aae85b2c555"
        },
        "date": 1731145013369,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10920122660,
            "range": "± 77892634",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 409325011,
            "range": "± 22071904",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4756375440,
            "range": "± 19367910",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 275081504,
            "range": "± 545384",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 736117024,
            "range": "± 4749209",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 362546888,
            "range": "± 1439626",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1171041117,
            "range": "± 1911215",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 735596068,
            "range": "± 4456202",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4289282,
            "range": "± 21525",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 803740034,
            "range": "± 20304711",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 270095417,
            "range": "± 579398",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 271556211,
            "range": "± 1653897",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1902969862,
            "range": "± 8964258",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 668114141,
            "range": "± 2379727",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334668718,
            "range": "± 125525",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 335308513,
            "range": "± 1751111",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1049786880,
            "range": "± 5854824",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 634829806,
            "range": "± 1047079",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5570629,
            "range": "± 67956",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84791241,
            "range": "± 2021917",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26498821913,
            "range": "± 196487893",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 68073314,
            "range": "± 4813118",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4553509535,
            "range": "± 34766808",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 280825533,
            "range": "± 1002213",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 671183441,
            "range": "± 2319941",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 367536619,
            "range": "± 767612",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 391656936,
            "range": "± 503245",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1085348738,
            "range": "± 26722436",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 660592586,
            "range": "± 731791",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3636689,
            "range": "± 24040",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136622341,
            "range": "± 2804262",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 140396486,
            "range": "± 412238",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4309634035,
            "range": "± 27618913",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1877402690,
            "range": "± 19563845",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 809471675,
            "range": "± 4543904",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 376612223,
            "range": "± 9060620",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 267118759,
            "range": "± 367434",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 671161970,
            "range": "± 5924396",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 307641812,
            "range": "± 344049",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 304437157,
            "range": "± 300655",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 964997635,
            "range": "± 63388525",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 617471842,
            "range": "± 1264078",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1754295162,
            "range": "± 59227594",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 755465,
            "range": "± 7403",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1182128,
            "range": "± 21829",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2414715406,
            "range": "± 59907261",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2971863061,
            "range": "± 12814009",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 347363291,
            "range": "± 2219602",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 361132680,
            "range": "± 2660545",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 354,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 366,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 375,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c237bcb9318d30cf382aecd56b673aae85b2c555",
          "message": "chore: fix miniblock selection logic error (#3107)\n\nThis PR tries to fix a logic error during selecting miniblock encoder.",
          "timestamp": "2024-11-08T22:33:32Z",
          "url": "https://github.com/lancedb/lance/commit/c237bcb9318d30cf382aecd56b673aae85b2c555"
        },
        "date": 1731231373556,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10971167482,
            "range": "± 34521853",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 407131592,
            "range": "± 2757799",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4794873212,
            "range": "± 39128226",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 279203133,
            "range": "± 1082452",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 747338576,
            "range": "± 4914260",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 364340270,
            "range": "± 1438739",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1184701003,
            "range": "± 2138394",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 737104670,
            "range": "± 3714092",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4320784,
            "range": "± 21555",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 792647413,
            "range": "± 2796168",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 275769630,
            "range": "± 572333",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 277077434,
            "range": "± 922236",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1764713411,
            "range": "± 8077965",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 671948606,
            "range": "± 10571939",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 336555136,
            "range": "± 126287",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 338357919,
            "range": "± 5707099",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1046294195,
            "range": "± 1706859",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 643070410,
            "range": "± 6287460",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5566325,
            "range": "± 90230",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84241709,
            "range": "± 2495039",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26344875048,
            "range": "± 127861428",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 67724063,
            "range": "± 5323836",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4544162949,
            "range": "± 41623426",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 284251986,
            "range": "± 2582387",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 676444316,
            "range": "± 12000672",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 363572336,
            "range": "± 482447",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 383850457,
            "range": "± 2055260",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1080160295,
            "range": "± 2670276",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 678003213,
            "range": "± 668321",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3721571,
            "range": "± 17883",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136387711,
            "range": "± 277140",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138975010,
            "range": "± 299294",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4317589872,
            "range": "± 33797186",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1872872254,
            "range": "± 12289665",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 804751917,
            "range": "± 4529876",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374456347,
            "range": "± 1623029",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 269158607,
            "range": "± 4008342",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 664247384,
            "range": "± 2755682",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 303982483,
            "range": "± 832560",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305357322,
            "range": "± 317516",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 960324928,
            "range": "± 1332179",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613654353,
            "range": "± 739288",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1720893482,
            "range": "± 64611945",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 756311,
            "range": "± 9970",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1184824,
            "range": "± 25743",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2393990452,
            "range": "± 25681820",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2980539076,
            "range": "± 72713867",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 347682027,
            "range": "± 2325592",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 359784465,
            "range": "± 3210467",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 353,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 372,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 427,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c237bcb9318d30cf382aecd56b673aae85b2c555",
          "message": "chore: fix miniblock selection logic error (#3107)\n\nThis PR tries to fix a logic error during selecting miniblock encoder.",
          "timestamp": "2024-11-08T22:33:32Z",
          "url": "https://github.com/lancedb/lance/commit/c237bcb9318d30cf382aecd56b673aae85b2c555"
        },
        "date": 1731317773836,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10935787590,
            "range": "± 62187944",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 402612023,
            "range": "± 2112753",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4778664057,
            "range": "± 32552081",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276574722,
            "range": "± 363782",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 739530812,
            "range": "± 5333170",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 364135758,
            "range": "± 236778",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1181243678,
            "range": "± 1890979",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 736936103,
            "range": "± 4988757",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4313049,
            "range": "± 91158",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 815723683,
            "range": "± 6927836",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 272323169,
            "range": "± 846634",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272101880,
            "range": "± 6353406",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1837496189,
            "range": "± 9415831",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 668912854,
            "range": "± 1325283",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334505466,
            "range": "± 167659",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 338886987,
            "range": "± 7019652",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1058337832,
            "range": "± 3152431",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 641309720,
            "range": "± 315664",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5588477,
            "range": "± 68423",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84256258,
            "range": "± 1846791",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26149620537,
            "range": "± 57601052",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 65039254,
            "range": "± 4936242",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4528939208,
            "range": "± 17348411",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 282475638,
            "range": "± 11298471",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 673305442,
            "range": "± 2610699",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 363995659,
            "range": "± 352489",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 391512698,
            "range": "± 453339",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1077233381,
            "range": "± 2469487",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 677248135,
            "range": "± 463538",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3682805,
            "range": "± 11328",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136003141,
            "range": "± 172748",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139344519,
            "range": "± 907880",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4250983454,
            "range": "± 48142214",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1880048123,
            "range": "± 13892921",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 795964511,
            "range": "± 5199430",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 373960825,
            "range": "± 1497984",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268169213,
            "range": "± 361525",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 667418192,
            "range": "± 2495344",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 305178547,
            "range": "± 2649299",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 302864259,
            "range": "± 360329",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 960709978,
            "range": "± 1424941",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 617807323,
            "range": "± 1401216",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1739214850,
            "range": "± 51425978",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 769600,
            "range": "± 3994",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1187609,
            "range": "± 21929",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2395650719,
            "range": "± 30774241",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2970425522,
            "range": "± 103983120",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 346724985,
            "range": "± 2596940",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 356569172,
            "range": "± 1822307",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 378,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ab270bbd8ee731fd787ebab66dfa8de1737301f",
          "message": "chore: lance-encoding test utility now properly aligns buffers (#3116)\n\nWe align buffers in the file writer but we were not doing the same thing\r\nin the test utility. This forced encodings to do extra copies. We remove\r\none such copy in this PR.\r\n\r\nCloses #3115",
          "timestamp": "2024-11-11T19:37:45Z",
          "url": "https://github.com/lancedb/lance/commit/4ab270bbd8ee731fd787ebab66dfa8de1737301f"
        },
        "date": 1731404169446,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10864730392,
            "range": "± 71326383",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 405133064,
            "range": "± 2372740",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4776775763,
            "range": "± 24618391",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 284708319,
            "range": "± 599438",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 744084345,
            "range": "± 4163865",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 360391563,
            "range": "± 319323",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1194843239,
            "range": "± 6795810",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 722307254,
            "range": "± 6633308",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4296192,
            "range": "± 36340",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 796114470,
            "range": "± 5186281",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 280829574,
            "range": "± 1801933",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 279799343,
            "range": "± 1120465",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1816188221,
            "range": "± 16687453",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 666351544,
            "range": "± 3074743",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 336848729,
            "range": "± 279537",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 337382032,
            "range": "± 361969",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1046335403,
            "range": "± 2476443",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 638978658,
            "range": "± 860606",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5523245,
            "range": "± 62778",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84064506,
            "range": "± 1575087",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26201619205,
            "range": "± 112008925",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 67013857,
            "range": "± 2562648",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4508720459,
            "range": "± 10339163",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 289345117,
            "range": "± 673694",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 672897194,
            "range": "± 1256536",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 365573271,
            "range": "± 663465",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 380149918,
            "range": "± 659346",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1072221285,
            "range": "± 4245632",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 659895049,
            "range": "± 644465",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3594698,
            "range": "± 49451",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135528645,
            "range": "± 397629",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138936449,
            "range": "± 621297",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4290002034,
            "range": "± 8047157",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1865286580,
            "range": "± 11881177",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 800346404,
            "range": "± 6820680",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 372209694,
            "range": "± 1401287",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 267657713,
            "range": "± 216931",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 666465300,
            "range": "± 2380870",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 304199558,
            "range": "± 1665958",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 302006886,
            "range": "± 532275",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 968338133,
            "range": "± 44392976",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 616307822,
            "range": "± 853208",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1773050159,
            "range": "± 65961853",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 757088,
            "range": "± 9755",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1170349,
            "range": "± 16886",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2379438044,
            "range": "± 9830316",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2973079771,
            "range": "± 74505134",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 346957588,
            "range": "± 1950353",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 359609414,
            "range": "± 3480343",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 350,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 363,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 427,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ab270bbd8ee731fd787ebab66dfa8de1737301f",
          "message": "chore: lance-encoding test utility now properly aligns buffers (#3116)\n\nWe align buffers in the file writer but we were not doing the same thing\r\nin the test utility. This forced encodings to do extra copies. We remove\r\none such copy in this PR.\r\n\r\nCloses #3115",
          "timestamp": "2024-11-11T19:37:45Z",
          "url": "https://github.com/lancedb/lance/commit/4ab270bbd8ee731fd787ebab66dfa8de1737301f"
        },
        "date": 1731490560303,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10852751632,
            "range": "± 53586302",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404203392,
            "range": "± 3345617",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4766543739,
            "range": "± 32035002",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 280900605,
            "range": "± 572187",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 735636624,
            "range": "± 14003428",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 358463807,
            "range": "± 6332669",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1191389678,
            "range": "± 5438634",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 733232623,
            "range": "± 2461842",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4251789,
            "range": "± 20364",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 805258322,
            "range": "± 8061767",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 278404188,
            "range": "± 439704",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 278335295,
            "range": "± 802138",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1819844801,
            "range": "± 14133778",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 666462008,
            "range": "± 13447291",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 336539936,
            "range": "± 212089",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 332140816,
            "range": "± 182010",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1040701228,
            "range": "± 3201986",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 635991848,
            "range": "± 620695",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5601503,
            "range": "± 55434",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84437980,
            "range": "± 1363327",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26164813670,
            "range": "± 119205557",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 66961378,
            "range": "± 4343199",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4513136324,
            "range": "± 18364465",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 286516319,
            "range": "± 396591",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 673296008,
            "range": "± 2224560",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 363623397,
            "range": "± 1666888",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 386209711,
            "range": "± 4158452",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1079571633,
            "range": "± 21776277",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 676160270,
            "range": "± 42564572",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3616588,
            "range": "± 19969",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 134514061,
            "range": "± 1565632",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138250438,
            "range": "± 285489",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4263500653,
            "range": "± 17378827",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1855001716,
            "range": "± 11351267",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 803314727,
            "range": "± 6222778",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 373834109,
            "range": "± 2101878",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 266953784,
            "range": "± 650895",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 664875394,
            "range": "± 4501317",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 305517858,
            "range": "± 4501632",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 304603704,
            "range": "± 477589",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 962305558,
            "range": "± 17303824",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 616299660,
            "range": "± 779289",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1728861466,
            "range": "± 49770196",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 764365,
            "range": "± 7579",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1173363,
            "range": "± 27282",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2381745885,
            "range": "± 31035791",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2933616628,
            "range": "± 17848272",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 347809566,
            "range": "± 3533244",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 355461221,
            "range": "± 2974796",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 349,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 359,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 369,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 423,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "huangzhaowei",
            "username": "SaintBacchus",
            "email": "carlmartinmax@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f60283eeee62359145486316166667e926b67eaf",
          "message": "refactor: remove the queue in LanceArrowWriter to reduce memory usage for spark sink (#3110)\n\nRemove the queue in LanceArrowWriter since it may cache all rows in\r\nqueue and that will require a lot of jvm memory.\r\n\r\nUse mutex to control the write rate of sinker. Writer will wait util the\r\nreader take the batch.\r\n\r\nAnd more I had moved the `maven-shade-plugin` into a new profile which\r\nis diabled by default because `jar-with-dependencie` was conflict with\r\nmany jars in spark dependencie\r\n\r\n---------\r\n\r\nCo-authored-by: Lei Xu <lei@lancedb.com>",
          "timestamp": "2024-11-13T21:48:36Z",
          "url": "https://github.com/lancedb/lance/commit/f60283eeee62359145486316166667e926b67eaf"
        },
        "date": 1731576964506,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10705475415,
            "range": "± 81863413",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 407930476,
            "range": "± 18416970",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4742199257,
            "range": "± 23206003",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 283818613,
            "range": "± 415036",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 734097276,
            "range": "± 1992341",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 359849793,
            "range": "± 2666834",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1195704251,
            "range": "± 1512739",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 731215724,
            "range": "± 3499212",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4280938,
            "range": "± 21356",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 807337285,
            "range": "± 7115819",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 280814240,
            "range": "± 597037",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 281457995,
            "range": "± 3642263",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1882655051,
            "range": "± 12571617",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 667176892,
            "range": "± 2077924",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 335656206,
            "range": "± 133136",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 336302180,
            "range": "± 312140",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1044198517,
            "range": "± 4671516",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 632146769,
            "range": "± 680384",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5558875,
            "range": "± 43493",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83997407,
            "range": "± 1487012",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26253088579,
            "range": "± 97198222",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 65741609,
            "range": "± 4023546",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4554502914,
            "range": "± 16720880",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 289658468,
            "range": "± 536597",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 675671159,
            "range": "± 3516909",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 363592453,
            "range": "± 623080",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 388871273,
            "range": "± 674970",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1075160992,
            "range": "± 10259861",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 673253795,
            "range": "± 5053906",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3608151,
            "range": "± 34542",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135782039,
            "range": "± 419927",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139227445,
            "range": "± 949852",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4289322624,
            "range": "± 25259215",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1858600108,
            "range": "± 9611034",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 809897445,
            "range": "± 6545274",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374260693,
            "range": "± 1566527",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 264255197,
            "range": "± 309081",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 672795398,
            "range": "± 9086793",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 306581859,
            "range": "± 395492",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 304308547,
            "range": "± 444746",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 963593760,
            "range": "± 2416267",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 609695570,
            "range": "± 1835073",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1697615206,
            "range": "± 77436842",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 786017,
            "range": "± 8551",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1178911,
            "range": "± 28495",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2379062424,
            "range": "± 21298376",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2958822086,
            "range": "± 27004263",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 307729481,
            "range": "± 3516748",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 317801757,
            "range": "± 4166100",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 350,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 363,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 372,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 426,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f257489894b158ae29686f53b9778d3441bebeba",
          "message": "chore: remove used_coding as it is not used currently (#3081)\n\nremove used_coding as it is not used currently, we can add it back when\r\nwe needed.",
          "timestamp": "2024-11-14T23:01:23Z",
          "url": "https://github.com/lancedb/lance/commit/f257489894b158ae29686f53b9778d3441bebeba"
        },
        "date": 1731663376876,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10772503568,
            "range": "± 66880999",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 409912129,
            "range": "± 22432040",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4722868585,
            "range": "± 13590654",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 274486609,
            "range": "± 655173",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 733631644,
            "range": "± 3404323",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 362833470,
            "range": "± 6347766",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1160548230,
            "range": "± 20243221",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 734563283,
            "range": "± 2362575",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4254305,
            "range": "± 22073",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 812403059,
            "range": "± 5962265",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 269698900,
            "range": "± 595687",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 270077868,
            "range": "± 875267",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1928015564,
            "range": "± 16201424",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 662685550,
            "range": "± 2875414",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 333598018,
            "range": "± 149968",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 332537946,
            "range": "± 612705",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1038529289,
            "range": "± 2034184",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 633684188,
            "range": "± 520844",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5555456,
            "range": "± 74500",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83055688,
            "range": "± 1845603",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26110811476,
            "range": "± 163264001",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 66934499,
            "range": "± 2759958",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4516020503,
            "range": "± 46653427",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 279103118,
            "range": "± 694051",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 662795081,
            "range": "± 4928267",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 362243731,
            "range": "± 701801",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 385509790,
            "range": "± 4183366",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1079607756,
            "range": "± 1077527",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 673647662,
            "range": "± 1226150",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3633588,
            "range": "± 9363",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 134255099,
            "range": "± 550358",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138548091,
            "range": "± 437265",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4317140525,
            "range": "± 17446423",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1861947566,
            "range": "± 6028812",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 800374895,
            "range": "± 3105490",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 369222883,
            "range": "± 903793",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 265873473,
            "range": "± 308029",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 661834912,
            "range": "± 2133287",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 304400930,
            "range": "± 738359",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 301819501,
            "range": "± 269468",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 951319478,
            "range": "± 1701081",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613471771,
            "range": "± 13733961",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1723887199,
            "range": "± 45853011",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 759136,
            "range": "± 5892",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1163777,
            "range": "± 25499",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2363520502,
            "range": "± 39943686",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2942583976,
            "range": "± 32406681",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 299191024,
            "range": "± 1468290",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 309561903,
            "range": "± 1020465",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 349,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 360,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 368,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 423,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a2123958fbecec82a65138a89b1142e496d36dbc",
          "message": "feat: start recording index details in the mainifest, cache index type lookup (#3131)\n\nThis addresses a specific problem. When a dataset had a scalar index on\r\na string column we would perform I/O during the planning phase on every\r\nquery that contained a filter. This added considerably latency\r\n(especially against S3) to query times.\r\n\r\nWe now cache that lookup.\r\n\r\nIt also starts to tackle a more central problem as well. Right now we\r\nour manifest stores very little information about indices (pretty much\r\njust the UUID). Any further information must be obtained by loading the\r\nindex. This PR introduces the concept of \"index details\" which is a spot\r\nthat an index can put index-specific (e.g. specific to btree or specific\r\nto bitmap) information that can be accessed during planning (by just\r\nlooking at the manifest). At the moment this concept is still fairly\r\nbare bones but I think, as scalar indices become more sophisticated,\r\nthis information can be useful.\r\n\r\nIf we decide we don't want it then I can pull it out as well and dial\r\nthis PR back to just the caching component.",
          "timestamp": "2024-11-16T03:36:45Z",
          "url": "https://github.com/lancedb/lance/commit/a2123958fbecec82a65138a89b1142e496d36dbc"
        },
        "date": 1731749801510,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10728537345,
            "range": "± 53166155",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 402726737,
            "range": "± 1501840",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4742714805,
            "range": "± 23763494",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 282372350,
            "range": "± 296602",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 740014461,
            "range": "± 4058548",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 359645420,
            "range": "± 665123",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1190819526,
            "range": "± 2035757",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 739337084,
            "range": "± 2142296",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4268838,
            "range": "± 13030",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 810669647,
            "range": "± 11633170",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 278194601,
            "range": "± 815509",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 277949945,
            "range": "± 917069",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1808478372,
            "range": "± 8096340",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 662082129,
            "range": "± 2292943",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 335676645,
            "range": "± 187875",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 333367607,
            "range": "± 1676034",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1061681648,
            "range": "± 6138794",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 636885029,
            "range": "± 6121555",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5508848,
            "range": "± 72587",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 85584157,
            "range": "± 1584282",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26153311673,
            "range": "± 152260185",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 69106701,
            "range": "± 2231715",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4518995626,
            "range": "± 30701353",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 287295364,
            "range": "± 726214",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 670424135,
            "range": "± 1431042",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 363891860,
            "range": "± 592302",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 386277502,
            "range": "± 10462634",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1076925412,
            "range": "± 22701807",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 669000960,
            "range": "± 648052",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3580217,
            "range": "± 96416",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135396498,
            "range": "± 304695",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139350072,
            "range": "± 7879920",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4312180210,
            "range": "± 16127522",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1861431147,
            "range": "± 15416676",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 806203487,
            "range": "± 5460850",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 372617289,
            "range": "± 1116803",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268156869,
            "range": "± 21833646",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 665452325,
            "range": "± 2868039",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 302906709,
            "range": "± 2961673",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 302836278,
            "range": "± 1021418",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 968436423,
            "range": "± 17449383",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613597443,
            "range": "± 1145292",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1735808526,
            "range": "± 76850641",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 759361,
            "range": "± 6195",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1182221,
            "range": "± 24441",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2407241615,
            "range": "± 29930932",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3014750217,
            "range": "± 127823564",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 299137040,
            "range": "± 2711909",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 312004051,
            "range": "± 1908262",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 350,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 361,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 370,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 427,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a2123958fbecec82a65138a89b1142e496d36dbc",
          "message": "feat: start recording index details in the mainifest, cache index type lookup (#3131)\n\nThis addresses a specific problem. When a dataset had a scalar index on\r\na string column we would perform I/O during the planning phase on every\r\nquery that contained a filter. This added considerably latency\r\n(especially against S3) to query times.\r\n\r\nWe now cache that lookup.\r\n\r\nIt also starts to tackle a more central problem as well. Right now we\r\nour manifest stores very little information about indices (pretty much\r\njust the UUID). Any further information must be obtained by loading the\r\nindex. This PR introduces the concept of \"index details\" which is a spot\r\nthat an index can put index-specific (e.g. specific to btree or specific\r\nto bitmap) information that can be accessed during planning (by just\r\nlooking at the manifest). At the moment this concept is still fairly\r\nbare bones but I think, as scalar indices become more sophisticated,\r\nthis information can be useful.\r\n\r\nIf we decide we don't want it then I can pull it out as well and dial\r\nthis PR back to just the caching component.",
          "timestamp": "2024-11-16T03:36:45Z",
          "url": "https://github.com/lancedb/lance/commit/a2123958fbecec82a65138a89b1142e496d36dbc"
        },
        "date": 1731836140486,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10806217229,
            "range": "± 59681511",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 394649811,
            "range": "± 1850012",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4726267688,
            "range": "± 28416782",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 275965356,
            "range": "± 725147",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 719314415,
            "range": "± 4352228",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 341636835,
            "range": "± 293270",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1156544977,
            "range": "± 4093695",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 699300330,
            "range": "± 2682068",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4136010,
            "range": "± 31777",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 810795735,
            "range": "± 9078014",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 270568886,
            "range": "± 915730",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272696450,
            "range": "± 962257",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1793257850,
            "range": "± 8097426",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 651412984,
            "range": "± 3212859",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 322129559,
            "range": "± 178319",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 325889947,
            "range": "± 1273887",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 980751358,
            "range": "± 2082389",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 614979459,
            "range": "± 1542919",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5611380,
            "range": "± 46640",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82772506,
            "range": "± 1266548",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 24898909803,
            "range": "± 93587465",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 67316501,
            "range": "± 4311870",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4549143333,
            "range": "± 16006232",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 279693857,
            "range": "± 678954",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 654500164,
            "range": "± 1719187",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 351693497,
            "range": "± 354005",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 367607631,
            "range": "± 792106",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1022133827,
            "range": "± 3580089",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 645121465,
            "range": "± 476133",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3450926,
            "range": "± 23033",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 134237157,
            "range": "± 218084",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138283646,
            "range": "± 267176",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4323460597,
            "range": "± 18669660",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1840745942,
            "range": "± 11730045",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 813490660,
            "range": "± 13745089",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 361831028,
            "range": "± 4126803",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 250735170,
            "range": "± 550102",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 649995468,
            "range": "± 1456482",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 292916692,
            "range": "± 398823",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 294532935,
            "range": "± 954306",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 913506825,
            "range": "± 1358338",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 593048133,
            "range": "± 845248",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1724505748,
            "range": "± 53586003",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 768867,
            "range": "± 10344",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1168065,
            "range": "± 11006",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2302557233,
            "range": "± 27221538",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2937975421,
            "range": "± 9950492",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 295020525,
            "range": "± 2080366",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 318337058,
            "range": "± 1449711",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 345,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 356,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 417,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a2123958fbecec82a65138a89b1142e496d36dbc",
          "message": "feat: start recording index details in the mainifest, cache index type lookup (#3131)\n\nThis addresses a specific problem. When a dataset had a scalar index on\r\na string column we would perform I/O during the planning phase on every\r\nquery that contained a filter. This added considerably latency\r\n(especially against S3) to query times.\r\n\r\nWe now cache that lookup.\r\n\r\nIt also starts to tackle a more central problem as well. Right now we\r\nour manifest stores very little information about indices (pretty much\r\njust the UUID). Any further information must be obtained by loading the\r\nindex. This PR introduces the concept of \"index details\" which is a spot\r\nthat an index can put index-specific (e.g. specific to btree or specific\r\nto bitmap) information that can be accessed during planning (by just\r\nlooking at the manifest). At the moment this concept is still fairly\r\nbare bones but I think, as scalar indices become more sophisticated,\r\nthis information can be useful.\r\n\r\nIf we decide we don't want it then I can pull it out as well and dial\r\nthis PR back to just the caching component.",
          "timestamp": "2024-11-16T03:36:45Z",
          "url": "https://github.com/lancedb/lance/commit/a2123958fbecec82a65138a89b1142e496d36dbc"
        },
        "date": 1731922563301,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10795298581,
            "range": "± 99802193",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 397732874,
            "range": "± 2232820",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4771091747,
            "range": "± 34420787",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276829138,
            "range": "± 822314",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 720851564,
            "range": "± 1803165",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 341691042,
            "range": "± 208538",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1159258931,
            "range": "± 5290679",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 712652530,
            "range": "± 4287239",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4130828,
            "range": "± 19409",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 802630201,
            "range": "± 8028699",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 272086143,
            "range": "± 912382",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 271510930,
            "range": "± 1072717",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1805245123,
            "range": "± 15900103",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 652196509,
            "range": "± 2949648",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 326419796,
            "range": "± 175472",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 325985867,
            "range": "± 1582684",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 991796513,
            "range": "± 2619294",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 618163876,
            "range": "± 835410",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5574544,
            "range": "± 25846",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 81332951,
            "range": "± 1446029",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25103003958,
            "range": "± 644294604",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 65777199,
            "range": "± 4885062",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4458259170,
            "range": "± 9893615",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 281991543,
            "range": "± 1070592",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 652930826,
            "range": "± 3126276",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 349128546,
            "range": "± 901877",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 370236869,
            "range": "± 796776",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1026895366,
            "range": "± 4319284",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 649507879,
            "range": "± 515195",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3516597,
            "range": "± 12035",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135234580,
            "range": "± 765642",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139156816,
            "range": "± 418021",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4255491417,
            "range": "± 9075320",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1840099530,
            "range": "± 9642330",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 793659553,
            "range": "± 6786439",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 366115511,
            "range": "± 1551684",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 252042324,
            "range": "± 6073430",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 653191278,
            "range": "± 6048533",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 296787824,
            "range": "± 770909",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 295111462,
            "range": "± 241420",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 922409325,
            "range": "± 1275213",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 600299154,
            "range": "± 778384",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1691069812,
            "range": "± 69413884",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 783230,
            "range": "± 7374",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1189027,
            "range": "± 32027",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2405701234,
            "range": "± 22291145",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2934273091,
            "range": "± 9840989",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 299137172,
            "range": "± 5946451",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 323106473,
            "range": "± 2078585",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 346,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 357,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 364,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 418,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c47543f3f011e68226c11ad0ca380af3f7121807",
          "message": "chore: cleanup decoder benches (#3118)\n\nThis ensures that the setup routines happen inside of the benchmark\r\nfunction. Otherwise datagen will be run for all benchmarks during the\r\ncollection phase and the system will run out of RAM.\r\n\r\nThis also changes the routines to use `FileMetadataCache::no_cache` as\r\nit turns out `moka` doesn't immediately free its cache space on drop\r\nand, when used in a tight benchmark loop, this leads to running out of\r\nmemory.",
          "timestamp": "2024-11-18T20:12:40Z",
          "url": "https://github.com/lancedb/lance/commit/c47543f3f011e68226c11ad0ca380af3f7121807"
        },
        "date": 1732008941413,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10807863859,
            "range": "± 66602169",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 396186097,
            "range": "± 5182793",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4741437276,
            "range": "± 46579731",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276207376,
            "range": "± 1026122",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 719605678,
            "range": "± 3572620",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 343883909,
            "range": "± 282509",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1151173459,
            "range": "± 2443085",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 712199002,
            "range": "± 1580803",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4119119,
            "range": "± 18825",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 792557989,
            "range": "± 6553704",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 270381090,
            "range": "± 726915",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 270635890,
            "range": "± 622978",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1835984489,
            "range": "± 8453118",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 653843509,
            "range": "± 2995828",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 326945470,
            "range": "± 193629",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 323812612,
            "range": "± 873558",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 991791122,
            "range": "± 4474519",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 606532800,
            "range": "± 698019",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5592757,
            "range": "± 49803",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82415185,
            "range": "± 1349501",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 24961643521,
            "range": "± 166752666",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 66386763,
            "range": "± 3966169",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4519187666,
            "range": "± 19220834",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 281451421,
            "range": "± 653973",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 658323881,
            "range": "± 6540818",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 352004996,
            "range": "± 617061",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 367408477,
            "range": "± 586647",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1027047100,
            "range": "± 2651772",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 647521982,
            "range": "± 439197",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3471763,
            "range": "± 9772",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 133642008,
            "range": "± 484275",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 137369503,
            "range": "± 729992",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4309086303,
            "range": "± 20449673",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1832436951,
            "range": "± 10633168",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 802379437,
            "range": "± 6538697",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 362519756,
            "range": "± 2042106",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 252277518,
            "range": "± 597350",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 653439492,
            "range": "± 1323903",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 294871358,
            "range": "± 586616",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 294643037,
            "range": "± 406686",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 920608274,
            "range": "± 1635400",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 595518647,
            "range": "± 1060809",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1709507092,
            "range": "± 51795915",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 786904,
            "range": "± 9114",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1170993,
            "range": "± 15233",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2365300785,
            "range": "± 23289545",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2940155413,
            "range": "± 14612511",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 294119385,
            "range": "± 2505933",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 320910595,
            "range": "± 1395612",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 348,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 359,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 369,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 422,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "BubbleCal",
            "username": "BubbleCal",
            "email": "bubble-cal@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "71f323ac6423d6e433ff46afbeb61649b26ab269",
          "message": "fix!: low recall with cosine/dot on v3 index types (#3141)",
          "timestamp": "2024-11-20T02:43:38Z",
          "url": "https://github.com/lancedb/lance/commit/71f323ac6423d6e433ff46afbeb61649b26ab269"
        },
        "date": 1732095372580,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10810731235,
            "range": "± 71020174",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 401581172,
            "range": "± 1853486",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4728415194,
            "range": "± 17249345",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 278202159,
            "range": "± 629389",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 738341903,
            "range": "± 4391388",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 359886686,
            "range": "± 236465",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1179861246,
            "range": "± 2045293",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 728054591,
            "range": "± 2114126",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4248891,
            "range": "± 22952",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 803392780,
            "range": "± 8505138",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 273689261,
            "range": "± 890554",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 273810934,
            "range": "± 592004",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1882644631,
            "range": "± 14491792",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 667394107,
            "range": "± 2576422",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334986520,
            "range": "± 173907",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 332550716,
            "range": "± 392051",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1038372518,
            "range": "± 1038094",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 631885600,
            "range": "± 896252",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5517788,
            "range": "± 95904",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 84697475,
            "range": "± 1145289",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26167646922,
            "range": "± 726728756",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 62212709,
            "range": "± 3860923",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4520437678,
            "range": "± 30428949",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 283617520,
            "range": "± 948019",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 669050807,
            "range": "± 1135409",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 359181383,
            "range": "± 743894",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 383524081,
            "range": "± 986233",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1067597201,
            "range": "± 3658120",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 651730235,
            "range": "± 595762",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3651707,
            "range": "± 31188",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 134872012,
            "range": "± 159714",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138601727,
            "range": "± 386609",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4274103964,
            "range": "± 30440945",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1862756806,
            "range": "± 13353864",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 803866785,
            "range": "± 5510759",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 372129899,
            "range": "± 1180236",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 266410467,
            "range": "± 757842",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 663755304,
            "range": "± 2464786",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 302262896,
            "range": "± 311429",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 300337391,
            "range": "± 276679",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 956974100,
            "range": "± 1213517",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 607797642,
            "range": "± 769121",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1701987193,
            "range": "± 53206804",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 774096,
            "range": "± 7267",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1180868,
            "range": "± 28547",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2363523206,
            "range": "± 23391537",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2940566781,
            "range": "± 24193814",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 296531929,
            "range": "± 10224407",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 308649876,
            "range": "± 2399258",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 352,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 364,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "BubbleCal",
            "username": "BubbleCal",
            "email": "bubble-cal@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1d3b2042e01302e6360f770767cf4cfdd23cf519",
          "message": "feat: support 4bit PQ on new IVF_PQ (#3144)\n\nalso introduces `distance_all` methods to distance calculator, to\r\nimprove the new IVF_PQ search performance\r\nwe store the 4bit PQ codes in half-bytes\r\n\r\n---------\r\n\r\nSigned-off-by: BubbleCal <bubble-cal@outlook.com>",
          "timestamp": "2024-11-21T01:36:25Z",
          "url": "https://github.com/lancedb/lance/commit/1d3b2042e01302e6360f770767cf4cfdd23cf519"
        },
        "date": 1732181766229,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10803647055,
            "range": "± 42212146",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404226968,
            "range": "± 15185136",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4766200357,
            "range": "± 19825062",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 281573777,
            "range": "± 361756",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 737529088,
            "range": "± 3662949",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 357403321,
            "range": "± 151555",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1186815746,
            "range": "± 2783596",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 730703523,
            "range": "± 1723913",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4256423,
            "range": "± 10963",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 808369415,
            "range": "± 5428337",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 276908801,
            "range": "± 477419",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 277444310,
            "range": "± 533170",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1853942116,
            "range": "± 8836251",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 669894026,
            "range": "± 4242720",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 332216066,
            "range": "± 113369",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 334972110,
            "range": "± 320440",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1040842802,
            "range": "± 3646876",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 637362758,
            "range": "± 5872248",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5571211,
            "range": "± 87511",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82298897,
            "range": "± 1147383",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26260346429,
            "range": "± 181027573",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 65181412,
            "range": "± 4833318",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4517290228,
            "range": "± 31898944",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 290372074,
            "range": "± 664011",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 673049672,
            "range": "± 4115170",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 365373319,
            "range": "± 584596",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 388244506,
            "range": "± 940550",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1071358437,
            "range": "± 3660248",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 675536743,
            "range": "± 28637394",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3608951,
            "range": "± 16513",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135854994,
            "range": "± 516277",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138997495,
            "range": "± 457275",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4304570880,
            "range": "± 18178689",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1869089718,
            "range": "± 10132206",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 796476781,
            "range": "± 8368141",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 373002268,
            "range": "± 1597558",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 265628071,
            "range": "± 262036",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 666420122,
            "range": "± 2801578",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 305521569,
            "range": "± 510785",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 303663094,
            "range": "± 575335",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 955045882,
            "range": "± 1314258",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 615138954,
            "range": "± 1669829",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1706605135,
            "range": "± 61223638",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 769354,
            "range": "± 10408",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1188343,
            "range": "± 33999",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2392969482,
            "range": "± 38060420",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2740210412,
            "range": "± 16902043",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,L2,PQ=96,DIM=1536",
            "value": 305820168,
            "range": "± 2033292",
            "unit": "ns/iter"
          },
          {
            "name": "5242880,Cosine,PQ=96,DIM=1536",
            "value": 329365796,
            "range": "± 1722179",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 352,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "BubbleCal",
            "username": "BubbleCal",
            "email": "bubble-cal@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d79e870628b8d5f78cf018e6fd184c503c364b1e",
          "message": "perf: improve PQ computing distances (#3150)\n\nthis is done by make the compiler know the size of distance table slice\r\n```\r\n5242880,L2,PQ=96,DIM=1536\r\n                        time:   [148.44 ms 149.47 ms 150.50 ms]\r\n                        change: [-53.716% -53.486% -53.252%] (p = 0.00 < 0.10)\r\n                        Performance has improved.\r\n\r\n5242880,Cosine,PQ=96,DIM=1536\r\n                        time:   [191.84 ms 192.21 ms 192.75 ms]\r\n                        change: [-46.738% -46.621% -46.461%] (p = 0.00 < 0.10)\r\n                        Performance has improved.\r\n```\r\n\r\n---------\r\n\r\nSigned-off-by: BubbleCal <bubble-cal@outlook.com>",
          "timestamp": "2024-11-22T03:37:55Z",
          "url": "https://github.com/lancedb/lance/commit/d79e870628b8d5f78cf018e6fd184c503c364b1e"
        },
        "date": 1732268182725,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10798653066,
            "range": "± 82073654",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404752575,
            "range": "± 1947423",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4781825729,
            "range": "± 23156280",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276867177,
            "range": "± 470038",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 736837855,
            "range": "± 3800225",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 352415157,
            "range": "± 281158",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1168100613,
            "range": "± 2152865",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 720867247,
            "range": "± 2977816",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4201542,
            "range": "± 13747",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 808714947,
            "range": "± 4218579",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 273381621,
            "range": "± 647805",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272854108,
            "range": "± 5403340",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1802979202,
            "range": "± 9879908",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 663991318,
            "range": "± 1920710",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334277463,
            "range": "± 103581",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 335672347,
            "range": "± 882018",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1033695214,
            "range": "± 1203130",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 632595834,
            "range": "± 963199",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5580853,
            "range": "± 46130",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83872724,
            "range": "± 2216740",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25994268774,
            "range": "± 156717910",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 63827615,
            "range": "± 6035722",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4546133678,
            "range": "± 20703795",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 282446480,
            "range": "± 649410",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 665849480,
            "range": "± 2430139",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 360503473,
            "range": "± 464404",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 384668274,
            "range": "± 1513030",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1066534811,
            "range": "± 2766276",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 660992351,
            "range": "± 489539",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3603151,
            "range": "± 9021",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 134440816,
            "range": "± 884897",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 137665367,
            "range": "± 418559",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4299665825,
            "range": "± 17401621",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1841464132,
            "range": "± 8985471",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 799382611,
            "range": "± 4116095",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374435050,
            "range": "± 1472901",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 265303671,
            "range": "± 302562",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 656484544,
            "range": "± 2454956",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 302062277,
            "range": "± 481048",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 300781191,
            "range": "± 412950",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 934445157,
            "range": "± 1815752",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 611642535,
            "range": "± 12170553",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1702924044,
            "range": "± 59670489",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 759542,
            "range": "± 8964",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1176375,
            "range": "± 17806",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2357680969,
            "range": "± 29610593",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2728167752,
            "range": "± 90456410",
            "unit": "ns/iter"
          },
          {
            "name": "16000,l2,PQ=96,DIM=1536",
            "value": 476735,
            "range": "± 11697",
            "unit": "ns/iter"
          },
          {
            "name": "16000,cosine,PQ=96,DIM=1536",
            "value": 512413,
            "range": "± 7406",
            "unit": "ns/iter"
          },
          {
            "name": "16000,dot,PQ=96,DIM=1536",
            "value": 940856,
            "range": "± 21035",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 351,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 364,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 372,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 426,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "BubbleCal",
            "username": "BubbleCal",
            "email": "bubble-cal@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "439db38e3ca078ecc2e7015a07625eb9126735fa",
          "message": "perf: improve constructing dist table (#3155)\n\n```\r\nconstruc_dist_table: 16000,l2,PQ=96,DIM=1536\r\n                        time:   [157.75 µs 157.97 µs 158.19 µs]\r\n                        change: [-28.865% -28.731% -28.581%] (p = 0.00 < 0.10)\r\n                        Performance has improved.\r\n\r\nconstruc_dist_table: 16000,dot,PQ=96,DIM=1536\r\n                        time:   [275.56 µs 276.02 µs 276.47 µs]\r\n                        change: [-2.8930% -2.4637% -2.0839%] (p = 0.00 < 0.10)\r\n                        Performance has improved.\r\n```\r\n\r\n---------\r\n\r\nSigned-off-by: BubbleCal <bubble-cal@outlook.com>",
          "timestamp": "2024-11-23T02:57:43Z",
          "url": "https://github.com/lancedb/lance/commit/439db38e3ca078ecc2e7015a07625eb9126735fa"
        },
        "date": 1732354576660,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10778718262,
            "range": "± 41274119",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 405273247,
            "range": "± 14492972",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4721987553,
            "range": "± 32037907",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 271130975,
            "range": "± 780475",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 726413558,
            "range": "± 7909782",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 356214502,
            "range": "± 160404",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1165085298,
            "range": "± 1989503",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 718314887,
            "range": "± 5606779",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4218556,
            "range": "± 22701",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 803081447,
            "range": "± 6394531",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 268023624,
            "range": "± 396174",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 269242048,
            "range": "± 1071866",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1840032370,
            "range": "± 7939037",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 668559474,
            "range": "± 2450601",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 337805270,
            "range": "± 2784567",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 336213035,
            "range": "± 372316",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1039306104,
            "range": "± 1005286",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 622278636,
            "range": "± 2514093",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5438236,
            "range": "± 96076",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83352548,
            "range": "± 998828",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25759726610,
            "range": "± 253056153",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 59533277,
            "range": "± 3776218",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4542618660,
            "range": "± 17317182",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 278220536,
            "range": "± 5921607",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 666358827,
            "range": "± 3515427",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 352568700,
            "range": "± 465214",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 384194633,
            "range": "± 915318",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1063494233,
            "range": "± 2007763",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 656065090,
            "range": "± 1002709",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3430787,
            "range": "± 12133",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135023803,
            "range": "± 440539",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138155885,
            "range": "± 501523",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4342410278,
            "range": "± 20394539",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1867257403,
            "range": "± 8795554",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 799656508,
            "range": "± 7146608",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 371245210,
            "range": "± 1552005",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 265966762,
            "range": "± 221799",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 661031273,
            "range": "± 1856967",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 301568336,
            "range": "± 662956",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 302407328,
            "range": "± 773522",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 946114857,
            "range": "± 2700325",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 614072091,
            "range": "± 894813",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1721084131,
            "range": "± 65238919",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 786060,
            "range": "± 9273",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1166441,
            "range": "± 29654",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2234236779,
            "range": "± 8394091",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2954027344,
            "range": "± 22568523",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 89758,
            "range": "± 1928",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 165101,
            "range": "± 2308",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 440145,
            "range": "± 9362",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 476426,
            "range": "± 12985",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 935833,
            "range": "± 10923",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 364,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 372,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9c08d2d1ca2ff72bd1c2ea4a84400a7b655b2172",
          "message": "feat: expose the table provider (#3162)\n\nThis makes it easier to use `Lance` inside of datafusion (see unit test\r\nfor example)",
          "timestamp": "2024-11-23T13:20:01Z",
          "url": "https://github.com/lancedb/lance/commit/9c08d2d1ca2ff72bd1c2ea4a84400a7b655b2172"
        },
        "date": 1732441030078,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10841939782,
            "range": "± 72522690",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404522509,
            "range": "± 2639294",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4770214155,
            "range": "± 36800286",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 283516289,
            "range": "± 952553",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 735185991,
            "range": "± 4512804",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 356896334,
            "range": "± 3451216",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1189593866,
            "range": "± 8942283",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 738185838,
            "range": "± 7013214",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4243775,
            "range": "± 17790",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 808038731,
            "range": "± 15798553",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 279842187,
            "range": "± 1572030",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 279956050,
            "range": "± 667967",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1828459416,
            "range": "± 17442001",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 666843159,
            "range": "± 3981681",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 333053823,
            "range": "± 186762",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 337391164,
            "range": "± 198374",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1046458776,
            "range": "± 2065545",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 630987382,
            "range": "± 945053",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5410397,
            "range": "± 55443",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 81086129,
            "range": "± 1496301",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26079207646,
            "range": "± 555402303",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 57682955,
            "range": "± 2701003",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4490647182,
            "range": "± 32666094",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 289154765,
            "range": "± 819007",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 674754982,
            "range": "± 2085560",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 356262403,
            "range": "± 527442",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 387150981,
            "range": "± 632576",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1072165454,
            "range": "± 2363629",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 671126929,
            "range": "± 3080354",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3385939,
            "range": "± 21538",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135532240,
            "range": "± 105627",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138622249,
            "range": "± 356557",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4369921449,
            "range": "± 25425766",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1869262701,
            "range": "± 10401705",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 801969145,
            "range": "± 6755791",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 373473231,
            "range": "± 1287553",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268588963,
            "range": "± 281979",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 669080473,
            "range": "± 2185878",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 306256511,
            "range": "± 175157",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 304970183,
            "range": "± 578403",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 967236599,
            "range": "± 1308349",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 616249270,
            "range": "± 77040336",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1686219837,
            "range": "± 75696523",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 763862,
            "range": "± 8090",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1164663,
            "range": "± 23046",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2284801752,
            "range": "± 50411265",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2931096938,
            "range": "± 13556286",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 88417,
            "range": "± 2473",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 187724,
            "range": "± 5035",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 443563,
            "range": "± 8174",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 488566,
            "range": "± 14035",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 936519,
            "range": "± 8050",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 352,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 363,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9c08d2d1ca2ff72bd1c2ea4a84400a7b655b2172",
          "message": "feat: expose the table provider (#3162)\n\nThis makes it easier to use `Lance` inside of datafusion (see unit test\r\nfor example)",
          "timestamp": "2024-11-23T13:20:01Z",
          "url": "https://github.com/lancedb/lance/commit/9c08d2d1ca2ff72bd1c2ea4a84400a7b655b2172"
        },
        "date": 1732527407542,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10751791257,
            "range": "± 87333100",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404867010,
            "range": "± 2657858",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4732319623,
            "range": "± 19588478",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 283096521,
            "range": "± 643231",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 739066312,
            "range": "± 3053647",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 362816430,
            "range": "± 20789161",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1188372638,
            "range": "± 3139138",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 738484299,
            "range": "± 1790787",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4264176,
            "range": "± 24917",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 803589017,
            "range": "± 8635522",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 279251098,
            "range": "± 590293",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 279369322,
            "range": "± 912636",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1885182783,
            "range": "± 10564955",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 665838932,
            "range": "± 2282570",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 336660002,
            "range": "± 215118",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 337362470,
            "range": "± 1879584",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1049918404,
            "range": "± 1795319",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 631463836,
            "range": "± 1796154",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5451266,
            "range": "± 87226",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82372735,
            "range": "± 663447",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26176875403,
            "range": "± 600057008",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 59754843,
            "range": "± 1997943",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4567723594,
            "range": "± 17789421",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 289238553,
            "range": "± 846517",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 673585067,
            "range": "± 2626729",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 356074884,
            "range": "± 1018289",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 388368262,
            "range": "± 827823",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1077593599,
            "range": "± 3837093",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 678447976,
            "range": "± 340989",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3393998,
            "range": "± 18045",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135108220,
            "range": "± 302994",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138875635,
            "range": "± 14951965",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4344748711,
            "range": "± 29773914",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1868076504,
            "range": "± 13420199",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 805620489,
            "range": "± 9046217",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 375714417,
            "range": "± 1687794",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 269707154,
            "range": "± 266952",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 670220403,
            "range": "± 1206702",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 306305276,
            "range": "± 199227",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 302421443,
            "range": "± 348358",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 963708843,
            "range": "± 1453517",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 618369824,
            "range": "± 798614",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1739991988,
            "range": "± 38103505",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 796274,
            "range": "± 5285",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1173682,
            "range": "± 40273",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 1962738468,
            "range": "± 6417889",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2926904268,
            "range": "± 8962454",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 90998,
            "range": "± 1523",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 169772,
            "range": "± 1995",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 448962,
            "range": "± 10051",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 481724,
            "range": "± 10995",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 921318,
            "range": "± 8352",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 352,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 369,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 375,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e6c23436e2a9d98d525e8650390835ca1316afa0",
          "message": "ci: add benchmark suite (#3165)\n\nBenchmarks report to\r\nhttps://bencher.dev/console/projects/weston-lancedb/plots\r\n\r\nAt some point it may be nice for these to be used for regression\r\ndetection in PRs. However, we need to get a stable baseline first.\r\n\r\nThese benchmarks rely on a private runner hosted by LanceDB and some\r\nprivate datasets. They run against GCS. It would be good to get some\r\nNVME & Azure & S3 benchmarks at some point.",
          "timestamp": "2024-11-25T17:56:36Z",
          "url": "https://github.com/lancedb/lance/commit/e6c23436e2a9d98d525e8650390835ca1316afa0"
        },
        "date": 1732613797543,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10792401006,
            "range": "± 67028356",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 407748494,
            "range": "± 1864432",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4791277775,
            "range": "± 19352543",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 279686992,
            "range": "± 522062",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 736463327,
            "range": "± 3137141",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 363297572,
            "range": "± 217931",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1179928276,
            "range": "± 1652766",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 730866207,
            "range": "± 2287540",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4279299,
            "range": "± 25460",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 807862987,
            "range": "± 4176017",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 274843271,
            "range": "± 733259",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 274947199,
            "range": "± 572491",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1838959803,
            "range": "± 11246479",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 668994428,
            "range": "± 3041872",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334243436,
            "range": "± 137991",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 336748033,
            "range": "± 1243415",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1044331100,
            "range": "± 2778620",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 625267235,
            "range": "± 17032376",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5447672,
            "range": "± 52087",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82977259,
            "range": "± 1839700",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26040227832,
            "range": "± 164344538",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 54484487,
            "range": "± 3983549",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4532870703,
            "range": "± 11039176",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 282490992,
            "range": "± 979560",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 665208346,
            "range": "± 1591026",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 354266424,
            "range": "± 654777",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 388122343,
            "range": "± 616052",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1093443521,
            "range": "± 2057199",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 665157530,
            "range": "± 611857",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3437037,
            "range": "± 12763",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135983099,
            "range": "± 298931",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139678224,
            "range": "± 482476",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4343814661,
            "range": "± 28463376",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1854468256,
            "range": "± 11725610",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 802476111,
            "range": "± 4077274",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 375604621,
            "range": "± 5623862",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 267649803,
            "range": "± 254054",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 664770798,
            "range": "± 3449137",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 303305621,
            "range": "± 402987",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 304062485,
            "range": "± 4719723",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 950316868,
            "range": "± 1654735",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 610974153,
            "range": "± 795816",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1725038334,
            "range": "± 88092767",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 772012,
            "range": "± 11156",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1354139,
            "range": "± 22778",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2058122995,
            "range": "± 11689289",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3063796759,
            "range": "± 33164319",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 87133,
            "range": "± 3423",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 165931,
            "range": "± 1649",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 434998,
            "range": "± 12904",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 478451,
            "range": "± 9644",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 927511,
            "range": "± 10496",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 364,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 364,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 374,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 427,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dc9afbb5ef9979c546fe7279c1be367a15dedeab",
          "message": "chore: add expect_stat, expect_single_stat in GetStat trait (#3126)\n\nThis PR tries to add helper function `expect_stat` and\r\n`expect_single_stat` to make DataBlock statistics easier to use.",
          "timestamp": "2024-11-26T16:40:25Z",
          "url": "https://github.com/lancedb/lance/commit/dc9afbb5ef9979c546fe7279c1be367a15dedeab"
        },
        "date": 1732700195372,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10854387497,
            "range": "± 22115209",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 407901210,
            "range": "± 2474258",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4760245372,
            "range": "± 14627589",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 283720134,
            "range": "± 594421",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 738629094,
            "range": "± 3381503",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 356366659,
            "range": "± 2091451",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1194828621,
            "range": "± 3482505",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 738839745,
            "range": "± 1859317",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4259111,
            "range": "± 20836",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 811968704,
            "range": "± 3317781",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 280274965,
            "range": "± 567939",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 280685234,
            "range": "± 494440",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1942729860,
            "range": "± 10745234",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 668104909,
            "range": "± 3536444",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 335162461,
            "range": "± 169192",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 336179153,
            "range": "± 1236417",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1053196054,
            "range": "± 29215206",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 627637007,
            "range": "± 738129",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5416235,
            "range": "± 75090",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 81615341,
            "range": "± 1082913",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26060134957,
            "range": "± 128771834",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 58439955,
            "range": "± 3972531",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4523602199,
            "range": "± 15180895",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 288293188,
            "range": "± 453036",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 675664212,
            "range": "± 2243104",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 357620184,
            "range": "± 717188",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 384939126,
            "range": "± 523644",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1081121001,
            "range": "± 2524461",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 663368877,
            "range": "± 483971",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3380012,
            "range": "± 11823",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135205047,
            "range": "± 275003",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138841483,
            "range": "± 450088",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4352081804,
            "range": "± 29516924",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1852800027,
            "range": "± 13456307",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 796135155,
            "range": "± 9065638",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 373877245,
            "range": "± 1131178",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268542176,
            "range": "± 278507",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 668658352,
            "range": "± 2512651",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 304244761,
            "range": "± 615674",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305373682,
            "range": "± 315718",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 970405138,
            "range": "± 989972",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 617978797,
            "range": "± 992455",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1682992375,
            "range": "± 34510927",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 761298,
            "range": "± 6240",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1314657,
            "range": "± 16688",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2322112265,
            "range": "± 116026721",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3020665224,
            "range": "± 174320091",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 88714,
            "range": "± 1788",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 161652,
            "range": "± 2240",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 444596,
            "range": "± 11242",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 481184,
            "range": "± 7764",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 923086,
            "range": "± 10097",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 367,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 376,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 431,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dc9afbb5ef9979c546fe7279c1be367a15dedeab",
          "message": "chore: add expect_stat, expect_single_stat in GetStat trait (#3126)\n\nThis PR tries to add helper function `expect_stat` and\r\n`expect_single_stat` to make DataBlock statistics easier to use.",
          "timestamp": "2024-11-26T16:40:25Z",
          "url": "https://github.com/lancedb/lance/commit/dc9afbb5ef9979c546fe7279c1be367a15dedeab"
        },
        "date": 1732786637499,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10785624775,
            "range": "± 58302492",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404754290,
            "range": "± 2180694",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4713266148,
            "range": "± 19199535",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 282634250,
            "range": "± 1976266",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 736623014,
            "range": "± 2990706",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 358094794,
            "range": "± 300446",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1196056749,
            "range": "± 1650488",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 735043358,
            "range": "± 2024388",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4230902,
            "range": "± 13772",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 796964420,
            "range": "± 4764633",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 279375414,
            "range": "± 712794",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 279654869,
            "range": "± 504419",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1862513834,
            "range": "± 9370850",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 669844392,
            "range": "± 2628142",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 337849169,
            "range": "± 181336",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 337296859,
            "range": "± 392848",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1045229267,
            "range": "± 1031077",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 624741912,
            "range": "± 574627",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5458578,
            "range": "± 56433",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82463513,
            "range": "± 1247041",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26104596911,
            "range": "± 108430693",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 58578844,
            "range": "± 4826457",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4518512892,
            "range": "± 20515494",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 288480760,
            "range": "± 9083067",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 672464092,
            "range": "± 5554426",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 354503082,
            "range": "± 512865",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 384598937,
            "range": "± 1021790",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1076470315,
            "range": "± 3502291",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 666126127,
            "range": "± 5458080",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3327778,
            "range": "± 10849",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135309821,
            "range": "± 258005",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138482094,
            "range": "± 479142",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4338052635,
            "range": "± 29068704",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1858835210,
            "range": "± 17695963",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 800704603,
            "range": "± 7419022",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 372978353,
            "range": "± 1181266",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 267264361,
            "range": "± 301664",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 665664588,
            "range": "± 2163189",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 305550249,
            "range": "± 761950",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 301736937,
            "range": "± 346335",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 968795822,
            "range": "± 1397373",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 610895016,
            "range": "± 841647",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1684618148,
            "range": "± 66726847",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 773805,
            "range": "± 6425",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1340527,
            "range": "± 14493",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2014699075,
            "range": "± 7772993",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3020073164,
            "range": "± 23996092",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 87464,
            "range": "± 1286",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 161716,
            "range": "± 8537",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 443298,
            "range": "± 9959",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 476414,
            "range": "± 5679",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 917486,
            "range": "± 5428",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 351,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 366,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 370,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dc9afbb5ef9979c546fe7279c1be367a15dedeab",
          "message": "chore: add expect_stat, expect_single_stat in GetStat trait (#3126)\n\nThis PR tries to add helper function `expect_stat` and\r\n`expect_single_stat` to make DataBlock statistics easier to use.",
          "timestamp": "2024-11-26T16:40:25Z",
          "url": "https://github.com/lancedb/lance/commit/dc9afbb5ef9979c546fe7279c1be367a15dedeab"
        },
        "date": 1732873048836,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10841799035,
            "range": "± 43448677",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 407009083,
            "range": "± 9468010",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4723379923,
            "range": "± 18530104",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 285656734,
            "range": "± 413875",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 736996174,
            "range": "± 3395144",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 361340356,
            "range": "± 288784",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1191733214,
            "range": "± 2458473",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 721360425,
            "range": "± 2629422",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4319326,
            "range": "± 25442",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 808201460,
            "range": "± 8205645",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 280371738,
            "range": "± 289325",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 281648640,
            "range": "± 709990",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1851238836,
            "range": "± 11594550",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 665224393,
            "range": "± 1834980",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 336567190,
            "range": "± 4571201",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 336895652,
            "range": "± 3840186",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1050357346,
            "range": "± 2163870",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 626856555,
            "range": "± 634435",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5519881,
            "range": "± 68117",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82115000,
            "range": "± 1714496",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26156284435,
            "range": "± 186369171",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 56718714,
            "range": "± 4453053",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4500568119,
            "range": "± 15861134",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 290459815,
            "range": "± 389120",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 676694856,
            "range": "± 2665123",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 356911469,
            "range": "± 1301128",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 388399876,
            "range": "± 1136889",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1075282533,
            "range": "± 4371702",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 661223843,
            "range": "± 5475187",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3445866,
            "range": "± 9947",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136546394,
            "range": "± 321493",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 140518014,
            "range": "± 380568",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4357231039,
            "range": "± 10429100",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1843346507,
            "range": "± 13733775",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 797849025,
            "range": "± 5396841",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 375572842,
            "range": "± 827904",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268505032,
            "range": "± 15963383",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 670500940,
            "range": "± 1160716",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 304124866,
            "range": "± 350686",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 304721410,
            "range": "± 408129",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 964065355,
            "range": "± 1269454",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613507333,
            "range": "± 1010817",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1709200377,
            "range": "± 61849592",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 769549,
            "range": "± 6772",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1339397,
            "range": "± 37070",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2265275539,
            "range": "± 102617107",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3083003333,
            "range": "± 11538832",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 88735,
            "range": "± 2334",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 164051,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 441194,
            "range": "± 11040",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 471734,
            "range": "± 17943",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 924140,
            "range": "± 10508",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 356,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 367,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 377,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 431,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dc9afbb5ef9979c546fe7279c1be367a15dedeab",
          "message": "chore: add expect_stat, expect_single_stat in GetStat trait (#3126)\n\nThis PR tries to add helper function `expect_stat` and\r\n`expect_single_stat` to make DataBlock statistics easier to use.",
          "timestamp": "2024-11-26T16:40:25Z",
          "url": "https://github.com/lancedb/lance/commit/dc9afbb5ef9979c546fe7279c1be367a15dedeab"
        },
        "date": 1732959375804,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10852414010,
            "range": "± 45665007",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 402811291,
            "range": "± 2414331",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4749492083,
            "range": "± 21134924",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 282386945,
            "range": "± 686005",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 743953996,
            "range": "± 3086471",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 360968080,
            "range": "± 224349",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1188629341,
            "range": "± 2349527",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 738120862,
            "range": "± 1760652",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4285875,
            "range": "± 22962",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 802951961,
            "range": "± 4393481",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 278151635,
            "range": "± 12304265",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 277544203,
            "range": "± 571045",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1882644301,
            "range": "± 11114990",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 669094027,
            "range": "± 4207191",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 337728772,
            "range": "± 172380",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 335391429,
            "range": "± 334837",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1055079210,
            "range": "± 2054484",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 630644138,
            "range": "± 1123604",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5429087,
            "range": "± 54586",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 81374505,
            "range": "± 1366289",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26195595911,
            "range": "± 219066273",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 59032673,
            "range": "± 2256353",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4493585952,
            "range": "± 18400306",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 285451852,
            "range": "± 4133315",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 677351923,
            "range": "± 2136612",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 354764859,
            "range": "± 1288181",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 391435572,
            "range": "± 893510",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1081031011,
            "range": "± 2823740",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 667850592,
            "range": "± 991570",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3461310,
            "range": "± 15261",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136016867,
            "range": "± 307173",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139175671,
            "range": "± 280781",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4341058425,
            "range": "± 24894255",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1852677027,
            "range": "± 9366952",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 791146389,
            "range": "± 5758588",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 373487232,
            "range": "± 934097",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268452697,
            "range": "± 319000",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 666994833,
            "range": "± 2063041",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 307169411,
            "range": "± 490676",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 302396995,
            "range": "± 398996",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 971749151,
            "range": "± 56306007",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 619602752,
            "range": "± 832462",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1724573185,
            "range": "± 84670952",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 767300,
            "range": "± 5812",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1347043,
            "range": "± 36287",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2011113775,
            "range": "± 6020583",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3021528470,
            "range": "± 11669884",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 93677,
            "range": "± 2794",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 162669,
            "range": "± 1837",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 440839,
            "range": "± 5975",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 481729,
            "range": "± 16721",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 931045,
            "range": "± 8361",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 366,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dc9afbb5ef9979c546fe7279c1be367a15dedeab",
          "message": "chore: add expect_stat, expect_single_stat in GetStat trait (#3126)\n\nThis PR tries to add helper function `expect_stat` and\r\n`expect_single_stat` to make DataBlock statistics easier to use.",
          "timestamp": "2024-11-26T16:40:25Z",
          "url": "https://github.com/lancedb/lance/commit/dc9afbb5ef9979c546fe7279c1be367a15dedeab"
        },
        "date": 1733045767695,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10806908246,
            "range": "± 59823328",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 401155943,
            "range": "± 1140773",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4722695891,
            "range": "± 33078228",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 279094705,
            "range": "± 808232",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 740579157,
            "range": "± 2807426",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 356083248,
            "range": "± 188408",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1191696596,
            "range": "± 1463775",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 736107161,
            "range": "± 1312685",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4315684,
            "range": "± 40659",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 807502084,
            "range": "± 6033820",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 275072066,
            "range": "± 644425",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 275463320,
            "range": "± 636826",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1894057256,
            "range": "± 4553672",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 672733850,
            "range": "± 1600804",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 335055055,
            "range": "± 175076",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 334271513,
            "range": "± 533154",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1048700174,
            "range": "± 1502888",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 624149010,
            "range": "± 1537396",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5467755,
            "range": "± 96470",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82648977,
            "range": "± 1259370",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25935236629,
            "range": "± 144103872",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 58034605,
            "range": "± 2186900",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4503866508,
            "range": "± 14718990",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 284819594,
            "range": "± 803210",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 674413462,
            "range": "± 1258856",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 359194900,
            "range": "± 2525904",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 389342162,
            "range": "± 438323",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1087610015,
            "range": "± 3351087",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 680678671,
            "range": "± 2422994",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3448379,
            "range": "± 7612",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136147888,
            "range": "± 1511903",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139024107,
            "range": "± 488075",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4331788205,
            "range": "± 16346607",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1870249524,
            "range": "± 6281672",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 798314104,
            "range": "± 5462745",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374228349,
            "range": "± 1975617",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268669518,
            "range": "± 178923",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 667224303,
            "range": "± 3028897",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 306915784,
            "range": "± 323874",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305604330,
            "range": "± 730450",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 968080580,
            "range": "± 1372277",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 612701045,
            "range": "± 627007",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1710330832,
            "range": "± 51939034",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 781326,
            "range": "± 7776",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1319323,
            "range": "± 23310",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2040003213,
            "range": "± 7138960",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3099472426,
            "range": "± 21900843",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 90056,
            "range": "± 1983",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 166985,
            "range": "± 2397",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 442099,
            "range": "± 12740",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 491107,
            "range": "± 7357",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 933616,
            "range": "± 11961",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 368,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 432,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "broccoliSpicy",
            "username": "broccoliSpicy",
            "email": "93440049+broccoliSpicy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dc9afbb5ef9979c546fe7279c1be367a15dedeab",
          "message": "chore: add expect_stat, expect_single_stat in GetStat trait (#3126)\n\nThis PR tries to add helper function `expect_stat` and\r\n`expect_single_stat` to make DataBlock statistics easier to use.",
          "timestamp": "2024-11-26T16:40:25Z",
          "url": "https://github.com/lancedb/lance/commit/dc9afbb5ef9979c546fe7279c1be367a15dedeab"
        },
        "date": 1733132254766,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10830302132,
            "range": "± 67118610",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 407535765,
            "range": "± 2358036",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4773120778,
            "range": "± 23237249",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 279351593,
            "range": "± 866022",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 740774886,
            "range": "± 4938304",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 358523030,
            "range": "± 179838",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1188721265,
            "range": "± 3666824",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 734572634,
            "range": "± 2240679",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4284383,
            "range": "± 29449",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 813071773,
            "range": "± 9563103",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 274913392,
            "range": "± 435333",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 274494023,
            "range": "± 2603529",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1770931482,
            "range": "± 8243656",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 671465509,
            "range": "± 1828207",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 338543935,
            "range": "± 94819",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 336398921,
            "range": "± 635333",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1056104608,
            "range": "± 1852374",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 630761476,
            "range": "± 1061767",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5459769,
            "range": "± 86511",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83207970,
            "range": "± 1292294",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26001731789,
            "range": "± 661100425",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 57565810,
            "range": "± 3403280",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4513622658,
            "range": "± 34636463",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 284097569,
            "range": "± 562304",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 674041123,
            "range": "± 6567244",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 358844127,
            "range": "± 723407",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 388840158,
            "range": "± 2718511",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1082161965,
            "range": "± 13701418",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 658319758,
            "range": "± 1071122",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3460207,
            "range": "± 17734",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136287276,
            "range": "± 424066",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139477154,
            "range": "± 562604",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4392498738,
            "range": "± 16289954",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1881351863,
            "range": "± 4518838",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 797264151,
            "range": "± 5996487",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 375928961,
            "range": "± 1616098",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268455602,
            "range": "± 186504",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 670824475,
            "range": "± 2488639",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 307210047,
            "range": "± 1631707",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305041105,
            "range": "± 256746",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 959554124,
            "range": "± 905270",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 618923071,
            "range": "± 58172568",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1699919726,
            "range": "± 41355052",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 775516,
            "range": "± 7891",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1339390,
            "range": "± 12584",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2031696731,
            "range": "± 5486690",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2942232612,
            "range": "± 14420927",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 88123,
            "range": "± 2229",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 188805,
            "range": "± 11829",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 424344,
            "range": "± 9586",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 490783,
            "range": "± 11624",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 925369,
            "range": "± 15803",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 353,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 365,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 428,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "BubbleCal",
            "username": "BubbleCal",
            "email": "bubble-cal@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dc8f0f66a73894e7fc7160b4c3e63a471c53ed62",
          "message": "fix: full text search may produce dup results when search over multiple columns (#3189)\n\nfix #3188\r\n\r\n---------\r\n\r\nSigned-off-by: BubbleCal <bubble-cal@outlook.com>",
          "timestamp": "2024-12-03T03:51:22Z",
          "url": "https://github.com/lancedb/lance/commit/dc8f0f66a73894e7fc7160b4c3e63a471c53ed62"
        },
        "date": 1733218588059,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10799095288,
            "range": "± 83255789",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 406935059,
            "range": "± 1860332",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4794044631,
            "range": "± 16326329",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 279053624,
            "range": "± 601516",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 740766287,
            "range": "± 3180379",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 363714876,
            "range": "± 212395",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1179292273,
            "range": "± 1771421",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 736613413,
            "range": "± 4272686",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4280715,
            "range": "± 22686",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 806000067,
            "range": "± 5808685",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 273299192,
            "range": "± 1320316",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272935770,
            "range": "± 1188601",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1805934947,
            "range": "± 15868170",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 669529471,
            "range": "± 2989813",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 337326775,
            "range": "± 184555",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 338487292,
            "range": "± 601929",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1096252523,
            "range": "± 24456102",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 628935606,
            "range": "± 686556",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5468330,
            "range": "± 67564",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82417981,
            "range": "± 883377",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26009603151,
            "range": "± 186412920",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 57410061,
            "range": "± 3747601",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4516299301,
            "range": "± 27104875",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 280664162,
            "range": "± 725825",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 673220692,
            "range": "± 2420849",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 357568063,
            "range": "± 210590",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 387137850,
            "range": "± 612333",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1086857641,
            "range": "± 2660392",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 679410398,
            "range": "± 286259",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3510631,
            "range": "± 10624",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135522011,
            "range": "± 685497",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139653290,
            "range": "± 426663",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4357811021,
            "range": "± 19882166",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1861782461,
            "range": "± 11739571",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 807539726,
            "range": "± 6031084",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 375428077,
            "range": "± 1158121",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 267970687,
            "range": "± 376605",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 668784147,
            "range": "± 1691121",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 307723680,
            "range": "± 602320",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 302806972,
            "range": "± 1661882",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 967681406,
            "range": "± 45507751",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613426927,
            "range": "± 742775",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1738021712,
            "range": "± 46562505",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 790655,
            "range": "± 7303",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1337825,
            "range": "± 11090",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2294240141,
            "range": "± 156173930",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3093883521,
            "range": "± 160218893",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 89250,
            "range": "± 2330",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 164109,
            "range": "± 1527",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 447847,
            "range": "± 19114",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 502242,
            "range": "± 17443",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 918013,
            "range": "± 9704",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 367,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 378,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 431,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chongchen Chen",
            "username": "chenkovsky",
            "email": "chenkovsky@qq.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "574b7d086e502b72198d75e05b026ad2484612ee",
          "message": "fix: fix storage options for dataset builder (#3156)",
          "timestamp": "2024-12-04T01:17:35Z",
          "url": "https://github.com/lancedb/lance/commit/574b7d086e502b72198d75e05b026ad2484612ee"
        },
        "date": 1733305002013,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10707600780,
            "range": "± 44548449",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 407280423,
            "range": "± 1362115",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4746894583,
            "range": "± 23985103",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 277149461,
            "range": "± 622167",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 741057264,
            "range": "± 2603825",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 364910232,
            "range": "± 261008",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1177847494,
            "range": "± 7130092",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 722191722,
            "range": "± 1588453",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4306628,
            "range": "± 30656",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 808122760,
            "range": "± 9124947",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 271440603,
            "range": "± 573442",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272221529,
            "range": "± 1369774",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1872883123,
            "range": "± 10060453",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 670242881,
            "range": "± 1687323",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 338729671,
            "range": "± 142635",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 335570932,
            "range": "± 445190",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1052907163,
            "range": "± 920977",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 624576039,
            "range": "± 1362059",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5443391,
            "range": "± 68932",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82867100,
            "range": "± 1539252",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25972998042,
            "range": "± 62931028",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 60071046,
            "range": "± 2097234",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4483475402,
            "range": "± 16904910",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 280775875,
            "range": "± 1346924",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 671918039,
            "range": "± 1764888",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 357105422,
            "range": "± 541015",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 388149202,
            "range": "± 646103",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1075113571,
            "range": "± 1618949",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 676247479,
            "range": "± 6290850",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3460611,
            "range": "± 21782",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135773834,
            "range": "± 172271",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138772341,
            "range": "± 771425",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4338592802,
            "range": "± 35037168",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1867549270,
            "range": "± 11722129",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 794863852,
            "range": "± 5804559",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374744186,
            "range": "± 1101110",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 267494791,
            "range": "± 227192",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 664793035,
            "range": "± 2385697",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 305260058,
            "range": "± 303795",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 306203406,
            "range": "± 471294",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 961787161,
            "range": "± 1757996",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 618382207,
            "range": "± 1278527",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1701343644,
            "range": "± 28459975",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 768032,
            "range": "± 9378",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1345261,
            "range": "± 8893",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2300535189,
            "range": "± 10392561",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3107968716,
            "range": "± 161478562",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 87762,
            "range": "± 1857",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 164501,
            "range": "± 1457",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 438695,
            "range": "± 13160",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 464847,
            "range": "± 7259",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 928904,
            "range": "± 5588",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 366,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 375,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lance Release",
            "email": "lance-dev@lancedb.com"
          },
          "committer": {
            "name": "Lance Release",
            "email": "lance-dev@lancedb.com"
          },
          "id": "6e84834bd0129edb8acd1159590d8d602c81e26e",
          "message": "Bump version",
          "timestamp": "2024-12-04T22:29:22Z",
          "url": "https://github.com/lancedb/lance/commit/6e84834bd0129edb8acd1159590d8d602c81e26e"
        },
        "date": 1733391469810,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10737439501,
            "range": "± 53393352",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 406829750,
            "range": "± 1972593",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4716900040,
            "range": "± 11354138",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 275083639,
            "range": "± 436147",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 735949700,
            "range": "± 2653166",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 362001291,
            "range": "± 151515",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1182394960,
            "range": "± 936578",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 739025188,
            "range": "± 2240026",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4262140,
            "range": "± 13371",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 810166759,
            "range": "± 4578904",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 271007727,
            "range": "± 429605",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 271774447,
            "range": "± 1705557",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1907316744,
            "range": "± 11765060",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 675009486,
            "range": "± 37234462",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 338539611,
            "range": "± 136067",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 339263532,
            "range": "± 262384",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1050961991,
            "range": "± 2357977",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 640029556,
            "range": "± 2588898",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5409928,
            "range": "± 119621",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 80411971,
            "range": "± 1276935",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25849280024,
            "range": "± 92950655",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 61362757,
            "range": "± 2064395",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4460676753,
            "range": "± 39961807",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 280136776,
            "range": "± 557046",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 664222995,
            "range": "± 3050322",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 364947576,
            "range": "± 754093",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 383519722,
            "range": "± 655328",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1091686627,
            "range": "± 4143112",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 681206804,
            "range": "± 16832177",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3502590,
            "range": "± 7456",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135563089,
            "range": "± 396740",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139198328,
            "range": "± 586504",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4302909514,
            "range": "± 16001818",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1870085698,
            "range": "± 15946574",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 800909143,
            "range": "± 8418909",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 370835191,
            "range": "± 1042571",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 264084485,
            "range": "± 336007",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 669697933,
            "range": "± 2945394",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 307316563,
            "range": "± 448317",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305870014,
            "range": "± 379298",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 967047750,
            "range": "± 691127",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 613696649,
            "range": "± 6450601",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1717913866,
            "range": "± 111240740",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 761678,
            "range": "± 6736",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1344393,
            "range": "± 24599",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2025070490,
            "range": "± 10094786",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3080887847,
            "range": "± 35467727",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 88893,
            "range": "± 1300",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 163093,
            "range": "± 1508",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 440607,
            "range": "± 11377",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 476984,
            "range": "± 8919",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 931304,
            "range": "± 10539",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 357,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 367,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 377,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 432,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1e349cd6007869276969cb1b51ce40eac450e299",
          "message": "fix!: correctly handle nulls in btree and bitmap indices (#3211)\n\nThere were a few issues with our null handling in scalar indices.\r\n\r\nFirst, it appears I assumed earlier that `X < NULL` and `X > NULL` would\r\nalways be false. However, in `arrow-rs` the ordering considers `NULL` to\r\nbe \"the smallest value\" and so `X < NULL` always evaluated to true. This\r\nrequired some changes to the logic in the btree and bitmap indices.\r\n\r\nSecond, the btree index was still using the v1 file format because it\r\nrelied on the page size to keep track of the index's batch size. I've\r\ninstead made the batch size a configurable property (configurable in\r\ncode, not configurable by users) and made it so that btree can use the\r\nv2 file format.\r\n\r\nFinally, related to the above, I changed it so we now write v2 files for\r\nall scalar indices, even if the dataset is a v1 dataset. I think that's\r\na reasonable decision at this point.\r\n\r\nThe logic to fallback and read the old v1 files was already in place (I\r\nbelieve @BubbleCal added it back when working on inverted index) but I\r\nadded a migration test just to be sure we weren't breaking our btree /\r\nbitmap support.\r\n\r\nUsers with existing bitmap indices will get the new correct behavior\r\nwithout any changes.\r\nUsers with existing btree indices will get some of the new correct\r\nbehavior but will need to retrain their indices to get all of the\r\ncorrect behavior.\r\n\r\nBREAKING CHANGE: Bitmap and btree indices will no longer be readable by\r\nolder versions of Lance. This is not a \"backwards compatibility change\"\r\n(no APIs or code will stop working) but rather a \"forwards compatibility\r\nchange\" (you need to be careful in a multi-verison deployment or if you\r\nroll back)",
          "timestamp": "2024-12-06T00:27:25Z",
          "url": "https://github.com/lancedb/lance/commit/1e349cd6007869276969cb1b51ce40eac450e299"
        },
        "date": 1733477866996,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10820707094,
            "range": "± 43997513",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404703628,
            "range": "± 3346162",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4767524474,
            "range": "± 24234512",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276370811,
            "range": "± 568726",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 740709262,
            "range": "± 4617781",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 359331828,
            "range": "± 356892",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1177934359,
            "range": "± 2048983",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 739804810,
            "range": "± 1739078",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4303962,
            "range": "± 17881",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 806768732,
            "range": "± 4867994",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 272449697,
            "range": "± 379201",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 272897619,
            "range": "± 956465",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1834812475,
            "range": "± 5671450",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 668547313,
            "range": "± 1260222",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334929143,
            "range": "± 114295",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 335545964,
            "range": "± 146760",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1047712642,
            "range": "± 2899202",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 636872549,
            "range": "± 514193",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5484981,
            "range": "± 60725",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 80685217,
            "range": "± 1302525",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25844563256,
            "range": "± 56478885",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 62094606,
            "range": "± 3015497",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4509471220,
            "range": "± 14741305",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 282608593,
            "range": "± 1280615",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 669705701,
            "range": "± 3043547",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 366953343,
            "range": "± 2397208",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 384441211,
            "range": "± 550208",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1085938830,
            "range": "± 1217511",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 663758917,
            "range": "± 493406",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3426316,
            "range": "± 6541",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135206567,
            "range": "± 326327",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138753872,
            "range": "± 561845",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4289967885,
            "range": "± 30581121",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1839206966,
            "range": "± 4390342",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 801702316,
            "range": "± 2497540",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 371744015,
            "range": "± 2217192",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 266733265,
            "range": "± 13145146",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 664116648,
            "range": "± 2622439",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 306950325,
            "range": "± 636850",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305404787,
            "range": "± 587960",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 963757467,
            "range": "± 1765504",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 617904825,
            "range": "± 836260",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1715218801,
            "range": "± 44343727",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 784803,
            "range": "± 5226",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1351033,
            "range": "± 24990",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2315892801,
            "range": "± 15504866",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2918259536,
            "range": "± 15723049",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 90562,
            "range": "± 1827",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 163347,
            "range": "± 8282",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 451796,
            "range": "± 8213",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 472400,
            "range": "± 10674",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 472094,
            "range": "± 6768",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 356,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 367,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 377,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Xu",
            "username": "eddyxu",
            "email": "lei@lancedb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "84c6fc00e9666836a14779218de169cbbfaa3d74",
          "message": "chore: remove cuvs and pylibraft (#3214)",
          "timestamp": "2024-12-07T01:50:22Z",
          "url": "https://github.com/lancedb/lance/commit/84c6fc00e9666836a14779218de169cbbfaa3d74"
        },
        "date": 1733564242704,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10717231382,
            "range": "± 73231242",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 405248450,
            "range": "± 1704737",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4756118681,
            "range": "± 14426689",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 282368110,
            "range": "± 674461",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 734935843,
            "range": "± 2061712",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 358980630,
            "range": "± 285039",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1188832489,
            "range": "± 1491519",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 725540830,
            "range": "± 4430476",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4262255,
            "range": "± 12408",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 797991129,
            "range": "± 3365292",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 275710505,
            "range": "± 414685",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 276710023,
            "range": "± 1124417",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1767730145,
            "range": "± 5023518",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 671879420,
            "range": "± 3211253",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 337090926,
            "range": "± 146078",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 338810704,
            "range": "± 825386",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1050089403,
            "range": "± 1451248",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 637321037,
            "range": "± 3198649",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5445946,
            "range": "± 34573",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 81189317,
            "range": "± 1906544",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25885804623,
            "range": "± 138246226",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 61185468,
            "range": "± 2620064",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4492360602,
            "range": "± 18904135",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 286769031,
            "range": "± 649227",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 672265055,
            "range": "± 2002022",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 366452699,
            "range": "± 2085343",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 388504668,
            "range": "± 518321",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1077746085,
            "range": "± 2650366",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 675274306,
            "range": "± 345065",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3482293,
            "range": "± 17411",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 135396837,
            "range": "± 440989",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138610494,
            "range": "± 478050",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4276158851,
            "range": "± 34895158",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1867522622,
            "range": "± 10881205",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 791278651,
            "range": "± 4863122",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 372789604,
            "range": "± 1394728",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 268471142,
            "range": "± 219153",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 667940813,
            "range": "± 2369513",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 307047787,
            "range": "± 352968",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305487829,
            "range": "± 1497319",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 965965717,
            "range": "± 1030122",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 612998187,
            "range": "± 28419252",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1722334547,
            "range": "± 97763604",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 767323,
            "range": "± 6422",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1350850,
            "range": "± 15920",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2049867550,
            "range": "± 12244015",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3136645933,
            "range": "± 18825292",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 88011,
            "range": "± 1257",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 164082,
            "range": "± 1120",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 442392,
            "range": "± 10611",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 482378,
            "range": "± 14466",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 488605,
            "range": "± 38165",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 355,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 368,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 376,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 430,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "BubbleCal",
            "username": "BubbleCal",
            "email": "bubble-cal@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4444c60b40e163ddbef279130f03a3d992d6515b",
          "message": "feat!: support hamming distance & binary vector (#3198)",
          "timestamp": "2024-12-07T15:16:37Z",
          "url": "https://github.com/lancedb/lance/commit/4444c60b40e163ddbef279130f03a3d992d6515b"
        },
        "date": 1733650607591,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10795981464,
            "range": "± 12878579",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 404283806,
            "range": "± 2201235",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4766217388,
            "range": "± 39732448",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 286121405,
            "range": "± 741099",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 738833055,
            "range": "± 2378789",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 363558523,
            "range": "± 12608781",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1206904033,
            "range": "± 1728568",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 733853837,
            "range": "± 3014182",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4298800,
            "range": "± 18670",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 803871094,
            "range": "± 4305751",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 281765081,
            "range": "± 368313",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 282069718,
            "range": "± 497535",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1786454181,
            "range": "± 17767666",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 670550385,
            "range": "± 5452785",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 334473359,
            "range": "± 260956",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 335134075,
            "range": "± 205102",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1047940885,
            "range": "± 2098783",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 635353811,
            "range": "± 1067832",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5500563,
            "range": "± 64808",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 78507229,
            "range": "± 1442586",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26190312462,
            "range": "± 180988324",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 57278375,
            "range": "± 4127047",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4477672842,
            "range": "± 42411190",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 291324558,
            "range": "± 790666",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 676890720,
            "range": "± 1857424",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 364587721,
            "range": "± 394364",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 387421574,
            "range": "± 1196355",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1082105630,
            "range": "± 2121350",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 662499362,
            "range": "± 735487",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3324123,
            "range": "± 13222",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136045684,
            "range": "± 433255",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139750495,
            "range": "± 273852",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4321879131,
            "range": "± 15299076",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1863468289,
            "range": "± 8556054",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 802717723,
            "range": "± 5983766",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 374127140,
            "range": "± 1052127",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 269783678,
            "range": "± 336168",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 667709511,
            "range": "± 4662207",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 305574996,
            "range": "± 387047",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 304432934,
            "range": "± 445564",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 972287201,
            "range": "± 1818124",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 614613002,
            "range": "± 946012",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1746652718,
            "range": "± 132090489",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 736387,
            "range": "± 15357",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1363597,
            "range": "± 32713",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2295174830,
            "range": "± 20416003",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2910003946,
            "range": "± 12842662",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 88687,
            "range": "± 1305",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 164384,
            "range": "± 4087",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 445802,
            "range": "± 8809",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 486884,
            "range": "± 8595",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 466186,
            "range": "± 5225",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 353,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 364,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Xu",
            "username": "eddyxu",
            "email": "lei@lancedb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f1c6c3e4f0c026c650d3b2e310e5b6efaa6fef85",
          "message": "feat: support blob api in pytorch loader (#3217)\n\nSupport handling Blob data in PyTorch loader",
          "timestamp": "2024-12-08T15:54:28Z",
          "url": "https://github.com/lancedb/lance/commit/f1c6c3e4f0c026c650d3b2e310e5b6efaa6fef85"
        },
        "date": 1733737000407,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10723953660,
            "range": "± 48009616",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 398105232,
            "range": "± 1514886",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4688220555,
            "range": "± 13864689",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 280061070,
            "range": "± 1534516",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 724584895,
            "range": "± 3652283",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 350655025,
            "range": "± 176680",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1171718239,
            "range": "± 2139271",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 725263529,
            "range": "± 1994313",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4270549,
            "range": "± 28160",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 798201954,
            "range": "± 6007487",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 274198707,
            "range": "± 551649",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 274880818,
            "range": "± 722027",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1886129812,
            "range": "± 11547280",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 662461401,
            "range": "± 7475414",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 332319049,
            "range": "± 82443",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 331321559,
            "range": "± 372012",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1008437329,
            "range": "± 10238533",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 619582517,
            "range": "± 1561026",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5483953,
            "range": "± 60395",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 81093715,
            "range": "± 1599710",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 25369243862,
            "range": "± 69146227",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 57507828,
            "range": "± 3484239",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4506958309,
            "range": "± 11314037",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 284643730,
            "range": "± 509290",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 659269470,
            "range": "± 6408250",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 351427510,
            "range": "± 1235053",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 375494060,
            "range": "± 520782",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1049720484,
            "range": "± 2023370",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 662931487,
            "range": "± 490079",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3389846,
            "range": "± 16287",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 134859631,
            "range": "± 620946",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 138737536,
            "range": "± 454124",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4260727761,
            "range": "± 30088590",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1838827993,
            "range": "± 11835887",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 796776769,
            "range": "± 6814134",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 367534179,
            "range": "± 1415950",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 258756604,
            "range": "± 288223",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 662770637,
            "range": "± 3269046",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 300429662,
            "range": "± 855048",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 301042822,
            "range": "± 423223",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 936413331,
            "range": "± 1385742",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 605609584,
            "range": "± 1419174",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1688513303,
            "range": "± 47490471",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 807360,
            "range": "± 6320",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1339462,
            "range": "± 36002",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2025313190,
            "range": "± 11674973",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3093851403,
            "range": "± 19471799",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 83718,
            "range": "± 2072",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 162636,
            "range": "± 1815",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 444443,
            "range": "± 8655",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 478022,
            "range": "± 11956",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 465039,
            "range": "± 4372",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 352,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 363,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 373,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 427,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "BubbleCal",
            "username": "BubbleCal",
            "email": "bubble-cal@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ef9d0c2be05f4b046418dd772dc01a4cc92955e8",
          "message": "docs: add doc and test for 4bit PQ (#3212)",
          "timestamp": "2024-12-10T02:35:45Z",
          "url": "https://github.com/lancedb/lance/commit/ef9d0c2be05f4b046418dd772dc01a4cc92955e8"
        },
        "date": 1733823427195,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10736271217,
            "range": "± 47309783",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 403127035,
            "range": "± 1358484",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4739080277,
            "range": "± 12106601",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 287154815,
            "range": "± 698768",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 739842925,
            "range": "± 5737887",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 360117022,
            "range": "± 2551227",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1209001904,
            "range": "± 1767434",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 738856299,
            "range": "± 4471905",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4340475,
            "range": "± 30922",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 799257847,
            "range": "± 5882053",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 281714549,
            "range": "± 599593",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 282409008,
            "range": "± 562098",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1744886569,
            "range": "± 8915835",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 670691940,
            "range": "± 1634736",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 335821163,
            "range": "± 140923",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 336347980,
            "range": "± 2687338",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1050141579,
            "range": "± 13295369",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 645961854,
            "range": "± 5494536",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5382492,
            "range": "± 71545",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83745861,
            "range": "± 1767201",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26318877501,
            "range": "± 144822242",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 57343152,
            "range": "± 5852106",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4491520568,
            "range": "± 33100483",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 292712872,
            "range": "± 1241869",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 672859270,
            "range": "± 1209796",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 367583537,
            "range": "± 485961",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 388433193,
            "range": "± 976212",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1080094753,
            "range": "± 2494632",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 660342115,
            "range": "± 585856",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3494552,
            "range": "± 12365",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 137154238,
            "range": "± 271995",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 140930976,
            "range": "± 455594",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4296945052,
            "range": "± 30249293",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1842677557,
            "range": "± 3545695",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 804440364,
            "range": "± 4575584",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 376992264,
            "range": "± 19169761",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 269607292,
            "range": "± 238474",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 675503841,
            "range": "± 2625374",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 307701298,
            "range": "± 242039",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 305650083,
            "range": "± 379957",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 965936115,
            "range": "± 1221804",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 616507508,
            "range": "± 738467",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1735286379,
            "range": "± 102124475",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 784612,
            "range": "± 5285",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1312879,
            "range": "± 34621",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2014468002,
            "range": "± 20592691",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2953357852,
            "range": "± 6767296",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 91657,
            "range": "± 1829",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 163788,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 434112,
            "range": "± 14722",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 479681,
            "range": "± 16002",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 468777,
            "range": "± 2702",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 354,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 367,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 431,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "connellPortrait",
            "username": "connellPortrait",
            "email": "152535005+connellPortrait@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7ec23f033a7bc3a46607b82a0c90a939c869541f",
          "message": "feat: support between sql clauses (#3225)\n\nThis adds support for the sql `col BETWEEN x AND y` clause\n\n---------\n\nCo-authored-by: Weston Pace <weston.pace@gmail.com>",
          "timestamp": "2024-12-10T23:45:14Z",
          "url": "https://github.com/lancedb/lance/commit/7ec23f033a7bc3a46607b82a0c90a939c869541f"
        },
        "date": 1733910292151,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 11736861747,
            "range": "± 57166355",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 437437716,
            "range": "± 7827461",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 5192769177,
            "range": "± 37013210",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 294055923,
            "range": "± 3536153",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 781546718,
            "range": "± 10418285",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 366994999,
            "range": "± 965677",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1219738746,
            "range": "± 4784100",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 737789488,
            "range": "± 2770491",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4447472,
            "range": "± 129934",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 890927649,
            "range": "± 10437898",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 286965665,
            "range": "± 3339622",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 289997413,
            "range": "± 2243619",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 2050525404,
            "range": "± 17345335",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 697959395,
            "range": "± 7902782",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 337531003,
            "range": "± 904742",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 339268471,
            "range": "± 2519006",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1085496312,
            "range": "± 4993784",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 647355893,
            "range": "± 6239044",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5480465,
            "range": "± 121334",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 83646149,
            "range": "± 979231",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 41676826357,
            "range": "± 18217731620",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 939353568,
            "range": "± 166188906",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 6116658328,
            "range": "± 20604646",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 400945384,
            "range": "± 10652806",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 845063603,
            "range": "± 11325543",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 515513965,
            "range": "± 12790791",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 529902501,
            "range": "± 14222178",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1299887621,
            "range": "± 7169755",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 871236500,
            "range": "± 10744997",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 5364450,
            "range": "± 108626",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 183449917,
            "range": "± 2432066",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 193497868,
            "range": "± 3935708",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 7714527233,
            "range": "± 110339241",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 2568449918,
            "range": "± 176423778",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 1162962157,
            "range": "± 19592262",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 714775137,
            "range": "± 10257956",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 336676390,
            "range": "± 4114118",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 794636350,
            "range": "± 15768203",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 398113388,
            "range": "± 6930750",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 396769768,
            "range": "± 7654401",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 1045688963,
            "range": "± 7195832",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 711596666,
            "range": "± 6187662",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1823925794,
            "range": "± 47553647",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 885471,
            "range": "± 7389",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1577985,
            "range": "± 283847",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2679857678,
            "range": "± 134549626",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3547287938,
            "range": "± 75970070",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 124431,
            "range": "± 33472",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 384918,
            "range": "± 48530",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 738416,
            "range": "± 32976",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 778791,
            "range": "± 14888",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 924610,
            "range": "± 20949",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 582,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 616,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 615,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 656,
            "range": "± 14",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "connellPortrait",
            "username": "connellPortrait",
            "email": "152535005+connellPortrait@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7ec23f033a7bc3a46607b82a0c90a939c869541f",
          "message": "feat: support between sql clauses (#3225)\n\nThis adds support for the sql `col BETWEEN x AND y` clause\n\n---------\n\nCo-authored-by: Weston Pace <weston.pace@gmail.com>",
          "timestamp": "2024-12-10T23:45:14Z",
          "url": "https://github.com/lancedb/lance/commit/7ec23f033a7bc3a46607b82a0c90a939c869541f"
        },
        "date": 1733996302673,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 11808974512,
            "range": "± 56670853",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 438998466,
            "range": "± 5301066",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 5135942519,
            "range": "± 57166205",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 285872847,
            "range": "± 3121686",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 775398616,
            "range": "± 13290613",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 362031045,
            "range": "± 5246113",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1220414079,
            "range": "± 4307042",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 744366586,
            "range": "± 4350277",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4453860,
            "range": "± 87825",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 884755736,
            "range": "± 24702589",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 280391254,
            "range": "± 2862264",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 279347434,
            "range": "± 2587664",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1993335135,
            "range": "± 16452851",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 699185846,
            "range": "± 7773278",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 341293591,
            "range": "± 736500",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 342012952,
            "range": "± 6934978",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1075159613,
            "range": "± 4108249",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 644193855,
            "range": "± 3201319",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5492771,
            "range": "± 85792",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82401714,
            "range": "± 2074124",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26241585153,
            "range": "± 141038531",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 59642464,
            "range": "± 1471926",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4961794975,
            "range": "± 42959239",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 291001735,
            "range": "± 2706601",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 699373963,
            "range": "± 6231154",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 371267172,
            "range": "± 1498452",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 395149224,
            "range": "± 2058388",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1127732031,
            "range": "± 7579547",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 678644892,
            "range": "± 3686093",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3566465,
            "range": "± 63871",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 138520078,
            "range": "± 1369794",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 143117183,
            "range": "± 2357089",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4700032224,
            "range": "± 32587761",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 2033321615,
            "range": "± 20221605",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 885340143,
            "range": "± 18140716",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 393039182,
            "range": "± 5433499",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 272165356,
            "range": "± 1891564",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 690340932,
            "range": "± 6193929",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 311377022,
            "range": "± 883855",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 306710120,
            "range": "± 1087383",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 992260294,
            "range": "± 4008568",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 620371993,
            "range": "± 2266561",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1722483393,
            "range": "± 62860546",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 819283,
            "range": "± 9897",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1352349,
            "range": "± 25604",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2379130154,
            "range": "± 121118185",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3398468959,
            "range": "± 179361914",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 98519,
            "range": "± 4761",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 174897,
            "range": "± 6728",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 498852,
            "range": "± 14276",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 531222,
            "range": "± 20337",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 517127,
            "range": "± 21924",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 386,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 399,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 409,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 461,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "99ae76133f043002994651d506c0d2993870389e",
          "message": "fix: correctly copy null buffer when making deep copy (#3238)\n\nIn some situations an array could be sliced in such a way that the array\r\nhad no offset, but the array's null buffer did have an offset. In these\r\ncases we were not deep copying the array correctly and the offset of the\r\nnull buffer was lost. This does mean, in some cases, the 2.0 writer\r\ncould write incorrect nulls. However, the input conditions would mean\r\nthat the user's data would have to originate from rust in such a way\r\nthat it was sliced like this. It would be impossible for batches from\r\nthe C data interface or from python to look like this.",
          "timestamp": "2024-12-13T00:33:38Z",
          "url": "https://github.com/lancedb/lance/commit/99ae76133f043002994651d506c0d2993870389e"
        },
        "date": 1734082624825,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10713543902,
            "range": "± 47075493",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 406026044,
            "range": "± 3068091",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4733299512,
            "range": "± 25041285",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 283791781,
            "range": "± 755298",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 738308001,
            "range": "± 4062711",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 361022421,
            "range": "± 261716",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1192755788,
            "range": "± 3127567",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 738575749,
            "range": "± 2680715",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4286233,
            "range": "± 13323",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 806609991,
            "range": "± 9185554",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 279050346,
            "range": "± 360420",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 279063883,
            "range": "± 661338",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1839876072,
            "range": "± 7102231",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 672534395,
            "range": "± 3029247",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 336345998,
            "range": "± 32258493",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 339139367,
            "range": "± 522906",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 1052002405,
            "range": "± 2587368",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 640171895,
            "range": "± 465010",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5396577,
            "range": "± 64551",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 82447838,
            "range": "± 733918",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 26193167096,
            "range": "± 130720562",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 56374530,
            "range": "± 2587286",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4517037495,
            "range": "± 24186051",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 288418002,
            "range": "± 3288867",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 676020848,
            "range": "± 1923183",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 367463168,
            "range": "± 950062",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 387652155,
            "range": "± 3246779",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1085146300,
            "range": "± 2555383",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 674199647,
            "range": "± 853207",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3477632,
            "range": "± 14231",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 136605659,
            "range": "± 764021",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 139593278,
            "range": "± 153011",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4254110252,
            "range": "± 12883727",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1849066493,
            "range": "± 12859240",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 800505944,
            "range": "± 6097393",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 373212895,
            "range": "± 827799",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 269220316,
            "range": "± 172187",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 664804643,
            "range": "± 2174630",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 306563462,
            "range": "± 6553621",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 303793851,
            "range": "± 488531",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 962045676,
            "range": "± 6496394",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 618745644,
            "range": "± 1104066",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1705073262,
            "range": "± 57884047",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 770856,
            "range": "± 8537",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1326632,
            "range": "± 22370",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2247691332,
            "range": "± 25060679",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2930339764,
            "range": "± 23524332",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 85243,
            "range": "± 2481",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 188890,
            "range": "± 2573",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 439332,
            "range": "± 10253",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 472189,
            "range": "± 18429",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 463722,
            "range": "± 10430",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 354,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 368,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 376,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weston Pace",
            "username": "westonpace",
            "email": "weston.pace@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6203435cd8725b4e27b94c89366bdfd0ce733465",
          "message": "chore: remove legacy C plugin integration (#3243)\n\nThe plugin hasn't built in over a year and the fact that we have git\nsubmodules can cause expensive build times for downstream projects like\nlancedb when they need to declare a git dependency on lance. If we need\nit back later we can always revert the change.",
          "timestamp": "2024-12-14T05:55:03Z",
          "url": "https://github.com/lancedb/lance/commit/6203435cd8725b4e27b94c89366bdfd0ce733465"
        },
        "date": 1734168960484,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10783092728,
            "range": "± 40643377",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 396122535,
            "range": "± 1875418",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4748677159,
            "range": "± 20433941",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 276242254,
            "range": "± 675802",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 720378960,
            "range": "± 2807964",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 342385757,
            "range": "± 284600",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1169511753,
            "range": "± 4784158",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 716401023,
            "range": "± 1995811",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4094337,
            "range": "± 24404",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 799304660,
            "range": "± 4954221",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 272007210,
            "range": "± 1727011",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 271225946,
            "range": "± 707645",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1771097399,
            "range": "± 7483041",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 653510059,
            "range": "± 2194994",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 325084823,
            "range": "± 266382",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 321477181,
            "range": "± 2125828",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 985571723,
            "range": "± 2191225",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 615150133,
            "range": "± 1357908",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5458916,
            "range": "± 59226",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 80777179,
            "range": "± 1305684",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 24389004801,
            "range": "± 533481303",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 60617277,
            "range": "± 2550104",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4531340537,
            "range": "± 29419041",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 283469491,
            "range": "± 602689",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 657261064,
            "range": "± 2613632",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 346650124,
            "range": "± 843609",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 366336551,
            "range": "± 834802",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1030156889,
            "range": "± 3861188",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 653392772,
            "range": "± 744817",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3254997,
            "range": "± 28828",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 133094458,
            "range": "± 199959",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 137516276,
            "range": "± 371704",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4284549393,
            "range": "± 17571252",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1838688322,
            "range": "± 11073279",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 792936513,
            "range": "± 7138940",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 361680529,
            "range": "± 2658308",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 252680568,
            "range": "± 510370",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 653033009,
            "range": "± 3132305",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 296089313,
            "range": "± 2068408",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 294165005,
            "range": "± 490761",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 928568135,
            "range": "± 7354465",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 596373614,
            "range": "± 2851762",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1763018309,
            "range": "± 40903921",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 757810,
            "range": "± 6688",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1319703,
            "range": "± 20304",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 2026465662,
            "range": "± 99882961",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 3122162641,
            "range": "± 213007919",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 90621,
            "range": "± 4019",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 165856,
            "range": "± 1842",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 426066,
            "range": "± 16040",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 462425,
            "range": "± 12669",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 520934,
            "range": "± 11111",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 345,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 358,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 362,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 418,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Xu",
            "username": "eddyxu",
            "email": "lei@lancedb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "83b8efd1d117142b78cee64cae0f1a96d2c3d056",
          "message": "docs: blob api documents (#3247)\n\nCloses #3160",
          "timestamp": "2024-12-14T19:43:24Z",
          "url": "https://github.com/lancedb/lance/commit/83b8efd1d117142b78cee64cae0f1a96d2c3d056"
        },
        "date": 1734255376551,
        "tool": "cargo",
        "benches": [
          {
            "name": "Cosine(half::bfloat::bf16, scalar)",
            "value": 10751568020,
            "range": "± 59333271",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::bfloat::bf16, auto-vectorized)",
            "value": 397541223,
            "range": "± 15577396",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, scalar)",
            "value": 4753891117,
            "range": "± 18295562",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(half::binary16::f16, auto-vectorized)",
            "value": 275616691,
            "range": "± 737523",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, scalar)",
            "value": 717055137,
            "range": "± 4402189",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f32, auto-vectorized)",
            "value": 345125472,
            "range": "± 540216",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, scalar)",
            "value": 1157130652,
            "range": "± 1273444",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(f64, auto-vectorized)",
            "value": 711417350,
            "range": "± 3024422",
            "unit": "ns/iter"
          },
          {
            "name": "Cosine(simd,f32x8) rng seed",
            "value": 4137246,
            "range": "± 15308",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, arrow_artiy)",
            "value": 806023049,
            "range": "± 5282185",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(half::binary16::f16, auto-vectorization)",
            "value": 270092473,
            "range": "± 726515",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f16, SIMD)",
            "value": 271606355,
            "range": "± 1475934",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(bf16, auto-vectorization)",
            "value": 1870101095,
            "range": "± 7394598",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, arrow_artiy)",
            "value": 649883999,
            "range": "± 1776193",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, auto-vectorization)",
            "value": 325596737,
            "range": "± 191283",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f32, SIMD)",
            "value": 325452954,
            "range": "± 4404240",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, arrow_artiy)",
            "value": 995996896,
            "range": "± 11011211",
            "unit": "ns/iter"
          },
          {
            "name": "Dot(f64, auto-vectorization)",
            "value": 610298432,
            "range": "± 637814",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_4k",
            "value": 5488785,
            "range": "± 40042",
            "unit": "ns/iter"
          },
          {
            "name": "train_128d_65535",
            "value": 80110401,
            "range": "± 2001821",
            "unit": "ns/iter"
          },
          {
            "name": "compute_membership_128d_65535",
            "value": 24663287754,
            "range": "± 128160556",
            "unit": "ns/iter"
          },
          {
            "name": "train_8d_65535",
            "value": 58881092,
            "range": "± 4061591",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, scalar)",
            "value": 4513353953,
            "range": "± 24109083",
            "unit": "ns/iter"
          },
          {
            "name": "L2(half::binary16::f16, auto-vectorization)",
            "value": 282055317,
            "range": "± 623599",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, scalar)",
            "value": 654362350,
            "range": "± 2396122",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, auto-vectorization)",
            "value": 348909943,
            "range": "± 10333806",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f32, simd)",
            "value": 371071137,
            "range": "± 539622",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, scalar)",
            "value": 1045130974,
            "range": "± 1932635",
            "unit": "ns/iter"
          },
          {
            "name": "L2(f64, auto-vectorization)",
            "value": 652140353,
            "range": "± 24204563",
            "unit": "ns/iter"
          },
          {
            "name": "L2(simd,f32x8)",
            "value": 3294708,
            "range": "± 20077",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, scalar)",
            "value": 133145637,
            "range": "± 243582",
            "unit": "ns/iter"
          },
          {
            "name": "L2(uint8, auto-vectorization)",
            "value": 137082194,
            "range": "± 492697",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, scalar)",
            "value": 4314063941,
            "range": "± 32742492",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::bfloat::bf16, auto-vectorization)",
            "value": 1850927985,
            "range": "± 7815620",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, scalar)",
            "value": 804819499,
            "range": "± 7029272",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, auto-vectorization)",
            "value": 362521065,
            "range": "± 1120662",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(half::binary16::f16, SIMD)",
            "value": 256461821,
            "range": "± 5540661",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, scalar)",
            "value": 654009323,
            "range": "± 3021600",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, auto-vectorization)",
            "value": 295924565,
            "range": "± 494727",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f32, SIMD)",
            "value": 294556682,
            "range": "± 610683",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, scalar)",
            "value": 922392294,
            "range": "± 1618512",
            "unit": "ns/iter"
          },
          {
            "name": "NormL2(f64, auto-vectorization)",
            "value": 630487658,
            "range": "± 43245762",
            "unit": "ns/iter"
          },
          {
            "name": "create_hnsw(10240x512,levels=6)",
            "value": 1699052824,
            "range": "± 43713345",
            "unit": "ns/iter"
          },
          {
            "name": "search_hnsw10240x512, levels=6",
            "value": 780341,
            "range": "± 7613",
            "unit": "ns/iter"
          },
          {
            "name": "invert(1000000)",
            "value": 1334074,
            "range": "± 30670",
            "unit": "ns/iter"
          },
          {
            "name": "l2,32768",
            "value": 1992303111,
            "range": "± 9618355",
            "unit": "ns/iter"
          },
          {
            "name": "dot,32768",
            "value": 2961066186,
            "range": "± 30500875",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: l2,PQ=96,DIM=1536",
            "value": 88836,
            "range": "± 1921",
            "unit": "ns/iter"
          },
          {
            "name": "construct_dist_table: dot,PQ=96,DIM=1536",
            "value": 165249,
            "range": "± 3702",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,l2,PQ=96,DIM=1536",
            "value": 436878,
            "range": "± 8803",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,cosine,PQ=96,DIM=1536",
            "value": 472432,
            "range": "± 8342",
            "unit": "ns/iter"
          },
          {
            "name": "compute_distances: 16000,dot,PQ=96,DIM=1536",
            "value": 463381,
            "range": "± 2401",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1x10K",
            "value": 346,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=32x10K",
            "value": 359,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=128x10K",
            "value": 367,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ScalarQuantizationStorage,chunks=1024x10K",
            "value": 421,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}