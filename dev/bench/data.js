window.BENCHMARK_DATA = {
  "lastUpdate": 1727752839006,
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
      }
    ]
  }
}