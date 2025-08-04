# Medicinal Product and Medicinal Product Forms

When a clinical drug is created, the following supertypes must either already exist or must be created:

  * [Medicinal Product containing only](?section=medicinal-product-containing-only#medicinal-product-containing-only)
  * [Medicinal Product containing](?section=medicinal-product-containing#medicinal-product-containing)
  * [Medicinal Product Form (MPF)](?section=303923265#303923265)

For example,

1172863005 Paracetamol 1 g oral tablet has the following supertypes:

<figure><img src="images/240453196.png" alt="" title=""><figcaption><p>These concepts in the International Release, their descriptions, and their [ | Has active ingredient (attribute)|](http://snomed.org/fictid# "\(eg:\)  | Has active ingredient \(attribute\) |") value, represent the <em><strong>base</strong></em> ingredient, not a modification.</p></figcaption></figure>

For example, 

1204319004 |Product containing precisely retinol (as retinol palmitate) 50000 unit/1 milliliter conventional release solution for injection (clinical drug)| has medicinal product and medicinal product form supertypes with _retinol_ , not _retinol palmitate_. Retinol palmitate is a modification of Retinol and thus should not be used in the creation of the medicinal product and medicinal product form supertypes. 

<figure><img src="images/240453195.png" alt="" title=""><figcaption><p>Exceptions to use a modified substance are explicitly identified below:</p></figcaption></figure>

**Exceptions**| **Elucidation**| **Examples**  
---|---|---  
Benzylpenicillin| When the active ingredient has an _Is modification of_(attribute) value of 323389000 |Benzylpenicillin (substance)|. | 1234765004 |Product containing only benzathine benzylpenicillin in parenteral dose form (medicinal product form)|323404007 |Product containing benzathine benzylpenicillin (medicinal product)|_Benzylpenicillin is the base, but use the modified substance in the FSN for the MP/MPF._  
Chemical element with multiple modification| Instances where the substance has two or more _Is Modification of_(attribute)s| 422232005 |Calcium lactate gluconate (substance)|715220007 |Tenofovir alafenamide (substance)|  
Chloral hydrate| 273948005 |Chloral hydrate (substance)| is a modification of Chloral. However, chloral is unstable on its own and always exists in the hydrated form.| 778711000 |Product containing only chloral hydrate in oral dose form (medicinal product form)|386735001 |Product containing chloral hydrate in oral dose form (medicinal product form)|775158004 |Product containing only chloral hydrate (medicinal product)|  
Liposome or lipid complex substances| < 414612001 |Liposomal agent (substance)These subtypes have some sort of modification, but they can be used to create:

  * Product containing only x (medicinal product)
  * Product containing only x in y dose form (medicinal product form)

Do not use to create:

  * Product containing x (medicinal product)
  * Product containing x in y dose form (medicinal product form)

| 426490000 |Vincristine liposome (substance)|425953004 |Amphotericin B lipid complex (substance)|768664009 |Amphotericin B phospholipid complex (substance)|427544000 |Amphotericin B cholesteryl sulfate complex (substance)|  
Pegylated substance| There is no technical way to identify these concepts, though they will often begin with peg-.| 385544005 |Pegfilgrastim (substance)|770965008 |Pegvaliase (substance)|  
Radiopharmaceutical| < 89457008 Radioactive isotope (substance)|| 783865003 |Product containing only cyanocobalamin (58-Co) (medicinal product)|783867006 |Product containing only cyanocobalamin (58-Co) in oral dose form (medicinal product form)|783856005 |Product containing sodium iodide (131-I) in parenteral dose form (medicinal product form)|783854008 |Product containing sodium iodide (131-I) (medicinal product)|  
Silver sulfadiazine| 387112002 |Silver sulfadiazine (substance)| is a modification of 74523009 |Sulfadiazine (substance)|. | 864009007 |Product containing only silver sulfadiazine in cutaneous dose form (medicinal product form)|771756000 |Product containing silver sulfadiazine in cutaneous dose form (medicinal product form)|  
Sodium valproate| 387481005 |Sodium valproate (substance)| is a modification of 387080000 |Valproic acid (substance)|. | 766519009 |Product containing precisely sodium valproate 40 milligram/1 milliliter conventional release oral solution (clinical drug)|1204386001 |Product containing precisely sodium valproate 133 milligram and valproic acid 58 milligram/1 each prolonged-release oral tablet (clinical drug)|
