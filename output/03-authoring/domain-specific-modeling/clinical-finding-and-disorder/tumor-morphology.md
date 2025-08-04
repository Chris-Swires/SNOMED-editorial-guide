# Tumor morphology

SNOMED CT accepts tumor concepts, as long as they are included in the International Classification of Diseases for Oncology (ICD-O). ICD-O has two coding systems for coding the site (topography) and the histology (morphology) of the neoplasm:

  * Topographical \- Anatomical site of origin or the organ system
  * Morphological \- Tumor cell type or histology and behavior, i.e. malignant versus benign

The  _topography_ code describes the site of origin of the neoplasms. The  _morphology_ code describes the cell type of the tumor and its biologic activity, in other words, the characteristics of the tumor itself. The morphology code, combined with the appropriate topography, expresses the complete morphological assessment as stated by the pathologist.

Although the behavior of a neoplastic morphological type is implicit knowledge in the pathology community, the behavior (benign, in situ, uncertain behavior, or malignant) must be included in the description in SNOMED CT to aid users, terminology authors, and mappers; and because over time, the behavior of a certain neoplastic cell type may change depending upon the latest scientific understanding, so clarity is important.

SCT intends to avoid adding concepts that conflate the localization of a specific tumor type in a topographic location as opposed to a neoplastic cell type that is derived from a specialized cell in an organ, e.g. adenocarcinoma vs. renal clear cell carcinoma. One is general; the other is specific to a cell type. 

The naming pattern utilized for gene-derived neoplastic morphology terms will align with the WHO Classification of Tumours (IARC 'Blue Books'). Gene acronyms are not required to be expanded. This policy is an exception to SNOMED CT's requirement for expansion of acronyms.

For example, 

1186933006 |SMARCA4-deficient undifferentiated tumor (morphologic abnormality)|

The gene SMARCA4 is not required to be named with the expanded form of _SWI/SNF Related, Matrix Associated, Actin Dependent Regulator Of Chromatin, Subfamily A, Member 4_.

Visit ICD-O at [http://www.iacr.com.fr](http://www.iacr.com.fr/index.php?option=com_content&view=category&layout=blog&id=100&Itemid=577)
