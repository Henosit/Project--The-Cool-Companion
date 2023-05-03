import { createMachine } from 'xstate';

const SmartFridge = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUAWYAEBhA9jgNtjgLYAOAhgHYCWOlAdAEpgBmATtVNW+QC45t6AeRYsAxLkqUwAY14Z+GAAo4A7mDYBtAAwBdRKFI5Y1XrUoGQAD0QAmAIy36AZgAcAdm3P3918-sArAG2ADQgAJ6IALQAbDH0Ae4B2n72AJzaMbbuaTEAvnlhaJi4BERkVOZMrBxcPPyCQgyl+Br0LdSUUGLIYGQafACubJjM5DLoEDr6SCBGJmZ0ljYIUYn02rkx9s4ALK7atq5+u2GRCDF7LsHBaYFxfu4FRehEZbgVNHTV7JzcfAJhM08K1BB0umIAGIAQQAqgAZZDTSzzUzmZaIK7uWxpDJuTwBVy5WynCJ2Bz0A4xO7pWyZHKuALPEDFN6ED4UL4MZi-OoAxrAghtcHdACSMkw0JkMkGxEG+D4kGRs1RiwssxWUScROSuUcaV29i87kuZ0Qu1s8XcrnsuxifgCgWt2l2zNZLXKnKqPNq-waQPaILaoogrR6fVIA14w0wyDwGAAEpxUMrDMY0UsNdFds5KfjLvZ3DlEq5dqTzgEyxtcptqTFMoS3a8PRzKt8fX96oCmoGhYIACI1YxmCHizAAWTA+F4Sr0KPTaoxCHS9DSHh8lwJRKy5cxnhcfm0iUCR0NTMKLObIM9be5NU7-IDLTag-Yw863RhCKRc5VC-RWYIM4zjxEEjjUgE-i2AEZpAdo7guOkRYFtk-jOE2JTXq2XL0P2eCCDI+DGJAYhCJGlAYHhAipnM-6ZqAmq2HSCR2q4RwoTsaSwYWbgsYWGSocczhpBhbI3jhVGCDg5EkVgRGwJgkk0aqAEMdEdKuPQdLONoOwBNsdK7O4zjcYkuz0EWJJpCBjJUk8F7ulhJBeu2958v6PaQiMYAAF5tF5YC+R+UJwoiyl0eqalAfY9D2lS1JHIyBqMrBjJOGk2TaFlLqJCaroOVe7zObePy+l2Ar0AFvkvkOsAjp+oU-jMaYLKp1iYjpsV3ESuyQY4MFkggaQBGksVFtlOXIflLyYUVnzem5frdgwVV+YIq3BWOGBSjKcoKjOUy-i1GaRe1QH0BaJKGhlxwjbsa7uNxLrpZl2W9VNoktsVOEdu5y2Vd5a24bV9ViFtk7TrOzW0a19FnZaLhHtBZaJXdKWDWu2irq9WXvXln1OfNrm8ktFWrf5gPBb0-T1DGGBjBMUPzrDp2atZsU4vshYOEZwm7su0GaRlnhvblMTTZes3st9C0k+VAbk4IIZhtTka0yMGBxjgibJuFLNLlEpbXMcKTwfYtpI9xgQBGNIu42L+UXpQOAQHAliOXNLmnSpcOamWMX2u4vUgVBnGwVqhoJEkKT+BkWQ5PkBVS+JstlfyzMnQbwlY1kBr1pBxmseHgTmfBySpHH2S5ATnslb9pPCKIGeLoBWq5Ak3gkpWZulgN5yxKB0cV5kVeJzNYnYanD4ed7EVZxaHN50e3h7PasF2pSmSuHEto5uB4s19LRN3nLj49s+bDN21jE5JS5vWTpPgW33iA7OZOn2jvZZQXEh8p8TacZ69lBMAj8V9fbqX8HfdIwEzbP1CINC0VobSsWcI6EsLo-6TwAdPf6F96DKzAOA1m5og6xQOCNEC4Ft4xFgkELGfhUjUmGnES0WCZY4L+hVfBr42Dvi6MQpc-gEJmU8J4KCL8EBIIsig+0aCnQHAlh7I+XtSq4O4UGda5B5S8EEYBHSNtgLQXSH1aCsEmKaSCNSe+dIYgMnPOPL6x81FcIVoDDQeiopt3MrnO0y9C5r0GiaG2hY7aTXxknCeHCGCSU8WdKIwlcyB2DhxYS3F9gIWyCSPwTFHQ7HQpEpxqjJL0EIsRCAcTNR7BtskyCqSuKDXsJceItptI7EyKEseksonOJKdJMA0gKl-n1q3K4mxkiOl2FlXwaCGnnCaSBegrSvDtO2Mhdhzj67y08u49alMBHDMzq3Ek8RfH5xXkXRpLpRp2OpGxMs2xcRKMKiouui1tkrV2QQ0MRDDktyis4HESzuoGlMZI82MQanjVFh9QphNVFbLPp8wKQNeH8KgJUzEthcw5imWxFZZirn3VthNPGB84W1x+u8pFAMUX+W0dOTF0UYrpF8KCiRqVHQkphREgoQA */
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
