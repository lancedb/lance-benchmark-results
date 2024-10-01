window.BENCHMARK_DATA = {
  "lastUpdate": 1727800677598,
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
      }
    ]
  }
}