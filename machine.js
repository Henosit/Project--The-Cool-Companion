import { createMachine } from 'xstate';

const SmartFridge = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUAWYDCB7LAbbAtgA4CGAdgJZZkB0AYgE5hgBeNWAZhwMQYDyAOQEBRDMgD6yPuIAKfAOrCASgG0ADAF1EoIllgUALlTLaQAD0QBGAKwAWGgA4HATjUAmAMxq1H25bWWAGwANCAAnogAtLbWbjSWCTaWAOxOgc7JQQC+WaFomDj4WMTkxvRMrOy0FBC4YNxS0gASAJIA4k2SwgCyMsoAgsgAqkrC6lpIILr6RtSmFggJHvEO1h6BvrYObrbOlh6hEQiRbi40yYFqTh7Orv43Hjl56Nh4hKSU1OXMbF8cFSwKGQoNxRv0MJ1kD0+kpBiMxppTNNDMZ5lZLA4aGpkrcHF5vA5vM4HIcom41PZbG5ktZrM4PMlklTrMkniB8q8iiVPrQACI4Bg0ADGuD0kG4fD6AnEvL4fFUiMmyNmJkmCxp8Qu1kC9y2eLUIXCiA8lnOdipnkuHms-lsj1y7JehXepS+-KwgqwRDAZHFGAAMnwAMrCGVyhUTHR6FFzNWITI0DweU6WWxp3ZXG2kxZXLHOPwZO4+G05B1kLAQOCmDnO4ofVFK6MqtHHSxuOLttwJNZ25PWdzZyKBanxRLDzOMpNsmtvOuu2iMH5IpsN0ALSLJZaMi7DuzOdsJZyDtbOGg67vpBmeNbTp2z7llReVTgcZczVfmKKBGidttUwIxMOQQ2IOMRxIkSSpA46SZIEt4FPe9ZfE+vyqlG76xmuZLWOcjKBLuuwHhiBxGscDLJD+lxOHsHjQVS8Gci6PLfM+1S1GAb4xmhn4IO2P7tkmTL9oyTgpIOOz2A4fhuMOm5uK4MS2AxtYPshAJVDQ-w-ECUCcc2cYIEmW4UqmOqbgkw7idaNDCfuDjET4LgOMpiHzjQ7oMHpH7rky-FdjYvhJm4-ZuMeOFCdY2xQRiyTuC5XJIXyArCqKsCQF5mE8Sc36-gFvbBe4oWkQBNB+Ph0E2PZMVuPFTFlB57Der6EAZdxCxdt++ZBBkjL5k4kXZpuiZqNqPhBb4fWllkQA */
  id: 'TheCoolCompanion',
  initial: 'off',
  type: 'parallel',
  states: {
    Freez: {
      initial: 'off',
      states: {
        off: {
          on: {
            CONNECT_TO_POWER: "on",
          },
        },
        on: {
          initial: 'idle',
          states: {
            idle: {
              on: {
                TOO_HIGH_TEMPERATURE: {
                    target:"freezing"
                }
              },
            },

            freezing: {
              on: {
                REACH_TEMPERATURE: {
                    target: "idle"
                }
              },
            }
          },
        },
      },
    },
    Door: {
      initial: 'closed',
      states: {
        closed: {
          on: {
            OPEN_DOOR: 'opened',
          },
        },
        opened: {
          on: {
            CLOSE_DOOR: 'closed',
          },
        },
      },
    },
  },
});

export default SmartFridge;
