# Trauma and Injury

## Trauma, injury

There is a need to represent both traumatic and non-traumatic injuries as well as those in which it is undetermined whether the cause of the injury was due to trauma or not. There are forms of trauma that do not result in structural damage, such as  _emotional trauma_ , which are defined as traumatic injuries. 

Concepts that do not specify  _trauma_ are now modeled with the appropriate morphology concept or <<Damage (morphologic abnormality) but are not necessarily assigned a Due to (attribute) of Traumatic event (event), unless the form of injury can only occur with morphologic trauma.  In other words, if a concept refers to an injury, and that injury may occur either through trauma or non-traumatic means (e.g. tumor, ischemia, etc.), then it should be modeled without a Due to (attribute) of |Traumatic event|. If, however, the term does not specify trauma, but the type of injury can only occur as a result of trauma (e.g. open wounds), then these concepts would have the DUE TO attribute added.

Historically,  _injury_ concepts have been modeled in SNOMED CT as damage to a body structure, unless specifically stated as  _non-traumatic_. 19130008 |Traumatic abnormality (morphologic abnormality)| has been inactivated effective January 2021 in order to separate mechanism of injury (i.e. trauma) from structure (i.e. damage). 

  * Traumatic injuries are now being modeled as morphologic changes to a body structure due to traumatic event.
  * Non-traumatic injuries are being remodeled as morphologic changes to a body structure but without a |Due to (attribute)| relationship to |Traumatic event (event)|. Nontraumatic injuries should be modeled as a subtype of 1119219007 |Nontraumatic injury (disorder)|.

417163006 |Traumatic or non-traumatic injury (disorder)| is currently modeled with GCIs to reflect the two notions of  _damage without trauma_ (non-traumatic injury) and  _trauma with or without damage_ (traumatic injury). 

The use of |Spontaneous event (event)| is in development, as many of the concepts that related to  _non-traumatic_ are not in fact spontaneous. 

  * In those cases where it is clinically apparent that the cause is spontaneous, the concept is modeled with a |Due to (attribute)| of |Spontaneous event (event)|.
  * In those cases where it cannot be determined that the clinical condition is actually spontaneous (i.e., no known underlying mechanism), a |Due to (attribute)| relationship to |Spontaneous event (event)| would be omitted.

Where a request for a specific traumatic or non-traumatic disorder is made and there is support in literature for both, then concepts representing both the traumatic and non traumatic forms together with a generic form should be added.

## Friction injury, abrasion

An injury due to  _friction_ can be represented using [400152004 |Friction injury (morphologic abnormality)|](http://snomed.info/id/400152004), in which case it will not classify as a kind of wound.

For example,

  *     * [47222000 |Friction injury of tooth (disorder)|](http://snomed.info/id/47222000)
    * [400068007 |Mechanical irritation (morphologic abnormality)|](http://snomed.info/id/400068007)

However, most disorders that are named  _abrasion_ imply that skin or other tissue has been abraded (scraped or worn away). Thus, they are also considered wounds and will correctly classify as wounds after assigning the correct morphology, [400061001 |Abrasion (morphologic abnormality)|](http://snomed.info/id/400061001). 

For example,

  *     * [211039006 |Abrasion of skin of chest (disorder)|](http://snomed.info/id/211039006)

While many medical definitions refer to abrasions as superficial injuries of the skin and subcutaneous structures, the term is also used for areas such as dentistry to define superficial excoriations of teeth, ophthalmology, and also can be used for other integumentary structures such as nails. The FSN should clearly identify which structure the concept refers to and where this structure is skin, this must be specified.

## Rupture

Ruptures are modeled with an |Associated morphology (attribute)| of 125671007 |Rupture (morphologic abnormality)|. A disorder concept modeled with a Rupture (morphologic abnormality) classifies as a subtype of 417163006 |Traumatic or non-traumatic injury (disorder)|.

  * Traumatic rupture concepts are modeled with a |Due to (attribute)| of << |Traumatic event (event)|
  * Nontraumatic rupture concepts are modeled as a subtype of 1119219007 |Nontraumatic injury (disorder)|

