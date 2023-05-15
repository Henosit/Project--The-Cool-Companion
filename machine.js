import { createMachine } from 'xstate';

const SmartFridge = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUAWYAEBhA9jgNtjgLYAOAhgHYCWOlAdAEpgBmATtVNW+QC45t6AeRYsAxLkqUwAY14Z+GAAo4A7mDYBtAAwBdRKFI5Y1XrUoGQAD0QAmAIy36AZgAcAdm3P3918-sArAG2ADQgAJ6IALQAbDH0Ae4B2n72AJzaMbbuaTEAvnlhaJi4BERkVOZMrBxcPPyCQgyl+Br0LdSUUGLIYGQafACubJjM5DLoEDr6SCBGJmZ0ljYIUYn02rkx9s4ALK7atq5+u2GRCDF7LsHBaYFxfu4FRehEZbgVNHTV7JzcfAJhM08K1BB0umIAGIAQQAqgAZZDTSzzUzmZaIK7uWxpDJuTwBVy5WynCJ2Bz0A4xO7pWyZHKuALPEDFN6ED4UL4MZi-OoAxrAghtcHdACSMkw0JkMkGxEG+D4kGRs1RiwssxWUScROSuUcaV29i87kuZ0Qu1s8XcrnsuxifgCgWt2l2zNZLXKnKqPNq-waQPaILaoogrR6fVIA14w0wyDwGAAEpxUMrDMY0UsNdFds5KfjLvZ3DlEq5dqTzgEyxtcptqTFMoS3a8PRzKt8fX96oCmoGhYIACI1YxmCHizAAWTA+F4Sr0KPTaoxCHS9DSHh8lwJRKy5cxnhcfm0iUCR0NTMKLObIM9be5NU7-IDLTag-Yw863RhCKRc5VC-RWYIM4zjxEEjjUgE-i2AEZpAdo7guOkRYFtk-jOE2JTXq2XI-L6XYCvQkIjGAABebREWApEflCcKIqmcz-pmoArP49D2lS1JHIyBqMrBjJOGk2TaMJLqJCaroXu6WEkF67b3ny-o9hRpHkcRJHUWOGBSjKcoKjOUy-mmCwAcxmL0BaJKGoJxwBAaa7uLBRoWquQkibsYkxBJLyYe8Mm3rhD6KQwylkYIIXUb0-T1DGGBjBMs4zEZGbqqZqxpLmWQ8YWDi7O4zgGo50GuC5nhuR5XmXj57J+ThHYKd2wVqcGoZgOGUVDCMGBxjgibJvRqomdY0SltcxwpPB9i2keoRksugQBGxRYiaJyEVVJvmfN68l+g1hFNQOQ6wCOn60T+iUMcZTFDUBzjaGxdxEu5UEwbNaS2YtpXCe5q0YWyN61dt+EBiFL6HcdYiaZO04JfOl0pddlouNNlYWjZPEveca53YJn0reJv0tjVW28jtBHwsmvCwPQ8KigA4gmyAAMoAPpCJCkJiNGbCUBgdAYPgFOwP1jHw5qOzxNoRq2cJeyFs4tgzectoxAtuLWt49rCb4rgE9Jm1ySTQM9uTUCoJT1N0wzLNCAAcj0ww8yILD84Lwtw0uUQ7Nqmz+IWrj2okMSOfWaQbJumRHktZa6xtsl3obj49ozOCDJQEBaQqbDEPQjNCLCNv9qzdtWEdir0OQLAzmwAAUyTaAAlD0V6x-5dWkwGyep+n0KZ9nuf54Xttu8lS4BDECGHFB9ZZBrziOfs9hhxZwTUpsSQx9V+sMP2eCCDI+DGJAYhCJGPM7wIw+LoBWr2PEdxvdS3gHPs2KOffSP+8kOTge4a3N5vcd6Dnz3gfWAR8S68DLhXKu1d7CN3WgA-ywD6D70PgZc6A0rorFyk4NwLp9gR08tSWCdI1wbENLlNIPhHSXD-lVf6VRkE4FPkfLAoDMDAMvoNMWuRzJjxzK4Ww8tb6eUVnYF0od9jj12BkHEhodaSX-gw74TCWEQDEBAqBlcNCwPgUo7CjDd70GYWAaQ6DYYj0ArdBI1IcwOB2DaVIjlPC5lxLiGRFpfBxA3so7eRiTFmI0aXGc5dtE1zrno+hBiVH+LUVwrBiBx7FWtAIvwjJDiv1mukd6v8ixP0lu5BRF5KA4AgHASwCDfEWKvqlKIdpcz8LHr-Y06R0qwS1IaBIwE7HuUCHaE0Pjonxzwvyap3DsyBBse5aRLTcRz1mp7SsGxKy3UyOBXK6FFFRKJgbEZilRBjISasHEoFvAkkrBNUsGNohxASEkFI-gMhZByPkLZf0hkBXqgKQ5otoggQQo0mZ3hWnzPOHaSk+wx6WlsiaI0KtBk7OGYFXaz42A-I9tkUONp0jAQmlNa5y4rjyyLAcFIfsXQIq3p89uPZUW9gFl0dF18hGL2xelW6Ph8ViIQBaK0No7QOidM-SlgC25G0FKCegIZWhMtSrlXYbEDi2RAuBf2QdZpBDumk-w1IH5ZFed5d5iLqXivpaDN8R0Pyyuuv4AFuT4JeEcAS3l9BrTK0FSWClbzCZUrFYnCV5FyDyl4NaliR4XDy0dG9Z6JCjgJDHjSQS9I1znkNT60VgN-V7UoqFUN0Q5FsTkfWSCeUBWwXEvQJCfgVabAtI6EVrdM1BWzSpMKakrV-ndsy8FmU7RHm8Hse0jkJGLWpIIss2x3ENoBgnZtINBDSrAHmoCOJK0PQNJBJ1jlb4LXHrjb6+NvV6wzbO3a86gFgw7UlGpNqhHmT2CkOkMaskjr3ctA9nlp3Ez2We-ahEg3TmXb7NdvgN3PvOIyReb6yo-SPS3GdP6yaC2XVER5Uymm7FmW0rJT8EheO2HaAV9ov27ORUh025sab0yZqzdmKHsiL0Bc04FczHKQTuoWfYNpbILzcCRpFXyAwmzNlTKjVsi4oYQvLeWuR+leGAnlNj1jOPHECFlPjcHEEIbIx3FOacM7kCzsuzDoc1NOXqeNNIjl8oNPSTI-tJpEj8ZNVmzu+me6Gb7nnAutHITGfWGZ-BlxLNsfci4ceDGjR3HgnQo1vqm27Tc93XuOdvODxtsuuICFbHQXtHSRk7lQsLX+ZFzYRpf7OeAShzDC1SEOEJMkYFBLfCsUEW9UDwR-kKLTcepBRjUFgIgCh5w6w6uBHSU1t+I1boyO2LfXJFpKuxNMZAaru7b42hVelQ0lopsKpm3qeb8rbAFAKEAA */
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
                LIGHTS_OFF: {
                  on: {
                    "turn on lights": "LIGHTS_ON"
                  }
                },

                LIGHTS_ON: {
                  on: {
                    "Turn Off lights": "LIGHTS_OFF"
                  }
                }
              },

              initial: "LIGHTS_OFF"
            },

            "Sound Alarm": {
              states: {
                SOUND_OFF: {},

                SOUND_ON: {
                  after: {
                    "500": "SOUND_OFF"
                  }
                }
              },

              initial: "SOUND_OFF"
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
            "Open Door": {
              target: 'opened'
            },
          },

          after: {
            "1": [
              { type: "The Cool Companion.Refrigirator.On.Lights.LIGHTS_OFF" },
              { type: "The Cool Companion.Refrigirator.On.Sound Alarm.SOUND_OFF" },
            ]
          }
        },

        opened: {
          on: {
            "Close Door": {
              target: 'closed'
              }
          },

          after: {
            "1": "#The Cool Companion.Refrigirator.On.Lights.LIGHTS_ON",
            "500": "#The Cool Companion.Refrigirator.On.Sound Alarm.SOUND_ON"
          }
        }
      }
    }
  }
});
