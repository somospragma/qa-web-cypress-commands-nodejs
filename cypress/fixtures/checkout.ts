export const Checkout = {
    Button_previous: {
        'Proceed To Checkout': {
            selector: 'a[class="btn btn-default check_out"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    },
    Text_previous: {
        'Address Details': {
            selector: 'h2[class="heading"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'Review Your Order': {
            selector: 'h2[class="heading"]',
            index: 1,
            Options: {},
            OptionsGet: {}
        },
        'Your delivery address': {
            selector: 'h3[class="page-subheading"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'Your billing address': {
            selector: 'h3[class="page-subheading"]',
            index: 1,
            Options: {},
            OptionsGet: {}
        },
        'Mrs. QA Pragma': {
            selector: 'li[class="address_firstname address_lastname"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'Pragma': {
            selector: 'li[class="address_address1 address_address2"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'Calle 30': {
            selector: 'li[class="address_address1 address_address2"]',
            index: 1,
            Options: {},
            OptionsGet: {}
        },
        'Carrera 30': {
            selector: 'li[class="address_address1 address_address2"]',
            index: 2,
            Options: {},
            OptionsGet: {}
        },
        'Medellín Antioquia': {
            selector: 'li[class="address_city address_state_name address_postcode"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'United States': {
            selector: 'li[class="address_country_name"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        '3765987234': {
            selector: 'li[class="address_phone"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'If you would like to add a comment about your order, please write it in the field below.': {
            selector: 'div[id="ordermsg"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    },
    Text: {
        'Payment': {
            selector: 'h2[class="heading"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'Name on Card': {
            selector: 'label[class="control-label"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'Card Number': {
            selector: 'label[class="control-label"]',
            index: 1,
            Options: {},
            OptionsGet: {}
        },
        'CVC': {
            selector: 'label[class="control-label"]',
            index: 2,
            Options: {},
            OptionsGet: {}
        },
        'Expiration': {
            selector: 'label[class="control-label"]',
            index: 3,
            Options: {},
            OptionsGet: {}
        }
    },
    Text_posterior: {
        'Order Placed!': {
            selector: 'h2[data-qa="order-placed"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'Congratulations! Your order has been confirmed!': {
            selector: 'p[style="font-size: 20px; font-family: garamond;"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    },
    Type_previous: {
        'If you would like to add a comment about your order, please write it in the field below.': {
            selector: 'textarea[class="form-control"]',
            index: 0,
            input: 'Comment made from automation.',
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        }
    },
    Button: {
        'Place Order': {
            selector: 'a[class="btn btn-default check_out"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    },
    Type: {
        'Name on Card': {
            selector: 'input[data-qa="name-on-card"]',
            index: 0,
            input: Cypress.env('USER'),
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'Card Number': {
            selector: 'input[data-qa="card-number"]',
            index: 0,
            input: Math.floor(Math.random() * 9999999999),
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'CVC': {
            selector: 'input[data-qa="cvc"]',
            index: 0,
            input: Math.floor(Math.random() * 999),
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'Expiration': {
            selector: 'input[data-qa="expiry-month"]',
            index: 0,
            input: Math.floor(Math.random() * 99),
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'Year': {
            selector: 'input[data-qa="expiry-year"]',
            index: 0,
            input: Math.floor(Math.random() * 9999),
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        }
    },
    Button_posterior: {
        'Pay and Confirm Order': {
            selector: 'button[data-qa="pay-button"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    }
}