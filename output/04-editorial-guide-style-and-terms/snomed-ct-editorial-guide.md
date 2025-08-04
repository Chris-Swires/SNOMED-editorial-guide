# SNOMED CT Editorial Guide

<figure><img src="attachments/27591252/35987732.png" alt="" title=""><figcaption><p><em><strong>These guidelines should be applied to new content. While there are many concepts in the existing content that are not in compliance with this guidance, the process of correcting existing content will be carried out as time and resources permit.</strong></em></p></figcaption></figure>

  

The Editorial Guide provides the information necessary to model concepts in SNOMED CT. It is a working document, subject to change and revision. The primary audience is for those who edit content in the International Release _,_ but it may also be useful to those creating extensions. For those editing in extensions, please also see guidance within the [Extensions Practical Guide](https://confluence.ihtsdotools.org/display/DOCEXTPG/Extensions+Practical+Guide). 

SNOMED CT is distributed in sets of electronic files. Supporting software tools are not necessarily provided directly by SNOMED International.

Welcome to <http://snomed.org/eg>

[Video introduction to the Editorial Guide](https://drive.google.com/file/d/1OuQixcCCM1N-BuKxTH6LDfvggTB1NJM7/view?usp=sharing)

[Summary of changes](https://docs.google.com/spreadsheets/d/1xHZNeNQwkCcUPaZGEl28GFGv_WMTHZoeHeAV5cSjOFU/)*

*_Changes on this spreadsheet may include those in progress for a future publication date. The in-progress changes are available for viewing but will not be visible in the Editorial Guide until the next publication. Please note dates in bottom tab._

The Editorial Guide publishes only the rules that apply to precoordinated content. That is, the rules where the 'Content Type' is one of the following - |All SNOMED CT content|, |All precoordinated SNOMED CT content|, or |All new precoordinated SNOMED CT content|. The rules that are **not** published in the Editorial Guide are the ones that apply only to |All postcoordinated content|. See the different content types and rules in the MRCM maintenance tool at <https://browser.ihtsdotools.org/mrcm>. 

Text that is protected by copyright will not be accepted for inclusion unless accompanied by a release from the copyright holder.

© Copyright 2025 International Health Terminology Standards Development Organisation, all rights reserved.This document is a publication of International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED International owns and maintains SNOMED CT®.Any modification of this document (including without limitation the removal or modification of this notice) is prohibited without the express written permission of SNOMED International. This document may be subject to updates. Always use the latest version of this document published by SNOMED International. This can be viewed online and downloaded by following the links on the front page or cover of this document.SNOMED®, SNOMED CT® and IHTSDO® are registered trademarks of International Health Terminology Standards Development Organisation. SNOMED CT® licensing information is available at <http://snomed.org/licensing>. For more information about SNOMED International and SNOMED International Membership, please refer to [http://www.snomed.org](?section=httpwwwihtsdoorg-or-contact-us-at-infosnomedorgmailtoinfoihtsdoorg--contents--snomed-ct-introductionsnomed-ct-introduction#httpwwwihtsdoorg-or-contact-us-at-infosnomedorgmailtoinfoihtsdoorg--contents--snomed-ct-introductionsnomed-ct-introduction)

  * [Intended Use](?section=intended-use#intended-use)
  * [Structure of Domain Coverage](?section=structure-of-domain-coverage#structure-of-domain-coverage)
  * [Knowledge Representation](?section=knowledge-representation#knowledge-representation)
  * [Out of Scope](?section=out-of-scope#out-of-scope)
  * [SNOMED CT Requirements](?section=snomed-ct-requirements#snomed-ct-requirements)
    * [Medical Vocabularies - J. Cimino](?section=medical-vocabularies-j-cimino#medical-vocabularies-j-cimino)
    * [Electronic Health Applications](?section=electronic-health-applications#electronic-health-applications)
    * [Implementation and Migration](?section=implementation-and-migration#implementation-and-migration)
    * [User Communities](?section=user-communities#user-communities)
    * [Summary of SNOMED CT Requirements](?section=summary-of-snomed-ct-requirements#summary-of-snomed-ct-requirements)

#### [Concept Model Overview](?section=concept-model-overview#concept-model-overview)

  * [Root and Top-level Concepts](?section=root-and-top-level-concepts#root-and-top-level-concepts)
  * [Attributes](?section=attributes#attributes)
  * [Defining Characteristics](?section=defining-characteristics#defining-characteristics)
  * [Qualifying Characteristics](?section=qualifying-characteristics#qualifying-characteristics)

#### [Authoring](?section=authoring#authoring)

  * [Scope](?section=scope#scope)
    * [Adjudication for Content Requests](?section=adjudication-for-content-requests#adjudication-for-content-requests)
    * [Proprietary Names and Works](?section=proprietary-names-and-works#proprietary-names-and-works)
  * [General Naming Conventions](?section=general-naming-conventions#general-naming-conventions)
    * [Descriptions](?section=descriptions#descriptions)
    * [Case Significance](?section=case-significance#case-significance)
    * [Person Naming Conventions](?section=person-naming-conventions#person-naming-conventions)
    * [Plurals](?section=plurals#plurals)
    * [Punctuation and Symbols](?section=punctuation-and-symbols#punctuation-and-symbols)
    * [Sentence Types](?section=sentence-types#sentence-types)
    * [US vs. GB English](?section=us-vs-gb-english#us-vs-gb-english)
    * [Action Verbs](?section=action-verbs#action-verbs)
    * [Numbers and Numeric Ranges](?section=numbers-and-numeric-ranges#numbers-and-numeric-ranges)
  * [General Modeling](?section=general-modeling#general-modeling)
    * [Annotations](?section=annotations#annotations)
    * [Changes to Components](?section=changes-to-components#changes-to-components)
    * [Conjunction and Disjunction](?section=conjunction-and-disjunction#conjunction-and-disjunction)
    * [General Concept Inclusions - GCIs](?section=general-concept-inclusions-gcis#general-concept-inclusions-gcis)
    * [Grouper Concept](?section=grouper-concept#grouper-concept)
    * [Intermediate Primitive Concept Modeling](?section=intermediate-primitive-concept-modeling#intermediate-primitive-concept-modeling)
    * [Proximal Primitive Modeling](?section=proximal-primitive-modeling#proximal-primitive-modeling)
    * [Relationship Group](?section=relationship-group#relationship-group)
    * [Sufficiently Defined vs Primitive Concept](?section=sufficiently-defined-vs-primitive-concept#sufficiently-defined-vs-primitive-concept)
    * [Templates](?section=templates#templates)
  * [Domain Specific Modeling](?section=domain-specific-modeling#domain-specific-modeling)
    * [Body Structure](?section=body-structure#body-structure)
    * [Clinical Finding and Disorder](?section=clinical-finding-and-disorder#clinical-finding-and-disorder)
    * [Environment and Geographical Location](?section=environment-and-geographical-location#environment-and-geographical-location)
    * [Event](?section=event#event)
    * [Observable Entity](?section=observable-entity#observable-entity)
    * [Organism](?section=organism#organism)
    * [Pharmaceutical and Biologic Product](?section=pharmaceutical-and-biologic-product#pharmaceutical-and-biologic-product)
    * [Physical Force](?section=physical-force#physical-force)
    * [Physical Object](?section=physical-object#physical-object)
    * [Procedure](?section=procedure#procedure)
    * [Qualifier Value](?section=qualifier-value#qualifier-value)
    * [Record Artifact](?section=record-artifact#record-artifact)
    * [Situation with Explicit Context](?section=situation-with-explicit-context#situation-with-explicit-context)
    * [SNOMED CT Model Component](?section=snomed-ct-model-component#snomed-ct-model-component)
    * [Social Context](?section=social-context#social-context)
    * [Special Concept](?section=special-concept#special-concept)
    * [Specimen](?section=specimen#specimen)
    * [Staging and Scales](?section=staging-and-scales#staging-and-scales)
    * [Substance](?section=substance#substance)

#### [Editorial Guide Style and Terms](?section=editorial-guide-style-and-terms#editorial-guide-style-and-terms)

#### [PDFs for Download](?section=pdfs-for-download#pdfs-for-download)
