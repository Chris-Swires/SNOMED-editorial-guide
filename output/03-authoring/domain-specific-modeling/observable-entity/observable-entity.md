# Observable Entity

Definition| Examples  
---|---  
Information about a quality/property to be observed and how it will be observed| 

  * [ 416540001 | Calcium deposit observable (observable entity)|](http://snomed.info/id/416540001 "416540001 | Calcium deposit observable \(observable entity\) |")
  * [ 276885007 | Core body temperature (observable entity)|](http://snomed.info/id/276885007 "276885007 | Core body temperature \(observable entity\) |")

  
  
## Use of Observable Entities

Observables entities may be used to:

  * Code elements on a checklist or assign values to elements.

For example, _c_ _olor of nail_ is an observable entity. _Gray nails_ is a finding.

  * Code headers on a template

For example, the observable entity, gender, may be used to code a section of a template titled gender. The user would choose masculine, feminine, transgender, etc. which would then constitute a finding such as [ 703117000 | Masculine gender (finding)|](http://snomed.info/id/703117000 "703117000 | Masculine gender \(finding\) |") .

### Types of Observable Entities

There are four general types of observable entities for use in health care. Each has different representation requirements and patterns, i.e. the set of attributes will vary.

  * **Quality.** A characteristic, feature, or property that is inherent in someone or something.

For example, mass of a person, temperature of internal organs, concentration of sodium in plasma, angle of a joint

  * **Disposition.** A characteristic or feature that is not always realized in full.

For example, antibiotic susceptibility of a certain population

  * **Function.** The ability of a person, some part of a person, or a thing to perform activities or realize processes.

For example, ability to walk

  * **Process.** A process or outcome of a process

For example, secretion rate, heart rate, respiratory rate

## Observable Entity vs. Evaluation Procedure

The observable entity and evaluation procedure hierarchies have some of the same attributes. While there should not be a one-to-one correspondence between concepts in these hierarchies, legacy implementations, as described below, may result in the occasional duplication of content.

SNOMED CT contains some concepts in the evaluation procedure hierarchy that logically belong in the observable entity hierarchy. This is a legacy issue that has been discussed extensively with the community of practice. At this time, the existing evaluation procedure hierarchy will be retained to support existing use cases. No new content will be added in the international release in the evaluation procedure hierarchy for content that logically belongs in the observable entity hierarchy. If new content is needed in the evaluation procedure hierarchy to satisfy existing use cases, it can be created in national extensions.

While some users have indicated they want to use a procedure concept for ordering a test and an observable concept for reporting the result, this is not an acceptable use case for the International release of SNOMED CT. An evaluation procedure being ordered implies that there is an expectation that a value, in association with the ordered procedure, will be provided. Evaluation procedures, for all intents and purposes, are observables with another semantic tag. The nature of their top level parent (Evaluation procedure) implies that they require a value in order to be assessed. Thus, they can be used equivalently with observables.

As for the progression of the completion of an assessment, that is related to the state diagram (i.e., status) of the progression of a procedure and should not be precoordinated, but handled by the information system in which orders are processed (it is dynamic, not static). The information system should be able to capture the status of a procedure (e.g., ordered, in process, completed). We would not expect the terminology to pre-coordinate this.

As an example, LOINC recognizes that there are three different aspects to an observable: 

1) those that can serve as both an order and an observation (e.g. blood glucose level); 

2) those that can be ordered but not directly resulted (e.g. urinalysis, which is a convenience order for multiple individual observations on urine); and 

3) those that can only be resulted and not directly ordered (usually part of an automated system, such as computation of MCHC in hematology). 

LOINC assigns this aspect with an attribute value. It is not one of the six main LOINC parts typically visible to users; however, it is included in the LOINC database.

Some areas of the observable entity hierarchy need clarification and remodeling. This includes upper level concepts and hierarchies such as 246464006 |Function (observable entity) and 415178003 |Process (observable entity)| as well as intermediate primitive and leaf node concepts.
