# Maternal, fetal, neonatal

# Pregnancy Periods

The life phase of pregnancy is unique in that two _actors_ are participants in the scenario, and modeling must distinguish between the two.

For example,

_Fetal tachycardia in antepartum_ versus _Maternal tachycardia in antepartum_

Mother and fetus share many time periods, such as antenatal. However, some periods are not shared, as in the case of intrapartum. The mother’s intrapartum period includes stages one, two, and three; the fetus’ intrapartum period includes only stages one and two. 

A diagram of the relationships between these periods is shown below:

<figure><img src="images/174690545.png" alt="" title=""><figcaption><p>The life phase of pregnancy-related findings and disorders is applied using the Occurrence (attribute). A concept must identify:</p></figcaption></figure>

  1. Which actor (mother or the fetus/neonate) does the circumstance relate
  2. In which life phase of the actor does the condition necessarily relate

In the majority of circumstances, the _actor_ to which the condition relates is straight forward: mother or fetus or neonate.

For example,

  * _Antenatal care_ relates to both the mother and fetus/neonate
  * _Antenatal depression_ clearly relates to the mother
  * _Short cord with antenatal problem_ directly relates to the fetus

Other instances such as _Intrapartum hemorrhage due to marginal placenta previa_ may not be so clear without explicit modeling, as hemorrhage with placenta previa can relate to the fetus or mother.

# PERINATAL & NEONATAL

The word _perinatal_ within finding terms is problematic, because it almost always relates to the fetus/neonate. Due vigilance is required to exclude the rare possibility that the condition could relate to the mother. _Perinatal_ can refer to the mother alone (perinatal depression) or to a time period relating to the fetus until the neonate is seven days old.

This situation creates two problems:

**#1**

The term _perinatal_ is a term with widely varying definitions across countries due in part to legal variations in the time period that defines stillbirth. 

The term _neonatal_ generally describes an infant within the first 28 days. Where the condition relates to an infant within the first _seven_ days, the term _early neonatal_ is allocated. The term _late neonatal_ is used from day eight to 28 (WHO, 1992). Although these descriptions are used widely, they are not universally accepted worldwide. These time periods are useful, however, in modeling existing content which was derived from WHO sources.

Future content should use the term _neonatal_ unless a valid use case can be supported in the content request to distinguish between the early and late neonatal period.

**#2**

The terming of the perinatal period for the fetus and neonate is problematic as there is not a clinically useful name for the _actor_ that covers this entire temporal period. It is possible that _baby_ might be applicable, i.e., _Perinatal disorder of baby_ , but this is not used clinically. To create an explicit FSN, the rather ungainly term |[Clinical finding] of fetus and/or early neonate| has been used. This problem is anticipated to be temporary, as new content will be steered to explicitly state whether the condition relates to the fetus or to the neonate.

In relation to the neonate, there is a clinical and epidemiological distinction between the early neonatal period and the late neonatal period. Conditions in the immediate (early) neonatal period are largely influenced by intrauterine conditions; those in the late neonatal period are more influenced by early extrauterine life. This distinction is important as _perinatal disorders_ historically were often considered a concatenation of disorders occurring in the fetal phase and the early neonatal phase. However, one unresolvable difficulty with this definition is that there is no international agreement in the definition of _perinatal phase_ , which has variable definitions:

  * WHO = 22 completed weeks of gestation and ends seven completed days after birth
  * UK = the time from fetal viability from about 24 weeks of pregnancy up to seven days of life
  * USA = 28 weeks of gestation to the end of the seventh day of life
  * Australia = 20 completed weeks of gestation and ends 28 completed days after birth

# Pregnancy Period Values

Maternal time period values can be found in the subhierarchies below:

<figure><img src="images/174690547.png" alt="" title=""><figcaption><p>Generally, it is clear what the appropriate value is, but some knowledge is required to distinguish the correct choice in some circumstances. Definitions have been added to aid in correct selection.</p></figcaption></figure>

For example,

In relation to _postpartum uterine hemorrhage_ , this would be modeled using an Occurrence (attribute) of Postpartum period. The puerperium is generally defined as the period within 42 days after birth, and thus, the postpartum period relates to this six-week timeframe. Some conditions can occur more than 6 weeks post-delivery, e.g., _postpartum thyroiditis_ , _postnatal depression_ (onset can range from a few days to a few weeks following delivery, generally in the first 2–3 months following childbirth). In this situation, the choice of the more general _Maternal postnatal_ period should be made.

Use of the term _obstetric_ is confusing in regards to both timing and determination of the intended person. Concepts should rather explicitly identify these elements.

  

# Fetal Neonatal Period Values

Similar to the Maternal time periods above, the fetal period is the superordinate as illustrated below. There is no label for the concatenated time of the actor during the fetal and neonatal period within medicine (though colloquially called baby), and so the superordinate is named _fetal and/or neonate_. Similarly, to find concepts which describe conditions of this global phase requires a preferred term expressing this, but in the case of perinatal conditions relating to the fetus and/or early neonate, the word perinatal is commonly used as a substitute.

<figure><img src="images/174690546.png" alt="" title=""><figcaption><p>When modeling a fetal finding or fetal disorder, the |Finding site (attribute)| should not be a  <em>fetal</em> body structure unless the structure is unique to the fetal period, such as |Umbilical cord structure (body structure)|.</p></figcaption></figure>

 _Note: This is guideline has not been applied to fetal procedures at this point in time._

  

##  Fetal and/or neonatal period _versus_ Fetal or neonatal period

Review is ongoing of all disorder concepts containing the phrase _fetal or neonatal._ The concept 450426006 |Fetal **or** neonatal period (qualifier value)| will be inactivated, leaving only 1156676003 |Fetal **and/or** neonatal period (qualifier value)|.

  * The _fetal_** _or_** _neonatal_ value is historically derived from ICD and may contain legacy context causing ambiguity.
  * The _fetal_** _and/or_** _neonatal_ period is explicitly designed to subsume the fetal period, the _neonatal period_ , and in rare cases where these two may overlap, as in 1193538001 |Fetal intrapartum second stage and/or early neonatal period (qualifier value).

## Umbilical cord complication 

Model as IS A [362972006 | Disorder of labor / delivery (disorder)|](http://snomed.info/id/362972006) due to X (disorder). 

  

