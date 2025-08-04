# Defining Characteristics

## Role of defining characteristics

Defining characteristics represent the values of a range of relevant attributes. Depending on the nature of the concept, they may include etiology, topography, method, etc.

The attributes that can be applied depend on the domain of the concept. For example, a procedure may have a method, and a disorder may have an etiology, but a procedure cannot have an etiology, and disorder cannot have a method. Defining characteristics using a particular attribute will be applied consistently to all concepts to which it is relevant. Note that this design principle may not be fully realized for all attributes in each release.

## Representation of defining characteristics

Defining characteristics are represented as relationships. The fields are used as follows:

  * SourceId refers to the concept to which a defining characteristic applies;

  * TypeId indicates the nature of the defining attribute;

  * DestinationId refers to the concept that represents the value of that attribute.

## Relationships

The defining characteristics can be divided into [ 116680003 | Is a (attribute)|](http://snomed.info/id/116680003 "116680003 | Is a \(attribute\) |") relationships and defining attribute relationships.

The IS_A relationship (also called supertype-subtype or parent-child relationship) builds the hierarchies in SNOMED CT. Every concept has at least one IS_A relationship to a supertype or parent concept.

[ 138875005 | SNOMED CT Concept (SNOMED RT+CTV3)|](http://snomed.info/id/138875005 "138875005 | SNOMED CT Concept \(SNOMED RT+CTV3\) |") has no supertype or parent relationship.

Each concept in SNOMED CT is logically defined through its relationships to other concepts. A  _relationship_ is defined as an association between a source concept and a destination concept. The type of association is indicated by an attribute concept. It is the relationships that make up the defining characteristics of the concepts. A  _defining characteristic_ is a relationship to a target concept that is always necessarily true for any instance of the source concept. 

For example, the defining relationships of the concept 53442002 |Excision of stomach structure (procedure)| include:

  *     * [ 116680003 | Is a (attribute)|](http://snomed.info/id/116680003 "116680003 | Is a \(attribute\) |") = [ 65801008 | Excision (procedure)|](http://snomed.info/id/65801008 "65801008 | Excision \(procedure\) |")
    * [ 260686004 | Method (attribute)|](http://snomed.info/id/260686004 "260686004 | Method \(attribute\) |") = [ 129304002 | Excision - action (qualifier value)|](http://snomed.info/id/129304002 "129304002 | Excision - action \(qualifier value\) |")
    * [ 405813007 | Procedure site - Direct (attribute)|](http://snomed.info/id/405813007 "405813007 | Procedure site - Direct \(attribute\) |") = [ 69695003 | Stomach structure (body structure)|](http://snomed.info/id/69695003 "69695003 | Stomach structure \(body structure\) |")

