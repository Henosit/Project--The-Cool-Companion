import { createMachine } from 'xstate';

const SmartFridge = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUAWYAEBhA9jgNtjgLYAOAhgHYCWOlAdAEpgBmATtVNW+QC45t6AeRYsAxLkqUwAY14Z+GAAo4A7mDYBtAAwBdRKFI5Y1XrUoGQAD0QAmAIy36AZgAcAdm3P3918-sArAG2ADQgAJ6IALQAbDH0Ae4B2n72AJzaMbbuaTEAvnlhaJi4BERkVOZMrBxcPPyCQgyl+Br0LdSUUGLIYGQafACubJjM5DLoEDr6SCBGJmZ0ljYIUYn02rkx9s4ALK7atq5+u2GRCDF7LsHBaYFxfu4FRehEZbgVNHTV7JzcfAJhM08K1BB0umIAGIAQQAqgAZZDTSzzUzmZaIK7uWxpDJuTwBVy5WynCJ2Bz0A4xO7pWyZHKuALPEDFN6ED4UL4MZi-OoAxrAghtcHdACSMkw0JkMkGxEG+D4kGRs1RiwssxWUScROSuUcaV29i87kuZ0Qu1s8XcrnsuxifgCgWt2l2zNZLXKnKqPNq-waQPaILaoogrR6fVIA14w0wyDwGAAEpxUMrDMY0UsNdFds5KfjLvZ3DlEq5dqTzgEyxtcptqTFMoS3a8PRzKt8fX96oCmoGhYIACI1YxmCHizAAWTA+F4Sr0KPTaoxCHS9DSHh8lwJRKy5cxnhcfm0iUCR0NTMKLObIM9be5NU7-IDLTag-Yw863RhCKRc5VC-RWYIM4zjxEEjjUgE-i2AEZpAdo7guOkRYFtk-jOE2JTXq2XI-L6XYCvQkIjGAABebREWApEflCcKIqmcz-pmoArP49D2lS1JHIyBqMrBjJOGk2TaMJLqJCaroXu6WEkF67b3ny-o9hRpHkcRJHUWOGBSjKcoKjOUy-mmCwAcxmL0BaJKGoJxwBAaa7uLBRoWquQkibsYkxBJLyYe8Mm3rhD6KQwylkYIIXUb0-T1DGGBjBMs4zEZGbqqZqxpLmWQ8YWDi7O4zgGo50GuC5nhuR5XmXj57J+ThHYKd2wVqcGoZgOGUVDCMGBxjgibJvRqomdY0SltcxwpPB9i2keoRksugQBGxRYiaJyEVVJvmfN68l+g1hFNQOQ6wCOn60T+iUMcZTFDUBzjaGxdxEu5UEwbNaS2YtpXCe5q0YWyN61dt+EBiFL6HcdYiaZO04JfOl0pddlouNNlYWjZPEveca53YJn0reJv0tjVVT9ngggyPgxiQGIQiRpQGAkwI-WMfDmp0tjiRBJ40HAZsu4IHSrGJG9Pi+MJri2AT0mbd8DOCDgtNU1gFOwJgstM3DS5apN9CWmuBwmik-i2o5RJpGxhybJBInAZLG2yXevI7QR8LJrwsDCJCkI9MMdNNOryWa44xUOJctiWn41JvY5drFWW7kupkuzpeltvVdLDt4Y+PYu1AqBu8IABy3tsL7oj+4ugFRI4C05vxpYxJBDduI5tl3TmmyOJa8EWhJF6UDgEBwJY61p-bsMB5Xcf0EkOZ0oepaHHzWqGgkyR+DajLuel6GSVedv+XVTvjxXqVRPluwJCSlyJEnyQ3LBVeVhsmX1uxLogTv3l-dhW2O0DIgsGPoNVmuQEjeBJJWCapYMbRDiAkJIht0iZGyLkVO-1f6ZyCkAq6mo9igSvs4G+b1kawTtHmRw3h9hELSGgn+ck-5Z0FKCbBLNogoMpJNbeE0powOXFcfwGRsTZCOPlF0tCib0MwbtZ8YIQQfhYZrWwrEbTpB5iLXY01SGI2tLae0hCnQHDWnvUeB9AaMN7KCegIZWgKMArlC+9ojzpW2OHOIsEgh3XXv4SOAQ4iWnEenAK9UCIyPoK+Ng74ui2NSv4BCN9PCeGeloq0NoY76JLGI3eVV0GSMCtIoMYVyDyl4NE66t0FrAWgukSC1dYJh2KkEaknC6QxAZOeL+hNAmH3-o1SioVSkgIcTiO0R5vB4NcLBcS9BfB3DDjmZwbMnhZO-hIjOeSCIgzCmpeRf4NaVyvmxYZ9ZIJ5Rjo5F0ZtWnUnFmWbYuIjHZLoWs4JwN9pWJagMzEOJpkPQNDU6Cjl7ANw+stb6+NlmdPtkEp2ry+mgzfEdHZSUT5lKUeZPYKQBa1Nmk5S5S0yo-QhVLKF3TzGbMIkU6cnygLa3SDMp62LziMnsCCgl4KOnEv8rLalZ9QEzwWYbFIGiSQm0cNM20t1-ApEmikAJULZb0HJpTCAPK9jFX5XPW6C8RU4prKuDcCzBIJ3ynKrlpN6DyzANIFVuyJ6n28NMu5vhbJriNNoewjk9VpANTiOkGiTVEv3gDBhQV6A5zzvAW1KKQENIIUQu+AKcVuBZW9fY7k6Q7Ggu0yqKyulmNDeG-OQhPY8ugndYIdpCHuFviQnFkEL7pWEjxPKwFCGmuDVI52rt3ZCALjyhCCzDWeVaV4YCeUW63WmdW44gQspuAKAUIAA */
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
            },

            Lights: {
              states: {
                OFF: {
                  on: {
                    "Turn On": "ON"
                  }
                },

                ON: {
                  on: {
                    "Turn Off": "OFF"
                  }
                }
              },

              initial: "OFF"
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
