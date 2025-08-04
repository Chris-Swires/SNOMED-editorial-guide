# Situation with Explicit Context Modeling

SNOMED CT contains concepts that include  _context_ information, and concepts that are regarded as  _context-free_. A concept includes  _context_ information if the name of the concept explicitly represents information that might otherwise be represented by another less  _context-rich_ concept in a particular place within an electronic health record or EHR. 

In SNOMED CT,_context_ describes the effects of embedding a concept in a clinical situation, i.e. when it is used in an EHR.

For example, 

  *     * When the concept [ 22298006 | Myocardial infarction (disorder)|](http://snomed.info/id/22298006 "22298006 | Myocardial infarction \(disorder\) |") is used in an EHR, it takes on a specific contextualized meaning. The meaning might be an assertion by the person entering the information, that on a given date, the patient was diagnosed with a  _myocardial infarction._ Or, it may be used to document a complication of smoking, a protocol for chest pain, a medication contraindication, a part of a patient's medical history, a possible diagnosis justifying a diagnostic test, a diagnosis excluded by a diagnostic test, a patient's family history, etc.
    * The concept for  _breast cancer_ , [ 254837009 | Malignant neoplasm of breast (disorder)|](http://snomed.info/id/254837009 "254837009 | Malignant neoplasm of breast \(disorder\) |") , might be used to indicate either a current diagnosis of breast cancer, a family history of breast cancer, or a past history of breast cancer. Each of these three meanings differs in regard to the  _context_ in which breast cancer is described. 
      * Current diagnosis of breast cancer indicates that the breast cancer is present now, and in this patient.
      * Family history of breast cancer refers to breast cancer occurring in a family member of a patient. 
      * Past history of breast cancer indicates that the breast cancer occurred in the patient, at some time in the past, and it is not necessarily present now.

Not only are the differences significant relative to a patient's health record, but they are also important to population-based data retrieval; e.g. it is incorrect to retrieve those who have a family history of breast cancer when searching for patients with a diagnosis of breast cancer.

## Default context

When a SNOMED CT concept appears in an EHR without any explicitly stated context, that concept is considered to have a  _default context_. However, the information in the health record structure or information model, can override the default context.

Default context for a _Clinical finding_ concept implies that the finding is present (vs. being absent), that it applies to the subject of the record (the patient), and that it is current (or at a specified time in the past, linked to the concept). 

Default context for a _Procedure_ concept implies that the procedure was completed, that it was performed on the subject of the record (the patient), and that it was done at the present time (or at a specified time in the past, linked to the concept).

## Explicit context

Concepts in the Situation hierarchy (given the appropriate record structure) have explicit context and can represent Clinical findings and Procedures that:

**Have not yet occurred**

For example, 

  *     *       * [ 165137000 | Endoscopy arranged (situation)|](http://snomed.info/id/165137000 "165137000 | Endoscopy arranged \(situation\) |")

**Refer to someone other than the patient**

For example, 

  *     *       * [ 160303001 | Family history: Diabetes mellitus (situation)|](http://snomed.info/id/160303001 "160303001 | Family history: Diabetes mellitus \(situation\) |")
      * [ 395083002 | Discussed with next of kin (situation)|](http://snomed.info/id/395083002 "395083002 | Discussed with next of kin \(situation\) |")

**Have occurred at some time prior to the time of the current entry in the record**

For example,

  *     *       * [ 161514008 | History of aortic aneurysm (situation)|](http://snomed.info/id/161514008 "161514008 | History of aortic aneurysm \(situation\) |")

## Attributes

These attributes are used to represent  _Clinical finding_ and  _Procedure_ concepts within the Situation hierarchy:

  
| Clinical Finding| Procedure  
---|---|---  
Attributes| Associated finding| Associated procedure  
Finding context| Procedure context  
Subject relationship context| Subject relationship context  
Temporal context| Temporal context  
  
## Expressing context

Context typically alters the meaning of a concept, i.e. the resulting concept is no longer a subtype of the original concept. 

**Precoordinated expression**.**** Clinical context is specified in the description and entered into a field in a patient's EHR.

For example,

  *     * The precoordinated expression [ 266897007 | Family history: Myocardial infarction (situation)|](http://snomed.info/id/266897007 "266897007 | Family history: Myocardial infarction \(situation\) |") might be put directly in a blank field in a patient's EHR. A family history of myocardial infarction is not a  _subtype_ of myocardial infarction, so  _family history_ modifies the context.
    * The precoordinated expression [ 54355006 | Intracranial injury, without skull fracture (disorder)|](http://snomed.info/id/54355006 "54355006 | Intracranial injury, without skull fracture \(disorder\) |") might be put directly in a blank field in a patient's EHR. The disorder Intracranial injury, without skull fracture is not a  _subtype_ of skull fracture, so  _without_ modifies the context.

**Postcoordinated expression.** Clinical context is specified by combining concepts.

For example,

  *     * [ 281666001 | Family history of disorder (situation)|](http://snomed.info/id/281666001 "281666001 | Family history of disorder \(situation\) |") , combined with [ 246090004 | Associated finding (attribute)|](http://snomed.info/id/246090004 "246090004 | Associated finding \(attribute\) |") = [ 22298006 | Myocardial infarction (disorder)|](http://snomed.info/id/22298006 "22298006 | Myocardial infarction \(disorder\) |") . These two concepts indicate a family history of myocardial infarction.

**Concept or expression in an EHR field.** A concept is placed in a field with a predefined meaning in an electronic health record. The meaning is conveyed by the context in which it is recorded. 

For example, 

  *     *  _Hip replacement planned_ might be represented as [ 397956004 | Prosthetic arthroplasty of the hip (procedure)|](http://snomed.info/id/397956004 "397956004 | Prosthetic arthroplasty of the hip \(procedure\) |") within a section of a patient's health record called  _Planned actions_. A planned hip replacement is not a kind of hip replacement, so the  _Planned actions_ record section modifies the context
    * [ 2004005 | Normal blood pressure (finding)|](http://snomed.info/id/2004005 "2004005 | Normal blood pressure \(finding\) |") might be placed in a field labeled as  _Goal_ in a patient's EHR. A goal of normal blood pressure is not a kind of Normal blood pressure (finding), so the _Goal_ field in the EHR modifies context.

When a user places a concept from SNOMED CT in a patient's health record, it transforms the concept from a theoretical representation of a clinical notion to an actual instance of the concept.

For example, 

  *     * If the concept [ 192644005 | Meningococcal meningitis (disorder)|](http://snomed.info/id/192644005 "192644005 | Meningococcal meningitis \(disorder\) |") is entered in a patient's EHR, it usually indicates that the patient has had an instance of this disease. Similarly the entry of [ 38102005 | Cholecystectomy (procedure)|](http://snomed.info/id/38102005 "38102005 | Cholecystectomy \(procedure\) |") would imply that the patient has undergone this procedure.

The placement of a concept in an EHR field may:

  * Affect the quality of the meaning, but not the instance. The placement of [ 194828000 | Angina (disorder)|](http://snomed.info/id/194828000 "194828000 | Angina \(disorder\) |") in a field labeled  _Current problems_ ,  _Past medical history_ , or  _History of_ indicates that an instance of angina has occurred in the patient. The specific field affects the  _quality_ of the meaning, but not the instance. The adopted context is compatible with the  _default context_.
  * Critically affect the meaning and the instance. The placement of 49049000 |Parkinson's disease (disorder)| in a  _Family history_ field or [ 41339005 | Coronary angioplasty (procedure)|](http://snomed.info/id/41339005 "41339005 | Coronary angioplasty \(procedure\) |") in a  _Planned procedures_ field does not indicate that an instance of the disorder or the procedure has occurred in the patient. The adopted context is incompatible with the  _default context_ (In these circumstances, the electronic health application programmer needs to identify the appropriate context values from a authoritative list and link them to the concepts placed in the fields to substitute for their default contexts). 

When a _Situation with explicit context_ concept is used in an EHR, it should contain all of the context attributes and applicable values in order to guarantee accurate meaning if that concept (plus context) is subsequently transferred to another record environment.

## Elaboration: changing concept meaning

 _Elaboration_ in SNOMED CT refers to any addition to or change of the meaning of a concept that may be brought about when it is embedded in a clinical situation. Embedding a concept in a clinical situation may  _elaborate_ the semantic interpretation of a concept in one of the following ways:

  1. Subtype qualification
  2. Axis modification
  3. Affirmation or Negation
  4. Combination

### Subtype qualification _  
_

_A subtype qualification_ refines the meaning of a concept._Subtype_  _qualification_ is elaboration that results in a concept that is a subtype of the original unelaborated  _focus concept_. A focus concept is the part of a SNOMED CT expression that represents a clinical finding, observation, event, or procedure. It may be given context by a surrounding _context wrapper_ and may be made more specific by a _refinement_.

For example,

  *     * A past history of replacement of the left hip may be represented by a SNOMED CT expression in which the focus concept, hip replacement, is refined by  _laterality, left_ and enclosed in a context wrapper representing  _past history_.

Subtype qualification has also been called a  _qualifier_ (e.g. ENV136060, GEHR, CTV3) or a _secondary status term_ (e.g. NHS Context of Care). In SNOMED CT, the term  _subtype_ expresses more clearly the distinctive property of a qualifier. This is helpful because the meaning of  _modify_ and  _qualify_ are synonymous in many dictionaries and by some International Organization of Standardization (ISO) authorities.

### Axis modification

The attributes used to define situation concepts permit explicit (rather than default) representation of various contexts. These attributes can change the meaning of a  _Clinical finding_ or  _Procedure_ concept in a way that changes the hierarchy (or axis) of the concept from Clinical finding or Procedure to  _Situation with explicit context_. The resulting modified meaning is not a subtype of the original meaning of the concept, and therefore the axis-modifying attributes are not used to qualify the concept, but instead are used to qualify a Situation concept.

For example, 

  *     * The concept [ 22298006 | Myocardial infarction (disorder)|](http://snomed.info/id/22298006 "22298006 | Myocardial infarction \(disorder\) |") may be elaborated by including it in a clinical record specifying  _family history_. A record of a f _amily history of myocardial infarction_ does not imply that the patient has had any type of  _myocardial infarction_. Therefore,  _family history_ changes the focus from the default context to a specified context.
    * The concept [ 52734007 | Total replacement of hip (procedure)|](http://snomed.info/id/52734007 "52734007 | Total replacement of hip \(procedure\) |") may be elaborated by stating that the procedure is planned for some future date. A record of planned total hip replacement does not imply that the patient has actually had a total hip replacement, i.e. it is not the default context for a procedure.
    * The concept [ 167272007 | Urine protein test not done (situation)|](http://snomed.info/id/167272007 "167272007 | Urine protein test not done \(situation\) |") uses the context-modifying attribute Procedure context (attribute) and a value of Not done (qualifier value). This concept is not a subtype of [ 167271000 | Urine protein test (procedure)|](http://snomed.info/id/167271000 "167271000 | Urine protein test \(procedure\) |") , because its axis (hierarchy) is modified. Note that |<Procedure> not done| is no longer allowed. See the list disallowed naming patterns at [Pre-coordination Naming Patterns Project](https://confluence.ihtsdotools.org/display/IHTSDO1/Pre-coordination+Naming+Patterns+Project). 

 _Axis modification_ is not the same as  _affirmation_ (present) or  _negation_(not present) of a concept, where the essential characteristics of the concept are unchanged.

### Affirmation and Negation

Depending on perspective,_affirmation_ and  _negation_ may simply be viewed as the inversion of meaning of an unelaborated concept that represents a  _Clinical finding_. A concept may be stated in the  _negative_ in a clinical situation (e.g.  _meningism not present_). This creates the potential for a concept to represent two meanings, one of which is the inverse of the other. However, the effects of negation on interpretation are far-reaching and distinct from other elaborations.

Negation, like axis modification, results in a concept that is not a subtype of the unelaborated concept. However, negation explicitly rules out the unelaborated concept.

For example,

  *     * _Family history of myocardial infarction_ does not imply that a patient had a myocardial infarction.
    * _No headache_ implies that  _patient has headache_ is untrue. A negative statement may expand further in the opposite direction of a positive statement. If  _headache_ is a subtype of pain then  _patient has headache_ implies  _patient has pain_. However,  _patient has no headache_ does not imply  _patient has no pain_. Conversely,  _patient has headache_ does not imply  _patient has occipital headache_ ,  _but patient has no headache_ implies  _patient does not have occipital headache_.

The representation of negation within SNOMED CT that arises from restrictions imposed by the existing description logics results in the hierarchy being inverted e.g., coronary heart disease not present is NOT properly a subtype of "Heart disease not present". An initial attempt was made to move negated content into the situation hierarchy so that the content remained available, but SNOMED International recommends handling negation outside of SNOMED CT by the EHR vendor rather than try and represent it within the terminology.

  

A  _concept_ may be stated to be possible in a clinical situation. Statements that explicitly indicate uncertainty can be considered in two possible ways:

  * Somewhere between affirmation and negation
  * As a type of elaboration

### Combination

Two or more concepts may be embedded in a clinical situation in a way that links them together. Linkages may include:

  * Simple combination of concepts
  * Combination of a concept that is present and another that is absent

## Context shift

Once a concept has  _context-shifted_ and become  _context-dependent_ , it should not be used in an expression that once again shifts context. In other words, when one context attribute is given an axis modifying value, the other context attributes are fixed.

For example,

  *     * The model for [ 430679000 | Family history of diabetes mellitus type 2 (situation)|](http://snomed.info/id/430679000 "430679000 | Family history of diabetes mellitus type 2 \(situation\) |")  _IS A_ Situation with explicit context (situation) with:
      * Subject relationship context of Person in family of subject (person)
      * Associated finding of Diabetes mellitus type 2 (disorder)
      * Finding context of Known present (qualifier value)
      * Temporal context of Current or past (actual) (qualifier value)

Even though the  _Family_ part of the concept results in an explicit axis shift of the Subject relationship context only, SNOMED CT requires default values for Finding context and Temporal context, rather than allowing them to be unspecified. 

To negate a  _concept_ with Finding context (attribute) of Known present (qualifier value), the Finding context (attribute) should instead have a value of Known absent (qualifier value).

For example,

  *     * The concept [ 160273004 | No family history: Hypertension (situation)|](http://snomed.info/id/160273004 "160273004 | No family history: Hypertension \(situation\) |") negates [ 160357008 | Family history: Hypertension (situation)|](http://snomed.info/id/160357008 "160357008 | Family history: Hypertension \(situation\) |") by changing the value of Finding context (attribute) to Known absent (qualifier value) with Temporal Context (attribute) of All times past (qualifier value). The parent  _IS A_ Situation with explicit context (situation) with:
      * Temporal context of All times past (qualifier value)
      * Associated finding of Hypertensive disorder, systemic arterial (disorder)
      * Finding context of Known absent (qualifier value)
      * Subject Relationship Context of Person in family of subject (person)

