export function runForAllViewports(callback) {
    const viewports = Cypress.env('viewports') || [];
    viewports.forEach((vp) => {
        describe(`Viewport: ${vp.name} (${vp.width}x${vp.height})`, () => {
            // Se configura el viewport antes de cada test dentro del bloque
            beforeEach(() => {
                cy.viewport(vp.width, vp.height);
            });
            // Se ejecuta el callback pasando el viewport actual
            callback(vp);
        });
    });
}