# Conjugate acids, bases and salts

## Overview

Acids substance concepts should be modeled with a structural parent concept.

Salts should be modeled with a conjugate base as parent (if one exists, otherwise they are modeled with a structural parent). Salts may have an Is modification of (attribute) relationship to the conjugate acid where a specific use case is identified. See examples of such use cases in the [Concepts Representing a Substance or its Modifications](https://confluence.ihtsdotools.org/display/WIPEG/Concepts+Representing+a+Substance+or+its+Modifications) page of this Editorial Guide.

Conjugate base concepts ( e.g. valproate, pamidronate, etidronate) should only be created where a specific use case is identified, for example, when required to support the definition of other concepts in the terminology.

Conjugate bases should be created as separate concepts - not added as synonyms to the corresponding acid concept.

New instances of substance concepts containing the word "salt" will not be added. The existing concepts will be reviewed, and if possible, will be replaced by equivalent compounds.

## Modeling

Parent concept| Most distal appropriate descendant of 312413002 |Substance categorized structurally (substance)|  
---|---  
Semantic tag| (substance)  
Definition status| Primitive  
Attribute:Is Modification of| Range <105590001 |Substance (substance)|Cardinality: 0..1Used to identify the conjugate acid  
**Attribute:****Has disposition**|  Range: <726711005 |Disposition (disposition)|

  *     * While the allowed range is broader, substance concepts should only use <726711005 |Disposition (disposition)| as the attribute value.

Cardinality: 0..1  
  
## Naming

Where INN names exist, these should be used for the FSN and PT.  
  

FSN| Pattern:

  * X sulfate (substance)
  * X pamidronate (substance)

For example,

  *     *       * Copper sulfate (substance)
      * #### Disodium pamidronate (substance)

      * Etidronate (substance)

Exception:

  * Valproate sodium (substance)

  
---|---  
Preferred Term| Pattern:

  *     * X sulfate
    * X pamidronate

  
For example,

  *     *       * Copper sulfate
      * Pamidronate monosodium
      * Etidronate

Exception:

  * Valproate sodium

  
Synonyms| Pattern: Pamidronate XFor example,

  *     *       * Pamidronate monosodium
      * Valproate sodium

  
  
## Exemplar

<figure><img src="images/237109871.png" alt="" title=""><figcaption><p>Figure 1: Stated view of 387080000 |Valproic acid (substance)|</p></figcaption></figure>

  

  

<figure><img src="images/237109874.png" alt="" title=""><figcaption><p>Figure 2: Stated and inferred view of 387481005 |Sodium valproate (substance)|</p></figcaption></figure>

  

  

<figure><img src="images/237109872.png" alt="" title=""><figcaption><p>Figure 3: Hierarchy view of 264325000 |Valproate (substance)| subtypes</p></figcaption></figure>

  

  

The following illustrates the **stated** and **inferred** views.

<figure><img src="images/174691578.png" alt="" title=""></figure>

<figure><img src="images/174691579.png" alt="" title=""><figcaption><p>**</p></figcaption></figure>

**
