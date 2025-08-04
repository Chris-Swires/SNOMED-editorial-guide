# Substance

Definition| Examples  
---|---  
The |Substance| hierarchy contains concepts that can be used for recording and modeling: chemical constituents of medicinal and non-medicinal products; allergies, adverse reactions, poisoning; physicians and nursing orders and laboratory reports and results. Subhierarchies of |Substance| include but are not limited to: |Body substance (substance)| and |Chemical (substance)|| 

  * Albumin (substance)
  * Amoxicillin (substance)
  * Amoxicillin trihydrate (substance)
  * Chromatin (substance)
  * Endorphin (substance)
  * Methane (substance)
  * Paracetamol (substance)

  
  
## General Assumptions and Requirements

Decisions regarding requirements, applicable use cases, scope, terming, and modeling guidelines are made based on requests submitted by user community and in consultation with subject matter experts, associated Project Groups, and relevant credible references. 

Top level concepts in the hierarchy will primarily be grouper concepts for both the stated and inferred views.

Concepts representing dispositions in the |Substance| hierarchy shall be sufficiently defined using proximal primitive modeling methodology unless explicitly noted as an exception in the editorial guidelines.

## Scope of Content

This section applies to the |Substance| hierarchy in the International Release:

  
| In Scope  
---|---  
1| Substances that support the modeling of concepts in other SNOMED CT hierarchies including but are not limited to: Medicinal product, Clinical finding, Procedure, Observable Entity, and Specimen  
2|  Substances that support the modeling of the existing herbal products in SNOMED CT

  * 418165002 |Herbal medicine agent (substance)| is a role and will be replaced in future. Its descendants will be retained “as is” until use cases and/or detailed requirements are known. Requests for addition of new concepts or for modification of existing concepts will be evaluated on a case-by-case basis.

  
  
  
| Out of Scope  
---|---  
1| Concepts that refer to dose form (e.g., solution) or route of administration (e.g., topical)

  * Existing instances will be inactivated as nonconformant to editorial policy. Requests for new instances will be rejected.

  
2| Concepts that refer to role or a specific context (e.g., dietary, medicinal, non-pharmaceutical, substance of abuse)

  * Existing instances will be kept in the substance hierarchy; however, additional concepts of this type will not be created, and requests for new instances will be rejected.  

  
3| Concepts that refer to a release state (e.g., immediate release, extended release)

  * Existing instances will be inactivated as nonconformant to editorial policy. Requests for new instances will be rejected.

  
4| Concepts that refer to a brand or trade name

  * Existing instances will be inactivated as nonconformant to editorial policy. Requests for new instances will be rejected.

  
5| Concepts that state "total" due to the inability to differentiate the definition between the "base" substance and "total" substance (e.g., "cholesterol" versus "total cholesterol") as well as the inability to create an appropriate relationship between the "base" and "total" concepts

  * Existing instances will be inactivated as nonconformant to editorial policy. Requests for new instances will be rejected.  

  
6| Substances of the pattern |X molecule of Y organism (substance)| which reference an organism that is not of interest to human medicine are considered out of scope of SNOMED CT.

  * Example: |Ribonucleic acid of Porcine reproductive and respiratory syndrome virus (substance)|
  * Existing instances will be inactivated as nonconformant to editorial policy. Requests for new instances will be rejected.  

  
7| Substances used in homeopathic products

  * Existing instances will be retained for now; however, requests for new instances will be rejected.

  
8| Substances used in traditional medicine products

  * Existing instances will be retained for now; however, requests for new instances will be rejected.  

  
9| Concepts that represent a combination of two or more separate substances

  * Existing instances have been inactivated. Changes to SNOMED CT concept model to permit the use of concepts within the products hierarchy (e.g., vaccine products) as well as use of General Concept Inclusion functionality to model disorder and findings concepts means that these combined substances concepts will no longer be required. Requests for new instances will be rejected.

  
10| Concepts representing genetic engineering process variations such as Somatropin (epr), Somatropin (rbe), or Somatropin (rmc) are out of scope as SNOMED CT does not generally differentiate substances based on production process.

  * Existing instances will be inactivated. Requests for new instances will be rejected.

