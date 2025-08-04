# Division, lysis, transection, bisection

## Division and lysis _  
_

_Division -__action (qualifier value)_ is a subtype of Incision - action (qualifier value). This does not mean that all procedures, that include the word  _division_ , should necessarily be modeled with Method (attribute) of Division - action (qualifier value), like those where the division is accomplished using  _blunt dissection_ , not incision. 

For example,

  *     * _Division of adhesion_ concepts, like [173269002 |Division of adhesions of lip (procedure)|](http://snomed.info/id/173269002), should be modeled the same as  _lysis of adhesion_ concepts _,_ like __[ 45602008 |Lysis of adhesions of peritoneum (procedure)|](http://snomed.info/id/45602008)

Both use _Dissection - action (qualifier value)_. Adhesions are  _broken down_ by blunt dissection, often without incising them. This does not exclude procedures that may also involve division by incision.

The preferred name of  _division of adhesions_ concepts can be changed to  _lysis of adhesions_ for consistency. The use of  _lysis of adhesions_ also helps with correct modeling and avoidance of interpreting  _divisions_ as necessarily being kinds of incision.

## Transection and bisection

 _Transection_ is defined as a division across the longitudinal axis of a structure by cutting.  _Bisection_ is defined as division into two parts by cutting. Transection - action (qualifier value) is a subtype of Bisection - action (qualifier value), which is a subtype of Division - action (qualifier value) and Incision - action (qualifier value).

For example,

  *     * [53176004 |Transection of muscle of eye (procedure)|](http://snomed.info/id/53176004)
    * [60158005 |Bilateral bisection of ovary (procedure)|](http://snomed.info/id/60158005)

