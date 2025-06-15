describe('Pruebas de Login', () => {
  it('Login exitoso', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('.flash.success').should('contain', 'You logged into a secure area!');
  });

  it('Login con usuario incorrecto', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('usuario_incorrecto');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('.flash.error').should('contain', 'Your username is invalid!');
  });

  it('Login con contraseña vacía', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').clear();
    cy.get('button[type="submit"]').click();
    cy.get('.flash.error').should('contain', 'Your password is invalid!');
  });
});
