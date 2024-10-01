window.BENCHMARK_DATA = {
  "lastUpdate": 1727756997540,
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
      }
    ]
  }
}