# Medicinal Product containing only

## Overview

The |Product containing only x (medicinal product)| concepts are abstract representations of the active ingredient(s) for a medicinal product. The medicinal product contains only the active ingredient(s) specified in the FSN but may also contain a modification of the active ingredient(s) specified in the FSN. 

For example,

  *     * Product containing only axitinib (medicinal product)
    * Product containing only abacavir and lamivudine (medicinal product)

This is effectively the "set of active moiety(ies)" of the medicinal product. For example, "Product containing amoxicillin only" represents products that must contain _only_ amoxicillin****((with any type of modification, be it amoxicillin sodium or amoxicillin trihydrate, or no modification, as in amoxicillin (base)); they must  _not_ contain any other active ingredients, such as clavulanic acid. 

### Use case(s) supported by  _Medicinal Product containing only_

There are several use cases that the _Medicinal Product containing only_ concept can support:

  * In national extensions; where it is useful for various clinical purposes, such as prescribing scenarios (so called "abstract" or "non-product-based" prescribing) and in medication history and in medication profiles
  * Internationally and nationally in decision support and in protocols and treatment guidelines
  * Internationally and nationally for interoperability of patient medication information such as in patient summaries
  * Internationally and nationally for recording adverse events and/or sensitivities to medication, particularly for multi-ingredient preparations where there will be no appropriate single substance concept and it is not possible to say which particular active ingredient is responsible for the issue
  * In pharmacovigilance, especially for description of concomitant medications where less information may be available (see below in _IDMP Compatibility_)
  * In analysis and research
  * As a supporting attribute for other concepts elsewhere in SNOMED CT

### Availability of _Medicinal Product containing only_ concepts in the international edition

This class forms part of the medicinal product content provided in the international edition. Description of the MP Precisely, which is not populated in the International Edition, is in the [National Extension](https://confluence.ihtsdotools.org/pages/viewpage.action?pageId=137239135) model.

### IDMP Compatibility

The _Medicinal Product containing only_ concept might be directly compatible with the ISO 11616 concept of a level 1 Pharmaceutical Product (PhPID_SUB_L1), where the "active substance set" comprises the definition of this concept. However, the granularity of description of substance for the PhP1 is not completely clear, but may be more granular than that used for the _Medicinal Product containing only_ concept. The _Medicinal Product containing only_ concept is defined by "only and exclusively the active ingredient substance(s) that it contains but regardless of any modification of those active ingredient substance(s)" whereas the PhP1 will likely use a substance description that includes any modification, including when there are multiple modifications (e.g., a solvated salt modification). 

In IDMP, for products using adjuvants, it is probable that the adjuvant would be included as part of the "active substance set" and its role explicitly identified. For example, aluminium hydroxide is used as an adjuvant in several vaccine products (e.g., hepatitis A, hepatitis B) in addition to the antigen itself to enhance the immune response; it is not an active ingredient per se, and it is not an inactive ingredient; it is explicitly an "adjuvant". However, this type of detail of the implementation of the abstract model of ISO 11616 remains unclear, and in its first implementation, the modeling of adjuvants in the vaccine content in the SNOMED CT international edition has not been finalised.

## Modeling

Stated parent| 763158003 |Medicinal product (product)  
---|---  
Semantic tag| (medicinal product)  
Definition status| Defined  
Attribute:127489000 |Has active ingredient (attribute)|| Range: <105590001 |Substance (substance), excluding concepts representing structural groupers, dispositions, or combined substancesCardinality: 1..* There is no technical limit on the number of |Has active ingredient (attribute)|s that may be added to a concept. A practical limit may be imposed at a later date.This attribute is within a role group.   
Attribute:1142139005 |Count of base of active ingredient (attribute)|| Concrete Type: IntegerRange: >#0..Cardinality: 1..1  
  
### Exception for Benzylpenicillin

774826003 |Product containing only benzylpenicillin (medicinal product)| is primitive and is a proximal primitive parent to 786119008 |Product containing only benzylpenicillin in oral dose form (medicinal product form)| plus 2 subtype clinical drugs, and 778490002 |Product containing only benzylpenicillin in parenteral dose form (medicinal product form)| plus 3 subtype clinical drugs. 774826003 |Product containing only benzylpenicillin (medicinal product)| is intentionally not modeled as a supertype of 1234764000 |Product containing only benzathine benzylpenicillin (medicinal product)| and 1234762001 |Product containing only procaine benzylpenicillin (medicinal product)| because clinically the child concepts are not considered as specialisations of the supertype, but as sibling concepts.

## Naming

Use the following pattern for the FSN and PT. Align naming and case sensitivity with the FSN for the concept that is selected as the attribute value. 

For multiple ingredient drug products, the active ingredients must be in alphabetical order and separated by the word “and”.

FSN| Product containing only <Active ingredient FSN> (medicinal product)Product containing only <Active ingredient FSN> and <Active ingredient FSN> (medicinal product)Product containing only <Active ingredient FSN> and <Active ingredient FSN> and <Active ingredient FSN> (medicinal product)For example,

  *     *       * Product containing only axitinib (medicinal product)
      * Product containing only abacavir and lamivudine (medicinal product)
      * Product containing only abacavir and lamivudine and zidovudine (medicinal product)

  
---|---  
Preferred Term| <Active ingredient PT> only product<Active ingredient PT> and <Active ingredient PT> only product<Active ingredient PT> and <Active ingredient PT> and <Active ingredient PT> only productFor example,

  *     *       * Axitinib only product
      * Abacavir and lamivudine only product
      * Abacavir and lamivudine and zidovudine only product

  
Synonym| Synonyms matching the FSN are not required.  
  
## Exemplars

The following illustrates the **stated** view for 773390003 |Product containing only axitinib (medicinal product)|:

<figure><img src="images/240453153.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for 773390003 |Product containing only axitinib (medicinal product)|:</p></figcaption></figure>

<figure><img src="images/240453152.png" alt="" title=""><figcaption><p>The following illustrates the <strong>stated</strong> view for 775360007 |Product containing only codeine and paracetamol (medicinal product)|:</p></figcaption></figure>

<figure><img src="images/240453151.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for 775360007 |Product containing only codeine and paracetamol (medicinal product)|:</p></figcaption></figure>

<figure><img src="images/240453150.png" alt="" title=""></figure>
