# Lateralized Procedure Naming Conventions

## Procedure concepts with a body structure that has a left/right side

When creating a lateralized procedure concept, two concepts should be created: 

  1. concept for the left side
  2. concept for the right side

When creating a lateralized procedure concept, if a non-lateralized parent does not exist, then it should be created as well. In other words, do not just create the right and left versions, but also create a concept to represent the laterality-agnostic parent. 

For example,

When creating  _Excision of left mastoid _and  _Excision of right mastoid_ , also ensure a concept for _ Excision of mastoid_ exists. 

The acceptable naming pattern for procedures with lateralizable body parts:

  * FSN: <Method> of bilateral <anatomical or acquired body structure> (procedure)
  * PT: <Method> of bilateral <anatomical or acquired body structure>
  * SYN: <Method> of both <anatomical or acquired body structure>  

Bilateral procedures should be modeled using two relationship groups, one for each lateralized body structure.

For example,

[ 895470004 | Amputation of bilateral upper limbs (procedure)|](http://snomed.info/id/895470004 "895470004 | Amputation of bilateral upper limbs \(procedure\) |")

FSN: Amputation of bilateral upper limbs (procedure)  
PT: Amputation of bilateral upper limbs  
SYN: Amputation of both upper limbs

<figure><img src="images/174691336.png" alt="" title=""><figcaption><p>Figure 1: Stated view of 895470004 |Amputation of bilateral upper limbs (procedure)|</p></figcaption></figure>

  

Other synonyms may be added if requested, e.g.  _L_ _eft and right_  _X_ ; _Bilateral X,_ etc. 

  

  

