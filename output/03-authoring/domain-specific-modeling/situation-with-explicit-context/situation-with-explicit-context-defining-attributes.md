# Situation with Explicit Context Defining Attributes

The following defining attributes correspond to the  _Situation with Explicit Context Attributes Summary_ table. 

_Associated finding_ and _Finding context_ are used with Findings with Explicit Context.

## Associated finding

This attribute links concepts in the Situation with explicit context hierarchy to their related Clinical finding or Event. It specifies the Clinical finding or Event concept whose context is being modified.

When Associated finding is used in post-coordinated expressions, its range is broader than when used in pre-coordinated content. Associated finding should not reference concepts that already have precoordinated context.

For example,

  *     * [ 443999008 | Risk of exposure to communicable disease (situation)|](http://snomed.info/id/443999008 "443999008 | Risk of exposure to communicable disease \(situation\) |") with Associated finding, Exposure to communicable disease (event)

For example, to create the concept, History of thyroid disease in father, 

  *     * Subject relationship context (attribute) with the value, father (person)
    * Associated finding (attribute), with the value, Disorder of thyroid gland (disorder)

Incorrect example,

  *     * Using Family history with explicit context (situation),
      * Subject relationship context (attribute) with the value, father (person)
      * Associated finding with value, Family history: Thyroid disorder (situation)

## Finding context

This attribute represents a situation in which a Clinical finding or Event is known or unknown. If known, whether it is present, absent, or uncertain (possible). It also represents that the finding is not actual, but anticipated or possible in the future.

For example,

  *     * [ 161922009 | No cough (situation)|](http://snomed.info/id/161922009 "161922009 | No cough \(situation\) |") with Associated finding, Cough (finding) and Finding context, Known absent (qualifier value)

_Subject relationship context_ and _Temporal context_ are used with Situations, Findings, and Procedures with Explicit Context.

## Subject relationship context

This attribute is used to specify the subject of the Clinical finding or Procedure being recorded, in relation to the subject of the record. 

For example,

  *     * [ 161077003 | Father smokes (situation)|](http://snomed.info/id/161077003 "161077003 | Father smokes \(situation\) |") with Associated finding, Smoker (finding) and Subject relationship context, Father of subject (person)

Observables about someone other than the subject of record are included in the Observable entity hierarchy, not the Situation with explicit context hierarchy, e.g,. 443722004 |Educational level of parent of subject (observable entity).

## Temporal context

This attribute indicates the  _time_ of the procedure or finding. It may be  _actual_ _,_ i.e occurred in the present, in the past, at a specified time; or in the future, i.e. it is planned or expected. The most general value is simply Current or past (actual), meaning that the concept was actual (not planned or expected), but not specifying anything further about the time. The word  _specified_ in the Temporal context| means that there is a date or time stamp associated with the concept in the record. The date and/or time is a point and/or interval, that applies to the concept. 

For example,

  *     * [ 161550001 | History of hematuria (situation)|](http://snomed.info/id/161550001 "161550001 | History of hematuria \(situation\) |") with Associated finding, Blood in urine (finding) and Temporal context, In the past (qualifier value)

_Associated procedure_ and _Procedure context_ are used with Procedures with Explicit Context.

## Associated procedure

This attribute links concepts in the Situation with explicit context hierarchy to concepts in the Procedure hierarchy for which there is additional context.

For example, 

  *     * [ 183976008 | Operative procedure planned (situation)|](http://snomed.info/id/183976008 "183976008 | Operative procedure planned \(situation\) |") with Associated procedure, Surgical procedure (procedure)

## Procedure context

This attribute indicates the degree of completion, or status, of a Procedure, as well as its possible future states, prior to it being initiated or completed.

For example,

  *     * [ 183976008 | Operative procedure planned (situation)|](http://snomed.info/id/183976008 "183976008 | Operative procedure planned \(situation\) |") with Procedure context, Planned (qualifier value)

