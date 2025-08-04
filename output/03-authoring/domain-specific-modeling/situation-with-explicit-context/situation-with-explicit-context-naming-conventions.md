# Situation with Explicit Context Naming Conventions

For information on precoordinated naming patterns that have been reviewed or are currently in review, see  _[Pre-coordination Naming Patterns project](https://confluence.ihtsdotools.org/display/IHTSDO1/Pre-coordination+Naming+Patterns+Project). _ Unreviewed patterns for the Situation with explicit context hierarchy can be found [here](https://confluence.ihtsdotools.org/display/IHTSDO1/Situation+with+explicit+context). New content should conform with the naming patterns; however, legacy content may not.

For example, 

Acceptable naming pattern

FSN: <procedure> declined (situation)

PT: <procedure> declined

SYN: <procedure> refused (This is optional.)

  *     *       * 736013005 |Body weight measurement declined (situation)|

The following naming patterns are no longer accepted for addition to the International Edition:

Procedure offered

Procedure not offered

Procedure done

Procedure not done

Note that [385658003 |Done (qualifier value)|](http://snomed.info/id/385658003) (a descendent of [410523001 |Post-starting action status (qualifier value)|](http://snomed.info/id/410523001)) remains in use as the target value of the [408730004 |Procedure context (attribute)|](http://snomed.info/id/408730004) in  _History of <procedure>_ concepts.

  

Not every naming pattern is found in the Pre-coordination Naming Pattern project. Some naming patterns can be prescribed in [templates](https://confluence.ihtsdotools.org/display/DOCEG/Templates). Others can come from trackers or fast track documents, such as the examples below. 

**[716186003 |No known allergy (situation)|](http://snomed.info/id/716186003)**

FSN: No known allergy (situation)

PT: No known allergy

SYN: NKA - No known allergy

**[428197003 |No known insect allergy (situation)|](http://snomed.info/id/428197003)**

FSN: No known insect allergy (situation)

PT: No known insect allergy

  

## History of finding or disorder occurring in past pregnancy

For concepts relating to a history of a finding, disorder, procedure, or event occurring in a past pregnancy of the subject of the record, use an FSN and PT of |Past pregnancy history of X (situation)|. These concepts are subtypes of 271903000 |History of pregnancy (situation)|. 

For example, 

161804005 |Past pregnancy history of antepartum hemorrhage (situation)| is a subtype of 271903000 |History of pregnancy (situation)|

For content relating to _family_ history, this must be specified in both the FSN and preferred term to distinguish between past pregnancy of the subject of the medical record. 

For example,

|_Past pregnancy history_ of neonatal death (situation)| versus |_Family_ _history_ of neonatal death (situation)|
