window.BENCHMARK_DATA = {
  "lastUpdate": 1729157735011,
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
      }
    ]
  }
}