# Authoring

## Modeling philosophy of  SNOMED CT

SNOMED CT authors use a zero-based _, proximal primitive_ approach when modeling or editing logical definitions of concepts, i.e. a concept is newly defined,__ as opposed to inheriting the definition from the parent and then refining it. This is accomplished by assigning the immediate proximal primitive parent and attribute relationships based on their relevance to the defining characteristics of the concept, again, instead of relying on inheritance and refinement of relevant attributes from immediate, sufficiently defined supertypes. 

The steps are as follows: 

  1. The author states the proximal primitive supertype/s.
  2. The author states all of the defining  _attribute-value pairs_ required to express the meaning of the concept.
     1. An attribute-value pair is explicitly stated, even if it is already present on a supertype concept.
     2. The attribute-value pairs are grouped as required.
  3. The classifier infers all appropriate proximal supertype/s.  

     1. With sufficiently defined concepts, the subtypes are also inferred.

##  Advantages of the approach 

  * Enhances ability to maintain content
  * Supports identification of equivalences

##  Content that does not conform 

SNOMED CT contains content that does not conform to the current modeling patterns. A quality initiative is currently underway to correct these non-conforming concepts. 

Exceptions exist where the current concept model is not expressive enough to represent critical defining characteristics of a concept that would allow for its sufficient definition.

For example, disorders where the clinical manifestations are variably present (i.e. genetic diseases)

## Authoring information

  * [Scope](?section=scope#scope)
  * [General Naming Conventions](?section=general-naming-conventions#general-naming-conventions)
  * [General Modeling](?section=general-modeling#general-modeling)
  * [Domain Specific Modeling](?section=domain-specific-modeling#domain-specific-modeling)

