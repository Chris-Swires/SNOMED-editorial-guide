# Complication and Sequela Modeling

Combined disorders can occur, for example:

  * One disorder causes the other (causal relationship)
  * One disorder is temporally related to another
  * Two disorders have both a causal and temporal relationship to each other

Attributes that can be used to define such causal and temporal relationships are:

  * Associated with (attribute)
    * Causative agent (attribute)
    * Due to (attribute)
    * Temporally related to (attribute)  

      * Before (attribute)
      * During (attribute)
      * After (attribute)

## Complication

A  _complication_ is an unexpected condition, outcome, or adverse event due to another condition, procedure, or treatment. 

Concepts representing a disorder caused by another disorder, or disorders following either medical or surgical procedures should be modeled using a parent of 64572001 |Disease (disorder)| or the appropriate intermediate primitive. The word _complication_ in an FSN should only be used when it can be verified that the caused disorder is an unintended or unexpected event. 

Conditions that are caused by another condition, but are not unexpected, should be modeled with a DUE TO relationship, but should not be named as complications.

For example, 10629511000119102 |Rhinitis of pregnancy (disorder)|

Conditions co-occurrent with another disorder but are not caused by the underlying disorder are co-morbidities and should not be modeled using the DUE TO relationship.

For example, 31563000 |Asymptomatic bacteriuria in pregnancy (finding)|

### Perioperative complications

Perioperative complications refer to complications temporally related to a surgical procedure. They include pre-operative, intra-operative and post-operative complications and are modeled with a parent of Disease (disorder) and a relationship consisting of Temporally related to (attribute) or an appropriate subtype with a value of <<387713003 |Surgical procedure (procedure)|. A temporal complication does not necessarily imply a causal (Due to) relationship to the surgery itself, as the complication may be related to any disorder, event, or procedure occurring either prior, during, and/or after surgery. For this reason, perioperative complications do not have a stated Due to relationship unless an underlying cause is clearly stated in the FSN.

The following naming convention applies to those conditions that occur temporally, i.e. either before, during, or after the operative episode but do not have a causal relationship.

FSN: Postoperative X (disorder)

PT: Postoperative X

For example,

  *     * Perioperative hematoma (disorder)
    * Postoperative hypothyroidism (disorder)

88797001 |Complication of surgical procedure (disorder)| is not a subtype of perioperative complication, as it does not include a temporal relationship. Similarly, 738668004 |Perioperative complication (disorder)| is not a subtype of 88797001 |Complication of surgical procedure (disorder)|, as there is no causal relationship. Some disorders may specify both a causal and temporarily relationship and would be modeled such that they would classify under both 738668004 |Perioperative complication (disorder)| and 88797001 |Complication of surgical procedure (disorder)|.

  

# The following attributes are used in the modeling of various combinations:

## After

### After without causal relationship

This attribute is used to model concepts in which a clinical finding occurs after another clinical finding, procedure, or event. Neither asserting nor excluding a causal relationship, it instead emphasizes a sequence of events. Naming pattern is ‘x following y’. 

For example,

123948009 |Disorder following viral disease (disorder)| occurs After [34014006 |Viral disease (disorder)|](http://snomed.info/id/34014006)

<figure><img src="images/174690572.png" alt="" title=""><figcaption><p>Figure 1: Stated view of 123948009 |Disorder following viral disease (disorder)|</p></figcaption></figure>

Post-infectious disorders are not subtypes of infectious disorders (unless the disorder is itself an infectious disease). The |After (attribute)| is used for linking post-infectious disorders with their associated infections.

### After with causal relationship

The Due to and After attributes are used to model a disorder that occurs after a disorder or procedure with a causal relationship. Both the cause and the After relationship must be specified. The naming pattern is ‘due to and following’. 

## Before

This attribute is used to model a preoperative complication. Strictly, a preoperative complication is a disorder that complicates the procedure, rather than being a complication of that procedure. A preoperative complication might be considered to be a disorder that exists prior to surgery that adversely affects the surgery or that results in an intraoperative or postoperative complication. 

## During

### During without causal relationship

This attribute is used to model a disorder that occurs during a procedure. 

For example,

<figure><img src="images/174690571.png" alt="" title=""><figcaption><p>Figure 2: Stated view of 713890008 |Hypoxemia during surgery (disorder)|</p></figcaption></figure>

### During with causal relationship

Due to and During attributes can be used to model a disorder that occurs during a procedure (e.g. intraoperative complication) with a causal relationship. Both a cause and a temporal relationship to the cause must be specified. 

  

  

# Sequelae

A _sequela_ is a disorder that is a consequence, but not an unexpected outcome, that follows after another disorder, procedure, or event.  These conditions are often described with the words _following, after, post,_  _sequela(e),_ or  _late effects._

Sequelae can be in the following forms:

  * Following
  * Due to and following/after
  * During and following/after

These conditions should be modeled with _After_ (and also _Due to_ if there is a causal relationship). 

For example,

  *     * Disorder due to and following another disorder = 698737005 |Obstructive hydrocephalus due to and following meningitis (disorder)|

<figure><img src="images/174690573.png" alt="" title=""><figcaption><p>Figure 3: Stated view of 698737005 |Obstructive hydrocephalus due to and following meningitis (disorder)|</p></figcaption></figure>

## Naming conventions for sequelae

FSN: Disorder X [due to and] following <<disorder /<<procedure /<event 

PT: Disorder X [due to and] following <<disorder /<<procedure /<event

SYN: [Disorder X as a] Sequela of <<disorder /<<procedure /<event

SYN: [Disorder X as a] Late effect of <<disorder /<<procedure /<event

For example, 

  *     * Disorder due to and following another disorder (disorder)
    * Disorder due to and following meningitis (disorder)
    * Disorder due to and following procedure (disorder)

## Naming conventions for surgical sequelae (temporal relationship but _no_ causal relationship)

Not all surgical sequelae are complications of surgery but rather expected late effects. Conditions that occur following surgery, but not necessarily _Due to_ the surgery, are modeled only with an _A_ _fter_ relationship.

FSN: Disorder X following << 387713003 |Surgical procedure (procedure)

PT: Disorder X following << 387713003 |Surgical procedure (procedure)

For example,

  *     * Contraction of eye socket following enucleation (disorder)
    * Scar following surgery (disorder)

## Naming conventions for surgical sequelae complications (temporal relationship _and_ causal relationship)

Conditions that occur following surgery and are explicitly stated as causal/due to are modeled with a Due to (attribute) of << 387713003 Surgical procedure, and an After (attribute) of << 387713003 Surgical procedure.

FSN: Disorder X due to and following <<387713003 |Surgical procedure (procedure)

PT: Disorder X due to and following <<387713003 |Surgical procedure (procedure)|

For example,

  *     * Encephalopathy due to and following cardiopulmonary bypass (disorder)
    * Cataract lens fragments in vitreous of eye due to and following cataract surgery (disorder)
    * Disorder due to and following breast reduction (disorder)

  

  

  

