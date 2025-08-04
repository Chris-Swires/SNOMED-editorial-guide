# Clinical Drug with Continuous Dose Form

## Overview

Clinical drugs representing a continuous dose form are modeled using _concentration_ strength attributes. Clinical drugs with a _continuous_ dose form using _concentration_ strength represents a medicinal product based on description of 1) its precise active ingredient substances only and explicitly, 2) the stated basis of strength substance(s) with strength, expressed as concentration strength and 3) with its manufactured dose form (with the exception of reconstituted oral liquid preparations, where the administrable dose form is be used as it is the most clinically relevant). 

This is used for product types such as cutaneous semi-solids (without metered actuation), solutions, suspensions, creams, ointments, bulk powders and granules, topical liquids (without metered actuation) including drops, oral liquids, nebuliser liquids and liquid parenteral products. 

For example,

  *     * Product containing precisely zidovudine 10 milligram/1 milliliter conventional release oral solution (clinical drug)
    * Product containing precisely amikacin (as amikacin sulfate) 250 milligram/1 milliliter conventional release solution for injection (clinical drug)
    * Product containing precisely clotrimazole 10 milligram/1 gram conventional release cutaneous cream (clinical drug)
    * Product containing precisely mupirocin (as mupirocin calcium) 20 milligram/1 gram conventional release nasal ointment (clinical drug)

## Modeling

Stated parent| 763158003 |Medicinal product (product)|  
---|---  
Semantic tag| (clinical drug)  
Definition status| DefinedException:

  *     * Concepts with product strength that is "not equal to" (e.g. with product strength expressed as a range, greater than, or less than) are primitive

  
**Attribute:****Has manufactured dose form**|  Range: 736542009 |Pharmaceutical dose form (dose form)|

  *     *       * While the allowed range for this attribute is broader, the CD-precise continuous dose from concepts should only use <736542009 | Pharmaceutical dose form (dose form), excluding grouper concepts based on intended site (e.g. 740596000 |Cutaneous dose form (dose form)|, 385268001 |Oral dose form (dose form)|).

Cardinality: 1..1Note

  * This is the finished dose form that a medicinal product is presented in by the manufacturer, before any transformation into an administrable dose form has taken place.

Powder and granules for oral suspension, solution, etc., may be modeled using concentration strength and the administrable dose form.For example,

  *     *       * 1145409004 |Product containing precisely amoxicillin 25 milligram/1 milliliter and clavulanic acid (as clavulanate potassium) 6.25 milligram/1 milliliter conventional release oral suspension (clinical drug)|

  
**Attribute:****Count of base of active ingredient (attribute)**|  Concrete Type: IntegerRange: >#0..Cardinality: 1..1  
Relationship group| One relationship group containing one instance of each of the following attributes is required for each precise active ingredient.  
  
  * Has precise active ingredient

| Range: <105590001 |Substance (substance) excluding concepts representing structural groupers, dispositions, or combined substancesCardinality: 1..1 per relationship group

  * The Precise Active Ingredient (PAI) cannot be modeled as a substance hydrate or solvate unless the BoSS is expressed as a hydrate or solvate.
  * Concepts containing pancreatic enzymes will be modeled based on the discrete enzymes; because of variability between real clinical drugs, synonyms representing a total amount in a particular product will not be included in the International Release.

  
  
  * Has basis of strength substance

| Range: <105590001 |Substance (substance) excluding concepts representing structural groupers, dispositions, or combined substancesCardinality: 1..1 per relationship group  
  
  * Has concentration strength numerator value

| Concrete Type: DecimalRange: >#0..Cardinality: 1..1 per relationship group  
  
  * Has concentration strength numerator unit

| Range: <767524001 |Unit of measure (qualifier value)|Cardinality: 1..1 per relationship group  
  
  * Has concentration strength denominator value

| Concrete Type: DecimalRange: >#0..Cardinality: 1..1 per relationship groupFor this pattern, the attribute value must be 1.The denominator strength value is required for concepts in the International Release even though the value = 1, because including denominators for only some concepts negatively affects the classification results.  
  
  * Has concentration strength denominator unit

| Range: <767524001 |Unit of measure (qualifier value)|Cardinality: 1..1 per relationship group  
For Clinical drug concepts with:

  * liquid dose form: the denominator unit should be 258773002 |Milliliter (qualifier value)|.
  * semi-solid dose form: the denominator unit should be [ 258682000 | gram (qualifier value)|](http://snomed.info/id/258682000 "258682000 | gram \(qualifier value\) |") for weight/weight concentration and 258773002 |Milliliter (qualifier value)| for weight/volume concentration. Representing semi-solid dose forms in weight/weight concentration is preferred.

  
  
## Naming

Use one of the following patterns for the FSN and PT. 

FSN| **Where Precise active ingredient = BoSS:**

  * Product containing precisely <BoSS FSN> <Concentration strength numerator value FSN> <Concentration strength numerator unit FSN>/<Concentration strength denominator value FSN> <Concentration strength denominator unit FSN> <Manufactured dose form FSN> (clinical drug)

For example,

  *     *       * Product containing precisely amitriptyline hydrochloride 5 milligram/1 milliliter conventional release oral solution (clinical drug)
      * Product containing precisely buprenorphine 70 microgram/1 hour prolonged-release transdermal patch (clinical drug)
      * Product containing precisely clotrimazole 10 milligram/1 gram conventional release cutaneous cream (clinical drug)
      * Product containing precisely zidovudine 10 milligram/1 milliliter conventional release oral solution (clinical drug)
      * Product containing precisely lopinavir 80 milligram/1 milliliter and ritonavir 20 milligram/1 milliliter conventional release oral solution (clinical drug)  

**Where Precise active ingredient is not = BoSS:**

  * Product containing precisely <BoSS FSN> (as <Precise active ingredient FSN>) <Concentration strength numerator value FSN> <Concentration strength numerator unit FSN>/<Concentration strength denominator value FSN> <Concentration strength denominator unit FSN> <Manufactured dose form FSN> (clinical drug)

For example,

  *     *       * Product containing precisely amikacin (as amikacin sulfate) 250 milligram/1 milliliter conventional release solution for injection (clinical drug)
      * Product containing precisely mupirocin (as mupirocin calcium) 20 milligram/1 gram conventional release nasal ointment (clinical drug)

  
---|---  
Preferred Term| **Where Single ingredient with BoSS = Precise active ingredient:**

  * <BoSS PT> <Concentration strength numerator value PT> <Concentration strength numerator unit PT>/<Concentration strength denominator value PT> <Concentration strength denominator unit PT> <Manufactured dose form PT>

For example,

  *     *       * Amitriptyline hydrochloride 5 mg/mL oral solution
      * Buprenorphine 70 microgram/hour prolonged-release transdermal patch
      * Clotrimazole 10 mg/g cutaneous cream
      * Zidovudine 10 mg/mL oral solution
      * Lopinavir 80 mg/mL and ritonavir 20 mg/mL oral solution

**Where Single ingredient with BoSS is not = Precise active ingredient:**

  * <BoSS PT> (as <Precise active ingredient PT>) <Concentration strength numerator value PT> <Concentration strength numerator unit PT>/<Concentration strength denominator value PT> <Concentration strength denominator unit PT> <Manufactured dose form PT>

For example,

  *     *       * Amikacin (as amikacin sulfate) 250 mg/mL solution for injection
      * Mupirocin (as mupirocin calcium) 20 mg/g nasal ointment

  
Synonyms| Synonyms converting metric units to percent or parts per millions may be included for medical gas concepts (e.g. Helium 79% and oxygen 21% gas for inhalation, Helium 790,000 ppm and oxygen 210,000 ppm gas for inhalation).  
  
## Exemplars

Stated template view:

<figure><img src="images/303923321.png" alt="" title=""><figcaption><p>The following illustrates the <strong>stated</strong> view for 781834001 |Product containing precisely digoxin 250 microgram/1 milliliter conventional release solution for injection (clinical drug)|:</p></figcaption></figure>

<figure><img src="images/174690874.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for 781834001 |Product containing precisely digoxin 250 microgram/1 milliliter conventional release solution for injection (clinical drug)|:</p></figcaption></figure>

<figure><img src="images/174690873.png" alt="" title=""><figcaption><p>The following illustrates the <strong>stated</strong> view for 769821007 |Product containing precisely digoxin 50 microgram/1 milliliter conventional release oral solution (clinical drug)|:</p></figcaption></figure>

<figure><img src="images/174690872.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for 769821007 |Product containing precisely digoxin 50 microgram/1 milliliter conventional release oral solution (clinical drug)|:</p></figcaption></figure>

  

<figure><img src="images/174690871.png" alt="" title=""><figcaption><p>The following illustrates the <strong>stated</strong> view for 396279000 |Product containing precisely betamethasone (as betamethasone valerate) 1 milligram/1 gram conventional release cutaneous ointment (clinical drug)|:</p></figcaption></figure>

<figure><img src="images/174690870.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for 396279000 |Product containing precisely betamethasone (as betamethasone valerate) 1 milligram/1 gram conventional release cutaneous ointment (clinical drug)|:</p></figcaption></figure>

  

<figure><img src="images/174690869.png" alt="" title=""><figcaption><p>The following illustrates the <strong>stated</strong> view for 769514000 |Product containing precisely buprenorphine 70 microgram/1 hour prolonged-release transdermal patch (clinical drug)|:</p></figcaption></figure>

<figure><img src="images/174690868.png" alt="" title=""><figcaption><p>The following illustrates the <strong>inferred</strong> view for 769514000 |Product containing precisely buprenorphine 70 microgram/1 hour prolonged-release transdermal patch (clinical drug)|:</p></figcaption></figure>

  

<figure><img src="images/174690867.png" alt="" title=""></figure>

  

