# Unit of presentation

A unit of presentation represents a qualitative concept that describes a countable entity in which the clinical drug is presented (e.g. tablet, capsule) or in which it is bounded (vial, ampule). The [732935002 | Unit of presentation (unit of presentation)|](http://snomed.info/id/732935002) is used to support expression of presentation strength, where it provides the denominator for the strength ratio, and to differentiate different clinical drug products when the "intimate container" (see below) is clinically important (e.g. differentiating pre-filled syringes from ampoules for a solution for injection product).  
As described in the Strength section above and detailed further in Appendix A, there are various patterns for describing how unit of presentation and expression of strength relate together, based on whether the unit of presentation relates to the basic dose form or the intimate container (which is therefore the countable unit) of the medicinal product. As the countable entity for a medicinal product, unit of presentation is also important in describing packages, which although out of scope of the international edition, may be of major importance for national extensions describing medicinal products. 

There are three types of unit of presentation:

  1. those that are basic solid dosage forms: e.g. tablets, capsules, suppositories, pessaries etc.
     1. in this type, the solid dosage form, because of its discrete nature, is the countable unit; it provides the physical boundary in which the active ingredient substance(s) of the medicinal product are presented
  2. those that are created by metered dosing valves: e.g. the "actuation" of inhalers, sprays etc.
     1. in this type, the countable unit is the "actuation" provided by the metering valve; it is the valve that determines (bounds) the physical amount of the active ingredient substance(s) of the medicinal product are presented
  3. those that are intimate containers: e.g. ampoules, vials, sachets, cartridges etc.
     1. see below for detail

### **Intimate container**

The "intimate container" of a medicinal product is the receptacle or vessel used to contain (or bound) liquid and some solid or semi-solid medicinal products into countable entities. A medicinal product presented in an intimate container will almost always have at least one layer of additional packaging added to it in order to make it into a packaged medicinal product; this external packaging is not described in the international edition. For example: an ampoule is an intimate container to present a solution for injection dosage form; the ampoule will always be supplied in a box or a moulded carton, possibly additionally with a blister strip as intermediate packaging. Particularly for liquid parenteral products for nebuliser liquids, and for some semi-solid presentations, the intimate container/unit of presentation may have clinical significance: providing a patient heparin in a pre-filled syringe is different from supplying that same concentration of heparin in a (multi-dose) vial. Similarly, hormone replacement gels may be supplied in single dose sachets to provide the correct administration amount.

### **IDMP Compatibility**

In IDMP, the _"one countable instance of a whole of medicinal product"_ is managed through the information model: it is (generally) one instance of the Manufactured Item, with its manufactured dose form and unit of presentation or one instance of the Pharmaceutical Product (with its administrable dose form and unit of presentation). The Manufactured Item is therefore the concept/class that most closely resembles the SNOMED CT Clinical Drug, but both Manufactured Item and Pharmaceutical Product contain the key "unit of presentation" attribute. However, the Manufactured Item is a representation of something that is real, with (at least in theory) all its excipient substances described and therefore is not directly compatible to the Clinical Drug - indeed the Clinical Drug could be seen as a grouper concept for similar Manufactured Items, if excipient substances etc. and packaging are disregarded. The unit of presentation in IDMP is what specifies the "real world" units in which the quantity of the manufactured item is described. The unit of presentation can be specified in accordance with ISO 11239 and ISO/TS 20440 and its resulting terminology [implemented through EDQM.  
IDMP goes on to state: "For items where their quantity is a measured quantity of weight or volume, the "unit of presentation" shall not be given since it is the same as the units of that quantity (that is ml, mg, or %). For solid dose forms and other items that are measured by counting integer quantities, the unit for quantity shall be "unit" and the "unit of presentation" shall be the item that is counted."  
In EDQM, unit of presentation is defined as the "Qualitative term describing the discrete countable entity in which a pharmaceutical product or manufactured item is presented, in cases where strength or quantity is expressed referring to one instance of this countable entity."

EXAMPLE 1: To describe strength: "Contains 100 mg per tablet" ('tablet' is the unit of presentation).**  
**EXAMPLE 2:**** To describe quantity: "Contains 100 mL per bottle" ('bottle' is the unit of presentation).**  
**

Unit of Presentation is therefore sometimes known as "the countable unit".

###  Out of Scope:

  * Concepts representing proprietary dose forms
  * Concepts that contain modifiers, e.g. hard capsule, capsule for inhalation

The Unit dose (qualifier value) is unacceptable for representing unit of presentation.

Concept descriptions representing Unit of Presentation  
FSN| **X (unit of presentation)** For example,

  *     *       * Actuation (unit of presentation)
      * Capsule (unit of presentation)
      * Suppository (unit of presentation)
      * Tablet (unit of presentation)

  
PT| **X** For example,

  *     *       * Actuation
      * Capsule
      * Suppository
      * Tablet

  
SYN| Synonyms are not allowed  
  
  

