# Centesis

_Centesis_ may be defined as the act of puncturing a body cavity or space with a hollow needle and drawing out fluid. Each centesis procedure involves both a puncture action and a needle aspiration action. It is correct to have two relationship groups for centesis procedures.

One group has a Method (attribute) of Puncture - action (qualifier value) and a Procedure site - Direct (attribute) of the structure being punctured.

A second group has a Method (attribute) of Aspiration - action (qualifier value) and a Procedure site - Indirect (attribute) of the space being aspirated.

For example,

  *     * [91602002 |Thoracentesis (procedure)|](http://snomed.info/id/91602002) has:
      * Role group 1:
        * Method = Puncture - action
        * Procedure site - Direct (attribute) = Pleural membrane structure (body structure)
        * Using device = Needle, device
      * Role group 2:
        * Method = Aspiration - action
        * Procedure site - Indirect (attribute) = Pleural cavity structure (body structure)
        * Using device = Needle, device

