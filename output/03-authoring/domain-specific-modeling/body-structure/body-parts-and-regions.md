# Body parts and regions

SNOMED CT uses the Foundation Model of Anatomy (FMA) definition of  _body part_ and  _body part subdivision_ for some concepts. For example, the joint regions discussed below are classified as body part subdivisions, since that is what is intended by the diseases and procedures that use these terms in their definitions. They are not body parts because they are defined, not by a set of bones, but rather by a particular joint and its surrounding structures. However, our interpretation of the word  _region_ is based on common usage and is intended as a three-dimensional structure,  _not_ the FMA two-dimensional definition of body region. In other words, these regions are not simply surface regions (skin), but also include the three dimensional underlying structures (subcutaneous tissues, bones, muscles, tendons, fascia, vessels and etc.).

## Surface regions

Many concepts contain the phrase  _surface region._ These could be interpreted as massless (immaterial) mathematical surfaces, but a clinical terminology would have no direct use for such meanings in clinical records. They could be interpreted as having mass (not immaterial), but the depth then is arbitrary. Should it be just skin deep, or should it include deeper layers of the surface? If only skin deep, the meaning of these concepts would overlap with concepts for skin regions. If deeper, the meaning would possibly be the same as the generic structure concepts.

Most surface region concepts will be retired as ambiguous/_possibly equivalent to _their corresponding concepts that are clearly not immaterial, including x structure, entire x, and skin of X. Where the x structure codes do not currently exist, they will be created, without the surface region phrase.

## Abdominal regions

The named regions of the abdomen are by tradition divided horizontally by the transpyloric plane and the interspinous plane, and vertically by the midclavicular plane. The lateral regions are therefore bounded above by a plane that is inferior to the ribs. In contrast, the flank is the lateral region of the abdomen bounded above by the ribs. Thus some parts of the hypochondriac regions, which are superior to the transpyloric plane but inferior to the ribs, would be considered also part of the flank. The hypogastric region is also sometimes called the pubic region.

## Abdominal cavity, pelvic cavity

The term  _abdominal cavity_ has two meanings, one including the  _pelvic cavity_ , the other excluding it.  _Abdominal cavity structure_ includes both.  _Abdominal cavity proper_ excludes the pelvic cavity.

## Organs, organ system subdivisions

The FMA definition of  _body organ_ is also used. Organs include individual bones, joints, muscles, arteries, veins, lymph vessels, nerves, and etc. Concepts that include groups of organs are frequently used in SNOMED CT. In most cases, these have been part of the subsumption hierarchy (IS A hierarchy) of the particular organ type, that is, they are  _kinds of organs_.

For concepts that refer to the  _collection of organs_ (rather than organs in a collection), there is another concept that is a, kind of,  _organ system subdivision_. Many such collections do not yet have corresponding organ system subdivision concepts. The default is to interpret concepts as denoting organs, rather than organ system subdivisions.

Collections of Organs with/without Organ System Subdivisions  
Organ| Organ system subdivision  
Vertebra (bone of vertebral column)| Spine (subdivision of skeletal system)  
Cervical vertebra| Cervical spine (subdivision of spine)  
Third cervical vertebra| No corresponding organ system subdivision concept  
Bone of skull| Skull (subdivision of skeletal system)  
Bone of thoracic cage| Thoracic cage (subdivision of skeletal system)  
Rib| No corresponding organ system subdivision concept  
Third rib| No corresponding organ system subdivision concept  
Right third rib| No corresponding organ system subdivision concept  
Quadriceps femoris muscle| No corresponding organ system subdivision concept  
Quadriceps femoris muscle, left| No corresponding organ system subdivision concept  
Vastus medialis muscle| No corresponding organ system subdivision concept  
  
 _X disorder at Y level_ concepts from ICD-11, e.g.****_skin laceration of arm at wrist level_ (precedent are terms added from ICD-9) will not be added to the SNOMED International Release.

## Cell, tissue, organ

In general, organs are made up of tissue, and tissue is made up of cells. However, a cell is not necessarily part of tissue, and tissue is not necessarily part of a named organ. 

## Tree structured organs

Arteries, veins, nerves, and the bronchi form tree-like structures that distribute across multiple regions. Because of their size and links with other structures, they require slightly different modeling. FMA divides tree structured organs as:  _organs with organ cavities_ and _ organs that are solid._

## Hollow tree organs

 _Organ with organ cavity_ has a subtype,  _hollow tree organ_. The hollow tree organs are:

  * Tracheobronchial
  * Biliary
  * Vascular
    * Arterial
      * Systemic arterial
      * Pulmonary arterial
    * Venous
      * Systemic venous (superior, inferior, and 4 cardiac trees)
      * Pulmonary venous (superior and inferior left and superior and inferior right)
      * Portal venous
    * Lymphatic (right lymphatic duct and thoracic duct)

Among the solid organs, there is one category,  _neural_ , that is tree-structured (see: Nervous system; neural tree).

## Breast

 _Male_ and _female_ are unnecessary descriptions in describing the breast. Gender information should be obtained and recorded separately in the information model.  New content that requests _male_ or _female_ breast will not be accepted so as not to duplicate gender-specific anatomical concepts.

For information on laterality, see Anatomical Structure Naming Conventions section at [Naming Convention for Digits of Hand and Foot](https://confluence.ihtsdotools.org/display/WIPEG/Naming+Convention+for+Digits+of+Hand+and+Foot?src=sidebar "Follow link") and Laterality section at [Laterality](https://confluence.ihtsdotools.org/display/WIPEG/Laterality?src=sidebar "Follow link")
