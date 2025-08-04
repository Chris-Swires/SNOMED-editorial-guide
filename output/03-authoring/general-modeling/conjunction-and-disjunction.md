# Conjunction and Disjunction

In _SNOMED CT_ , _and_ is used in descriptions to represent the operator for logical conjunction. Concepts with the disjunctives (_or, and/or_) are unacceptable. Instead, there should be separate concepts. There are limited exceptions where _and/or_ is used to represent the operator for inclusive disjunction. This helps to avoid confusion with the literal use of  _or_ in common language, i.e. only one of two operands is true; rarely both operands are true. 

Conjunction and Disjunction  
  
|  _and_|  _or_|  _and/or_  
SNOMED CT| **Conjunction: And**

  * A set of operands is true, if and, only if all of its operands are true

  * A and B are true

| **Exclusive disjunction: Or**

  * Either A or B is true but not both

| **Inclusive disjunction: And/or**

  * A set of operands is true, if and, only if one or more of its operands is true  

  * Either A or B is true  
or   

  * Both A and B are true

  
  
## Disjunctives

Disjunctives are unacceptable with limited exceptions below. Instead of disjunctives, there should be separate concepts when possible. 

Concepts with disjunctives (_or, and/or_) in disorders and procedures often involve one or more body structures.

For example, 

  *     * [ 65966004 | Fracture of forearm (disorder)|](http://snomed.info/id/65966004 "65966004 | Fracture of forearm \(disorder\) |")

The concept does not specify which bone of forearm is fractured. It is a break in _one or both of the radius and/or ulna_ per the ICD definition. It would subsume fracture of radius, fracture of ulna, and fracture of both radius and ulna. 

Exclusive disjunction ("or" only) is used when either operands is true but both cannot be true.

For example, 

  * [ 417163006 | Traumatic or non-traumatic injury (disorder)|](http://snomed.info/id/417163006 "417163006 | Traumatic or non-traumatic injury \(disorder\) |")

Concepts representing a clinical finding caused by more than one distinct substance logically represent disjunction, i.e., a clinical finding caused by substance X and/or substance Y. These concepts should be modeled as primitive using GCI. The causative agent for the main axiom should be the most specific shared parent of the substances involved. The causative agent for each GCI should be its own specific substance.

For example,

  * 870746005 |Allergy to ergometrine and/or oxytocin (finding)|

  * 1149371006 |Sulfamethoxazole and/or trimethoprim overdose (disorder)|

Disjunctives may be used if the:

  * The referent is a single thing, but there isn't a name for it.

For example,

  *     * [ 774007 | Structure of head and/or neck (body structure)|](http://snomed.info/id/774007 "774007 | Structure of head and/or neck \(body structure\) |")

  * The concept is an intensional navigational aggregate.

For example,

  *     * [ 707861009 | Structure of skin and/or skin-associated mucous membrane (body structure)|](http://snomed.info/id/707861009 "707861009 | Structure of skin and/or skin-associated mucous membrane \(body structure\) |")
    * [ 768845000 | Xanthine and/or xanthine derivative (substance)|](http://snomed.info/id/768845000 "768845000 | Xanthine and/or xanthine derivative \(substance\) |")
    * [ 767271006 | Lead and/or lead compound (substance)|](http://snomed.info/id/767271006 "767271006 | Lead and/or lead compound \(substance\) |")

  * The concept is based on an authoritative source but not a classification system.

The use of _and/or_ in a description with disjunction should be lower case.

## Anatomical structure hierarchy

Conjunction and disjunction are commonly used in the anatomical structure hierarchy. Following the anatomy SEP (Structure/Entire/Part) model, the word "structure" means all or any part of an anatomic entity, which is an inclusive disjunction.

  

For example,

[ 419605007 | Structure of ankle and/or foot (body structure)|](http://snomed.info/id/419605007 "419605007 | Structure of ankle and/or foot \(body structure\) |") represents adjacent regions of ankle and foot by a single concept. It is an inclusive disjunction, because any structures of ankle, foot, or both are true subconcepts. However, "_Entire ankle and foot"_ as a conjunction means the ankle and foot as a whole. The concept represents the entirety of this single region, though there is no dedicated name.

  

"_Structure of ankle and foot"_ has the same meaning as "_structure of ankle and/or foot" because of the inclusive disjunction meaning of "structure"_. "_Structure of ankle and foot"_ was previously used. These descriptions were changed to  _and/or_ to explicitly indicate the  _inclusive disjunction_. This supports users unfamiliar with the interpretation of "_structure"_ in the SEP model.

The _and_ represents conjunction in disorders and procedures that can be interpreted as co-occurrent. It can be read as _both_ in common usage. It would be _all_ if it refers to more than two disorders or procedures. 

For example, 

  *     * [ 75857000 | Fracture of radius AND ulna (disorder)|](http://snomed.info/id/75857000 "75857000 | Fracture of radius AND ulna \(disorder\) |") represents the occurrence of a _fracture of radius_ and a _fracture of ulna_ at the same time or event. In other words, fracture of both radius and ulna. The concept should be modeled using two finding site relationship groups: Bone structure of radius in one and Bone structure of ulna in the other. 

  

