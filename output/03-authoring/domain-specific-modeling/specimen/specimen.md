# Specimen

Definition| Examples  
---|---  
Entities that are obtained (usually from patients) for examination or analysis| 

  * [ 384744003 | Lymph node from sentinel lymph node dissection and axillary dissection (specimen)|](http://snomed.info/id/384744003 "384744003 | Lymph node from sentinel lymph node dissection and axillary dissection \(specimen\) |")
  * [ 122880004 | Urine specimen obtained by clean catch procedure (specimen)|](http://snomed.info/id/122880004 "122880004 | Urine specimen obtained by clean catch procedure \(specimen\) |")

  
  
Specimen concepts can be defined by attributes which specify the:

  * Normal or abnormal body structure from which they are obtained
  * Procedure used to collect the specimen
  * Source from which it was collected
  * Substance of which it is comprised

##  _Specimen_ not _sample_ in FSN

The Fully Specified Name for Specimen concepts should include the term _specimen,_ not _sample_. This also applies to descriptions in other hierarchies in addition to the Specimen hierarchy. 

Because of the differentiation between specimen and sample in some domains (e.g. biobanking), an additional description using the word _sample_ should not be added to the specimen concept.

Legacy concepts exist in SNOMED CT that contain both _specimen_ and _sample_ in descriptions. Those are being retained for historical purposes.

## Combined specimens and pooled specimens

A _combined specimen_ refers to more than one specimen taken from the same subject and combined in a single container to form a single specimen. A _pooled specimen_ refers to specimens taken from multiple subjects and pooled (mixed) together into a single container. SNOMED CT concepts will include the appropriate term in the FSN and will not treat _combined specimen_ and _pooled specimen_ as synonymous.
