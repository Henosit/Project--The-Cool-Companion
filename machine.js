import { createMachine } from 'xstate';

const SmartFridge = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUAWYAEBhA9jgNtjgLYAOAhgHYCWOlAdAEpgBmATtVNW+QC45t6AeRYsAxLkqUwAY14Z+GAAo4A7mDYBtAAwBdRKFI5Y1XrUoGQAD0QAmAIy36AZgAcAdm3P3918-sArAG2ADQgAJ6IALQAbDH0Ae4B2n72AJzaMbbuaTEAvnlhaJi4BERkVOZMrBxcPPyCQgyl+Br0LdSUUGLIYGQafACubJjM5DLoEDr6SCBGJmZ0ljYIUYn02rkx9s4ALK7atq5+u2GRCDF7LsHBaYFxfu4FRehEZbgVNHTV7JzcfAJhM08K1BB0umIAGIAQQAqgAZZDTSzzUzmZaIK7uWxpDJuTwBVy5WynCJ2Bz0A4xO7pWyZHKuALPEDFN6ED4UL4MZi-OoAxrAghtcHdACSMkw0JkMkGxEG+D4kGRs1RiwssxWUScROSuUcaV29i87kuZ0Qu1s8XcrnsuxifgCgWt2l2zNZLXKnKqPNq-waQPaILaoogrR6fVIA14w0wyDwGAAEpxUMrDMY0UsNdFds5KfjLvZ3DlEq5dqTzgEyxtcptqTFMoS3a8PRzKt8fX96oCmoGhYIACI1YxmCHizAAWTA+F4Sr0KPTaoxCHS9DSHh8lwJRKy5cxnhcfm0iUCR0NTMKLObIM9be5NU7-IDLTag-Yw863RhCKRc5VC-RWYIM4zjxEEjjUgE-i2AEZpAdo7guOkRYFtk-jOE2JTXq2XI-L6XYCvQkIjGAABebREWApEflCcKIqmcz-pmoArP49D2lS1JHIyBqMrBjJOGk2TaMJLqJCaroXu6WEkF67b3ny-o9hRpHkcRJHUWOGBSjKcoKjOUy-mmCwAcxmL0BaJKGoJxwBAaa7uLBRoWquQkibsYkxBJLyYe8Mm3rhD6KQwylkYIIXUb0-T1DGGBjBMs4zEZGbqqZqxpLmWQ8YWDi7O4zgGo50GuC5nhuR5XmXj57J+ThHYKd2wVqcGoZgOGUVDCMGBxjgibJvRqomdY0SltcxwpPB9i2keoRksugQBGxRYiaJyEVVJvmfN68l+g1hFNQOQ6wCOn60T+iUMcZTFDUBzjaGxdxEu5UEwbNaS2YtpXCe5q0YWyN61dt+EBiFL6HcdYiaZO04JfOl0pddlouNNlYWjZPEveca53YJn0reJv0tjVW28jtBHwsmvCwPQ8KigA4gmyAAMoAPpCJCkJiNGbCUBgdAYPgFOwP1jHw5qOzxNoRq2cJeyFs4tgzectoxAtuLWt49rCb4rgE9Jm1ySTQM9uTUCoJT1N0wzLNCAAcj0ww8yILD84Lwtw0uUQ7Nqmz+IWrj2okMSOfWaQbJumRHktZa6xtskMP2eCCDI+DGJAYhCJGPMJwIbvJR7DjxHcb3Ut4Bz7NijlF0j-vJDk4HuGtV6x-52dJynsBp1YR2KvQ5AsDObAABT2AAlD0TfVfr8eJ-QyepwZ50DVdmq3aHvguhkuxeDLfiOZ4ofAfLuy4mWRfnt5f3YVUrf0Dgmdp1g7eYK3ueLoBnu5OZASeW4tjy-YcQLSwTpMfcy-sG4ZBxIaHWkkJ7-WvjPO+YBpAQDEF3XgPc+4D2HmPdak8470BvkglBr9BosTut-A0-8dg2lSHvLwq5cR2QtL4OIBQLyUBwBAOAlg8HwKukvUW2ZLgJE8t-Buxp0jpVglqQ0CRkjHFcNkI4lpbAx3wf5OqpNYZ53fmeUR7kYgSO8FI5wMjAi7DDjiRkeVsqeBgRfQmU8Ar1UaKIHRb9Upak-pBbE7kt4+FLBjaIcQEhJBSP4DIWQcj5FgVVfhd5DaPiaB4sh0QQIIW-oY4xPhcRmNmnaPMjhKxblxCSdRCSXGkyfEGNgqTl7RGyKHG06RgITSmsE5cVxIkRLQkcN659KqXyJgbPCyTBSgl7ALLo9ShGrD-vYSkk10q3R8B0xW5pEbWmVg6J0ZcKlX1GYFXaz5BAhlaLMpcuVLGa1siBcC-sg6zSCHdPwqRqTFyyLExxesCFaKNhM0Gb4jofkuYBfwmSG6eE8M9WCForQ2jtLsksLoDkjMSWMoKUzyLkHlLwMFqVboLWAtBdIkFinAKOPI6kyy6RGLXIMvhhyMXHIIiDOpf53bvygWxKB9ZfF7HtLBcS9BfB3B8DmN52w0XOP+eMvalFQoKqojMzluivEkniJlO0R5vCCtcI5Dei1qRKLLNsE+Mq-mA3ley+g5ywAEuuvLNeD0DTkugo5ABC0jG42+vjOJwzZXWqxba18bB3yqqSp4p1f9zJ7BSHSWFs0nKhx9ctP1nlLWaODbtW1kJcXTkdSxSaorXVPQpbNRkiy01lR+gGpxVqklYpNmbeAaro0rxXFk8RW8TF5McqXBIRphIZGxFkRkWaAZNt2i282NN6ZM1ZuzItjSfAGJ7ZI-tybIJ3ULPsG0tl9g0MncTTFM7BYWwXdbG2K7VgIXls6zyRivDATyo5HdoqG7HECFlNwJ7vit1vVELeC06SCUCIySRnTfCsSUQmhwbyiz-unoCOeHcIBAecOsMDDhCTJBMdBtcljbrH22AAqFFpkOEMQffDD7a0mrHcmxABNp7npUNJaSuI0SN6nI9ctR7CgA */
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
            }
          },

          after: {
            "1": "#The Cool Companion.Refrigirator.On.Lights.LIGHTS_OFF"
          }
        },

        opened: {
          on: {
            "Close Door": {
              target: 'closed'
              }
          },

          after: {
            "1": "#The Cool Companion.Refrigirator.On.Lights.LIGHTS_ON"
          }
        }
      }
    }
  }
});
