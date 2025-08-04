# Co-occuring Genomic Disorders

### Germline chromosomal abnormality _co-occurring_ and _causing_ disorder:  [ 41040004 | Complete trisomy 21 syndrome (disorder)|](http://snomed.info/id/41040004 "41040004 | Complete trisomy 21 syndrome \(disorder\) |")

If the phenotype is always caused by a specific genotype, there is no need to include the cause in the FSN or clarify with a  _Due to_ relationship.

### Germline nucleotide sequence variant _co-occurring_ and _causing_ disorder: [ 190905008 | Cystic fibrosis (disorder)|](http://snomed.info/id/190905008 "190905008 | Cystic fibrosis \(disorder\) |")

Modeling for germline mutations causing conditions, such as cystic fibrosis, should have mutations, _Occurrence =_ congenital, and  _Due to_ (attribute) the mutation finding. 

For example,****

  *     * Cystic fibrosis  _due to_ G542X mutation

### Somatic NSV (NCBI structural variant) _co-occurring_ and _poly-etiologic_ : BRAF V600E positive melanoma

Somatic mutations leading to cancer, such as _malignant melanoma with BRAF V600E mutation_ , should have _dual supertypes_ , including the malignant disorder and the somatic mutation, and _Due to_ (attribute) with the associated somatic mutation finding.

For example,

  *     * Melanoma with BRAF V600E mutation

### Somatic IHC (immunohistochemical) finding _co-occurring_ but not etiologic: Estrogen-receptor status in breast cancer

Representing two associated findings in a single concept may be convenient for recording; however, the representation of the two notions should be recorded separately. 

For example,

  *     * Breast cancer occurring with positive estrogen-receptor assay should be recorded in the information model as two separate concepts

  

The term phrase, "co-occurrent and due to" is no longer to be used in the fully specified name. There are existing concepts that use the co-occurrent and due to pattern, but these will be re-termed. Genetic mutations that cause a disorder are by definition co-occurrent, so there is no need to represent this in the FSN, but they should be modeled as co-occurring, i.e. supertypes for both conditions should be present.
