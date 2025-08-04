# Organism Naming Conventions

## Fully Specified Name

The fully specified name (FSN) of organism concepts, names classes that are officially recognized Linnaean taxonomic classes (other than species), and include a designation of _rank_. They include, but are not limited to Phylum, Order, Suborder, Class, Family, Genus, and subspecies. 

Properly constructed FSNs contain terms indicating the taxonomic rank + the recognized name of that rank + semantic tag.

For example,

  *     * [ 106544002 | Family Enterobacteriaceae (organism)|](http://snomed.info/id/106544002 "106544002 | Family Enterobacteriaceae \(organism\) |")

The naming convention is not applied to concepts that only refer to a subgroup of a rank.

For example,

  *     * Vancomycin resistant Enterococcus (organism) is correct in capitalizing Enterococcus. It refers to a subclass of the genus, Enterococcus species that are resistant. Enterococcus is a scientific name of an organism class; therefore, the first letter is capitalized. 

  *     *  _Vancomycin resistant Genus Enterococcus_ is incorrect. It refers to the rank only, Genus Enterococcus.

Official names of organisms may include abbreviations such as “subsp.” and “subgen.” (Domain Bacteria and Kingdom Plantae). Official names of organisms may also include parentheses e.g. “Cypraea (Cypraea) tigris” (Kingdom Animalia) and “Bacillus (subgen. Bacillus Cohn 1872, 174) subtilis” (Domain Bacteria). 

  * The FSN of organisms should include the expanded word for rank i.e. “subgenus” or “subspecies” and not an abbreviation of same. 

  * The FSN should not include parentheses.

For example,

  *     * Genus Pleione subgenus Scopulorum (organism)
    * Genus Cypraea subgenus Cypraea tigris (organism)
    * Staphylococcus succinus subspecies casei (organism)

When the same Scientific Name is used in two different hierarchies (two different kinds of organisms), use the Scientific Name with annotated common name as FSN and PT to prevent confusion. A dash may be used to separate the two names. Use the common name from the authoritative source. If a common name is not listed in the authoritative source, use the NCBI BLAST name as common name in the FSN and PT. If a common name is not in either the authoritative source or in the NCBI BLAST names, consult the literature or other resources for a distinguishing name to use in the FSN and PT. Synonyms containing official scientific name (with or without taxonomic rank designation) will not be added for these concepts to avoid ambiguity and prevent duplication of the names.

For example,

  *     * The genus of bacteria Edwardsiella does not have a common name listed in the authoritative source. Therefore, use the NCBI BLAST name "enterobacteria" in the FSN. For the genus of animals Edwardsiella, use the common name "sea anemones" from the authoritative source.
      * 14566004 |Genus Edwardsiella - enterobacteria (organism)|
      * 1351899003 |Genus Edwardsiella - sea anemones (organism)|

A description matching the FSN is used as PT.

Synonyms such as "Genus Edwardsiella" or "Edwardsiella" are not added as acceptable descriptions to any of the concepts.

## Preferred Term

The Preferred Term is the official scientific name. It may include abbreviations and/or parentheses. The preferred term usually does not include the taxonomic rank designation except for the following cases:

  * Official names of organisms may include abbreviated taxonomic rank such as “subg.“ "subgen." or “subsp.”.
  * In rare cases, two Linnaean taxon ranks in the same hierarchy may have the same name. For example, in Kingdom Bacteria, "Thermodesulfobacteria" is an applicable term at both Phylum and Class levels. In this case, the taxon rank is included in the preferred term to prevent any ambiguity.

For example,

  *     * Cypraea (Cypraea) tigris
    * Pleione subg. Scopulorum
    * Bacillus (subgen. Bacillus Cohn 1872, 174) subtilis
    * Staphylococcus succinus subsp. casei

If a common name exists for an organism in primary references, then it could be used as the Preferred Term for the organism.

For example,

  *     * 388618001 |Family Felidae (organism)|, PT: cats
    * 388626009 |Genus Felis (organism)|, PT: small cats

If a common name is shared between more than one organism, the preferred term should adhere to the following format: Scientific Name with annotated common name to prevent confusion. A dash may be used to separate the two names.

For example,

  *     * 1697006 |Genus Megapodius (organism)| and 107060000 |Family Megapodiidae (organism)| share the common name _Megapodes_. The Preferred term for the two concepts is as follows:
      * 1697006 |Genus Megapodius (organism)| PT: Megapodius - megapodes
      * 107060000 |Family Megapodiidae (organism)| PT: Megapodiidae - megapodes

An organism's common name might be the same as the scientific name for another organism. Example: _Gorilla_ is the scientific name for 389217005 |Genus Gorilla (organism)|, but it is the common name for 8807009 |Gorilla gorilla (organism)|. In these cases, the latter concept's preferred term should be the scientific name with annotated common name to prevent confusion.

For example,

  *     * For concept 8807009 |Gorilla gorilla (organism)|, the preferred term is _Gorilla gorilla - gorilla._

Occasionally, we may need to add a word to the common name specified in the resources to make the common name more explicit.

For example,

  *     * Loxosceles reclusa has a common name of _brown recluse_ in ITIS, which is one of the SNOMED primary references. To make the naming more explicit, the word _spider_ has been added to the preferred term:
      * FSN: 23312003 |Loxosceles reclusus (organism)|
      * PT: Brown recluse spider

When there are multiple names listed as common name for an organism in primary references, additional references should be consulted to locate the most commonly used term.

High level taxonomic terms often refer to groups of organisms. The preferred terms need to reflect that grouping. 

For example,

  *     * "Order Columbiformes" represent all Genera of Doves and pigeons, so the preferred term for 107097005 |Order Columbiformes (organism)| is: Doves and pigeons.

Follow the authoritative sources naming conventions for plural vs. singular where the same name is applicable to a higher taxonomic rank and one of its subtypes.

  *     * For example,
      * 329681000009104 |Genus Orcinus (organism)| has a preferred term of _Killer whales_ , while its child concept 50377004 |Orcinus orca (organism)| has a preferred term of _Killer whale_.

## Qualifiers in organism names

When modeling organisms with qualifiers, the qualifier should be placed in front of the organism name.

## Organism class variants

The description of organism classes that are subspecies subtypes and variants may include terms such as serogroup, serotype, biotype, variant, biovar, serovar, and pathovar.  

For example,

  *     * [ 698206009 | Brucella suis biovar 4 (organism)|](http://snomed.info/id/698206009 "698206009 | Brucella suis biovar 4 \(organism\) |")

_Serovar_ and _serotype_ are generally synonymous, with a preference for _serovar_ in the FSN and PT unless there is an authoritative source for the organism that uses _serotype_.

These guidelines should be applied to new content. Existing content may not be in compliance with this guidance; the process of correcting existing content will be carried out as time and resources permit.

The subspecies types and variants should be included in the FSN, PT and other descriptions as per terming in authoritative resource where one exists (example: see sub-sections for Salmonella serotype nomenclature as well as Streptococcus pneumoniae below). In the absence of such resources, associated scientific literature is consulted for the most common and accurate representation. Inclusion of the subspecies types and variants accurately is to avoid ambiguity when the same number or letter is used to refer to different organism variants.

For example,

Without mentioning the specific variant (serogroup vs. serotype) and the nomenclature system (Danish vs. American), "Streptococcus pneumoniae 48" can refer to the following:

  *     * Streptococcus pneumoniae Danish serotype 48 (which is equvalent to Streptococcus pneumoniae American serotype 82)
    * Streptococcus pneumoniae American serotype 48 (which is equivalent to Streptococcus pneumoniae Danish serotype 7B)
    * Streptococcus pneumoniae serogroup 48

Abbreviations (var, var., sv, sv., bv, bv., pv, pv.) must not be used in the FSN.

## Capitalization of organism names

Official scientific names for organisms should be capitalized. The designation of rank does not require capitalization. This guideline is applicable to the organism current name as well as older names and synonyms.

For example,

  *     * [ 426813007 | Order Acidobacteriales (organism)|](http://snomed.info/id/426813007 "426813007 | Order Acidobacteriales \(organism\) |") has case significance of _Initial character case insensitive_.

    * 72646003 |Streptococcus equinus (organism)| contains a heterotypic synonym of "Streptococcus bovis". Both of these descriptions are scientific names of the organism, and therefore, both have a case sensitivity indicator of _Entire term case sensitive_ (CS). 

Where the binomial format for an organism species includes capitalization of the first word, i.e., the genus name, the species name begins with a lower case letter. 

For example,

  *     * [ 24224000 | Brucella abortus (organism)|](http://snomed.info/id/24224000 "24224000 | Brucella abortus \(organism\) |")

If the species name includes any other word, it is not capitalized unless it is either a proper noun or part of a proper noun.

For example,

  *     * 31989009 |Murray Valley encephalitis virus (organism)|

Capitalization is applicable to the organism scientific name, e.g., Hepatitis B virus, Buffalopox virus, Cowpox virus, Dengue virus, Herpes simplex virus 1, Herpes simplex virus 2, Herpes simplex virus 3, Human immunodeficiency virus 1 _,_ Influenza virus A, Influenza virus B, Influenza virus C, Measles morbillivirus and Measles virus, Orf virus, Rabies virus, Rubella virus, Salmonella enterica subspecies enterica serovar Typhi, Vaccinia virus, Vesicular stomatitis Indiana virus, Yellow fever virus, Human papillomavirus x (where x is number representing the serotype).

The name of the associated disease does not require capitalization, e.g., hepatitis, buffalopox, cowpox, dengue, herpes, influenza, measles, orf, rabies, rubella, typhoid, smallpox, vesicular stomatitis, yellow fever.

Non-taxonomic groupers, such as _human herpes simplex virus_ , _herpes simplex virus_ , _influenza virus_ , _h_ _uman immunodeficiency virus_ , and _human papillomavirus_ are recorded with a case sensitivity indicator of _Entire term case insensitive_ (ci).

There are cases where the authoritative resources do not have an entry for the official name of an organism. For these concepts, the associated literature is referenced for naming and case sensitivity assignments.

For example,

  *     * _Severe acute respiratory syndrome coronavirus 2_ is below species level and does not have an entry in the authoritative resource, International Committee on Taxonomy of Viruses (ICTV). Therefore, it is recorded with a case sensitivity indicator of _Entire term case insensitive_ (ci), since the majority of references do not capitalize “severe”. 

Common names usually have case sensitivity indicator of _Entire term case insensitive_ (ci). 

For example,

  *     * _Domestic cat_ , common name of 448169003 |Felis catus (organism)|, has case sensitivity indicator of _Entire term case insensitive_ (ci). 

If the common name includes any proper nouns, or parts of proper nouns, they need to capitalized. 

For example,

  *     * 598003 |Vespa crabro (organism)| has the preferred /common name of _European hornet_ with the case sensitivity indicator of _Entire term case sensitive_ (CS) 

## Salmonella serotype nomenclature

Salmonella serotypes have a quadrinomial format of Genus species subspecies Serotype where the serotype name is capitalized.

For example,

  *     * A synonym for [ 114683003 | Salmonella Doel (organism)|](http://snomed.info/id/114683003 "114683003 | Salmonella Doel \(organism\) |") is Salmonella enterica subsp. enterica ser. Doel

Additional descriptions, without the species and subspecies names, are in common usage for Salmonella serotypes.

For example,

  *     * [ 656008 | Salmonella Os (organism)|](http://snomed.info/id/656008 "656008 | Salmonella Os \(organism\) |")

In SNOMED CT, the serotype name in the description should be capitalized.

Salmonella serotypes, without the species and subspecies names, should not be confused with binomial species names of other organisms.

## Streptococcus pneumoniae 

Streptococcus pneumoniae is a human pathogen whose virulence is based on its protective polysaccharide capsule. Study of the polysaccharide capsule has identified multiple serogroups and serotypes. Serotypes are defined by the chemical structure and immunologic properties of their polysaccharide; each serogroup contains one or more serotypes that elicit the same antibody response.

There are two serotype naming systems, one in the U.S. and one in Denmark. The Danish system is nearly universally accepted and preferred. For details, please refer to See Geno K A, Gilbert G L, Song J Y, Skovsted I C, Klugman K P, Jones C, Konradsen H B, Nahm M H. Pneumococcal capsules and their types: past, present, and future. Clinical Microbiology Reviews 2015; 28(3):871-899. [[PMID: 26085553](https://www.ncbi.nlm.nih.gov/pubmed/26085553)]).

FSN and preferred term (PT) descriptions should follow the Danish naming system. When an American synonym exists, it should be added. A synonym (SYN) that matches the FSN, but does not contain the naming system can also be added. 

For example,

[ 698149000 | Streptococcus pneumoniae serotype 48 (organism)|](http://snomed.info/id/698149000 "698149000 | Streptococcus pneumoniae serotype 48 \(organism\) |") is as follows:

  *     *       * FSN: Streptococcus pneumoniae Danish serotype 48 (organism)
      * PT: Streptococcus pneumoniae Danish serotype 48
      * SYN: Streptococcus pneumoniae American serotype 82
      * SYN: Streptococcus pneumoniae serotype 48

The guidelines for creating new concepts containing Streptococcus pneumoniae serotypes also apply to concepts in other SNOMED CT hierarchies, such as substances and procedures.

For example,

[ 120683007 | Streptococcus pneumoniae serotype 7F antibody (substance)|](http://snomed.info/id/120683007 "120683007 | Streptococcus pneumoniae serotype 7F antibody \(substance\) |") is as follows:

  *     *       * FSN: Antibody to Streptococcus pneumoniae Danish serotype 7F (substance)
      * PT: Streptococcus pneumoniae Danish serotype 7F Ab
      * SYN: Antibody to Streptococcus pneumoniae Danish serotype 7F
      * SYN: Anti-Streptococcus pneumoniae Danish serotype 7F antibody
      * SYN: Streptococcus pneumoniae Danish serotype 7F antibody
      * SYN: Antibody to Streptococcus pneumoniae American serotype 51

## Influenza virus nomenclature

Follow the latest names for genus and species according to the taxonomy authority. Although the genus and species names for influenza viruses are similar, they each follow a distinct pattern, which should be used in SNOMED CT. Also, the taxonomic name of the virus should always be capitalized.

For species, the word  _virus_ is included as a separate word and follows the letter designation.

For example,

  *     * [ 407482004 | Influenza C virus (organism)|](http://snomed.info/id/407482004 "407482004 | Influenza C virus \(organism\) |")
    * [ 710661004 | Immunoglobulin M antibody to Influenza B virus (substance)|](http://snomed.info/id/710661004 "710661004 | Immunoglobulin M antibody to Influenza B virus \(substance\) |")
    * [ 10674911000119108 | Otitis media caused by Influenza A virus (disorder)|](http://snomed.info/id/10674911000119108 "10674911000119108 | Otitis media caused by Influenza A virus \(disorder\) |")

For genus, _virus_ is included in the genus name and is not a separate word.

For example, 

  *     * [ 407481006 | Genus Gammainfluenzavirus (organism)|](http://snomed.info/id/407481006 "407481006 | Genus Gammainfluenzavirus \(organism\) |")
    * [ 407477006 | Genus Alphainfluenzavirus (organism)|](http://snomed.info/id/407477006 "407477006 | Genus Alphainfluenzavirus \(organism\) |")   

The disorder  _influenza_ need not be capitalized. 

  * For example,
    * [ 408687004 | Healthcare associated influenza disease (disorder)|](http://snomed.info/id/408687004 "408687004 | Healthcare associated influenza disease \(disorder\) |")   

    * [ 230188005 | Post-influenza encephalitis (disorder)|](http://snomed.info/id/230188005 "230188005 | Post-influenza encephalitis \(disorder\) |")

## US/GB spelling variants for taxonomic concepts   

Taxonomic resources (e.g. Integrated Taxonomic Information System or ITIS, List of Prokaryotic names with Standing in Nomenclature or LPSN) use the official scientific name for organisms. Similarly, in SNOMED CT, the official scientific name should be used in FSNs and PTs. **For descriptions representing common names, if the spelling in a country or region is different, the preferred spelling should be added in the language RefSet extension as a synonym.**

  

##  Use of X species

In the context of the Linnaean organism hierarchy, there is no difference between  _Salmonella species_ and simply  _Salmonella_ , the genus. Terms with  _X species_ , such as Salmonella species, are routinely used in laboratory reporting. They may provide additional information, other than the place of the organism in the Linnaean hierarchy. However, the intended connotation may vary from lab to lab and from organism to organism.

  

Since the organism concept represents a class of organisms, it cannot also represent what was, was not, or what will be done to identify the organism. Neither can it represent other information about the result. If there is additional information to report, it should be in a separate statement or comment (e.g. _further species identification pending_ or _sent to reference laboratory for further_ _identification_ or _further identification to be done if clinically_ indicated).

Addition of _X_ species as a description to genus _X_ is allowed and is done per request.

## Microorganism name changes

Microorganism taxonomic names may change, often due to scientific advances. This may result in:

  * Finding an organism in a particular taxonomic group (e.g. Genus) that is unrelated, on a molecular basis, to other members of the group.
  * Reassessing the taxonomic group originally established, based on phenotypic characteristics.
  * Proposing to reassign the organism to a different existing or new taxonomic group.  

On a case by case basis, requests for name changes are based on the following use cases:

The name of an organism changes. This scenario is also applicable when an organism name changes on multiple occasions over time.

  *     * Change the FSN for affected concepts, but not the concept ID, by creating a new FSN and description. Inactivate the old FSN with an inactivation value of  _Outdated_. 
    * Retain the old name as a synonym.

A single species is reclassified as multiple species. This scenario is applicable if the change in classification happens at a single point in time and is reflected as such in the authoritative resources.

  *     * Create the new concepts.   

    * Inactivate the original concept as _ambiguous._
    * Set a _possibly equivalent to_ relationship between the old concept and the new concepts.

Multiple species are reclassified as one. This scenario is applicable if the change in classification happens at a single point in time and is reflected as such in the authoritative resources.

  *     * Create a new concept.
    * Inactivate the existing concepts as _outdated_ with  _replaced by_ relationships to the new concept.

  

## Organism life stages

Concepts in the organism hierarchy represent _fully realized_ organisms. An organism's  _life cycle stage_ is a characteristic of a given taxon. It represents different stages of life e.g. egg, larva, and adult.

Organism stages themselves are characteristics common to members of a given taxon.

SNOMED CT allows for the representation of an organism in a specific life cycle stage. 

For example,

  *     * [ 337915000 | Homo sapiens (organism)|](http://snomed.info/id/337915000 "337915000 | Homo sapiens \(organism\) |") are organisms. Homo sapiens include humans, in general, as well as children. 
    * Childhood is a _life cycle stage_ , however it is not an organism.
  *   

  * Similarly,  

    * An egg of a particular nematode, e.g. [ 42625000 | Strongyloides stercoralis (organism)|](http://snomed.info/id/42625000 "42625000 | Strongyloides stercoralis \(organism\) |") is an organism. It is alive and can pass through other stages appropriate to its species.   
  
However, the _egg stage_ of Strongyloides stercoralis is not an organism. Many diagnostic test results, identify organisms ‘participating’ in particular life cycle stages.

For example, the results of a [ 83033005 | Fecal analysis (procedure)|](http://snomed.info/id/83033005 "83033005 | Fecal analysis \(procedure\) |") may identify the presence of [ 609326000 | Larva of Strongyloides stercoralis (organism)|](http://snomed.info/id/609326000 "609326000 | Larva of Strongyloides stercoralis \(organism\) |") and [ 699572004 | Egg of Strongyloides stercoralis (organism)|](http://snomed.info/id/699572004 "699572004 | Egg of Strongyloides stercoralis \(organism\) |") .

Concepts in the organism hierarchy should not represent organism  _structures_ (e.g. fungal hyphae). In addition, the word "_stage"_ should be excluded from concepts representing life cycle of an organism (e.g. larval **stage** of a nematode parasite). This does not preclude representations of organisms ‘participating’ in a specific stage of life e.g. 609061000 |Larva of genus Ascaris (organism)|.

## Naming patterns

FSN pattern: (Life cycle stage) of (Taxon including rank, if required) (organism)

For example, 

  *     * [ 609043009 | Adult of phylum Nemata (organism)|](http://snomed.info/id/609043009 "609043009 | Adult of phylum Nemata \(organism\) |")
    * [ 699572004 | Egg of Strongyloides stercoralis (organism)|](http://snomed.info/id/699572004 "699572004 | Egg of Strongyloides stercoralis \(organism\) |")

The name of the rank is included with the first letter lower case, except at the species and subspecies levels, where the Linnaean binomial and trinomial are specified.

PT pattern: (Taxon including rank, if required) (life cycle stage)

For example, 

  *     * Phylum Nemata adult
    * Strongyloides stercoralis egg

### Cestode larvae

A number of _cestode larvae_ have historically been referred to using Linnaean binomial names that are completely different from corresponding adult (or egg) names.

For example,

  *     * [ 47399003 | Larva of Taenia saginata (organism)|](http://snomed.info/id/47399003 "47399003 | Larva of Taenia saginata \(organism\) |") , a human tapeworm, is usually called Cysticercus bovis. 

PT pattern: Linnaean binomial of larva OR (Taxon including rank if required) (life cycle stage)

For example,

  *     * Cysticercus bovis
    * Cysticercus cellulosae
    * Class Cestoda larva
  
Although rare, a subtype of cestode larva may appear to be a Linnaean trinomial name. This, then, is the PT:

  *     * Diphyllobothrium latum sparganum

### Other acceptable synonyms

Some organisms and stages are referred to in an _adjectival_ form (e.g. Ascarid egg) or by common name (e.g. adult nematode). When used (especially when described as part of a request), these terms may be included as additional synonyms.

## Homotypic and heterotypic synonyms

Homotypic synonyms (also referred to as objective or nomenclatural or obligate synonyms), sometimes indicated by a triple bar 

<figure><img src="images/174690620.png" alt="" title=""><figcaption><p>, are based on the exact same type specimen. These synonyms are published in the scientific literature following the formal nomenclatural rules (that is, they are declared through a <em>nomenclatural</em> <em>act</em>).</p></figcaption></figure>

Heterotypic synonyms (also referred to as subjective or taxonomic synonyms), sometimes indicated by “=“, are based on different type specimens. These synonyms rely on the opinions of taxonomists rather than on the formal nomenclatural rules.

In SNOMED CT, homotypic synonyms can be added as descriptions on concepts as per primary references and the various International Codes of Nomenclature. Additional synonyms are expected to be referenced in current literature. Heterotypic synonyms can be added to aid search and analysis; they would only be considered for addition if requested and are supported by a primary resource, e.g. LPSN. They should not be added if adding them would generate confusion. 

## Dual nomenclature of pleomorphic fungi

According to the _International Code of Nomenclature for algae, fungi, and plants_ (IAPT), as of 1 January 2013, the historical system of permitting separate names for anamorphs and telemorphs of fungi with a pleomorphic lifecycle was ended, and one fungus can only have one name. All legitimate names proposed for a species, regardless of what stage they are typified by, can serve as the correct name for that species. It has been recognized that there could be many names that might merit formal retention or rejection, and the problem of choosing one name among many remains to be examined for many species. Therefore, latest updates in the credible resources and/or scientific articles should be consulted for the most current name.

## Resources for organism naming

SNOMED International utilizes various resources when reviewing changes to the organism hierarchy. They include:

### Bacteria

  * List of Prokaryotic names with Standing in Nomenclature (LPSN)
  * International Committee on Systematics of Prokaryotes (ICSP)
  * International Journal of Systematic and Evolutionary Microbiology
  * DSMZ-Prokaryotic Nomenclature Up-to-date  

### Fungi

  * MycoBank Database
  * Index Fungorum

### Viruses

  * International Committee on Taxonomy of Viruses (ICTV)

### Parasites

  * National Center for Biotechnology Information (NCBI) Taxonomy. Although not an authoritative source, NCBI Taxonomy provides useful links to other sources; it is used by Unified Medical Language System (UMLS) as a QA source.**  
**

### General

  * Catalogue of Life (<https://www.catalogueoflife.org/>). This is the result of cooperation between ITIS (<https://www.itis.gov>) and Species 2000 (<https://www.sp2000.org/>). Please note, Catalogue of Life may not be up to date for all areas. For bacteria, fungus, and virus, consult resources noted above as primary references.

  * International Code of Zoological Nomenclature (ICZN)
  * International Code of Nomenclature for algae, fungi, and plants (IAPT)

  

