# Intended Use

SNOMED CT is intended to be used in healthcare:

  * To provide effective and comprehensive coverage of terms
  * As a terminological resource
  * For implementation in electronic health applications

The purpose of SNOMED CT is to represent clinically relevant information reliably and reproducibly in electronic health applications, (most often electronic health records or EHRs) to support:

  * Delivery of multidisciplinary, high-quality healthcare to individuals and populations 
  * Optimal retrieval, processing, and rendering of clinical information
  * Effective use of clinical information consistently and reproducibly
  * Use of clinical information for statistical and reporting purposes

  

## Semantic Interoperability

The overall semantic interoperability of electronic health applications __ is achieved through the combined functioning of the information architecture of the application and the terminology that populates it. A basic principle of SNOMED CT is to create and maintain semantic interoperability of clinical information.  _Semantic interoperability_ is the capability of two or more systems to communicate and exchange information. Each system should be able to interpret the meaning of, and effectively use, received information.__ To achieve this goal, the meaning of the information must be agreed upon, consistent, and clearly expressed.

  

Context is an important part of representing clinically relevant information.

When entered in an EHR, concepts in the Procedure and Clinical finding hierarchies have the following default contexts.

  * The procedure has actually occurred (versus, e.g. being planned or cancelled) or the finding is actually present (versus, e.g. being ruled out or considered)
  * The procedure or finding refers to the patient of record (versus, e.g, a family member)
  * The procedure or finding is occurring now or at a specified time (versus some time in the past)

When a concept is entered into an EHR, the information in the health record structure or its information model, can provide the context.

In addition to using the record structure to represent context, there may be a need to override the defaults and specify a particular context using the formal logic of the terminology. For that reason, SNOMED CT has developed a context model, i.e Situation with explicit context, to allow users and/or implementers to specify context using the terminology, without depending on a particular record structure. The Situation with explicit context hierarchy, and various attributes assigned to concepts in the hierarchy, accomplish this.

Designers and implementers of electronic health applications need guidance to identify which fields within their record structure will critically affect the meaning of concepts. They require open strategies to preserve meaning if concepts are retrieved or transferred and to allow detection of equivalence to constructs derived from alternative approaches.

(see also _Situation with Explicit Context_ section)

  

  

