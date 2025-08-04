# Clinical drug

The Clinical Drug "containing precisely" (CD-precise) concept is an abstract representation of the precise active ingredient, basis of strength substance (BoSS), strength, and manufactured dose form of a drug product. It implies that the drug product must contain only the precise active ingredient(s) specified in the FSN. 

  * [Clinical Drug with Discrete Dose Form](?section=clinical-drug-with-discrete-dose-form#clinical-drug-with-discrete-dose-form)
  * [Clinical Drug with Continuous Dose Form](?section=clinical-drug-with-continuous-dose-form#clinical-drug-with-continuous-dose-form)
  * [Specific Clinical drug modeling](?section=specific-clinical-drug-modeling#specific-clinical-drug-modeling)

All Clinical Drugs that contain multiple  _active_ ingredient substances will have parent MP and MPF concepts that have the same set of active ingredient substances.

The limitation of the Clinical Drug class to the closed world view by the description of its precise active ingredient substances  _only_ precludes description of excipient substances, such as flavours, preservatives, sweeteners, etc., as ingredients in a Clinical Drug. These substances can have significance for allergies, etc., but can only be reliably described for individual authorised manufactured products, and as such, are not within the scope of the international edition. 

Similarly, by limiting the Clinical Drug class in the international edition to expression of strength  _either_ as concentration strength  _or_ as presentation strength, medicinal product concepts that could usefully have  _both_ concentration and presentation strength (for example, some liquid products such as liquid parenteral products or liquids for inhalation via a nebuliser) will have only concentration strength in the international edition. 

### **Use cases supported by the Clinical Drug concept**

Use cases supported by the clinical drug concept include:

  * As the abstract representation of products that are authorised, although without any sense of the excipient substances, the clinical drug concept is the source from which all other representation of medicinal product concepts flows; it acts as a clinically relevant grouper concept for medicinal products, and as such can support:
    * international cross-border care delivery
    * International and national interoperability of patient medication information, such as within patient summaries
  * In national extensions: many clinical purposes, such as product prescribing, adverse event reporting, formulary management, in recording medication history, and in medication profiles
  * Internationally and nationally in decision support and in protocols and treatment guidelines, when a more complete description of a product is required than MP or MPF
  * In pharmacovigilance, especially for description of concomitant medication
  * In analysis and research

### **Availability of CD concepts in the international edition**

This class forms part of the medicinal product content provided in the international edition, although for liquid products, only concentration strength representation is provided. 

### **Clinical Drug Grouping Concepts not present in this model or in the international edition**

Clinical Drug concepts in the international release are defined by their precise active ingredient substance(s) and their basis of strength substance, as described above. A concept that grouped clinical drugs by their strength and basis of strength substance only (i.e., disregarding the precise active ingredient substance) may be appropriate in some contexts in national extensions (e.g. 'amlodipine 10mg conventional release oral tablet' as a concept with three child concepts 'amlodipine (as amlodipine besiliate) 10mg conventional release oral tablet' and 'amlodipine (as amlodipine mesiliate) 10mg conventional release oral tablet' 'amlodipine (as amlodipine maleate) 10mg conventional release oral tablet'. A Clinical Drug grouping concept of this nature would be a "Basis of Strength Substance Clinical Drug" concept as opposed to a "Clinical Drug containing Precisely" concept. 

### **IDMP Compatibility**

Although a Clinical Drug might look directly compatible with the IDMP concept of "Manufactured Item", in IDMP, a Manufactured Item is an "actual manufactured item (the tablet, liquid, cream contained within the package) as it is delivered from the manufacturer but before any transformation, if applicable, for administration to or use by the patient"; it is therefore a representation of a real entity, rather than an abstract entity. They are therefore not directly compatible classes of entities. A Manufactured Item is described by substances in a variety of roles, including excipient substances, not just its active substance(s) and their strengths. A Manufactured Item can be related to an appropriate Clinical Drug on the basis of its active ingredient substance(s) and relevant strength so that the Clinical Drug being an abstracted representation of the Manufactured Item, but they are not equivalent. The Manufactured Item concept in IDMP is equivalent to the Real Clinical Drug concept of the SNOMED national extension model.

On the basis that the IDMP concept of a Pharmaceutical Product could be defined by substance(s) playing only an active ingredient role, then the Clinical Drug concept is more directly compatible with the IDMP Pharmaceutical Product concept however if it is intended that the IDMP Pharmaceutical Product does include excipient substances, then there is no compatibility. Even then, the IDMP Pharmaceutical Product concept is clear that the dose form attribute is populated by the  _administrable_ dose form rather than the manufactured dose form, whereas, for everything other than products presented as reconstituted oral liquids, the Clinical Drug uses the  _manufactured_ dose form. Although for probably the majority of medicinal products the manufactured dose form is also the administrable dose form, for the minority for which this is not the case (for example, parenteral products presented as powders or granules that must be dissolved or dispersed prior to administration to the patient) this difference is significant. It is therefore not possible to state any direct class level equivalence between a Clinical Drug and an IDMP Pharmaceutical Product. 

There is some compatibility between an IDMP PhP4 concept and a Clinical Drug. However, it is not yet clear as to how the "active substance - strength" description will be described in IDMP implementation. The SNOMED Clinical Drug is explicit in stating the basis of strength substance in its relevant granularity as required for patient care; IDMP is currently less clear as to how that will be done and what effect that will have on the description of a Pharmaceutical Product. In addition, IDMP allows for "active substance - strength" to be described by using either (and possibly even both) a Substance and Specified Substance. The distinction between Substance and Specified Substance in IDMP is thus: a substance is "any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical" whereas a Specified Substance is one that is "defined by groups of elements that describes multi-substance materials or specifies further information on substances relevant to the description of Medicinal Products". Specified substances are substances like simeticone, which are mixture substances, or substances that are defined by pharmacopoeial specification (like water for injection) or substance where a particular manufacturing process is specified (as for biosimilar products). For SNOMED CT, all such substances, with the possible exception of 'water for injection') could be present in the Substance hierarchy and are therefore candidate concepts to be used in the ingredient role attributes of concepts in the Medicinal Product hierarchy; as such the IDMP distinction between Substance and Specified Substance has no material effect.

  

The guidance below applies to both discrete and continuous dose forms. 

## Descriptions

Align FSN and PT naming and case sensitivity with the concepts selected as attribute values. 

For multiple-ingredient drug products, the BoSS must be in alphabetical order and separated by the word “and”.

The following units of measure should not be abbreviated in any descriptions; always spell out:

  * microequivalent
  * microliter
  * microgram
  * microliter (with GB spelling microlitre)
  * million unit
  * nanogram
  * picogram
  * unit

Synonyms matching the FSN are not required. 

## Concentration strength units

For solids and semi-solids, a concentration strength will be mass/mass (weight/weight) – usually mg/g.

  * Solid = pill, tablet, suppository, tape, patch, lozenge, implant, gum, capsule, etc.
  * Semi-solid = cement, cream, gel, ointment, paste, poultice

For liquids, a concentration strength will be mass/volume (weight/volume) – usually mg/mL.

  * Liquid = solution, suspension, tincture, spirit, emulsion, foam, lotion, oil, lacquer, etc.

Requests for new concepts that conflict with the above require a clear justification for the variance.

## International Unit

 _International Unit_ as a description is arbitrary, and to be understood, each product requires reference to a particular bioefficacy specification for that entity. Therefore,  _international_ _unit_ is neither a meaningful nor comparable description at Clinical Drug level. International unit will be represented as  _unit_ in Clinical Drug descriptions. Abbreviations will not be used.

For example,

  *     * 1237145006 |Product containing precisely octocog alfa 1000 unit/1 vial powder for conventional release solution for injection (clinical drug)|
    * PT - Octocog alfa 1000 unit powder for solution for injection vial

The |Has presentation strength numerator unit| will still continue to have a value of |International unit (qualifier value)| even though  _unit_ is stated in the FSN and PT.

## Product strength _not equal to_

Concepts with product strength that is "not equal to" are modeled as primitive, with attributes added as described in the corresponding subpages, except that strength numerator attributes will not be added. The appropriate Medicinal Product Form-only (MPF-only) concept will infer as a parent.

## Product strength numerator values

Expression of product strength in metric units is preferred.

To avoid semantically equivalent concepts, product strength for metric units are normalized as follows:

  *     * Use milligram if value is <1000; if  _>_ 1000, convert to gram.
    * Use microgram if value is <1000; if  _>_ 1000, convert to milligram.
    * Use nanogram if value is <1000; if  _>_ 1000, convert to microgram.  

    * Use picogram if value is <1000; if  _>_ 1000, convert to nanogram.

Similarly, if a unit is less than one, convert to a smaller unit. gram → milligram → microgram → nanogram → picogram

For example, 

If the value is less than one gram, convert value to milligrams. 

To avoid semantically equivalent concepts, product strength for units are normalized as follows:

  * Use million unit if value is  _>_ 1000000 unit

The following units are not allowed unless specifically noted as an exception:

  *     * 408165007 |Mega u (qualifier value)|

Repeating decimals are rounded to three decimal places (with 5 and above rounded up and 4 and below rounded down).

## Precise active ingredient

The _Precise Active Ingredient_ (PAI) cannot be modeled as a substance hydrate or solvate unless the BoSS is expressed as a substance hydrate or solvate.

Concepts containing pancreatic enzymes are modeled based on the discrete enzymes; because of variability between real clinical drugs, synonyms representing a total amount in a particular product will not be included in the International Release.

## Inference based on dose form

Clinical drugs _containing precisely x_ are modeled with a count based on the  _substance(s)_ to support a closed world view (i.e., a count of 1 will not infer a count of 2). The closed world view does not apply to dose forms. A very rare case can arise where, for example, a clinical drug that is for an _x ear and eye drop_ is a subtype of both the clinical drug _x eye drop_ and the clinical drug _x ear drop_. This makes real world sense where all descendants of _x clinical drug eye drop_ are for use in the eye, and a small subgroup of them may also be acceptable for use in the ear.

For example,

1220547004 |Product containing precisely gentamicin (as gentamicin sulfate) 3 milligram/1 milliliter conventional release eye drops (clinical drug)| correctly infers a subtype of 1142217003 |Product containing precisely gentamicin (as gentamicin sulfate) 3 milligram/1 milliliter conventional release ear and eye drops (clinical drug)|.

  

  

  

  

  

