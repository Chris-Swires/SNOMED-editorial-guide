# Medicinal Product containing

## Overview

|Product containing x (medicinal product)| concepts are abstract representations of the active ingredient(s) for a medicinal product. 

For example,

  *     * Product containing axitinib (medicinal product)
    * Product containing abacavir and lamivudine (medicinal product) 

The medicinal product must contain the active ingredient(s) specified in the FSN but may also contain a modification of the active ingredient(s) specified in the FSN or may contain additional active ingredient(s). For example, "Product containing amoxicillin" represents products that must contain some amoxicillin****(with any type of modification, be it amoxicillin sodium, or amoxicillin trihydrate, or no modification, as in amoxicillin (base)), but  _may also_ contain other active ingredients, such as clavulanic acid. This is the open world view. 

In stating “abstract representations...for a medicinal product”, the concept definition implies that at least one medicinal product exists, or has existed globally, that has that set of active ingredient substance(s). This precludes the possibility of generating MPs representing theoretical, or indeed all possible, combinations of sets of active ingredient substances. 

### Use case(s) supported by |Product containing x (medicinal product)|

The main use case for describing products containing some active ingredient substance(s) is for analysis, as an aggregation concept for use in research. 

### IDMP Compatibility for |Product containing x (medicinal product)|

A concept at this level with the open world view does not correspond to any concept currently in the IDMP suite of standards, although it could act as a parent (higher level grouper) concept for PhP1 concepts, if use case(s) were identified to require this. 

## Modeling

Stated parent| 763158003 |Medicinal product (product)  
---|---  
Semantic tag| (medicinal product)  
Definition status| Defined  
Attribute:127489000 |Has active ingredient (attribute)|| Range: <105590001 |Substance (substance) excluding concepts representing structural groupers, dispositions, or combined substancesCardinality: 1..* 

  * There is no technical limit on the number of |Has active ingredient (attribute)|s that may be added to a concept. A practical limit may be imposed at a later date.  

This attribute is within a role group.  
  
## Naming

Use the following pattern for the FSN and PT. Align naming and case sensitivity with the FSN for the concept that is selected as the attribute value. 

For multiple ingredient drug products, the active ingredients must be in alphabetical order and separated by the word “and”.

FSN| Product containing <Active ingredient FSN> (medicinal product)Product containing <Active ingredient FSN> and <Active ingredient FSN> (medicinal product)Product containing <Active ingredient FSN> and <Active ingredient FSN> and <Active ingredient FSN tag> (medicinal product)For example,

  *     *       * Product containing axitinib (medicinal product)
      * Product containing abacavir and lamivudine (medicinal product)
      * Product containing abacavir and lamivudine and zidovudine (medicinal product)

  
---|---  
Preferred Term| <Active ingredient PT>-containing product<Active ingredient PT>\- and <Active ingredient PT>-containing product<Active ingredient PT>\-  and <Active ingredient PT>\-  and <Active ingredient PT>-containing productFor example,

  *     *       * Axitinib-containing product
      * Abacavir- and lamivudine-containing product
      * Abacavir- and lamivudine- and zidovudine-containing product

  
Synonym| Synonyms matching the FSN are not required.  
  
## Exemplars

<figure><img src="images/303923311.png" alt="" title=""><figcaption><p>The following illustrates the <strong>stated</strong> view for 714627007 |Product containing aflibercept (medicinal product)|:</p></figcaption></figure>

  

<figure><img src="images/174690635.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for 714627007 |Product containing aflibercept (medicinal product)|:</p></figcaption></figure>

  

<figure><img src="images/174690629.png" alt="" title=""><figcaption><p>The following illustrates the <strong>stated</strong> view for a multiple active ingredient product, 412556009 |Product containing codeine and paracetamol (medicinal product)|:</p></figcaption></figure>

  

<figure><img src="images/174690631.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for the multiple active ingredient product, 412556009 |Product containing codeine and paracetamol (medicinal product)|:</p></figcaption></figure>

  

  

<figure><img src="images/174690630.png" alt="" title=""></figure>
