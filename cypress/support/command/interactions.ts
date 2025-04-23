export function button(Button: any) {
    for (const component in Button) {
        cy.log(`Click on the button: ${component}`);
        cy.get(Button[component].selector, Button[component].OptionsGet).eq(Button[component].index, { log: false }).scrollIntoView().should('exist').click(Button[component].Options);
        cy.wait(100);

    }
}

export function upFile(UpFile: any) {

    for (const component in UpFile) {
        cy.log(`The document is uploaded from: ${component}`);
        cy.get(UpFile[component].selector, UpFile[component].OptionsGet).eq(UpFile[component].index).selectFile(UpFile[component].document, UpFile[component].Options);
    }
}

export function select(Select: any) {

    for (const component in Select) {
        cy.log(`Select: ${component}`);
        cy.get(Select[component].selector, Select[component].OptionsGet).eq(Select[component].index, { log: false }).should('exist', { force: true }).select(Select[component].Option, Select[component].Options);
    }
}

export function text(Text: any) {

    for (const component in Text) {
        cy.log(`The text is validated: ${component}`);
        cy.get(Text[component].selector, Text[component].OptionsGet).eq(Text[component].index, { log: false }).should('exist').contains(component, Text[component].Options);
    }
}

export function image(Image: any) {

    for (const component in Image) {
        cy.log(`The image is validated: ${component}`);
        cy.get(Image[component].selector, Image[component].OptionsGet).eq(Image[component].index, { log: false }).should('exist').and('have.attr', 'src', Image[component].src);
    }
}

export function type(Type: any) {

    for (const component in Type) {
        cy.log(`Enter the text: ${Type[component].input}, en el campo ${component}`);
        cy.get(Type[component].selector, Type[component].OptionsGet).eq(Type[component].index, { log: false }).should('exist').click({ force: true }).type(`${Type[component].SequenceIn}${Type[component].input}${Type[component].SequenceEnd}`, Type[component].Options);
    }
}

export function load(Load: any) {

    cy.log(`Waiting for it to finish loading`);
    cy.get(Load.selector, { log: false, timeout: 10000 }).should('be.visible');
    cy.get(Load.selector, Load.OptionsGet).should('not.exist');
}

export function request(Request: any) {

    for (const component in Request) {
        cy.request(Request[component]).then((response) => {
            cy.wrap(response).as(component);
        });
    }
}