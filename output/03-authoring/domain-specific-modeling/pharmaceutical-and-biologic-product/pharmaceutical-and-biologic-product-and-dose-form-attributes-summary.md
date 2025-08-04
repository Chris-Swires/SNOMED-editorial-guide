# Pharmaceutical and Biologic Product and Dose Form Attributes Summary

When authoring in this domain, these are the approved attributes and allowable ranges. They are the Human Readable Concept Model (HRCM).

HRCM 2025-06-01 

  

**Domain Information for[ 373873005 | Pharmaceutical / biologic product (product)|](http://snomed.info/id/373873005 "373873005 | Pharmaceutical / biologic product \(product\) |") **  
---  
** **[Domain Constraint](https://confluence.ihtsdotools.org/display/DOCGLOSS/Domain+Constraint "Glossary link: Domain Constraint") ** ** |  << [ 373873005 |Pharmaceutical / biologic product (product)|](http://snomed.info/id/373873005 "373873005 | Pharmaceutical / biologic product \(product\) |")  
**Parent Domain** | -  
**Proximal Primitive Constraint** |  << [ 373873005 |Pharmaceutical / biologic product (product)|](http://snomed.info/id/373873005 "373873005 | Pharmaceutical / biologic product \(product\) |")  
**Proximal Primitive Refinement** | -  
  
HRCM 2025-06-01 

  

**Author View of Attributes and Ranges for[ 373873005 | Pharmaceutical / biologic product (product)|](http://snomed.info/id/373873005 "373873005 | Pharmaceutical / biologic product \(product\) |") **  
---  
**[Attribute](https://confluence.ihtsdotools.org/display/DOCGLOSS/Concept+model+attribute "Glossary link: Concept model attribute") ** |  **[Grouped](https://confluence.ihtsdotools.org/display/DOCGLOSS/Grouped+attribute "Glossary link: Grouped attribute") ** |  **[Cardinality](https://confluence.ihtsdotools.org/display/DOCGLOSS/Attribute+cardinality+constraint "Glossary link: Attribute cardinality constraint") ** |  **[In Group Cardinality](https://confluence.ihtsdotools.org/display/DOCGLOSS/Attribute+in+group+cardinality+constraint "Glossary link: Attribute in group cardinality constraint") ** |  **[Range Constraint](https://confluence.ihtsdotools.org/display/DOCGLOSS/Range+constraint "Glossary link: Range constraint") **  
[ 1142140007 |Count of active ingredient (attribute)|](http://snomed.info/id/1142140007 "1142140007 | Count of active ingredient \(attribute\) |") |  0  |  0..1  |  0..0  |  int(>#0..)  
[ 1142141006 |Count of base and modification pair (attribute)|](http://snomed.info/id/1142141006 "1142141006 | Count of base and modification pair \(attribute\) |") |  0  |  0..1  |  0..0  |  int(>#0..)  
[ 1142139005 |Count of base of active ingredient (attribute)|](http://snomed.info/id/1142139005 "1142139005 | Count of base of active ingredient \(attribute\) |") |  0  |  0..1  |  0..0  |  int(>#0..)  
[ 127489000 |Has active ingredient (attribute)|](http://snomed.info/id/127489000 "127489000 | Has active ingredient \(attribute\) |") |  1  |  0..*  |  0..1  |  << [ 105590001 |Substance (substance)|](http://snomed.info/id/105590001 "105590001 | Substance \(substance\) |")  
[ 732943007 |Has basis of strength substance (attribute)|](http://snomed.info/id/732943007 "732943007 | Has basis of strength substance \(attribute\) |") |  1  |  0..*  |  0..1  |  < [ 105590001 |Substance (substance)|](http://snomed.info/id/105590001 "105590001 | Substance \(substance\) |")  
[ 733722007 |Has concentration strength denominator unit (attribute)|](http://snomed.info/id/733722007 "733722007 | Has concentration strength denominator unit \(attribute\) |") |  1  |  0..*  |  0..1  |  < [ 767524001 |Unit of measure (qualifier value)|](http://snomed.info/id/767524001 "767524001 | Unit of measure \(qualifier value\) |")  
[ 1142137007 |Has concentration strength denominator value (attribute)|](http://snomed.info/id/1142137007 "1142137007 | Has concentration strength denominator value \(attribute\) |") |  1  |  0..*  |  0..1  |  dec(>#0..)  
[ 733725009 |Has concentration strength numerator unit (attribute)|](http://snomed.info/id/733725009 "733725009 | Has concentration strength numerator unit \(attribute\) |") |  1  |  0..*  |  0..1  |  < [ 767524001 |Unit of measure (qualifier value)|](http://snomed.info/id/767524001 "767524001 | Unit of measure \(qualifier value\) |")  
[ 1142138002 |Has concentration strength numerator value (attribute)|](http://snomed.info/id/1142138002 "1142138002 | Has concentration strength numerator value \(attribute\) |") |  1  |  0..*  |  0..1  |  dec(>#0..)  
[ 762951001 |Has ingredient (attribute)|](http://snomed.info/id/762951001 "762951001 | Has ingredient \(attribute\) |") |  1  |  0..*  |  0..1  |  << [ 105590001 |Substance (substance)|](http://snomed.info/id/105590001 "105590001 | Substance \(substance\) |")  
[ 860779006 |Has ingredient characteristic (attribute)|](http://snomed.info/id/860779006 "860779006 | Has ingredient characteristic \(attribute\) |") |  1  |  0..*  |  0..*  |  << [ 362981000 |Qualifier value (qualifier value)|](http://snomed.info/id/362981000 "362981000 | Qualifier value \(qualifier value\) |")  
[ 1149366004 |Has ingredient qualitative strength (attribute)|](http://snomed.info/id/1149366004 "1149366004 | Has ingredient qualitative strength \(attribute\) |") |  1  |  0..*  |  0..1  |  < [ 1149484003 |Ingredient qualitative strength (qualifier value)|](http://snomed.info/id/1149484003 "1149484003 | Ingredient qualitative strength \(qualifier value\) |")  
[ 411116001 |Has manufactured dose form (attribute)|](http://snomed.info/id/411116001 "411116001 | Has manufactured dose form \(attribute\) |") |  0  |  0..1  |  0..0  |  << [ 736542009 |Pharmaceutical dose form (dose form)|](http://snomed.info/id/736542009 "736542009 | Pharmaceutical dose form \(dose form\) |")  
[ 762949000 |Has precise active ingredient (attribute)|](http://snomed.info/id/762949000 "762949000 | Has precise active ingredient \(attribute\) |") |  1  |  0..*  |  0..1  |  << [ 105590001 |Substance (substance)|](http://snomed.info/id/105590001 "105590001 | Substance \(substance\) |")  
[ 732947008 |Has presentation strength denominator unit (attribute)|](http://snomed.info/id/732947008 "732947008 | Has presentation strength denominator unit \(attribute\) |") |  1  |  0..*  |  0..1  |  < [ 767524001 |Unit of measure (qualifier value)|](http://snomed.info/id/767524001 "767524001 | Unit of measure \(qualifier value\) |")  
[ 1142136003 |Has presentation strength denominator value (attribute)|](http://snomed.info/id/1142136003 "1142136003 | Has presentation strength denominator value \(attribute\) |") |  1  |  0..*  |  0..1  |  dec(>#0..)  
[ 732945000 |Has presentation strength numerator unit (attribute)|](http://snomed.info/id/732945000 "732945000 | Has presentation strength numerator unit \(attribute\) |") |  1  |  0..*  |  0..1  |  < [ 767524001 |Unit of measure (qualifier value)|](http://snomed.info/id/767524001 "767524001 | Unit of measure \(qualifier value\) |")  
[ 1142135004 |Has presentation strength numerator value (attribute)|](http://snomed.info/id/1142135004 "1142135004 | Has presentation strength numerator value \(attribute\) |") |  1  |  0..*  |  0..1  |  dec(>#0..)  
[ 860781008 |Has product characteristic (attribute)|](http://snomed.info/id/860781008 "860781008 | Has product characteristic \(attribute\) |") |  0  |  0..*  |  0..0  |  << [ 362981000 |Qualifier value (qualifier value)|](http://snomed.info/id/362981000 "362981000 | Qualifier value \(qualifier value\) |")  
[ 774158006 |Has product name (attribute)|](http://snomed.info/id/774158006 "774158006 | Has product name \(attribute\) |") |  0  |  0..1  |  0..0  |  << [ 774167006 |Product name (product name)|](http://snomed.info/id/774167006 "774167006 | Product name \(product name\) |")  
[ 774159003 |Has supplier (attribute)|](http://snomed.info/id/774159003 "774159003 | Has supplier \(attribute\) |") |  0  |  0..1  |  0..0  |  << [ 774164004 |Supplier (supplier)|](http://snomed.info/id/774164004 "774164004 | Supplier \(supplier\) |")  
[ 1149367008 |Has target population (attribute)|](http://snomed.info/id/1149367008 "1149367008 | Has target population \(attribute\) |") |  0  |  0..1  |  0..0  |  < [ 27821000087106 |Product target population (qualifier value)|](http://snomed.info/id/27821000087106 "27821000087106 | Product target population \(qualifier value\) |")  
[ 763032000 |Has unit of presentation (attribute)|](http://snomed.info/id/763032000 "763032000 | Has unit of presentation \(attribute\) |") |  0  |  0..1  |  0..0  |  << [ 732935002 |Unit of presentation (unit of presentation)|](http://snomed.info/id/732935002 "732935002 | Unit of presentation \(unit of presentation\) |")  
[ 766939001 |Plays role (attribute)|](http://snomed.info/id/766939001 "766939001 | Plays role \(attribute\) |") |  0  |  0..*  |  0..0  |  << [ 766940004 |Role (role)|](http://snomed.info/id/766940004 "766940004 | Role \(role\) |")  
[ 1148793005 |Unit of presentation size quantity (attribute)|](http://snomed.info/id/1148793005 "1148793005 | Unit of presentation size quantity \(attribute\) |") |  0  |  0..1  |  0..0  |  dec(>#0..)  
[ 320091000221107 |Unit of presentation size unit (attribute)|](http://snomed.info/id/320091000221107 "320091000221107 | Unit of presentation size unit \(attribute\) |") |  0  |  0..1  |  0..0  |  << [ 767524001 |Unit of measure (qualifier value)|](http://snomed.info/id/767524001 "767524001 | Unit of measure \(qualifier value\) |")  
  
  

HRCM 2025-06-01 

  

**Domain Information for[ 781405001 | Medicinal product package (product)|](http://snomed.info/id/781405001 "781405001 | Medicinal product package \(product\) |") **  
---  
** **[Domain Constraint](https://confluence.ihtsdotools.org/display/DOCGLOSS/Domain+Constraint "Glossary link: Domain Constraint") ** ** |  << [ 781405001 |Medicinal product package (product)|](http://snomed.info/id/781405001 "781405001 | Medicinal product package \(product\) |")  
**Parent Domain** |  [ 373873005 |Pharmaceutical / biologic product (product)|](http://snomed.info/id/373873005 "373873005 | Pharmaceutical / biologic product \(product\) |")  
**Proximal Primitive Constraint** |  << [ 781405001 |Medicinal product package (product)|](http://snomed.info/id/781405001 "781405001 | Medicinal product package \(product\) |")  
**Proximal Primitive Refinement** | -  
  
HRCM 2025-06-01 

  

**Author View of Attributes and Ranges for[ 781405001 | Medicinal product package (product)|](http://snomed.info/id/781405001 "781405001 | Medicinal product package \(product\) |") **  
---  
**[Attribute](https://confluence.ihtsdotools.org/display/DOCGLOSS/Concept+model+attribute "Glossary link: Concept model attribute") ** |  **[Grouped](https://confluence.ihtsdotools.org/display/DOCGLOSS/Grouped+attribute "Glossary link: Grouped attribute") ** |  **[Cardinality](https://confluence.ihtsdotools.org/display/DOCGLOSS/Attribute+cardinality+constraint "Glossary link: Attribute cardinality constraint") ** |  **[In Group Cardinality](https://confluence.ihtsdotools.org/display/DOCGLOSS/Attribute+in+group+cardinality+constraint "Glossary link: Attribute in group cardinality constraint") ** |  **[Range Constraint](https://confluence.ihtsdotools.org/display/DOCGLOSS/Range+constraint "Glossary link: Range constraint") **  
[ 774160008 |Contains clinical drug (attribute)|](http://snomed.info/id/774160008 "774160008 | Contains clinical drug \(attribute\) |") |  1  |  1..*  |  1..1  |  << [ 763158003 |Medicinal product (product)|](http://snomed.info/id/763158003 "763158003 | Medicinal product \(product\) |")  
[ 1142143009 |Count of clinical drug type (attribute)|](http://snomed.info/id/1142143009 "1142143009 | Count of clinical drug type \(attribute\) |") |  0  |  1..1  |  0..0  |  int(>#0..)  
[ 1142142004 |Has pack size (attribute)|](http://snomed.info/id/1142142004 "1142142004 | Has pack size \(attribute\) |") |  1  |  0..*  |  0..1  |  dec(>#0..)  
[ 774163005 |Has pack size unit (attribute)|](http://snomed.info/id/774163005 "774163005 | Has pack size unit \(attribute\) |") |  1  |  0..*  |  0..1  |  << [ 767524001 |Unit of measure (qualifier value)|](http://snomed.info/id/767524001 "767524001 | Unit of measure \(qualifier value\) |")  
  
  

HRCM 2025-06-01 

  

**Domain Information for[ 736542009 | Pharmaceutical dose form (dose form)|](http://snomed.info/id/736542009 "736542009 | Pharmaceutical dose form \(dose form\) |") **  
---  
** **[Domain Constraint](https://confluence.ihtsdotools.org/display/DOCGLOSS/Domain+Constraint "Glossary link: Domain Constraint") ** ** |  << [ 736542009 |Pharmaceutical dose form (dose form)|](http://snomed.info/id/736542009 "736542009 | Pharmaceutical dose form \(dose form\) |")  
**Parent Domain** | -  
**Proximal Primitive Constraint** |  << [ 736542009 |Pharmaceutical dose form (dose form)|](http://snomed.info/id/736542009 "736542009 | Pharmaceutical dose form \(dose form\) |")  
**Proximal Primitive Refinement** | -  
  
HRCM 2025-06-01 

  

**Author View of Attributes and Ranges for[ 736542009 | Pharmaceutical dose form (dose form)|](http://snomed.info/id/736542009 "736542009 | Pharmaceutical dose form \(dose form\) |") **  
---  
**[Attribute](https://confluence.ihtsdotools.org/display/DOCGLOSS/Concept+model+attribute "Glossary link: Concept model attribute") ** |  **[Grouped](https://confluence.ihtsdotools.org/display/DOCGLOSS/Grouped+attribute "Glossary link: Grouped attribute") ** |  **[Cardinality](https://confluence.ihtsdotools.org/display/DOCGLOSS/Attribute+cardinality+constraint "Glossary link: Attribute cardinality constraint") ** |  **[In Group Cardinality](https://confluence.ihtsdotools.org/display/DOCGLOSS/Attribute+in+group+cardinality+constraint "Glossary link: Attribute in group cardinality constraint") ** |  **[Range Constraint](https://confluence.ihtsdotools.org/display/DOCGLOSS/Range+constraint "Glossary link: Range constraint") **  
[ 736476002 |Has basic dose form (attribute)|](http://snomed.info/id/736476002 "736476002 | Has basic dose form \(attribute\) |") |  0  |  0..1  |  0..0  |  < [ 736478001 |Basic dose form (basic dose form)|](http://snomed.info/id/736478001 "736478001 | Basic dose form \(basic dose form\) |")  
[ 736472000 |Has dose form administration method (attribute)|](http://snomed.info/id/736472000 "736472000 | Has dose form administration method \(attribute\) |") |  0  |  0..*  |  0..0  |  < [ 736665006 |Dose form administration method (administration method)|](http://snomed.info/id/736665006 "736665006 | Dose form administration method \(administration method\) |")  
[ 736474004 |Has dose form intended site (attribute)|](http://snomed.info/id/736474004 "736474004 | Has dose form intended site \(attribute\) |") |  0  |  0..*  |  0..0  |  < [ 736479009 |Dose form intended site (intended site)|](http://snomed.info/id/736479009 "736479009 | Dose form intended site \(intended site\) |")  
[ 736475003 |Has dose form release characteristic (attribute)|](http://snomed.info/id/736475003 "736475003 | Has dose form release characteristic \(attribute\) |") |  0  |  0..1  |  0..0  |  < [ 736480007 |Dose form release characteristic (release characteristic)|](http://snomed.info/id/736480007 "736480007 | Dose form release characteristic \(release characteristic\) |")  
[ 736473005 |Has dose form transformation (attribute)|](http://snomed.info/id/736473005 "736473005 | Has dose form transformation \(attribute\) |") |  0  |  0..*  |  0..0  |  < [ 736477006 |Dose form transformation (transformation)|](http://snomed.info/id/736477006 "736477006 | Dose form transformation \(transformation\) |")  
  
  

HRCM 2025-06-01 

  

**Domain Information for[ 736478001 | Basic dose form (basic dose form)|](http://snomed.info/id/736478001 "736478001 | Basic dose form \(basic dose form\) |") **  
---  
** **[Domain Constraint](https://confluence.ihtsdotools.org/display/DOCGLOSS/Domain+Constraint "Glossary link: Domain Constraint") ** ** |  << [ 736478001 |Basic dose form (basic dose form)|](http://snomed.info/id/736478001 "736478001 | Basic dose form \(basic dose form\) |")  
**Parent Domain** | -  
**Proximal Primitive Constraint** |  << [ 736478001 |Basic dose form (basic dose form)|](http://snomed.info/id/736478001 "736478001 | Basic dose form \(basic dose form\) |")  
**Proximal Primitive Refinement** | -  
  
HRCM 2025-06-01 

  

**Author View of Attributes and Ranges for[ 736478001 | Basic dose form (basic dose form)|](http://snomed.info/id/736478001 "736478001 | Basic dose form \(basic dose form\) |") **  
---  
**[Attribute](https://confluence.ihtsdotools.org/display/DOCGLOSS/Concept+model+attribute "Glossary link: Concept model attribute") ** |  **[Grouped](https://confluence.ihtsdotools.org/display/DOCGLOSS/Grouped+attribute "Glossary link: Grouped attribute") ** |  **[Cardinality](https://confluence.ihtsdotools.org/display/DOCGLOSS/Attribute+cardinality+constraint "Glossary link: Attribute cardinality constraint") ** |  **[In Group Cardinality](https://confluence.ihtsdotools.org/display/DOCGLOSS/Attribute+in+group+cardinality+constraint "Glossary link: Attribute in group cardinality constraint") ** |  **[Range Constraint](https://confluence.ihtsdotools.org/display/DOCGLOSS/Range+constraint "Glossary link: Range constraint") **  
[ 736518005 |Has state of matter (attribute)|](http://snomed.info/id/736518005 "736518005 | Has state of matter \(attribute\) |") |  0  |  1..1  |  0..0  |  < [ 736471007 |State of matter (state of matter)|](http://snomed.info/id/736471007 "736471007 | State of matter \(state of matter\) |")
