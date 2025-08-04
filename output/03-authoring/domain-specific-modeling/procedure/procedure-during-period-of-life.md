# Procedure during period of life

Where a procedure is undertaken during a specific period of life, such as in the maternal pregnancy period, the descriptions may include the term _during._ However, the concept is modeled with Occurrence (attribute) with a value of <282032007 |Periods of life (qualifier value)|.

For example,

  *     * 1287360000 | Injection of epidural anesthesia during maternal intrapartum period (procedure)| has an Occurrence (attribute)| of 1156682000 |Maternal intrapartum period (qualifier value)|.

<figure><img src="images/202998742.png" alt="" title=""><figcaption><p>Figure 1: Stated view of 1287360000 |Injection of epidural anesthesia during maternal intrapartum period (procedure)|</p></figcaption></figure>

# Obstetric procedures

Obstetric procedure (procedure) is modeled with two GCI axioms using the Occurrence (attribute) with a value of either Maternal perinatal period (qualifier value) or Pregnancy time period (qualifier value). 

There are two modeling patterns for procedures containing _obstetric_ in descriptions.

## Maternal period _cannot_ be determined

For procedures containing _obstetric_ in descriptions, but a specific maternal period _cannot_ be determined, concepts should be modeled using |Obstetric procedure| as the primitive parent concept and fully defined by a specific method. 

For example,  
Obstetric operation (procedure) is fully defined by the parent |Obstetric procedure| and the Method (attribute) of Surgical action (qualifier value).

<figure><img src="images/202998739.png" alt="" title=""><figcaption><p>Figure 2: Stated view of 386638009 |Obstetric operation (procedure)|</p></figcaption></figure>

  

## Maternal period _can_ be determined

For procedures which a specific maternal period _can_ be determined, the primitive parent is |Procedure| with Occurrence of either <<Maternal perinatal period (qualifier value) or <<Pregnancy time period (qualifier value). 

For example,  
Diagnostic ultrasound of gravid uterus (procedure) can be fully defined by |Procedure| and Ultrasound imaging of the Uterus with Occurrence of Maternal antenatal and/or intrapartum time period (qualifier value).

<figure><img src="images/202998740.png" alt="" title=""><figcaption><p>Figure 3: Stated view of 55052008 |Diagnostic ultrasound of gravid uterus (procedure)|</p></figcaption></figure>

  

The generic 35039007 |Uterine structure (body structure)| should be used, because 9258009 |Gravid uterus structure (body structure)| cannot return the complete substructures of the uterus.

# Fetal procedures

Fetal procedures are fully defined by an Occurrence (attribute) of <<Fetal period (qualifier value). Generic body structures, for example, kidney, head, etc., should be used for procedure sites, unless the structure is unique to a fetus. Structures _not_ unique to a fetus, such as, fetal head, fetal kidney, etc., will be inactivated in future releases, so they should not be used for modeling fetal procedures.

For example,  
Ultrasonography of fetal head (procedure) can be fully defined by |Procedure| and Ultrasound imaging of the Head with the Occurrence (attribute) of Fetal period (qualifier value).

<figure><img src="images/202998741.png" alt="" title=""><figcaption><p>Figure 4: Stated view of 710165007 |Ultrasonography of fetal head (procedure)|</p></figcaption></figure>

  

The generic 69536005 |Head structure (body structure)| should be used, because the 54527006 |Fetal head structure (body structure)| cannot return the complete substructures of the head.

  

  

