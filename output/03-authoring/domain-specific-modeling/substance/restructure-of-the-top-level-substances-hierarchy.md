# Restructure of the top level substances hierarchy

Previously, the substances hierarchy in SNOMED CT was organized using a number of different axes, some of which did not comply with the terminological principle of being always true. This resulted in incorrect inferences both within the substance hierarchy and in other hierarchies where substances were used to define concepts. To avoid this, the substances hierarchy has been organized by characteristics that are always true (e.g., chemical structure). For substances where the structure is unknown or the substance is heterogeneous, other characteristics that are always true should be used as parent concepts within the substances hierarchy.

The current substances top level hierarchy includes a number of grouper concepts that are role- or use case-based. The proposal is to create a substances top level hierarchy as below.

<figure><img src="images/174691412.png" alt="" title=""><figcaption><p>The grouper concepts that are retained as top level substance concepts will need review of their descendants, but ultimately, it should provide a consistent hierarchy.</p></figcaption></figure>

  

There are similarities in the scope of _ISO 11238 Health informatics – Identification of medicinal products – Data Elements and Structures for the Unique Identification and Exchange of Regulated Information on Substances_ __ and the SNOMED CT substances revision, since both consider a substance to be defined by properties such as molecular structure, and not by how it is formulated or used.

IDMP groups substances as being one of five types of single substances:

  * (simple) chemical
  * protein/peptide
  * nucleic acid
  * polymer
  * structurally-diverse

or they are classified as a mixture. 

In IDMP, the definition of a mixture is much broader that would be perceived by clinical users. IDMP defines starches as mixtures, and also compounds, such as isophane insulin and gentamicin sulfate, as mixtures. This broad definition for mixtures would mean that many of the SNOMED CT substances would be classified as mixtures. These IDMP types are not represented in SNOMED CT, since they are not mutually exclusive and are open to some interpretation. The IDMP documentation does provide guidance on the selection of the correct type for a substance but also acknowledges that a single substance may have two separate type definitions. In addition, the use of the word “mixture” in the substances hierarchy is to be discouraged, since as a general scope statement, SNOMED CT does not include combination substances that are a mixture of more than one individual chemical even when the two exhibit a synergistic effect, e.g., tazobactam and piperacillin.

_Changes to SNOMED CT concept model in the future to permit the use of concepts within the products hierarchy to model disorder and findings concepts means that these combined substances concepts will no longer be required, and so, will be inactivated at that time._  

##  Differences between SNOMED CT substances and IDMP Substances

The scope of substances in SNOMED CT is broader than that of IDMP, since the definition of regulated products is not the only use case supported by the SNOMED CT substances hierarchy.

IDMP classes are used to identify which features could/should be identified as defining. This is different from the SNOMED CT requirement to identify top level concepts to support a hierarchy that provides a logical structure for substance concepts.

IDMP makes a distinction between Substance and the more closely defined Specified Substance. Substances are “any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical".

  1. Specified Substances are "defined by groups of elements that describe multi-substance materials or specifies further information on substances relevant to the description of Medicinal Products". 
  2. Specified substances include mixture substances, substances defined by pharmacopoeial specification or substances where a particular manufacturing process is specified.

In order for SNOMED CT to support the IDMP work, whose primary goal is to define unambiguously all substances present in regulated products, it is necessary for both the concepts that are IDMP Substances and those that are IDMP Specified Substances to be present in the SNOMED CT Substance hierarchy. Stereoisomers, hydrates, and solvates are included in the SNOMED CT substances hierarchy as concepts, as well as concepts to represent their base chemical in the SNOMED CT substance hierarchy. Since both IDMP Substances and IDMP Specified Substances are candidate concepts to be used in the ingredient role attributes, it does not add value in the definition of these concepts to separately identify IDMP Substances and IDMP Specified Substances in SNOMED CT and would likely cause confusion where substance concepts are used to define concepts outside the scope of IDMP and the medicinal product hierarchy.

  

  

  

  

