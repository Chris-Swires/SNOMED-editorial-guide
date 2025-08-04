# Concept Inactivation

## Concept inactivation values

A value from the choices below must be chosen as a reason for inactivating a concept. Inactivation replacement associations are ultimately at the author's discretion. Especially in the instance of an infinite number of possible replacements, clinical relevance and subset inclusion should be considered. Non-synonymous synonyms should also be inactivated and reassigned.

Inactivation reason| Association type| Cardinality| Notes  
---|---|---|---  
Ambiguous|  _Possibly equivalent to_|  1..*| 

  * The inactivated concept is inherently ambiguous.
  * Every effort should be made to identify **all** of the clinically useful "POSSIBLY_EQUIVALENT_TO" target concepts, which should be semantically as close as possible to the meaning of the inactivated concept. Where appropriate, new concepts should be created if they are clinically valid. 
  * POSSIBLY_EQUIVALENT_TO target may be singular where the second target is a concept that is of little or no clinical usefulness. It is not necessary to represent all of the semantic meaning of the inactivated concept if the concepts needed should not exist in SNOMED CT.
  * If the FSN is vague, not ambiguous, consider using  _Meaning of component unknown._

  
Classification-derived component|  _Replaced by_ | 0..1| 

  * Applies to concepts with classification type descriptions - do not have to appear in a classification.
  * Use with "not otherwise specified", "NOS", "not elsewhere classified", "NEC", "unspecified", "other".

  
_Partially equivalent to_|  0..*| 

  * Use Partially _equivalent to_ where the intended meaning is disjunction for classification purposes, regardless of whether the terms are explicitly written as "with", "and", "and/or". The replacements must include all of the clinically valid elements of the disjunction, e.g., two or more concept target values. 
  * Every effort should be made to identify **all** of the clinically valid  _Partially_ _equivalent to_ target concepts which should be semantically as close as possible to the meaning of the inactivated concept. Where applicable and appropriate, new concepts should be created to describe the clinically relevant aspects of the inactivated concept.

  
Duplicate component|  _Same as_ | 1..1| 

  * The concept has been made inactive because it has the same meaning as another concept.

  
Erroneous component|  _Replaced by_ | 1..1| 

  * Applies to FSNs which contain an error, that when corrected, potentially changes the semantic meaning of the concept.
  * Where the error is grammatical or a spelling mistake, which when corrected does not change the meaning, the _description_ rather than the _concept_ should be inactivated.

  
Meaning of component unknown| No association type applied| 0..0| 

  * Meaning of the concept cannot be determined.
  * The FSN is **vague, not ambiguous**.

  
Non-conformance to editorial policy| No suitable replacement identified  
| 0..0| 

  * A suitable replacement cannot be identified or concept is no longer in scope, e.g. administrative, occupation or country concepts are under discussion. 
  * When jurisdictional control of a concept passes between extensions, eg. international core and the veterinary extension, or relates to specific forms, legal entities, etc.; no replacement is required.
  * Applies to a concept which does not adhere to editorial guidelines eg. grouper that cannot be defined. 
  * Applies to concept that does not adhere to Precoordination Naming Patterns
  *  _Replaced by:_ Where conformance to editorial policy potentially changes the meaning of a concept and it is possible to replace this with a concept that is semantically very close to the inactivated concept.
  * _Alternative:_ Editorial policy results in a change in scope e.g. branded products were considered out of scope for SNOMED CT, an _Alternative_ would be the generic product.

  
_Replaced by_ | 0..1  
 _Alternative_|  0..*  
Outdated component| No suitable replacement identified| 0..0| 

  * The inactivated concept is an outdated concept that is no longer considered to be clinically acceptable or semantically interoperable internationally.
  * In some circumstances, an outdated concept simply falls into disuse without any appropriate replacement.
  * _Possibly_ r _eplaced by_ is used when two or more potential replacements exist; two or more concepts as targets can be selected. 
  *  _Replaced by_ is used when a concept exists that is semantically similar to, or more general than, the inactivated concept for the purposes of reconciling historical data analysis.

  
_Possibly replaced by_|  0..*  
_Replaced by_ | 0..1  
  
When changes are made to a historical relationship for a concept that was previously inactivated, such as Limited/WAS_A, assign a new historical relationship that facilitates traceability of the concept (duplicate, ambiguous, classification derived, etc.). The _Limited component_ inactivation reason (WAS_A association type) is no longer in use for new content inactivations as of the July 2018 release. 

## Ambiguous

All possible meanings should be represented in the replacement targets when feasible, creating new concepts as replacements when appropriate. 

Ambiguous concepts with a single replacement target may be used if one of the two possible meanings of the ambiguous concept is not clinically useful.

## Classification-derived

Many, but not all, concepts precoordinated with "with" and "and" are derived from classifications; regardless, this is the acceptable inactivation reason. 

For concepts with exclusions, such as NEC, NOS, etc., use the _Replaced by_ association with the immediate parent concept as the value, which is the clinical condition without any context. If a parent concept without the exclusion does not exist, it should be created as a new concept. 

For concepts with conjunctions such as 'and' and 'with', use the  _Partially equivalent to_ association with the two separate values as targets. For the purposes of patient care, it is recommended that each disorder is recorded individually. 

The  _Partially equivalent to_ association signifies that **all** applied targets must be implemented within the clinical notes to ensure the original clinical idea is represented. 

## Duplicate

### Inactivation

  * Note that the meaning of the concept is based on the FSN but does not imply that the FSNs are identical.  
Keep the concept with the more specific FSN. FSN is the source of a concept's meaning; hence, there should be more weight in the meaning of the FSN rather than the underlying modeling. Implementers do not see modeling. 
  * If appropriate, add the descriptions from the inactivated concept to the remaining active concept while ensuring they are semantically equivalent, clinically useful, and follow current naming conventions. 

### Consider

  * Inactivating the newer concept
  * Inactivating the concept with fewer subtypes. This will simplify the process and minimize the amount of rework required.
  * Inactivating the concept with least modeling
  * Updating the retained concept's FSN and modeling to align with current policy.

### Differing hierarchies

The Duplicate component is the inactivation for duplicated concepts:

  1. Within the following hierarchies:
     1. Clinical finding and Disorder
     2. Procedure and Regime/Therapy
  2. Between the following top-level hierarchies:
     1. Clinical finding and Situation
     2. Procedure and Situation
     3. Observable and Procedure

Any possible duplicates between concepts among other paired hierarchies not listed above should be reconsidered as duplicates and directed to another inactivation reason, likely Erroneous. 

If the change is a request, inform the requestor as to which concept is inactivated.

## Erroneous

Where the error gives rise to potential ambiguity, use the inactivation reason of Ambiguous component. Otherwise, the Erroneous component requires a single _Replaced by_ value. 

## Meaning unknown

Meaning of the concept is unknown, and an association type is not given. It will normally be necessary to search the clinical literature to establish that this is truly an unknown concept rather than an outdated clinical concept.  
This inactivation reason may be used where the meaning of the FSN is considered to be vague.

## Nonconformance to editorial policy

Concept which do not adhere to editorial guidance can be inactivated without an association type. Else  _Replaced by_ and  _Alternative_ are Association type options. 

Policies will often delineate how these two _Association type_ options will be used. Changes of this type often include bulk updates and may relate to medicinal products, substances, and devices.

## Outdated

When an outdated concept simply falls into disuse without any appropriate replacement, no historical association is applied.

_Replaced by_ is used for a single replacement concept that is semantically similar to or more general than the inactivated concept.

Possibly replaced by is used for multiple replacement concepts.

For example,

A substance or organism originally believed to be a single entity has been reclassified as two or more substances or organisms.

[Can I reactivate inactivated international concepts in my extension?](https://confluence.ihtsdotools.org/display/DOCEXTPG/5.4.1.3+Management+of+Inactivated+International+Concepts+within+an+Extension)

  

  

  

