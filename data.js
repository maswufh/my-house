var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4453044773601649
      },
      "linkHotspots": [
        {
          "yaw": -0.7263548503956052,
          "pitch": 0.5576426946380941,
          "rotation": 0.7853981633974483,
          "target": "3-connecting"
        },
        {
          "yaw": -1.6373950677968452,
          "pitch": 0.5014684216663863,
          "rotation": 6.283185307179586,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-master",
      "name": "master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.0133720337983938,
        "pitch": 0.4787755515007852,
        "fov": 1.4453044773601649
      },
      "linkHotspots": [
        {
          "yaw": 2.240650045957234,
          "pitch": 0.5311688898634728,
          "rotation": 5.497787143782138,
          "target": "3-connecting"
        },
        {
          "yaw": 2.3284442363992923,
          "pitch": 0.377267413455467,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": -2.048253724538947,
          "pitch": 0.5859430006593733,
          "rotation": 0.7853981633974483,
          "target": "6-master-sink"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-spare",
      "name": "spare",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.20642771325698028,
          "pitch": 0.24953159849629714,
          "rotation": 0,
          "target": "3-connecting"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-connecting",
      "name": "connecting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14999631050670814,
          "pitch": 0.5434163054824594,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": -1.6213431384096353,
          "pitch": 0.5455870991461573,
          "rotation": 5.497787143782138,
          "target": "2-spare"
        },
        {
          "yaw": 1.7289961902297506,
          "pitch": 0.4642399303948359,
          "rotation": 0,
          "target": "1-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7888225700374,
          "pitch": 0.3623581672547047,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": -1.128022757322773,
          "pitch": 0.046669066727695,
          "rotation": 1.5707963267948966,
          "target": "5-kitchen-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen-toilet",
      "name": "kitchen toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5844062545042554,
          "pitch": 0.25777568633115777,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-master-sink",
      "name": "master sink",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1951849690268102,
          "pitch": 0.47288505990569796,
          "rotation": 0.7853981633974483,
          "target": "1-master"
        },
        {
          "yaw": -1.4077081271852947,
          "pitch": 0.5678534245120339,
          "rotation": 5.497787143782138,
          "target": "7-master-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-toilet",
      "name": "master toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8531041544269335,
          "pitch": 0.29648494724968977,
          "rotation": 5.497787143782138,
          "target": "6-master-sink"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "My house",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
