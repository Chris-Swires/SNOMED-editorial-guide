# Sodium valproate and Valproic acid

The Count of active ingredient (attribute) relationship has been added to certain single-ingredient valproic acid or sodium valproate clinical drug concepts to prevent incorrect subsumption under multiple-ingredient concepts (such as those containing both sodium valproate and valproic acid). This modeling ensures correct classification, particularly when substances share a base moiety but differ at the modification level.

For example,

  *     * 765633006 |Product containing precisely sodium valproate 200 milligram/1 each prolonged-release oral tablet (clinical drug)| includes a |Count of active ingredient (attribute)| to prevent it from being inferred as a parent of 1204385002 |Product containing precisely sodium valproate 200 milligram and valproic acid 87 milligram/1 each prolonged-release oral tablet (clinical drug)|.

In addition, when any concept in a sibling set requires the additional |Count of active ingredient| attribute to classify correctly, this attribute should also be added to all sibling concepts for consistency. 
