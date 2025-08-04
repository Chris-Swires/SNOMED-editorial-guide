# Anatomical Concept Model

## The Structure-Entire-Part (SEP) model

SNOMED CT uses a structure-entire-part triple, known as the _SEP triple_ , to represent anatomical structures. The following Relationships provided a way for the anatomy in CTV3 to be mapped to RT: 

  

<figure><img src="images/174690324.png" alt="" title=""><figcaption><p>The SNOMED CT anatomy hierarchy differentiates classes of entire anatomical entities from classes of <em>parts of</em> entire anatomical entities.</p></figcaption></figure>

  
  

_**E**_ ntire  _concept_ : Denotes a class that is instantiated by entire anatomical entities of some kind: entire heart is instantiated by all individual hearts.

Entity  _**P**_ art  _concept:_ Denotes a class that is instantiated by all anatomical entities that are a proper part of some entity of a given kind: heart part is instantiated by all entities that are a proper part of some heart, e.g. my mitral valve, your right ventricle, Joe's sinus node. Heart part is not instantiated by any heart.

Entity  _**S**_ tructure  _concept_ : Subsumes both the related Entire and Part  _concepts_. Consequently, it denotes a class which is instantiated by anything that instantiates either the Entire or the Part. For instance, Heart structure is instantiated by my heart, my mitral valve, your heart, your right ventricle, Joe's sinus node, Joe's heart, etc.

The code named Liver structure in  _CTV3_ is equivalent to Liver structure in the diagram above. Both the  _CTV3_ code for Liver structure and the SNOMED RT code for Liver are interpreted to mean Some or all of the liver.  _Site_ attributes (PROCEDURE SITE, FINDING SITE) will usually take the value liver structure rather than entire liver , since typically the site of a _liver disorder_ or _procedure on the liver_ is not necessarily the entire liver.

### Purpose of the Structure concept

Adding the Entity Structure codes is a convenience to assist with the logic-based aggregation of references to the entity or its parts. The implication of this view is that the E of the SEP triple is the code that should be regarded as the one that represents the real anatomical entity that is named.

For example, the code for entire liver is the one that should correspond to the code for liver in the Foundational Model of Anatomy (FMA). The subtype hierarchy __ for entire liver fits much better with the FMA hierarchies, and indeed it might be possible to completely reconcile SNOMED’s non-Structure components with FMA anatomy.

A database has been developed that categorizes codes in the physical anatomical entity hierarchy according to their status as S structure, P Part or E Entire, and provides the corresponding S and P code for each E code. This should provide some value to implementers. It can help with navigation, coordination with formal ontologies of anatomy, and selection of codes for  _postcoordination_.

  

## Conventions for merging concepts from SNOMED RT and Clinical Terms v.3

Where there were two concepts with the same name, the SNOMED RT code was to become the _S_ code, and the CTV3 code was to become the _E_ code. There are still instances of unrecognized pairing of the RT-CTV3 _S-E_ pair, where neither codes FSN has been changed according to the naming conventions in this document. When these unmatched pairs are identified, it is our practice to change the FSNs accordingly, and to make the _E_ code have a subtype IS-A link to the _S_ code.

### _S_ concepts without a corresponding _E_ concept

Some _S_ codes do not currently have a corresponding _E_ code subtype, and there was no policy that required that such _E_ codes be created during the merger of SNOMED RT and CTV3. However, it is likely that such a policy will be enforced in the future.

### _S_ Structure codes can subsume entities other than E or P

The SEP triple may give the impression that all _S_ codes have exactly two children, one _E_ and one _P_ , with all of the remaining descendants placed under _P_. Again, in the past this degree of modeling consistency was not always followed. Some codes were purposely made subtypes of the _S_ that are not strictly part of the corresponding _E_.

For example, perirenal tissue is a kidney structure but not a part of the kidney. It is used to define perirenal abscess so that it is subsumed by renal abscess. While a perirenal abscess is not strictly within the substance of the kidney, it is still considered a kind of renal abscess, and the _S_ anatomy hierarchy is used to support this inference.

This policy has introduced undesirable variation and arbitrariness into the terminology, and future revisions will seek to eliminate these variations. Where a code is needed for a site that is really meant to extend to entities that are not part of any kidney, this will be made clear in the name, e.g. Structure of kidney and perirenal tissue.

### Countable vs non-countable _E_ entities

The _E_ code needs to be interpreted with care when the _x_ name refers to entities that do not have the property of identity, meaning that they are not countable wholes, or could be interpreted as non-countable. In this circumstance, the interpretation of _E_ means some portion of the thing being named.

For example, tissue and types of tissue such as fascia, muscle, tendon, bone tissue, connective tissue, skin, mucosa/mucous membrane, nerve tissue, etc. Muscle, tendon, bone and skin can identify a type of tissue as well as an individual organ of that type. Bone tissue has no identity, but a particular bone does have identity.

To use skin as the archetypal example, the _E_ code for _skin of finger_ means a portion of the skin of a finger, so all of its subtypes must also be portions of skin. The _S_ code for _skin of finger_ then has a subtype _P_ which would mean proper part of a portion of skin of finger. This admits subtypes that are not kinds of skin, but may be parts of skin, including layers, e.g. epidermis of finger (meaning a portion of epidermis of finger) could be a proper part of a portion of skin of finger. 

### Tissues, layers, membranes: portions

We regard the _E_ code for x tissue, x layer to have the meaning _portion of X tissue_ , and therefore regional subdivisions of tissue types are direct subtypes.

For example, transitional epithelium of urinary tract, as an _E_ kind of code, should be a supertype of transitional epithelium of urinary bladder. The reason is that (portion of) transitional epithelium of urinary bladder is a kind of (portion of) transitional epithelium of urinary tract.

We also deal with layers the same way.

For example, we regard serosal layer and serosa tissue as meaning the same thing, since all serosal tissue is conifigured as a layer, and it can’t be a serosa without being a layer; and their _E_ codes mean portion of serosal layer or portion of serosal tissue.

As another example, layer of retina would be a supertype of nerve fiber layer of retina, and also a supertype of retinal epithelium, where retinal epithelium represents a portion of the epithelium of the retina and is therefore a kind of (portion of) a layer.

## Groups

The identity/countability issue extends to a problem differentiating groups of entities from one of the group.

For example, consider x = _lymph node group_ , y = _lymph node_. In this case, the group should be linked to the member via an appropriate  _Relationship_(not yet in SNOMED CT), such as has-member. In those cases where y is always necessarily a member of group x, it could be linked via a member-of  _Relationship_(also not yet in SNOMED CT).

What does part of mean?

There are several possible ways of interpreting _part of_. In SNOMED CT, _A part of B_ means that in normal anatomy, the entire structure A is structurally included in B. Another way of saying it is that A is part of B if there is no part of A that is not also part of B.

For example, the humerus is not part of the shoulder region, because the distal humerus is part of the humerus, and the distal humerus is not part of the shoulder region.

We do  _not_ use part of for non-anatomical meanings, such as grouping tests together in batteries, nor do we use it to indicate  _Relationships_ that are not strict anatomical inclusion.

Some recent work has begun to differentiate between part of that is reflexive (that is, an entity is in some sense a _part of itself_ , much the same that a set can be viewed as a subset of itself), versus _proper part of_ , where an entity cannot be a proper part of itself. For now, we regard part of  _Relationships_ as implying strict partonomy.

There is sometimes confusion about parthood as opposed to location.

For example, an embryo is not part of a mother's body, but a kidney is. The anatomy section is composed mainly of canonical parts; but a few abnormal parts are included to permit them to be used as the location of tumors or injuries.

For example, a Meckels diverticulum is a body structure that is part of the small intestine, and it is also a morphological abnormality. Likewise some stomas and other post-surgical structures are considered part of the body. A transplanted liver or kidney would be considered part of the body, as a post-surgical structure, even though the transplanted organ is not genetically identical. Likewise transplanted bone marrow is part of the body.

Non-living implants and devices, and foreign bodies, on the other hand, are considered to be located in the body, but not part of the body. 

For more information on part of relationships in the anatomy concept model, please see [Part of relationships (under development)](https://confluence.ihtsdotools.org/pages/viewpage.action?pageId=35992270).

  

## Can the SNOMED CT relationships table be used to construct a part of hierarchy?

The currently distributed _part of_ Relationships __ need to be much more extensively modeled and quality assured. At present they are not _defining_ , that is, their Characteristic Type __ in the relationship file __ is _additional_ , and, therefore, they do not affect the classifier behavior. A substantial amount of effort has gone into a draft of the updated _part of_ Relationships; these will require review and approval before incorporation into the release. This will eventually result in the SEP triplet structures and _part of_ relations being strictly paralleled. It is a matter of time to implement and quality assure the changes.

## Why are part of relationships not defining?

The SEP structure, combined with the inference mechanism that is used with SNOMED CT, allows us to take advantage of anatomical Relationships __ to infer subsumption, IS_A Relationships __ between disorders, procedures, and other entities without reference to _part of_ Relationships. The SEP structure also permits us to sufficiently define anatomical structures without reference to _part of_ Relationships (making them _necessarily true_ , but not among the _necessary and sufficient_ conditions).

For example, the _Structure of left hand_ can be sufficiently defined as a hand structure with laterality =  _left._ This definition is sufficient. Converting the _part of_ Relationships __ to have Characteristic Status = _defining_ will require significant changes to the current model.

## Entities with mass versus purely spatial massless entities

Points, lines, and surfaces can be considered to be massless. The FMA calls these _immaterial_. It is important to differentiate the codes/names for these entities from those that are intended to represent entities that have mass. At present, the concepts __ under anatomical spatial entity represent massless entities. Massless entities are not represented using the SEP model. It is conceivable that users may want to reference parts of a surface, and to enable this we would need to apply the SEP model to anatomical spatial entities, or else adopt defining _part of_ Relationships. 

## Attributes used to define body structure concepts

### Laterality

This attribute provides information on whether a body structure is left, right, or bilateral. It is applied only to bilaterally symmetrical body structures which exist on opposite sides of the body.

### Unilateral

With the addition of lateralized content in the International Release, the need for unspecified unilateral concepts is removed, as well as potentially dangerous, if used directly in a patient record. Unilateral concepts will not be accepted.
