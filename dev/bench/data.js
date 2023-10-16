window.BENCHMARK_DATA = {
  "lastUpdate": 1697450146298,
  "repoUrl": "https://github.com/Ultimaker/CuraEngine",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "j.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "j.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": true,
          "id": "a9e8eaaa9d7441f6579cba814a2207a552388b07",
          "message": "push benchmark results to seperate repo",
          "timestamp": "2023-08-11T14:11:36+02:00",
          "tree_id": "76e3727455104ad23aa6505bfe16c8aebac60cf0",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/a9e8eaaa9d7441f6579cba814a2207a552388b07"
        },
        "date": 1691757552789,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5212990920000493,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5207001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.999614973372881,
            "unit": "ms/iter",
            "extra": "iterations: 338\ncpu: 4.997341124260355 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 49.49994639999886,
            "unit": "ms/iter",
            "extra": "iterations: 30\ncpu: 49.48426666666667 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 216.48783728570768,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 216.44604285714294 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 716.9679389999715,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 716.8626499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1276.4008650000278,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1274.6297999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.673121387931298,
            "unit": "ms/iter",
            "extra": "iterations: 116\ncpu: 9.67198362068965 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 38.79467919047589,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 38.788061904761875 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 96.8095801249973,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 96.79143749999986 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.06012547374301366,
            "unit": "ms/iter",
            "extra": "iterations: 11635\ncpu: 0.060114568113450874 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2895074777975384,
            "unit": "ms/iter",
            "extra": "iterations: 563\ncpu: 1.2892570159857932 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.215252493976068,
            "unit": "ms/iter",
            "extra": "iterations: 83\ncpu: 8.212167469879516 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016744417776762912,
            "unit": "ms/iter",
            "extra": "iterations: 437650\ncpu: 0.001674125442705357 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009932428446685387,
            "unit": "ms/iter",
            "extra": "iterations: 71003\ncpu: 0.00993173387039985 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.027122976945359725,
            "unit": "ms/iter",
            "extra": "iterations: 25548\ncpu: 0.027118615938625246 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "j.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33790412b61f33e4f4bfe1af2512f2f621e7aff5",
          "message": "Update benchmark.yml",
          "timestamp": "2023-08-11T14:43:39+02:00",
          "tree_id": "733f873fa78e2669a07e91fc9402b369ac7fc5ff",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/33790412b61f33e4f4bfe1af2512f2f621e7aff5"
        },
        "date": 1691758260107,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5681141688701913,
            "unit": "ms/iter",
            "extra": "iterations: 1664\ncpu: 0.5680083533653846 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 7.950745538859976,
            "unit": "ms/iter",
            "extra": "iterations: 193\ncpu: 7.949109844559585 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 62.835292761904036,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 62.82890476190476 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 208.78679983333845,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 208.70660000000007 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 617.105862499983,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 617.0540500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1040.513313999952,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1040.458300000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.584531611510445,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.580905035971221 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.7512281851856,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.74878888888886 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.45773200000035,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.45171818181815 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.048144734646422056,
            "unit": "ms/iter",
            "extra": "iterations: 14622\ncpu: 0.048140739980850764 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0568420547944497,
            "unit": "ms/iter",
            "extra": "iterations: 657\ncpu: 1.056758904109587 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.775025990290911,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 6.774377669902917 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013567622009855096,
            "unit": "ms/iter",
            "extra": "iterations: 503320\ncpu: 0.001356626400699354 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007982862547504587,
            "unit": "ms/iter",
            "extra": "iterations: 87623\ncpu: 0.007982019561074114 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02234517461072581,
            "unit": "ms/iter",
            "extra": "iterations: 31533\ncpu: 0.022343503631116684 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "adb598c41b8b207c61aca986b40cf9317292d810",
          "message": "Cura 10811 improve smooth",
          "timestamp": "2023-08-11T04:05:17Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1933/commits/adb598c41b8b207c61aca986b40cf9317292d810"
        },
        "date": 1691758580857,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6301679129011512,
            "unit": "ms/iter",
            "extra": "iterations: 1527\ncpu: 0.6297958742632613 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.212948866279422,
            "unit": "ms/iter",
            "extra": "iterations: 172\ncpu: 9.21172558139535 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 83.0367548333331,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 83.03063888888886 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 319.78558125001655,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 319.7699249999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 565.9560020000072,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 565.9088999999992 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1053.2245259998945,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1053.1638 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.245190882812281,
            "unit": "ms/iter",
            "extra": "iterations: 128\ncpu: 8.233219531250002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 33.2468356153824,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 33.24492307692311 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 80.08500859999685,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 80.08110999999988 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04943621982974023,
            "unit": "ms/iter",
            "extra": "iterations: 13979\ncpu: 0.04943345732885051 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0905304898595676,
            "unit": "ms/iter",
            "extra": "iterations: 641\ncpu: 1.0904717628705145 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.700164769230154,
            "unit": "ms/iter",
            "extra": "iterations: 104\ncpu: 6.6997855769230785 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0014024521911722046,
            "unit": "ms/iter",
            "extra": "iterations: 508358\ncpu: 0.0014023723438993747 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008420930423768366,
            "unit": "ms/iter",
            "extra": "iterations: 85259\ncpu: 0.008420323954069374 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.024191283169953132,
            "unit": "ms/iter",
            "extra": "iterations: 27849\ncpu: 0.024188753635678167 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "af3d7273656ed3a17bc02f8281467f2e5a82ccbd",
          "message": "[CURA-10670] Re-enable Small Top/Bottom Width",
          "timestamp": "2023-08-11T04:05:17Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1923/commits/af3d7273656ed3a17bc02f8281467f2e5a82ccbd"
        },
        "date": 1691830989696,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6618930565535874,
            "unit": "ms/iter",
            "extra": "iterations: 1503\ncpu: 0.6481308715901529 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.326516548192815,
            "unit": "ms/iter",
            "extra": "iterations: 166\ncpu: 9.297101807228916 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 71.38360021052617,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 71.37451052631579 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 239.66523660001258,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 239.63214 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 722.0602584999938,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 721.9543000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1172.2250209999174,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1172.0518999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.608165733333331,
            "unit": "ms/iter",
            "extra": "iterations: 120\ncpu: 8.607083333333332 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 34.12254612000197,
            "unit": "ms/iter",
            "extra": "iterations: 25\ncpu: 34.11525999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 83.37827779999998,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 83.36524999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05335923573278897,
            "unit": "ms/iter",
            "extra": "iterations: 12739\ncpu: 0.05335288484182444 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2373852998235686,
            "unit": "ms/iter",
            "extra": "iterations: 567\ncpu: 1.237253439153439 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.514973337078976,
            "unit": "ms/iter",
            "extra": "iterations: 89\ncpu: 7.513429213483147 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0015405479902604498,
            "unit": "ms/iter",
            "extra": "iterations: 447247\ncpu: 0.0015403942340585835 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008757902604899368,
            "unit": "ms/iter",
            "extra": "iterations: 79696\ncpu: 0.008756484641638229 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02664833834755921,
            "unit": "ms/iter",
            "extra": "iterations: 26591\ncpu: 0.026643552329735646 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "a2ed0bc5f603604421d217365209045181c6ba5b",
          "message": "[CURA-10829] Option to not use small skin areas on top",
          "timestamp": "2023-08-11T04:05:17Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1925/commits/a2ed0bc5f603604421d217365209045181c6ba5b"
        },
        "date": 1691831073671,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5694988465704143,
            "unit": "ms/iter",
            "extra": "iterations: 1662\ncpu: 0.5682891095066185 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 7.942291476684221,
            "unit": "ms/iter",
            "extra": "iterations: 193\ncpu: 7.941192746113991 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 62.8330328095271,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 62.82471428571429 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 208.75129183334215,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 208.73053333333345 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 621.4419015000203,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 621.3981 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1031.888299000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1031.782699999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.600146453237259,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.599446043165473 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.749733592592243,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.74709259259261 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.47355954546062,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.46755454545452 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04804731594798102,
            "unit": "ms/iter",
            "extra": "iterations: 14610\ncpu: 0.04804258726899379 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0799704021407903,
            "unit": "ms/iter",
            "extra": "iterations: 654\ncpu: 1.0798512232415924 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.762995576922803,
            "unit": "ms/iter",
            "extra": "iterations: 104\ncpu: 6.762334615384601 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013376120417977276,
            "unit": "ms/iter",
            "extra": "iterations: 522613\ncpu: 0.001337497153725604 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007906009056568202,
            "unit": "ms/iter",
            "extra": "iterations: 87892\ncpu: 0.007905156328220968 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02257438759889309,
            "unit": "ms/iter",
            "extra": "iterations: 31094\ncpu: 0.02257145751591947 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "f8818e13776a4a2368280a00a7f61cf5e66c3575",
          "message": "[CURA-10829] Option to not use small skin areas on top",
          "timestamp": "2023-08-14T00:37:13Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1925/commits/f8818e13776a4a2368280a00a7f61cf5e66c3575"
        },
        "date": 1692110497116,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6586257178153536,
            "unit": "ms/iter",
            "extra": "iterations: 1538\ncpu: 0.6404777633289986 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.127286204678361,
            "unit": "ms/iter",
            "extra": "iterations: 171\ncpu: 9.126202339181287 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 80.43078699999897,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 80.42412222222222 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 312.8588972500097,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 312.83105 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 584.7185669999817,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 584.6806999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1017.8885880000053,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1017.785 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.21624917424291,
            "unit": "ms/iter",
            "extra": "iterations: 132\ncpu: 8.214472727272724 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 33.54970029166774,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 33.545700000000046 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 81.70645839999224,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 81.69173 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05068745199999967,
            "unit": "ms/iter",
            "extra": "iterations: 10000\ncpu: 0.05068551999999986 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0655552167235074,
            "unit": "ms/iter",
            "extra": "iterations: 586\ncpu: 1.065429522184301 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.813707937500624,
            "unit": "ms/iter",
            "extra": "iterations: 80\ncpu: 6.812852500000011 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013843289314695506,
            "unit": "ms/iter",
            "extra": "iterations: 500697\ncpu: 0.0013841466995008938 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008234076577228812,
            "unit": "ms/iter",
            "extra": "iterations: 82962\ncpu: 0.008233176635085928 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.023269313934077388,
            "unit": "ms/iter",
            "extra": "iterations: 30551\ncpu: 0.02326595528787926 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a62296fa08373196e84bae0ac923305d4d522a95",
          "message": "[CURA-10670] Re-enable Small Top/Bottom Width (#1923)",
          "timestamp": "2023-08-15T16:39:57+02:00",
          "tree_id": "9e2b829752b00087624ef588c4a15d76955e3c37",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/a62296fa08373196e84bae0ac923305d4d522a95"
        },
        "date": 1692110888657,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.49849328453307523,
            "unit": "ms/iter",
            "extra": "iterations: 2056\ncpu: 0.4979442120622568 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.145515301980268,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.14343118811881 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.24694475000115,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.241675 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.25136000000066,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.23734000000007 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.2079980000092,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.1555000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1080.0000169999748,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1079.3877999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.032144319999816,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.03107899999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.343205687499704,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.341509374999962 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.03540000000028,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.03075384615381 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.036114731051718876,
            "unit": "ms/iter",
            "extra": "iterations: 19606\ncpu: 0.03611168009792921 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8494135652173387,
            "unit": "ms/iter",
            "extra": "iterations: 828\ncpu: 0.849326690821256 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.396930292307791,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 5.396528461538462 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010374445515108116,
            "unit": "ms/iter",
            "extra": "iterations: 684933\ncpu: 0.0010373849705007637 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005818706482294491,
            "unit": "ms/iter",
            "extra": "iterations: 120698\ncpu: 0.005818248852507916 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01700492269498217,
            "unit": "ms/iter",
            "extra": "iterations: 40683\ncpu: 0.01700359118059141 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "b85dd9f20b63da829a5c8915b53f728189b7099d",
          "message": "[CURA-10829] Option to not use small skin areas on top",
          "timestamp": "2023-08-14T00:37:13Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1925/commits/b85dd9f20b63da829a5c8915b53f728189b7099d"
        },
        "date": 1692111935288,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5604085500000338,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5123067 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.349472164804603,
            "unit": "ms/iter",
            "extra": "iterations: 358\ncpu: 4.348608379888269 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 39.3409327999994,
            "unit": "ms/iter",
            "extra": "iterations: 35\ncpu: 39.33718571428572 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 143.9897468888805,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 143.95549999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 435.51284066666085,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 433.16876666666695 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 741.32826999994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 741.2396000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.13936793103407,
            "unit": "ms/iter",
            "extra": "iterations: 116\ncpu: 9.12277155172415 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.00149347826423,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 36.96502173913043 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 89.96067077777701,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 89.95019999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.056906265014215335,
            "unit": "ms/iter",
            "extra": "iterations: 12305\ncpu: 0.05689790329134488 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.289148627376507,
            "unit": "ms/iter",
            "extra": "iterations: 526\ncpu: 1.2890041825095058 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.137997488371331,
            "unit": "ms/iter",
            "extra": "iterations: 86\ncpu: 8.13702790697675 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016222510014808887,
            "unit": "ms/iter",
            "extra": "iterations: 430113\ncpu: 0.0016220700141590725 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009569338804396905,
            "unit": "ms/iter",
            "extra": "iterations: 73051\ncpu: 0.009568438488179508 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02675014916979181,
            "unit": "ms/iter",
            "extra": "iterations: 26138\ncpu: 0.02674920422373555 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "f278ed959b8fbdc3d82138791986bd29092cbfed",
          "message": "CuraEngine plugin architecture",
          "timestamp": "2023-09-08T16:38:03Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1878/commits/f278ed959b8fbdc3d82138791986bd29092cbfed"
        },
        "date": 1694417258552,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5443275860000085,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.543478 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.573238314121098,
            "unit": "ms/iter",
            "extra": "iterations: 347\ncpu: 4.5716219020172915 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 40.55518476470819,
            "unit": "ms/iter",
            "extra": "iterations: 34\ncpu: 40.55092352941176 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 150.75112744444948,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 150.73038888888885 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 451.0521706666471,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 450.99163333333314 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 772.687344000019,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 772.5748999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.74552758558574,
            "unit": "ms/iter",
            "extra": "iterations: 111\ncpu: 9.720640540540547 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 39.32576577273039,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 39.32064090909091 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 93.57181355555137,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 93.48999999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.06176336644547232,
            "unit": "ms/iter",
            "extra": "iterations: 10097\ncpu: 0.061752817668614395 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.315223007490568,
            "unit": "ms/iter",
            "extra": "iterations: 534\ncpu: 1.3151091760299627 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.120383141177252,
            "unit": "ms/iter",
            "extra": "iterations: 85\ncpu: 8.118756470588238 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001570973955956431,
            "unit": "ms/iter",
            "extra": "iterations: 444785\ncpu: 0.0015708151129197247 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009425766897689465,
            "unit": "ms/iter",
            "extra": "iterations: 74019\ncpu: 0.00942542050014185 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02659107352774443,
            "unit": "ms/iter",
            "extra": "iterations: 26439\ncpu: 0.02659030598736718 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.0072514830857027,
            "unit": "ns/iter",
            "extra": "iterations: 348658884\ncpu: 2.007165834902405 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.386113965918592,
            "unit": "ns/iter",
            "extra": "iterations: 294024498\ncpu: 2.3860620620802764 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": false,
          "id": "f278ed959b8fbdc3d82138791986bd29092cbfed",
          "message": "fix benchmarks\n\nContributes to CURA-10475 and CURA-10951",
          "timestamp": "2023-09-11T09:15:06+02:00",
          "tree_id": "ced6a3fdc51935f490e99a55194824476255e786",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/f278ed959b8fbdc3d82138791986bd29092cbfed"
        },
        "date": 1694428300088,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5062939773413802,
            "unit": "ms/iter",
            "extra": "iterations: 1986\ncpu: 0.5060705941591138 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.166724509900597,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.165669801980195 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.48511425000083,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.47655499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.56368359998578,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.53152000000009 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 665.9679229999824,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 665.9067500000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1075.420859000019,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1075.3049000000008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.0815309399995385,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.080713000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.58652396875283,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.583153125000038 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.81368076922543,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.80489230769221 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.037701811240666024,
            "unit": "ms/iter",
            "extra": "iterations: 18611\ncpu: 0.03769705013164254 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8512913114956829,
            "unit": "ms/iter",
            "extra": "iterations: 809\ncpu: 0.8511951792336234 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.48300164062443,
            "unit": "ms/iter",
            "extra": "iterations: 128\ncpu: 5.4823429687499985 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010348768649261605,
            "unit": "ms/iter",
            "extra": "iterations: 680724\ncpu: 0.0010347762088599786 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00593043899692937,
            "unit": "ms/iter",
            "extra": "iterations: 117240\ncpu: 0.005929467758444244 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017183113144636487,
            "unit": "ms/iter",
            "extra": "iterations: 40488\ncpu: 0.017181038826318898 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4483885931869773,
            "unit": "ns/iter",
            "extra": "iterations: 287722471\ncpu: 2.448162972992123 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4493795866882073,
            "unit": "ns/iter",
            "extra": "iterations: 283820796\ncpu: 2.449107006239243 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41987080+rburema@users.noreply.github.com",
            "name": "Remco Burema",
            "username": "rburema"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b40dcd8b8d6c06a80380a5737def71b3e89245c",
          "message": "Cache extruder settings (#1867)",
          "timestamp": "2023-09-12T15:49:03+02:00",
          "tree_id": "21b749d3b4fe186642dbcbcb5984a65ec41f3753",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/9b40dcd8b8d6c06a80380a5737def71b3e89245c"
        },
        "date": 1694527171463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5021571659192796,
            "unit": "ms/iter",
            "extra": "iterations: 2007\ncpu: 0.5014373193821625 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.151068386138318,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.150448019801981 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.44800979999945,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.44261 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.40102779998597,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.38887999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.1460695000064,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.1042000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1077.8943230000095,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1077.8420999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.049302180000723,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.048910999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.333870343751897,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.33239999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.30733369230935,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.30065384615389 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03637210161856704,
            "unit": "ms/iter",
            "extra": "iterations: 19091\ncpu: 0.036369435859829255 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8475689097651818,
            "unit": "ms/iter",
            "extra": "iterations: 809\ncpu: 0.8475212608158232 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.358990907692574,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 5.358631538461531 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010300013533678103,
            "unit": "ms/iter",
            "extra": "iterations: 698997\ncpu: 0.0010299328895546048 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.006204794397998316,
            "unit": "ms/iter",
            "extra": "iterations: 119493\ncpu: 0.006204545036110892 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017149957470943958,
            "unit": "ms/iter",
            "extra": "iterations: 39667\ncpu: 0.017149686137091353 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4101195735368823,
            "unit": "ns/iter",
            "extra": "iterations: 288549966\ncpu: 2.4100314744102302 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4153527631963896,
            "unit": "ns/iter",
            "extra": "iterations: 284734451\ncpu: 2.4152419827834533 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "f6d31c92215251099ee948a5cb6fc8facc138abd",
          "message": "[CURA-11019] speed-fix (ugly? raw pointer edition)",
          "timestamp": "2023-09-13T17:00:17Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1950/commits/f6d31c92215251099ee948a5cb6fc8facc138abd"
        },
        "date": 1694721631502,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.505405459024623,
            "unit": "ms/iter",
            "extra": "iterations: 1989\ncpu: 0.5044556561085973 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.146104433497502,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.145601477832514 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.5497792499973,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.34105 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.3570447999855,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.34429999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 666.9921939999881,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 666.9555499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1078.0846719999317,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1078.0551000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.0313535100001445,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.030687999999987 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.30908256249853,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.30720312500001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.076501384616186,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.07386923076923 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03779769747475114,
            "unit": "ms/iter",
            "extra": "iterations: 17820\ncpu: 0.03779610549943877 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8631095245700344,
            "unit": "ms/iter",
            "extra": "iterations: 814\ncpu: 0.8630353808353817 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.520084007873881,
            "unit": "ms/iter",
            "extra": "iterations: 127\ncpu: 5.519659055118105 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010178574736193428,
            "unit": "ms/iter",
            "extra": "iterations: 701842\ncpu: 0.0010177899014308066 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0057948826892953486,
            "unit": "ms/iter",
            "extra": "iterations: 120671\ncpu: 0.005794436111410347 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017232993499324733,
            "unit": "ms/iter",
            "extra": "iterations: 39842\ncpu: 0.0172326439435771 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4094876480815395,
            "unit": "ns/iter",
            "extra": "iterations: 290436426\ncpu: 2.4094925338325086 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.440264247006797,
            "unit": "ns/iter",
            "extra": "iterations: 288876839\ncpu: 2.4399903517360233 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "e171220546f94a513991d83bc5dd87e2ca7f44dd",
          "message": "[CURA-11019] fix slowdown better solution",
          "timestamp": "2023-09-13T17:00:17Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1951/commits/e171220546f94a513991d83bc5dd87e2ca7f44dd"
        },
        "date": 1694763381078,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6681361239782538,
            "unit": "ms/iter",
            "extra": "iterations: 1468\ncpu: 0.666174386920981 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.158220617284432,
            "unit": "ms/iter",
            "extra": "iterations: 162\ncpu: 9.156965432098765 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 69.67498899999961,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 69.66993684210524 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 227.55743099999108,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 227.53850000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 680.666959000007,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 680.5661499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1192.6073079999924,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1163.3620000000012 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.448544748032006,
            "unit": "ms/iter",
            "extra": "iterations: 127\ncpu: 8.4476653543307 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 34.060780791667376,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 34.05560416666664 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 83.12480133333287,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 83.11652222222203 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05600265096838118,
            "unit": "ms/iter",
            "extra": "iterations: 12082\ncpu: 0.0559961512994537 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1846267680673062,
            "unit": "ms/iter",
            "extra": "iterations: 595\ncpu: 1.1845149579831957 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.392184191489639,
            "unit": "ms/iter",
            "extra": "iterations: 94\ncpu: 7.391239361702143 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0014461375290569971,
            "unit": "ms/iter",
            "extra": "iterations: 462884\ncpu: 0.001445998349478487 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008728051608697418,
            "unit": "ms/iter",
            "extra": "iterations: 79754\ncpu: 0.008727282644130694 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02445119537965301,
            "unit": "ms/iter",
            "extra": "iterations: 27920\ncpu: 0.024449050859598823 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.8555442547152798,
            "unit": "ns/iter",
            "extra": "iterations: 383239932\ncpu: 1.8553862492596385 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9135391764523226,
            "unit": "ns/iter",
            "extra": "iterations: 373486114\ncpu: 1.9134100926708062 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "b3fb6626654d2b384fd1b425a6d2cc5e7e348c56",
          "message": "[CURA-11035] Plugins specify a verion-range, slots just a version.",
          "timestamp": "2023-09-13T17:00:17Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1952/commits/b3fb6626654d2b384fd1b425a6d2cc5e7e348c56"
        },
        "date": 1694778008735,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5859346525735206,
            "unit": "ms/iter",
            "extra": "iterations: 1632\ncpu: 0.5857688112745099 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.049979544973702,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.049216402116404 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.53303042857576,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.30760476190477 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 210.01209133333987,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.7619 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 615.227303499978,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 615.1511000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1032.8359930000488,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1032.7440000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.596876333333301,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.596262318840588 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.683417037039362,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.680833333333336 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 75.25923354544581,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 75.2437636363636 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05032186290000027,
            "unit": "ms/iter",
            "extra": "iterations: 10000\ncpu: 0.05031671000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1067941384863373,
            "unit": "ms/iter",
            "extra": "iterations: 621\ncpu: 1.10672495974235 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.918736588235618,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.917805882352939 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013451845357877786,
            "unit": "ms/iter",
            "extra": "iterations: 524760\ncpu: 0.0013451011891150266 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00786016302660858,
            "unit": "ms/iter",
            "extra": "iterations: 88918\ncpu: 0.00785930070401944 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022508856161966122,
            "unit": "ms/iter",
            "extra": "iterations: 31167\ncpu: 0.022507283344563138 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6737067271641783,
            "unit": "ns/iter",
            "extra": "iterations: 418159096\ncpu: 1.6735209318512534 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7340089107239602,
            "unit": "ns/iter",
            "extra": "iterations: 405107597\ncpu: 1.733802587760409 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "12e9152dae56f7658319e4a144f19781d4bb7913",
          "message": "Apply nozzle temperature when set in gcode header",
          "timestamp": "2023-09-16T15:02:40Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1953/commits/12e9152dae56f7658319e4a144f19781d4bb7913"
        },
        "date": 1695049039304,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5883613214505345,
            "unit": "ms/iter",
            "extra": "iterations: 1627\ncpu: 0.5854596803933619 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.037720926315734,
            "unit": "ms/iter",
            "extra": "iterations: 190\ncpu: 8.036575789473684 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.16591028571241,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.15877619047617 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.1920309999864,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.16811666666658 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 621.4673704999996,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 621.3983999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1065.5319280000413,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1065.3220999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.5789602302154355,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.578139568345324 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.77258318518472,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.766722222222224 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.54484854544965,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.5351636363637 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.049400340572553415,
            "unit": "ms/iter",
            "extra": "iterations: 14182\ncpu: 0.04939194753913411 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1107883901274094,
            "unit": "ms/iter",
            "extra": "iterations: 628\ncpu: 1.1106582802547755 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.91365661386143,
            "unit": "ms/iter",
            "extra": "iterations: 101\ncpu: 6.9123643564356465 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013396944469376976,
            "unit": "ms/iter",
            "extra": "iterations: 523621\ncpu: 0.0013395198053554012 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007964708223379227,
            "unit": "ms/iter",
            "extra": "iterations: 88674\ncpu: 0.007963431219974285 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022251191933902008,
            "unit": "ms/iter",
            "extra": "iterations: 31589\ncpu: 0.022247627338630553 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6736406919532734,
            "unit": "ns/iter",
            "extra": "iterations: 418426549\ncpu: 1.6734354014424635 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7463063786842379,
            "unit": "ns/iter",
            "extra": "iterations: 403935020\ncpu: 1.74604296502938 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "74456d083079cc4025c7d7d68507d6a0152e97f6",
          "message": "[CURA-11019] fix slowdown better solution",
          "timestamp": "2023-09-16T15:02:40Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1951/commits/74456d083079cc4025c7d7d68507d6a0152e97f6"
        },
        "date": 1695120492847,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.585456220245442,
            "unit": "ms/iter",
            "extra": "iterations: 1630\ncpu: 0.585148773006135 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.046012084656063,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.04521164021164 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.079520476191774,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.073780952380936 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.67428566666513,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.64983333333336 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 620.167992000006,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 620.06045 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1048.5376330000236,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1048.3963000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.607833079710556,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.606796376811596 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.81581007407092,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.811359259259234 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.09694209090131,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.08931818181811 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04920553936839082,
            "unit": "ms/iter",
            "extra": "iterations: 13996\ncpu: 0.04920270077164908 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0952899968846128,
            "unit": "ms/iter",
            "extra": "iterations: 642\ncpu: 1.095180218068536 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.8189908543696856,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 6.81842233009709 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013452244335821271,
            "unit": "ms/iter",
            "extra": "iterations: 516977\ncpu: 0.0013445656189733798 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007858897983712289,
            "unit": "ms/iter",
            "extra": "iterations: 89025\ncpu: 0.00785819601235607 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022278330618110694,
            "unit": "ms/iter",
            "extra": "iterations: 31305\ncpu: 0.022276623542565065 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.67378000503917,
            "unit": "ns/iter",
            "extra": "iterations: 418315027\ncpu: 1.6736807305753292 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7235892101517278,
            "unit": "ns/iter",
            "extra": "iterations: 406157817\ncpu: 1.7234416542080206 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "7f01c3a075d280907b08c5e6b73daf6ea9e107bd",
          "message": "Fix min layer time for gradual flow",
          "timestamp": "2023-09-16T15:02:40Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1954/commits/7f01c3a075d280907b08c5e6b73daf6ea9e107bd"
        },
        "date": 1695127756163,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6938240489361345,
            "unit": "ms/iter",
            "extra": "iterations: 1410\ncpu: 0.6937107092198582 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.293710360759201,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 9.293070886075949 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.77429031578686,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 68.7674789473684 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 228.94694660001278,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 228.93168 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 683.4803044999944,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 683.4268500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1187.3179289999598,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1187.2159 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.410401250000632,
            "unit": "ms/iter",
            "extra": "iterations: 120\ncpu: 8.409605 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 32.894352600001184,
            "unit": "ms/iter",
            "extra": "iterations: 25\ncpu: 32.89224400000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 75.52259509090867,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 75.51584545454547 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.056109139062501256,
            "unit": "ms/iter",
            "extra": "iterations: 12800\ncpu: 0.05610390625000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2669832692309073,
            "unit": "ms/iter",
            "extra": "iterations: 546\ncpu: 1.2668661172161173 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.813583822221265,
            "unit": "ms/iter",
            "extra": "iterations: 90\ncpu: 7.8125666666666564 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0014477933832373212,
            "unit": "ms/iter",
            "extra": "iterations: 483862\ncpu: 0.0014476615233268958 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008937536542546797,
            "unit": "ms/iter",
            "extra": "iterations: 81453\ncpu: 0.008936867887002304 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02464488638836044,
            "unit": "ms/iter",
            "extra": "iterations: 26661\ncpu: 0.02464351299651164 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.852467592975303,
            "unit": "ns/iter",
            "extra": "iterations: 356823718\ncpu: 1.8524071317478938 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.925071732614116,
            "unit": "ns/iter",
            "extra": "iterations: 347573071\ncpu: 1.9248979734681522 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41987080+rburema@users.noreply.github.com",
            "name": "Remco Burema",
            "username": "rburema"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23b9d5213f765035e0510cc027883600060188b5",
          "message": "Apply nozzle temperature when set in gcode header (#1953)",
          "timestamp": "2023-09-19T15:11:03+02:00",
          "tree_id": "097805ca8ced59d4c75fa1e0c8e4fa55ffb1e30e",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/23b9d5213f765035e0510cc027883600060188b5"
        },
        "date": 1695130864235,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5044583536159633,
            "unit": "ms/iter",
            "extra": "iterations: 2005\ncpu: 0.5030651870324189 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.153456443349864,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.152482758620689 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.35782155000061,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.35062500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.64524120000078,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.62272000000007 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 668.333192499972,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 668.2854500000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1076.656398999944,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1076.5075999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.0704635399999916,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.060363000000009 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.41727075000233,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.413821874999964 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.131200615384,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.129415384615456 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03704434942044605,
            "unit": "ms/iter",
            "extra": "iterations: 18980\ncpu: 0.03704156480505799 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8666100879121191,
            "unit": "ms/iter",
            "extra": "iterations: 819\ncpu: 0.8665318681318669 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.298094076922903,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 5.29727769230769 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001011918345359469,
            "unit": "ms/iter",
            "extra": "iterations: 693347\ncpu: 0.001011876448589234 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0059537662668732545,
            "unit": "ms/iter",
            "extra": "iterations: 119645\ncpu: 0.005953474863136787 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01717313994790987,
            "unit": "ms/iter",
            "extra": "iterations: 40315\ncpu: 0.017171137293811225 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4094381952603645,
            "unit": "ns/iter",
            "extra": "iterations: 290497656\ncpu: 2.409276238703971 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4220269336221905,
            "unit": "ns/iter",
            "extra": "iterations: 289344078\ncpu: 2.4218525737374805 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "4a6daa00e03f86747c00091e9870f7b06fb85119",
          "message": "Fix min layer time for gradual flow",
          "timestamp": "2023-09-16T15:02:40Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1954/commits/4a6daa00e03f86747c00091e9870f7b06fb85119"
        },
        "date": 1695131973995,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5083209784461223,
            "unit": "ms/iter",
            "extra": "iterations: 1995\ncpu: 0.5032829072681704 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.18305455721369,
            "unit": "ms/iter",
            "extra": "iterations: 201\ncpu: 8.172912935323382 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.42474204999576,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.39143500000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.75972759998058,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.60992000000005 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.4596130000054,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.4199999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1080.8540040000025,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1080.8117 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.083260250000194,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.077159000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.66033906249865,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.606253125000034 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.7925473076997,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.78682307692307 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03726025083505658,
            "unit": "ms/iter",
            "extra": "iterations: 18861\ncpu: 0.03725738295954612 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8666547398772945,
            "unit": "ms/iter",
            "extra": "iterations: 815\ncpu: 0.8665877300613483 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.540995714285138,
            "unit": "ms/iter",
            "extra": "iterations: 126\ncpu: 5.540564285714288 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010131336361862873,
            "unit": "ms/iter",
            "extra": "iterations: 692305\ncpu: 0.0010128889723460034 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005820839453480425,
            "unit": "ms/iter",
            "extra": "iterations: 117617\ncpu: 0.005820392460273587 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017399283817428016,
            "unit": "ms/iter",
            "extra": "iterations: 39765\ncpu: 0.017398191877278996 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.412006162038756,
            "unit": "ns/iter",
            "extra": "iterations: 290409074\ncpu: 2.4119008760724783 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.426273990973975,
            "unit": "ns/iter",
            "extra": "iterations: 290117440\ncpu: 2.426153698309208 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erwan.mathieu@ultimaker.com",
            "name": "Erwan MATHIEU",
            "username": "wawanbreton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52cc0d89987d05508f1690882050209d3b2bb7ca",
          "message": "[CURA-11019] fix slowdown better solution (#1951)",
          "timestamp": "2023-09-19T16:09:13+02:00",
          "tree_id": "db2f82317eb1e57587f6cb5fa2572337f3eede5e",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/52cc0d89987d05508f1690882050209d3b2bb7ca"
        },
        "date": 1695133472082,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.7010127710761017,
            "unit": "ms/iter",
            "extra": "iterations: 1459\ncpu: 0.7009426319396848 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 10.539297695364162,
            "unit": "ms/iter",
            "extra": "iterations: 151\ncpu: 10.538484105960265 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 93.3852536250015,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 93.36781249999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 376.87563499999516,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 376.8382333333336 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 672.3199010000371,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 664.3145999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1222.3519460000034,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1220.3584999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.041751809917521,
            "unit": "ms/iter",
            "extra": "iterations: 121\ncpu: 9.032501652892567 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.00310581818526,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 36.95269545454542 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 86.98668839999755,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 86.97591999999989 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.0586870721441357,
            "unit": "ms/iter",
            "extra": "iterations: 12877\ncpu: 0.05867756465015135 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2578504931739252,
            "unit": "ms/iter",
            "extra": "iterations: 586\ncpu: 1.2577058020477836 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.724788076923407,
            "unit": "ms/iter",
            "extra": "iterations: 91\ncpu: 7.719816483516484 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0015673844891908124,
            "unit": "ms/iter",
            "extra": "iterations: 469363\ncpu: 0.0015673267811906783 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009154924218133216,
            "unit": "ms/iter",
            "extra": "iterations: 73606\ncpu: 0.009153483411678385 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.026348586930762787,
            "unit": "ms/iter",
            "extra": "iterations: 27010\ncpu: 0.026345594224361363 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.3710994291814225,
            "unit": "ns/iter",
            "extra": "iterations: 275525250\ncpu: 2.370631729759785 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.388542961105452,
            "unit": "ns/iter",
            "extra": "iterations: 286692786\ncpu: 2.3882787898262685 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "803c2d914fa3cba96478b73082cdc0f67de7ab21",
          "message": "[CURA-11035] Plugins specify a verion-range, slots just a version.",
          "timestamp": "2023-09-16T15:02:40Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1952/commits/803c2d914fa3cba96478b73082cdc0f67de7ab21"
        },
        "date": 1695135456983,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6566908808395132,
            "unit": "ms/iter",
            "extra": "iterations: 1477\ncpu: 0.6479926201760325 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.95404850980366,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 9.950902614379084 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 96.28268731249534,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 96.13376874999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 366.2128533333468,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 366.16896666666645 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 673.5771520000071,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 673.1920000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1313.5322860000542,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1203.315599999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.880855675438955,
            "unit": "ms/iter",
            "extra": "iterations: 114\ncpu: 8.871685087719305 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 36.483889833334615,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 36.451429166666664 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 92.42950899999869,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 92.37384999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05370705650000218,
            "unit": "ms/iter",
            "extra": "iterations: 10000\ncpu: 0.05365114999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1645696162080479,
            "unit": "ms/iter",
            "extra": "iterations: 654\ncpu: 1.1644185015290527 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.82769032978775,
            "unit": "ms/iter",
            "extra": "iterations: 94\ncpu: 7.826098936170204 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0015815107800671645,
            "unit": "ms/iter",
            "extra": "iterations: 433578\ncpu: 0.0015811002864536483 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009047507855191081,
            "unit": "ms/iter",
            "extra": "iterations: 79056\ncpu: 0.009046172333535685 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.026740512346143722,
            "unit": "ms/iter",
            "extra": "iterations: 26486\ncpu: 0.02673869969040239 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4008456780499356,
            "unit": "ns/iter",
            "extra": "iterations: 296346346\ncpu: 2.397192371658255 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.3236674957983854,
            "unit": "ns/iter",
            "extra": "iterations: 314445350\ncpu: 2.3226592474654226 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "cf0c484079e10b5cbe3b6fe6531a365c3dbe2ed9",
          "message": "[CURA-11035] Plugins specify a verion-range, slots just a version.",
          "timestamp": "2023-09-16T15:02:40Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1952/commits/cf0c484079e10b5cbe3b6fe6531a365c3dbe2ed9"
        },
        "date": 1695188986357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5224675309999611,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5116388000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.440216958944327,
            "unit": "ms/iter",
            "extra": "iterations: 341\ncpu: 4.439809970674486 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 39.564639599997726,
            "unit": "ms/iter",
            "extra": "iterations: 35\ncpu: 39.558508571428575 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 143.85269888888766,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 143.83774444444444 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 428.08873666668507,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 428.05980000000005 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 742.0799320000242,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 742.0023999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.119976626086258,
            "unit": "ms/iter",
            "extra": "iterations: 115\ncpu: 9.117933913043476 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 36.826023956519826,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 36.8187565217391 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 88.68616377776561,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 88.67473333333326 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05819272437985741,
            "unit": "ms/iter",
            "extra": "iterations: 11973\ncpu: 0.05818636933099463 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.3183675547171367,
            "unit": "ms/iter",
            "extra": "iterations: 530\ncpu: 1.3177190566037742 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.182773755813054,
            "unit": "ms/iter",
            "extra": "iterations: 86\ncpu: 8.181689534883729 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016078736622575068,
            "unit": "ms/iter",
            "extra": "iterations: 433940\ncpu: 0.0016076900032262545 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009557103648883902,
            "unit": "ms/iter",
            "extra": "iterations: 73913\ncpu: 0.00955665579803283 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02671555164734101,
            "unit": "ms/iter",
            "extra": "iterations: 26042\ncpu: 0.026713597265954996 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.0076322261257156,
            "unit": "ns/iter",
            "extra": "iterations: 348698657\ncpu: 2.0075767025394557 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.0793492526430906,
            "unit": "ns/iter",
            "extra": "iterations: 334081357\ncpu: 2.0791025462698838 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "j.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b65a05706bbbf06ccb8d079bdc0b1b906dbf9c25",
          "message": "[CURA-11035] Plugins specify a verion-range, slots just a version. (#1952)",
          "timestamp": "2023-09-20T07:38:54+02:00",
          "tree_id": "6340c73dba7cc5a47c2029e125a687cf798a92ca",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/b65a05706bbbf06ccb8d079bdc0b1b906dbf9c25"
        },
        "date": 1695189060323,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5818776548995606,
            "unit": "ms/iter",
            "extra": "iterations: 1643\ncpu: 0.5816334753499696 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.055295574468374,
            "unit": "ms/iter",
            "extra": "iterations: 188\ncpu: 8.054534042553191 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.018334428566696,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.011471428571426 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 208.8423139999994,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 208.81881666666666 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 624.5036095000387,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 624.4507499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1069.7890180000513,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1069.6956000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.603692748201368,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.603020863309357 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.67434170370436,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.672148148148104 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 73.82576063636489,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 73.81985454545466 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05082471900284604,
            "unit": "ms/iter",
            "extra": "iterations: 13719\ncpu: 0.050821969531306854 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.102670646789112,
            "unit": "ms/iter",
            "extra": "iterations: 654\ncpu: 1.1026048929663597 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.831101174757527,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 6.830597087378638 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013527807087135061,
            "unit": "ms/iter",
            "extra": "iterations: 523117\ncpu: 0.0013516100604644872 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007867448807286175,
            "unit": "ms/iter",
            "extra": "iterations: 88831\ncpu: 0.007866718825635177 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02226762980646942,
            "unit": "ms/iter",
            "extra": "iterations: 31416\ncpu: 0.02226680353959773 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.673211268521789,
            "unit": "ns/iter",
            "extra": "iterations: 418444808\ncpu: 1.672930543327477 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.700103600283578,
            "unit": "ns/iter",
            "extra": "iterations: 416908126\ncpu: 1.700027549954735 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d67915b57c1e186da138f059e5d51fbccc55bc9",
          "message": "Fix min layer time for gradual flow (#1954)",
          "timestamp": "2023-09-20T10:11:40+02:00",
          "tree_id": "9fb855f31e627354b0991a1ab4eb298c28dcd2d5",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/7d67915b57c1e186da138f059e5d51fbccc55bc9"
        },
        "date": 1695198252608,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5053158157099396,
            "unit": "ms/iter",
            "extra": "iterations: 1986\ncpu: 0.5036058912386707 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.171733428571203,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.162390640394088 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.38570589999904,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.35901500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.68726300000526,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.66704 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.1820775000015,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.0566500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1084.0895630000205,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1083.9628999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.03143061999981,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.030775000000009 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.291893406249045,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.288556249999985 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.25647030768974,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.25149230769229 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03619678240230055,
            "unit": "ms/iter",
            "extra": "iterations: 18116\ncpu: 0.03619487193640972 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8494479322034771,
            "unit": "ms/iter",
            "extra": "iterations: 826\ncpu: 0.8493871670702173 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.357083152671641,
            "unit": "ms/iter",
            "extra": "iterations: 131\ncpu: 5.356370992366412 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010174854600598102,
            "unit": "ms/iter",
            "extra": "iterations: 692747\ncpu: 0.001015532510425886 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005772600557186136,
            "unit": "ms/iter",
            "extra": "iterations: 121324\ncpu: 0.005771851406152137 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017199496262304312,
            "unit": "ms/iter",
            "extra": "iterations: 40533\ncpu: 0.01719827547923915 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.411154276066755,
            "unit": "ns/iter",
            "extra": "iterations: 290540218\ncpu: 2.410944360205587 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.431529087133629,
            "unit": "ns/iter",
            "extra": "iterations: 285381729\ncpu: 2.4313928660793827 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "7bdbe9acc8137cbb23245768737d5da6e3d62f4a",
          "message": "[CURA-11041] fractional support gap",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/7bdbe9acc8137cbb23245768737d5da6e3d62f4a"
        },
        "date": 1695306027805,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5031342911455897,
            "unit": "ms/iter",
            "extra": "iterations: 1999\ncpu: 0.5022620310155078 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.14142852709329,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.1399921182266 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.48005115000433,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.33892 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.9846462000005,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.24505999999988 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.1579375000078,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.1337500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1087.9139420000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1087.8622999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.070342480000136,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.069989999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.510668531251724,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.508178125000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.48281538461679,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.47938461538474 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.0364549480350937,
            "unit": "ms/iter",
            "extra": "iterations: 19263\ncpu: 0.03645364169651659 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8608727126435822,
            "unit": "ms/iter",
            "extra": "iterations: 783\ncpu: 0.8608711366538958 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.552239212598457,
            "unit": "ms/iter",
            "extra": "iterations: 127\ncpu: 5.551807086614174 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001003013802201061,
            "unit": "ms/iter",
            "extra": "iterations: 694382\ncpu: 0.0010029705551123167 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005900996587756359,
            "unit": "ms/iter",
            "extra": "iterations: 122207\ncpu: 0.00590074463819586 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017221432729861312,
            "unit": "ms/iter",
            "extra": "iterations: 40709\ncpu: 0.01722009383674374 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4581024044766275,
            "unit": "ns/iter",
            "extra": "iterations: 287050888\ncpu: 2.4579808998883848 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4307719524342835,
            "unit": "ns/iter",
            "extra": "iterations: 288234158\ncpu: 2.430658825662164 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "3820d3b8ad8eb67195ef93c446324dcf7388aa0a",
          "message": "[CURA-11041] fractional support gap",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/3820d3b8ad8eb67195ef93c446324dcf7388aa0a"
        },
        "date": 1695388914976,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5250195189998976,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5165642 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.8623502083331225,
            "unit": "ms/iter",
            "extra": "iterations: 336\ncpu: 4.853440178571429 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.84979483333321,
            "unit": "ms/iter",
            "extra": "iterations: 30\ncpu: 47.81595666666666 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 203.49281428570976,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 203.3696 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 679.2685230000188,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 678.9720499999996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1262.5620930000423,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1262.3467999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.581343618181522,
            "unit": "ms/iter",
            "extra": "iterations: 110\ncpu: 9.580027272727277 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.49161300000335,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 37.48870000000005 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 90.46101311110357,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 90.45252222222209 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.0593366502343481,
            "unit": "ms/iter",
            "extra": "iterations: 11948\ncpu: 0.05933018915299636 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.232257438282643,
            "unit": "ms/iter",
            "extra": "iterations: 559\ncpu: 1.231910196779965 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.974385367815715,
            "unit": "ms/iter",
            "extra": "iterations: 87\ncpu: 7.9733804597701 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001628347306391025,
            "unit": "ms/iter",
            "extra": "iterations: 442232\ncpu: 0.0016255286817778941 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00981315455771521,
            "unit": "ms/iter",
            "extra": "iterations: 73403\ncpu: 0.009812299224827336 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.026880110916053346,
            "unit": "ms/iter",
            "extra": "iterations: 25064\ncpu: 0.02687926109160549 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.416647128210019,
            "unit": "ns/iter",
            "extra": "iterations: 285266476\ncpu: 2.4164648074525186 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.419541341855553,
            "unit": "ns/iter",
            "extra": "iterations: 285260431\ncpu: 2.4191287154018104 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "e2203b07fd02668c1c7010c596ef84f6ff766b69",
          "message": "Support brim printed only at layer 0",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1956/commits/e2203b07fd02668c1c7010c596ef84f6ff766b69"
        },
        "date": 1695643602933,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5817306920289576,
            "unit": "ms/iter",
            "extra": "iterations: 1656\ncpu: 0.5799515096618357 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.070575396825113,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.044036507936509 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.189788238094565,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.17085714285715 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.6909326666605,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.66155 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 616.8313785000237,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 616.7925500000005 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1059.3684660000235,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1058.9355999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.59790470503582,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.596979856115111 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.65090444444094,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.647637037037004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 73.95997899999946,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 73.9511909090909 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04930889555831011,
            "unit": "ms/iter",
            "extra": "iterations: 13711\ncpu: 0.04930560134198812 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0959972267716414,
            "unit": "ms/iter",
            "extra": "iterations: 635\ncpu: 1.0958941732283454 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.8224326601939005,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 6.8219446601941724 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013542853279754274,
            "unit": "ms/iter",
            "extra": "iterations: 516609\ncpu: 0.0013541937906617956 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00797098083930304,
            "unit": "ms/iter",
            "extra": "iterations: 88097\ncpu: 0.007970759503728818 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022517815095445152,
            "unit": "ms/iter",
            "extra": "iterations: 30751\ncpu: 0.022516214106858307 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6736568998818473,
            "unit": "ns/iter",
            "extra": "iterations: 418224053\ncpu: 1.673560606998378 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.738490520838948,
            "unit": "ns/iter",
            "extra": "iterations: 403000860\ncpu: 1.7384094416076368 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "26c7522af035fc5e629f72b398be78f8541f0a1f",
          "message": "Support brim printed only at layer 0",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1956/commits/26c7522af035fc5e629f72b398be78f8541f0a1f"
        },
        "date": 1695643882995,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5512401519999912,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5511036 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.322654111445587,
            "unit": "ms/iter",
            "extra": "iterations: 332\ncpu: 5.320159036144578 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 49.72294030000436,
            "unit": "ms/iter",
            "extra": "iterations: 30\ncpu: 49.71737000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 222.0222674285586,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 220.9916 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 958.6410189999697,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 958.4915999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1354.9696690001838,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1354.8293000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 10.124919818965422,
            "unit": "ms/iter",
            "extra": "iterations: 116\ncpu: 10.123045689655182 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 42.10052095454971,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 42.09444545454544 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 96.51538111110212,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 96.50222222222224 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.09208208951468791,
            "unit": "ms/iter",
            "extra": "iterations: 12322\ncpu: 0.09207446843044964 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.3214455306552904,
            "unit": "ms/iter",
            "extra": "iterations: 473\ncpu: 1.3212579281183932 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.528087406592942,
            "unit": "ms/iter",
            "extra": "iterations: 91\ncpu: 8.526182417582428 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016928990210774366,
            "unit": "ms/iter",
            "extra": "iterations: 385526\ncpu: 0.00169276728417798 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009815261143254731,
            "unit": "ms/iter",
            "extra": "iterations: 74664\ncpu: 0.00981473936569166 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.028141020769913327,
            "unit": "ms/iter",
            "extra": "iterations: 25951\ncpu: 0.028138938769218982 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.607106323268284,
            "unit": "ns/iter",
            "extra": "iterations: 258239786\ncpu: 2.606740078385907 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.55802278584389,
            "unit": "ns/iter",
            "extra": "iterations: 292896588\ncpu: 2.5578932315865646 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "321d564cda3865c4be12f8c29ccaeac9219a535f",
          "message": "Group outer wall order",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1957/commits/321d564cda3865c4be12f8c29ccaeac9219a535f"
        },
        "date": 1695647238011,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5865448111588,
            "unit": "ms/iter",
            "extra": "iterations: 1631\ncpu: 0.5859690374003678 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.043294142856924,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.04234708994709 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.195030333331275,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.1875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 210.51376916667172,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 210.50388333333328 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 620.2673254999809,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 620.1996000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1045.1218519999657,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1044.9744 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.577782964028511,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.577267625899277 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.61225296296386,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.607437037037037 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.57430627272805,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.56679999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04909356103878238,
            "unit": "ms/iter",
            "extra": "iterations: 14286\ncpu: 0.049089248215035644 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0849971242235423,
            "unit": "ms/iter",
            "extra": "iterations: 644\ncpu: 1.0849566770186334 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.9077440297032,
            "unit": "ms/iter",
            "extra": "iterations: 101\ncpu: 6.907496039603967 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013465900627014434,
            "unit": "ms/iter",
            "extra": "iterations: 516257\ncpu: 0.0013464729776061174 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007945636264942105,
            "unit": "ms/iter",
            "extra": "iterations: 87506\ncpu: 0.007945336319795191 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022512147809924127,
            "unit": "ms/iter",
            "extra": "iterations: 31209\ncpu: 0.022510471338395923 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6735567761087615,
            "unit": "ns/iter",
            "extra": "iterations: 418171587\ncpu: 1.673396332400745 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9996953260678683,
            "unit": "ns/iter",
            "extra": "iterations: 350410681\ncpu: 1.9995175318300344 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "ec8bcfc3ad346fa21dde94b188caa84e18fcae06",
          "message": "Add setting to group outer walls",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1958/commits/ec8bcfc3ad346fa21dde94b188caa84e18fcae06"
        },
        "date": 1695648016271,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5855678521472601,
            "unit": "ms/iter",
            "extra": "iterations: 1630\ncpu: 0.585055337423313 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.079200227513033,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.070053439153439 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.410711333333545,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.39824761904763 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.927600999985,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.88813333333326 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 635.6006670000056,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 634.7053000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1071.1443949999193,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1069.2299999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.608108920290279,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.60604420289854 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.919756444446918,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.91101111111113 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.92853854545378,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.92225454545446 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.050827197983897864,
            "unit": "ms/iter",
            "extra": "iterations: 13789\ncpu: 0.05082271375734278 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1025935437499967,
            "unit": "ms/iter",
            "extra": "iterations: 640\ncpu: 1.1025045312500008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.913156019802252,
            "unit": "ms/iter",
            "extra": "iterations: 101\ncpu: 6.912300000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013431173544204483,
            "unit": "ms/iter",
            "extra": "iterations: 517603\ncpu: 0.001343032787677043 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007962051852692916,
            "unit": "ms/iter",
            "extra": "iterations: 87980\ncpu: 0.007939371448056384 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022707783811639383,
            "unit": "ms/iter",
            "extra": "iterations: 31047\ncpu: 0.022702129030179957 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6743722846814635,
            "unit": "ns/iter",
            "extra": "iterations: 418111391\ncpu: 1.6739543936510441 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9947104841438146,
            "unit": "ns/iter",
            "extra": "iterations: 350564409\ncpu: 1.9944757141618514 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "7b6453ce969ea8cc405e8bd6366103d4138626ff",
          "message": "[CURA-11041] fractional support gap",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/7b6453ce969ea8cc405e8bd6366103d4138626ff"
        },
        "date": 1695656141867,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5840885460048653,
            "unit": "ms/iter",
            "extra": "iterations: 1652\ncpu: 0.5817815375302664 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.082503153438724,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.065681481481482 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.20806542857142,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.20150476190476 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 210.01091033332386,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.98894999999993 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 614.5921429999817,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 614.5378 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1042.1787679999852,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1042.1101999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.607397999999743,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.606031654676267 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.949829370372214,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.945140740740772 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.9459349090826,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.93236363636365 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05007208663313503,
            "unit": "ms/iter",
            "extra": "iterations: 14117\ncpu: 0.05004759509810868 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.099468718354442,
            "unit": "ms/iter",
            "extra": "iterations: 632\ncpu: 1.0992789556962024 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.853879539215879,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.852815686274504 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013286956856526312,
            "unit": "ms/iter",
            "extra": "iterations: 525966\ncpu: 0.0013285090671260125 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007875061168268539,
            "unit": "ms/iter",
            "extra": "iterations: 88935\ncpu: 0.00787411367852926 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022148113039609386,
            "unit": "ms/iter",
            "extra": "iterations: 31458\ncpu: 0.02214510140504795 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6746347922732419,
            "unit": "ns/iter",
            "extra": "iterations: 418072685\ncpu: 1.6744495039182057 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7704205773566852,
            "unit": "ns/iter",
            "extra": "iterations: 404476982\ncpu: 1.7702203879675849 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "905afc76c22e111eea19ccdb62f8c4a8ffd0170b",
          "message": "Hardcode wall ordering",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1959/commits/905afc76c22e111eea19ccdb62f8c4a8ffd0170b"
        },
        "date": 1695674548562,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6395375298268062,
            "unit": "ms/iter",
            "extra": "iterations: 1559\ncpu: 0.6354638871071201 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.729184543859622,
            "unit": "ms/iter",
            "extra": "iterations: 171\ncpu: 9.711671929824561 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 91.73478805882282,
            "unit": "ms/iter",
            "extra": "iterations: 17\ncpu: 91.7095235294118 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 368.14141566666575,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 367.8349666666666 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 651.4322049999919,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 650.7511 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1153.3217049999394,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1153.1344 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.583571484848562,
            "unit": "ms/iter",
            "extra": "iterations: 132\ncpu: 8.577388636363638 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 36.10983475000277,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 36.08795833333334 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 80.017780000007,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 80.0137181818182 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.047606099789844404,
            "unit": "ms/iter",
            "extra": "iterations: 14751\ncpu: 0.047576435495898614 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.167909692939268,
            "unit": "ms/iter",
            "extra": "iterations: 609\ncpu: 1.1629804597701159 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.662103938144365,
            "unit": "ms/iter",
            "extra": "iterations: 97\ncpu: 6.661512371134023 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013403882234346751,
            "unit": "ms/iter",
            "extra": "iterations: 531717\ncpu: 0.0013403000092154312 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008283506351119926,
            "unit": "ms/iter",
            "extra": "iterations: 92031\ncpu: 0.008281204159467986 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.024520959877026183,
            "unit": "ms/iter",
            "extra": "iterations: 31877\ncpu: 0.024519841892273513 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.239663453533093,
            "unit": "ns/iter",
            "extra": "iterations: 309505671\ncpu: 2.2396087210951277 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.2375296442002757,
            "unit": "ns/iter",
            "extra": "iterations: 340901841\ncpu: 2.2365423365372794 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "40cd391f7d66b152c29522d44226133dce8a4071",
          "message": "[CURA-11084] Add missing 'perform_prime' member-variable. (#1960)",
          "timestamp": "2023-09-26T22:49:40+02:00",
          "tree_id": "d77ecc9d3c3dac5b7eaee0cd56ad843b19b5a1e1",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/40cd391f7d66b152c29522d44226133dce8a4071"
        },
        "date": 1695800685417,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5043157348258708,
            "unit": "ms/iter",
            "extra": "iterations: 2010\ncpu: 0.5036074626865672 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.15091141871932,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.150275369458129 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.4188233000043,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.41258000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.43564100000913,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.42100000000013 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.4938859999884,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.2986500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1079.1376160000254,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1079.052299999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.053187799999705,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.052373000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.523773625001468,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.52034375000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.9222046923045,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.816361538461564 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03619452855245919,
            "unit": "ms/iter",
            "extra": "iterations: 19578\ncpu: 0.0361900704872816 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8388661575091281,
            "unit": "ms/iter",
            "extra": "iterations: 819\ncpu: 0.8387832722832712 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.378244755905781,
            "unit": "ms/iter",
            "extra": "iterations: 127\ncpu: 5.377307874015735 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010164812630018827,
            "unit": "ms/iter",
            "extra": "iterations: 707584\ncpu: 0.0010164206652496384 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005822148598184653,
            "unit": "ms/iter",
            "extra": "iterations: 121307\ncpu: 0.005821412614276167 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017292454005788747,
            "unit": "ms/iter",
            "extra": "iterations: 40766\ncpu: 0.01729182652210173 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.443232083770332,
            "unit": "ns/iter",
            "extra": "iterations: 287145206\ncpu: 2.4431656365525423 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.524312184920775,
            "unit": "ns/iter",
            "extra": "iterations: 281247614\ncpu: 2.5242034586647253 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "0acf5cfc5a6578742b6636fdfe1c1435bf388784",
          "message": "Support brim printed only at layer 0",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1956/commits/0acf5cfc5a6578742b6636fdfe1c1435bf388784"
        },
        "date": 1695802956741,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.573021132000008,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5673193999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.430018913043291,
            "unit": "ms/iter",
            "extra": "iterations: 345\ncpu: 4.42863652173913 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 39.37754248571374,
            "unit": "ms/iter",
            "extra": "iterations: 35\ncpu: 39.36922571428571 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 143.05788822221328,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 143.03158888888893 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 425.6326176666789,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 425.55966666666654 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 744.0631130000384,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 743.8846999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.114372356521017,
            "unit": "ms/iter",
            "extra": "iterations: 115\ncpu: 9.112593913043485 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.03286239130213,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 37.02565217391304 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 90.42282377777155,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 90.40627777777763 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.06109955354659924,
            "unit": "ms/iter",
            "extra": "iterations: 11504\ncpu: 0.061089142906814914 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.3065132279410903,
            "unit": "ms/iter",
            "extra": "iterations: 544\ncpu: 1.3062167279411785 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.139158767442252,
            "unit": "ms/iter",
            "extra": "iterations: 86\ncpu: 8.136586046511612 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016222122457288087,
            "unit": "ms/iter",
            "extra": "iterations: 427349\ncpu: 0.0016219130031894277 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00959387810392955,
            "unit": "ms/iter",
            "extra": "iterations: 72972\ncpu: 0.009591962670613382 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.027158557543345476,
            "unit": "ms/iter",
            "extra": "iterations: 25433\ncpu: 0.027152998073369163 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.9987667082189513,
            "unit": "ns/iter",
            "extra": "iterations: 348447145\ncpu: 1.9984058127381112 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.0509487319212396,
            "unit": "ns/iter",
            "extra": "iterations: 342906297\ncpu: 2.050424288358869 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "f7a8e3d5441702aa4cb985bde0f0689b0f9af11e",
          "message": "Support brim printed only at layer 0",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1956/commits/f7a8e3d5441702aa4cb985bde0f0689b0f9af11e"
        },
        "date": 1695980694144,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5855764621026972,
            "unit": "ms/iter",
            "extra": "iterations: 1636\ncpu: 0.5799981662591687 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.052858687830978,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.044993121693121 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.07417819047195,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.06597142857146 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.7977915000039,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.62076666666675 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 610.5083669999658,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 610.4392500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1023.6247770000091,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1023.5278000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.597022179856068,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.595946762589935 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.644685222219543,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.64183703703706 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.01723200000147,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.00499090909094 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05171471694260226,
            "unit": "ms/iter",
            "extra": "iterations: 13711\ncpu: 0.05170967836044055 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1033683807267005,
            "unit": "ms/iter",
            "extra": "iterations: 633\ncpu: 1.1032090047393386 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.903447215686177,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.902853921568622 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013440855039049506,
            "unit": "ms/iter",
            "extra": "iterations: 519602\ncpu: 0.0013439066824223172 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00795593264125633,
            "unit": "ms/iter",
            "extra": "iterations: 88333\ncpu: 0.007955321340835259 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022656755956871423,
            "unit": "ms/iter",
            "extra": "iterations: 30511\ncpu: 0.022654888400904617 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6736551415860406,
            "unit": "ns/iter",
            "extra": "iterations: 418351028\ncpu: 1.6734401331505726 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9935865617884698,
            "unit": "ns/iter",
            "extra": "iterations: 351778239\ncpu: 1.9934180749594268 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "f063b5ab7df6747b7c3092beec8ea90d042aa05b",
          "message": "Reverted the changes done in CURA-9521",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1961/commits/f063b5ab7df6747b7c3092beec8ea90d042aa05b"
        },
        "date": 1696329345734,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5085514742885795,
            "unit": "ms/iter",
            "extra": "iterations: 2003\ncpu: 0.5056359460808787 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.14349110344871,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.142908866995073 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.33942295000384,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.332975 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.2472077999946,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.23287999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 677.1275369999898,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 669.7213000000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1083.8111790000085,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1083.7260999999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.043579140000702,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.042712000000008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.317701875001376,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.31390625000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 61.93662323077066,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 61.93547692307697 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.035982129878542074,
            "unit": "ms/iter",
            "extra": "iterations: 18525\ncpu: 0.03597843454790822 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8697959432099174,
            "unit": "ms/iter",
            "extra": "iterations: 810\ncpu: 0.8697199999999986 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.522563133858179,
            "unit": "ms/iter",
            "extra": "iterations: 127\ncpu: 5.52187244094488 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010547479106961751,
            "unit": "ms/iter",
            "extra": "iterations: 691259\ncpu: 0.0010546686553086475 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005905984866024248,
            "unit": "ms/iter",
            "extra": "iterations: 118343\ncpu: 0.005905271118697341 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017115034532305895,
            "unit": "ms/iter",
            "extra": "iterations: 41063\ncpu: 0.017113998003068405 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.428421671724951,
            "unit": "ns/iter",
            "extra": "iterations: 286498707\ncpu: 2.4284025826336464 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4550386186097355,
            "unit": "ns/iter",
            "extra": "iterations: 284010224\ncpu: 2.4548450762814826 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "9b5ee37ecba93227b6a145ea7ab3ee84658128dd",
          "message": "Reverted the changes done in CURA-9521",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1961/commits/9b5ee37ecba93227b6a145ea7ab3ee84658128dd"
        },
        "date": 1696353682598,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5871593217391265,
            "unit": "ms/iter",
            "extra": "iterations: 1610\ncpu: 0.5869310559006211 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.37938667195741,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.060299999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.13460257142976,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.1287476190476 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.16546416666884,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.1467499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 617.9317130000186,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 617.87415 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1052.357508,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1052.265199999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.647938644927341,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.647285507246371 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.959652518516933,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.95605185185189 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.83601927272461,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.8157818181819 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.050336616599997795,
            "unit": "ms/iter",
            "extra": "iterations: 10000\ncpu: 0.05033201999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0943927530864124,
            "unit": "ms/iter",
            "extra": "iterations: 648\ncpu: 1.0942674382716049 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.804683864077746,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 6.803945631067955 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013391526698627342,
            "unit": "ms/iter",
            "extra": "iterations: 524203\ncpu: 0.0013389328180113424 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007894397459657152,
            "unit": "ms/iter",
            "extra": "iterations: 88492\ncpu: 0.007893832210821303 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02265480904684931,
            "unit": "ms/iter",
            "extra": "iterations: 30950\ncpu: 0.02265338933764133 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6729571846763314,
            "unit": "ns/iter",
            "extra": "iterations: 418447309\ncpu: 1.6728161107615085 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.981945961110017,
            "unit": "ns/iter",
            "extra": "iterations: 351344596\ncpu: 1.9819157827604736 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "873800b9a36cb736a5c21acfbbc1e436c9bbab87",
          "message": "CURA-11119-CURA-11121-correct-path-config",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1962/commits/873800b9a36cb736a5c21acfbbc1e436c9bbab87"
        },
        "date": 1696355756563,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6494152763338096,
            "unit": "ms/iter",
            "extra": "iterations: 1462\ncpu: 0.6485772229822161 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.595129230303263,
            "unit": "ms/iter",
            "extra": "iterations: 165\ncpu: 9.593671515151517 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 88.5727662500031,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 88.55776875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 353.8505847500062,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 353.79067499999996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 661.8464270000004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 661.5541999999995 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1181.7515110000159,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1180.9831999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.242699428571678,
            "unit": "ms/iter",
            "extra": "iterations: 119\ncpu: 9.240963865546231 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.24468530434854,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 37.13533913043475 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 88.1049982222319,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 88.08597777777787 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05637743719867407,
            "unit": "ms/iter",
            "extra": "iterations: 11823\ncpu: 0.05637205447010076 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2100483390412753,
            "unit": "ms/iter",
            "extra": "iterations: 584\ncpu: 1.2095888698630155 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.5746398172042815,
            "unit": "ms/iter",
            "extra": "iterations: 93\ncpu: 7.5736451612903295 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0015152634793443526,
            "unit": "ms/iter",
            "extra": "iterations: 460742\ncpu: 0.001514679147983034 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009213462768934278,
            "unit": "ms/iter",
            "extra": "iterations: 75018\ncpu: 0.00921217441147459 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.026508366660344687,
            "unit": "ms/iter",
            "extra": "iterations: 26365\ncpu: 0.026505120424805514 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.469119831533951,
            "unit": "ns/iter",
            "extra": "iterations: 281656705\ncpu: 2.4687170149206974 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.3784527510525435,
            "unit": "ns/iter",
            "extra": "iterations: 262786141\ncpu: 2.377941612986363 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "08dd09abf6ef354c5581fc68be8c2943ce3e06bd",
          "message": "Top surface inner outer wall config",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1963/commits/08dd09abf6ef354c5581fc68be8c2943ce3e06bd"
        },
        "date": 1696504423432,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.616513441176427,
            "unit": "ms/iter",
            "extra": "iterations: 1632\ncpu: 0.5810226102941176 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.052694275132309,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.048068253968255 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.22627761904815,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.21896666666665 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.4224641666642,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.38766666666675 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 613.1622499999594,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 613.0050500000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1035.0886280000395,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1034.9735999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.598768834532002,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.597963309352526 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.65602311111164,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.65357407407408 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 73.92067236363883,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 73.91122727272726 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05058569240258835,
            "unit": "ms/iter",
            "extra": "iterations: 13781\ncpu: 0.05058286046005378 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1150991836420885,
            "unit": "ms/iter",
            "extra": "iterations: 648\ncpu: 1.1149972222222218 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.794319769230565,
            "unit": "ms/iter",
            "extra": "iterations: 104\ncpu: 6.7929192307692245 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013670099706456751,
            "unit": "ms/iter",
            "extra": "iterations: 507590\ncpu: 0.001366860852262653 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008010298730370242,
            "unit": "ms/iter",
            "extra": "iterations: 87112\ncpu: 0.008009460235099658 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02293863148444523,
            "unit": "ms/iter",
            "extra": "iterations: 30631\ncpu: 0.022937213933596746 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6735699160326736,
            "unit": "ns/iter",
            "extra": "iterations: 418192822\ncpu: 1.673467269603209 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.996204967604822,
            "unit": "ns/iter",
            "extra": "iterations: 350296351\ncpu: 1.9959842516315591 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "65ad30f6630b5d65e4e4905dae5c96eee57ac79b",
          "message": "the length of brim is correctly calculated in case of no adhesion",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1964/commits/65ad30f6630b5d65e4e4905dae5c96eee57ac79b"
        },
        "date": 1696512852206,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6760354631432631,
            "unit": "ms/iter",
            "extra": "iterations: 1438\ncpu: 0.6738488873435327 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 10.273369546052741,
            "unit": "ms/iter",
            "extra": "iterations: 152\ncpu: 10.271661842105265 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 94.37039574999773,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 94.23274999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 359.8656312499884,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 359.78572499999984 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 668.3742230000007,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 668.3629000000009 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1200.2748280000333,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1199.4345999999991 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.866727418803631,
            "unit": "ms/iter",
            "extra": "iterations: 117\ncpu: 8.865815384615379 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 36.32149758333488,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 36.31627083333333 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 88.44831955554531,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 88.43686666666666 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.055635491836906206,
            "unit": "ms/iter",
            "extra": "iterations: 11699\ncpu: 0.05562281391571933 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2204814796609367,
            "unit": "ms/iter",
            "extra": "iterations: 590\ncpu: 1.220264576271185 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.743447438201656,
            "unit": "ms/iter",
            "extra": "iterations: 89\ncpu: 7.741579775280899 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001612582230288733,
            "unit": "ms/iter",
            "extra": "iterations: 440221\ncpu: 0.0016120716640051248 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009632025508427216,
            "unit": "ms/iter",
            "extra": "iterations: 74642\ncpu: 0.009630352884435046 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02705706295046585,
            "unit": "ms/iter",
            "extra": "iterations: 26084\ncpu: 0.027053749424934742 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.444294760483879,
            "unit": "ns/iter",
            "extra": "iterations: 296607153\ncpu: 2.4384833362397043 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.2882782446521914,
            "unit": "ns/iter",
            "extra": "iterations: 289153561\ncpu: 2.287989460382266 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "9dbcdf80ea06fbdee18769fce327e4a524170e83",
          "message": "the length of brim is correctly calculated in case of no adhesion",
          "timestamp": "2023-10-06T08:27:35Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1964/commits/9dbcdf80ea06fbdee18769fce327e4a524170e83"
        },
        "date": 1696583482107,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5731150604477608,
            "unit": "ms/iter",
            "extra": "iterations: 1340\ncpu: 0.5424185074626866 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.094610312499981,
            "unit": "ms/iter",
            "extra": "iterations: 320\ncpu: 5.01078 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 50.82505755172343,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 50.72861379310345 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 211.13606485713328,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 211.10448571428566 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 717.2774194999647,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 717.16295 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1276.5645990000394,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1275.5818000000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.638118520832961,
            "unit": "ms/iter",
            "extra": "iterations: 96\ncpu: 9.63603854166667 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 40.3077064090925,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 40.30231363636361 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 97.4316022499977,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 97.41624999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.06455102789570072,
            "unit": "ms/iter",
            "extra": "iterations: 11543\ncpu: 0.06454541280429688 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2516722929823325,
            "unit": "ms/iter",
            "extra": "iterations: 570\ncpu: 1.2514443859649138 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.117800888888066,
            "unit": "ms/iter",
            "extra": "iterations: 90\ncpu: 8.116915555555554 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001696906770724471,
            "unit": "ms/iter",
            "extra": "iterations: 385941\ncpu: 0.0016967119326529226 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.010056420510036643,
            "unit": "ms/iter",
            "extra": "iterations: 64505\ncpu: 0.010055746066196391 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.028736060833094875,
            "unit": "ms/iter",
            "extra": "iterations: 24559\ncpu: 0.02864407345575962 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.664252426183496,
            "unit": "ns/iter",
            "extra": "iterations: 274310149\ncpu: 2.664029758519802 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.63257718884236,
            "unit": "ns/iter",
            "extra": "iterations: 256813350\ncpu: 2.63198661596058 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "00b71215d5d80f81a9b9ae4b5531beb593e4bd96",
          "message": "Cura 11100 scattered seam",
          "timestamp": "2023-10-06T08:27:35Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1967/commits/00b71215d5d80f81a9b9ae4b5531beb593e4bd96"
        },
        "date": 1696842772426,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5065429839357058,
            "unit": "ms/iter",
            "extra": "iterations: 1992\ncpu: 0.5061601405622491 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.16189718719175,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.161351231527094 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.5314615999971,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.46374 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.34748200000286,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.33475999999987 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 665.8228960000088,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 665.7521500000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1078.918511999973,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1078.8522999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.049866249999468,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.049063000000011 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.60565568750073,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.599725000000017 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 63.3780016153808,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 63.37158461538455 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03653700133447182,
            "unit": "ms/iter",
            "extra": "iterations: 18734\ncpu: 0.036533415180954404 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8348875027547725,
            "unit": "ms/iter",
            "extra": "iterations: 726\ncpu: 0.8348005509641894 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.3880251472864,
            "unit": "ms/iter",
            "extra": "iterations: 129\ncpu: 5.387427131782947 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001019055047841987,
            "unit": "ms/iter",
            "extra": "iterations: 698447\ncpu: 0.001019000010022236 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005913427720758251,
            "unit": "ms/iter",
            "extra": "iterations: 116043\ncpu: 0.005912913316615412 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017697949382901094,
            "unit": "ms/iter",
            "extra": "iterations: 40026\ncpu: 0.0176924973767051 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4254358997254477,
            "unit": "ns/iter",
            "extra": "iterations: 290116838\ncpu: 2.421016666395637 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4668238173893684,
            "unit": "ns/iter",
            "extra": "iterations: 284817865\ncpu: 2.4667241291201996 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "c72500c132e0d7c0f5dba6eafdddf7b68f4734f0",
          "message": "Cura 11100 scattered seam",
          "timestamp": "2023-10-06T08:27:35Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1967/commits/c72500c132e0d7c0f5dba6eafdddf7b68f4734f0"
        },
        "date": 1696842812123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5966534120543343,
            "unit": "ms/iter",
            "extra": "iterations: 1626\ncpu: 0.5813456334563346 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.037935057894318,
            "unit": "ms/iter",
            "extra": "iterations: 190\ncpu: 8.03643210526316 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.11280700001156,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.103985714285706 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.6007790000082,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.57093333333327 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 618.7299959999564,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 618.6588500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1052.235496999856,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1052.0745999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.62146560869305,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.6203000000000065 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.86724259259831,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.864733333333348 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.62427254544805,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.61603636363634 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.051241593204229545,
            "unit": "ms/iter",
            "extra": "iterations: 13685\ncpu: 0.051234987212276255 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.119900863207179,
            "unit": "ms/iter",
            "extra": "iterations: 636\ncpu: 1.1197820754716958 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.893786382355685,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.892655882352933 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013324118687523287,
            "unit": "ms/iter",
            "extra": "iterations: 522953\ncpu: 0.0013295311433341056 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007855298270089048,
            "unit": "ms/iter",
            "extra": "iterations: 89600\ncpu: 0.007838064732142871 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02252289755509979,
            "unit": "ms/iter",
            "extra": "iterations: 30758\ncpu: 0.022519848494700578 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6734061889778973,
            "unit": "ns/iter",
            "extra": "iterations: 418214309\ncpu: 1.6733576181870877 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7434045898833428,
            "unit": "ns/iter",
            "extra": "iterations: 402361749\ncpu: 1.743218637813413 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41987080+rburema@users.noreply.github.com",
            "name": "Remco Burema",
            "username": "rburema"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "b394e78022670744b37a9d99bdb4407b03fd32d1",
          "message": "the length of brim is correctly calculated in case of no adhesion (#1964)",
          "timestamp": "2023-10-06T13:08:21+02:00",
          "tree_id": "dc65ec8bab5cc7e298e23253d77516e307bb2b65",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/b394e78022670744b37a9d99bdb4407b03fd32d1"
        },
        "date": 1696844021927,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6564602641128842,
            "unit": "ms/iter",
            "extra": "iterations: 1488\ncpu: 0.6527241935483871 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.925729728477123,
            "unit": "ms/iter",
            "extra": "iterations: 151\ncpu: 9.924113907284768 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 90.79171981250056,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 90.78225 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 379.23687666667166,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 379.21153333333336 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 652.6358849999951,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 652.5067999999994 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1212.1352589999788,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1211.9424999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.14731145238143,
            "unit": "ms/iter",
            "extra": "iterations: 126\ncpu: 8.1462119047619 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 32.65482330768831,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 32.6507 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 76.91200700000164,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 76.90229999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04875791121229645,
            "unit": "ms/iter",
            "extra": "iterations: 14056\ncpu: 0.048748804780876474 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0495370552487628,
            "unit": "ms/iter",
            "extra": "iterations: 724\ncpu: 1.0494244475138128 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.008259135416732,
            "unit": "ms/iter",
            "extra": "iterations: 96\ncpu: 7.00732083333333 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013905045311202655,
            "unit": "ms/iter",
            "extra": "iterations: 476924\ncpu: 0.001390429502394508 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008171799004383409,
            "unit": "ms/iter",
            "extra": "iterations: 89191\ncpu: 0.00817102173986162 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02241726566491869,
            "unit": "ms/iter",
            "extra": "iterations: 29748\ncpu: 0.022414804356595413 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.209572509345715,
            "unit": "ns/iter",
            "extra": "iterations: 316092875\ncpu: 2.2092348649111426 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.0750382931105897,
            "unit": "ns/iter",
            "extra": "iterations: 323264416\ncpu: 2.0747009779139987 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "edd9b398369e06a4b90a6b5de9532febcfc11954",
          "message": "[CURA-11100] scattered seam",
          "timestamp": "2023-10-06T08:27:35Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1967/commits/edd9b398369e06a4b90a6b5de9532febcfc11954"
        },
        "date": 1696858634310,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5036812585170102,
            "unit": "ms/iter",
            "extra": "iterations: 1996\ncpu: 0.5034051603206413 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.149706717821717,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.149120792079207 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.43668050000247,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.429085 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.54938919999677,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.5276599999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 666.6112634999877,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 666.5610500000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1078.5930220000637,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1078.5090999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.035244040000634,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.034856000000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.600132312498914,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.593481249999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 63.71778500000311,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 63.606984615384555 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03649605886055957,
            "unit": "ms/iter",
            "extra": "iterations: 19062\ncpu: 0.03643007029692585 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8485569055689884,
            "unit": "ms/iter",
            "extra": "iterations: 826\ncpu: 0.8485077481840192 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.410605884615577,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 5.410158461538459 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010224699861691186,
            "unit": "ms/iter",
            "extra": "iterations: 684701\ncpu: 0.0010224330036030331 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005925247041821027,
            "unit": "ms/iter",
            "extra": "iterations: 118316\ncpu: 0.005924709253186392 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017407359861251477,
            "unit": "ms/iter",
            "extra": "iterations: 40649\ncpu: 0.017406113311520584 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.412631289850994,
            "unit": "ns/iter",
            "extra": "iterations: 290138002\ncpu: 2.4125112711019394 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.447767657598695,
            "unit": "ns/iter",
            "extra": "iterations: 282483368\ncpu: 2.44758516189881 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5d42bf10da0b5a556884cf9cfb4d77826fd5467c",
          "message": "[CURA-11100] scattered seam (#1967)",
          "timestamp": "2023-10-09T17:03:24+02:00",
          "tree_id": "49cad8acf1fc225d1125fe4d5e519c1c520f2e2d",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/5d42bf10da0b5a556884cf9cfb4d77826fd5467c"
        },
        "date": 1696927801052,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5242067330000282,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5224970000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.882362029940406,
            "unit": "ms/iter",
            "extra": "iterations: 334\ncpu: 4.772007185628743 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.61434648386964,
            "unit": "ms/iter",
            "extra": "iterations: 31\ncpu: 48.554861290322584 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 206.4371938571412,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 206.30402857142866 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 672.8234015000112,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 671.68115 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1238.4414850000667,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1238.1694000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.441840373913534,
            "unit": "ms/iter",
            "extra": "iterations: 115\ncpu: 9.440921739130436 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.26224926086893,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 37.24093478260872 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 91.23965588888596,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 91.22632222222234 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.058642647738045714,
            "unit": "ms/iter",
            "extra": "iterations: 11605\ncpu: 0.058630348987505465 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2585826612318367,
            "unit": "ms/iter",
            "extra": "iterations: 552\ncpu: 1.258422282608698 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.082555556818896,
            "unit": "ms/iter",
            "extra": "iterations: 88\ncpu: 8.08039204545453 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016073205325082308,
            "unit": "ms/iter",
            "extra": "iterations: 438904\ncpu: 0.0016070639593168418 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00977007822483661,
            "unit": "ms/iter",
            "extra": "iterations: 69019\ncpu: 0.009768147901302518 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.027000217015795247,
            "unit": "ms/iter",
            "extra": "iterations: 26399\ncpu: 0.026995329368536554 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4897736742412895,
            "unit": "ns/iter",
            "extra": "iterations: 284319957\ncpu: 2.4894903877605685 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4006170694306204,
            "unit": "ns/iter",
            "extra": "iterations: 282920189\ncpu: 2.400160279830726 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": true,
          "id": "0503a4c7a2e554bf8f2e9cb3e0e3824df0a54fa8",
          "message": "set version to 5.5.0-beta.2",
          "timestamp": "2023-10-10T10:40:52+02:00",
          "tree_id": "54e3d0f34f3a9551b6eda028af79f643d57d6fd6",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/0503a4c7a2e554bf8f2e9cb3e0e3824df0a54fa8"
        },
        "date": 1696928017016,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5975033497536699,
            "unit": "ms/iter",
            "extra": "iterations: 1624\ncpu: 0.591045197044335 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.045531116402696,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.044797354497355 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.007166238094214,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.001180952380956 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 208.86443466666074,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 208.84743333333336 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 611.9711645000052,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 611.8754499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1020.5204320000121,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1018.9256000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.635841919707268,
            "unit": "ms/iter",
            "extra": "iterations: 137\ncpu: 7.633139416058392 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.964188296294466,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.96223703703699 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.7216829999967,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.71385454545462 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04990705534627871,
            "unit": "ms/iter",
            "extra": "iterations: 13804\ncpu: 0.04989980440452037 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0929639347825204,
            "unit": "ms/iter",
            "extra": "iterations: 644\ncpu: 1.0928731366459639 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.897378009804086,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.875613725490209 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001345268247269167,
            "unit": "ms/iter",
            "extra": "iterations: 523640\ncpu: 0.0013451525857459323 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007896519025995271,
            "unit": "ms/iter",
            "extra": "iterations: 88747\ncpu: 0.007895908594093322 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022594280582082196,
            "unit": "ms/iter",
            "extra": "iterations: 30786\ncpu: 0.02259223348275194 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6727215820968384,
            "unit": "ns/iter",
            "extra": "iterations: 418451812\ncpu: 1.672666194596382 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7314406148394639,
            "unit": "ns/iter",
            "extra": "iterations: 408873728\ncpu: 1.731385392411418 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "de2c993285915c9c2baf067fd807c97e0910f398",
          "message": "[CURA-11041] fractional support gap",
          "timestamp": "2023-10-11T05:54:59Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/de2c993285915c9c2baf067fd807c97e0910f398"
        },
        "date": 1697019655231,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6176331459493215,
            "unit": "ms/iter",
            "extra": "iterations: 1617\ncpu: 0.5856831787260359 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.039923423280376,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.039197354497356 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.158105666665115,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.14981428571431 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.52288666666163,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.49261666666678 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 615.6888699999854,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 615.6421 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1043.9698169999474,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1043.880800000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.613063891303715,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.6123413043478285 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.740294518518905,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.738492592592575 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.42994509090732,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.41209090909094 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05180878453404108,
            "unit": "ms/iter",
            "extra": "iterations: 13617\ncpu: 0.05180351766174641 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1146356703125804,
            "unit": "ms/iter",
            "extra": "iterations: 640\ncpu: 1.1145465625000017 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.844115852940751,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.843353921568638 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013431083499872022,
            "unit": "ms/iter",
            "extra": "iterations: 516899\ncpu: 0.0013429700966726575 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007946141462474016,
            "unit": "ms/iter",
            "extra": "iterations: 88193\ncpu: 0.007945601124805822 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02265496038963311,
            "unit": "ms/iter",
            "extra": "iterations: 30901\ncpu: 0.022652360765023784 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.673194497222048,
            "unit": "ns/iter",
            "extra": "iterations: 418431051\ncpu: 1.6730751657338152 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9953875131115877,
            "unit": "ns/iter",
            "extra": "iterations: 350209776\ncpu: 1.995236706356247 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "9eab6b4f413dc76e1eab21bc5315214f172f1097",
          "message": "Cura 10783 prime tower with raft",
          "timestamp": "2023-10-11T05:54:59Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1968/commits/9eab6b4f413dc76e1eab21bc5315214f172f1097"
        },
        "date": 1697192297525,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5870652459627523,
            "unit": "ms/iter",
            "extra": "iterations: 1610\ncpu: 0.5863482608695653 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.206672206349607,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.047192063492062 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.20419238095166,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.16251428571429 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.1957290000058,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 208.9928833333333 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 619.2418885000279,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 618.4821000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1054.727615000047,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1054.543699999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.64599941304332,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.645150724637688 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.962360703702636,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.961155555555564 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.90542709091518,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.8984727272728 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05123518558402884,
            "unit": "ms/iter",
            "extra": "iterations: 13929\ncpu: 0.05123214157513102 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1136809582689424,
            "unit": "ms/iter",
            "extra": "iterations: 647\ncpu: 1.1136134466769696 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.8172821747573185,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 6.816931067961159 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001337597203544768,
            "unit": "ms/iter",
            "extra": "iterations: 522018\ncpu: 0.0013372678719890873 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007818649552998543,
            "unit": "ms/iter",
            "extra": "iterations: 89597\ncpu: 0.007818144580733702 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022351128931616095,
            "unit": "ms/iter",
            "extra": "iterations: 31412\ncpu: 0.022350614414873342 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6726941085549742,
            "unit": "ns/iter",
            "extra": "iterations: 418385784\ncpu: 1.672618016103527 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9908051388246475,
            "unit": "ns/iter",
            "extra": "iterations: 357527747\ncpu: 1.990759894783773 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "9e958a99e1e33fc559a776754450342b2cad723f",
          "message": "[CURA-10783] prime tower with raft",
          "timestamp": "2023-10-11T05:54:59Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1968/commits/9e958a99e1e33fc559a776754450342b2cad723f"
        },
        "date": 1697201485959,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.503699307117945,
            "unit": "ms/iter",
            "extra": "iterations: 2009\ncpu: 0.5032567446490791 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.340238108910578,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.155711386138615 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.44864435000204,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.43861 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 237.0774429999983,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 236.94990000000013 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.6501919999964,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.6184499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1082.8723760000685,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1082.8006000000005 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.045888650000052,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.045171999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.58331071875253,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.58138124999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.669471461539125,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.66340769230771 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.036501167811783475,
            "unit": "ms/iter",
            "extra": "iterations: 19212\ncpu: 0.03649811576098271 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8503460191847068,
            "unit": "ms/iter",
            "extra": "iterations: 834\ncpu: 0.8502794964028765 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.362710274809393,
            "unit": "ms/iter",
            "extra": "iterations: 131\ncpu: 5.362129770992367 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010506758302568702,
            "unit": "ms/iter",
            "extra": "iterations: 678555\ncpu: 0.0010505820456705819 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005882637812964141,
            "unit": "ms/iter",
            "extra": "iterations: 119303\ncpu: 0.005882044877329144 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017588508461940378,
            "unit": "ms/iter",
            "extra": "iterations: 40239\ncpu: 0.017587271055443693 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.414757968907124,
            "unit": "ns/iter",
            "extra": "iterations: 290298755\ncpu: 2.4146703626062687 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.532846616233302,
            "unit": "ns/iter",
            "extra": "iterations: 278873018\ncpu: 2.5326548443636065 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "68e6f05a00e87279e2ae9630dbf8532824385ee3",
          "message": "[CURA-10783] prime tower with raft",
          "timestamp": "2023-10-11T05:54:59Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1968/commits/68e6f05a00e87279e2ae9630dbf8532824385ee3"
        },
        "date": 1697202227214,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5821079791539435,
            "unit": "ms/iter",
            "extra": "iterations: 1631\ncpu: 0.5802961373390557 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.029192321052841,
            "unit": "ms/iter",
            "extra": "iterations: 190\ncpu: 8.028423684210525 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.09566285714633,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.089533333333335 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.15711683333407,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.14495000000008 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 626.0239920000004,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 625.6697500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1039.1490769999336,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1039.0666999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.569870201439162,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.569017266187053 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.616254555558985,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.612818518518512 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 73.78175281818048,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 73.77695454545442 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05117504159988105,
            "unit": "ms/iter",
            "extra": "iterations: 13726\ncpu: 0.05117085093982227 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1136236363635572,
            "unit": "ms/iter",
            "extra": "iterations: 638\ncpu: 1.1135272727272727 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.8554275588237,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.853484313725496 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001344341334348655,
            "unit": "ms/iter",
            "extra": "iterations: 520059\ncpu: 0.001341633353138779 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00795154984407682,
            "unit": "ms/iter",
            "extra": "iterations: 88185\ncpu: 0.007950724046039572 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.0227103595852938,
            "unit": "ms/iter",
            "extra": "iterations: 31058\ncpu: 0.022708271620838338 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6730580287175412,
            "unit": "ns/iter",
            "extra": "iterations: 418361529\ncpu: 1.6729114688745677 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7235766976642808,
            "unit": "ns/iter",
            "extra": "iterations: 409459210\ncpu: 1.7234661787190004 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "830c56a1179f6690c8694fa67fcb33e4f8cc18fa",
          "message": "[CURA-11041] fractional support gap",
          "timestamp": "2023-10-11T05:54:59Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/830c56a1179f6690c8694fa67fcb33e4f8cc18fa"
        },
        "date": 1697207394680,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5920945033475897,
            "unit": "ms/iter",
            "extra": "iterations: 1643\ncpu: 0.5802576384662202 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.108385157895196,
            "unit": "ms/iter",
            "extra": "iterations: 190\ncpu: 8.107289473684212 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.257292095240054,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.249885714285696 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 210.0879905000094,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 210.05228333333335 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 620.1895364999928,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 620.1057999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1048.9661090000482,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1048.8447 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.618118384058285,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.615472463768113 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.831423962964706,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.82085925925926 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.78177554545792,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.7663545454545 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05090449220000437,
            "unit": "ms/iter",
            "extra": "iterations: 10000\ncpu: 0.05089902000000013 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0902152695925222,
            "unit": "ms/iter",
            "extra": "iterations: 638\ncpu: 1.0900120689655168 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.877818666665979,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.87689607843136 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001332585557464434,
            "unit": "ms/iter",
            "extra": "iterations: 524437\ncpu: 0.001329639975821693 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007853387607728564,
            "unit": "ms/iter",
            "extra": "iterations: 88765\ncpu: 0.007852857545203647 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022674735370360567,
            "unit": "ms/iter",
            "extra": "iterations: 30862\ncpu: 0.022672082172250675 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.674448597999396,
            "unit": "ns/iter",
            "extra": "iterations: 418069439\ncpu: 1.6741824077698204 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.755255670808929,
            "unit": "ns/iter",
            "extra": "iterations: 399362389\ncpu: 1.755078393223451 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "4682128777e104805e295d5c1a0aa2428a3b8410",
          "message": "[CURA-10407] Introduce fractional layer-height support gaps",
          "timestamp": "2023-10-11T05:54:59Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/4682128777e104805e295d5c1a0aa2428a3b8410"
        },
        "date": 1697225620339,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6015750611994876,
            "unit": "ms/iter",
            "extra": "iterations: 1634\ncpu: 0.5793568543451653 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.042546305263219,
            "unit": "ms/iter",
            "extra": "iterations: 190\ncpu: 8.040791052631578 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.07679919047175,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.06327142857142 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.37411150000193,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.35540000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 620.2322565000031,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 620.1303999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1044.9688259999448,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1043.6216999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.590863366906417,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.589471223021585 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.79174633333221,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.788451851851832 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 73.99913218181486,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 73.99149090909096 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05087499619416624,
            "unit": "ms/iter",
            "extra": "iterations: 13926\ncpu: 0.0508726841878501 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.105738566666657,
            "unit": "ms/iter",
            "extra": "iterations: 630\ncpu: 1.1054557142857153 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.877611534652697,
            "unit": "ms/iter",
            "extra": "iterations: 101\ncpu: 6.877186138613862 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013270040231491585,
            "unit": "ms/iter",
            "extra": "iterations: 525459\ncpu: 0.0013269280762152704 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007850417061452068,
            "unit": "ms/iter",
            "extra": "iterations: 88867\ncpu: 0.007849370407462834 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022510462462947762,
            "unit": "ms/iter",
            "extra": "iterations: 31036\ncpu: 0.02250914099755123 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.673791220001573,
            "unit": "ns/iter",
            "extra": "iterations: 418319277\ncpu: 1.6735712134059773 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7439838363263171,
            "unit": "ns/iter",
            "extra": "iterations: 399213208\ncpu: 1.743824818541573 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "5e5dc4222ba7969f35fc94cd44dad74f1252e681",
          "message": "CURA-11140",
          "timestamp": "2023-10-14T14:54:15Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1969/commits/5e5dc4222ba7969f35fc94cd44dad74f1252e681"
        },
        "date": 1697448061038,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6410008627316558,
            "unit": "ms/iter",
            "extra": "iterations: 1457\ncpu: 0.6392894989704874 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.163850526011903,
            "unit": "ms/iter",
            "extra": "iterations: 173\ncpu: 9.138761271676302 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 82.1554275555564,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 82.04286666666668 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 317.35075849999816,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 317.1738750000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 548.1138190000365,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 548.0792000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1010.609344000045,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1010.3941999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.944056941606458,
            "unit": "ms/iter",
            "extra": "iterations: 137\ncpu: 7.941943795620439 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 32.884791888890234,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 32.87524444444447 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 76.76819945454967,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 76.75921818181808 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04744372160790407,
            "unit": "ms/iter",
            "extra": "iterations: 14379\ncpu: 0.04743907782182354 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0253097038122387,
            "unit": "ms/iter",
            "extra": "iterations: 682\ncpu: 1.025185630498533 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.643679598131091,
            "unit": "ms/iter",
            "extra": "iterations: 107\ncpu: 6.610552336448606 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013988435379136861,
            "unit": "ms/iter",
            "extra": "iterations: 450141\ncpu: 0.0013976514025605313 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008432010689248693,
            "unit": "ms/iter",
            "extra": "iterations: 86442\ncpu: 0.00842833344901784 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022979966301953498,
            "unit": "ms/iter",
            "extra": "iterations: 30892\ncpu: 0.022976903405412356 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.041441426648548,
            "unit": "ns/iter",
            "extra": "iterations: 340682504\ncpu: 2.0395458875692647 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.126139765157622,
            "unit": "ns/iter",
            "extra": "iterations: 329459207\ncpu: 2.1258944510237927 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "fde402ab1627c720898107ae2004073e134fadd6",
          "message": "CURA-11140",
          "timestamp": "2023-10-14T14:54:15Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1969/commits/fde402ab1627c720898107ae2004073e134fadd6"
        },
        "date": 1697449159855,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5056753460190101,
            "unit": "ms/iter",
            "extra": "iterations: 1997\ncpu: 0.5055470205307963 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.23953789603982,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.163627722772278 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.43219594999823,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.42539500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.68496159999177,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.63428000000013 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 666.9901839999852,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 666.9371999999996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1083.7011960001064,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1083.6437000000014 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.056020720000333,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.055572999999988 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.380214312499817,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.37836562500001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.21044869230005,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.20806923076926 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.037545823872679025,
            "unit": "ms/iter",
            "extra": "iterations: 18850\ncpu: 0.03754370291777185 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8419326358172987,
            "unit": "ms/iter",
            "extra": "iterations: 832\ncpu: 0.8418645432692308 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.359387480915625,
            "unit": "ms/iter",
            "extra": "iterations: 131\ncpu: 5.358877862595413 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010017297192970388,
            "unit": "ms/iter",
            "extra": "iterations: 691692\ncpu: 0.0010016695292124264 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005895254593220248,
            "unit": "ms/iter",
            "extra": "iterations: 117619\ncpu: 0.0058946182164446225 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017051586367649238,
            "unit": "ms/iter",
            "extra": "iterations: 40756\ncpu: 0.01705086367651392 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4096772834269236,
            "unit": "ns/iter",
            "extra": "iterations: 290476560\ncpu: 2.409552770798443 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.423643553795836,
            "unit": "ns/iter",
            "extra": "iterations: 289408676\ncpu: 2.4234691568127014 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "5e5dc4222ba7969f35fc94cd44dad74f1252e681",
          "message": "CURA-11140",
          "timestamp": "2023-10-14T14:54:15Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1969/commits/5e5dc4222ba7969f35fc94cd44dad74f1252e681"
        },
        "date": 1697450145345,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5048758977443498,
            "unit": "ms/iter",
            "extra": "iterations: 1995\ncpu: 0.504777694235589 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.15892285643517,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.157768811881189 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.41312345000006,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.40872 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.48368920001485,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.45586000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.481243500049,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.4359499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1081.5814030000865,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1081.5118000000011 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.04805108999949,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.047199000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.38133368749962,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.37807812499998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.404902076921715,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.39833076923076 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.037058052191276634,
            "unit": "ms/iter",
            "extra": "iterations: 18528\ncpu: 0.03705626079447324 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8485653607361764,
            "unit": "ms/iter",
            "extra": "iterations: 815\ncpu: 0.8484942331288338 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.359362653845997,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 5.358561538461533 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0009993795823987545,
            "unit": "ms/iter",
            "extra": "iterations: 692814\ncpu: 0.0009992928838043118 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0059269766891579066,
            "unit": "ms/iter",
            "extra": "iterations: 116641\ncpu: 0.005926266064248438 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017009817840098033,
            "unit": "ms/iter",
            "extra": "iterations: 40437\ncpu: 0.01700771817889557 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.426235378548788,
            "unit": "ns/iter",
            "extra": "iterations: 288968066\ncpu: 2.426081226567097 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4137983376782772,
            "unit": "ns/iter",
            "extra": "iterations: 289289311\ncpu: 2.4136536451566224 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}