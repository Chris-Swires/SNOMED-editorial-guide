# Procedure Modeling

## Procedure attribute hierarchies 

SNOMED CT has attribute hierarchies for Procedure Site, Procedure Device, and Procedure Morphology. Each has two sub-attributes to represent the _direct_ and _indirect object_ s.  _Procedure Device_ also has more specific attributes,  _Using Device_ and  _Using Access Device_.

## Combined procedures

The potential for an endless number of combined procedures that may be performed in the same encounter requires more stringent criteria for addition. Combined procedures acceptable for precoordination are those that represent multiple individual procedures done in sequence or in combination, related to the same focal condition, and performed within the same encounter. These procedures must be sufficiently defined to be added.

## Observable entity vs. Evaluation procedure

The observable entity and evaluation procedure hierarchies have some of the same attributes. There is not and should not be a one-to-one correspondence between the two hierarchies.

Concepts will not be duplicated between the observable entity hierarchy and procedure hierarchy, and requests for such will not be added. While some users have indicated they want to use a procedure concept for ordering a test and an observable concept for reporting the result, this is not an acceptable use case. Please see [Observable Entity vs. Evaluation Procedure](https://confluence.ihtsdotools.org/display/DOCEG/Observable+Entity) for more information. 

The evaluation procedure hierarchy is currently classified under  _Procedure by method_ , with many immediate children as follows:

  *     *       * Procedure by method (procedure)
        * Evaluation procedure (procedure); some children include:
          * Imaging (procedure)
          * Measurement procedure (procedure)
          * Physical examination assessment (procedure)

<figure><img src="images/174691284.png" alt="" title=""><figcaption><p>Evaluation procedures can be defined by a Method (attribute) of Evaluation - action (qualifier value).</p></figcaption></figure>

  

Subtypes of Evaluation-action (qualifier value) include: 

  *     *       *         * Examination - action (qualifier value)
        * Imaging - action (qualifier value)
        * Measurement - action (qualifier value)
        * Monitoring - action (qualifier value)
        * Spectroscopy - action (qualifier value)

# Out of scope of procedures

SNOMED International is no longer accepting new concepts to the 122869004 |Measurement procedure (procedure)| hierarchy. New requests for content in this area will be created in the 363787002 |Observable entity (observable entity)| hierarchy. If new content is needed in the 122869004 |Measurement procedure (procedure)| hierarchy to satisfy existing use cases, it can be created in national extensions in the procedure hierarchy. Please see [Observable Entity](https://confluence.ihtsdotools.org/display/WIPEG/Observable+Entity) and [Observable Entity Naming Conventions](https://confluence.ihtsdotools.org/display/WIPEG/Observable+Entity+Naming+Conventions) pages for more information. 

SNOMED International is no longer accepting new concepts in the 127789004 |Laboratory procedure categorized by method (procedure)| hierarchy. New requests for concepts which are solely techniques should be created in the 272394005 | Technique (qualifier value)| subhierarchy. New content that is an observation using a technique belongs in the 363787002 |Observable entity (observable entity)| hierarchy. If new content is needed in the 127789004 |Laboratory procedure categorized by method (procedure)| hierarchy to satisfy existing use cases, it can be created in national extensions in the procedure hierarchy. Please see the [Technique](https://confluence.ihtsdotools.org/display/DOCEG/Technique) and the [Observable Entity](https://confluence.ihtsdotools.org/pages/viewpage.action?pageId=174690597) pages for more information.

## Procedures by count

### Counts of the number of procedures

Many procedure classifications focus on resources required to complete; this may be for reimbursement or tracking purposes (e.g. placement of one stent versus placement of two stents). This information should be part of patient documentation and is not allowed in the International Release.

### Order of procedures

The order of procedures, e.g. primary, first, second, etc. should be excluded.

## Reason for procedure

In general, the reason for ordering a procedure should not be precoordinated within the procedure concept, i.e. it should not constrain the reporting of results. The reason that a procedure is ordered may influence the interpretation of the results but usually does not influence the _way_ the procedure is performed.

Unacceptable example,

  *     * Computed tomography angiography of chest with contrast for evaluation of pulmonary embolus (procedure)

Acceptable example including reason for procedure,

  *     * [ 66596009 | Diagnostic radiography for foreign body detection and localization (procedure)|](http://snomed.info/id/66596009 "66596009 | Diagnostic radiography for foreign body detection and localization \(procedure\) |")

Procedures with the word _study_ are unacceptable. They are ambiguous, as they imply context beyond the execution of the procedure.

## Primary vs secondary procedures

The meaning of  _primary_ and  _secondary_ , when describing a procedure, is open to interpretation. Consequently, the concepts will be inactivated.

The interpretation of primary may be:

  * Not ever done before at this site
  * The first of multiple procedures, with two sub-meanings:
    * The first of planned multiple procedures, whether the plan is carried out or not
    * The first of multiple procedures that were not planned or foreseen, i.e. it is only the first of multiple procedures in retrospect

Examples of unacceptable descriptions,

  *     * Primary anterior decompression of cervical spinal cord (procedure)
    * Primary anterior excision of cervical intervertebral disc (procedure)
    * Primary arthrodesis of interphalangeal joint of toe (procedure) 
    * Primary anterolateral excision of thoracic intervertebral disc (procedure)

"First" and “subsequent” procedures are not allowed, as they are inherently ambiguous and relative. While administratively relevant, the additional descriptions of the procedure are not clinically relevant. 

Unacceptable examples,

  *     * Antenatal first blood tests (procedure)
    * Antenatal subsequent blood tests (procedure)

