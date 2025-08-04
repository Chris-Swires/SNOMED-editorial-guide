# Pressure ulcer  Pressure injury

|Pressure injury (disorder)| has been created in SNOMED CT based on the recommendations of the _National Pressure Injury Advisory Panel_ (NPIAP) and adopted for the 2019 International Clinical Practice Guidelines on Prevention and Treatment of Pressure Ulcers/Injuries. The NPIAP nomenclature favors the use of pressure _injury_ over pressure _ulcer_ , due to confusion around the use of ulcer for two of the pressure ulcer stages which actually occur in intact skin. 

  
New morphologies with text definitions have been created representing the various pressure injury stages:

  * |Damage (morphologic abnormality)|
  * |Pressure injury (morphologic abnormality)|
  * |Pressure injury stage I (morphologic abnormality)|
  * |Pressure injury stage II (morphologic abnormality)|
  * |Pressure injury stage III (morphologic abnormality)|
  * |Pressure injury stage IV (morphologic abnormality)|
  * |Deep tissue pressure injury (morphologic abnormality)|  

1163215007 |Pressure injury (disorder)|and its descendants representing the pressure injury stages are defined with the morphologies above, similar to how burn injuries have been modeled in SNOMED CT.

  * Pressure injury morphology stages II - V have been assigned an additional parent of 56208002 |Ulcer (morphologic abnormality) |
  * Pressure injury morphology stage I has been assigned an additional parent of 70819003 |Erythema (morphologic abnormality) |
  * Pressure injury disorder concepts representing stages II - IV have a synonym of _Pressure ulcer stage x_  

The following concepts have been inactivated and replaced with corresponding Pressure injury concepts:

  * 421076008 |Pressure ulcer stage 1 (disorder)|
  * 420324007 |Pressure ulcer stage 2 (disorder)|
  * 421927004 |Pressure ulcer stage 3 (disorder)|
  * 420597008 |Pressure ulcer stage 4 (disorder)|
  * 421594008 |Nonstageable pressure ulcer (disorder)|
  * 165260000 |Deep pressure ulcer (disorder)|  

  

723071003 |Pressure injury of deep tissue (disorder)| has previously been created but has been remodeled according to the above heuristics.

  
399912005 |Pressure ulcer (disorder)| has been inactivated and the remaining 33 descendants that do not mention a specific stage have been renamed using Pressure _injury_ instead of pressure _ulcer_ with the value of associated morphology value changed from 420226006 |Pressure ulcer (morphologic abnormality)| to 1163214006 |Pressure injury (morphologic abnormality)|. This results in these concepts being relocated under |Pressure injury (disorder)|.  

The NPIAP classification best supports the disambiguation of pressure ulcer from intact skin lesions. The SNOMED CT pressure injury disorder hierarchy follows the NPIAP terminology most closely but accommodates legacy classifications by including an ulcer morphology in the model as well as additional descriptions of _pressure ulcer_ for pressure injury stages II - VI.
