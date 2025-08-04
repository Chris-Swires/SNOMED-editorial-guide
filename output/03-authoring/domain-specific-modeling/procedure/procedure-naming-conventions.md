# Procedure Naming Conventions

## General rules

The naming pattern for procedures is highly dependent on the attributes used to describe the procedure. However, some general rules apply.

The FSN for a procedure should name the action (the method) of the procedure first, and then the object that the action directly acts upon. 

For example,

  * [ 261531000 | Excision of rib (procedure)|](http://snomed.info/id/261531000 "261531000 | Excision of rib \(procedure\) |")

Include the approach where more than one option exists. See the various approaches as subtypes of 103379005 |Procedural approach (qualifier value)|. 

For example,

  * 386792000 Transurethral resection of neoplasm of bladder (procedure) vs 287726000 Open resection of neoplasm of bladder (procedure)

Because a resection of a neoplasm of the bladder can be performed by transurethral and open approaches, concepts are separately identified with each approach.

Use _via_ for route or approach and _using_ for device. 

For example,

  * Administration of sedative _via_ nasal route (procedure)
  * Internal fixation _using_ screw (procedure)

One description, either preferred term or synonym, should match the FSN without the semantic tag. Synonyms and/or preferred terms using the common clinical names of procedures are acceptable. 

A common naming pattern for concepts in the procedure hierarchy is:

FSN: <Method (Action)> of <Anatomical or acquired body structure> (procedure)

PT: <Method (Action)> of <Anatomical or acquired body structure>

SYN: [plasty/stomy/ectomy/otomy] 

For example,

  * [ 82035006 | Resection of polyp (procedure)|](http://snomed.info/id/82035006 "82035006 | Resection of polyp \(procedure\) |") has a synonym of polypectomy

  

  * Completed or in review: <https://confluence.ihtsdotools.org/display/IHTSDO1/Pre-coordination+Naming+Patterns+Project>
  * Proposed for future review: <https://confluence.ihtsdotools.org/display/IHTSDO1/Unreviewed+Patterns+by+Hierarchy>

  

Further refinements can be affected by the various attributes and their values as described in the sections below. 

## Anatomical site

An _anatomical site_ is the direct object of the action. The name of the site should follow the name of the action.

For example,

  *     * [ 175253007 | Repair of pulmonary artery (procedure)|](http://snomed.info/id/175253007 "175253007 | Repair of pulmonary artery \(procedure\) |")

The action is  _repair_ and the site is _pulmonary artery_. The action is listed first in the description, followed by the site.

Procedure descriptions should follow the naming guidelines for the body structure hierarchy. Concepts describing limbs are frequently found in SNOMED CT, and the use of  _upper/lower_  _limb_ in the FSN with synonyms of upper/lower extremity, arm/leg should be followed.

For example,

  * [ 179987000 | Replantation of upper limb (procedure)|](http://snomed.info/id/179987000 "179987000 | Replantation of upper limb \(procedure\) |")

The description of _upper limb_ is used in the FSN while the synonyms refer to _arm_ and _upper extremity_. 

## Device

A _device_ is the direct object of the action**.** The word(s) naming the device should follow the word(s) naming the action. If there is a site that is not the direct object of the action, the word(s) naming it should come after the word(s) naming the device.

For example, 

  *     * [ 392247006 | Insertion of catheter into artery (procedure)|](http://snomed.info/id/392247006 "392247006 | Insertion of catheter into artery \(procedure\) |") The action is _insertion_ , the direct object is _catheter_ , and the indirect site is _artery_.

## Substance

A _substance_ is the direct object of the action**.** The word(s) that name the substance should follow the words that name the action. If there is a site that is not the direct object of the action, the word(s) naming it should follow the word(s) naming the substance.

For example,

  *     * [ 427258004 | Injection of hormone into subcutaneous tissue (procedure)|](http://snomed.info/id/427258004 "427258004 | Injection of hormone into subcutaneous tissue \(procedure\) |") The action is _injection_ , the direct object is _hormone_ , and the indirect site is  _subcutaneous tissue_.

## Morphologic abnormality

A _morphologic abnormality_ is the direct object of the action.**** The morphology term should follow the action term. If there is a site, it should follow the morphology term.

For example,

  *     * [ 41180005 | Excision of cyst of breast (procedure)|](http://snomed.info/id/41180005 "41180005 | Excision of cyst of breast \(procedure\) |") The action is _e_ _xcision_ , the direct object is the morphologic abnormality  _cyst_ , and the site is  _breast_.

  *     * [ 175376008 | Operation on aneurysm of carotid artery (procedure)|](http://snomed.info/id/175376008 "175376008 | Operation on aneurysm of carotid artery \(procedure\) |") The action is _operation_ , the direct object is the morphologic abnormality _aneurysm_ , and the site is _carotid artery._

##  Past tense verbs and sentence types

A procedure concept should be a noun phrase that names the procedure. It should not contain information that it was done, or is to be ordered, carried out, or planned.

  * Past tense verbal phrases should not be used to name procedures, since _past tense_ invokes a temporal context, i.e. the procedure was done in the past. Any existing concepts with past tense verbs should be moved to the Situation with explicit context hierarchy.
  * Sentence function types, i.e. imperative, declarative, interrogative, or exclamatory, are disallowed in procedure concepts. 

Acceptable example, 

  *     * [ 11227005 | Excision of ganglion of tendon sheath of hand (procedure)|](http://snomed.info/id/11227005 "11227005 | Excision of ganglion of tendon sheath of hand \(procedure\) |") This __ is an acceptable FSN expressed with a noun phrase.

Unacceptable example, 

  *     *  _Hand tendon ganglion excised_ indicates the procedure was done, as a past tense declarative statement. This should be in the Situation with explicit context hierarchy, not the Procedure hierarchy.

## Complexity

Complexity can mean either the amount of effort required, or it can be based on realm-specific definitions (e.g. simple arthrodesis, simple repair, complex repair, etc.). Procedure concepts with modifiers representing complexity are not allowed in the International Release.

Procedures that use the terms  _simple_ or _complex_ are allowed if defined with reproducible meanings, based on what is done to or for the patient, rather than how much effort is expended.

For example,

  *     * [ 172043006 | Simple mastectomy (procedure)|](http://snomed.info/id/172043006 "172043006 | Simple mastectomy \(procedure\) |") The concept is reproducibly defined as the removal of all breast tissue without removal of axillary contents. This is differentiated from modified radical, radical, skin-sparing, and subcutaneous variants of mastectomy.

  

  

  

  

  

