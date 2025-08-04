# Musculoskeletal System

## Skeletal system, bony skeleton

The  _skeletal system_ (_systema skeletal_ in _Nomina Anatomica_) includes bones and cartilage. The  _bony skeleton_ includes bones only. The _ vertebral column_ is part of the skeletal system, and includes the intervertebral discs (fibrocartilage). Individual vertebrae are part of the bony skeleton.

SNOMED CT considers the  _skeletal system subdivision_ part of the entire bone (system). This may change if there are procedures on cartilaginous skeleton that involve skeletal system subdivisions.

In ordinary usage,  _bone_ combines the meanings  _bone organ_ and  _bone tissue_.**  
**

The 5 anatomical concepts related to _bone_ are:

  1. [3138006 |Bone (tissue) structure (body structure)|](http://snomed.info/id/3138006). Tissue type that makes up bones; a quantity of regular connective tissue consisting of osteocytes and related cells, the intercellular matrix of which is ossified; or any part thereof.
  2. [90780006 |Entire bone (organ) (body structure)|](http://snomed.info/id/90780006). Individual bones, e.g. femur, tibia, ulna, scaphoid, lunate. An organ with cavitated parts; consists primarily of compact (cortical) and cancellous bone surrounding bone marrow cavities; also includes periosteum, endosteum (and, according to FMA, articular cartilage).
  3. [118966000 |Skeletal system subdivision (body structure)|](http://snomed.info/id/118966000). Groups of bones, e.g. spine, skull, bony pelvis.
  4. [128530007 |Entire bony skeleton (body structure)|](http://snomed.info/id/128530007).  _Pars ossea systematis skeletalis_ ,  _bone part_ of the skeletal system.
  5. [113192009 |Skeletal system structure (body structure)|](http://snomed.info/id/113192009). Entire skeletal system, including bones and cartilage.

Bone (tissue) is part of entire bone (organ); entire bone (organ) is part of skeletal system subdivision (system); skeletal system subdivision (system) is part of entire bony skeleton (body structure); and entire bony skeleton (body structure) is part of skeletal system structure (body structure). We can use Entire bone (system) to define aggregate concepts that involve bones.

FSNs for spinal levels should not contain abbreviations.

Correct example,

  *     * Posterior cord syndrome at tenth thoracic spinal cord level, not Posterior cord syndrome of thoracic spinal cord at T10 level

## Non-ossified bone** **

Bone organs are composed primarily of bone tissue, but there are some non-ossified parts. In particular, periosteum is clearly a part of a bone organ, but is not ossified tissue.

## Bone marrow, marrow cavity

Bone marrow is contained within the marrow cavity, but it is not part of the bone organ. The (empty) marrow cavity is part of the bone organ. The bone marrow structure (body structure) is not a subtype of Bone structure (body structure).

Clinically, marrow disorders are not usually considered bone disorders, nor are marrow procedures considered bone procedures.

For example,

  *     * Bone marrow disorders are not musculoskeletal disorders, but bone disorders are musculoskeletal disorders. Bone marrow transplants are not considered types of bone transplant.
    * [60168000 |Osteomyelitis (disorder)|](http://snomed.info/id/60168000) is not the same as [44462005 |Osteitis (disorder)|](http://snomed.info/id/44462005).

### Structure of (named bone), bone structure of (named bone)

To differentiate marrow, vessels, nerves, and periosteum from the actual hard tissue of bones, we differentiate structure of tibia**** from [12611008 |Bone structure of tibia (body structure)|](http://snomed.info/id/12611008). The bone marrow and other soft tissues of the tibia can then be categorized separately from the hard tissues. Bone marrow diseases are not considered musculoskeletal diseases, so bone marrow structures should not be placed in the bone (tissue) structure hierarchy.

## Long bone, short bone

ICD does not use the standard anatomical definition of  _long bone_. For instance, Benign neoplasms of long bones are distinguished from benign neoplasms of short bones _;_ the bones of the hand are considered short bones. The anatomical definition of long bone cites the proportional relationship between length and width (length >> width). It is clear that metacarpals, metatarsals, and phalanges are included in the anatomical definition of long bone.

The index finger is the  _first finger_ and  _second digit_. Do not use  _second finger_.

In order to accommodate the differences between anatomical definitions and classifications, SNOMED CT has anatomical groupings that correspond to the ICD groupings.  _Scapula_ ,  _humerus_ ,  _radius_ , or  _ulna_ and  _long bone of thigh_ or  _lower leg_ are used as the sites for grouper concepts that match ICD definitions and groupings.

## Sternum, manubrium, body, xiphoid

The sternum is considered a bone organ. The manubrium, body, and xiphoid are parts of the sternum, classed as zones in the FMA.

## Teeth, maxilla, mandible

Even though teeth are supported by the maxillary or mandibular bone, they are not  _part of_ the [70925003 |Bone structure of maxilla (body structure)|](http://snomed.info/id/70925003) or [ 91609006 |Bone structure of mandible (body structure)|](http://snomed.info/id/91609006). Teeth are part of the [ 4335006 |Upper jaw region structure (body structure)|](http://snomed.info/id/4335006) and [ 48077000 |Lower jaw region structure (body structure)|](http://snomed.info/id/48077000).

## Joints, joint regions

In many diseases and procedures, reference is made to areas of the body that may ambiguously imply either a _ joint_ or a  _region surrounding the joint_. Some common ones are:

Joint vs. Joint Region  
[70258002 |Ankle joint structure (body structure)|](http://snomed.info/id/70258002)| [344001 |Ankle region structure (body structure)|](http://snomed.info/id/344001)  
[74670003 |Wrist joint structure (body structure)|](http://snomed.info/id/74670003)| [8205005 |Wrist region structure (body structure)|](http://snomed.info/id/8205005)  
[85537004 |Glenohumeral joint structure (body structure)|](http://snomed.info/id/85537004)| [16982005 |Shoulder region structure (body structure)|](http://snomed.info/id/16982005)  
  
## Shoulder girdle

[ 272691005 | Bone structure of shoulder girdle (body structure)|](http://snomed.info/id/272691005 "272691005 | Bone structure of shoulder girdle \(body structure\) |") This concept is used to define diseases and procedures affecting bones in the shoulder region, i.e. proximal humerus, scapula, and clavicle. It is not a bone, but a bone structure, and is part of the shoulder region. 

## Intertarsal joint structure

[27949001 |Intertarsal joint structure (body structure)|](http://snomed.info/id/27949001); SYN: Tarsal joint: This structure is part of a group of bones forming the tarsus or tarsal joint (ankle). The [ 27162001 |Talocalcaneonavicular joint structure (body structure)|](http://snomed.info/id/27162001) is the articulation between the talus (one of the seven bones of the ankle joint) and the other bones of the tarsus, and is what is meant by the rarely-used term  _talotarsal joint_. The talocalcaneal joint is a synonym for the [ 127863007 |Subtalar joint structure (body structure)|](http://snomed.info/id/127863007). Dislocations of the subtalar joint usually involve the [127864001 |Structure of talonavicular joint (body structure)|](http://snomed.info/id/127864001). The subtalar and talonavicular joints constitute the talocalcaneonavicular joint.

## Arm, leg, upper, lower, extremity, limb

The meaning of the words  _arm_ and  _leg_ may be misinterpreted.

  * _Arm_ may refer to the upper limb, but it may also refer to the upper part of the arm. 
  *  _Leg_ may refer to the lower limb, but it may also refer to the lower part of the leg. 
  * In common usage,  _leg_ is a synonym of  _lower extremity,_ and  _arm_ is a synonym of  _upper extremity_.

In SNOMED CT, 

  * 53120007 |Upper limb structure (body structure)| includes the shoulder, upper arm, forearm, wrist, and hand
  * Upper arm is a synonym to 40983000 |Structure of upper extremity between shoulder and elbow (body structure)|. 
  * 61685007 |Lower limb structure (body structure)| includes the hip, thigh, lower leg, ankle and foot.
  * Lower leg is a synonym to 30021000 |Structure of lower extremity from knee to ankle (body structure)|. Lower leg does not include the foot.  _Stedman's Medical Terminology_ defines lower leg as  _the segment of the inferior limb between_ _the knee and the ankle_. 

The word  _l_ _imb _appears in the FSN of the body structure, while the word  _extremity_ appears as a synonym. Therefore, when constructing an FSN for a new clinical finding concept, this precedent should be followed: 

FSN: [ 61685007 |Lower limb structure (body structure)|](http://snomed.info/id/61685007)

PT: Lower limb structure

Synonym: Lower extremity

Additional descriptions of  _leg_ and  _arm_ are permitted for concepts whose FSNs refer to  _lower limb_ and  _upper limb_ respectively. 

External sources, such as WHO Classifications, may have conventions for interpreting the meaning of phrases that contain the words  _arm_ and  _leg._ These sources may be referenced to help determine the meanings of _ International Classification of Diseases (ICD)_ terms when mapping or completing other actions. ICD terms may differ from common usage and will not necessarily match SNOMED CT concepts.

## Shoulder and hip regions, upper and lower limbs

The shoulder region is part of the upper limb, and the hip region is part of the lower limb. This follows the general pattern used in the  _Foundation Model of Anatomy (FMA)_.

The  _FMA_ defines:

  * upper limb as the free upper limb and the pectoral girdle (of which the shoulder region is part). SNOMED CT has the concept 896766000 |Structure of free upper limb (body structure)|. 
  * lower limb as the free lower limb and pelvic girdle (of which the hip region is part). SNOMED CT has the concept[ 699617006 |Structure of free lower limb (body structure)|](http://snomed.info/id/699617006), i.e. the lower limb not including the pelvic girdle. 

## Axilla

The axilla is bound by the upper limb laterally and the thorax medially. It may be viewed as not strictly part of the upper limb or the thorax or it may be views as part of both. [ 91470000 |Axillary region structure (body structure)|](http://snomed.info/id/91470000) is defined in SNOMED CT as being both an upper limb structure and a thoracic structure.

## Tendon

A muscle may be considered an entire functional unit, including attachments to the skeletal system, or merely the contractile part of this unit. In clinical use, muscle is the contractile part only. The FMA definition implies that tendons should be considered part of their corresponding muscles, rather than organs in their own right. SNOMED CT models |Tendon structure| as a subtype of |Skeletal muscle and/or tendon structure (body structure)|. Muscle and tendon are two separate anatomical entities.

For example,

[61352006 |Structure of achilles tendon (body structure)|](http://snomed.info/id/61352006) is not a [53451005 |Triceps surae muscle structure (body structure)|](http://snomed.info/id/53451005) (gastrocnemius and/or soleus) muscle structure.

## Muscle function

When modeling muscle categories according to their functions, assume they mean the function of the  _entire muscle_ , unless stated otherwise. 

  

 _X disorder at Y level_ concepts from ICD-11, e.g.****_skin laceration of arm at wrist level_ (precedent are terms added from ICD-9) will not be added to the SNOMED International Release.
