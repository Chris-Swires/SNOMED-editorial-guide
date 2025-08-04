# Immune function disorders

## Hypersensitivity

[473010000 |Hypersensitivity condition (finding)|](http://snomed.info/id/473010000) is a primitive concept. It subsumes [473011001 |Allergic condition (finding)|](http://snomed.info/id/473011001) and [609405001 |Non-allergic hypersensitivity condition (finding)|](http://snomed.info/id/609405001). 

[473010000 |Hypersensitivity condition (finding)|](http://snomed.info/id/473010000) is a direct descendant of [404684003 |Clinical finding (finding)|](http://snomed.info/id/404684003). 

[473011001 |Allergic condition (finding)|](http://snomed.info/id/473011001) and [609405001 |Non-allergic hypersensitivity condition (finding)|](http://snomed.info/id/609405001) are both primitive concepts. Each has three main subhierarchies representing:

  *     * Diseases/disorders: abnormal structures
    * Processes: allergic and nonallergic hypersensitivity (pseudoallergic) reactions
    * Dispositions: propensities to develop allergic and nonallergic hypersensitivity (pseudoallergic) reactions; they do not have pathophysiologic manifestations prior to allergic and nonallergic hypersensitivity (pseudoallergic) processes, i.e. reactions

Diseases/disorders and reactions, but not dispositions, are defined by underlying pathological processes.

In order to fully describe the full range of hypersensitivity responses, there are qualifier values in the Pathological process (qualifier value) hierarchy. (See also  _Qualifier Value_ page).

  

### Allergic reaction

Allergic reaction (disorder) has a Causative agent (attribute) of Substance (substance) or its subtypes. This attribute-value pair is grouped with another attribute-value pair of Pathological process (attribute) and Allergic process (qualifier value). 

<figure><img src="images/174690511.png" alt="" title=""><figcaption><p>Figure 1: Stated view of 15920201000119103 |Allergic reaction caused by fish (disorder)|</p></figcaption></figure>

Allergic process (qualifier value) is a subtype of Abnormal immune process (qualifier value) which means allergic disorders, as well as autoimmune disorders, classify as types of disorders of immune function. Disorder of immune function (disorder) modeling with Abnormal immune process (qualifier value) allows allergic and autoimmune disorders to correctly classify as subtypes of Disorder of immune function (disorder). 

### Allergic and nonallergic hypersensitivity (pseudoallergic) disease

Allergic and nonallergic hypersensitivity (pseudoallergic) diseases represent manifestations of pathologic processes that result in abnormal structures. Modeling an allergic and nonallergic hypersensitivity (pseudoallergic) disease includes the following relationship group:

IS A: Disease (disorder)

Associated morphology (attribute): subtype of Morphologically abnormal structure (morphologic abnormality) representing the abnormal structure

Finding site (attribute): subtype of Anatomical or acquired body structure (body structure) representing the abnormal structure

Pathological process: Hypersensitivity process (qualifier value) or one of its descendants

Causative agent (attribute): Substance (substance) or one of its descendants, if known

For example, 

<figure><img src="images/174690512.png" alt="" title=""><figcaption><p>Figure 2: Stated view of 838367000 |Allergic rhinosinusitis caused by Aspergillus (disorder)|</p></figcaption></figure>

  

### Allergic and nonallergic hypersensitivity (pseudoallergic) disposition

Allergic and nonallergic hypersensitivity (pseudoallergic) dispositions are propensities to develop allergic and nonallergic hypersensitivity (pseudoallergic) reactions; they do not have pathophysiologic manifestations prior to reactions. They are considered clinical findings, not disorders. This further distinguishes them from allergic and nonallergic hypersensitivity (pseudoallergic) reactions.

Allergy to X (finding) will have the following modeling:

IS A: Propensity to adverse reaction (finding)

Role group of:

Has realization (attribute): Allergic process (qualifier value)

Causative agent (attribute): subtype of Substance (substance)

For example,

<figure><img src="images/174690510.png" alt="" title=""><figcaption><p>Figure 3: Allergic and nonallergic hypersensitivity (pseudoallergic) disposition example, stated view of Allergy to nut (finding)</p></figcaption></figure>

For example, 

<figure><img src="images/174690509.png" alt="" title=""><figcaption><p>Figure 4: Allergic disposition (finding) model in stated view</p></figcaption></figure>

  

### Nonallergic hypersensitivity (pseudoallergic) reaction

Nonallergic hypersensitivity (pseudoallergic) reactions are adverse reactions; they are defined by an underlying pathological process.

<figure><img src="images/174690503.png" alt="" title=""><figcaption><p>Figure 5: Nonallergic hypersensitivity (pseudoallergic) reaction model in stated view</p></figcaption></figure>

  

For example,

<figure><img src="images/174690504.png" alt="" title=""><figcaption><p>Figure 6: Example of nonallergic hypersensitivity (pseudoallergic) reaction model in stated view</p></figcaption></figure>

  

### Intolerance to substance

An  _intolerance_ is the propensity to develop an adverse reaction to a substance. The adverse reaction may be associated with various pathological processes, but specifically excludes hypersensitivity reactions.

It may be difficult to define the pathological process and to associate the substance with the propensity to develop a reaction. Consequently, [47429007 |Associated with (attribute)|](http://snomed.info/id/47429007) is used to model intolerance to substances.

<figure><img src="images/174690502.png" alt="" title=""><figcaption><p>Figure 7: Stated view of Intolerance to substance (finding) model</p></figcaption></figure>

  

For example, 

<figure><img src="images/174690501.png" alt="" title=""><figcaption><p>Figure 8: Stated view of 59037007 Intolerance to drug (finding)</p></figcaption></figure>

  

  

