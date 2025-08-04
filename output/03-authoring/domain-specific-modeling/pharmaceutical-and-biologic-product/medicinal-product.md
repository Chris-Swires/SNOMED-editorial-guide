# Medicinal Product

An abstract representation of a medicinal product without reference to its dose form or its strength. 

This group of concepts has three types, of which is the parent is the "MP containing", with the "MP only" and the optional "MP precisely". The grouper 763158003 |Medicinal product (product)|, a stated descendant of |Pharmaceutical / biologic product (product)|, was created to support top-level hierarchy changes in the future but avoids removing, renaming, or repurposing the existing |Pharmaceutical / biologic product (product)| concept. 

## General Assumptions and Requirements

Assumption or Requirement  
The top level concepts in the hierarchy will primarily be sufficiently defined grouper concepts.  
  
Any requirement to align to external standards or registries will be explicitly documented. Concept model will be compatible with ISO's Identification of Medicinal Products __(IDMP) standards (where appropriate).  
Concepts shall be sufficiently defined using proximal primitive modeling methodology unless explicitly noted as an exception in the editorial guidelines.  
Concept model supports neither universal restrictions nor nesting.  
Content in the |Medicinal product| hierarchy in the International Release is not intended to:

  * support prescribing use cases, but may be sufficient to do so for some implementations.
  * eliminate the need for a national extension.

  
  
## Out of Scope

  * Age ranges (e.g., adult, pediatric, infant, junior, adolescent)
    * _Exception: Vaccine products MP-only concepts maybe modeled with Has target population (attribute) that specifies a target population._
  * Adjuvants
  * Allergy immunotherapy products
    *  _Should be represented in a national extension because of the manufacturer-specific variability regarding standardization and expression of strength._
  * Ayurvedic medicine
  * Brand names
  * Color (e.g., color of tablet, capsule, or solution)
  * Composite products
  * Excipients
  * Flavors
  * Investigational products/Products under development but not marketed in any member country
    *  _Exceptions may be made on a case-by-case basis (e.g., adding investigational products that are being widely used in pandemic)._
  * Medicinal product (MP) and Medicinal product form (MPF) concepts without Clinical drug (CD) descendants
    *  _There are historical concepts that do not have descendant CDs; this is not a pattern that will continue moving forward (e.g., MPs and MPFs are not created unless needed to support classification of a CD)._
  * Packs
  * Products intended only for non-human use
  * Products no longer marketed or available for sale
    *  _Existing concepts representing products that are no longer marketed or available for sale will be retained as active concepts in the International Release. _ _Requests for new content will be considered for inclusion on a case-by-case basis._
  * Relevant omissions (e.g., sugar-free, preservative-free)
  * Routes of administration not explicitly represented
  * Sterility
  * Tall man lettering
    *  _Descriptions that include tall man lettering [partial capitalization of drug names to distinguish from similar sounding drugs] should be authored in a national or local extension._
  * Traditional medicine products

  

