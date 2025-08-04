# Skeletal system

Since the skeletal system includes bones and cartilage, it is possible to have a procedure on the skeletal system, i.e. on cartilage, that is not a procedure on bone.

For example,

  *     * [77825002 |Division of cartilage of wrist (procedure)|](http://snomed.info/id/77825002) is a procedure on the skeletal system (procedure)

SNOMED CT considers the  _skeletal system subdivision_ part of the entire bone (system). This may change if there are procedures on cartilaginous skeleton that involve skeletal system subdivisions.

## Osteotomy

O _steotomy_ is defined as  _cutting into or through a bone_ ;__ there are 3 meanings in SNOMED CT:

  1. Cutting into a bone, regardless of whether the bone is divided (incision, general meaning). Model using Method, Incision - action (qualifier value), and Procedure site - Direct (attribute), bone structure (or subtypes).

For example, 

  1.      *        * [118483001 |Incision of rib (procedure)|](http://snomed.info/id/118483001)
  2. Cutting through a bone and dividing it (division by cutting). Model using Method, Division - action (qualifier value), and Procedure site - Direct (attribute), bone structure (or subtypes).

For example, 

  1.      *        * [447867002 |Division of ulna (procedure)|](http://snomed.info/id/447867002)

3\. Cutting into a bone without cutting through it and therefore without dividing it (incision without division). 

This is unnecessary; procedures that do not explicitly involve division are modeled simply as  _Incision_.

## Reduction and fixation of fractures

 _Reduction and fixation_ has two actions by two different means; open reduction of a fracture and insertion of an orthopedic fixation device. This provides an opportunity for general concept inclusion axioms (GCIs) in order to fully represent the meanings without heavy postcoordination modeling.  _Open reduction of a fracture_ necessarily involves open manipulation of the fracture and  _internal fixation of a fracture_ necessarily involves the insertion of an orthopedic internal fixation device.

For example, 

  *     * [74011006 |Open reduction of fracture of tibia and fibula with internal fixation (procedure)|](http://snomed.info/id/74011006)

  

