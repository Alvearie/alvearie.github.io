

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
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/alvearie-address`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-alvearie-address.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/alvearie-communication-contact-point`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-alvearie-communication-contact-point.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/alvearie-contact-point`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-alvearie-contact-point.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/alvearie-identifier`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-alvearie-identifier.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/process-meta`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-process-meta.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/reference-with-code-and-period`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-reference-with-code-and-period.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/reference-with-period`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-reference-with-period.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/age-group-code`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-age-group-code.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/coverage-snapshot-age-in-months`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-coverage-snapshot-age-in-months.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/coverage-snapshot-age-in-years`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-coverage-snapshot-age-in-years.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/age-rollup-group-code`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-age-rollup-group-code.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/attributed-provider-with-period`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-attributed-provider-with-period.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-care-gap`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-care-gap.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-contact`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-contact.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-language`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-language.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-measure`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-measure.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-mode`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-mode.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-on-behalf-of`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-on-behalf-of.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-opt-out`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-opt-out.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/outcome`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-outcome.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-payload-data`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-payload-data.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-priority-sequence`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-priority-sequence.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-product`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-product.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-reengagement`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-reengagement.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-retry-limt`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-retry-limt.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/sent-time`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-sent-time.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-template`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-template.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/communication-vendor`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-communication-vendor.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/conversation-type`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-conversation-type.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/county-code`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-county-code.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/documented-sex`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-documented-sex.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/documented-source`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-documented-source.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/documented-system`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-documented-system.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/effective-period`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-effective-period.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/encrypted-state`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-encrypted-state.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/family-id`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-family-id.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/identified-pronouns`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-identified-pronouns.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/ingestion-batch-id`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-ingestion-batch-id.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/language-rank`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-language-rank.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/legally-documented-sex`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-legally-documented-sex.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/match-compared-to`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-match-compared-to.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/match-confidence-level`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-match-confidence-level.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/match-confidence-score`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-match-confidence-score.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/match-criteria`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-match-criteria.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/match-detail`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-match-detail.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/match-method`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-match-method.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/match-period`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-match-period.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/match-source-reference`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-match-source-reference.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/process-client-id`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-process-client-id.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/process-name`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-process-name.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/process-organization`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-process-organization.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/process-record-id`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-process-record-id.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/process-timestamp`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-process-timestamp.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/process-type`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-process-type.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/process-version`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-process-version.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/reengagement-display`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-reengagement-display.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/reengagement-value`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-reengagement-value.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/reference-code`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-reference-code.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/reference-period`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-reference-period.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/region-code`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-region-code.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/see-also`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-see-also.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/sent-to-recipient`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-sent-to-recipient.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/sent-to-vendor`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-sent-to-vendor.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/sex-assigned-at-birth`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-sex-assigned-at-birth.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/sexual-orientation`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-sexual-orientation.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/source-data-model-version`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-source-data-model-version.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/source-event-timestamp`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-source-event-timestamp.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/source-event-trigger`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-source-event-trigger.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/source-file-id`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-source-file-id.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/source-record-id`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-source-record-id.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/source-record-type`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-source-record-type.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/split-method`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-split-method.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/stated-reason`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-stated-reason.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/status-code`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-status-code.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/StructureDefinition/tenant-id`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/StructureDefinition-tenant-id.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/eng-communication-mode`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-eng-communication-mode.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/eng-product`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-eng-product.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/eng-conversation-type`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-eng-conversation-type.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/gender-identity`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-gender-identity.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/identifier-type`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-identifier-type.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/legal-document-source`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-legal-document-source.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/legal-document-system`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-legal-document-system.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/match-confidence-level`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-match-confidence-level.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/match-method`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-match-method.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/opt-out-reason`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-opt-out-reason.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/patient-importance`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-patient-importance.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/patient-status`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-patient-status.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/sex-assigned-at-birth`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-sex-assigned-at-birth.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/sexual-orientation`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-sexual-orientation.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/source-classification-values`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-source-classification-values.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/ValueSet/split-method`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/ValueSet-split-method.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/eng-communication-mode`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-eng-communication-mode.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/eng-product`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-eng-product.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/eng-conversation-type`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-eng-conversation-type.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/gender-identity`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-gender-identity.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/identifier-type`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-identifier-type.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/legal-document-source`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-legal-document-source.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/legal-document-system`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-legal-document-system.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/match-confidence-level`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-match-confidence-level.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/match-method`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-match-method.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/opt-out-reason`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-opt-out-reason.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/patient-importance`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-patient-importance.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/patient-status`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-patient-status.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/process-meta-primary-or-secondary`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-process-meta-primary-or-secondary.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/sex-assigned-at-birth`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-sex-assigned-at-birth.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/sexual-orientation`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-sexual-orientation.html`  });
  	
  createRedirect({ 
  	fromPath: `/fhir/CodeSystem/split-method`,   
  	toPath:   `/alvearie-fhir-ig/0.1.0/CodeSystem-split-method.html`  });
  	
}