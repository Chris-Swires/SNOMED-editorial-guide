# Guidelines for Substance Hierarchy Grouper Concepts

## Substance hierarchy grouper concepts

In the SNOMED CT substance hierarchy, there are a large number of grouper concepts. Currently, groupers within the substances can be considered to be structural groupers, disposition groupers, or role based.

The intent is to build the SNOMED CT substance hierarchy along structural or disposition groupers and use a |Has disposition (attribute)| relationship to define grouper concepts in the substance hierarchy. Grouper concepts that do not reference structural or disposition properties of a substance should not be included within the substance hierarchy and existing role concepts are considered for relocation outside of the substance hierarchy.

### Structure based Groupers

Groupers that organize substances by their chemical structure are used as the main hierarchy for substances. Where substances are heterogeneous and do not have a single identifiable chemical structure, such as those of biological origin, it may be more appropriate to organize them by source.

### Dispositions Groupers 

In the context of substances, a disposition is “a behavior that a substance will exhibit or participate in, given the appropriate context.” This context-based definition of disposition would allow us to assign |Has disposition (attribute)| values that are necessarily true, even though the substance does not exhibit the disposition in all contexts.

### Role based Groupers

Role based groupers are associated with a particular purpose or outcome. Roles are a function of the way the substance is formulated or presented and so may not be applicable to all products containing that substance, which may lead to incorrect classification of concepts using role groupers as attribute values. At this time, the existing Substance role groupers will remain in situ with no change. However, additional concepts of this type will not be created, and requests for new instances will be rejected.

Known issues with use of Substance role groupers, including potential incorrect classification, will remain and should be considered by stakeholders at their discretion.

  * [Restructure of the top level substances hierarchy](?section=restructure-of-the-top-level-substances-hierarchy#restructure-of-the-top-level-substances-hierarchy)
  * [Substance Groupers Based on Structure](?section=substance-groupers-based-on-structure#substance-groupers-based-on-structure)
  * [Substance Groupers Based on Disposition](?section=substance-groupers-based-on-disposition#substance-groupers-based-on-disposition)
  * [Substance Groupers Based on Both Structure and Disposition](?section=substance-groupers-based-on-both-structure-and-disposition#substance-groupers-based-on-both-structure-and-disposition)
  * [Concepts Representing a Substance or its Modifications](?section=concepts-representing-a-substance-or-its-modifications#concepts-representing-a-substance-or-its-modifications)

