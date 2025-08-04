# Fluoroscopy and Fluoroscopic Imaging

## Simple fluoroscopy

 _Simple_ fluoroscopy is  _real time_ imaging (usually on TV monitors/image intensifiers) of a body part or system. Only rarely is it an imaging process alone (without some interventional procedure). Fluoroscopy is most often used to guide or direct a primary procedure/purpose. The usual convention in clinical practice is to ignore the fluoroscopic element and refer to a procedure entirely by the primary component, e.g. angiography. However, this is unacceptable in SNOMED CT, where the imaging component must be explicitly described. 

  * FSN: Fluoroscopy of X (procedure)
  * PT: Fluoroscopy of X
  * SYN: Fluoroscopy - X

For example, 

  *     * [ 169005008 | Fluoroscopy of esophagus (procedure)|](http://snomed.info/id/169005008 "169005008 | Fluoroscopy of esophagus \(procedure\) |")
      * FSN: Fluoroscopy of esophagus (procedure)
      * PT: Fluoroscopy of esophagus
      * SYN: Fluoroscopy - esophagus

## Fluoroscopic guidance

 _Fluoroscopic X_ is not necessarily interpreted as _X_** __**_using fluoroscopic guidance (procedure)_. When modeling a procedure using fluoroscopic guidance, the use of _fluoroscopic x_ in the FSN is not sufficient; the FSN must explicitly state _using fluoroscopic_ _guidance_ if that is the intent.

The following naming pattern can be used for direct observation:

  * FSN: X using fluoroscopic guidance (procedure) 
  * PT: Fluoroscopy guided X 
  * SYN: X using fluoroscopic guidance

For example, 

  *     * [ 710293001 | Colonoscopy using fluoroscopic guidance (procedure)|](http://snomed.info/id/710293001 "710293001 | Colonoscopy using fluoroscopic guidance \(procedure\) |")
      * FSN: Colonoscopy using fluoroscopic guidance (procedure)
      * PT: Fluoroscopy guided colonoscopy
      * SYN: Colonoscopy using fluoroscopic guidance

For example,

  *     * Angioplasty using fluoroscopic guidance with contrast (procedure)
      * FSN: Angioplasty using fluoroscopic guidance with contrast (procedure)
      * PT: Fluoroscopy guided angioplasty with contrast
      * SYN: Angioplasty using fluoroscopic guidance with contrast
      * SYN: Fluoroscopic angioplasty with contrast

Such procedures are subtypes of Fluoroscopy (procedure). See also [Imaging-guided procedure modeling guidance](https://confluence.ihtsdotools.org/display/WIPEG/Imaging-guided+procedures). 

## Fluoroscopic angiography with contrast

 _Angiography_ and _angiogram_ , as terms on their own, refer to visualization of a blood vessel or vascular structure not specified as an artery or a vein and could refer to either or both. So for clarity, a blood vessel site (X) and the phrase _with_ _contrast_ must be included in the concept description.

Fluoroscopic angiography always uses contrast. _With contrast_ must be explicitly stated in all descriptions.

### Fluoroscopic angiography when vessel is not stated

  * FSN: Fluoroscopic angiography of X with contrast (procedure)
  * PT: Fluoroscopic angiography of X with contrast
  * SYN: Fluoroscopic angiogram of X with contrast

### Fluoroscopic angiography of artery

  * FSN: Fluoroscopic angiography of X artery with contrast (procedure)
  * PT: Fluoroscopic angiography of X artery with contrast 
  * SYN: Fluoroscopic arteriography of X with contrast 
  * SYN: Fluoroscopic arteriogram of X with contrast 

For example,

  *     * FSN: Fluoroscopic angiography of right cervical vertebral artery with contrast (procedure)
    * PT: Fluoroscopic angiography of right cervical vertebral artery with contrast 
    * SYN: Fluoroscopic arteriography of right cervical vertebral artery with contrast 
    * SYN: Fluoroscopic arteriogram of right cervical vertebral artery with contrast 

### Fluoroscopic venography

  * FSN: Fluoroscopic venography of X with contrast (procedure)
  * PT: Fluoroscopic venography of X with contrast 
  * SYN: Fluoroscopic venogram of X with contrast 

For example, 

  *     * FSN: Fluoroscopic venography of right upper limb with contrast (procedure)
    * PT: Fluoroscopic venography of right upper limb with contrast 
    * SYN: Fluoroscopic venogram of right upper limb with contrast 

## Fluoroscopic arthrography

  * FSN: Fluoroscopic arthrography of X (procedure)
  * PT: Fluoroscopic arthrography of X
  * SYN: Fluoroscopic arthrogram of X

For example,

  *     * [ 723775001 | Fluoroscopic arthrography of right sacroiliac joint (procedure)|](http://snomed.info/id/723775001 "723775001 | Fluoroscopic arthrography of right sacroiliac joint \(procedure\) |")
      * FSN: Fluoroscopic arthrography of right sacroiliac joint (procedure)
      * PT: Fluoroscopic arthrography of right sacroiliac joint
      * SYN: Fluoroscopic arthrogram of right sacroiliac joint

  

