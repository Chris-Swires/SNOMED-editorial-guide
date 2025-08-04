# Aspiration

Aspiration is extraction using negative pressure. When modeling aspiration concepts, procedure site distinction is made if the removal is either (1) a substance from within a body structure or specific morphology, or (2) removal of any of the body structure itself (including cells). 

1\. Removing a substance from within a body structure or specific morphology should be modeled using Procedure site - Indirect (attribute) and/or Indirect morphology (attribute). 

For example, 

  *     *       * Paracentesis of skin (procedure) is removing a substance from within the body structure and not the body structure itself, it is modeled using Procedure site - Indirect (attribute) of Skin structure.

2\. Removing body structure cells should be modeled with Procedure site - Direct (attribute) and/or Direct morphology (attribute). 

For example,

  *     *       * Fine needle aspiration biopsy of skin (procedure) removes part of the body structure itself, and therefore is modeled using Procedure site - Direct (attribute) of Skin structure.

If it is unknown whether the aspiration is removing either a _substance from within_ a body structure or the _body structure_ cells themselves, model with the broader Procedure site (attribute) and/or Procedure morphology (attribute).

The nature of some aspirations means the procedure site will inherently be modeled as either direct or indirect regardless of whether the FSN states a substance is being removed.

Example procedures using Procedure site - Direct (attribute):

  *     * Fine needle aspiration biopsy
    * Bone marrow aspiration
    * Suction assisted lipectomy/Liposuction

Example procedures using Procedure site - Indirect (attribute): 

  *     * Centesis
    * Aspiration of [space or cavity]
    * Suction of [space or cavity]
    * Barbotage 
    * Aspiration of device 
    * Aspiration of [space or cavity] contents 
    * Tap 

## Substance aspirated

If the substance being aspirated is not stated in the FSN, do not model it, even if it might be implied. 

  *  _Exception_ : Aspiration of abscess can use Direct substance = Pus (substance). 

Abscesses can be either septic (due to infection) or sterile (not due to infection). Most abscesses are septic; however, pus is characteristic of an abscess - whether septic or sterile. Model with Indirect morphology (attribute) of Abscess (morphologic abnormality) and the Direct substance (attribute) of Pus (substance). Pus does not have to be stated in the FSN. 
