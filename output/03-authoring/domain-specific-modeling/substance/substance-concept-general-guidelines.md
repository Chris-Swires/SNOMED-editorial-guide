# Substance Concept General Guidelines

## Overview

This section of the document provides both general terming and modeling guidance for substance concepts.

## Modeling

Parent concept| <<105590001 |Substance (substance)|  
---|---  
Semantic tag| (substance)  
Definition status| Primitive  
**Attribute:****Is modification of**|  Range <105590001 |Substance (substance)|Cardinality: 0..*  
 **Attribute:****Has disposition**|  Range: <726711005 |Disposition (disposition)| 

  *     * While the allowed range is broader, substance concepts should only use descendants of the concept 726711005 |Disposition (disposition) as the attribute value.

Cardinality: 0..*  
  
## Naming

General Naming Guidelines  
Descriptions should be singular, not plural.

  * Exception: Fumes should be expressed in the plural (i.e. _fumes_ as opposed to _fume_).

  
Descriptions should not include additional descriptors that reference a use case.For example,

  *     *       * Non-pharmaceutical

  
Some regulatory agencies may use prefixes or suffixes to distinguish between different manufacturers of a single substance but these are not used in SNOMED CT; the INN name is used.For example,

  *     *       * The FDA uses "ado-trastuzumab"; the INN for this substance is "trastuzumab". The INN is reflected as the US and GB names in SNOMED CT International Release, because the prefix represents a specific manufacturer's product.
      * The FDA uses "emicizumab-kxwh" and "vestronidase alfa-vjbk"; the INN for these substances are "emicizumab" and "vestronidase alfa". The INN is reflected as the US and GB names in SNOMED CT International Release, because the suffix represents a specific manufacturer's product.

  
Substance concepts should not include a strength.  
Substance concepts should not include a dose form or use case.

  * Exception: Substances that do not have stain as part of their approved name but are used as stains and are subtypes of 397165007 |Stain (substance)|

For example,

  *     *       * 25351006 |Fluorescein sodium stain (substance)|

  
The FSN is aligned with the INN; the Preferred Terms are aligned with USAN and BAN (BAN almost always aligns with the INN). The Preferred Term in the US dialect variation must be given the acceptability of Acceptable (A) in the GB dialect and vice versa.  
For isomers, the INN names use the expanded prefix, e.g. levo or dextro, and so should be used for the FSN and Preferred Term.  
Changes to descriptions allocated to existing substance concepts may impact the terming of medicinal product concepts and so should be undertaken with caution.  
Based on recommendation by the International Protein Nomenclature Guidelines:

  * Usage of the term 'protein' in a protein name should be avoided if not necessary, especially when the name includes terms such as "factor", "enzyme", "inhibitor", or "regulator".
  * Enzyme names commonly end with 'ase' (aminoacylase, arginase, etc.). The term ‘protein’ should not be appended to the enzyme names.

  
For case sensitivity assignment:

  * Greek alphabetical terms in substance concepts have been made case insensitive.
  * For substance terms that have a single letter, either a single lower case letter or a single upper case letter, the case sensitivity should reflect either CS if the single capital letter or single lower case letter is at the beginning of the term, or cI if the single capital letter or single lower case letter is contained within an otherwise case insensitive term.
  * Proper names in substance terms should begin with a capital letter.
  * Numeric numbers in substance terms should be ignored for case significance. Simply, they will not be displayed differently if switched between upper and lower case. The case sensitivity decision should be based on the remaining letters and words in the term. When modeling terms, the word following the numbers does not begin with a capital letter, e.g. correct terming is 5-hydroxytryptamine (ci) and not 5-Hydroxytryptamine, and the substance abbreviated to '5-HT' is CS not cI.

