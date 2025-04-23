/// <reference types="cypress" />
import { AddProduct } from '../fixtures/addCart';
import { Register, Login, Delete_account, Delete_account_API, Register_API } from '../fixtures/User_Account';
import { Checkout } from '../fixtures/checkout';
import { runForAllViewports } from '../support/viewportEach';


runForAllViewports((viewport) => {
    describe(`Practice exercise for archetype commands.`, () => {

        beforeEach(() => {
            cy.visit('/');
        });

        it(`Test Case 1: Register User`, () => {
            cy.loginOrSignup(Register);
            cy.requestAccount(Delete_account_API);
        });

        it(`Test Case 2: Login User with correct email and password`, () => {
            cy.requestAccount(Register_API);
            cy.loginOrSignup(Login);
            cy.requestAccount(Delete_account_API);
        });

        it(`Test Case 3: Login User with incorrect email and password`, () => {
            cy.loginOrSignup(Login, false);
        });

        it(`Test Case 14: Place Order: Register while Checkout`, () => {
            cy.addCart(AddProduct);
            cy.loginOrSignup(Register);
            cy.checkout(Checkout);
            cy.delete_account(Delete_account);
        });
    });
});
