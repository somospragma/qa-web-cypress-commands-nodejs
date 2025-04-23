
export const Login = {
    User: Cypress.env('USER'),
    Type_previous: {
        'Correo electronico': {
            selector: 'input[data-qa="login-email"]',
            index: 0,
            input: Cypress.env('EMAIL'),
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'Contraseña': {
            selector: 'input[data-qa="login-password"]',
            index: 0,
            input: Cypress.env('PASSWORD'),
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        }
    },
    Button: {
        'Login': {
            selector: 'button[data-qa="login-button"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    },
    Text_posterior: {
        'Logout': {
            selector: 'a[href="/logout"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    },
    TextFail_posterior: {
        'Your email or password is incorrect!': {
            selector: 'p[style="color: red;"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    }
}

export const Register = {
    Type_previous: {
        'Name': {
            selector: 'input[data-qa="signup-name"]',
            index: 0,
            input: Cypress.env('USER'),
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'Email Address': {
            selector: 'input[data-qa="signup-email"]',
            index: 0,
            input: Cypress.env('EMAIL'),
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
    },
    Button_previous: {
        'Signup': {
            selector: 'button[data-qa="signup-button"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    },
    Text_previous: {
        'Enter Account Information': {
            selector: 'h2[class="title text-center"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'Address Information': {
            selector: 'h2[class="title text-center"]',
            index: 1,
            Options: {},
            OptionsGet: {}
        }
    },
    Button: {
        'Mrs': {
            selector: 'input[id="id_gender2"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    },
    Type: {
        'Password': {
            selector: 'input[data-qa="password"]',
            index: 0,
            input: Cypress.env('PASSWORD'),
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'First name': {
            selector: 'input[data-qa="first_name"]',
            index: 0,
            input: 'QA',
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'Last name': {
            selector: 'input[data-qa="last_name"]',
            index: 0,
            input: 'Pragma',
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'Company': {
            selector: 'input[data-qa="company"]',
            index: 0,
            input: 'Pragma',
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'Address': {
            selector: 'input[data-qa="address"]',
            index: 0,
            input: 'Calle 30',
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'Address 2': {
            selector: 'input[data-qa="address2"]',
            index: 0,
            input: 'Carrera 30',
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'State': {
            selector: 'input[data-qa="state"]',
            index: 0,
            input: 'Antioquia',
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'City': {
            selector: 'input[data-qa="city"]',
            index: 0,
            input: 'Medellín',
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'Zipcode': {
            selector: 'input[data-qa="zipcode"]',
            index: 0,
            input: 123456,
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
        'Mobile Number': {
            selector: 'input[data-qa="mobile_number"]',
            index: 0,
            input: 3765987234,
            SequenceIn: '',
            SequenceEnd: '',
            Options: {},
            OptionsGet: {}
        },
    },
    Select: {
        'Country': {
            selector: 'select[data-qa="country"]',
            index: 0,
            Option: 'United States',
            Options: {},
            OptionsGet: {}
        },
        'Day': {
            selector: 'select[data-qa="days"]',
            index: 0,
            Option: 30,
            Options: {},
            OptionsGet: {}
        },
        'Month': {
            selector: 'select[data-qa="months"]',
            index: 0,
            Option: 10,
            Options: {},
            OptionsGet: {}
        },
        'Year': {
            selector: 'select[data-qa="years"]',
            index: 0,
            Option: 33,
            Options: {},
            OptionsGet: {}
        },
    },
    Button_posterior: {
        'Create Account': {
            selector: 'button[data-qa="create-account"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'Continue': {
            selector: 'a[data-qa="continue-button"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    },
    Text_posterior: {
        'Delete Account': {
            selector: 'a[href="/delete_account"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    }
}

export const Register_API = {
    Body: {
        method: 'POST',
        url: `${Cypress.env('URL')}/api/createAccount`,
        form: true,
        body: {
            "title": "Mrs",
            "name": Cypress.env('USER'),
            "email": Cypress.env('EMAIL'),
            "password": Cypress.env('PASSWORD'),
            "birth_date": "30",
            "birth_month": "10",
            "birth_year": "1989",
            "firstname": "QA",
            "lastname": "Pragma",
            "company": "Pragma",
            "address1": "Calle 30",
            "address2": "Carrera 30",
            "country": "United States",
            "state": "Antioquia",
            "city": "Medellín",
            "zipcode": "123456",
            "mobile_number": "3765987234"
        }
    },
    Expected: {
        responseCode: 201,
        message: 'User created!',
    }
}


export const Delete_account_API = {
    Body: {
        method: 'DELETE',
        url: `${Cypress.env('URL')}/api/deleteAccount`,
        form: true,
        body: {
            email: Cypress.env('EMAIL'),
            password: Cypress.env('PASSWORD'),
        }
    },
    Expected: {
        responseCode: 200,
        message: 'Account deleted!',
    }
}

export const Delete_account = {
    Text_previous: {
        'Account Deleted!': {
            selector: 'h2[data-qa="account-deleted"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'Your account has been permanently deleted!': {
            selector: 'p[style="font-size: 20px; font-family: garamond;"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        },
        'You can create new account to take advantage of member privileges to enhance your online shopping experience with us.': {
            selector: 'p[style="font-size: 20px; font-family: garamond;"]',
            index: 1,
            Options: {},
            OptionsGet: {}
        }
    },
    Button: {
        'Continue': {
            selector: 'a[data-qa="continue-button"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    },
    Text: {
        'Signup / Login': {
            selector: 'a[href="/login"]',
            index: 0,
            Options: {},
            OptionsGet: {}
        }
    }
}
