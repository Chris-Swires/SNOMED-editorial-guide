# Antibodies and antigens

## Overview 

This section includes concepts that represent Antigen of X organism, Antibody to X organism and Immunoglobulin G, M, A, E, D antibody to X organism.

  * When referring to an organism name, while the Linnean taxon ranks (such as "genus") are not included, the subspecies variants (such as "biotype" and "serotype") are included in the naming. This is to avoid ambiguity when the same number or letter is used to refer to different organism variants. For example, without mentioning the specific variant (serogroup vs. serotype) and the nomenclature system (Danish vs. American), "Streptococcus pneumoniae 48" can refer to the following:
    * Streptococcus pneumoniae Danish serotype 48 (which is equivalent to Streptococcus pneumoniae American serotype 82)  

    * Streptococcus pneumoniae American serotype 48 (which is equivalent to Streptococcus pneumoniae Danish serotype 7B)
    * Streptococcus pneumoniae serogroup 48

  

## Modeling - Antigen of X organism

Parent concept| Most distal appropriate descendant of 116633006 |Microbial antigen (substance)|  
---|---  
Semantic tag| (substance)  
Definition status| Primitive  
Attribute| N/A  
  
## Naming Guidelines - Antigen of X organism

The antigen name is usually derived from the biological name of the organism as opposed to the “disease” or “infection” that the organism may cause and/or that the vaccine may provide immunization for.  

FSN| Pattern:

  * Antigen of X organism (substance)

For example,

  *     *       * Antigen of Filaria (substance)
      * Antigen of Alternaria alternata protein (substance)

  
---|---  
Preferred Term| Pattern:

  * X organism antigen

For example,

  *     *       * Filaria antigen
      * Alternaria alternata protein antigen

Exception:

  * Preferred term for Antigen of live attenuated Mycobacterium bovis: Bacillus Calmette-Guerin antigen

  
Synonyms| Pattern: A synonym that matches FSNFor example,

  *     *       * Antigen of Filaria
      * Antigen of Alternaria alternata protein

  
Pattern: X organism AgFor example,

  *     *       * Filaria Ag
      * Alternaria alternata protein Ag

  
Other

  * "X organism inactivated toxin" for concepts referring to "X organism toxoid (substance)"
  * Additional synonyms (e.g. when a legitimate synonyms exist for Organism name) are applicable and are evaluated on case-by-case basis.

  
  
  

## Antigen variants:

There is a requirement for the inclusion of characteristic technologies that are essential for distinguishing between different antigen variants that are used in manufacturing vaccine products e.g live attenuated, inactivated, or subunit antigens. Antigen variants are evaluated for:

  * References such as WHO, CDC, UpToDate, vaccine package inserts.
  * Inclusion in the international release vs. national extensions
  * Hierarchy they belong to: Substance or Product. 

### Variants reviewed to date:

“Antigen of X” is in scope for the international release and is modeled in the Substance hierarchy. It is a generic grouper concept and subsumes all instances of antigen variants related to Organism X. 

  *     * X refers to a bacteria, virus, fungus, or parasite except when antigen refers to the organism “toxin/toxoid”, where it can only apply to a bacteria. 

“Antigen of live attenuated X” is in scope for the international release and is modeled in the Substance hierarchy as a direct child of Antigen of X.

  *     * It refers to attenuated whole cell bacteria or whole virus where the strains are made less virulent so infection is usually inapparent or very mild. It may be used in the creation of vaccine products for certain patient groups and hence is of clinical significance. 
    * The following subtypes are also in scope for the international release and are modeled in the Substance hierarchy as direct children of Antigen of live attenuated X. Note that in the following examples "human" and "bovine" refer to source organisms which are differentiated from the organism producing antigen i.e. Rotavirus.
      * “Live attenuated human X” e.g. Antigen of live attenuated human Rotavirus serotype G1P[8]
      * “Live attenuated human-bovine reassortant X” e.g Antigen of live attenuated human-bovine reassortant Rotavirus serotype G1 

“Antigen of whole inactivated X” is in scope for the international release and is modeled in the Substance hierarchy as a direct child of Antigen of X. 

  *     * It refers to the killed version of the organism that causes a disease. 
    * As of the July 2020 release, the word "whole" is added to all new and existing concepts referring to "Antigen of inactivated X" to further clarify the differentiation between "Antigen of whole inactivated organism" (referring to a killed organism as a whole) and "Antigen of organism [subunit]" (referring to subparts of an organism).

“Antigen of acellular X” is in scope for the international release and is modeled in the Substance hierarchy as the direct child of "Antigen of X".   

  *     * "Antigen of acellular X", when it exists, can only apply to a bacteria.

“Antigen of X [subunit]” is in scope for the international release and is modeled in the Substance hierarchy as the direct child of “Antigen of X”.

  *     * Subunit antigens differ from inactivated whole-cell antigens by referring only to the antigenic parts of the pathogen. These parts are necessary to elicit a protective immune response. The word “inactivated” does not need to be part of the name unless it is referring to a whole cell or a whole virus i.e for descriptions referring to a subunit, the word “inactivated” will be omitted as redundant.
    * [Subunit] refers to a sub-part of an organism i.e. a specific, isolated protein of the pathogen, a recombinant protein (made by recombinant DNA techniques), an inactivated toxin (toxoid), or a capsular polysaccharide/oligosaccharide coating of an encapsulated bacterium:
      * "Antigen of X [protein/recombinant protein]" is in scope for the international release and is modeled in the Substance hierarchy. 
        * It represents a specific, isolated protein of the pathogen or a recombinant protein.
        * When both "Antigen of X [protein]" and "Antigen of X [recombinant protein]" exist for X organism, they are modelled as siblings.
      * “Antigen of X capsular polysaccharide/oligosaccharide" is in scope for the international release and is modeled in the Substance hierarchy. 
        * It represents a polysaccharide/oligosaccharide antigen and acts as a grouper for the following:  

          * "Antigen of X capsular polysaccharide/oligosaccharide unconjugated”, which represents a polysaccharide/oligosaccharide antigen without conjugation to any carrier protein or toxoid
          * “Antigen of X capsular polysaccharide/oligosaccharide conjugated”, represents a grouper concept and will be created in the international release and in the Substance hierarchy per request and (based on current ED guidelines) only if it has more than one child concept.
            * Exception can apply if there is a use case that support retaining/creating these conjugate groupers:
              * Recording the history of a conjugated vaccine when the type of conjugated protein is not known
              * Aggregating data for forecasting
            * The existing grouper concepts with just one child will not be deprecated at this time. However, requests for addition of these concepts will be rejected.
          * “Antigen of X capsular polysaccharide/oligosaccharide conjugated to Y”, which represents an oligosaccharide or polysaccharide antigen attached to a protein Y, where “Y” refers to a carrier protein to increase efficacy and immunogenicity e.g. Corynebacterium diphtheriae cross-reacting material 197 protein.  

            * It is the direct child of single parent "Antigen of X capsular polysaccharide/oligosaccharide conjugated". There are no clinical use-case that requires association to the conjugated part of antigen as an additional parent. This classification is in line with all other similar concepts (modifications such as pegylated substances).
      * “Antigen of X toxoid” is in scope for the international release and is modeled in the Substance hierarchy. 
        * Like other subunit antigens, “Antigen of X toxoid” is classified under "Antigen of X". While the toxin is not an intrinsic part of the organism, it is a product of the organism that would not exist in the absence of that organism. In other words, there is always a direct association between the substance and the source organism. There are other antigenic proteins that are generated by the organism (e.g. surface protein) and they are classified as children of "Antigen X organism". The only difference, in comparison to toxoids, is that they are not being excreted by the organism.
        * Toxoid antigens are based on the toxin produced by certain bacteria (e.g. tetanus or diphtheria), which has been chemically processed so that it is still immunogenic. Once the toxin has been inactivated, it is called a toxoid.
        * A toxoid can be an antigen in its own right, or it can be conjugated to another antigen.
    * When referring to Organism parts/subunits:
      * Referring to more than one subunit (e.g. combined protein such as Bordetella pertussis FIM 2 and FIM 3 antigen) would not be acceptable for the Substance hierarchy i.e. the combined protein needs to be modelled at the product level with more than one active ingredient.  

      * Abbreviated organism subunit names such as "Corynebacterium diphtheriae _**CRM197**_**** protein", are not allowed in a fully specified name (and similar synonym). The FSN and similar synonym should only include the spelled-out terms i.e. "Corynebacterium diphtheriae cross-reacting material 197 protein".
      * Abbreviated organism part names are allowed in a preferred term (and other synonyms). The abbreviations do not need to be accompanied by the fully expanded term, which is an exception to the general naming guidelines on abbreviations and acronyms in the SNOMED CT Editorial Guide. e.g the following PT includes CRM which is the abbreviated form for cross-reacting material.
        * Streptococcus pneumoniae Danish serotype 1 capsular polysaccharide antigen conjugated to Corynebacterium diphtheriae CRM197 protein

Inclusion of Vaccine manufacturing techniques and/or residuals in antigen names is generally out of scope for the international release. However, exceptions can be made for applicable use-cases. 

  *     * "Antigen of X  _grown in nervous tissue_ " or "Antigen of X  _grown in cellular line_ " is acceptable for inactivated Rabies antigens grown in brain tissue or cell lines and is included in the international release, considering the difference in the adverse reactions that they cause. If and when created:
      * "Antigen of X grown in cellular line" will be a grouper and other subgroups will be added as needed, e.g. "grown in Human diploid cell".
      * "Antigen of X grown in nervous tissue" should indicate the specific type of nervous tissue e.g. brain.
    * "Split virion" and "surface subunit" is acceptable when the proposed granular antigen is used in a real Clinical Drug, e.g. Influenza antigens.
      * For influenza strains, the candidate vaccine virus (CVV) is not included in the antigen name in the international release. The justification is that each pharmaceutical company may use a different CVV to manufacture their product, or they may omit that level of detail in their product information. However, each of the recommended "parent strain + CVV" are antigenically like the parent virus.
    * "Antigen of X adsorbed" is in scope for the international release and is modeled in the Substance hierarchy. It is not required to specify details regarding what is adsorbed with as there is no known use-case at this point.
    * With the exception of conjugated proteins/toxoids that are in scope for the international release, inclusion of other adjuvants as well as delivery mechanisms (e.g. Aluminum Salts, Oil-in-Water Emulsions, Virosomes) is currently on hold and will be considered if and when associated requests and uses cases are presented.
    * "Purified" will not be included in antigen names as the clinical value of stating "Purified antigen" is not clear. In addition, in some cases, it is implied that an antigen is purified based on the preparation technique. This inconsistency in naming (stated vs. implied) can lead to misclassification. If needed, it can be accomplished by using groupers or other modeling considerations in future. But for now, adding a maintenance burden with very limited benefit does not seem valuable.
    * Inclusion of non-antigenic vaccine ingredients such as preservatives and stabilizers is out of scope for the international release.
    * For “Antigen of whole inactivated X”, the inactivation technique (e.g. heat inactivated, formalin inactivated) is out of scope for antigens in the International Release.

### The classification of the antigen variants in the Substance hierarchy:  

  * Antigen of X 

    * Antigen of live attenuated X

    * Antigen of inactivated whole X

    * Antigen of acellular X

    * Antigen of X [protein/recombinant protein]

    * Antigen of X toxoid

    * Antigen of X polysaccharide/oligosaccharide 

      * Antigen of X polysaccharide/oligosaccharide unconjugated

      * Antigen of X polysaccharide/oligosaccharide conjugated

        * Antigen of X polysaccharide/oligosaccharide antigen conjugated to Y

### Exemplar

The following illustrates the **stated** and **inferred** view:  

<figure><img src="images/174691548.png" alt="" title=""></figure>

  

  

## Modeling - **** Antibody to X organism

Parent concept| Most distal appropriate descendant of |116642004 |Antimicrobial antibody (substance)|  
---|---  
Semantic tag| (substance)  
Definition status| Primitive  
**Attribute**|  None  
  
  

### Naming Guidelines - **** Antibody to X organism

**FSN**|  Pattern:

  * Antibody to X organism (substance)

For example,

  *     *       * Antibody to Bebaru virus (substance)

  
---|---  
**Preferred Term**|  Pattern:

  * X organism antibody

For example,

  *     *       * Bebaru virus antibody

  
**Synonyms**|  Pattern: A synonym that matches FSNFor example,

  *     *       * Antibody to Bebaru virus

  
Pattern: X organism AbFor example,

  *     *       * Bebaru virus Ab

  
  
  * Additional synonyms (e.g. when a legitimate synonyms exist for Organism name) are applicable.

  
  
  

### Exemplar

The following illustrates the **stated** and **inferred** view:

<figure><img src="images/174691551.png" alt="" title=""><figcaption><p>****</p></figcaption></figure>

## Modeling -  Immunoglobulin G, M, A, E, D antibody to X organism

Parent concept| Most distal appropriate descendant of 70095009 |Immunoglobulin isotype (substance)| and |Antibody to X organism (substance)| if in SNOMED CT  
---|---  
Semantic tag| (substance)  
Definition status| Primitive  
**Attribute**|  None  
  
  

### Naming Guidelines \-  Immunoglobulin G, M, A, E, D antibody to X organism

FSN| Pattern: Immunoglobulin G, M, A, E, D antibody to X organism (substance)For example,

  *     *       * Immunoglobulin M antibody to Clostridium difficile (substance)

  
---|---  
Preferred Term| Pattern: X organism IgG, M, A, E, DFor example,

  *     *       * Clostridium difficile IgM

  
Synonyms| Pattern: A synonym that matches FSNFor example,

  *     *       * Immunoglobulin M antibody to Clostridium difficile

  
Pattern: Anti-X organism IgMFor example,

  *     *       * Anti-Clostridium difficile IgM

  
  
  * Additional synonyms (e.g. when a legitimate synonyms exist for Organism name) are applicable.

  
  
Exemplar

The following illustrates the **stated** and **inferred** view:

<figure><img src="images/174691547.png" alt="" title=""></figure>

<figure><img src="images/174691546.png" alt="" title=""></figure>
