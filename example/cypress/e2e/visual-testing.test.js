describe('Visual Testing', () => {
  const SCREENS = [375, 768, 1280];

  it('Main Page', () => {
    cy.visit('/');

    cy.get('#home').scrollIntoView();
    cy.get('#about').scrollIntoView();
    cy.get('#projects').scrollIntoView();
    cy.get('#writing').scrollIntoView();
    cy.scrollTo('bottom');

    cy.wait(4000);
    cy.percySnapshot('Main Page Responsive', {
      widths: SCREENS,
    });
  });

  it('404 Page', () => {
    cy.visit('/404');
    cy.wait(1000);
    cy.percySnapshot('404 Page Responsive', { widths: SCREENS });
  });
});
