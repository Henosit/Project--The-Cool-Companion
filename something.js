const smartRefrigerator = Machine({
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
  