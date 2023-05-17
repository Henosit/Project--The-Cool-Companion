{
  "id": "The Cool Companion",
  "initial": "off",
  "states": {
    "Refrigirator": {
      "initial": "Off",
      "states": {
        "Off": {
          "on": {
            "Connect to Power": {
              "target": "On"
            }
          }
        },
        "On": {
          "states": {
            "Cooler": {
              "initial": "Cooling",
              "states": {
                "Cooling": {
                  "on": {
                    "Temperature Reached": {
                      "target": "Idle",
                      "cond": "temp equals target temp"
                    },
                    "FAULT": {
                      "target": "Fault"
                    },
                    "Ice Accumulated": {
                      "target": "Defrosting"
                    }
                  }
                },
                "Idle": {
                  "on": {
                    "Temperature Too High": {
                      "target": "Cooling",
                      "cond": "temp >  target temp"
                    }
                  }
                },
                "Defrosting": {
                  "on": {
                    "Ice Melted": {
                      "target": "Cooling"
                    },
                    "FAULT": {
                      "target": "Fault"
                    }
                  }
                },
                "Fault": {
                  "type": "final"
                }
              }
            },
            "Freezer": {
              "initial": "Freezing",
              "states": {
                "Freezing": {
                  "on": {
                    "FAULT": {
                      "target": "Fault"
                    },
                    "Ice Accumulated": {
                      "target": "Defrosting"
                    },
                    "Temperature Reached": {
                      "target": "Idle",
                      "cond": "temp equals target temp"
                    }
                  }
                },
                "Idle": {
                  "on": {
                    "Temperature Too High": {
                      "target": "Freezing",
                      "cond": "temp > target temp"
                    }
                  }
                },
                "Defrosting": {
                  "on": {
                    "Ice Melted": {
                      "target": "Freezing"
                    },
                    "FAULT": {
                      "target": "Fault"
                    }
                  }
                },
                "Fault": {
                  "type": "final"
                }
              }
            },
            "Lights": {
              "initial": "LIGHTS_OFF",
              "states": {
                "LIGHTS_OFF": {
                  "on": {
                    "turn on lights": {
                      "target": "LIGHTS_ON"
                    }
                  }
                },
                "LIGHTS_ON": {
                  "on": {
                    "Turn Off lights": {
                      "target": "LIGHTS_OFF"
                    }
                  }
                }
              }
            },
            "Sound Alarm": {
              "initial": "SOUND_OFF",
              "states": {
                "SOUND_OFF": {},
                "SOUND_ON": {
                  "after": {
                    "2000": {
                      "target": "#The Cool Companion.Refrigirator.On.Sound Alarm.SOUND_OFF",
                      "actions": [],
                      "internal": false
                    }
                  }
                }
              }
            },
            "Product Managment": {
              "initial": "Idle",
              "states": {
                "Update Products": {
                  "on": {
                    "Product Taken Out": {},
                    "Product Added": {}
                  }
                },
                "Idle": {}
              }
            }
          },
          "type": "parallel"
        }
      }
    },
    "Door": {
      "initial": "closed",
      "states": {
        "closed": {
          "after": {
            "0": {
              "target": "#The Cool Companion.Refrigirator.On.Sound Alarm.SOUND_OFF",
              "actions": [],
              "internal": false
            },
            "1": {
              "target": "#The Cool Companion.Refrigirator.On.Lights.LIGHTS_OFF",
              "actions": [],
              "internal": false
            },
            "0.5": {
              "target": "#The Cool Companion.Refrigirator.On.Product Managment.Update Products",
              "actions": [
                "Scan Refrigirator Content"
              ],
              "internal": false
            }
          },
          "on": {
            "Open Door": {
              "target": "opened"
            }
          }
        },
        "opened": {
          "after": {
            "1": {
              "target": "#The Cool Companion.Refrigirator.On.Lights.LIGHTS_ON",
              "actions": [],
              "internal": false
            },
            "500": {
              "target": "#The Cool Companion.Refrigirator.On.Sound Alarm.SOUND_ON",
              "actions": [],
              "internal": false
            }
          },
          "on": {
            "Close Door": {
              "target": "closed"
            }
          }
        }
      }
    }
  },
  "type": "parallel"
}