import { createMachine } from 'xstate';
const Smart_Fridge = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBUAWYAEBhA9jgNtjgLYAOAhgHYCWOlAdAPIBizAxAMZ2VgcAuGPjgykcAdzAAnANoAGALqJQo2NT61KSkAA9EANnqyjsgMwAmWQBYAjNcuWAnJYAcAGhABPRGduGzAdn8Ha39HAFYwkwcAX2j3NExcAiIyKg0mADl6ADNJMAAvfLYoHAEhQTAyOUUkEBU1DS1dBBN-M0Mjaz1LPTMw-2cTPX93LwQzB396MICg-u7bWWtY+PQiZNxUmjpM+lghUgxcgqKhYXxxKQwcbIqqhS169TomxCHLejMhs0t-MIdnNZnM49KM3npZNMImFHNYIg49HoTCZYnEQJQcBA4FoEutCJsKNtNLUno1as0ALRdML0ZHIuzWBzmMwTMxghDWFmfQIDSz-VqtUIrEC4pL4kiE9IsZiPHCqZ7E0CU2xTOkmBlMlms9kWBz0HkDSaWFl-ZzC0V4cVbKUZWXyslK7xGeiIvSAwbBGxhEE62R6nnOIwOGa-JFmtEWjYStI7RhZY6FO0NF7k7wuF2I91RBne0GebwI7mBJl-N3mc1rMUpSWxrL7HCHBP5JMK14ISIGYEOIxhWw+ZEOHWF2ZBcwRJZ9VHRIA */
    id: 'The Cool Companion',
    initial: "OFF",
    
    states: {
        OFF: {
            on: {
                "connect to power": "ON"
            }
        },

        ON: {
            states: {
                frezz: {
                    on: {
                        "got to temp": "stop frezz"
                    }
                },

                "stop frezz": {
                    on: {
                        "too lower of temp": "frezz"
                    }
                }
            },

            initial: "frezz"
        }


    }
});