# Staging and Scales

Definition| Examples  
---|---  
This hierarchy contains concepts which are named, authoritative, and internationally relevant staging or grading systems used to either make a judgment about the patient, e.g. cognition, or, evaluate a patient to determine the phase, or progression of a disease.| Assessment

  * [ 273472005 | Functional status index (assessment scale)|](http://snomed.info/id/273472005 "273472005 | Functional status index \(assessment scale\) |")

Staging

  * [ 254294008 | Tumor-node-metastasis (TNM) head and neck tumor staging (tumor staging)|](http://snomed.info/id/254294008 "254294008 | Tumor-node-metastasis \(TNM\) head and neck tumor staging \(tumor staging\) |")

  
  
Some diseases are represented using a staging and/or grading system to signify the severity, extent, or rate of growth of a disease. For example, _chronic kidney disease_ is represented with five stages determined by level of kidney function.  

## Assessment scale requests

Generally, requests to add the most recent version of an assessment scale are accepted. Updated versions of existing content are also accepted. Older versions may be added if justification is appropriate. Older versions may also remain as active concepts due to the need to retain history on the use of specific instruments. 

When adding an assessment to the 273249006 |Assessment scales (assessment scale)| subhierarchy, also add corresponding concepts in the procedure and observable entity hierarchies:

For example,

  *     * X assessment scale (assessment scale)
    * Assessment using X assessment scale (procedure)
    * X scale score (observable entity)

Case sensitivity will most often be CS, except for the procedure concepts with descriptions beginning, "assessment using..."; these will use cl, _Only initial character case insensitive_. 

Do not change the US/GB spelling variants for standardized names. 

For example,

  *     * Do not add a GB spelling for _World Health Organisation_ , as in 769390009 |World Health Organization Adult Attention-Deficit Hyperactivity Disorder Self-Report Scale (assessment scale)|, because _World Health Organization_ is the proper name of the organization. 

A revised or modified version of an assessment is not a subtype of the original. 

## Modeling

Concepts of the type |Assessment using X assessment scale (procedure)| are modeled with a proximal primitive parent of  [ 445536008 | Assessment using assessment scale (procedure)|](http://snomed.info/id/445536008 "445536008 | Assessment using assessment scale \(procedure\) |") or one of its subtypes, as appropriate. A Method of Evaluation-action (qualifier value) is also added. 

For example, 

  *     * [ 445719003 | Assessment using visual analog pain scale (procedure)|](http://snomed.info/id/445719003 "445719003 | Assessment using visual analog pain scale \(procedure\) |") has a parent of [ 445536008 | Assessment using assessment scale (procedure)|](http://snomed.info/id/445536008 "445536008 | Assessment using assessment scale \(procedure\) |")

Concepts of the type |X scale score (observable entity)| are modeled with a proximal primitive parent of  [ 782487009 | Assessment score (observable entity)|](http://snomed.info/id/782487009 "782487009 | Assessment score \(observable entity\) |") or one of its subtypes, as appropriate.

For example, 

  *     * 165317007 |Mental disability discharge score (observable entity)| has a parent of 165314000 |Mental disability assessment score (observable entity)|

### Relationship of total scores and subscores

Subscores are not subtypes of total scores, nor are total scores subtypes of subscores. Thus, these concepts have sibling relationships. 

(See also  _Why is Content Rejected_ page _, Proprietary Names_ for information about use of Questionnaire and Scale names)
