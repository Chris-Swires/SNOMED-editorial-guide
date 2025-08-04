# Contrast for Imaging

It is essential to express when contrast is part of a procedure and that descriptions are constructed consistently.

For example,

  *     * [ 702501008 | Computed tomography of knee with contrast (procedure)|](http://snomed.info/id/702501008 "702501008 | Computed tomography of knee with contrast \(procedure\) |")
      * FSN: Computed tomography of knee with contrast (procedure) 
      * PT: CT of knee with contrast
      * SYN: Computed tomography of knee with contrast 

The descriptions for all procedure concepts that use contrast must explicitly state ‘with contrast.’ All procedures that use contrast, including 420040002 |Fluoroscopic angiography with contrast (procedure)| and all subtypes, must include the attribute 424361007 |Using substance (attribute)| and a value of 385420005 |Contrast media (substance)| or a subtype in the role group. 

Where the value for the method imaging action is 278110001 |Radiographic imaging - action (qualifier value)| or a subtype, the value for 424361007 |Using substance (attribute)| must be 419098001 |Radiographic imaging contrast media (substance)| or a subtype to denote the radio-opaque nature of the substance.

  * Exception: procedures which specify negative contrast which is non-radio-opaque

This guidance should be applied to new content, the process of updating existing content will be carried out as time and resources permit.

It is unnecessary to add the word _media_ to contrast.

It is agreed that the linking word to associate the contrast use with the procedure is  _with_ \- not _for,_ _or,_ etc.

Additional concept detail is required when it is necessary to know the more precise nature of contrast (e.g. iodinated with various osmolalities, barium, or gas).

## Imaging without contrast

Although considered a negation, this term is used in clinical records.  _Without contrast_ imaging procedures are acceptable.

For example,****

  *     * [ 566341000119106 | Computed tomography of ankle without contrast (procedure)|](http://snomed.info/id/566341000119106 "566341000119106 | Computed tomography of ankle without contrast \(procedure\) |")
      * FSN: Computed tomography of ankle without contrast (procedure)
      * PT: CT of ankle without contrast
      * SYN: Computed tomography of ankle without contrast

## Unacceptable concept qualification

 _With and without_ and  _With or without_ imaging concepts are not acceptable due to ambiguity. Two concepts should be used to express these separately.
