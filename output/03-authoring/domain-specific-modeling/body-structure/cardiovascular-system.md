# Cardiovascular System

## Cardiac valves, normal and malformed

There are a number of concepts in the anatomy hierarchy that represent congenital cardiac malformations. This content was developed in cooperation with IPCCC (International Pediatric and Congenital Cardiac Code).

The following pairs of cardiac valve concepts do not represent the same thing and are siblings, not super- or subtypes, to each other:

  * [11124005 |Atrioventricular valve (body structure)|](http://snomed.info/id/11124005) vs. [ 279316009 |Atrioventricular (non-mitral, non-tricuspid) valve structure (body structure)|](http://snomed.info/id/279316009)
  * [91134007 |Mitral valve structure (body structure)|](http://snomed.info/id/91134007) vs. [ 312523009 |Left (non-mitral) atrioventricular valve structure (body structure)|](http://snomed.info/id/312523009)
  * [46030003 |Tricuspid valve structure (body structure)|](http://snomed.info/id/46030003) vs. [244344000 |Entire right (non-tricuspid) atrioventricular valve (body structure)|](http://snomed.info/id/244344000)

Atrioventricular (non-mitral, non-tricuspid) valves represent body structures which were anatomically abnormal from the beginning of their development. They are not called mitral/tricuspid valve although they perform the same function as their normal counterpart would. They are also represented using the term  _not morphologically mitral/tricuspid valve_.

For example,

  *     * [459176007 |Abscess of right atrioventricular (not morphologically tricuspid) valve (disorder)|](http://snomed.info/id/459176007) represents an abscess of the right atrioventricular valve that has been developed abnormally from the beginning vs. [431189009 |Abscess of tricuspid valve (disorder)|](http://snomed.info/id/431189009).

For a normally developed mitral/tricuspid valve, the term  _left/right atrioventricular valve_ can be used interchangeably. They are true synonyms. However, they cannot be used for abnormally developed valves, i.e. left atrioventricular (non-mitral)/right atrioventricular (non-tricuspid) valves.

## Systemic, pulmonary circulation

The  _systemic circulatory system_ is the combined arterial and venous circulation that begins where blood leaves the left ventricle and ends where blood enters the right atrium. It excludes the coronary circulation. The heart chambers are also considered part of the circulatory system.

The  _pulmonary circulation_ is the combined arterial and venous circulation that begins where blood leaves the right ventricle and ends where blood enters the left atrium.

### Arterial

[81040000 |Pulmonary artery structure (body structure)|](http://snomed.info/id/81040000): Any artery of the pulmonary circulation, i.e. arteries carrying unoxygenated blood from the heart to the lungs. They include the trunk, right and left branches of the pulmonary artery (which are within the mediastinum), and all of their branches (which tend to occur at or past the hilum and are therefore regionally within the lung).

[128260003 |Pulmonary artery within lung (body structure)|](http://snomed.info/id/128260003): Any artery of the pulmonary circulation that is regionally within the lung, the boundary being defined by the hilum.

[45341000 |Structure of trunk of pulmonary artery (body structure)|](http://snomed.info/id/45341000): The main pulmonary artery (one of the  _great vessels_ that enter the heart) carrying blood from the right ventricle and dividing into right and left main pulmonary arteries (some dictionaries consider this synonymous with pulmonary artery). 

### Venous

[430757002 |Structure of pulmonary vein great vessel (body structure)|](http://snomed.info/id/430757002): There are four pulmonary veins that enter the left atrium, two on each side. These are what is intended by the name _pulmonary vein_ (_great vessels_ that enter the heart). In common usage, any vein that is part of the lung may be referred to as a pulmonary vein, but SNOMED CT has a separate concept: [122972007 |Pulmonary venous structure (body structure)|](http://snomed.info/id/122972007): This means any vein that drains the lung. A synonym is  _vein of lung_.   _Pulmonary veins_ are veins of the lung, but  _pulmonary vein_ and  _vein of lung_ are not synonyms.

There is no concept for  _P_ _ulmonary vein within lung_.

## Central, peripheral, cerebrovascular systems

The term  _central vascular_ is not in common use. In fact, the term does not appear in SNOMED CT. However, the term  _peripheral vascular_ is very common, and therefore it requires a definition that (by default) sets the boundary between central and peripheral vascular systems.

The simplest definition of the peripheral vascular system is the vascular system that is not central; and then the central vascular system includes the pulmonary circulation, coronary circulation, cerebrovascular system, thoracic aorta, superior vena cava, inferior vena cava, and mediastinal blood vessels.

Peripheral vascular disease is often distinguished from cerebrovascular disease and coronary artery disease. These are the three major categories of diseases caused by problems in vascular circulation in general, and atherosclerosis, in particular. As a result of this clinical distinction, the cerebrovascular system is excluded from the peripheral vascular system.

_Cerebrovascular_ is commonly defined in two ways: the blood vessels  _in_ the brain, or the blood vessels that  _supply_ the brain (including those within the brain). Because cerebrovascular disease includes extra-cranial occlusions of the vertebral and carotid arteries, we define the cerebrovascular system as those vessels involved in the supply and drainage of blood to the brain. Convention does, however, tend to exclude the innominate artery - which gives rise to the right common carotid and the arch of the aorta which gives rise to the left common carotid. Convention also excludes the subclavian arteries which give rise to the vertebral arteries.

## Common carotid artery, artery of neck

The common carotid artery has a left and right component. The right common carotid artery has no thoracic portion (it arises from the brachiocephalic trunk behind the right sternoclavicular joint). The left common carotid artery has a thoracic portion (It arises from the arch of the aorta). Thus, the common carotid artery (not specifying laterality) is not exclusively an artery of the neck. This is because of the thoracic portion of the left common carotid artery. Then, artery of neck region includes the cervical part of left common carotid artery and all of the right common carotid artery.

## Intracranial, extracranial vascular system

Some vascular trees are located wholly within the cranial cavity, but some (internal carotid; vertebral) cross the boundary between extra- and intra-cranial. Intracranial segments of such vascular trees must be individually identified as such, and the entire vascular tree must not be categorized as either extra- or intra-cranial.

See _Tree-structured organs_ elsewhere, re: regional sections of venous and arterial tree organs.

## The word  _artery_

The word artery has three different meanings. In modeling SNOMED CT concepts that refer to arteries, it is necessary to decide on a case-by-case basis which of these meanings is intended.**_  
_**

Meanings of artery  
Meanings| Notes| Examples  
An arterial trunk: a single tube| The most common in clinical use.The meaning of the word  _artery_ in injuries and operations is clearly a single tube, the trunk of the named artery, or trunk of the named arterial branch.  
| A puncture wound of the femoral artery affects the femoral arterial trunk.A grafting into the popliteal artery is done into the popliteal arterial trunk.Occlusions of arteries are located by naming the trunk where the occlusion occurs. Occlusions may affect circulation beyond the trunk, however, collateral circulation often mitigates the effects. Thus, it is incorrect to interpret  _artery_ to mean the entire subtree in any of these usages.  
An arterial tree organ| There are only two complete arterial tree organs (the systemic arterial tree arising at the aortic valve, and the pulmonary arterial tree arising at the pulmonary valve) that are readily named as such. They are seldom referred to by disorders or procedures.| NA  
An arterial trunk, plus all its branches| When modeling, it is challenging to differentiate when  _trunk_ vs.  _trunk plus branches_ is intended.| NA  
  
This clinical usage of  _artery_ varies from the definition of the FMA, which defines  _artery_ as a subdivision of an arterial tree (organ) which consists of branching sets of tubes (arterial trunks) that form a tree; together with other arterial trees (organ parts), it constitutes an arterial tree (organ). The FMA definition corresponds to the third meaning of  _artery_ above.

## The word  _vein_

The word vein has three different meanings. In modeling SNOMED CT concepts that refer to veins, it is necessary to decide on a case-by-case basis which of these meanings is intended.

Vein  
Meaning| Notes  
A venous trunk| As with the clinical usage of the word  _artery_ , clinical usage of the word  _vein_ generally refers to the trunk and not the entire tree  
A venous tree organ| There are only eleven venous tree organs that are readily named as such.  
A venous trunk, plus all its branches| When modeling, it is challenging to differentiate when  _trunk_ vs.  _trunk plus branches_ is intended.  
  
This clinical usage of  _vein_ varies from the definition of the FMA, which defines  _vein_ as a subdivision of a venous tree (organ) which consists of branching sets of tubes (venous trunks) that form a tree; together with other venous trees (organ parts), it constitutes a venous tree (organ). The FMA definition corresponds to the third meaning of  _vein_ above.

## Trunk of vein, vein as a tree structure

Because  _trunks of veins_ , not  _venous trees_ , have been used to organize the vein hierarchy, there are implications for regional classes.

For example, the internal jugular vein is a vein of the neck, but its entire  _venous tree_ extends into the head. The internal jugular vein _ venous tree_ is not strictly part of the neck, even though the internal jugular vein  _venous trunk_ is strictly part of the neck.

Tributaries are also modeled as direct tributaries of the trunk. A tributary of a named vein is part of the  _venous tree_ of the named vein, but not part of the  _venous trunk_ of the named vein. Some veins that are part of the  _venous tree_ , and therefore might be regarded as indirect tributaries, are not modeled as direct tributaries of the  _trunk of the vein_. Direct tributary is the intended meaning of tributary.

All concepts with the name pattern  _vein x and its tributaries_ were inactivated due to ambiguity about their meanings. They have  _MAYBE A_ links to  _structure of vein x_ and  _entire vein x._

  

  

