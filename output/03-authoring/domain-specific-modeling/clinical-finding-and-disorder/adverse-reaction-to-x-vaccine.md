# Adverse reaction to X vaccine

## Overview

The following modeling and terming guidelines apply to concepts in the International Release.

## Modeling

"Adverse reaction to X vaccine" concepts shall be modeled using the proximal primitive modeling pattern. Due to the small number of concepts (n<50), no template will be created. The "Adverse reaction to substance" template can be consulted for generalized modeling guidance.

  
| Single or multiple ingredient vaccine  
---|---  
Stated parent concept| 281647001 |Adverse reaction (disorder)|  
Semantic tag| (disorder)  
Definition status| Primitive

  * Note: Because 'Adverse reaction to X vaccine' represents the propensity to an adverse reaction to any component (including excipients) of a vaccine rather than the modeled active ingredient(s), these concepts cannot be sufficiently defined. As a result, there will not be subsumption between "Adverse reaction to X vaccine" concepts.
  * Exceptions: Grouper concepts 293104008 |Adverse reaction to component of vaccine product (disorder)|, 219075006 |Adverse reaction to component of vaccine product containing bacteria antigen (disorder)|, and 408672009 |Adverse reaction to component of vaccine product containing virus antigen (disorder)| are modeled as sufficiently defined and subsume the remaining concepts.

  
Attribute:  
Causative agent| 

  * Range: <<787859002 |Vaccine product (medicinal product)|_  
  
_
  * Cardinality: 1..1  

    * Adverse reaction to X vaccine concepts should have one and only one |Causative agent| attribute.
    * Concepts representing "vaccine product containing only" should not be used in modeling Adverse reaction to X vaccine concepts.

  
  
## Terming

FSN| Use the following pattern for the FSN; align terming and case sensitivity with the FSN for the concept that represents the vaccine product that is the cause of the adverse reaction.

  * Adverse reaction to component of <Causative agent FSN> (disorder)

For example,

  *     * Adverse reaction to component of vaccine product containing Hepatitis A virus antigen (disorder)
    * Adverse reaction to component of vaccine product containing Streptococcus pneumoniae antigen (disorder)
    * Adverse reaction to component of vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (disorder)  

    * Adverse reaction to component of vaccine product containing Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (disorder)_  
_

  
---|---  
Preferred Term|  Use the following pattern for the PT; align terming and case significance with the PT for the disorder that is the target of the vaccine. For multiple ingredient vaccine products, the disorders must be listed in alphabetical order and separated by the word "and".

  * Adverse reaction to <disorder> vaccine
  * Adverse reaction to <disorder> and <disorder> vaccine
  * Adverse reaction to <disorder> and <disorder> and <disorder> vaccine

For example,

  *     * Adverse reaction to hepatitis A vaccine
    * Adverse reaction to pneumococcal vaccine
    * Adverse reaction to diphtheria and tetanus vaccine
    * Adverse reaction to measles and mumps and rubella vaccine

For national extensions modeling using "vaccine containing only" product concepts, these disorder-based descriptions will need to reflect "only" to eliminate duplicate descriptions.  
Synonyms| A synonym corresponding to the FSN is required.  
  
Synonyms beginning with the disorder that is the target of the vaccine are allowed. For multiple ingredient vaccine products, the disorders must be listed in alphabetical order and separated by the word "and". Note that these are not true synonyms; they may be updated and identified as "near-synonym" descriptions when that functionality becomes available although that would also potentially require updating the PT.For example,

  *     * Hepatitis A vaccine adverse reaction
    * Pneumococcal vaccine adverse reaction
    * Diphtheria and tetanus vaccine adverse reaction
    * Measles and mumps and rubella vaccine adverse reaction

For national extensions modeling using "vaccine containing only" product concepts, these disorder-based descriptions will need to reflect "only" to eliminate duplicate descriptions.  
  
## Exemplars

The following illustrates the **stated** and **inferred** view for top level grouper 293104008 |Adverse reaction to vaccine product (disorder)|:

<figure><img src="images/174690457.png" alt="" title=""><figcaption><p>The following illustrates the <strong>stated</strong> view for top level grouper 219075006 |Adverse reaction to vaccine product containing bacteria antigen (disorder)|:</p></figcaption></figure>

<figure><img src="images/174690456.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for top level grouper 219075006 |Adverse reaction to vaccine product containing bacteria antigen (disorder)|:</p></figcaption></figure>

<figure><img src="images/174690455.png" alt="" title=""><figcaption><p>The following illustrates the <strong>stated</strong> view for single ingredient vaccine 293126009 |Adverse reaction to vaccine product containing Hepatitis A virus antigen (disorder)|:</p></figcaption></figure>

<figure><img src="images/174690454.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for single ingredient vaccine 293126009 |Adverse reaction to vaccine product containing Hepatitis A virus antigen (disorder)|:</p></figcaption></figure>

<figure><img src="images/174690453.png" alt="" title=""><figcaption><p>The following illustrates the <strong>stated</strong> view for multiple ingredient vaccine 293125008 |Adverse reaction to vaccine product containing Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (disorder)|:</p></figcaption></figure>

<figure><img src="images/174690452.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for multiple ingredient vaccine 293125008 |Adverse reaction to vaccine product containing Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (disorder)|:</p></figcaption></figure>

<figure><img src="images/174690451.png" alt="" title=""></figure>
