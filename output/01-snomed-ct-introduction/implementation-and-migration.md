# Implementation and Migration

## Electronic health application

A terminological resource is only one part of an electronic health application. Implementation of SNOMED CT should support applications in meeting user needs, rather than adding a burden to development.

The functions required to implement a terminology can be divided into those that are:

  * Performed without reference to data stored in a particular application record structure.
  * Involved in storing, retrieving, or processing application data.

Applications may make use of different aspects of SNOMED CT. Some may require SNOMED CT for a very limited range of uses for which there may be minimal value. These applications may not require all the functions for a full implementation or all the concepts and codes in SNOMED CT.

  * There may be a general benefit in consistency with other more terminology rich applications. 

## Existing information

A substantial body of clinical information may already be present in an electronic health application. Much of this information is represented using existing coding schemes, terminologies, and classifications. This information may be of value to individual patient records or to populations. Similarly, there are many queries and decision support protocols that contain information based on existing terminologies.

A new terminology should make provisions for the continuing use of information stored in records, queries, and protocols represented by other terminologies. There are two general approaches to this:

  * Conversion of legacy data into a form consistent with SNOMED CT.
  * Allowing legacy and SNOMED CT data to coexist. Legacy codes must be recognizably different from SNOMED CT codes. In addition, the relationship between codes in SNOMED CT and legacy codes must be recognized when retrieving data.

## Reliability and reproducibility

Information represented with SNOMED CT codes must be reliable and reproducible. This means:

  * The meaning of a code should not change over time.
  * Information should be reproducible independent of the application.
  * The query of codes should be reliable. This means:
    * There should be complete recall, including specific, more detailed codes and expressions subsumed by general codes and expressions in the query.
    * There should be specificity and precision excluding codes and expressions that are not subsumed by the codes and expressions in the query.
    * The effects of the following should be taken into account:
      * Precoordinated relationships between codes in records or queries.
      * Postcoordinated qualifications applied to codes or expressions in records or queries.
      * Relationships between codes and other contextual information implied by the record structure.

