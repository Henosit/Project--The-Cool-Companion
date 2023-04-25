import { createMachine } from 'xstate';

const SmartFridge = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUAWYDCB7LAbbAtgA4CGAdgJZZkB0AYgE5hgBeNWAZhwMQYDyAOQEBRDMgD6yPuIAKfAOrCASgG0ADAF1EoIllgUALlTLaQAD0QAmAMw1r96wBYAjAHYAnNYCsADkfu1VwAaEABPRABaF2caADZ41zVnS0t-NUsvVwBfLJC0TBx8LGJyY3omVnZaCghcMG4AZWQAQSUJOiVhYQAtAEkBAHF1LSQQXX0jalMLBAjnNTUaZ0cfQIDXNy9vRxDw2edYxxpHS1cvS3j3eZ8vLxy89Gw8QlJKanLmNneOCpYKMig3E6zQwAAlJMIALIyZTNZAAVU6w1M40MxmmiB8sRoax8rg2akct3csXcu0iByOJzOF1J11u9xA+SeRRKb1ojE+VRosAMWCInNY-0BUmkABkFBDobCEUjNCi9GipqMZtY1O47LFUp5bmpzucdmEKYdjqdzpd6XdckzHoUXqV3gARHAMGgAY1wekg3D4MIE4kdfD4qnlo1RkxMKopMUJmVWnlO1h8zh8lnJCGcvlN82cyxclmc7kc1kZzLtxVeZWdWFd-LAZG9GAlDWEAaDIZGOkVEYx+yOPh87nONNOyVchr2NiOrligSx7mTAW8OWtZCwEDgpjLzwrDsjXYm6Kjs1SR2Wqw8gU23li6Yivmx8ViiS8RJJ82y1u3rMr70FLAVQ9lVAGY5hJJYVjWK8zhvO9-A1A5nySJw50JUtbR3Nkyn-dguEApV93MSJwIWUisTxeMhzg3MlgSeYMksPUk1idCCkw38OV+Kp8J7Y85hWCCL3Wa8vFvI1ZnsLxjnOaxnzcWciRLL8MJ-PcPkqd4ajqHijxAyIvAQvwAlSaxLCLRxCTvVJXBoIcbAMnwk0cN9PweNjVPZdSvloH5PmFHTgKIjNUhxPVx3Mp8ZLvPwaEHIsL1k9wF1k1iWXtTycPeXl+X-fyw27XSgucUy7D8awrjcFwLLEvYIms2yZIcpzHFnJS3LS3dPOrBgAsI0DC2xUikmiBZnzOdNElsgsFhcNRZMY4rUvLLCnRdd1PVgSBet7fifFChZllzUb8S8dMDik8LPCxObYmsVxUyW9i1O69giHrLb8qAvqrGSY53A2ONkkzE5rDO2ILvg5ibruzwVyyIA */
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
                START_FREEZING: "freezing",
              },
            },
            freezing: {
              on: {
                REACH_TEMPERATURE: "stopFreezing",
              },
            },
            stopFreezing: {
              on: {
                TOO_LOW_TEMPERATURE: "freezing",
              },
            },
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
