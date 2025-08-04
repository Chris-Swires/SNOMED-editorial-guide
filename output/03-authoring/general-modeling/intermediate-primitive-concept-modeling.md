# Intermediate Primitive Concept Modeling

Concepts that cannot be sufficiently defined by necessary conditions are called _primitive concepts_.   
  
Primitive concepts cannot have subtypes automatically assigned by the classifier, unless a sufficient condition for that concept exists. Relevant concepts that are subtypes of a primitive concept in the taxonomy must be manually assigned an IS A relationship to that concept.

When a primitive concept is a child of one or more concepts and a parent of one or more concepts, it is known as an _intermediate primitive_.

For example,

  *     * [ 41969006 | Idiopathic disease (disorder)|](http://snomed.info/id/41969006 "41969006 | Idiopathic disease \(disorder\) |")

Without a stated IS_A relationship to the proximal primitive concept Idiopathic disease (disorder), a concept will not classify as a subtype of Idiopathic disease (disorder). 

Identifying all subtypes is important when creating a subset or when Identifying relevant content during data retrieval. Therefore, when adding new concepts, potential _primitive parents_ need to be identified and the IS_A relationship stated. 

Consistent assignment of subtypes to intermediate primitive concepts is challenging. To find a possible intermediate primitive parent, it may be necessary to view the authoring form of several concepts that should be siblings of the new concept. Authors should also check for a possible intermediate primitive supertype among the descendants of the most proximate defined parent(s) under which the new concept would be expected to classify as an inferred subtype.   

Given the manual burden that intermediate primitives impose, the creation of new intermediate primitive concepts in the international edition is prohibited unless:

  * There is no other option and the concept is clinically necessary.
  * The impact of adding the concept has been fully explored and understood.
  * The impact is manageable and there is a management plan, including an extensional definition for the direct sub-concepts.

For the International Release, such requests are assessed case-by-case.
