# Medicinal Product Form containing only

## Overview

The |Product containing only x in y dose form (medicinal product form)| is an abstract representation of the active ingredient(s) and dose form intended site for a medicinal product. The medicinal product must contain only the active ingredient(s) specified in the FSN but may also contain a modification of the active ingredient(s) specified in the FSN. This is the closed world view. 

For example,

  *     * Product containing only axitinib in oral dose form (medicinal product form)
    * Product containing only abacavir and lamivudine in oral dose form (medicinal product form)

In other words, "MPF only" represents a medicinal product based on description of only and exclusively the active ingredient(s) it contains and on the (generalised) intended site of use for the product.

For example,

  *     * "Product containing only amoxicillin in oral dose form (medicinal product form)" represents products that must contain only amoxicillin (be it amoxicillin sodium or amoxicillin trihydrate), with no other active ingredients in manufactured dose forms such as oral suspension, oral capsule (any type), oral tablet (any type). 

## Modeling

Stated parent| 763158003 |Medicinal product (product)|  
---|---  
Semantic tag| (medicinal product form)  
Definition status| Defined  
Attribute:Has active ingredient| Range: <105590001|Substance (substance)|, excluding concepts representing structural groupers, dispositions, or combined substancesCardinality: 1..*There is no technical limit on the number of |Has active ingredient| attributes that may be added to a concept; a practical limit may be imposed at a later date.This attribute is self-grouped.  
Attribute:Has manufactured dose form| Range: 736542009 |Pharmaceutical dose form (dose form)

  * Only descendants that are groupers representing intended site only (e.g., 385268001 |Oral dose form (dose form)|, 385287007 |Parenteral dose form (dose form)|)

Cardinality: 1..1Exceptions: 

  *     * 385217004 |Conventional release gas for inhalation (dose form)| may be used as manufactured dose form for Medicinal product form concepts.
    * 785898006 |Conventional release solution for irrigation (dose form)| does not have 736474004 |Has dose form intended site (attribute)| but can be used as a target for manufactured dose form for Medicinal product form concepts.

Note

  * This attribute describes a grouping dose form concept for the medicinal product, where the grouping is the intended site for administration of the dose form of the product

  
Attribute:Count of base of active ingredient| Concrete Type: IntegerRange: >#0..Cardinality: 1..1Note

  * This attribute provides the number of base active ingredient substances present in the medicinal product

  
  
### **Use cases supported by MPF (only)**

There are several use cases that the MPF (only) concept can support:

  * Internationally and nationally in decision support (especially drug interaction checking) and in protocols and treatment guidelines
  * Internationally and nationally for interoperability of patient medication information such as in patient summaries and medication profiles, where patient information may only be available in using an abstract description (e.g. "patient reports they were taking oral captopril for 5 years")
  * Internationally for the provision of cross border care, where a particular formulation of a medicinal product from one jurisdiction may not be present in a second jurisdiction; the MPD (only) class can support finding alternatives
  * In pharmacovigilance, especially for description of concomitant medications where less information may be available (see also below in IDMP Compatibility)
  * In analysis and research
  * As a supporting attribute for other concepts elsewhere in SNOMED CT

### **IDMP Compatibility**

A concept at this level, despite using the universal restriction, does not directly correspond to any concept currently in the IDMP suite of standards.

The Level 3 Pharmaceutical Product concept (PhPID_SUB_C3) uses a granular  _administrable dose form concept_ for a product which will have an intended site of administration (bearing in mind that the exact implementation of ISO 11616 is not yet known). The MPF uses a more abstract dose form grouping concept where the grouping is on the basis of the intended site of administration for  _manufactured_ dose form (with some exceptions for oral antibiotic products that are supplied as powders/granules but dispensed to patients as solutions/suspensions). However, there should be little difference in the intended site of administration between a manufactured dose form and its administrable form for those dose forms that do not require transformation. For some groups of products, the MPF (only) concept has the potential to bring additional value to users beyond PhPID_SUB_C3 because it is a larger grouping concept.

For example, the dose form intended site concept  [385276004 |Ocular dose form (dose form)|](http://snomed.info/id/385276004) covers 14 more granular pharmaceutical dose forms, of which two would undergo transformation to different administrable dose forms, but still with the ocular intended site. This means that the single MPF grouping concept will be relevant to a considerably larger group of actual products than the 12 potential PhPID_SUB_C3 concepts for the same active ingredient substance(s) that might exist in IDMP.

As with the Medicinal Product (only) concept, the granularity of description of substance for the PhP3 is not completely clear, but may well be more granular than that used for the MPF (only) concept. 

## Naming

Use the following pattern for the FSN and PT. Align naming and case sensitivity with the FSN for the concepts that are selected as the attribute value. 

For multiple ingredient drug products, the active ingredients must be in alphabetical order and separated by the word “and”.

FSN| Product containing only <Active ingredient FSN> in <Manufactured dose form FSN> (medicinal product form)Product containing only <Active ingredient FSN> and <Active ingredient> in <Manufactured dose form FSN>(medicinal product form)Product containing only <Active ingredient FSN> and <Active ingredient FSN> and <Active ingredient FSN> in <Manufactured dose form FSN> (medicinal product form)For example,

  *     *       * Product containing only axitinib in oral dose form (medicinal product form)
      * Product containing only abacavir and lamivudine in oral dose form (medicinal product form)
      * Product containing only abacavir and lamivudine and zidovudine in oral dose form (medicinal product form)

_Creation of MPF-only concepts for all possible combinations of active ingredients contained in multiple ingredient products is not recomm ended at this time (no specific use case has been identified). For example, a product containing three active ingredients would only require creation of one MPF-only concept. If any of the active ingredients is available as a single ingredient product, or as part of another multiple ingredient concept, then appropriate concepts would be created for those products._  
---|---  
Preferred Term| <Active ingredient PT> only product in <Manufactured dose form PT><Active ingredient PT>\- and <Active ingredient PT> only product in <Manufactured dose form PT><Active ingredient PT>\- and <Active ingredient PT>\- and <Active ingredient PT> only product in <Manufactured dose form PT>For example,

  *     *       * Axitinib only product in oral dose form
      * Abacavir and lamivudine only product in oral dose form
      * Abacavir and lamivudine and zidovudine only product in oral dose form

  
Synonym| Synonyms matching the FSN are not required.  
  
## Exemplars

<figure><img src="images/303923316.png" alt="" title=""><figcaption><p>The following illustrates the <strong>stated</strong> view for 773392006 |Product containing only axitinib in oral dose form (medicinal product form)|:</p></figcaption></figure>

  

<figure><img src="images/174690847.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for 773392006 |Product containing only axitinib in oral dose form (medicinal product form)|:</p></figcaption></figure>

  

<figure><img src="images/174690846.png" alt="" title=""><figcaption><p>The following illustrates the <strong>stated</strong> view for 772249008 |Product containing only abacavir and lamivudine in oral dose form (medicinal product form)|:</p></figcaption></figure>

  

<figure><img src="images/174690845.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for 772249008 |Product containing only abacavir and lamivudine in oral dose form (medicinal product form)|:</p></figcaption></figure>

  

**

<figure><img src="images/174690844.png" alt="" title=""><figcaption><p>**</p></figcaption></figure>

  
