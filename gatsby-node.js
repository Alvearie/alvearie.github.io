

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/alvearie-patient`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-alvearie-patient.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/alvearie-match-patient`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-alvearie-match-patient.html`  });

  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/alvearie-organization`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-alvearie-organization.html`  });
  	
}