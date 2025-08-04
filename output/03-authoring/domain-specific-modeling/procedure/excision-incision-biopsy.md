# Excision, incision, biopsy

Excision, incision, and biopsy may be difficult to interpret. They are organized according to the following general structure.

## Excision

Organ excision. Any excisional act involving the organ; usually  _(organ)-ectomy,_ or similar, is a synonym.  _Organ excision_ , itself, does not specify whether it is complete or partial, nor does it specify what is excised.

For example, 

  *     * [23968004 |Excision of colon (procedure)|](http://snomed.info/id/23968004) or one of the synonyms, Colectomy

## Complete or total excision

Concepts may include  _complete_ or  _total_ to indicate complete removal or excision of the organ.

For example, 

  *     * [63016009 |Total resection of urinary bladder (procedure)|](http://snomed.info/id/63016009) with the synonyms Complete cystectomy, Total excision of bladder, and etc

## Partial excision

Concepts may include  _partial_ __ to indicate removal or excision of part of the organ. Specifying  _partial excision_ does not differentiate between a partial excision  _of_ or  _from_ the organ.

For example, 

  *     * [708929007 |Laparoscopic partial excision of kidney using robotic assistance (procedure)|](http://snomed.info/id/708929007) or one of the synonyms, Partial nephrectomy, laparoscopic with robot assistance

## Lesion or tissue

Concepts may indicate removal of a lesion or tissue; excision of a lesion or tissue from an organ may be complete or partial. 

For example, 

  *     * [72106008 |Excision of lesion of liver (procedure)|](http://snomed.info/id/72106008)
    * [69031006 |Excision of breast tissue (procedure)|](http://snomed.info/id/69031006)

The word  _lesion_ can be used to refer to both structural and functional abnormalities. If a  _procedure_ refers to a lesion that is a structural abnormality, then model with a [405816004 |Procedure morphology (attribute)|](http://snomed.info/id/405816004) of <<[ 52988006 |Lesion (morphologic abnormality)|](http://snomed.info/id/52988006).

## Excision(al) biopsy

Excisional biopsy of organ generally means that  _tissue_ or a  _lesion_ or  _suspected lesion_ is necessarily entirely excised, not the entire organ. It is a partial excision of (from) the organ. This is true even when small polyps are removed.

For example, 

  *     * [116237003 |Excisional biopsy of lesion of rectum by transanal approach (procedure)|](http://snomed.info/id/116237003)

## Incision

An organ incision is any incisional act involving the organ; usually  _(organ)-otomy, _or similar, is a synonym

For example, 

  *     * [45558009 |Incision of lung (procedure)|](http://snomed.info/id/45558009) or the synonym, pneumonotomy

Any _ incision_ procedure that does not necessarily involve division (as opposed to ordinarily does not involve division) remains primitive without an available negation operator

## Incisional biopsy

Incisional biopsy of organ; incisional biopsy of lesion of organ; usually with open approach. Incisional biopsy of [organ] necessarily implies incision and removal of a lesion, and is by definition a  _partial excision_ , since the site is the organ, and an excision is done, but the entire lesion is not necessarily removed.

For example,

  *     * [237378001 |Incisional biopsy of breast (procedure)|](http://snomed.info/id/237378001)

A  _biopsy_ may not be an excision.

For example, 

  *     * [445713002 |Brush biopsy of endocervix (procedure)|](http://snomed.info/id/445713002)
    * [48426002 |Fine needle biopsy of kidney (procedure)|](http://snomed.info/id/48426002)

  

Biopsies, like other removal procedures, may have two direct objects, the  _morphology_ and the  _site_. It is permissible to use Procedure site - Direct (attribute) for biopsies, even if subtypes might have a direct object that is a morphology.

  

