# Grouper Concept

For hierarchies with a concept model, the usefulness of fully-defined groupers is limited to convenience groupings based on particular use cases. They may be added if they provide demonstrable benefit to organizing and navigating the terminology. 

 _Grouper concepts_ provide a definition for subtypes that are always and necessarily true. The grouper concept must be sufficiently defined and clinically useful for the purpose of organizing content for an intensional reference set (e.g.  _disease of colon_ _and all of its descendants_)__ or in Expression Constraint Language (ECL), << [ 128524007 | Disorder of colon (disorder)|](http://snomed.info/id/128524007 "128524007 | Disorder of colon \(disorder\) |") .

Anatomy concepts have separate rules.

## Navigational concepts

 _Grouper concepts_ should not be confused with  _navigational concepts_. Navigational concepts were created to group other concepts without explicit regard for defining attributes (since there were none). Their purpose was to provide top level groupers for subsets and reference sets used in implementations. Because the Reference Set mechanism is now available, there is no longer a need for navigational concepts in the International Release; however, they can be added at the national or lower level. 

In the past, there was an indiscriminate move of concepts in and out of the navigational concept hierarchy based arbitrarily on use cases by those users organizing concepts based on a particular classification that was wanted. The navigational concept hierarchy was useful to group things into a particular domain. The problem is that many of these are domain-specific and cannot be generalized. For example, mosquito-borne diseases will vary depending on the location of the user. It is difficult to classify the complete instance of these as well. Potential children would have to be manually assigned. 

Because this is a primitive hierarchy and subtypes will not auto classify, much work would be required to reorganize hierarchies and maintain the use of navigational concepts. Inactivating concepts may be met with requests to create intermediate primitives. The Content Managers Advisory Group [CMAG] at [Use of navigational concepts](?section=httpsconfluenceihtsdotoolsorgdisplaycmaguseofnavigationalconcepts-is-being-consulted-regarding-current-use-of-navigational-concepts-as--363743006--navigational-concept-navigational-concepthttpsnomedinfoid363743006-363743006--navigational-concept-navigational-concept--is-within-the--370115009--special-concept-special-concepthttpsnomedinfoid370115009-370115009--special-concept-special-concept--subhierarchy-please-see-that-section-of-the-editorial-guide-at-special-conceptspecial-concept#httpsconfluenceihtsdotoolsorgdisplaycmaguseofnavigationalconcepts-is-being-consulted-regarding-current-use-of-navigational-concepts-as--363743006--navigational-concept-navigational-concepthttpsnomedinfoid363743006-363743006--navigational-concept-navigational-concept--is-within-the--370115009--special-concept-special-concepthttpsnomedinfoid370115009-370115009--special-concept-special-concept--subhierarchy-please-see-that-section-of-the-editorial-guide-at-special-conceptspecial-concept). 

## Intermediate Primitive Groupers

 _Intermediate primitive_ groupers add a substantial management burden, thus, are discouraged. They may however be added on a case-by-case basis with approval from the Head of Terminology when, for example:

  *     * The concept model is not robust enough to support the full definition of a subset of terms, e.g. genomics (i.e. genetic diseases for which we cannot state,  _the majority of cases of this disease present with X)_.
    * There are variances in the clinical manifestations.

If an **existing** intermediate primitive concept cannot be sufficiently defined **and** has only one subtype, is not used to model another concept nor demonstrably clinically useful, it should be inactivated.

## Rules for grouper concepts

A grouper concept that is added to SNOMED CT must adhere to the following rules:

  * The concept must not be created with the hierarchical tag, (navigational concept)_._

  * The concept must use the semantic tag for the relevant hierarchy e.g. (finding), (procedure). 

  * The concept must not have stated subtypes. All subtypes must be inferred by the classifier. 

  * The grouper concept will ONLY be added if it can be sufficiently defined.

Where grouper concepts already exist, the following criteria apply:

  * If it can be sufficiently defined, remodel it, and reassign existing stated subtypes to a new proximal primitive parent.
  * Identify primitive concepts that cannot be sufficiently defined for additional review.

If the addition of a grouper concept duplicates a concept in the [ 363743006 | Navigational concept (navigational concept)|](http://snomed.info/id/363743006 "363743006 | Navigational concept \(navigational concept\) |") hierarchy, the navigational concept should be inactivated.
