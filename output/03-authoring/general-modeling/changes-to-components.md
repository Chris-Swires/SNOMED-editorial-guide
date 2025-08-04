# Changes to Components

Concepts, descriptions, and target values may be changed for a variety of reasons. 

  * [Description Inactivation](?section=description-inactivation#description-inactivation)
  * [Concept Inactivation](?section=concept-inactivation#concept-inactivation)

## Considerations for current concepts when creating new concepts

Concepts that are used as target values in an attribute relationship impact the placement of the source concept of the relationship. Some concepts, for example, those in the Qualifier value hierarchy, are created to support the definition of other concepts. Creation of a new concept that will be used as the target value in an attribute relationship requires an author to determine if there are active concepts in the  _domain_ hierarchy that should also use the new concept as a target value.

For example,

The creation of [713295009 | Surgical replacement - action (qualifier value)|](http://snomed.info/id/713295009) would require a review of active concepts that represent _surgical_ replacement procedures that were previously modeled with the Method (attribute) of __ Replacement - action (qualifier value).

A concept that represents a surgical replacement procedure that currently has a Method (attribute) of [282089006 | Replacement - action (qualifier value)|](http://snomed.info/id/282089006) would require inactivation of that relationship and the creation of a new attribute-value relationship of Method (attribute) of [713295009 | Surgical replacement - action (qualifier value)|](http://snomed.info/id/713295009).
