# Ingredient Count Attributes

The following sections describe the attribute concepts that are used to represent the ingredient counts for all concepts represented using the "closed world view" (the "only" and "precisely" concepts) in the medicinal product hierarchy.

## **Ingredient Count**

Ingredient count is the mechanism that the SNOMED CT concept model is using as a proxy to implement a "closed world" view of medicinal products such that a medicinal product concept can be represented as containing _only_ substance X as its active ingredient, and that all more granular child medicinal product concepts also containing  _only_ substance X subsume under the correct parent concept(s).

Three count attributes are available for use, but only one is mandatory for all "only" concepts; i.e. MP (only), MP (precisely), MPF (only) and CD). The additional ingredient counts have to be applied iteratively, if and when they are required based on the presence of multi-ingredient concepts which contain active ingredient substances that have modifications of the same base. For new concepts, the count attribute is first authored for Clinical Drug concepts, which have their precise ingredient substance described; the more abstract classes can then be populated upwards using the base (or parent) active ingredient substance if different.

<figure><img src="images/303923277.png" alt="" title=""></figure>

**_Figure 50: Ingredient count attributes_**

### **Count of base of active ingredient - mandatory for the closed world view**

This count is the number of base (or root or main parent) active ingredient substance(s) (as described in the SNOMED CT Substance hierarchy) present in the medicinal product. Base ingredient substances can be identified from their modifications through the relation "is modification of", traversed iteratively if necessary, until reaching a substance that is not a modification of any other substance.

For all single ingredient products and for the majority of multi-ingredient products, this is the only count information that needs to be described in order to support correct subsumption.

Note: for simplicity, all the intermediate medicinal product form concepts have been omitted from the diagrams and examples.

**Example:**

Precise active ingredient substance(s)| Base active ingredient substance(s)| Count of base of active ingredient  
---|---|---  
amlodipine besilate| amlodipine| 1  
atorvastatin calcium | atorvastatin| 1  
amlodipine besylate and atorvastatin calcium | amlodipine and atorvastatin| 2  
  
**The tooling uses these values to produce the correct subsumption hierarchy, as shown diagrammatically below:**

** |  <figure><img src="images/303923275.png" alt="" title=""></figure>  
  
****_Figure 51: Ingredient count attributes simple multi-ingredient example_**

The base count facilitates the correct subsumption relationship between the "Product containing only amlodipine and atorvastatin" and the clinical drug that contains only amlodipine and atorvastatin. It avoids the "Product containing only amlodipine and atorvastatin" being incorrectly subsumed by the concept "Product containing only amlodipine" or by the concept "Product containing only atorvastatin" since a concept of a base count of 1 will not subsume a product with a base count of 2. Similarly the clinical drug concepts containing only amlodipine or only atorvastatin, both of which have a base count of 1, are prevented from being subsumed by the "Product containing only amlodipine and atorvastatin" which has a base count of 2.

### **Count of base and modification pair (closed world view) - optional - to be used in certain circumstances**

This count is used for multi-ingredient products where the two (or more) active ingredient substances share the same base active ingredient substance. This will only occur when at least one of the active ingredient substances is a modification of a base active ingredient substance. The count used in addition to the base active ingredient substance count. The count is of how many pairs of base + modification substances are present in the medicinal product; this draws from the Substance hierarchy where concepts are managed using the pattern of base substance with related concepts being modifications (salts, esters, chelates) of the base substance; each modification is therefore a "pair".

**Example:**

Precise active ingredient substance(s)| Base active ingredient substance(s)| Count of base of active ingredient| Base + modification pair| Count of Base + modification pair  
---|---|---|---|---  
betamethasone sodium phosphate| betamethasone| 1| betamethasone + sodium phosphate| 1  
betamethasone acetate| betamethasone| 1| betamethasone + acetate| 1  
betamethasone sodium phosphate and betamethasone acetate| betamethasone| 1| betamethasone + sodium phosphatebetamethasone + acetate| 2  
  
Betamethasone sodium phosphate and betamethasone acetate are both modifications of the betamethasone: a phosphorylation and an acetate esterification; however neither are modifications of each other.

The tooling uses these values to produce the correct subsumption hierarchy, as shown diagrammatically below:

<figure><img src="images/303923273.png" alt="" title=""></figure>

**_Figure 52: Ingredient count attributes complex multi-ingredient example with multiple modification of a single base active ingredient requiring two ingredient count attributes_**

Base count alone would not prevent the incorrect subsumption of the "Clinical drug containing precisely betamethasone sodium phosophate and betamethasone acetate" to the parent medicinal product concepts containing only betamethasone sodium phosophate (or only betamethasone acetate - not shown on the above diagram). By adding in the Count of base + modification pair, that incorrect subsumption is avoided and the "Clinical drug containing precisely betamethasone sodium phosophate and betamethasone acetate" is correctly subsumed by just the one parent medicinal product - that "containing only betamethasone sodium phosophate and betamethasone acetate". The (grand)parent medicinal product concept "Product containing only betamethasone" does not (cannot) have a Count of base + modification pair, since it does not have any active ingredient modification described; therefore it can correctly parent medicinal product concepts containing only betamethasone sodium phosophate, containing only betamethasone acetate (not shown) and containing "only betamethasone sodium phosophate and betamethasone acetate", because they all share a base count of 1, relating to betamethasone.

### **Count of active ingredient****(closed world view) - optional - to be used in certain circumstances**

This count is used for the fairly rare cases of multi-ingredient products where the two (or more) precise active ingredient substance(s) share the same base active ingredient substance and one of those precise active ingredient substances is a modification of another; it is used in addition to the base count and the base + modification pair count. The count is of how many precise active ingredient substance(s) are present in the product (and therefore can be a count of the number of precise active ingredient attributes are present on a concept).

**Example:**

Precise active ingredient substance(s)| Base active ingredient substance(s)| Count of base of active ingredient| Base + modification pair| Count of Base + modification pair| Count of (precise) ingredient substance(s)  
---|---|---|---|---|---  
insulin aspart| Insulin| 1| insulin + aspart| 1| 1  
insulin aspart protamine| Insulin | 1| insulin + aspart protamine| 1| 1  
insulin aspart and Insulin aspart protamine| Insulin | 1| insulin + aspartinsulin + aspart protamine| 1| 2  
  
Insulin aspart and insulin aspart protamine are both modifications of insulin; but since Insulin aspart protamine is itself a modification of Insulin aspart, the Base + modification pair count is only equal to 1 (insulin plus 1 modification - the aspart). To get correct subsumption between the Clinical Drug and Medicinal Product concepts in these types of situations, the third count, that of precise active ingredient substance, must be used as well.

The tooling uses these values to produce the correct subsumption hierarchy, as shown diagrammatically below:

<figure><img src="images/303923271.png" alt="" title=""></figure>

**_Figure 53: Ingredient count attributes complex multi-ingredient example with multiple modification of a single base active ingredient_**** _requiring three ingredient count attributes_**

Neither base count alone nor base count and base + modification pair count would prevent the incorrect subsumption of the "Clinical drug containing precisely insulin aspart and insulin aspart protamine" because both give a count of 1. The differentiation comes from the counting the precise active ingredient substances. This then gives the (optional in the international release) intermediate parent concepts of "Medicinal product containing precisely" either "insulin aspart", "insulin aspart protamine" or "insulin aspart and insulin aspart protamine" with their correct clinical drug concepts as children. The MP (precisely) concepts are then correctly subsumed to the (grandparent) MP (only) concept of insulin aspart only, on the basis of the base count of 1.
