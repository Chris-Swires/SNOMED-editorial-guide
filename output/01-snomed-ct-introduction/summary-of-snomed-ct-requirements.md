# Summary of SNOMED CT Requirements

A summary of the SNOMED CT requirements is as follows. Additional information may be found throughout this guide, as well as in other documents on the SNOMED International website at <http://www.snomed.org/learn-more>.

### **Terminology Structure**  
  
Coded meaning| 

  * The central component is coded meanings
  * Each code must have a single clear and unambiguous meaning

  
Identifier| 

  * Components must have unique identifiers
  * The internal structure of these identifiers must not imply the meaning or relationships of a code

  
Description| 

  * Represents the association between terms (text strings) and the meanings that they describe (may be language or dialect dependent)

  
Preferred Term| 

  * Represents the special association between each code and a preferred term (used to display the meaning, unless there is an alternative preference)
  * The preferred term association is language or dialect dependent

  
Fully Specified Name| 

  * Provides each code with a structured fully specified name that unambiguously describes its meaning
  * The fully specified name is defined in a reference language (the language of first use)
  * Translations of the fully specified name may also be required

  
Hierarchy| 

  * Represents hierarchical relationships between coded meanings
  * The form of representation allows a coded meaning to have multiple hierarchical parents (supertypes)
  * It guarantees that any alternative hierarchical view of a coded meaning is consistent

  
Relationship| 

  * Represents non-hierarchical relationships between coded meanings

  
  
### **Content**  
  
Scope| 

  * The scope __ is adequate to meet the requirements of various countries, organizations, disciplines, and specialties
  * The extent to which the content requirements are covered develops over time
  * However, the initial release should cover:
    * The scope of the existing clinical terminologies
    * All versions of the  _Read Codes_ and NHS Clinical Terms
    * All versions
    * Other scope requirements identified by the Editorial Board

  
Updates| 

  * The content __ is regularly updated

  
Granularity| 

  * Allows coded meanings to be expressed at different levels of granularity

  
Not Elsewhere Classified (NEC); Not Otherwise Specified (NOS)| 

  * Codes with _not elsewhere classified_ or _not otherwise specified_ must be inactivated and no new ones may be added

  
Extension| 

  * Allows extensions to the main body of work
  * Extensions are distinguishable from components of the main body; should be traceable to a responsible organization
  * Allows for distinguishing and tracing the code source or identifier used in patient records

  
  
### **Maintenance and Distribution**  
  
Distribution| 

  * Distributed in a format that is readily usable by application developers
  * This format is fully specified and is not changed from release to release
  * May be distributed for use with associated software, such as a browser

  
Persistence| 

  * The meaning of a code is persistent; It is not changed or deleted by updates
  * A code may be marked as inactivated when its meaning is found to be ambiguous, redundant or otherwise incorrect
  * Changes to the association between a concept and a code do not change or delete the description. The description is marked as inactivated, and a new corrected description is created

  
History| 

  * All changes to components are tracked and saved in history files (includes details about new components and changes to the status of components)
  * When a component is made inactive, relationships or references indicate the replacement or equivalent component

  
  
### **Subsets**  
  
Concepts| 

  * Includes a mechanism for representing subsets of concepts appropriate for a language, dialect, or specialty. It should allow:
    * Specification of the synonyms, preferred terms, and translated fully specified names in each language or dialect
    * Rational combination of languages and modification of language subsets to meet the needs of organizations or specialties

  
Codes| 

  * Includes mechanisms for representing subsets of codes for a country, organization, discipline, or specialty. The form of representation should allow:
    * An indication of the priority, or frequency of use
    * Rational combinations of subsets to meet the needs of users or groups of users

  
Specified Contexts| 

  * Includes mechanisms for representing subsets of codes and concepts for particular contexts in a record, decision support protocol, or data entry field

  
Combinations| 

  * Include consistent rules for combining subsets to meet the requirements of users

  
Distribution and Installation| 

  * Subsets are distributed in a format that is readily usable by system developers. The format is fully specified and does not vary from release to release. The distribution format allows:
    * Subsets to be installed separately
    * Related or interdependent subsets to be selected and installed as groups
    * Subsets to be updated with each new release

  
Configuration| 

  * It is possible to configure an application to use a particular subset or combination of subsets; changing configurations does not require reinstallation

  
  
### **Relationships**  
  
Navigating Relationships| 

  * Includes relationships that allow hierarchical navigation from a chosen code to a code that represents either a subtype or part of the chosen code
  * Supports navigation from a specific code to more general codes that represent a supertype of that code
  * Navigational concepts are not supported by SNOMED International

  
Aggregation of Related Codes| 

  * Includes relationships that allow aggregation of related codes to enable comprehensive and accurate retrieval from patient records
  * These relationships, together with appropriate history and cross-reference tables, enable the aggregation to include inactivated codes with similar or equivalent meanings

  
Defining Characteristics| 

  * Includes formal definitions of codes represented by relationships with defining characteristics (e.g. the anatomical site of the code named _appendicitis_ is the _vermiform appendix_)

  
Qualifying Characteristics| 

  * Enables a code recorded in a patient record to be qualified by adding relevant qualifying characteristics
  * Each qualifying characteristic is itself a code with a specified relationship to a qualified code
  * Specifies possible qualifying characteristics for each code or for a group of related codes (e.g. an anatomical site could be added to the code named _osteoarthrosis_)

  
Kind-of-Value| 

  * Enables codes to be qualified by the addition of relevant values
  * Specifies the types of values that can be added to particular codes (e.g. a substance concentration value can be added to the code named _hemoglobin concentration_)

  
Additional Characteristics| 

  * Is able to assert other characteristics of a code that may be time- or context-dependent (e.g. new medical information may require updates to some codes)

  
  
### **Retrieval**  
  
Analysis| 

  * Enables the consistent and reproducible storage of information, which is subsequently retrieved for analysis; this requires retrieval that allows the inclusion of subtypes and equivalent codes to be included. Equivalent codes may include:
    * Codes represented in another (legacy) coding scheme
    * Redundant codes that were inactivated
    * Combinations of general codes and qualifying characteristics
  * Analysis usually requires retrieval of selected records from a population of patient records; usually performed in batch

  
Patient Review| 

  * Enables the consistent and reproducible storage of information, which is subsequently retrieved for patient recall for preventive procedures or review; requirements similar to those for analysis

  
Decision Support| 

  * Enables the consistent and reproducible storage of information, which is subsequently retrieved for decision support
  * Requirements are broadly similar to those for analysis
    * Decision support requires retrieval of selected records from an individual patient record 
    * Requires real-time processing to determine code meaning equivalence

  
Presentation| 

  * Enables the consistent and reproducible storage of information, which is subsequently retrieved for presentation 
  * Requirements are similar to those for decision support
    * Must be real-time, but usually involves filtering by broad categories of code; less precise than for decision support

  
  
### **Searches and Text Parsing**  
  
Searches and Text Parsing| 

  * SNOMED CT facilitates searches for descriptions
    * A simple keyword index may be generated from the descriptions and used for more effective searching although this may not be optimal due to:
      * Use of abbreviations
      * Word form variants
      * Word order variants
      * Word equivalences and combinations
      * Locally added mnemonics for frequently used descriptions
      * Composite coded meanings that can only be represented by:
        * Combinations of a code with one or more qualifying characteristics
        * Multiple codes related together by the patient record structure components
      * Searches with multiple redundant hits for a single code  

        * When several synonyms of the same code match the search key
        * When techniques for word equivalences and combination are applied and return alternative descriptions related to the same code for two or more word equivalences
      * Searches with multiple redundant hits for a large number of closely related coded meanings
      * Search keys matching descriptions associated with a code with a more general meaning and many of its more specific hierarchical descendants

A further complication is the application of searches within subsets. This restricts the range of available concepts or codes; efficiency may depend on the relationships of keyword indices and subsets  
Parsing or Encoding Free Text| 

  * The use of natural language parsing to encode free-text derived from typing, scanning, or voice recognition is increasing; the text of descriptions and associated search indices may assist with this process

  
  
### **Implementation**  
  
Terminology Services| 

  * Terminology services should be implemented independent of application data; by individual applications or by terminology servers accessible by many applications

  
Advice| 

  * Application data cannot be specified to the same level of detail as terminology services. It us dependent on the general functionality of the application and its record structure
  * Providing advice early in the SNOMED CT implementation process is required. This helps with some issues that may not be immediately apparent to developers

  
Limited Applications| 

  * The advice provided should not place onerous requirements on applications with limited needs for the SNOMED CT terminology
  * It is inappropriate to have _all-or-nothing_ requirements for SNOMED CT enabled applications

  
  
### **Legacy Data and Migration**  
  
Code Recognition| 

  * It should be possible to distinguish a code from an earlier coding schemes (SNOMED, Read Codes, or NHS Clinical Terms) from the identifiers used in SNOMED CT

  
Equivalence| 

  * It must be possible to relate each code in early coding schemes (SNOMED, Read Codes, or NHS Clinical Terms) to a code in SNOMED CT

  
Query/Protocol Conversion| 

  * There must be support to convert queries and protocols, based early coding schemes (SNOMED, Read Codes, or NHS Clinical Terms), to SNOMED CT compatible forms

  
Record Conversion| 

  * It should be possible to convert legacy data, based on early coding schemes (SNOMED, Read Codes, or NHS Clinical Terms), to SNOMED CT compatible forms. This is subject to medico-legal constraints

  
Migration of Terminology-Dependent Products| 

  * Projects in the UK NHS, that currently make use of Read Codes or NHS Clinical Terms, must plan migration to allow future use of SNOMED CT

  
  
### **Data Structure**  
  
Patient Record Architectures| 

  * SNOMED CT is intended to represent clinical meanings in patient records
    * A patient record consists of a series of related statements that are organized under headings
    * The statements and headings may contain clinical codes derived from SNOMED CT 
    * Headings, and other contextual elements, may modify the meaning of related statements

  * The relationship between a terminology, such as SNOMED CT, and a record architecture can be summarized as follows:
    * SNOMED CT codes and terms may populate different elements in the record structure
      * Different SNOMED CT codes may be applicable to different elements in the record
      * Some codes may not be appropriate for inclusion in the record
    * The meaning of a SNOMED CT code may be modified by its context within the record structure

  * SNOMED CT should be evaluated within the context of evolving standards for patient record architectures. Recommendations based on the evaluations may include:
    * Possible changes to record architectures in order to realize benefits from SNOMED CT
    * Changes to SNOMED CT to better fit into record structures
    * Selecting SNOMED CT codes for use in specific record structure contexts

  
Expression Coordination and Equivalence| 

  * Some codes may be entered in a precoordinated or a post-coordinated manner  
  
For example, "excision of ovary" might be entered by:  
  
selecting the precoordinated code 83152002 |Oophorectomy (procedure)|,   
  
or alternatively by selecting the codes for

71388002 |Procedure (procedure)| and adding the qualifying characteristics:   
  
260686004 |Method (attribute)| = 129304002 |Excision - action (qualifier value)|  
405813007 |Procedure site - Direct (attribute)| = 15497006 |Ovarian structure (body structure)| 

  * The coded meanings are stored in the forms entered. This may be using a single precoordinated code, a single post-coordinated expression, or a set of separate codes that together represent the clinical meaning.
  * A retrieval query must therefore search for the precoordinated and all possible post-coordinated ways of expressing equivalent meanings. This can be done using the Expression Constraint Language (<http://snomed.org/ecl>) and a terminology service that can compute subsumption between expressions.
  * These methods for retrieving records based on their clinical meaning rely on the formal definitions of SNOMED CT concepts being as complete as possible. Missing defining characteristics may result in problems with equivalence testing and therefore data retrieval.

  
  
### **Communication**  
  
Clinical Information| 

  * The ability to communicate clinical information (represented by SNOMED CT) between applications must be supported
  * Message specifications and other communication structures must accommodate SNOMED CT identifiers, and combinations of identifiers, in order to express postcoordinated coded meaning

  
Message Specifications| 

  * Current message specifications (e.g EDIFACT, HL7, and XML) use plain text files; SNOMED CT identifiers must use plain text so that they are appropriate for these messages

  
Postcoordinated Expressions| 

  * Communication of postcoordinated expressions may be possible using specific qualifier fields in messages. This can also be accomplished by using syntactic representation of identifier combinations; these must be consistent with message syntax and field size limitations

  
  
### **Mapping**  
  
Classification| 

  * Based on recorded codes, mapping tables are used to generate statistical and administrative data
  * Automation of the process depends on the nature of the classification, the richness of the mapping table, and the functionality of the mapping software

  
Grouping| 

  * Mapping tables are used to generate groupings for funding, administration, etc.
  * Mapping to a classification, then using the classification codes to generate groupings, is an alternative method

  
Communication Specifications| 

  * Codes are mapped to specific values, in an enumerated list, associated with a message or communication specification
  * Recognizing these mappings may prevent double data entry, when sending or receiving such messages

  
Reference Works| 

  * Codes are used to establish links with decisions-support protocols or other references
  * Mapping between these codes and reference sources may help to facilitate their use

  
  
**Availability**  
Limited Applications| 

  * Applications vary in their ability to use terminological components
  * Special consideration may be necessary for applications that require only limited use of SNOMED CT

  
Concepts in Different Languages| 

  * Translating SNOMED CT into other languages is required
  * Multiple translations may support communication of clinical information across language barriers

  
Patients| 

  * Patients may be users of SNOMED CT if they record information in their own medical records
  * This may require limited licensing of SNOMED CT for populations, in general

  
  
 _  
_
