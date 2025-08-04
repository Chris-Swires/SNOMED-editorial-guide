# Person Naming Conventions

## Patient vs Subject

The |Situation with explicit context (situation)| hierarchy is intended for concepts that explicitly include contextual information. Context can include whom the finding is about, or on whom a procedure is performed. These concepts can be used to represent different meanings, e.g., past history, family history, planned care, excluded diagnosis, etc.

In contrast, a concept in the Clinical Finding or Procedure hierarchy has a default [context](https://confluence.ihtsdotools.org/display/DOCEG/Intended+Use) of the subject of the record. This context can be overridden by the information model.

For example,

  *     * The concept |Asthma (disorder)| could be used in a family history field to represent a family history of asthma.

However, including the term _subject_ or _patient_ within a Clinical finding or Procedure concept prevents that concept’s context from being overridden by the information model.

For example,

  *     * The concept |Patient immunocompromised (finding)| could not be used in a family history field to represent that a family member is immunocompromised.

Therefore, the use of _patient_ and _subject_ should be used only when necessary. 

Descriptions should use the word  _subject_ , not  _patient_ , if required, as _subject_ is broader than _patient_.

For example, 

    * [420058008 | Provider of history other than subject (person)|](http://snomed.info/id/420058008)

_Subject_ refers to the subject of record, who may, in some circumstances, not be the patient.

Best practice is to create a contextless concept.

Example - finding,

  *     * Patient unable to chew with denture (finding) - incorrect
    * Unable to chew with denture (finding) - correct

Example - procedure,

  *     * Positioning subject in supine position (procedure) -incorrect
    * Positioning in supine position (procedure) - correct

## Caregiver vs Carer

Descriptions with _caregiver_ should be as follows:

  * An FSN should use _caregiver_ as (one word).
  * There should be a synonym using _carer_.

For example, 

  *     * [ 425578005 | Caregiver able to cope (finding)|](http://snomed.info/id/425578005 "425578005 | Caregiver able to cope \(finding\) |")
    * Synonym: Carer able to cope

