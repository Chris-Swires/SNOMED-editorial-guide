# Medical Vocabularies - J. Cimino

The headings in this section are the requirements identified in Desiderata for Controlled Medical Vocabularies in the Twenty-First Century by J.J. Cimino published in _Methods of Information in Medicine_ 1998:37:394-403. Following each, is an explanation of the way in which SNOMED CT meets the requirement.

## Content, content, and content

SNOMED CT content must be adequate both in scope and quality and must:

  * Cover a wide variety of domains and different organizational needs, clinical disciplines, and medical specialties
  * Meet the needs of an expanding scope, while retaining quality, with a structured systematic approach

## Nonvagueness and nonambiguity

Codes must have one meaning (_nonvagueness_) and no more than one meaning (_nonambiguity_). These characteristics are sometimes called _concept orientation_ , but SNOMED CT deprecates the use of the word _concept_ to describe codes or their meanings.

A code and its meaning may be expressed by more than one term. The terms vary between languages and dialects. In any language or dialect there may be several synonymous terms.

## Code permanence

Once assigned a meaning, a code must not change its meaning. Refinements, due to changes in the state of knowledge, may lead to inactivation of codes from SNOMED CT. An inactivated code may be replaced by a new, more precisely defined code.

## Nonsemantic identifiers

The structure of an identifier (code) should not contain any semantic information about its meaning or relationships.

## Polyhierarchy

SNOMED CT supports multiple hierarchies. A code may have more than one hierarchical parent and various paths to its root code.

## Formal definitions

When possible, the meaning of codes should be formally defined by relationships to other codes.

## Rejection of  _Not elsewhere classified_

Codes with the phrase,  _not elsewhere classified_ , are not allowed in SNOMED CT. However, many classifications contain terms with this phrase. A term with _not elsewhere classified_ includes general variants that are not specifically represented. The meaning of such a code may change over time. As codes with more specific meanings are added, this narrows the codes included in the _not elsewhere classified_ codes. 

## Multiple granularities

Different users will need to express more or less finely granular meanings. SNOMED CT:

  * Must accommodate a wide range of levels of detail
  * Must recognize the relationships between meanings at different levels of granularity
  * Should allow selection of codes that include navigation to other codes with more or less finely grained meaning
  * May need to restrict the levels of granularity used in different applications or in different contexts within the same application

## Multiple consistent views

The view of a code's meaning, with multiple hierarchical parents, should not depend on reaching it by following the hierarchy from a particular parent.

## Beyond terminology codes - represent context

The meaning of a code in a patient record may be altered by its context. Standards for patient record architectures and modeled healthcare communication are changing. The role of SNOMED CT in the context of these structures should be evaluated and appropriate recommendations made.

## Evolve gracefully

Terminologies need to change over time. SNOMED CT should implement these changes in ways that are well-documented and tracked and that provide a path for systems and users.

## Recognize redundancy

The same information can often be coded in different ways. A controlled terminology, that has an adequate scope, cannot exclude this possibility. Instead it should facilitate recognition of equivalent terms.
