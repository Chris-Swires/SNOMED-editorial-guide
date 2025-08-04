# Observable Entity Defining Attributes

Where the MRCM allows Pharmaceutical / biologic product (product) and its descendants as valid values for Observable entity (observable entity), the Pharmaceutical / biologic product (product) subhierarchy is not currently used for values with these attributes in the International Release except for 787859002 |Vaccine product (medicinal product)| and its descendants, which  _can_ be used as valid values for this attribute.

## Characterizes

This attribute specifies the process which the property describes, and on which the property (of this observable) depends. The process can be very general (e.g. excretion).

For example, 

  *     * Mass concentration ratio of silver to creatinine in 24-hour urine (observable entity) has [ 704321009 | Characterizes (attribute)|](http://snomed.info/id/704321009 "704321009 | Characterizes \(attribute\) |") of excretion process
    * 789098002 |Estimated quantity of intake of potassium in 24 hours (observable entity)| has a 704321009 |Characterizes (attribute)| of administration of substance

## Component

This attribute is used to specify the numerator of a relational property types, e.g. ratio, concentration. 

For example, 

  *     * Arbitrary concentration of Varicella-Zoster virus (observable entity) has the  _[ 246093002 | Component (attribute)|](http://snomed.info/id/246093002 "246093002 | Component \(attribute\) |") _ of Human herpesvirus 3

## Direct site

This attribute is used to specify the entity on which the observation is directly made. It may also be used when the observation is indirect, i.e. when a direct observation cannot be done.

For example, 

  *     * [ 415974002 | Core body temperature measured at tympanic membrane (observable entity)|](http://snomed.info/id/415974002 "415974002 | Core body temperature measured at tympanic membrane \(observable entity\) |") has the [ 704327008 | Direct site (attribute)|](http://snomed.info/id/704327008 "704327008 | Direct site \(attribute\) |") of 42859004 |Tympanic membrane structure (body structure)|

## Has realization

This attribute is used to specify the process or activity that is the consequence of realization of the function. 

For example, 

  *     * [ 282097004 | Ability to walk (observable entity)|](http://snomed.info/id/282097004 "282097004 | Ability to walk \(observable entity\) |") [ 719722006 | Has realization (attribute)|](http://snomed.info/id/719722006 "719722006 | Has realization \(attribute\) |") of 870595007 |Walking (qualifier value)|

## Inherent location

This attribute is used to specify a body site or other location of the independent continuant in which the property exists.

For example,

  *     * 5310001000004108 |Histologic type of neoplasm of skin (observable entity)| has 718497002 | Inherent location (attribute)| of 39937001 |Skin structure (body structure)|

## Inheres in

This attribute specifies the independent continuant in which the quality exists and on which the dependent quality (of this observable) depends.

For example,

  *     * 307047009 |Core body temperature measured in rectum (observable entity)| has 704319004 |Inheres in (attribute)| of 278826002 |Body internal region (body structure)|

## Precondition

This attribute is used to specify body state, timing, challenges, or other situations that must be true of the entity to be observed.

For example,   

  *     * Plasma creatinine concentration 7 days post challenge (observable entity) has a Precondition of 7 days post challenge
    * [ 163033001 | Lying blood pressure (observable entity)|](http://snomed.info/id/163033001 "163033001 | Lying blood pressure \(observable entity\) |") has a [ 704326004 | Precondition (attribute)|](http://snomed.info/id/704326004 "704326004 | Precondition \(attribute\) |") of 102538003 |Recumbent body position (finding)|

## Procedure device

This attribute is used to model devices associated with a procedure. This attribute is used to define high-level, general concepts that aggregate procedures according to the device involved.

## Process acts on

This attribute is used to describe that a process specifically acts on some entity, e.g. by transporting that entity in or out of the body, i.e. Rate of intake of protein.

For example,

  * 789350001 |Estimated quantity of intake of iron in 24 hours (observable entity)| has a [ 1003735000 | Process acts on (attribute)|](http://snomed.info/id/1003735000 "1003735000 | Process acts on \(attribute\) |") of iron

## Process agent

This attribute is used to specify the continuant (e.g. body structure or organism) that is causally active in the process on which the property depends. It is used to refine the meaning of the process named as the value of [ 704321009 | Characterizes (attribute)|](http://snomed.info/id/704321009 "704321009 | Characterizes \(attribute\) |") , or it may simply repeat the meaning that is already there. 

For example, 

  *     * Substance rate of secretion of somatotropin by pituitary following clonidine per os (observable entity) has the [ 704322002 | Process agent (attribute)|](http://snomed.info/id/704322002 "704322002 | Process agent \(attribute\) |") of 56329008 |Pituitary structure (body structure)|.

## Process duration

This attribute specifies the duration of the process characterized by the observable property type. 

For example, 

  *     * Mass rate of excretion of cortisone in 24 hour urine (observable entity) has the  [ 704323007 | Process duration (attribute)|](http://snomed.info/id/704323007 "704323007 | Process duration \(attribute\) |") of 123027009 |24 hours (qualifier value)|

## Process extends to

This attribute specifies that the process which the property characterizes has led to the inclusion of a previously not included structure.

For example,

The concept |Presence of direct invasion by primary malignant neoplasm of prostate to seminal vesicle (observable entity)| has a 1003703000 |Process extends to (attribute)| of |Seminal vesicle structure (body structure)|

## Process output

This attribute is used to specify the substance or process produced by the process characterized by the observable property type. 

For example, 

  *     * Substance rate of excretion of pregnanediol in micromoles per day (observable entity) has a [ 704324001 | Process output (attribute)|](http://snomed.info/id/704324001 "704324001 | Process output \(attribute\) |") of 28268006 |Pregnanediol (substance)|

## Property

This attribute is used to specify the type of feature (i.e. quality, disposition, function, or process characteristic) to be observed. Its values are abstract types of quality (length, odor, concentration) or abstract types of process features (rate, speed). 

For example, 

  *     * Blood glucose mass concentration (observable entity) has the [ 370130000 | Property (attribute)|](http://snomed.info/id/370130000 "370130000 | Property \(attribute\) |") of 118539007 |Mass concentration (property) (qualifier value)|

### Mass vs Weight

The Property (qualifier value) hierarchy contains the following:

  * 118538004 |Mass, a measure of quantity of matter (property) (qualifier value)|
  * 726527001 |Weight (property) (qualifier value)|

Very rarely is the physics definition of _weight_ used. When the term _weight_ is used, it is most often referring to _mass_ , as further demonstrated by the units of measure i.e., grams, kilograms, etc. Unless units specific to the physics definition of weight are specified using Newtons, assume that mass is implied.

To summarize, always use the _mass_ qualifier value unless a concept is requested with Newton units that specifically refer to weight.

## Relative to

This attribute is used to specify the denominator of a relational property type, e.g. a ratio or proportion. 

For example, 

  *     * Urine alpha aminobutyrate to creatinine ratio (observable entity) has  [ 704325000 | Relative to (attribute)|](http://snomed.info/id/704325000 "704325000 | Relative to \(attribute\) |") 15373003 |Creatinine (substance)|
    * Neutrophils per 100 leukocytes in blood (observable entity) has  [ 704325000 | Relative to (attribute)|](http://snomed.info/id/704325000 "704325000 | Relative to \(attribute\) |") 702962009 |Population of all leukocytes in portion of fluid (body structure)|

## Relative to part of

This attribute is used to specify the denominator of a relative relational property, such as a ratio of ratios.

For example, 

  *     * Relative substance concentration of cerebrospinal fluid IgM to plasma IgM (observable entity) has [ 719715003 | Relative to part of (attribute)|](http://snomed.info/id/719715003 "719715003 | Relative to part of \(attribute\) |") of 50863008 |Plasma (substance)|

## Scale Type

This attribute is used to specify the scale of the result of an observation or a diagnostic test (i.e., quantitative, qualitative, semi-quantitative).

  * When defining observable entities for the international release, the [ | Scale type (attribute)|](http://snomed.org/fictid# "\(eg:\)  | Scale type \(attribute\) |") will not be used. Extensions are permitted to add specific subtypes of observable entities that include the [ | Scale type (attribute)|](http://snomed.org/fictid# "\(eg:\)  | Scale type \(attribute\) |") , if desired.
  * In instances where Observable entity content from SNOMED CT extensions that contain a SCALE TYPE relationship is promoted to the International release, the SCALE TYPE relationship will not be inactivated.

## Technique

This attribute is used to specify the systematic method of an observation.

For example, 

  *     * Presence of Brucella abortus antibody in serum by latex agglutination (observable entity) has the  _[ 246501002 | Technique (attribute)|](http://snomed.info/id/246501002 "246501002 | Technique \(attribute\) |") _of 703448004 |Latex agglutination test technique (qualifier value)|

## Time Aspect

This attribute is used to specify the timing of an observation.

For example, 

  *     * Substance concentration of acetone in urine (observable entity) has the [ 370134009 | Time aspect (attribute)|](http://snomed.info/id/370134009 "370134009 | Time aspect \(attribute\) |") of 123029007 |Single point in time (qualifier value)|

## Towards

This attribute is used to specify a disposition, what the disposition is towards, i.e. a specific triggering agent, or more generally, participant in the realization of the disposition.

For example, 

  *     * Quantitative susceptibility of Pseudomonas aeruginosa to amikacin in microbial isolate by disk diffusion (observable entity) has [ 704320005 | Towards (attribute)|](http://snomed.info/id/704320005 "704320005 | Towards \(attribute\) |") of 387266001 |Amikacin (substance)|

## Units

This attribute is used to specify the units used in assigning a value to an observation. 

For example, 

  *     * Basophils per 100 leukocytes (observable entity) has the  _[ 246514001 | Units (attribute)|](http://snomed.info/id/246514001 "246514001 | Units \(attribute\) |") _of 415067009 |Percentage unit (qualifier value)|

## Using device

This attribute is used to specify the instrument or equipment utilized to execute an action. Using device is appropriate when the device is actually used to carry out the action that is the focus of the procedure.

For example, 

  *     * [ 415921007 | Temperature of forehead using skin strip thermometer (observable entity)|](http://snomed.info/id/415921007 "415921007 | Temperature of forehead using skin strip thermometer \(observable entity\) |") has  _[ 424226004 | Using device (attribute)|](http://snomed.info/id/424226004 "424226004 | Using device \(attribute\) |") _of 448916003 |Skin strip thermometer (physical object)|

  

There are examples on this page that do not have a concept ID. These examples are included for members who may be modeling observables within their extension.
