# Synonym

In SNOMED CT, a  _synonym_ (SYN) is a description that is an acceptable way to express the meaning of a concept in a particular language or dialect; it is a word or phrase, other than the FSN, that represents a concept. Unlike FSNs, synonyms are not required to be unique. 

Each concept may have one or more synonyms. 

For example,

  *     * US English synonyms for [ 22298006 | Myocardial infarction (disorder)|](http://snomed.info/id/22298006 "22298006 | Myocardial infarction \(disorder\) |") are: 
      * Myocardial infarction
      * Cardiac infarction
      * Heart attack
      * Infarction of heart
      * MI - myocardial infarction
      * Myocardial infarct

A synonym may not change to, i.e. replace, an existing FSN.

## Nonsemantic synonyms

### Narrower synonym

When a synonym is more specific than the FSN, it does not have the same meaning, and should be inactivated. The description inactivation value of 723278000 |Not semantically equivalent component (foundation metadata concept)| is used.

For example,

  *     * FSN: Removal of device (procedure)
    * SYN: Removal of prosthetic device (procedure) 

_Removal of prosthetic device_ has a more specific meaning than _Removal of device_ ; therefore, the synonym _Removal of prosthetic device_ should be inactivated from the concept. 

### Broader synonym

When a synonym is more general than the FSN, and there is no context in which it has the same meaning as the FSN, the synonym should be inactivated. The description inactivation value of 723278000 |Not semantically equivalent component (foundation metadata concept)| is used.

For example, 

  *     * FSN: Sprain (morphologic abnormality)
    * SYN: Joint injury - more general meaning than the FSN

 _Joint injury_ has a more general meaning than _Sprain_ ; therefore, the synonym _Joint injury_ should be inactivated from the concept. 

## Duplicate descriptions for concepts within the same hierarchy

Two active descriptions in the same hierarchy should not share the same term unless the language is different.

Where two or more concepts have the same description(s), both concepts must be checked to determine whether the concepts are in fact duplicates. If the concepts are duplicates, one concept is inactivated with the inactivation reason of SAME_AS and historical association to the other concept.

A description with a single meaning may be erroneously associated with more than one concept. If the concepts are not duplicates, the description should be retained with only one of the concepts and inactivated on the other(s).

## Duplicate descriptions for concepts in different hierarchies

Some descriptions have more than one meaning when this is considered in conjunction with the hierarchy the concept is situated in. The purpose of the semantic tag is to disambiguate concepts that have the same commonly used word or phrase. Therefore, there are circumstances where the same description can be appropriate, either as the preferred term or synonym, for concepts in different hierarchies. 

The most common example of this is clinical finding/disorder/morphologic abnormality hierarchies where the disorder and the associated morphology may use the same descriptions. 

For example,

  *     * 1157162007 |Intravascular large B-cell lymphoma (disorder)|

Preferred term - Intravascular large B-cell lymphoma

  *     * 399648005 |Intravascular large B-cell lymphoma (morphologic abnormality)|

Preferred term - Intravascular large B-cell lymphoma

The morphologic abnormality concept is used as the value for associated morphology to sufficiently define the disorder concept. 

Furthermore, the same description might refer to an action for a procedure, a morphologic abnormality to describe an abnormal body structure, or a clinical finding/disorder describing a normal/abnormal observation or clinical state, judgement, or assessment. 

For example, 

 _Abrasion_ is a description for:

  *     * 8420001 |Abrasion (procedure)|, synonym Abrasion
    * 400061001 |Abrasion (morphologic abnormality)|, preferred term Abrasion
    * 399963005 |Abrasion (disorder)|, preferred term Abrasion

Further examples below illustrate where a duplicate description may be published on separate concepts in different hierarchies, and these are clinically accurate and required to present clinically relevant information. 

Finding vs Procedure

  *     * 365680006 |Finding of 24 hour urine volume (finding)|

Synonym - 24 hour urine volume

  *     * 271068005 |24 hour urine sample volume measurement (procedure)|

Synonym - 24 hour urine volume

Qualifier Value vs Procedure

  *     * 708056006 |Acid fast stain technique (qualifier value)|

Preferred term - Acid fast stain

  *     * 67122001 |Acid fast stain method (procedure)|

Synonym - Acid fast stain

Substance vs Procedure

  *     * 17693003 |Acriflavine stain (substance)|

Preferred term - Acriflavine stain

  *     * 406805004 |Acriflavine stain method (procedure)|

Synonym - Acriflavine stain

Disposition vs Substance

  *     * 734785000 |Activated coagulation factor (disposition)|

Preferred term - Activated coagulation factor

  *     * 116188009 |Activated coagulation factor (substance)|

Preferred term - Activated coagulation factor

Observable entity vs Procedure

  *     * 446841001 |Ankle brachial pressure index (observable entity)|

Preferred term - Ankle brachial pressure index

  *     * 401221002 |Ankle brachial pressure index (procedure)|

Preferred term - Ankle brachial pressure index

Where the case significance is deliberately different for descriptions across one or more concept(s), these differences may be included for clinical relevance and are not duplicate descriptions. 

For example,

  *     * 59990008 |Mucopolysaccharidosis III-B (disorder)|

Synonym - Alpha-N-acetylglucosaminidase deficiency [cI]

Synonym - alpha-N-acetylglucosaminidase deficiency [CS]

When creating a duplicate description for concepts in two separate hierarchies, it is important to check that the descriptions are truly synonymous with the FSN. There may be cases where an additional word(s) may remove the duplication and reduce the risk of adding a broader or narrower description than the FSN. Where it is not possible to do this, it is acceptable for these duplicate descriptions to coexist across different hierarchies.
