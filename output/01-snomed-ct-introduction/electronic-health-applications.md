# Electronic Health Applications

The anticipated benefits of SNOMED CT are derived from use of information to support effective delivery of high quality healthcare to individuals and populations.

## Individuals

###  _Aide-memoire_ for clinicians

Clinically relevant information in an electronic health record acts as an _aide-memoire_ for the clinician, enabling recall of previous interactions.

### Structured data entry

Structured data entry enhances the value of an electronic health record in various ways. It may:

  * Simplify recording of frequently collected data
  * Ensure that information is collected in a reliable and reproducible way
  * Help clinicians to think logically about a patient's condition

Clinical applications may combine several data entry methods. Some of the most commonly used methods are as follows:

  * Searching a coded terminology for matching terms using words or phrases
  * Navigating a hierarchical structure to refine or generalize meanings
  * Using templates or protocols to record structured information; may be based on answers to questions or values entered on a data entry form
  * Parsing of natural language to identify and retrospectively code and structure data
  * Typing, speech recognition, and document scanning

### SNOMED CT requirements for data entry

Data entry may require selection from a list. Such lists must be manageable in size and appropriate to the needs of the user.

  * A multilingual, multidisciplinary terminology requires mechanisms that limit and/or prioritize access to terms and codes in ways that are appropriate to:  

    * Languages and dialects
    * Countries, organizations, disciplines, specialties, and users
    * Contexts within a record or protocol

  * To display a code's description in a list that has not been derived from a text search, the term must be intelligible and appropriate to the user. 

When a code is entered in a record it may require structured entry of additional qualifying information.

  * Qualifying information may be coded.

For example,

The code named _removal of kidney_ may require a statement of laterality.

  * Qualifying information may be numeric.

For example,

The code named _hemoglobin measurement_ may enable entry of a numeric value expressed in a substance concentration.

To meet all the needs for coded structured data entry in a health record, a terminology must have an adequate scope.

  * The main body of SNOMED CT covers the required scope.
    * It may be difficult to meet the needs of some organizations, specialties, and users; they may need specific terms or codes to meet their own operational requirements. Therefore, SNOMED CT is structured to allow for additions to meet specific needs.

A clinical terminology requires frequent changes including new codes, terms, and relationships between codes. Changes may be required due to new:

  * Health risks
  * Health and disease process information
  * Drugs, investigations, therapies, and procedures

### Presentation

The presentation of clinical information may:

  * Highlight key information and indicate links between items, thus helping clinicians understand patients' conditions.
  * Be determined entirely by record structure without regard to the terminological resource (e.g.,may be in chronological order, by author, or by the type of recorded event).
  * Be enhanced based on its semantic content (e.g., grouping procedures, investigation results, or observations relevant to a particular disease process).

### Decision support

Interfaces between recorded clinical information and appropriate decision support tools and reference works may assist the clinician in selecting diagnostic tests, making diagnoses, and choosing treatment. Decision support requires selective retrieval and processing of information in an individual health record to determine whether the patient has particular characteristics relevant to the decision support protocol. The algorithms for establishing the presence of characteristics should include relationships between coded meanings and other aspects of record structure. Performance is also important, as decision support algorithms are typically run in real-time during data recording. Decision support algorithms may:

  * Depend on numeric or other values (and their units) associated with particular observations
  * Include the context in which information is recorded, e.g., the date of recording and any stated relationships between individual items of information
  * Include information such as age, sex, clinical conditions, findings, surgical procedures, medication, and social/environmental factors, such as occupation
  * Use codes or identifiers from other terminologies, classifications, or proprietary schemes. Mapping tables are required to allow applications that use a terminology to interface with these resources

### Communication

Effective delivery of high quality healthcare to individuals requires communication between those involved in providing care. This requires communication within and across teams or organizations.

The primary objective of many clinical communications is to convey information from human to human. Communications with this purpose should include human-readable text. Relying on text from coded data is not recommended. Coded data is therefore not relevant to the requirement for human-to-human communication.

A receiving application may process clinical communications. This information may need to be retrieved and processed to meet terminology requirements. To meet terminology requirements, messages and other means of electronic communication must permit the communication of SNOMED CT identifiers and associated structures.

Communication specifications, such as those produced by HL7 and CENTC251, define the structures to meet requirements. The coded information is used in two distinct situations:

  * Coded elements that must be filled with codes enumerated in the specifications. The codes enumerated in the specifications generally communicate, mission critical features of the message. Some of the enumerated codes and the codes in a clinical terminology may have overlapping meanings.
  * Coded elements that are populated with clinical codes from appropriate coding schemes. The open coded elements may require the full expressiveness of a terminology. Some of the open coded elements may be restricted to codes that express particular types of meaning.

For example,

HL7 requires that coding schemes meet certain criteria, one of which is the ability to express limited subsets of codes appropriate to particular elements.

There are two situations in which communication of coded information may be of value for human-to-human communication. They are where:

  * The storage capacity or communication bandwidth is restricted. Receiving applications must contain (or have real-time access to) a table listing the text description associated with each code.
  * The translation between the languages of the sender and the recipient is needed. A coded representation of a meaning may allow the appropriate description in the recipient's language.

Recording a particular code may trigger a communication. And, receipt of a code, may trigger specific processing in the receiving application.

For example,

Recording a decision to prescribe a medicine might trigger an electronic prescription sent to the pharmacy. Receipt of such a prescription might trigger dispensing and stocking activities.

The relationship of a trigger is an additional characteristic of a code that may be context dependent.

### Patient involvement

Patients may wish to view, and comprehend, their own records. For SNOMED CT to meet this requirement, the inclusion of patient-friendly terms should be considered. However, this requirement should not take precedence over accurate professional terminology.

Patients may also be allowed to contribute to their own records, i.e. be users of SNOMED CT.

For example,

Patients with diabetes may monitor and record their blood glucose levels. 

## Populations

### Identify and monitor health needs

The provision of effective high-quality care to populations requires an understanding of the state of health and healthcare needs of that population. Information recorded about individual patients must be available for analysis to determine trends.

  * It must be possible to analyze data recorded with SNOMED CT.

Population trends are usually monitored at a higher level, using codes that are more general than those used in individual patient records. This may be accomplished through one or both of the following methods:

  * Using hierarchical relationships and/or equivalences defined within SNOMED CT.
  * Mapping SNOMED CT codes to codes in appropriate classifications.

Appropriate analysis of information requires reliable and reproducible queries.

  * The scope of SNOMED CT must cover the types of information relevant to analysis.
  * Analysis may require data about multiple clinical characteristics. Queries must account for both the terminology and the record structure.

### Audit quality of service

The requirements for analysis of quality of service are similar to those for analysis of health needs. The main difference is that the scope of the analysis must be extended to cover consultations, referrals, procedures, medications, and other interventions.

### Support research

The requirements for research are also similar to those for analysis of health needs, however, there is a need to allow for:

  * Recording interventions in ways that do not compromise blind and double blind trials.
  * Adding SNOMED CT content for experimental observations or treatments, which may never require permanent addition to the terminology.

### Reduce bureaucracy; manage and fund care delivery

The management and funding of healthcare delivery often depends on recording and reporting of particular information, e.g. bundled or packaged care. Automating this process offers a way of reducing bureaucratic overhead, i.e. mapping clinical information recorded with SNOMED CT to appropriate forms.

Some information required for management and funding purposes is specifically related to claims for particular events or services.

For example,

Funding general practitioners in the NHS is dependent on meeting immunization administration and cervical cytology screening targets.

The scope of SNOMED CT must be adequate to meet these needs, or must be capable of extension to meet these needs, without presenting irrelevant terms or coded meanings to those not requiring them.

### Enable reporting of external health statistics

Organizations, such as WHO and some government bodies, require specific data related to healthcare statistics. Organizations should be able to use clinical information recorded with SNOMED CT. When this is not possible, the clinical information should at least support their manual generation. Using structured data entry allows for direct mapping to statutory national and international classifications such as ICD, CPT, OPC, etc.

### Identify patients in need of interventions proactively

Population-based preventive care should be offered to specific groups, based on sex, age, medical history, and other factors. Health information applications based on information recorded with SNOMED CT can be used to identify patients, so they can be offered appropriate care.
