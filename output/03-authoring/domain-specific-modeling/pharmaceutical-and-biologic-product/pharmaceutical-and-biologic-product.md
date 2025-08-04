# Pharmaceutical and Biologic Product

**Definition**  
A top-level hierarchy to clearly distinguish drug products (products) from their chemical constituents (substances)  
  
## Purpose of the SNOMED CT Medicinal Product hierarchy

The SNOMED CT Medicinal Product hierarchy provides concepts to describe medicinal products at various levels of abstraction with international applicability and support for interoperability in patient care and health data analysis. It provides a foundation from which member nations can extend with additional concepts suitable for their own healthcare culture and practice, or to which existing terminology can be mapped if required. 

This document describes the model for the concepts in the medicinal product hierarchy in the international edition of SNOMED CT; when populated, this model will provide:

  * concepts in the international edition to meet the core use cases
  * a foundation for national medicinal product terminologies
    * For member nations with an existing terminology, the model underpinning the concepts will facilitate both direct use or mapping
    * For member nations without an existing terminology, the concepts provide a consistent starting set of concepts and a model to develop from

This document also provides a description of how aspects of the SNOMED medicinal product hierarchy correspond with the suite of standards in ISO (Internal Organization for Standardization), collectively known as the "Identification of Medicinal Products standards" (IDMP).[1](https://confluence.ihtsdotools.org/display/WIPMPM/International+Medicinal+Product+Model+Introduction#Footnote1 "Footnote: Click here to display the footnote") These IDMP standards provide a conceptual model for the unique identification of a medicinal product globally and standard terminology concepts to support this (for example, to describe substances and dose forms). The domain of use for the IDMP standards is primarily the regulatory domain, but since regulatory information is the source and underpinning for the description of medication and medicinal product concepts in a clinical/patient care medicinal product terminology, both internationally and nationally, it is important that the SNOMED CT medicinal product model and supporting concepts are in harmony with those standards. Compatibility with the IDMP model for identification of medicinal products will facilitate information flow between the two domains of use (for example, to support pharmacovigilance). However, there is no sense that this harmony entails “full and exact compliance”; there would be little value in exact duplication. The SNOMED CT medicinal product hierarchy therefore provides classes of concepts that are additional to those present in the IDMP model to support the specific SNOMED CT and patient care/health data analysis use cases. 

## Scope

The scope of specification for the concept model for representation of medicinal products in the international edition of SNOMED CT is limited to pharmaceutical and biological products only; products that represent blood products, foods/nutritional supplements, additives, and complementary medicines (including homeopathic products) are currently out of scope. The representation of autologous medicinal products (those created from tissue and administered back to an individual) is also out of scope. Concepts for vaccines also follow the pattern of this model, although only to two of the three "levels" (MP and MPF). Further detail can be found in the [SNOMED CT Editorial Guide - Out of Scope](https://confluence.ihtsdotools.org/display/DOCEG/Medicinal+Product).

The international medicinal product model and concepts in the international edition are described in their more abstract form; real or actual products (including branded products and those marketed without a brand name) as authorised by medicines regulatory agencies within jurisdictions are out of scope. Describing the packages in which medicinal products are placed into the supply chain are also out of scope; both of these areas are covered in the national model specification.

For implementation guidance regarding national extensions, please see [SNOMED CT Drug Model for National Extensions](http://snomed.org/ndem). 

## Audience

This document is written for everyone with an interest in the development, maintenance, and use of medicinal product concepts within SNOMED CT, including those in member nations who are or wish to use medicinal product concepts from the international edition, either directly (in an extension where appropriate) or by mapping, in any national/local medicinal product terminology. It is relevant to those responsible for clinical or research systems using medicinal product concepts in both active medication processes (prescribing, dispensing, and administering medicines) or in recording of medication information, and also particularly to those responsible for systems providing decision support for medication safety.

## Use cases

The main use cases for the medicinal product hierarchy in the international edition of SNOMED CT are as follows:

  1. To provide a consistent and usable set of international medications concepts for member nations to use as a foundation for national medicinal product terminology
     1. For those member nations with an existing terminology, the improved model underpinning the concepts will facilitate both direct use or mapping
     2. For those member nations without an existing terminology, the concepts provide a consistent starting set of concepts and a model to develop from, reducing resource (especially set up costs) and risk in development
  2. To provide compatibility with the IDMP model, where possible, for identification of medicinal products. Having compatibility between the patterns used to describe medicinal products in the regulatory environment and those used in clinical care will facilitate the information flow between the two domains of use. For all licensed medicinal products, the prime source of information for their description is their regulatory data; compatibility therefore streamlines the flow of information for maintenance of the clinical terminology. Similarly, for example in pharmacovigilance, the flow of information from clinical records into regulatory reporting, both for suspect and concomitant medications involved in safety events is streamlined. Describing the relationship between the SNOMED CT medicinal product hierarchy and the IDMP model also shows how some SNOMED CT medicinal product concepts complement and add value to IDMP-based concepts, particularly for patient care
  3. To facilitate international interoperability of medication concepts for (for example) patient summaries and cross-border care; this is supported most efficiently when the medication concepts themselves are from national extensions built upon or mapped to the international core
  4. To facilitate development of international medication decision support, such as allergy checking and duplicate therapy checking, thereby reducing costs of maintenance and implementation
  5. To support the use of a classifier on both international and national medicinal product concepts, to facilitate maintenance of the hierarchy
  6. To support analysis of medication information in healthcare data for various research purposes
  7. To provide medication concepts to support sufficiently defining concepts in other hierarchies within SNOMED CT

## Open and closed world views: the existential and universal restrictions in the Medicinal Product model

SNOMED CT as an ontology is constructed on the principle of an open world view (the existential restriction) with each concept having a distinct fully specified name. The implication of the open world view for the medicinal product hierarchy is that a concept represents the set of (real world) medicinal products that contains "(at least) some substance X as an active ingredient", but may contain other unspecified active ingredient substances. This 'open world' view is useful for analysis and in some types of decision support. However, the regulation of medicinal products for sale/supply is based on the 'closed world' view (the universal restriction), where all active ingredient substances must be explicitly described. This is also the premise for description of medicinal products in the medication process (prescribing, dispensing and administration). Therefore, the Medicinal Product hierarchy differs from other concept hierarchies within SNOMED CT in that some classes of concepts within it are modeled using this 'closed world' view, which states that a concept represents a medicinal product that contains "only substance X as an active ingredient"; no other active ingredient substances are present within it. To implement that "closed world view" with the existing tools and systems of SNOMED CT, the "ingredient count" proxy has been developed. Some description of this is given below, with further detailed information being available in the machine-readable concept model. For further details on the open and closed world views, please refer to the relevant SNOMED documentation and training materials, e.g. [Description Logic: Advanced Features](https://elearning.ihtsdotools.org/mod/page/view.php?id=2208). 

#### IDMP Compatibility

IDMP, being a suite of standards developed in and for the regulatory domain, uses a "closed world" view. The active ingredient substance(s) present in a product must be listed in full, with no exceptions, so IDMP exists in the "closed world" view and therefore would be compatible with the "universal restriction" only; the existential restriction is not compatible with the concepts in the IDMP suite of standards, which is particularly important to note for the abstract concepts within IDMP in ISO 11616 (PhPIDs, especially L1, L3 and L4).

## Model population and maintenance

In maintaining a medicinal product terminology, concepts are authored to describe those things that exist and can be used in clinical care and/or clinical research. This means that it is the more granular concepts that are usually recognised first, then the less concrete concepts are abstracted from these. In many medicinal product terminologies, this results in there being lowest level child concepts for every parent concept within the model classes. Due to the historic nature of some of the content in the SNOMED CT international edition medicinal product hierarchy, there will be higher level parent concepts (i.e., MP and MPF concepts) that do not have clinical drug concepts associated with them. These MP and MPF concepts may have had clinical drug type concepts associated with them in the past, but the veracity and provenance of the detailed information to support these CD concepts could not be confirmed, so they have been inactivated, whereas the more abstract MP and MPF concepts remain in the international release to support historic data use cases such as analysis and medication profiles.

There is nothing in the specification that deals with availability of medicinal products for use; neither the presence of a concept nor an absence of a concept gives any sense of its availability in the supply chain globally. Indeed, even when a medicinal product ceases to be available anywhere in the global supply chain, its representation will remain as a valid concept in SNOMED CT for use in patient medication history and patient medication profiles. New medicinal products, both from newly authorised therapeutic substances and in new formulations of existing therapeutic substances, are constantly appearing globally. The principles and process for the ongoing maintenance of and addition of new content to the medicinal product hierarchy are being developed as part of the Editorial Guidelines. 

#### IDMP Compatibility

The definition of the 763158003 |Medicinal product (product)| concept as providing the scope of the hierarchy is in agreement with the  _scope_ of the concept of a medicinal product in IDMP. This is a positive position generally and particularly for any future mapping exercise that might be undertaken, since there should be few concepts that cannot be mapped at some level of granularity. However, in IDMP, and specifically in ISO 11615, the Medicinal Product class represents an authorised medicinal product that consists of one or more Manufactured Items as authorised and available; in this sense it is much more concrete concept than the SNOMED parent concept. This difference is not of great significance other than to understand that the same term ("medicinal product") has a different and more specific meaning in IDMP than in the SNOMED CT medicinal product model. Also, the IDMP ISO 11615 model explicitly describes and includes "combination medicinal products" (also known as 'kit' products, 'component' products, 'multi-component packaged products', etc.) where the package placed into the supply chain contains more than one type of component element (clinical drug) within it; since these are correctly packaged products, and packaged products are out of scope of the medicinal product hierarchy for the international edition of SNOMED CT, these combination products are not represented in this SNOMED CT model.

The |Pharmaceutical / biologic product (product)| hierarchy is comprised of multiple smaller hierarchies. It contains the following semantic tags:

  * (medicinal product)
  * (clinical drug)
  * (medicinal product form)
  * (product)
  * (physical object) - only 1 concept

  

The following subhierarchies will be retained as primitive subhierarchies until use cases and/or detailed requirements are known.  Requests for addition of new concepts or modification of existing concepts will be evaluated on a case-by-case basis.

  * 410652009 |Blood product (product)| 
  * 356497001 |Bone cements (product)| 
  * 409248003 |Bone graft material (product)| 
  * 411976009 |Bone morphogenic protein graft (product)|
  * 116178008 |Dialysis fluid (product)| 
  * 373783004 |Dietary product (product)|*
  * 410969008 |Sterile maggots (product)|

_*E ditorial guidelines and related content updates for <<373783004 |Dietary product (product)| are managed by the Nutrition Project Group._

The following subhierarchies will be retained "as is" until use cases and/or detailed requirements are known. Requests for addition of new concepts will be rejected. Requests for modification of existing concepts will be evaluated on a case-by-case basis.

  * 411115002 |Drug-device combination product (product)|*
  * 349365008 |Herbal medicine (product)|
  * 349363001 |Homeopathic medicine (product)|
  * 411126008 |Patch test product (product)|

_* Development of editorial guidelines and related content updates for <<411115002 |Drug-device combination product (product)| will be done in conjunction with the Device Project._

  

