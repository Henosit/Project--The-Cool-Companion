const smartRefrigerator = Machine({
    /** @xstate-layout N4IgpgJg5mDOIC5SwLYEMBOAXASmAZhgJYwZpYD2GAdAMYA2FskAxAPIAKAogHID6AETZscAbQAMAXUSgADkyJYiFAHYyQAD0TiANCACe2gL5G9qTLgLFS5KnUbMILAVwAqXAMKu+HHGwEAql4AyhLSSCDysIrKahFaCLoGxqYg5th4hCRgZJQ0DEysLu5efABiAIIBADKuYepRMarqCUmGiSZm6BlW2bl2FLJgKiwe1WzBXILCYlINCkrN8dp67eKdad2WWTZ51IPDdBQU9EQqUCxlOFxcAFpcOHyT1Z7uAvURjYtxoK2rKV0LJlrDlbDQDiojiczhdqgBJADiAAlXMEnlwXl4uO85p8FrEWitkh1UultiD+uChpDaMdTucWBVqhUcABZdGYt4fOT4pa-IlrDZk4F9MH7anUQhgMAALxho2EL0ez1e2O5kV5P00AoBmyBvV2AwlUtl8vhyNRHNVOPCPOi30JiX+JMBPR2oL2EMlGGlcoZTJZ7JVWJt83tBOWTuJ61JWxFhqph1OUAAFlhYAq2EqrSH1V8I-yo4LY-r3ZTxUmSGmM1cbvdlRjrXnNY62rrhQaPUbK6n04zmWyc1zcXamlq-tGhXHO+WvWh6JgUJns8Hh7aNeG+dqi+3p2WxXOFxgl7W7g8h2qRxux63nTHXeTRZ6JfPFyxzSi0avL+v81uJ8WD7xl2NCyBgFAQAArrQWCsmgKhoDAKDDFgozjJM0wiM2m7jjqLp6m6FJimBEHQbB8GIWAyEqKhAQcAIFTuD4fiBCE2E3pGbb4R2+57CRUEwXBCFIShdApmAtAANYwhw4ECX2vj+EE3gVAILihniOG3pOJaEU+dj8WRQmUdRWBiRJ0nnLJpEwRmimsd41ysmwABqP5hhxhZcfeBGPgm1CGYJFEiTR5lSTJclkRmARwheGmjg6nF3lOpZEXxkVBcJVGiZBRAsDFfBcAAGnCdRXn+uE7txe5pQZGXkVlpnULl1CwCmgyyDC1RELAqEuXCXAAOp8B4AQ4NcPDeB4bCTbwZW-i2SU6UBM7EfVxkhWZLVtR1XU9X1A3DcVHBwtcAjMUpbHlYtXnJbpfkgQF63BdloXbe1sidec3W9Sw-VDXw1weHC3ChNdWlLYBvnAeWgUNSZOVEK1H1fVAP2ocEFRueUWMiKVUxAyDXDsYlhYAMwAEziNQABsAAsFNk0zACcAAcdNkwA7AArM6ZM0wAjNQ4iCzT3OCyL4jMwLKV6f5cMba9W1Iz6tBEEMGbXK4Y38K4bBPEinAnTwCJ8PCwTzR5pPbt5ssPbDz2NYj1Cq+rcDUAARmgjhsCoHiQRgPo0R4qhYChLCroDnhEyTBY23dK28XVNnw5tzUqxJbuwC7mdDAIYBYGgRD0Jrbg63wetR8DoOx-+eE+TxtWgY7CNvUjYe0CmKhELQ85lGgkH0KhWvl5XwSGxwxum+bluaZ58fLdDq17B3Xc933A9D2hExTEIWHg-PAG7ql+k0Kv3e9-Q-eD2ZEA9bIC76NfW8Fd+8XXtbR-VSf-nn+vV+b2VvlWKxVSq10qrbe6MMxR-0vs-ZWkpAE8AoEofA69vhoS4CyPgPA2CuDhGUOEHhGJwhmuAx0TNWbUAZuIAWZNuZ0zZuIOmNNmbOgFsw6hdNuEU05ow8QjMOasxMKkFQEE4DqEbqfK2ccEgAFoBbMwps6ORZNGHUGZtzAWdMBbczUQLDhFM6Z22gXsAojgZF1yqjTIxJjl7di1BVR0ci6asxUazTm1CPEeJsQLHmNNOYU25nYpOiYaR0hhJYiBzoKas2EVA+xYTvS+kiXPT+eEGYUy8czQWFNmb0NZhTRmISm4VkhMmasUTtLtG5uLDRnMlFBI8QLemLCSmnzKdQV8x4qmQ0QKwoWLCPHczyZzAJrMtHtPli3TavTCwKO4SoimNjqE03oTTVmOSxbM3EJzKZj0FYvSap3CyEUU7wDSbIjJrMG41Q6Ycp2bc5nbjkTklRfi6b1O5oEoJSjdmbL2Qk0JT0U6Kyau9Xa319rPK-hzCm+yHagqOc7V2GsYWIBcW44kciPFeM5j4imfjxaBOCUC0pDzW4INRe7L2Ps-YByDlgEONEULoqqmTdmCK1pIseVS3O7tqX50LsXC5CUrlVS0VQ1xOSBZ5IKUU4xZL7kzKVunagsCN43zZZi50nNxDU2Zg0op3NmmtPiYnUpGqAFasuVY15NN3GeNcfilhXM6ZaL8fCpVv8JJrzgYA6gd9YAPzQE-QBbKuLfJplylevqL6aqHunbVrj2E0w0eLE1BjdE-LFtG71j0rXwLVfgJBKCiBoN7tbJxfSEAjPiSYIAA */
    id: 'smartRefrigerator',
    initial: 'closed',
    context: {
      products: [],
      favoriteRecipes: []
    },
    states: {
      closed: {
        on: {
          OPEN_DOOR: 'open',
          DETECT_PRODUCTS: {
            actions: assign({
              products: (context, event) => event.products
            }),
            target: 'productManagement.checkingProducts'
          },
          DETECT_FAULT: 'technicalFault.displayFault'
        }
      },

      open: {
        on: {
          CLOSE_DOOR: 'closed'
        },
        initial: 'cooling',
        states: {
          cooling: {
            on: {
              FREEZER_SELECTED: 'freezing',
              LIGHTS_SELECTED: 'lights',
              ALARM_SELECTED: 'alarm'
            }
          },
          freezing: {
            on: {
              COOLER_SELECTED: 'cooling',
              LIGHTS_SELECTED: 'lights',
              ALARM_SELECTED: 'alarm'
            }
          },
          lights: {
            on: {
              COOLER_SELECTED: 'cooling',
              FREEZER_SELECTED: 'freezing',
              ALARM_SELECTED: 'alarm'
            }
          },
          alarm: {
            on: {
              COOLER_SELECTED: 'cooling',
              FREEZER_SELECTED: 'freezing',
              LIGHTS_SELECTED: 'lights'
            }
          }
        }
      },

      productManagement: {
        on: {
          CLOSE_DOOR: 'closed',
          UPDATE_PRODUCTS: {
            actions: assign({
              products: (context, event) => event.products
            })
          }
        },
        initial: 'checkingProducts',
        states: {
          checkingProducts: {
            on: {
              PRODUCT_ADDED: {
                actions: assign({
                  products: (context, event) => event.products
                })
              },
              PRODUCT_REMOVED: {
                actions: assign({
                  products: (context, event) => event.products
                })
              },
              UI_SELECTED: '#smartRefrigerator.productManagement.ui'
            }
          },
          ui: {
            on: {
              UI_EXIT: 'checkingProducts'
            },
            initial: 'shoppingList',
            states: {
              shoppingList: {
                on: {
                  VIEW_CURRENT_CONTENT: {
                    actions: (context, event) => {
                      const currentProducts = context.products;
                      // display currentProducts on UI
                    }
                  },
                  VIEW_EXPIRED_PRODUCTS: {
                    actions: (context, event) => {
                      const expiredProducts = context.products.filter(product => product.expirationDate < Date.now());
                      // display expiredProducts on UI
                    }
                  },
                  VIEW_RECIPES: 'recipes',
                  SAVE_FAVORITE_RECIPE: {
                    actions: assign({
                      favoriteRecipes: (context, event) => [...context.favoriteRecipes, event.recipe]
                    })
                  }
                }
              },
              recipes: {
                on: {
                  RETURN_TO_SHOPPING_LIST: '#smartRefrigerator.productManagement.ui.shoppingList'
                },
                initial: 'basedOnCurrentContent',
                states: {
                  basedOnCurrentContent: {
                    on: {
                      SELECT_RECIPE: 'recipeDetails'
                    }
                  },
                  recipeDetails: {
                    on: {
                      RETURN_TO_RECIPES: 'basedOnCurrentContent'
                    }
                  }
                }
              },
              technicalFault: {
                on: {
                  RETURN_TO_SHOPPING_LIST: '#smartRefrigerator.productManagement.ui.shoppingList'
                }
              }
            }
          }
        }
      },

      technicalFault: {
           on: {
          CLOSE_DOOR: 'closed'
        },
         initial: 'displayFault',
    states: {
      displayFault: {
        on: {
          UI_SELECTED: 'ui'
        }
      },
      ui: {
        on: {
          UI_EXIT: 'displayFault'
        },
        initial: 'faultNotification',
        states: {
          faultNotification: {
            on: {
              CLEAR_NOTIFICATION: {
                actions: () => {
                  // clear technical fault notification from UI
                }
              }
            }
          }
        }
      }
    }
      }
    }
  })
  