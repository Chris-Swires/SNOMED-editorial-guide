# General Naming Conventions

In addition to the general naming conventions below, please also see any applicable naming conventions for specific hierarchies in their respective [domain](https://confluence.ihtsdotools.org/display/WIPEG/Domain+Specific+Modeling).

Generally, names should:

  * Be consistent and reproducible
  * Follow natural or human language when possible
  * Be unambiguous to users
  * Be clear for translation purposes

Naming conventions should not be based on word order preferences (e.g. to facilitate search or display). Creating multiple word order variants for these purposes is outside the scope of the International Release of SNOMED CT _._

SNOMED CT relies on the rules for _usefulness_ to avoid excessive pre-coordination (see _[Scope](?section=scope#scope)_).

Approved pre-coordination naming patterns have been created and are available at [Pre-coordination Naming Patterns Project](https://confluence.ihtsdotools.org/display/IHTSDO1/Pre-coordination+Naming+Patterns+Project).

## Articles

Descriptions should not include articles such as  _a,_  _an,_ and  _the_. There are legacy descriptions that contain articles such as _the_ that will be corrected over time.

For example,

  *     * Use description of _Neoplasm of respiratory tract (disorder)_ , not _Neoplasm of the respiratory tract (disorder)_
    * Use description of _Rupture of diaphragm (disorder)_ , not _Rupture of the diaphragm (disorder)_

##  Abbreviations and acronyms  

Abbreviations are shortened forms of words or phrases. An acronym is a specific type of abbreviation formed from the initial letters of words and is sometimes pronounced as a word (e.g. AIDS for _Acquired Immunodeficiency Syndrome_ ; NICU for _Neonatal Intensive Care Unit_). Neither abbreviation nor acronym is permitted in a fully specified name (FSN).

For example, 

  *     *  _Sperm_ is a shortened form of the word _spermatozoa_. The proper term of _spermatozoa_ should be used in the FSN, while _sperm_ can be used as a synonym. 

Abbreviations and acronyms are allowed in a preferred term or synonym when followed by the term expansion. If the abbreviation or acronym stands alone (meaning, no additional terms are included; the letters represent the entire meaning of the description without any other text), it is followed by a space, a hyphen, and another space, then the expanded term. The first word after the hyphen should be lower case as per usual capitalization rules.

For example,

  *     * [30549001 |Removal of suture (procedure)|](http://snomed.info/id/30549001) has a synonym of  _ROS - removal of suture_

  *     * 24526004 |Inflammatory bowel disease (disorder)| has a synonym of _IBD - inflammatory bowel disease_

If the abbreviation or acronym forms only part of the description's meaning, it is followed by a space, then the expanded term in parentheses. The first word in the parentheses should be lower case as per usual capitalization rules.

For example, 

  *     * [140031000119103 |Acute nontraumatic kidney injury (disorder)|](http://snomed.info/id/140031000119103) has a synonym of  _Nontraumatic AKI (acute kidney injury)_

###  Exceptions

Official names of organism, which is represented as organism preferred term, may include abbreviations. The abbreviations do not need to be accompanied by the fully expanded term.

  *     * For example,
      * 448945001 |Campylobacter lari subspecies lari (organism)| has a synonym of Campylobacter lari subsp. Lari

Abbreviated organism part names are allowed in a preferred term (and other synonyms). The abbreviations do not need to be accompanied by the fully expanded term

  *     * For example,
      * 24771000087106 |Antigen of Streptococcus pneumoniae Danish serotype 1 capsular polysaccharide conjugated to Corynebacterium diphtheriae cross-reacting material 197 protein (substance)| has a synonym |Streptococcus pneumoniae Danish serotype 1 capsular polysaccharide antigen conjugated to Corynebacterium diphtheriae CRM197 protein| that includes CRM197 which is the abbreviated form for cross-reacting material.

The preferred term for allergen components in the Substance hierarchy follows the rules established by the World Health Organization/ International Union of Immunological Societies Nomenclature Sub Committee: allergen names consist of the first three letters from the genus, one letter from the species epithet, followed by an Arabic numeral. e.g. 1157148000 |Arachis hypogaea 2 protein (substance)| has a preferred term of "Ara h 2".

An acronym is allowed in an FSN when it has become a word in its own right, i.e. included in dictionaries; understood without expansion to its original full form.

For example, 

  *     * Concept [ 122456005 | Laser device (physical object)|](http://snomed.info/id/122456005 "122456005 | Laser device \(physical object\) |") uses the term "laser", which originated as an acronym for "light amplification by stimulated emission of radiation"  

The preferred term for imaging procedures involving imaging modalities commonly referred to by an acronym (such as CT, MRI, SPECT, PET) omits the expanded term after the acronym.

For example,

  *     *       * |CT of head| is the preferred term for [ 303653007 | Computed tomography of head (procedure)|](http://snomed.info/id/303653007 "303653007 | Computed tomography of head \(procedure\) |")

Acronyms in rare and genetic diseases have been included for the concepts as part of the Orphanet project that do not include expansion of the abbreviation, as some of the diseases are commonly known by the acronym.

For example,  

GLOW syndrome is a synonym of 782722002 |Global developmental delay, lung cysts, overgrowth, Wilms tumor syndrome (disorder)|. Although the FSN and other descriptions have full expansions, there is a description included for |GLOW syndrome|, which does not further delineate the GLOW acronym.

Second example,  
BRESEK syndrome is a synonym of 717945001 |Brain anomaly, severe mental retardation, ectodermal dysplasia, skeletal deformity, ear anomaly, kidney dysplasia syndrome (disorder)|. Although the FSN and other descriptions have full expansions, there is a description included for |BRESEK syndrome|, which does not further delineate the BRESEK acronym.

Based on recommendation by the International Protein Nomenclature Guidelines, an abbreviation may be part of a protein name:

  *     * For example, 1222711007 |ALK tyrosine kinase receptor (substance)| where ALK stands for Anaplastic lymphoma kinase 
    * For example, 1222739008 |DNA mismatch repair protein Msh6 (substance)| where DNA stands for deoxyribonucleic acid

Msh6 in "DNA mismatch repair protein Msh6 (substance)" is a protein symbol standing for "mutS homolog 6" protein. Gene and Protein symbols are short identifiers, typically 3 to 8 characters, that are usually created by contraction or acronymic abbreviation. They are pseudo-acronyms, in the sense that they are complete identifiers or short names. They are considered synonymous with (rather than standing for) the gene/protein name (or any of its aliases), regardless of whether the initial letters "match". Gene and protein symbols maybe part of protein name:

  * For example, 1229847004 |Ubiquitin carboxyl-terminal hydrolase BAP1 (substance)|

  

## Eponyms

Eponyms are names that are derived from proper names (usually the person who made the discovery or created the original description). It is neither desirable nor possible, to completely avoid using eponyms in a medical terminology. They are found in many areas of medical terminology, including anatomic structures, morphologic abnormalities, diseases, findings, and procedures (e.g. Rutherford Morison's pouch, vein of Galen, Aschoff body, Kell blood group, Down syndrome, Moro reflex, and Whipple procedure).

Fully specified names (FSN) should be full descriptions, whereas synonyms may be eponymous terms.

For example, 

  *     * Structure of great cerebral vein (body structure) has the synonym Vein of Galen
    * Complete trisomy 21 syndrome (disorder) has the synonym Down syndrome  

    * Pancreaticoduodenectomy (procedure) has the synonym Whipple procedure

Eponymous descriptions should not include an apostrophe or final  _s_ , unless the name normally ends in  _s_. 

For example,

  *     * Down syndrome, a synonym for Complete trisomy 21 syndrome (disorder)
    * Meigs syndrome (disorder)

When common usage requires it, there should be at least one description that has the apostrophe  _s_. For descriptions with a possessive apostrophe where the name normally ends in  _s_ , the apostrophe should follow the  _s_.

For example,

  *     * Alzheimer's disease (disorder)
    * Bowen's disease (disorder)
    * Meigs' syndrome (disorder)

It is permitted and encouraged to include eponyms as descriptions (non-FSN descriptions) whenever they are understandable, reproducible, and useful in a given context.

### Exceptions

Exceptions require careful consideration since eponyms meanings may change over time. They are allowed when:

  *     * The full description is exceptionally long and unwieldy (e.g. Hemi-Fontan operation (procedure) instead of  _bidirectional Glenn shunt with end-to-side anastomosis of proximal superior vena cava to right pulmonary artery with isolation from right atrium)_. 
    * The eponym is the only precise, clinically relevant name available.
    * A non-eponymous name would necessarily be vague or subject to misinterpretation (e.g. Hodgkin lymphoma, Burkitt lymphoma).
    * A brand name has become an eponym. In this case, some brand names have come to stand for a category of product and not the particular brand itself (examples in US English: Kleenex, Band-Aid, Popsicle, Dacron and Teflon). 
      * These  _proprietary_ eponyms may be included in the International Release as descriptions (non-FSN descriptions) if they meet the criteria for international inclusion.
      * They should follow the same rules as other eponyms. Whenever possible, they should not be included in FSNs (e.g. plastic adhesive bandage strip for Band-Aid).

## Preferred prepositions

When constructing an FSN, the preposition 'of' is preferred over using the preposition 'in' to describe the morphology of an anatomic structure.

For example,

  * _Cyst of scalp_ should be used for the FSN and not  _Cyst in scalp_ because the latter may indicate a morphology within a layer of the structure, whereas 'of' indicates the morphology is within the region of the anatomic structure.

## Foundation hierarchies (body structure, substance, or organism) referenced in other hierarchy descriptions

When creating the descriptions for a concept (e.g. a disorder concept) that name an entity such as a body structure, substance or organism, the conventions that are applied for naming the entity in the source hierarchy should be used.

For example,

  *     * [ 11218009 | Infection caused by Pseudomonas aeruginosa (disorder)|](http://snomed.info/id/11218009 "11218009 | Infection caused by Pseudomonas aeruginosa \(disorder\) |")   

This concept references the organism hierarchy in the causative agent of 52499004 |Pseudomonas aeruginosa (organism)| and uses that description in the FSN.

  *     * 143491000146106 |Felis catus protein (substance)|

448169003 |Felis catus (organism)| has a preferred term of “Domestic cat”. As a result a related concept in the Substance hierarchy, 143491000146106 |Felis catus protein (substance)| has a preferred term of “Domestic cat protein”.

  *     * [ 337311000119101 | Blepharochalasis of left upper eyelid (disorder)|](http://snomed.info/id/337311000119101 "337311000119101 | Blepharochalasis of left upper eyelid \(disorder\) |")

This concept references the body structure hierarchy in the finding site of |Structure of left upper eyelid (body structure)| and uses "left upper eyelid" in the FSN. 

  *     * [ 126885006 | Neoplasm of urinary bladder (disorder)|](http://snomed.info/id/126885006 "126885006 | Neoplasm of urinary bladder \(disorder\) |")

This concept references the body structure hierarchy in the finding site of 89837001 |Urinary bladder structure (body structure)| and uses "urinary bladder" in the FSN and PT. 

The term _bladder_ must be include _urinary_ to distinguish from gallbladder in order to aid in translation. _Urinary bladder_ must be used in both the fully specified name and preferred term. 

The descriptions should be context neutral for these foundation hierarchies. Where context is explicit for a disease or procedure, the preferred term from foundation hierarchies can be used instead. For example, procedure _CT of abdomen_ indicates that the context of CT imaging is cross-sectional. The procedure site should be modeled with the cross-sectional abdomen. However, it is not necessary to change 'Computed tomography of abdomen (procedure)' to 'Computed tomography of cross-sectional abdomen (procedure)'. It is the same reason for the preferred term 'CT of abdomen'.

### Exceptions 

  * Where an infection caused by a microorganism has a common name, the common name of the disease can be used in the preferred term if accompanied by the explicitly-stated organism. 
  * If a common name is shared between more than one organism, the organism preferred term may include the scientific name with annotated common name. Generally, a hyphen is used to separate the two names. However, if the organism name falls in the middle of the term, parentheses should be used to separate the two names.
  * When defining concepts in other hierarchies by referring to an organism, the taxonomical rank of the organism should not be included in the FSN or synonyms.
    * For example, 
      * Instead of |Gingivitis caused by Genus Candida (disorder)|, drop the taxonomical rank of Genus, as in |Gingivitis caused by Candida (disorder)|.
  * There are instances where the requested term for a concept containing an organism common name doesn’t correspond to specific taxa. Rather, the term is found as part of common names in multiple taxa belonging to a higher level taxon. For example, “parakeet” and “parrot” are not common names to any specific taxa, but are found as part of common names in multiple genera in 447329007 |Subfamily Psittacinae (organism)|. To avoid ambiguity, a grouper concept referring to high-level taxon should be created.
    * For example, In the Substance hierarchy, a grouper concept, 1149419004 |Psittacidae protein (substance)|, was created as a parent concept to the following two concepts:
      * 146711000146102 |Parakeet protein (substance)|
      * 146701000146104 |Parrot protein (substance)|

Outside of the body structure hierarchy, concepts should not include the words  _structure_ or _structure of_ in the concept descriptions.

For example, 

  *     * For the body structure concept, [266005 |Structure of lower lobe of right lung (body structure)|](http://snomed.info/id/266005), a disorder concept with this body structure is [724056005 |Malignant neoplasm of lower lobe of right lung (disorder)|](http://snomed.info/id/724056005).
    * For the body structure concept, [266005 |Structure of lower lobe of right lung (body structure)|](http://snomed.info/id/266005), a procedure with this body structure is [726425007 |Lobectomy of lower lobe of right lung (procedure)|](http://snomed.info/id/726425007).

## Description Length Limitations

In the rare event that the 255-character limit of the fully specified name is reached, standard naming conventions may be circumvented in order to adhere to the 255-term string limit. 

For example, the use of commas may be used instead of the word “and”. 

Considerations can include language nuances, content use case, etc. The decision on which standard naming conventions to circumvent will depend on the circumstances. 

  

