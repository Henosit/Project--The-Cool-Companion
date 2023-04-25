import { createMachine } from 'xstate';

const SmartFridge = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBUAWYDCB7LAbbAtgA4CGAdgJZZkB0AYgE5hgBeNWAZhwMQYDyAOQEBRDMgD6yPuIAKfAOrCASgG0ADAF1EoIllgUALlTLaQAD0QAmAJwAWGpYDsaxzYCsANjdvLARkcANCAAnoi2jjTWNgDM0bYAHI5x0XbRAL5pQWiYOPhYxOTG9Eys7LQUELhg3FLSABIAkgDidZLCALIyygCCyACqSsLqWkgguvpG1KYWCL62HpHR8T6+8UuOnkGhCG5q1jQeHrbW1v7We7aWHhlZ6Nh4hKSU1MXMbC8cJSwUZFDcg90MK1kB0ukpegMhppTONDMZpmFfAsPGo1PNHFF4lEXFtENFfG5Ir41G5rEtVmoselMiBsvc8gVnrQACI4Bg0ADGuD0kG4fC6AnEzL4fFU0NGsMmJlGM1W8SJCUctiR8TlmxCiHiaksNBS8UO+v8ag8rhutLuuUehRerKw7KwRDAZF5GAAMnwAMrCIUisUjHR6OFTGWIXzWCKq+JY8IokmWaK4hBKtQOaxHVZRDa+JwZGlkLAQOCmOmW-JPeESwNShEIAC0S11qJS-n8jgJfjcidr2YiLmNh1RkcSZpLDzL1tojDeMKrFdAM32HhOKPillXa-Cyy7KRobmchw8yxSS8cjhHFrHjKKU9KnA4M4mc-MiD3B2XlLXlg3ji3GqTC2VY55lsSkojcaJrhpUcGXLF4b3eaUA0fYN50QQ4aDUfFrDcKMrniZVHA8RMv3lZUSVVDEMTDc8ckvWDJy+MoaAqKoHyDRDn1mOYMKwnDV0PAiiL-OIUxw2xvBA3wzg8eMaPpK0mVeW9aE+N4figNjqxDBBNxoLVbAMuJDKjXxE1saJRPjEkLNiVVVjk0srxtNlNKfGZLEJDw5X1DxojcbMowTP8vB1DEjhw6I2zmDEHLoicaFtdkuR5CBXJQzikgObzDj8gK1kTJUFki8MfC8cITjcWKYPixL2EdZ1UsrZCOJmCDfBoECjhcWJCPOSwCoSPTKNKtxyuw3M0iAA */
    id: 'TheCoolCompanion',
    initial: 'off',
    type: 'parallel',
    context: {
      temperature: 25,
      interval: null
    },
    states: {
      Freez: {
        initial: 'off',
        states: {
          off: {
            on: {
              CONNECT_TO_POWER: {
                target: 'on',
                actions: ['setTemperature', 'startInterval']
              }
            }
          },
          on: {
            initial: 'idle',
            states: {
              idle: {
                entry: 'setTemperature',
                on: {
                  TOO_HIGH_TEMPERATURE: {
                    target: 'freezing',
                    cond: 'isBelowThreshold'
                  }
                }
              },
              freezing: {
                on: {
                  REACH_TEMPERATURE: {
                    target: 'idle',
                    actions: ['setTemperature']
                  }
                }
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
              OPEN_DOOR: 'opened'
            }
          },
          opened: {
            on: {
              CLOSE_DOOR: 'closed'
            }
          }
        }
      }
    }
  },
  {
    actions: {
      setTemperature: (context) => {
        if (context.temperature >= -4) {
          context.temperature -= 1;
        } else {
          context.temperature += 1;
        }
      },
      startInterval: (context) => {
        if (context.interval) {
          clearInterval(context.interval);
        }
        context.interval = setInterval(() => {
          context.temperature += 1;
        }, 1000);
      }
    },
    guards: {
      isBelowThreshold: (context) => {
        return context.temperature <= -4;
      }
    },
    on: {
      // Update temperature when it changes
      UPDATE_TEMPERATURE: {
        actions: ['setTemperature']
      }
    }
  }
);

export default SmartFridge;
