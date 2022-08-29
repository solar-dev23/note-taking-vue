describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render home page', () => {
    cy.title().should('include', 'Note-taking application using VueJS');
    cy.dataCy('add-btn').should('be.visible');
    cy.dataCy('note-list').should('be.empty');
  });

  it('should add new note', () => {
    cy.dataCy('add-btn').click();
    cy.dataCy('note-list').should('not.be.empty');
    cy.dataCy('note-item').eq(0).should('contain', 'Note 1');
  });

  it('should update a note', () => {
    cy.dataCy('add-btn').click();
    cy.dataCy('note-content').eq(0).type('Test Note');
    cy.dataCy('note-content').eq(0).should('have.value', 'Test Note');
  });

  it('should remove a note', () => {
    cy.dataCy('add-btn').click();
    cy.dataCy('open-menu').click();
    cy.dataCy('remove-btn').click();
    cy.dataCy('confirm-dialog').should('be.visible');
    cy.dataCy('cancel-btn').click();
    cy.dataCy('note-list').should('not.be.empty');

    cy.dataCy('open-menu').click();
    cy.dataCy('remove-btn').click();
    cy.dataCy('confirm-btn').click();
    cy.dataCy('note-list').should('be.empty');
  });
});
