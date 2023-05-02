import { createMachine } from 'xstate';

const SmartFridge = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUAWYAEBhA9jgNtjgLYAOAhgHYCWOlAdAEpgBmATtVNW+QC45t6AeRYsAxLkqUwAY14Z+GAAo4A7mDYBtAAwBdRKFI5Y1XrUoGQAD0QBmbQCZ6tgBwB2bbbcBGF7e8ArAEOADQgAJ6I3toAnPQALA7xMd4AbC6xXg7a8QC+uWFomLgERGRU5kysHFw8-IJCDCX4GvTN1JRQYshgZBp8AK5smMzkMugQOvpIIEYmZnSWNgi2TjGerqkB3jE+aalhkQgu0c7BwSkBqele+YXoRKW45TR0Veyc3HwCwk14LYJ2p0xAAxACCAFUADLIKaWOamcxLRAAWm8Dm89AcHliqXRMXi0VsMUOdhitnoGVSKR22VSbhiLgCdxARUehGeFFeDGYH1q3wafwIrSBXQAkjJMGCZDIBsQBvg+JA4TMEQsLDNlg4Kd54vEXHqTgEfLYAvFSQg8aksVt1gaMQF3LYWWzmmUuZVeTUvvVfm1-q0xRAWt1eqR+rwhphkHgMAAJTioFWGYyIxaaxDxa1pdG2dIObKJQIHCKINzZei43ExVLaLYuF0PN2cipvL2fOo-Rr+4WCAAi1WMZmBEswAFkwPheMq9PDU+rkQgs5XsVs3P5jd5TQ4S0dttpnH5tJvggbAo3iv93a2edUOwK-c1WgP2EOOl1wdDYbPVfOkRmEAcAl6G8NxrgJbEYmNNwAlsC0szifxdjA-xsX8Z0ClZJsrxbbl6D7PBBBkfBjEgMQhHDSgMAIgRk1mP901AZY0XsegzXzFxUlQrcSVLBAdl1NjCQZRx1xcPwYgvdlrzwmjBBwSiyKwEjYEwOS6LVf8mNRbxfCxTxtC3K50RyNxzT40CAgPNxy2SPMmSpNwpObEgPTbO9+V9bsQWGMAAC9Wh8sB-PfUFIRhDSGI1bT+Ixeh0ipakHHEgICRcC1omS+gYmxbQ8pyaDUjyTDXRw1yb3eb1O0Feggv859B1gYcP3C79phTeYtOsTMK2pXwCVg9EAgyoz4ps-KCpsornLKl5PQ8n0uwYOqAsEFbQtHDBpVleVFWnSYfw6tNou6hByQSAs9VpFKoIyjEXGy3L8viQrivuS8nnKvD208pbat81b8Ma5qxE2icpxndr6M6xjTt0617HOPVkqZNKRquR6cTyl6prerCPo5L75r5RaapWwKAdCno+jqKMMFGcZIbnGGTuYilUiA-VQIxeJ13JdIMviWx4kxiacbAvHSs+ub3JJ6q-XJwQgxDanw1p4YMBjHB40TSKWcXAJ4sJAScpu-UXoy2x-DGrHJol-JMMoHAIDgSwpcJmWTs02G2e2eL3BevNuOJC0US2NiYO0PwdjrSDUhm6W3NvOWBWZ47FxRewDw5gla1g9cs3Svi4py5I0gycly08eOSuwxOKp+0nhFENOFwAlE6TYrIXvibQfANM0MtiC6y-STIq8luuPaTyr7y8r2oozhxgnizm868YWBeL0C2KuTi8T1VDrgT6eG4W+XuyfNhW665j+spXTyXsPZe+CC1EcrPfrl1IX0WP2uCYyWJlVB8l8AyAn+O+G+PsdKEgfjsK2fddKv1CHxWsTg3AnELqaQImCT5ANliA+ePYAT0GVmAaBrNEBXBFmPVKeY-77wtOWa0fho7UigtcHc+DcLALnn9K+QNXxNSgb+fWAFkqYmPFBOsNkoI2VghaK0NpUpRyLI6dcPCiaEP4TVQRIJyAKl4JQxc2pDbRA5gJAq7F345V3n1WksjGTMgAdJXhOjfpkwBhoEx7dCyr1zseDehcLQEkxKBW24tpquJcp7fChFfExUzp4f2ZlYJcXRDxDK1wKTYiSH4As2wtwYXem47RDA5L0GIqRCAiTTodyCKkwOGSMQhwsicJwupsjoTrBEmupTYkz0qQpMA0haliPTgBRp6xkj6lSoyNIhIModJAokTwW5elTS0XExuF9lreLWpTTodS74YxzlmIJBct5HHRMvMa1IXBJCzDsAk2yZ67NAfs4KgNyEnMzDsECKQXADVQsNCywtMT0kia9N5Z8U7EMVkItgb5jkTLbjFQkFIha90ees5ed07lQrFjCmJs13nn0+f9b5gVDFTj+UuQygL+qByGkPbENtiW4wdrkIAA */
  id: "The Cool Companion",
  initial: 'off',
  type: 'parallel',
  context: {
    temperature: 25,
  },
  states: {
    Refrigirator: {
      initial: "Off",
      states: {
        Off: {
          on: {
            "Connect to Power": {
              target: "On",
            }
          }
        },

        On: {
          type: 'parallel',
          states: {
            Cooler: {
              initial: "Cooling",
              states: {
                Cooling: {
                  on: {
                    "Temperature Reached": {
                      target: "Idle",
                      cond: "temp equals target temp"
                    },
    
                    "FAULT": "Fault",
                    "Ice Accumulated": "Defrosting"
                  }
                },

                Idle: {
                  on: {
                    "Temperature Too High": {
                      target: "Cooling",
                      cond: "temp >  target temp"
                    }
                  }
                },

                Defrosting: {
                  on: {
                    "Ice Melted": "Cooling",
                    "FAULT": "Fault"
                  }
                },

                Fault: {
                  type: "final"
                }
              }
            },
            Freezer: {
              states: {
                Freezing: {
                  on: {
                    FAULT: "Fault",
                    "Ice Accumulated": "Defrosting",
                    "Temperature Reached": {
                      target: "Idle",
                      cond: "temp equals target temp"
                    }
                  }
                },
                Idle: {
                  on: {
                    "Temperature Too High": {
                      target: "Freezing",
                      cond: "temp > target temp"
                    }
                  }
                },
                Defrosting: {
                  on: {
                    FAULT: "Fault",
                    "Ice Melted": "Freezing"
                  }
                },
                Fault: {
                  type: "final"
                }
              },

              initial: "Freezing"
            }
          }
        }
      }
    },
    Door: {
      initial: 'closed',
      states: {
        closed: {
          on: {
            "Open Door": 'opened'
          }
        },

        opened: {
          on: {
            "Close Door": 'closed'
          }
        }
      }
    }
  }
});
