# GDPR-readiness-checklist-usecase

The Data Protection Commissioner of Ireland (DPC Ireland) has put forth 
a GDPR readiness checklist (GDPR-RC) [1] that consists of a spreadsheet meant
to be filled to assess and help in GDPR readiness. This research aims to
demonstrate how this information can be (semi-)automatically filled based on
querying a compliance graph containing the required information. The research
is primarily focused on provenance information (metadata), and uses the GDPR-RC
as a demonstrative use-case of compliance-graph querying. Metadata is stored as
RDF/OWL using the previously published GDPRov [2] and GDPRtEXT [3] vocabularies.
Querying is done using SPARQL. The development environment for this work is
primarily Protege, with the webapp using flask+rdflib.

[1] http://gdprandyou.ie/

[2] http://openscience.adaptcentre.ie/projects/CDMM/GDPRov/

[3] http://openscience.adaptcentre.ie/projects/GDPRtEXT/
