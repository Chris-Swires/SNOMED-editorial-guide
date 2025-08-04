# Ingredient Strength Attributes

The following sections describe the attribute concepts used to represent the ingredient strength of concepts in the medicinal product hierarchy.

## **Describing Medicinal Product Strength - Presentation and Concentration Strength**

"Medicinal product strength" is not well defined in standards. It is closely aligned with "potency" which in pharmacology describes the measurement or calculation of the therapeutic activity of the medicine; this is expressed in terms of the amount of medicine required to produce an effect of given intensity.  
Strength is a ratio type concept: expressing the amount of something against another amount of something, which in practical terms is expressed fractionally using the numerator and denominator quantities and their relevant units. The numerator represents how much of the active ingredient substance there is, and the denominator represents the "whole" that the numerator amount is present in.   
For a medicinal product, therefore, the strength is:

_the amount of (active) substance (in the form of) the basis of strength substance_** _in one instance of "a whole" of medicinal product_**

It is the "_one instance of "a whole" of medicinal product_ " that causes the difficulty. It is not possible to have a single pattern for what this means for all types of medicinal products. Therefore, the consensus for all medicinal product terminology is to define the pattern for each type of product and apply it consistently. In addition, because historically, there has been a difference in how to develop and apply these patterns, a differentiation has developed between two types of representation "presentation strength" and "concentration strength", which are best expressed explicitly.

**Presentation strength**

Presentation strength is the amount of the basis of strength substance present in the unit of presentation of or in the volume (or mass) of the single clinical drug being represented.

**Concentration strength**

Concentration strength is the amount of the basis of strength substance present per unitary amount (volume, mass) of the single clinical drug being represented.

These two options may be used separately, as they are in this international model specification but can also be used together (as may be used in national extensions), thereby producing three patterns for how medicinal product strength can be described. The place of unit of presentation to provide the "bounding" and to support the description of "a whole" for the medicinal product is described in detail in its own section below.

### **Use of concentration strength and presentation strength**

Description of strength is a safety issue. Mindful that SNOMED CT international edition is primarily a reference terminology not an interface terminology, it is still important that the description of product strength should be that which is least confusing for national extensions to use and build out from. Presentation strength is deemed by patient safety agencies to be the least confusing for the majority of types of products so should be provided whenever possible. However, to avoid combinatorial explosion and to have realistic maintenance processes for the international edition content, some types of products that could be described with both presentation and concentration strength will be described with concentration strength only. 

### **Table of Strength Patterns**

Strength Pattern| Product Types| Unit of Presentation| Presentation Strength (logical)| Presentation Strength (usual description)| Concentration Strength| Example (not necessarily to SNOMED FSN pattern)  
---|---|---|---|---|---|---  
Pattern 1a  
Unit of presentation draws from/bounded as the basic dose form| tablets, capsules, pessaries, suppositories etc.| The basic solid dose form  
e.g. "tablet"| Mass amount per 1 unit of presentation  
e.g. "5 mg per tablet| Mass amount only;  
the “per” is implicit  
e.g. "5 mg"| The weight of one finished dose form (including excipients) is rarely known so concentration strength is not usually available  
Not deemed of any clinical significance| Bendroflumethiazide 5mg conventional release oral tablet  
Pattern 1b  
Unit of presentation bounds as a continuous basic solid dose form| sachets, ampoules or vials _containing_ powders or granules etc.| The "intimate container"  
e.g. "vial"| Mass amount per 1 unit of presentation  
e.g. "2 g per vial"| Mass amount, with the “per” either implicit or explicit  
e.g. "2 g per vial" or just "2 g"| The concentration strength is not usually available (total amount of solid, including excipients not known)  
Not deemed of any clinical significance| Cefotaxime 2g (per vial) powder for solution for injection  
Pattern 1c  
Unit of presentation bounds continuous basic dose form using a metered dose valve| pressurised inhalers, cutaneous sprays, nasal sprays etc.| Actuation| Mass amount per 1 unit of presentation  
e.g. "100 mcg per actuation"| Mass amount, with the “per” explicitly stated  
e.g. "100 mcg per actuation"| The concentration of product (usually liquid) inside the metered delivery system may be known (to the regulatory agency) but is  
Not deemed of any clinical significance| Beclometasone dipropionate 100 mcg per actuation pressurised inhalation  
Pattern 2a -_not used in the international release, may be used in national extensions_  
Unit of presentation bounded by the intimate container, which contains a volume of a liquid dose form| parenteral liquids, unit dose nebuliser solutions etc. | The "intimate container  
"e.g. "ampoule"| Mass amount per volume contained in the unit of presentation  
e.g. "100 mg per 20 mL"| Mass amount per volume the “per” is explicitly stated  
e.g. "100 mg per 20 mL"| Mass amount per unitary volume  
e.g. "5 mg per (1) mL"| Metoclopramine hydrochloride 100 mg per 20 mL solution for injection ampoule  
Pattern 2a -_not used in the international, may not be used in national extensions either, depending on culture and use case(s)_  
Unit of presentation is an "external volume delivery device" (as opposed to a metering valve that is integral to the presentation of the medicinal product)| oral liquids| "Volume delivery device"  
e.g. "5 mL (medicine spoon)"| Mass amount per volume contained in the unit of presentation  
e.g. "100 mg per 5 mL"| Mass amount per volume the “per” is explicitly stated  
e.g. "100 mg per 5 mL"| Mass amount per unitary volume  
e.g. "40 mg per (1) mL"| Aciclovir 200mg/5mL oral suspension  
Pattern 3a  
Unit of presentation exists, but clinically relevant strength is concentration strength| insulins| The "intimate container"  
e.g. "cartridge"| Mass amount per unit of presentation  
e.g. "150 units per cartridge"   
Not deemed of any clinical significance | NA| Mass amount per unitary volume  
e.g. "100 unit per (1) mL"| Insulin human soluble 100 unit / mL solution for injection  
Pattern 3a  
Unit of presentation exists, but clinically relevant strength is concentration strength| bulk parenteral solutions| The "intimate container"  
e.g. "bag"| Mass amount per unit of presentation e.g. "450 mg per 500 mL"   
Not deemed of any clinical significance | NA| Mass amount per unitary volume  
e.g. "9 mg per 1 mL"  
_Synonym: 0.9% w/v_|  Sodium chloride 0.9% solution for infusion  
Pattern 3a  
Unit of presentation exists, but is not stated, concentration strength used| parenteral liquids, unit dose nebuliser solutions etc. | The "intimate container  
"e.g. "ampoule"| Mass amount per volume contained in the unit of presentation  
e.g. "100 mg per 20 mL"| Mass amount per volume the “per” is explicitly stated  
e.g. "100 mg per 20 mL"| Mass amount per unitary volume  
e.g. "5 mg per (1) mL"| Metoclopramide hydrochloride 5 mg per 1 mL solution for injection ampoule  
Pattern 3b  
Continuous presentation; no unit of presentation exists| cutaneous semi-solids (without metered actuation)| Does not exist|   
|   
| Mass amount per unitary mass/volume  
e.g."10 mg per 1 g" _Synonym: 1 % w/w_| Hydrocortisone 1% cutaneous cream  
Pattern 3b  
Continuous presentation; no unit of presentation exists| bulk powders and granules| Does not exist|   
|   
| Mass amount per unitary mass/volume  
e.g."620 mg per 1 g" _Synonym: 62 % w/w_| Sterculia 62% oral granules  
Pattern 3b  
Continuous presentation; no unit of presentation exists| topical liquids (without metered actuation)| Does not exist|   
|   
| Mass amount per unitary mass/volume  
e.g."5 mg per 1 mL" _Synonym: 0.5 % w/v_| Chloramphenicol 0.5% eye drops  
Pattern 3b  
Continuous presentation; no unit of presentation exists| oral liquids/drops| Does not exist|   
|   
| Mass amount per unitary mass/volume  
e.g."50 mcg per 1 mL" | Digoxin 50 mcg per 1 mL oral drops, solution  
  
### **Use of Product Strength patterns for Clinical Drug concepts in the international edition**

Clinical drug concepts using pattern 1 will be present in the international edition as will clinical drugs using strength pattern 3. Clinical drugs using strength pattern 2 may be authored in national extensions. 

### **IDMP Compatibility**

IDMP (and in particular (ISO 11615 section 9.7.2.4) is clear that strength "can be expressed in two ways: strength (presentation) and strength (concentration)" and it uses both in parallel within the standard. Presentation strength is generally required for description of manufactured items, whereas concentration strength may be optionally provided. When describing the strength of a pharmaceutical product that has undergone a transformation (e.g. dissolution or dispersion), the strength is specified as it would occur "when the transformation undertaken exactly in accordance with the regulated product information". It is not clear whether, if the regulated product information provides alternative transformations, more than one pharmaceutical product would be authored. Since the Medicinal Product model does not intend to represent a transformed product using the administrable dose form when this is different, primarily because of this type of uncertainty, this issue can be put aside.  
IDMP has the concept of "Reference Strength" to explicitly describe the difference between the precise active ingredient substance and the basis of strength substance, or to support description of strength in alternative units. The Medicinal Product model supports basis of strength substance explicitly, and therefore is compatible with IDMP, and because alternative descriptions (synonyms) are a core part of the SNOMED structure, alternative strength representations could be provided if required (e.g. adrenaline 1:1000 rather than 1 mg per mL).

See also the IDMP Compatibility part of the Clinical Drug section. ([Clinical Drug (CD)](https://confluence.ihtsdotools.org/display/WIPEG/Clinical+drug)).

#### **Measurement Point**

ISO 11615 in IDMP introduces the concept of "measurement point" for strength in some products, usually those with a metered dosage value system, for example, the strength of the active ingredient substance in some inhaler products, is measured at a particular distance from the point of aerosolisation. Using a strength measurement point is currently something that is country-specific (although regulation may change to make it more standardized as its use becomes more widespread). In the international core, it may become important to specify the measurement point for the strength of some products to allow national extensions to select the correct concept for their use, since it would appear that differences in measurement point between otherwise similar products can be clinically significant. Measurement point is currently not explicitly described in the international release. 
