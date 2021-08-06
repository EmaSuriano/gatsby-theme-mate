// Define at the top of the spec file or just import it
function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`,
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    }),
  );

  cy.task('table', violationData);
}

describe('Accessibility checks', () => {
  it('Main Page', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog);
  });

  it('404', () => {
    cy.visit('/404');
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog);
  });
});
