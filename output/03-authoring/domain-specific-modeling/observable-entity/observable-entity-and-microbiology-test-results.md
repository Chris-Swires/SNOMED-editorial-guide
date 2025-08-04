# Observable Entity and Microbiology Test Results

When microbiology laboratory results are encoded, it is important to be aware of the context provided by the observation, i.e. the test performed and, therefore, the implied meaning of the result value, i.e. the organism.

For example, the combination of _Logical Observation Identifiers Names and Codes (LOINC)_ for the lab test and _SNOMED CT_ for the organism, provides a unique and specific meaning: 

  *     * LOINC provides microbiology reporting codes with attributes including the _property_ through the use of _PRID_(presence or identity) and the _scale_ through the use of _NOM_ (nominal or categorical response that does not have a natural ordering) as the result value (typically the name of organism). 
    * Use of organism concepts in combination with such LOINC codes implies that a specific organism is seen, detected, identified, isolated, or present.

On its own, an organism concept can only indicate the definition of that organism. Its detection or presence can only be implied when it is paired with other information that may come from the electronic health application and/or from the LOINC observation.

## Organism X or organism Y

Use organism X or organism Y when a laboratory report indicates a single isolate is assumed, but the lab is unable (for any reason) to differentiate the result instance. 

For example, 

  *     * [ 703015006 | Human coxsackievirus or human echovirus (finding)|](http://snomed.info/id/703015006 "703015006 | Human coxsackievirus or human echovirus \(finding\) |")

## Organism X, not organism Y

Use organism X, not organism Y when a laboratory report indicates a class of organisms described by the exclusion of specific Linnaean or non-Linnaean classes. These concepts are found in the organism hierarchy (based on reasonable use cases to avoid a combinatorial explosion). They are a primitive super class, in between the species or species subtype.

For example,

  *     * [ 115407004 | Haemophilus influenzae, not b (organism)|](http://snomed.info/id/115407004 "115407004 | Haemophilus influenzae, not b \(organism\) |")

Exception

The common term _yeast_ can refer to two separate classes: 1) a morphologic form of a dimorphic fungus; or 2) an organism in kingdom Fungi that is truly a yeast. Therefore, while the super class _yeast_ is represented as an organism, “X, not organism Y” type concept is represented in the clinical finding hierarchy (as descendant of 769070007 |Yeast detected (finding)|) since one potential meaning of use is a diagnostic morphologic form of an organism rather than an organism itself.  

For example,

  *     * [ 769071006 | Yeast not Candida albicans detected (finding)|](http://snomed.info/id/769071006 "769071006 | Yeast not Candida albicans detected \(finding\) |")

## Genus X, not species Y and not species Z

Use Genus X, not species Y and not species Z when a laboratory report indicates a species of Genus X and confirms that it is not species Y, nor species Z. E.g. Bacillus species, not Bacillus anthracis and not Bacillus cereus (organism). 

Use this naming convention only with Genus, species, and subspecies levels of the hierarchy.

## _Untypable_ organisms

Laboratory reports and journal articles may include an organism that could not be serotyped, e.g. E.  _coli, untypable_. The requests for such concepts are declined due to ambiguity. Instead, use the closest taxonomic level in the hierarchy.

## Presumptive values

Laboratory findings may be reported with a status of preliminary, presumptive, provisional, etc. These typically cover reportable or notifiable lab values. The status of a report is different from the result; it is part of the electronic health application model/message. The requests for such concepts are declined as they are ambiguous and subject to limitless combinations. 

Existing concepts with presumptive values are undergoing review for inactivation.

## Mixed Organism

Some laboratories report findings indicating a mixed population of bacteria from several classes, e.g. _mixed anaerobic Gram negative bacilli_. The request for such a concept is added as a _clinical finding._ The actual organism is unknown, however there is a result, although more general.

## Reporting Negative and Positive Results

Laboratories perform and report on specific tests to identify the absence, as well as the presence, of a particular pathogenic organism. Laboratories typically report negative result values, such as _X not seen_ , _X not detected_ , X _not isolated_ , and _no X seen (or identified or isolated)_ and positive results as X _seen_ , X _detected_ , and X _isolated_. The following tables includes the acceptable modeling for negative and positive results.

  

Microbiology Tests: Reporting of Negative and Positive Values with Examples  
Lab test type (Observation)| Result value| Example lab test (e.g. SNOMED CT and/or LOINC term)| Example result value  
General culture (where implied scale = nominal)| _No X isolated_ (finding)_X_ (organism)| 61594008 |Microbial culture (procedure)|11475-1 |Microorganism identified in Unspecified specimen by Culture| **Valid value**[ 168204005 |Salmonella not isolated (finding)|](http://snomed.info/id/168204005)[27268008 |Genus Salmonella (organism)|](http://snomed.info/id/27268008)**Invalid value** 264887000 |Not isolated (qualifier value)|46651001 |Isolated (qualifier value)|  
Organism Specific culture|  _Not isolated_ (qualifier value)_Isolated_ (qualifier value)| 122206002 |Bordetella pertussis culture (procedure)|48741-3 |Bordetella pertussis; Nasopharynx; Culture| **Valid value**[ 264887000 |Not isolated (qualifier value)|](http://snomed.info/id/264887000)[46651001 |Isolated (qualifier value)|](http://snomed.info/id/46651001)**Invalid value** Bordetella pertussis not isolatedBordetella pertussis isolated  
General microscopic testing (where implied scale = Nominal)| _No X seen_ (finding)_X_ (organism)| 609009000 |Microscopic examination of bacterial smear of urine specimen (procedure)|25145-4 |Bacteria [Presence] in Urine sediment by Light microscopy| **Valid value**[ 27268008 |Genus Salmonella (organism)|](http://snomed.info/id/27268008)**Invalid value** 47492008 |Not seen (qualifier value)|  
Specific microscopic testing|  _Not seen_ (qualifier value)_Present_ (qualifier value)| 408215009 |Cryptosporidium microscopy (procedure)|| **Valid value**[ 47492008 |Not seen (qualifier value)|](http://snomed.info/id/47492008)[52101004 |Present (qualifier value)|](http://snomed.info/id/52101004)**Invalid value** No Cryptosporidium seenCryptosporidium seen  
Serologic, DNA or other organism specific test|  _Not detected_ (qualifier value)_Detected_ (qualifier value)Rationale: Almost all of these tests are organism-specific| 871555000 |Detection of ribonucleic acid of Severe acute respiratory syndrome coronavirus 2 (observable entity)|95406-5 |SARS-CoV-2 (COVID-19) RNA [Presence] in Nose by NAA with probe detection| **Valid value**[ 260415000 |Not detected (qualifier value)|](http://snomed.info/id/260415000)[260373001 |Detected (qualifier value)|](http://snomed.info/id/260373001)**Invalid value** No Severe acute respiratory syndrome coronavirus 2 detectedSevere acute respiratory syndrome coronavirus 2 detected
