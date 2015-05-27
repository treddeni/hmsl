var projects = { "_id": 1, "nextProjectID": 2, "projects": [ { "id": 1, "name": "Test Project" } ] };

var smallTree = {
  "_id": "55525dd17a68e8501aa22260",
  "projectID": 1,
  "projectName": "Small Test Project",
  "name": "Small Test Project",
  "version": 1,
  "nextNodeID": 5,
  "depth": 0,
  "id": 0,
  "fields": [ {"name": "A","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "B","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "C","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "D","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "E","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "F","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "G","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "H","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "I","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "J","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null}
  ],
  "children": [{
    "id": 1,
    "name": "node1",
    "depth": 1,
    "values":
    {
      "Weight": 1.2,
      "Cost": "0.50",
      "Notes": "some bs"
    },
    "children": [
      {
        "id": 2,
        "name": "node1.1",
        "depth": 2,
        "values":
        {
          "Weight": 1.3,
          "Notes": "some bs2"
        },
        "children": [
          {
            "id": 3,
            "name": "node1.1.1",
            "depth": 3,
            "children": []
          }
        ]
      },
      {
        "id": 4,
        "name": "node1.2",
        "depth": 2,
        "children": []
      }
    ]
}]};

var house = {
  "_id": "5564839f585cc46c0cc0211c",
	"projectID": 1,
	"projectName": "Small Test Project",
	"name": "Small Test Project",
	"version": 2,
	"nextNodeID": 15,
	"depth": 0,
  "maxDepth": 4,
	"id": 1,
  "fields": [ {"name": "A","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "B","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "C","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "D","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "E","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "F","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "G","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "H","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "I","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "J","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null}
  ],
	"children": [
		{
			"id": 1,
			"name": "Cabin",
			"depth": 1,
			"values": {
				"Weight": 1.2,
				"Cost": "0.50",
				"Notes": "some bs"
			},
			"children": [
				{
					"id": 2,
					"name": "First Floor",
					"depth": 2,
					"values": {
						"Weight": 1.3,
						"Notes": "some bs2"
					},
					"children": [
						{
							"id": 6,
							"name": "Bathroom",
							"depth": 3,
							"children": [
								{
									"id": 7,
									"name": "Sink",
									"depth": 4,
									"children": []
								},
								{
									"id": 5,
									"name": "Toilet",
									"depth": 4,
									"children": []
								}
							]
						},
						{
							"id": 8,
							"name": "Kitchen",
							"depth": 3,
							"children": [
								{
									"id": 9,
									"name": "Sink",
									"depth": 4,
									"children": []
								},
								{
									"id": 10,
									"name": "Dishwasher",
									"depth": 4,
									"children": []
								},
								{
									"id": 3,
									"name": "Cabinets",
									"depth": 4,
									"children": []
								}
							]
						}
					]
				},
				{
					"id": 11,
					"name": "Second Floor",
					"depth": 2,
					"children": [
						{
							"id": 12,
							"name": "Bedroom",
							"depth": 3,
							"children": [
								{
									"id": 13,
									"name": "Carpet",
									"depth": 4,
									"children": []
								},
								{
									"id": 14,
									"name": "Bed",
									"depth": 4,
									"children": []
								},
								{
									"id": 4,
									"name": "Nightstand",
									"depth": 4,
									"children": []
								}
							]
						}
					]
				}
			]
		}
	]
};

var largeTree = {
  "_id": "55525dd17a68e8501aa22260",
  "projectID": 1,
  "projectName": "Test Project",
  "name": "Test Project",
  "version": 2,
  "nextNodeID": 4247,
  "fields": [ {"name": "A","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "B","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "C","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "D","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "E","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "F","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "G","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "H","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "I","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null},
              {"name": "J","datatype": "0","format": "0","precision": 2,"agg_type": "0","agg_qty_field": null}
  ],
  "children": [
    {
      "id": 2,
      "name": "Top Level Assembly",
      "children": [
        {
          "id": 2136,
          "name": "Assembly 1",
          "children": [
            {
              "id": 2137,
              "name": "Subassembly 1",
              "children": [
                {
                  "id": 2138,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 2139,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2140,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2141,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2142,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2143,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2144,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2145,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2146,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2147,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2148,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2149,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2150,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2151,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2152,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2153,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2154,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2155,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2156,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2157,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2158,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2159,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 2160,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2161,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2162,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2163,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2164,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2165,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2166,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2167,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2168,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2169,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2170,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2171,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2172,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2173,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2174,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2175,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2176,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2177,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2178,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2179,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2180,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 2181,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2182,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2183,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2184,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2185,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2186,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2187,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2188,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2189,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2190,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2191,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2192,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2193,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2194,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2195,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2196,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2197,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2198,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2199,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2200,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2201,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 2202,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2203,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2204,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2205,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2206,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2207,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2208,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2209,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2210,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2211,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2212,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2213,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2214,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2215,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2216,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2217,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2218,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2219,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2220,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2221,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2222,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 2223,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2224,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2225,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2226,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2227,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2228,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2229,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2230,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2231,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2232,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2233,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2234,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2235,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2236,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2237,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2238,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2239,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2240,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2241,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2242,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2243,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 2244,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2245,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2246,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2247,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2248,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2249,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2250,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2251,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2252,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2253,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2254,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2255,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2256,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2257,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2258,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2259,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2260,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2261,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2262,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2263,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2264,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 2265,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2266,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2267,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2268,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2269,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2270,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2271,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2272,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2273,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2274,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2275,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2276,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2277,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2278,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2279,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2280,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2281,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2282,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2283,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2284,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2285,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 2286,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2287,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2288,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2289,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2290,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2291,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2292,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2293,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2294,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2295,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2296,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2297,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2298,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2299,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2300,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2301,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2302,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2303,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2304,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2305,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2306,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 2307,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2308,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2309,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2310,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2311,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2312,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2313,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2314,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2315,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2316,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2317,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2318,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2319,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2320,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2321,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2322,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2323,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2324,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2325,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2326,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2327,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 2328,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2329,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2330,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2331,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2332,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2333,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2334,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2335,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2336,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2337,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2338,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2339,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2340,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2341,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2342,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2343,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2344,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2345,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2346,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2347,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 2348,
              "name": "Subassembly 2",
              "children": [
                {
                  "id": 2349,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 2350,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2351,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2352,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2353,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2354,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2355,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2356,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2357,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2358,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2359,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2360,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2361,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2362,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2363,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2364,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2365,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2366,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2367,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2368,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2369,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2370,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 2371,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2372,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2373,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2374,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2375,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2376,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2377,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2378,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2379,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2380,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2381,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2382,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2383,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2384,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2385,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2386,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2387,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2388,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2389,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2390,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2391,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 2392,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2393,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2394,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2395,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2396,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2397,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2398,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2399,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2400,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2401,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2402,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2403,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2404,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2405,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2406,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2407,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2408,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2409,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2410,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2411,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2412,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 2413,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2414,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2415,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2416,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2417,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2418,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2419,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2420,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2421,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2422,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2423,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2424,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2425,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2426,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2427,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2428,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2429,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2430,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2431,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2432,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2433,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 2434,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2435,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2436,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2437,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2438,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2439,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2440,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2441,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2442,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2443,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2444,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2445,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2446,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2447,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2448,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2449,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2450,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2451,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2452,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2453,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2454,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 2455,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2456,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2457,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2458,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2459,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2460,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2461,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2462,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2463,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2464,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2465,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2466,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2467,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2468,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2469,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2470,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2471,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2472,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2473,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2474,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2475,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 2476,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2477,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2478,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2479,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2480,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2481,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2482,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2483,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2484,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2485,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2486,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2487,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2488,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2489,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2490,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2491,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2492,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2493,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2494,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2495,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2496,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 2497,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2498,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2499,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2500,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2501,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2502,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2503,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2504,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2505,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2506,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2507,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2508,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2509,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2510,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2511,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2512,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2513,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2514,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2515,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2516,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2517,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 2518,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2519,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2520,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2521,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2522,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2523,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2524,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2525,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2526,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2527,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2528,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2529,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2530,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2531,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2532,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2533,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2534,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2535,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2536,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2537,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2538,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 2539,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2540,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2541,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2542,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2543,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2544,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2545,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2546,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2547,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2548,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2549,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2550,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2551,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2552,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2553,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2554,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2555,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2556,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2557,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2558,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 2559,
              "name": "Subassembly 3",
              "children": [
                {
                  "id": 2560,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 2561,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2562,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2563,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2564,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2565,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2566,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2567,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2568,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2569,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2570,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2571,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2572,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2573,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2574,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2575,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2576,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2577,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2578,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2579,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2580,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2581,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 2582,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2583,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2584,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2585,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2586,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2587,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2588,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2589,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2590,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2591,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2592,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2593,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2594,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2595,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2596,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2597,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2598,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2599,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2600,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2601,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2602,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 2603,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2604,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2605,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2606,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2607,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2608,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2609,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2610,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2611,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2612,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2613,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2614,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2615,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2616,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2617,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2618,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2619,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2620,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2621,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2622,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2623,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 2624,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2625,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2626,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2627,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2628,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2629,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2630,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2631,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2632,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2633,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2634,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2635,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2636,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2637,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2638,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2639,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2640,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2641,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2642,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2643,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2644,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 2645,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2646,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2647,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2648,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2649,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2650,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2651,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2652,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2653,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2654,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2655,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2656,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2657,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2658,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2659,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2660,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2661,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2662,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2663,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2664,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2665,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 2666,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2667,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2668,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2669,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2670,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2671,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2672,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2673,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2674,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2675,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2676,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2677,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2678,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2679,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2680,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2681,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2682,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2683,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2684,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2685,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2686,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 2687,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2688,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2689,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2690,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2691,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2692,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2693,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2694,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2695,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2696,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2697,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2698,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2699,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2700,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2701,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2702,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2703,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2704,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2705,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2706,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2707,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 2708,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2709,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2710,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2711,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2712,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2713,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2714,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2715,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2716,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2717,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2718,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2719,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2720,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2721,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2722,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2723,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2724,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2725,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2726,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2727,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2728,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 2729,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2730,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2731,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2732,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2733,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2734,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2735,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2736,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2737,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2738,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2739,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2740,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2741,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2742,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2743,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2744,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2745,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2746,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2747,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2748,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2749,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 2750,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2751,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2752,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2753,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2754,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2755,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2756,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2757,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2758,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2759,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2760,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2761,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2762,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2763,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2764,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2765,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2766,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2767,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2768,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2769,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 2770,
              "name": "Subassembly 4",
              "children": [
                {
                  "id": 2771,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 2772,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2773,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2774,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2775,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2776,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2777,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2778,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2779,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2780,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2781,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2782,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2783,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2784,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2785,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2786,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2787,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2788,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2789,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2790,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2791,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2792,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 2793,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2794,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2795,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2796,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2797,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2798,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2799,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2800,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2801,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2802,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2803,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2804,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2805,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2806,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2807,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2808,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2809,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2810,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2811,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2812,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2813,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 2814,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2815,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2816,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2817,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2818,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2819,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2820,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2821,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2822,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2823,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2824,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2825,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2826,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2827,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2828,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2829,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2830,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2831,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2832,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2833,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2834,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 2835,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2836,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2837,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2838,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2839,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2840,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2841,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2842,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2843,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2844,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2845,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2846,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2847,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2848,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2849,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2850,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2851,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2852,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2853,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2854,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2855,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 2856,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2857,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2858,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2859,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2860,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2861,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2862,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2863,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2864,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2865,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2866,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2867,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2868,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2869,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2870,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2871,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2872,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2873,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2874,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2875,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2876,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 2877,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2878,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2879,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2880,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2881,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2882,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2883,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2884,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2885,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2886,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2887,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2888,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2889,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2890,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2891,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2892,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2893,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2894,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2895,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2896,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2897,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 2898,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2899,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2900,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2901,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2902,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2903,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2904,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2905,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2906,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2907,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2908,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2909,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2910,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2911,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2912,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2913,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2914,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2915,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2916,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2917,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2918,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 2919,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2920,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2921,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2922,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2923,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2924,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2925,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2926,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2927,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2928,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2929,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2930,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2931,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2932,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2933,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2934,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2935,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2936,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2937,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2938,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2939,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 2940,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2941,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2942,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2943,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2944,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2945,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2946,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2947,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2948,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2949,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2950,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2951,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2952,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2953,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2954,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2955,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2956,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2957,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2958,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2959,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2960,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 2961,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2962,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2963,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2964,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2965,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2966,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2967,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2968,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2969,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2970,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2971,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2972,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2973,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2974,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2975,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2976,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2977,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2978,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2979,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2980,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 2981,
              "name": "Subassembly 5",
              "children": [
                {
                  "id": 2982,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 2983,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2984,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2985,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2986,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2987,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2988,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2989,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2990,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2991,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2992,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2993,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2994,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2995,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2996,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2997,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2998,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2999,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3000,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3001,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3002,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3003,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 3004,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3005,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3006,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3007,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3008,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3009,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3010,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3011,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3012,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3013,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3014,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3015,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3016,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3017,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3018,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3019,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3020,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3021,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3022,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3023,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3024,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 3025,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3026,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3027,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3028,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3029,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3030,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3031,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3032,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3033,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3034,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3035,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3036,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3037,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3038,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3039,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3040,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3041,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3042,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3043,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3044,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3045,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 3046,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3047,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3048,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3049,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3050,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3051,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3052,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3053,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3054,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3055,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3056,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3057,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3058,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3059,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3060,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3061,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3062,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3063,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3064,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3065,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3066,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 3067,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3068,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3069,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3070,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3071,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3072,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3073,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3074,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3075,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3076,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3077,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3078,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3079,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3080,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3081,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3082,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3083,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3084,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3085,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3086,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3087,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 3088,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3089,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3090,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3091,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3092,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3093,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3094,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3095,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3096,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3097,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3098,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3099,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3100,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3101,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3102,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3103,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3104,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3105,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3106,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3107,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3108,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 3109,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3110,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3111,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3112,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3113,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3114,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3115,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3116,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3117,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3118,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3119,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3120,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3121,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3122,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3123,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3124,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3125,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3126,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3127,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3128,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3129,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 3130,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3131,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3132,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3133,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3134,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3135,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3136,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3137,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3138,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3139,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3140,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3141,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3142,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3143,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3144,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3145,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3146,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3147,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3148,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3149,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3150,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 3151,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3152,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3153,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3154,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3155,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3156,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3157,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3158,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3159,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3160,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3161,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3162,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3163,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3164,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3165,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3166,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3167,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3168,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3169,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3170,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3171,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 3172,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3173,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3174,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3175,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3176,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3177,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3178,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3179,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3180,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3181,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3182,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3183,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3184,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3185,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3186,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3187,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3188,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3189,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3190,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3191,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 3192,
              "name": "Subassembly 6",
              "children": [
                {
                  "id": 3193,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 3194,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3195,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3196,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3197,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3198,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3199,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3200,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3201,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3202,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3203,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3204,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3205,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3206,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3207,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3208,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3209,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3210,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3211,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3212,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3213,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3214,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 3215,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3216,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3217,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3218,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3219,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3220,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3221,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3222,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3223,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3224,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3225,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3226,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3227,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3228,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3229,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3230,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3231,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3232,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3233,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3234,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3235,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 3236,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3237,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3238,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3239,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3240,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3241,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3242,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3243,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3244,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3245,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3246,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3247,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3248,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3249,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3250,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3251,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3252,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3253,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3254,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3255,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3256,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 3257,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3258,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3259,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3260,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3261,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3262,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3263,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3264,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3265,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3266,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3267,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3268,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3269,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3270,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3271,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3272,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3273,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3274,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3275,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3276,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3277,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 3278,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3279,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3280,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3281,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3282,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3283,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3284,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3285,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3286,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3287,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3288,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3289,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3290,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3291,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3292,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3293,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3294,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3295,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3296,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3297,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3298,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 3299,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3300,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3301,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3302,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3303,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3304,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3305,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3306,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3307,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3308,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3309,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3310,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3311,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3312,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3313,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3314,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3315,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3316,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3317,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3318,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3319,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 3320,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3321,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3322,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3323,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3324,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3325,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3326,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3327,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3328,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3329,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3330,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3331,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3332,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3333,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3334,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3335,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3336,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3337,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3338,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3339,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3340,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 3341,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3342,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3343,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3344,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3345,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3346,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3347,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3348,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3349,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3350,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3351,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3352,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3353,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3354,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3355,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3356,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3357,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3358,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3359,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3360,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3361,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 3362,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3363,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3364,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3365,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3366,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3367,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3368,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3369,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3370,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3371,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3372,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3373,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3374,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3375,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3376,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3377,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3378,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3379,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3380,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3381,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3382,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 3383,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3384,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3385,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3386,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3387,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3388,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3389,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3390,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3391,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3392,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3393,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3394,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3395,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3396,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3397,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3398,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3399,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3400,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3401,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3402,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 3403,
              "name": "Subassembly 7",
              "children": [
                {
                  "id": 3404,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 3405,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3406,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3407,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3408,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3409,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3410,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3411,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3412,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3413,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3414,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3415,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3416,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3417,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3418,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3419,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3420,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3421,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3422,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3423,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3424,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3425,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 3426,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3427,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3428,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3429,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3430,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3431,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3432,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3433,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3434,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3435,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3436,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3437,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3438,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3439,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3440,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3441,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3442,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3443,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3444,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3445,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3446,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 3447,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3448,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3449,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3450,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3451,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3452,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3453,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3454,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3455,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3456,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3457,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3458,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3459,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3460,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3461,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3462,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3463,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3464,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3465,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3466,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3467,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 3468,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3469,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3470,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3471,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3472,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3473,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3474,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3475,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3476,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3477,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3478,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3479,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3480,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3481,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3482,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3483,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3484,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3485,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3486,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3487,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3488,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 3489,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3490,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3491,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3492,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3493,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3494,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3495,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3496,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3497,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3498,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3499,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3500,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3501,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3502,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3503,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3504,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3505,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3506,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3507,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3508,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3509,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 3510,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3511,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3512,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3513,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3514,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3515,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3516,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3517,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3518,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3519,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3520,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3521,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3522,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3523,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3524,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3525,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3526,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3527,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3528,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3529,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3530,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 3531,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3532,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3533,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3534,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3535,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3536,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3537,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3538,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3539,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3540,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3541,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3542,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3543,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3544,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3545,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3546,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3547,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3548,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3549,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3550,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3551,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 3552,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3553,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3554,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3555,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3556,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3557,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3558,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3559,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3560,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3561,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3562,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3563,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3564,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3565,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3566,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3567,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3568,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3569,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3570,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3571,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3572,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 3573,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3574,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3575,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3576,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3577,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3578,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3579,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3580,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3581,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3582,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3583,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3584,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3585,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3586,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3587,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3588,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3589,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3590,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3591,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3592,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3593,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 3594,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3595,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3596,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3597,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3598,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3599,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3600,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3601,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3602,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3603,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3604,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3605,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3606,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3607,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3608,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3609,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3610,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3611,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3612,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3613,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 3614,
              "name": "Subassembly 8",
              "children": [
                {
                  "id": 3615,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 3616,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3617,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3618,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3619,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3620,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3621,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3622,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3623,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3624,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3625,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3626,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3627,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3628,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3629,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3630,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3631,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3632,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3633,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3634,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3635,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3636,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 3637,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3638,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3639,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3640,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3641,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3642,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3643,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3644,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3645,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3646,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3647,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3648,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3649,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3650,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3651,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3652,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3653,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3654,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3655,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3656,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3657,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 3658,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3659,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3660,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3661,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3662,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3663,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3664,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3665,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3666,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3667,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3668,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3669,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3670,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3671,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3672,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3673,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3674,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3675,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3676,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3677,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3678,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 3679,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3680,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3681,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3682,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3683,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3684,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3685,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3686,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3687,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3688,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3689,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3690,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3691,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3692,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3693,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3694,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3695,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3696,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3697,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3698,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3699,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 3700,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3701,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3702,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3703,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3704,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3705,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3706,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3707,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3708,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3709,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3710,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3711,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3712,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3713,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3714,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3715,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3716,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3717,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3718,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3719,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3720,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 3721,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3722,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3723,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3724,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3725,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3726,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3727,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3728,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3729,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3730,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3731,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3732,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3733,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3734,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3735,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3736,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3737,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3738,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3739,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3740,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3741,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 3742,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3743,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3744,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3745,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3746,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3747,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3748,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3749,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3750,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3751,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3752,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3753,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3754,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3755,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3756,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3757,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3758,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3759,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3760,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3761,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3762,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 3763,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3764,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3765,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3766,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3767,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3768,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3769,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3770,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3771,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3772,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3773,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3774,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3775,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3776,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3777,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3778,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3779,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3780,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3781,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3782,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3783,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 3784,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3785,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3786,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3787,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3788,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3789,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3790,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3791,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3792,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3793,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3794,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3795,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3796,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3797,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3798,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3799,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3800,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3801,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3802,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3803,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3804,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 3805,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3806,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3807,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3808,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3809,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3810,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3811,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3812,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3813,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3814,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3815,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3816,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3817,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3818,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3819,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3820,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3821,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3822,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3823,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3824,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 3825,
              "name": "Subassembly 9",
              "children": [
                {
                  "id": 3826,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 3827,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3828,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3829,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3830,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3831,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3832,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3833,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3834,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3835,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3836,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3837,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3838,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3839,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3840,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3841,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3842,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3843,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3844,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3845,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3846,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3847,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 3848,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3849,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3850,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3851,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3852,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3853,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3854,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3855,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3856,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3857,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3858,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3859,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3860,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3861,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3862,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3863,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3864,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3865,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3866,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3867,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3868,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 3869,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3870,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3871,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3872,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3873,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3874,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3875,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3876,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3877,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3878,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3879,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3880,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3881,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3882,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3883,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3884,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3885,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3886,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3887,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3888,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3889,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 3890,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3891,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3892,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3893,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3894,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3895,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3896,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3897,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3898,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3899,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3900,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3901,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3902,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3903,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3904,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3905,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3906,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3907,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3908,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3909,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3910,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 3911,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3912,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3913,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3914,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3915,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3916,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3917,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3918,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3919,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3920,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3921,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3922,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3923,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3924,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3925,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3926,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3927,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3928,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3929,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3930,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3931,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 3932,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3933,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3934,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3935,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3936,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3937,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3938,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3939,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3940,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3941,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3942,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3943,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3944,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3945,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3946,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3947,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3948,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3949,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3950,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3951,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3952,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 3953,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3954,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3955,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3956,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3957,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3958,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3959,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3960,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3961,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3962,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3963,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3964,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3965,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3966,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3967,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3968,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3969,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3970,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3971,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3972,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3973,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 3974,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3975,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3976,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3977,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3978,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 3979,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 3980,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 3981,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 3982,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 3983,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 3984,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 3985,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 3986,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 3987,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 3988,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 3989,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 3990,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 3991,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 3992,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 3993,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 3994,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 3995,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 3996,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 3997,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 3998,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 3999,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 4000,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 4001,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 4002,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 4003,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 4004,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 4005,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 4006,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 4007,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 4008,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 4009,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 4010,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 4011,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 4012,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 4013,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 4014,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 4015,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 4016,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 4017,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 4018,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 4019,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 4020,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 4021,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 4022,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 4023,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 4024,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 4025,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 4026,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 4027,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 4028,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 4029,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 4030,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 4031,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 4032,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 4033,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 4034,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 4035,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 4036,
              "name": "Subassembly 10",
              "children": [
                {
                  "id": 4037,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 4038,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 4039,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 4040,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 4041,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 4042,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 4043,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 4044,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 4045,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 4046,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 4047,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 4048,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 4049,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 4050,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 4051,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 4052,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 4053,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 4054,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 4055,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 4056,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 4057,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 4058,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 4059,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 4060,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 4061,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 4062,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 4063,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 4064,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 4065,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 4066,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 4067,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 4068,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 4069,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 4070,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 4071,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 4072,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 4073,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 4074,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 4075,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 4076,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 4077,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 4078,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 4079,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 4080,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 4081,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 4082,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 4083,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 4084,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 4085,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 4086,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 4087,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 4088,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 4089,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 4090,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 4091,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 4092,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 4093,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 4094,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 4095,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 4096,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 4097,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 4098,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 4099,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 4100,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 4101,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 4102,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 4103,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 4104,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 4105,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 4106,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 4107,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 4108,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 4109,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 4110,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 4111,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 4112,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 4113,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 4114,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 4115,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 4116,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 4117,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 4118,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 4119,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 4120,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 4121,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 4122,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 4123,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 4124,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 4125,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 4126,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 4127,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 4128,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 4129,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 4130,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 4131,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 4132,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 4133,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 4134,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 4135,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 4136,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 4137,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 4138,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 4139,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 4140,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 4141,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 4142,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 4143,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 4144,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 4145,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 4146,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 4147,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 4148,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 4149,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 4150,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 4151,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 4152,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 4153,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 4154,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 4155,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 4156,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 4157,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 4158,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 4159,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 4160,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 4161,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 4162,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 4163,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 4164,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 4165,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 4166,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 4167,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 4168,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 4169,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 4170,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 4171,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 4172,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 4173,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 4174,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 4175,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 4176,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 4177,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 4178,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 4179,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 4180,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 4181,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 4182,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 4183,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 4184,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 4185,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 4186,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 4187,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 4188,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 4189,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 4190,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 4191,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 4192,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 4193,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 4194,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 4195,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 4196,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 4197,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 4198,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 4199,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 4200,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 4201,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 4202,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 4203,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 4204,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 4205,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 4206,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 4207,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 4208,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 4209,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 4210,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 4211,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 4212,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 4213,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 4214,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 4215,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 4216,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 4217,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 4218,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 4219,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 4220,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 4221,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 4222,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 4223,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 4224,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 4225,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 4226,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 4227,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 4228,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 4229,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 4230,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 4231,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 4232,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 4233,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 4234,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 4235,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 4236,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 4237,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 4238,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 4239,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 4240,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 4241,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 4242,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 4243,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 4244,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 4245,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 4246,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": 3,
          "name": "Assembly 2",
          "children": [
            {
              "id": 237,
              "name": "Subassembly 1",
              "children": [
                {
                  "id": 238,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 239,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 240,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 241,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 242,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 243,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 244,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 245,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 246,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 247,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 248,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 249,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 250,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 251,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 252,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 253,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 254,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 255,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 256,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 257,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 258,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 259,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 260,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 261,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 262,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 263,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 264,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 265,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 266,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 267,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 268,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 269,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 270,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 271,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 272,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 273,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 274,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 275,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 276,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 277,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 278,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 279,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 280,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 281,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 282,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 283,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 284,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 285,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 286,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 287,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 288,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 289,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 290,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 291,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 292,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 293,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 294,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 295,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 296,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 297,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 298,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 299,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 300,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 301,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 302,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 303,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 304,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 305,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 306,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 307,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 308,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 309,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 310,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 311,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 312,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 313,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 314,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 315,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 316,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 317,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 318,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 319,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 320,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 321,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 322,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 323,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 324,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 325,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 326,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 327,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 328,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 329,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 330,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 331,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 332,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 333,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 334,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 335,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 336,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 337,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 338,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 339,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 340,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 341,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 342,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 343,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 344,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 345,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 346,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 347,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 348,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 349,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 350,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 351,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 352,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 353,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 354,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 355,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 356,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 357,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 358,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 359,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 360,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 361,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 362,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 363,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 364,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 365,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 366,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 367,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 368,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 369,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 370,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 371,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 372,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 373,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 374,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 375,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 376,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 377,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 378,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 379,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 380,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 381,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 382,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 383,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 384,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 385,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 386,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 387,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 388,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 389,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 390,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 391,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 392,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 393,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 394,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 395,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 396,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 397,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 398,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 399,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 400,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 401,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 402,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 403,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 404,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 405,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 406,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 407,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 408,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 409,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 410,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 411,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 412,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 413,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 414,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 415,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 416,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 417,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 418,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 419,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 420,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 421,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 422,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 423,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 424,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 425,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 426,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 427,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 428,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 429,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 430,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 431,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 432,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 433,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 434,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 435,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 436,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 437,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 438,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 439,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 440,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 441,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 442,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 443,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 444,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 445,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 446,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 447,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 1714,
              "name": "Subassembly 2",
              "children": [
                {
                  "id": 1715,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 1716,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1717,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1718,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1719,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1720,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1721,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1722,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1723,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1724,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1725,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1726,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1727,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1728,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1729,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1730,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1731,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1732,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1733,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1734,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1735,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1736,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 1737,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1738,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1739,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1740,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1741,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1742,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1743,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1744,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1745,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1746,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1747,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1748,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1749,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1750,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1751,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1752,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1753,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1754,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1755,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1756,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1757,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 1758,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1759,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1760,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1761,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1762,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1763,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1764,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1765,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1766,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1767,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1768,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1769,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1770,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1771,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1772,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1773,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1774,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1775,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1776,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1777,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1778,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 1779,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1780,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1781,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1782,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1783,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1784,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1785,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1786,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1787,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1788,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1789,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1790,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1791,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1792,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1793,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1794,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1795,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1796,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1797,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1798,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1799,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 1800,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1801,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1802,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1803,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1804,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1805,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1806,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1807,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1808,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1809,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1810,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1811,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1812,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1813,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1814,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1815,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1816,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1817,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1818,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1819,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1820,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 1821,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1822,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1823,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1824,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1825,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1826,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1827,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1828,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1829,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1830,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1831,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1832,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1833,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1834,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1835,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1836,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1837,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1838,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1839,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1840,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1841,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 1842,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1843,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1844,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1845,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1846,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1847,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1848,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1849,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1850,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1851,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1852,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1853,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1854,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1855,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1856,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1857,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1858,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1859,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1860,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1861,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1862,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 1863,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1864,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1865,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1866,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1867,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1868,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1869,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1870,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1871,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1872,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1873,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1874,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1875,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1876,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1877,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1878,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1879,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1880,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1881,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1882,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1883,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 1884,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1885,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1886,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1887,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1888,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1889,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1890,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1891,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1892,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1893,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1894,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1895,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1896,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1897,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1898,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1899,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1900,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1901,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1902,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1903,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1904,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 1905,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1906,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1907,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1908,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1909,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1910,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1911,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1912,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1913,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1914,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1915,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1916,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1917,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1918,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1919,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1920,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1921,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1922,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1923,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1924,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 1503,
              "name": "Subassembly 3",
              "children": [
                {
                  "id": 1504,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 1505,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1506,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1507,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1508,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1509,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1510,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1511,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1512,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1513,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1514,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1515,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1516,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1517,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1518,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1519,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1520,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1521,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1522,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1523,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1524,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1525,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 1526,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1527,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1528,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1529,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1530,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1531,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1532,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1533,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1534,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1535,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1536,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1537,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1538,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1539,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1540,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1541,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1542,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1543,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1544,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1545,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1546,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 1547,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1548,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1549,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1550,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1551,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1552,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1553,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1554,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1555,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1556,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1557,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1558,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1559,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1560,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1561,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1562,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1563,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1564,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1565,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1566,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1567,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 1568,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1569,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1570,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1571,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1572,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1573,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1574,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1575,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1576,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1577,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1578,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1579,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1580,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1581,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1582,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1583,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1584,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1585,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1586,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1587,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1588,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 1589,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1590,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1591,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1592,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1593,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1594,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1595,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1596,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1597,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1598,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1599,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1600,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1601,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1602,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1603,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1604,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1605,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1606,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1607,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1608,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1609,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 1610,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1611,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1612,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1613,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1614,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1615,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1616,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1617,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1618,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1619,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1620,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1621,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1622,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1623,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1624,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1625,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1626,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1627,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1628,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1629,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1630,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 1631,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1632,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1633,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1634,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1635,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1636,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1637,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1638,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1639,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1640,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1641,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1642,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1643,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1644,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1645,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1646,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1647,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1648,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1649,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1650,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1651,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 1652,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1653,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1654,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1655,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1656,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1657,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1658,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1659,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1660,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1661,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1662,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1663,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1664,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1665,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1666,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1667,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1668,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1669,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1670,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1671,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1672,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 1673,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1674,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1675,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1676,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1677,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1678,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1679,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1680,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1681,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1682,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1683,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1684,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1685,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1686,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1687,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1688,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1689,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1690,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1691,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1692,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1693,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 1694,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1695,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1696,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1697,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1698,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1699,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1700,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1701,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1702,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1703,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1704,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1705,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1706,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1707,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1708,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1709,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1710,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1711,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1712,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1713,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 1292,
              "name": "Subassembly 4",
              "children": [
                {
                  "id": 1293,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 1294,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1295,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1296,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1297,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1298,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1299,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1300,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1301,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1302,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1303,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1304,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1305,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1306,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1307,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1308,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1309,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1310,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1311,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1312,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1313,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1314,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 1315,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1316,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1317,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1318,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1319,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1320,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1321,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1322,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1323,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1324,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1325,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1326,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1327,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1328,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1329,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1330,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1331,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1332,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1333,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1334,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1335,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 1336,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1337,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1338,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1339,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1340,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1341,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1342,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1343,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1344,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1345,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1346,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1347,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1348,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1349,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1350,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1351,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1352,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1353,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1354,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1355,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1356,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 1357,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1358,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1359,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1360,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1361,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1362,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1363,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1364,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1365,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1366,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1367,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1368,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1369,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1370,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1371,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1372,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1373,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1374,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1375,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1376,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1377,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 1378,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1379,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1380,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1381,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1382,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1383,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1384,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1385,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1386,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1387,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1388,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1389,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1390,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1391,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1392,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1393,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1394,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1395,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1396,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1397,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1398,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 1399,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1400,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1401,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1402,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1403,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1404,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1405,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1406,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1407,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1408,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1409,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1410,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1411,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1412,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1413,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1414,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1415,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1416,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1417,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1418,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1419,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 1420,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1421,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1422,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1423,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1424,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1425,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1426,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1427,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1428,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1429,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1430,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1431,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1432,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1433,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1434,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1435,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1436,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1437,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1438,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1439,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1440,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 1441,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1442,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1443,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1444,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1445,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1446,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1447,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1448,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1449,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1450,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1451,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1452,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1453,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1454,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1455,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1456,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1457,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1458,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1459,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1460,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1461,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 1462,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1463,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1464,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1465,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1466,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1467,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1468,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1469,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1470,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1471,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1472,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1473,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1474,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1475,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1476,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1477,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1478,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1479,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1480,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1481,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1482,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 1483,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1484,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1485,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1486,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1487,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1488,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1489,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1490,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1491,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1492,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1493,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1494,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1495,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1496,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1497,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1498,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1499,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1500,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1501,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1502,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 1081,
              "name": "Subassembly 5",
              "children": [
                {
                  "id": 1082,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 1083,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1084,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1085,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1086,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1087,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1088,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1089,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1090,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1091,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1092,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1093,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1094,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1095,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1096,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1097,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1098,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1099,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1100,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1101,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1102,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1103,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 1104,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1105,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1106,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1107,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1108,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1109,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1110,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1111,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1112,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1113,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1114,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1115,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1116,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1117,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1118,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1119,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1120,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1121,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1122,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1123,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1124,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 1125,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1126,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1127,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1128,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1129,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1130,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1131,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1132,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1133,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1134,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1135,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1136,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1137,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1138,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1139,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1140,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1141,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1142,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1143,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1144,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1145,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 1146,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1147,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1148,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1149,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1150,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1151,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1152,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1153,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1154,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1155,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1156,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1157,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1158,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1159,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1160,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1161,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1162,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1163,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1164,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1165,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1166,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 1167,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1168,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1169,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1170,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1171,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1172,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1173,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1174,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1175,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1176,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1177,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1178,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1179,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1180,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1181,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1182,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1183,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1184,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1185,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1186,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1187,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 1188,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1189,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1190,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1191,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1192,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1193,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1194,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1195,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1196,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1197,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1198,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1199,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1200,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1201,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1202,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1203,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1204,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1205,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1206,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1207,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1208,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 1209,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1210,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1211,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1212,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1213,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1214,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1215,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1216,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1217,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1218,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1219,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1220,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1221,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1222,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1223,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1224,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1225,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1226,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1227,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1228,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1229,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 1230,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1231,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1232,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1233,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1234,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1235,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1236,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1237,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1238,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1239,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1240,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1241,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1242,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1243,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1244,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1245,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1246,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1247,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1248,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1249,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1250,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 1251,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1252,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1253,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1254,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1255,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1256,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1257,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1258,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1259,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1260,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1261,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1262,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1263,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1264,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1265,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1266,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1267,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1268,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1269,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1270,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1271,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 1272,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1273,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1274,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1275,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1276,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1277,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1278,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1279,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1280,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1281,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1282,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1283,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1284,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1285,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1286,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1287,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1288,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1289,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1290,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1291,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 870,
              "name": "Subassembly 6",
              "children": [
                {
                  "id": 871,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 872,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 873,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 874,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 875,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 876,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 877,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 878,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 879,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 880,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 881,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 882,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 883,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 884,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 885,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 886,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 887,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 888,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 889,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 890,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 891,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 892,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 893,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 894,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 895,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 896,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 897,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 898,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 899,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 900,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 901,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 902,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 903,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 904,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 905,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 906,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 907,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 908,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 909,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 910,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 911,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 912,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 913,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 914,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 915,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 916,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 917,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 918,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 919,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 920,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 921,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 922,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 923,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 924,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 925,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 926,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 927,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 928,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 929,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 930,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 931,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 932,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 933,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 934,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 935,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 936,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 937,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 938,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 939,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 940,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 941,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 942,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 943,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 944,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 945,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 946,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 947,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 948,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 949,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 950,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 951,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 952,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 953,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 954,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 955,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 956,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 957,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 958,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 959,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 960,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 961,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 962,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 963,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 964,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 965,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 966,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 967,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 968,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 969,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 970,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 971,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 972,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 973,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 974,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 975,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 976,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 977,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 978,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 979,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 980,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 981,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 982,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 983,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 984,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 985,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 986,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 987,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 988,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 989,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 990,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 991,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 992,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 993,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 994,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 995,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 996,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 997,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 998,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 999,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1000,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1001,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1002,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1003,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1004,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1005,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1006,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1007,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1008,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1009,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1010,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1011,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1012,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1013,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1014,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1015,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1016,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1017,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1018,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 1019,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1020,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1021,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1022,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1023,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1024,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1025,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1026,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1027,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1028,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1029,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1030,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1031,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1032,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1033,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1034,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1035,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1036,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1037,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1038,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1039,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 1040,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1041,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1042,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1043,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1044,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1045,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1046,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1047,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1048,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1049,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1050,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1051,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1052,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1053,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1054,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1055,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1056,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1057,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1058,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1059,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1060,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 1061,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1062,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1063,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1064,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1065,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1066,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1067,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1068,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1069,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1070,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1071,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1072,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1073,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1074,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1075,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1076,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1077,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1078,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1079,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1080,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 659,
              "name": "Subassembly 7",
              "children": [
                {
                  "id": 660,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 661,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 662,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 663,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 664,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 665,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 666,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 667,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 668,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 669,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 670,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 671,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 672,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 673,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 674,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 675,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 676,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 677,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 678,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 679,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 680,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 681,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 682,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 683,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 684,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 685,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 686,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 687,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 688,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 689,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 690,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 691,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 692,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 693,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 694,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 695,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 696,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 697,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 698,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 699,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 700,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 701,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 702,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 703,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 704,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 705,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 706,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 707,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 708,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 709,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 710,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 711,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 712,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 713,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 714,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 715,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 716,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 717,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 718,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 719,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 720,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 721,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 722,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 723,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 724,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 725,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 726,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 727,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 728,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 729,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 730,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 731,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 732,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 733,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 734,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 735,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 736,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 737,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 738,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 739,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 740,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 741,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 742,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 743,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 744,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 745,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 746,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 747,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 748,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 749,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 750,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 751,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 752,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 753,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 754,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 755,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 756,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 757,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 758,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 759,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 760,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 761,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 762,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 763,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 764,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 765,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 766,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 767,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 768,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 769,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 770,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 771,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 772,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 773,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 774,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 775,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 776,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 777,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 778,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 779,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 780,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 781,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 782,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 783,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 784,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 785,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 786,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 787,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 788,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 789,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 790,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 791,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 792,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 793,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 794,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 795,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 796,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 797,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 798,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 799,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 800,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 801,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 802,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 803,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 804,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 805,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 806,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 807,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 808,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 809,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 810,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 811,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 812,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 813,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 814,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 815,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 816,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 817,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 818,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 819,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 820,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 821,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 822,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 823,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 824,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 825,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 826,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 827,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 828,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 829,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 830,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 831,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 832,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 833,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 834,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 835,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 836,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 837,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 838,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 839,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 840,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 841,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 842,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 843,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 844,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 845,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 846,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 847,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 848,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 849,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 850,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 851,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 852,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 853,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 854,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 855,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 856,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 857,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 858,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 859,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 860,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 861,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 862,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 863,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 864,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 865,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 866,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 867,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 868,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 869,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 448,
              "name": "Subassembly 8",
              "children": [
                {
                  "id": 449,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 450,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 451,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 452,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 453,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 454,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 455,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 456,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 457,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 458,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 459,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 460,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 461,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 462,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 463,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 464,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 465,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 466,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 467,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 468,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 469,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 470,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 471,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 472,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 473,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 474,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 475,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 476,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 477,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 478,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 479,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 480,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 481,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 482,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 483,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 484,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 485,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 486,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 487,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 488,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 489,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 490,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 491,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 492,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 493,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 494,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 495,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 496,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 497,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 498,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 499,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 500,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 501,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 502,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 503,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 504,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 505,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 506,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 507,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 508,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 509,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 510,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 511,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 512,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 513,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 514,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 515,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 516,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 517,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 518,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 519,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 520,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 521,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 522,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 523,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 524,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 525,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 526,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 527,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 528,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 529,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 530,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 531,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 532,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 533,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 534,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 535,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 536,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 537,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 538,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 539,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 540,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 541,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 542,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 543,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 544,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 545,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 546,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 547,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 548,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 549,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 550,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 551,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 552,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 553,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 554,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 555,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 556,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 557,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 558,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 559,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 560,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 561,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 562,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 563,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 564,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 565,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 566,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 567,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 568,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 569,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 570,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 571,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 572,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 573,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 574,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 575,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 576,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 577,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 578,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 579,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 580,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 581,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 582,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 583,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 584,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 585,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 586,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 587,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 588,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 589,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 590,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 591,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 592,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 593,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 594,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 595,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 596,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 597,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 598,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 599,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 600,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 601,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 602,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 603,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 604,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 605,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 606,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 607,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 608,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 609,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 610,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 611,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 612,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 613,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 614,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 615,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 616,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 617,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 618,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 619,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 620,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 621,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 622,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 623,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 624,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 625,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 626,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 627,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 628,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 629,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 630,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 631,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 632,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 633,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 634,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 635,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 636,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 637,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 638,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 639,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 640,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 641,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 642,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 643,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 644,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 645,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 646,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 647,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 648,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 649,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 650,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 651,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 652,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 653,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 654,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 655,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 656,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 657,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 658,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 1925,
              "name": "Subassembly 9",
              "children": [
                {
                  "id": 1926,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 1927,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1928,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1929,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1930,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1931,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1932,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1933,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1934,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1935,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1936,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1937,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1938,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1939,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1940,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1941,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1942,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1943,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1944,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1945,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1946,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1947,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 1948,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1949,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1950,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1951,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1952,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1953,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1954,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1955,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1956,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1957,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1958,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1959,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1960,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1961,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1962,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1963,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1964,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1965,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1966,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1967,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1968,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 1969,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1970,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1971,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1972,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1973,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1974,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1975,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1976,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1977,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1978,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 1979,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 1980,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 1981,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 1982,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 1983,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 1984,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 1985,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 1986,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 1987,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 1988,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 1989,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 1990,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 1991,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 1992,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 1993,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 1994,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 1995,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 1996,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 1997,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 1998,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 1999,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2000,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2001,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2002,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2003,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2004,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2005,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2006,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2007,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2008,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2009,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2010,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 2011,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2012,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2013,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2014,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2015,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2016,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2017,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2018,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2019,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2020,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2021,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2022,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2023,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2024,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2025,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2026,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2027,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2028,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2029,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2030,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2031,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 2032,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2033,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2034,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2035,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2036,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2037,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2038,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2039,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2040,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2041,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2042,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2043,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2044,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2045,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2046,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2047,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2048,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2049,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2050,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2051,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2052,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 2053,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2054,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2055,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2056,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2057,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2058,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2059,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2060,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2061,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2062,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2063,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2064,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2065,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2066,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2067,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2068,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2069,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2070,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2071,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2072,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2073,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 2074,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2075,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2076,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2077,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2078,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2079,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2080,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2081,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2082,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2083,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2084,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2085,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2086,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2087,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2088,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2089,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2090,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2091,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2092,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2093,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2094,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 2095,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2096,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2097,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2098,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2099,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2100,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2101,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2102,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2103,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2104,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2105,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2106,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2107,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2108,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2109,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2110,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2111,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2112,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2113,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2114,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 2115,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 2116,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 2117,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 2118,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 2119,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 2120,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 2121,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 2122,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 2123,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 2124,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 2125,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 2126,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 2127,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 2128,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 2129,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 2130,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 2131,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 2132,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 2133,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 2134,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 2135,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 6,
              "name": "Subassembly 10",
              "children": [
                {
                  "id": 27,
                  "name": "Subsubassembly 1",
                  "children": [
                    {
                      "id": 28,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 29,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 30,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 31,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 32,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 33,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 34,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 35,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 36,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 37,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 38,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 39,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 40,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 41,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 42,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 43,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 44,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 45,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 46,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 47,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 48,
                  "name": "Subsubassembly 2",
                  "children": [
                    {
                      "id": 49,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 50,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 51,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 52,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 53,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 54,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 55,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 56,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 57,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 58,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 59,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 60,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 61,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 62,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 63,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 64,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 65,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 66,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 67,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 68,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 216,
                  "name": "Subsubassembly 3",
                  "children": [
                    {
                      "id": 217,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 218,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 219,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 220,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 221,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 222,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 223,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 224,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 225,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 226,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 227,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 228,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 229,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 230,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 231,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 232,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 233,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 234,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 235,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 236,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 195,
                  "name": "Subsubassembly 4",
                  "children": [
                    {
                      "id": 196,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 197,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 198,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 199,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 200,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 201,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 202,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 203,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 204,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 205,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 206,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 207,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 208,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 209,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 210,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 211,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 212,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 213,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 214,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 215,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 174,
                  "name": "Subsubassembly 5",
                  "children": [
                    {
                      "id": 175,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 176,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 177,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 178,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 179,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 180,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 181,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 182,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 183,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 184,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 185,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 186,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 187,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 188,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 189,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 190,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 191,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 192,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 193,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 194,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 153,
                  "name": "Subsubassembly 6",
                  "children": [
                    {
                      "id": 154,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 155,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 156,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 157,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 158,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 159,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 160,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 161,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 162,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 163,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 164,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 165,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 166,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 167,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 168,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 169,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 170,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 171,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 172,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 173,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 132,
                  "name": "Subsubassembly 7",
                  "children": [
                    {
                      "id": 133,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 134,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 135,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 136,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 137,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 138,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 139,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 140,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 141,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 142,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 143,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 144,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 145,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 146,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 147,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 148,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 149,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 150,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 151,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 152,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 111,
                  "name": "Subsubassembly 8",
                  "children": [
                    {
                      "id": 112,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 113,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 114,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 115,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 116,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 117,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 118,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 119,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 120,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 121,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 122,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 123,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 124,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 125,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 126,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 127,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 128,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 129,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 130,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 131,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 90,
                  "name": "Subsubassembly 9",
                  "children": [
                    {
                      "id": 91,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 92,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 93,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 94,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 95,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 96,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 97,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 98,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 99,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 100,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 101,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 102,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 103,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 104,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 105,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 106,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 107,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 108,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 109,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 110,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                },
                {
                  "id": 69,
                  "name": "Subsubassembly 10",
                  "children": [
                    {
                      "id": 70,
                      "name": "Part 1",
                      "children": []
                    },
                    {
                      "id": 71,
                      "name": "Part 2",
                      "children": []
                    },
                    {
                      "id": 72,
                      "name": "Part 3",
                      "children": []
                    },
                    {
                      "id": 73,
                      "name": "Part 4",
                      "children": []
                    },
                    {
                      "id": 74,
                      "name": "Part 5",
                      "children": []
                    },
                    {
                      "id": 75,
                      "name": "Part 6",
                      "children": []
                    },
                    {
                      "id": 76,
                      "name": "Part 7",
                      "children": []
                    },
                    {
                      "id": 77,
                      "name": "Part 8",
                      "children": []
                    },
                    {
                      "id": 78,
                      "name": "Part 9",
                      "children": []
                    },
                    {
                      "id": 79,
                      "name": "Part 10",
                      "children": []
                    },
                    {
                      "id": 80,
                      "name": "Part 11",
                      "children": []
                    },
                    {
                      "id": 81,
                      "name": "Part 12",
                      "children": []
                    },
                    {
                      "id": 82,
                      "name": "Part 13",
                      "children": []
                    },
                    {
                      "id": 83,
                      "name": "Part 14",
                      "children": []
                    },
                    {
                      "id": 84,
                      "name": "Part 15",
                      "children": []
                    },
                    {
                      "id": 85,
                      "name": "Part 16",
                      "children": []
                    },
                    {
                      "id": 86,
                      "name": "Part 17",
                      "children": []
                    },
                    {
                      "id": 87,
                      "name": "Part 18",
                      "children": []
                    },
                    {
                      "id": 88,
                      "name": "Part 19",
                      "children": []
                    },
                    {
                      "id": 89,
                      "name": "Part 20",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

exports.smallTree = smallTree;
exports.largeTree = largeTree;
exports.house = house;
exports.projects = projects;