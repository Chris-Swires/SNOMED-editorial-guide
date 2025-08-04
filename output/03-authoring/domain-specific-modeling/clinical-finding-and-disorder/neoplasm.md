# Neoplasm

## Tumor vs. neoplasm

The word  _tumor_ has two primary meanings: a mass, regardless of whether it is neoplastic or not; or a neoplastic mass. The term _neoplasm_ is preferred since it is less ambiguous than tumor. The word _tumor_ is acceptable as a synonym but not as a preferred term. 

For example, 

  *     * [92385005 |Benign neoplasm of small intestine (disorder)|](http://snomed.info/id/722671009)

## Primary malignant neoplasm

Previously in SNOMED CT, the hierarchy of 372087000 |Primary malignant neoplasm (disorder)| was defined by using an Associated morphology (attribute) relationship to <<86049000 |Malignant neoplasm, primary (morphologic abnormality)|. 86049000 |Malignant neoplasm, primary (morphologic abnormality)| and 367651003 |Malignant neoplasm of primary, secondary, or uncertain origin (morphologic abnormality)| have been inactivated in the November 2022 release and replaced with 1240414004 |Malignant neoplasm (morphologic abnormality)|. 

Primary malignant neoplasm disorders are now defined with a role group combining:

  * finding site
  * associated morphology
  * pathological process with a target value of 1234914003 |Malignant proliferation of primary neoplasm (qualifier value)|

For example,

<figure><img src="images/174690491.png" alt="" title=""><figcaption><p>Figure 1: Stated view of 93825008 |Primary malignant neoplasm of heart (disorder)|</p></figcaption></figure>

  

<figure><img src="images/174690490.png" alt="" title=""><figcaption><p>Figure 2: Inferred view of 93825008 |Primary malignant neoplasm of heart (disorder)|</p></figcaption></figure>

  

## Metastatic malignant neoplasm

Precoordination of the metastatic malignant neoplasm with both the primary and metastatic sites is not allowed. Having both metastatic malignant neoplasm from x body structure to y body structure in a single concept results in a combinatorial explosion of all possible malignant neoplastic morphological cell types, with all possible body sites of the primary malignancy, and with all possible sites of the metastases. Users are instead directed to record two separate concepts. 

SNOMED CT joins ICD-O, ICD-10, and ICD-11 where _metastatic malignant neoplasm of site x_ is uniformly interpreted to mean metastasis has occurred to site x. To make this explicit in SNOMED CT, the following terming has been adopted:

FSN: Metastatic malignant neoplasm to x body structure (disorder)   
PT: Metastatic malignant neoplasm to x body structure   
SYN: Secondary malignant neoplasm of x body structure   
SYN: Metastatic malignant neoplasm of x body structure 

For example,

FSN: Metastatic malignant neoplasm to foot (disorder)   
PT: Metastatic malignant neoplasm to foot   
SYN: Secondary malignant neoplasm of foot   
SYN: Metastatic malignant neoplasm of foot 

 _Secondary_ is no longer the preferred word within the cancer & pathology community of practice; use _metastatic_.

Metastatic disorders are defined by a role group containing the finding site and specific metastatic morphologic abnormality.

For example,

<figure><img src="images/174690492.png" alt="" title=""><figcaption><p>Figure 3: Stated view of 105041000119109 |Metastatic squamous cell carcinoma to lung (disorder)|</p></figcaption></figure>

  

<figure><img src="images/174690493.png" alt="" title=""><figcaption><p>Figure 4: Inferred view of 105041000119109 |Metastatic squamous cell carcinoma to lung (disorder)|</p></figcaption></figure>

See also[ Neoplasms Observable ](https://confluence.ihtsdotools.org/display/WIPEG/Neoplasm+Observables)page

## Use of the term _cancer_

Disorder concepts defined with 1240414004 |Malignant neoplasm (morphologic abnormality)| may have _cancer_ added as an acceptable synonym. The term _cancer_ should not be used in the FSN or preferred term. Neither should it be used in descriptions for concepts that are more specific subtypes of the top level malignant neoplasm grouper (i.e., where the morphology is a specialized cell type).

The term _cancer_ may also be used in the '_metastatic cancer to x body structure_ ' synonym description where the morphological type of metastatic neoplasm is unknown, i.e., it is defined with 14799000 |Neoplasm, metastatic (morphologic abnormality)|.

## Neoplasia

When modeling neoplasia, distinguish structure from process. Do not use  _neoplasia_ in the FSN to identify the structure (even though it implies it). Use [126537000 |Neoplasm of bone (disorder)|](http://snomed.info/id/126537000), not  _neoplasia of bone_.   
  
 _Neoplastic disease_ refers to the process of  _neoplasia_ , leading to the formation of a  _neoplasm_.

## Neoplasm versus hamartoma

A neoplasm is defined as a growth of tissue no longer under normal control. A hamartoma is defined as a benign, self-limiting growth of disorganized mature cells normally found in the region, representing faulty development. SNOMED CT has disorder (and morphologic abnormality) concepts and subtypes representing neoplasia, hamartomas, and tumors.

The SNOMED CT concept [399981008 |Neoplasm and/or hamartoma (disorder)|](http://snomed.info/id/399981008) has six subtypes: 

  *     * angiomatosis  

    * hamartoma
    * hemangioma
    * lymphangioma
    * melanocytic nevus
    * neoplastic disease

The SNOMED CT concept [400177003 |Neoplasm and/or hamartoma (morphologic abnormality)|](http://snomed.info/id/400177003) also has six subtypes:

  *     * angiomatosis
    * blood vessel tumor
    * hamartoma
    * lymphatic vessel tumor
    * melanocytic nevus
    * neoplasm

## Nevus

The word  _nevus_ has many different meanings. The differences are generally based on answers to the following questions:

  *     * Is it necessarily on the skin? Or can it be located in mucosal sites or other sites?
    * Is it necessarily visible? Or can it be in internal locations such as gastric mucosa, etc?
    * Is it necessarily present at birth? Or can it occur later in life?
    * Is it necessarily dark and made of melanocytes? Or can it be non-pigmented, or made of other types of cells?
    * Is it necessarily made of tissue that is normally present at the site? Or can it be ectopic?
    * Does it exclude benign neoplasms?

Some common meanings of nevus based on some combinations of answers to the questions are as follows:

  *     * A birthmark, that is, any visible spot on the skin or oral mucosa present since birth, regardless of tissue of origin, excluding benign neoplasms.
    * Any benign cluster of melanocytes, regardless of location, and regardless of pigmentation, whether present since birth or appearing later.
    * Any cutaneous hamartoma. This excludes non-cutaneous sites, and excludes neoplasms and ectopic tissue, such as choristomas.

As a result of this wide variation in meaning, any SNOMED CT FSN containing the word  _nevus_ may be ambiguous. For example, the term  _vascular nevus_ may mean:

  *     * Congenital blood vessel tumor in the skin
    * Congenital blood vessel hamartoma or neoplasm that is visible somewhere (not only the skin, but also the mucosa, whether visible externally or not)
    * Congenital blood or lymphatic vessel tumor in the skin
    * Congenital blood or lymphatic vessel hamartoma or neoplasm that is visible somewhere
    * Any of the above but not necessarily congenital

A better FSN for vascular nevus (morphologic abnormality) would be vascular hamartoma (morphologic abnormality). Likewise, a better FSN for congenital vascular nevus (disorder) would be congenital vascular hamartoma (disorder). 

In those cases where common clinical usage of a term containing nevus is unambiguous, there is no need to inactivate the description or the concept.

## Overlapping neoplasm

Overlapping neoplasm concepts refer to a neoplasm that overlaps two or more adjacent **sites.** For clarity, the phrase  _overlapping sites_ should be included in the descriptions for the FSN and PT for new overlapping neoplasm content. 

Do not use _overlapping_ _lesion_ wording.

For example,  
[ 188247000 | Malignant neoplasm of overlapping sites of bladder (disorder)|](http://snomed.info/id/188247000 "188247000 | Malignant neoplasm of overlapping sites of bladder \(disorder\) |")

For modeling an overlapping neoplasm concept, if the concept refers to contiguous sites involving more than one anatomical site, then a separate role group is used for each finding site.

However, assigning a role group for each finding site does not sufficiently define a concept but merely indicates the presence in both sites of a neoplasm. Where a relevant primitive existing overlapping neoplasm concept is available, this can be used as a stated primitive parent to sufficiently define the concept.

For example,  
Sufficiently defined concept 721624000 |Primary adenocarcinoma of overlapping sites of esophagus (disorder)| has a stated primitive parent of 187824009 |Malignant neoplasm of overlapping sites of digestive system (disorder)|.

The terms _colorectal_ and _colorectum_ , commonly used by pathologists, are included in descriptions for concepts referring to neoplasms modeled with 1285733009 |Structure of cecum and/or colon and/or rectum (body structure)|. 1285733009 |Structure of cecum and/or colon and/or rectum (body structure)| is needed because neoplasms are the same from the cecum to rectum and are considered as a group in cancer synoptic reporting protocols. Note, there is no consensus concerning the definition of _colon_ in the literature and between different domains.

## Congenital neoplasm

When modeling a congenital neoplasm disorder, the attribute-value relationship of _Pathological process (attribute) = Pathological development process (qualifier value)_ is not used.
