import { createMachine } from 'xstate';

const SmartFridge = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUAWYAEBhA9jgNtjgLYAOAhgHYCWOlAdLgdZVBgMoCesALmMfQDyAM2EBiXJUpgAxjww8cGAAo4A7mABOAbQAMAXUShSOWNR61KRkAA9EAZgAc9+o4CMATg8AmNwBZvb0dHAHZnABoQTkQ-N3oPR19HXRC3VIBWD3S-AF8cyLRMJkJcMipLRjx8FjYuXn4hBmKasWR+Ui1yHgBXTUwAJTByGXQIPUMkEBMzCzprOwQAWjd0uNiANn8Q9JD1711QyOiEdfT1+l0fRw8-EI83ez90xzyC9CICIjKaOkrmVg43D4AkETSqLTaZE6PT6GEGw1G2jcE2MpnMlnmiGWq3o3my3ieO2u6XsNyOiBCAVcbj2oXc-j26VeIEKHxKJAoPzB-1qQIaoL+1VYYgAkjJMABBGQybrEbr4LqQcbWabouaTBZ+Dz0dKXEL7PGne7PckIHbeHXXRzpXxBLK5fIs97FL6cirNAF1YGNQUtABiEoAqgAZZDKyaq2ZWDVYs70Ukk9bXA663weU32dZ+ehuUIrYJ+TP2AnrZmsl2lN2-D28+oghgiiD4MCtdrQ3qYZB4DAACWoUFQ4dRMwxMaWbl02cpDwn+Psukn6VNQUc8e21uc3ke9jcbjLzqqrvK1fBnr59foABEwMJNKYLMKxZgALJgfB8MYGFVoqOY8fJHNkyzPFrl2ewQlNJ4p3sHdwJJWcvH3IpD0rY9uSFWtvQFa9b3vf0g1DIcph-UdQAWexdUAoIdyTPw-FOPxIOyegQhgh5th3XRMg8JC2SPLkrzwTR6BkfBTEgMRBA6SgMEvISiMjUjbCxLc4hCScgknXZdAeU0J1OFj3ECGlHELdYsl4isOTQwScGEnBpIkrAxNgTA5LshSSPVMiVOLVxUmtdSkxMp49LxFxYiCPxdHWR4zmcPJHUoHAIDgaxyxQ6yuW-EdvOUpYtVXcygnMijTkndMoixfwLVg6LbhSZwEsdDLPlQgSa0BOscrVaMfIKyjiscUqzl1LVTUWZj3EeSdLjSRI0iZFqDzarL3VPTD+VEHrfzHRYnHSHVMgXA4QnUjwwgzC0kyNU4CW8Vj7kszLvnWnkuqwvriNyr6FkWaLrquEbyvGqqEH2XR-OeUkgh2Pxrm8Z7Vtek93q9fl0JqHalL+ijsyG4Gxsq456LiCcdIJSd1lY3QtyR9kUcxs86x9Rtm2xvKFlTC4J1uGDsgONJII8SGUnhzNdRgh6HTeZDkarJnNovHC714LGIy836KWzTJ1j1nZ-GyNJ7CY6D5wSeHvFOXUQnp-i3owj6MfoP1yHlHgOa1hAaNcCmdNM5wdhNsHMwtEXdn2VI8RF0tlrlhmFdszRPb-f6qQXLxnmp0rhqXMGLtXII3Ae2K2PuWPZb49qKnc4TRPEiAU720lswzrJht2DwnFOPSaRcFZTp8K2wjou3q9+Wv6AcsBpEbjWftTgkcyLEXNzojwe7B3dYpzXVTJ0sJwJuRKciAA */
  id: "The Cool Companion",
  initial: 'off',
  type: 'parallel',
  context: {
    temperature: 25,
  },
  states: {
    "Cooling System": {
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
          initial: "Cooling",
          states: {
            Cooling: {
              on: {
                "Temperature Reached": [{
                  target: "Idle",
                  cond: "temp equals target temp"
                }, {
                  target: "Cooling",
                  internal: true
                }],
                "Ice Accumulated": "Defrosting",
                "FAULT": "Fault"
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
