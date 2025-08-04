# Event Modeling

## Event attributes

When modeling an event, be sure to model the event itself and not the _outcome_ of an event. The _outcome_ of an event would be a finding or a disorder.

## Causative agent

Although Pharmaceutical / biologic product (product) and its descendants are considered valid values for the Causative agent (attribute) by the MRCM, they are not currently used as values for this attribute in the International Release. The only exception is 787859002 |Vaccine product (medicinal product)| and its descendants, which _can_ be used as valid values for this attribute.

The allowed ranges will not prevent some incorrect modeling. Some allowed attributes have not yet been used for modeling in the Event domain. The planned QI project will review the modeling to ensure consistency of use the allowed attributes.

  * For the January 2020 Release, vaccine-related overdose concepts in the Clinical Finding/Disorder hierarchy were inactivated. They were replaced with  _excessive dose_ concepts in the Event hierarchy.
  * When authoring, determine whether the concept describes an overdose, a  _disorder_ , or the administration or ingestion of an excessive dose, an  _event_.

