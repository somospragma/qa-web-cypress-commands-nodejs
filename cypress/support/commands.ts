/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import { type, button, select, text } from './command/interactions';

Cypress.Commands.add('loginOrSignup', (Object: any, validation?: boolean) => {
  cy.visit('/login');
  type(Object.Type_previous);
  button(Object.Button_previous);
  Object.Text_previous != undefined ? text(Object.Text_previous) : undefined;
  Object.Button != undefined ? button(Object.Button) : undefined;
  Object.Type != undefined ? type(Object.Type) : undefined;
  Object.Select != undefined ? select(Object.Select) : undefined;
  Object.Button_posterior != undefined ? button(Object.Button_posterior) : undefined;
  validation === false ? text(Object.TextFail_posterior) : text(Object.Text_posterior);

});

Cypress.Commands.add('requestAccount', (Object: any) => {
  cy.request(Object.Body).then((ResponseLogin) => {
    expect(JSON.parse(ResponseLogin.body).responseCode).to.eq(Object.Expected.responseCode);
    expect(JSON.parse(ResponseLogin.body).message).to.eq(Object.Expected.message);
  });
});

Cypress.Commands.add('addCart', (Object: any) => {
  button(Object.Button);
  text(Object.Text);
});

Cypress.Commands.add('checkout', (Object: any) => {
  cy.visit('/view_cart');
  button(Object.Button_previous);
  text(Object.Text_previous)
  type(Object.Type_previous);
  button(Object.Button);
  text(Object.Text);
  type(Object.Type);
  button(Object.Button_posterior);
  text(Object.Text_posterior);
});

Cypress.Commands.add('delete_account', (Object: any) => {
  cy.visit('/delete_account');
  button(Object.Button);
});



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

export { }
declare global {
  namespace Cypress {
    interface Chainable {
      loginOrSignup(Object: any, validation?: boolean): Chainable<void>
      addCart(Object: any): Chainable<void>
      checkout(Object: any): Chainable<void>
      delete_account(Object: any): Chainable<void>
      requestAccount(Object: any): Chainable<void>
    }
  }
}