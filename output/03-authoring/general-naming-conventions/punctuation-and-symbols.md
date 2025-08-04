# Punctuation and Symbols

_Legacy content may not adhere to current guidelines and will be updated as resources allow.  
_

##  Comma ( , )

A comma is allowed in an FSN when required for meaning or to add clarity.

For example,

  *     * Computed tomography of head, neck, abdomen and pelvis (procedure)

A comma is not allowed to change _sort order_ for use in the search function. 

Unacceptable example,

  *     * Frostbite, acute

## Apostrophe ( ' )

Eponymous descriptions should not include an apostrophe or final _s_ , unless the name normally ends in _s_. With rare exception, a concept with an eponym should have at least one description that follows this rule.

For example,

  *     * Down syndrome, a synonym for Complete trisomy 21 syndrome (disorder)
    * Sjogren syndrome (disorder)
    * Meigs syndrome (disorder)

When common usage requires it, there should be at least one description that has the apostrophe _s_. For descriptions with a possessive apostrophe where the name normally ends in _s_ , the apostrophe should follow the _s_.

For example,

  *     * Alzheimer's disease (disorder)
    * Bowen's disease (disorder)
    * Meigs' syndrome (disorder)

Existing eponymous descriptions with the possessive  _s_ , but no apostrophe, need not be inactivated, but newly added descriptions should either have no  _s_ , or else include the apostrophe.

## Prime symbol ( ' )

In protein names, this character (represented by single quote character) is used to indicate the cleavage location on a substrate and to distinguish different subunits with the same notation.

For example, 80222004 |5'-nucleotidase (substance)|

The prime symbol and apostrophe may look the same, but each has its own Unicode representation. 

## Hyphen ( - )

Hyphens should follow rules of style for the dialect and language in which the descriptions are used as found in such publications as the  _Chicago Manual of Style_ , the  _American Medical Association’s Manual of Style_ , a current medical dictionary, etc. Punctuation is to be used sparingly unless used to prevent ambiguity. 

When a hyphen is used to join words or to separate syllables, there is no space either before or after the hyphen. 

For example,

  *     * Anti-infective agent (product)
    * Zollinger-Ellison syndrome (disorder)
    * Zellweger's-like syndrome (disorder)
    * Phospho-2-dehydro-3-deoxygluconate aldolase (substance)
    * Multidrug-resistant bacteria (organism)
    * Pandrug-resistant bacteria (organism)
    * Extended spectrum beta-lactamase-producing bacteria (organism)

A hyphen may be used to separate two phrases, to contrast values, or to show a relationship between two things. A hyphen should rarely be used in an FSN, because it may obscure the exact meaning of the description; the hyphen should be replaced with words that clarify the meaning. 

A hyphen is used to separate an acronym from its expanded form when no other terms are included in a description. 

For example,

  *     * 30549001 |Removal of suture (procedure)| has a synonym of ROS - removal of suture  

[ 719977005 | Communication Activities of Daily Living (assessment scale)|](http://snomed.info/id/719977005 "719977005 | Communication Activities of Daily Living \(assessment scale\) |") has a synonym of CADL - Communication Activities of Daily Living

The hyphen is represented by UTF-8 and can be entered directly by a standard keyboard. Although the hyphen may sometimes be referred to as a _dash_ , the _EN dash_ and _EM dash_ are not used in SNOMED CT. 

## Colon ( : )

In general, colons should not be used in fully specified names.

### Exceptions

Colons are allowed in the FSNs of organisms, substances, or products where the colon is part of the name. They are also allowed in ratios and in tumor stages.

For example,

  *     *       * Salmonella II 43:g,t:[1,5] (organism)
      * Lidocaine hydrochloride 1.5%/epinephrine 1:200,000 injection solution vial (product)
      * pT3: tumor invades adventitia (esophagus) (finding)

Colons may be allowed in non-FSN descriptions. 

For example, to separate an abbreviation from the rest of a name or a specimen from the finding

  *     *       * Urine: turbid (finding)

### Double Colon (::)

A double colon ( :: ) notation is allowed in the neoplastic morphologic abnormalities (400177003 |Neoplasm and/or hamartoma (morphologic abnormality)| subhierarchy). The notation can be used to represent gene fusions; for example, BCR::ABL1 fusion.

## Forward slash ( / )

The forward slash should not be used in FSNs. When the slash is part of the authoritative name (e.g. representation of heterozygosity in hemoglobinopathies), a hyphen (no space before or after) is used in the FSN. The forward slash, without spaces, may be used in a preferred term or synonym.

For example, 

  *     * FSN: Sickle cell-hemoglobin C disease (disorder)
    * SYN: Hemoglobin S/C disease

  *     * FSN: Per cubic millimeter (qualifier value)
    * SYN: /mm3

### Exceptions

A forward slash may be used to represent units of measure, official enzyme names, and laboratory test results. They may also be used in _and/or_ when part of FSNs. There should be no space either before or after the slash.

For example,

  *     *       * Nitroglycerin 0.3mg/hr disc (product)
      * Ibuprofen 5%/Levomenthol 3% gel (product)
      * Milligram/deciliter haptoglobin (qualifier value)
      * Bone structure of head and/or neck (body structure)

A forward slash may be allowed in non-FSN descriptions in a variety of contexts. Some common examples of use are in acronyms with findings, and as an abbreviation meaning _and/or_ concepts.

Protein names may contain the forward slash ‘/’ for separating multiple domains or functions:

For example, 1222712000 |Serine/threonine-protein kinase B-raf (substance)| 

Certain neoplastic variants incorporate a slash in their terming (note this slash does not mean 'and' or 'and/or'). Based on pathology input, a dash can be utilized in the FSN and a slash retained in the Preferred Term for clinical usage.

For example,

  *     *       * FSN: Myelodysplastic-myeloproliferative neoplasm with neutrophilia (disorder)
      * PT: Myelodysplastic/myeloproliferative neoplasm with neutrophilia

## Plus sign ( + )

The plus sign is generally discouraged for use in descriptions, and legacy content still contains this symbol. However, some uses are allowed. Plus signs may be found in the product, disposition, and substance hierarchies. 

For example,

  *     * |H+/K+-exchanging ATPase inhibitor| is an acceptable synonym for [ 734582004 | Hydrogen/potassium adenosine triphosphatase enzyme system inhibitor (disposition)|](http://snomed.info/id/734582004 "734582004 | Hydrogen/potassium adenosine triphosphatase enzyme system inhibitor \(disposition\) |") . 

## Caret symbol ( ^ )

A pair of caret symbols is used to enclose character strings that should display as superscript.

Current guidance for substance and product hierarchies is to not create new instances containing symbols for superscript and subscript.

The single caret is used to represent exponents, i.e._powers of,_ in alignment with the Unified Code for Units of Measure (UCUM) guidance on the use of powers of ten.

For example,

  *     * _10^3_ for the third power of ten

## Pipe character ( | )

A description cannot contain a pipe character, |. Since the | is used to indicate the beginning and end of a description, it may cause confusion.

## Umlaut ( ¨ )

An umlaut should only be accepted for terms that do not have equivalences in English. Synonyms without umlauts should be added to facilitate searching in English.

For example,

  *     * 83901003 |Sjögren's syndrome (disorder)| and one of its synonyms, Sjogrens syndrome

## Brackets ( [ ] ) 

The use of brackets " [ ] " for descriptions are allowed, including in FSN and PT. 

For example,

  * 114819005 |Salmonella II 43:g,t:[1,5] (organism)|
  * 1222745000 |Succinate dehydrogenase [ubiquinone] iron-sulfur subunit, mitochondrial (substance)|

## Other Special Characters ( <, >, &, %, $, @, # )

Other special characters <, >, &, %, $, @, # are not permitted in FSNs. All instances of FSNs with these characters should be spelled out in full text.

For example,

  *     * _FD &C Yellow #2_ should be _FD and C Yellow Number Two_

The characters &, %, and # are permitted in preferred terms or synonyms.

The characters @ and $ are not used in any descriptions.
