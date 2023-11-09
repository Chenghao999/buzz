window.BENCHMARK_DATA = {
  "lastUpdate": 1699559388822,
  "repoUrl": "https://github.com/chidiwilliams/buzz",
  "entries": {
    "macOS": [
      {
        "commit": {
          "author": {
            "email": "fitojb@ubuntu.com",
            "name": "Adolfo Jayme-Barrientos",
            "username": "fitojb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68207970b1767cb9e8bc7278e30f8645f5e32f67",
          "message": "Update Spanish translation (#628)",
          "timestamp": "2023-11-09T19:41:06Z",
          "tree_id": "01b4d4136f0a4682ce776c88263f0c8344cbbceb",
          "url": "https://github.com/chidiwilliams/buzz/commit/68207970b1767cb9e8bc7278e30f8645f5e32f67"
        },
        "date": 1699559380977,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/transcriber_benchmarks_test.py::test_should_transcribe_and_benchmark[Whisper.cpp - Tiny]",
            "value": 0.03631632371303403,
            "unit": "iter/sec",
            "range": "stddev: 14.175605287371276",
            "extra": "mean: 27.53582680620002 sec\nrounds: 5"
          },
          {
            "name": "tests/transcriber_benchmarks_test.py::test_should_transcribe_and_benchmark[Whisper - Tiny]",
            "value": 0.06220175611762831,
            "unit": "iter/sec",
            "range": "stddev: 0.8748603499448578",
            "extra": "mean: 16.07671651759997 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}