# Lesion

The word  _lesion_ can be used to refer to both structural and functional abnormalities. This makes a subtle distinction between the clinical finding and disorder semantic tags. The majority of lesions in SNOMED CT are in the disorder subhierarchy.

## Lesion as a disorder

If a concept refers to a lesion that is a structural abnormality, then apply the (disorder) semantic tag, and model with an [116676008 |Associated morphology (attribute)|](http://snomed.info/id/116676008) of << [ 52988006 | Lesion (morphologic abnormality)|](http://snomed.info/id/52988006 "52988006 | Lesion \(morphologic abnormality\) |") . 

If a _procedure_ refers to a lesion that is a structural abnormality, then model with a [405816004 |Procedure morphology (attribute)|](http://snomed.info/id/405816004) of << [ 52988006 | Lesion (morphologic abnormality)|](http://snomed.info/id/52988006 "52988006 | Lesion \(morphologic abnormality\) |") .

## Lesion as a finding

Lesion concepts referencing characteristics of a lesion are subtypes of 300577008 |Finding of lesion (finding)|.

Imaging-related lesion findings remain as finding concepts.

Functional lesions should not be modeled using values from the 52988006 |Lesion (morphologic abnormality)| subhierarchy.

  

