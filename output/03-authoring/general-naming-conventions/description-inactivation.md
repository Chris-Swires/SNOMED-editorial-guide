# Description Inactivation

**Description inactivation values**

Depending upon the combination of the type of component and the reason for inactivation, a specific inactivation reason must be selected.

Inactivation value| Definition| Example  
---|---|---  
Not semantically equivalent component (foundation metadata concept)| A description does not represent the same meaning as the concept's Fully Specified Name (FSN)| Removal of device (procedure) has a synonym, Replacement of prosthetic device (procedure), which should be inactivated because the synonym has a more specific meaning than the FSN.  
Outdated component (foundation metadata concept)| A component is no longer current, useful, appropriate or acceptable| The synonym _Compression facies_ was inactivated from the concept's more modern description of _Facial asymmetry_.  
Grammatical description error (foundation metadata concept)| A component contains a technical error. The error in the description is grammatical or a spelling mistake, which when corrected does not change the meaning of the concept. Where the meaning _is_ changed, the _concept_ should be inactivated using _Erroneous component_.| Case significance error:  _Alpha_ should have a lower case _a_ Spelling error:  _Asthma_ misspelled as  _Assthma_  
Nonconformance to editorial policy component (foundation metadata concept)| A component fails to comply with the current editorial guidance| The concept Urine: turbid (finding) was inactivated and replaced by [ 167238004 | Turbid urine (finding)|](http://snomed.info/id/167238004 "167238004 | Turbid urine \(finding\) |")  
  
## Order of selection of inactivation values

When there is more than one reason to inactivate a description, the order of preference for the inactivation value is as follows:

  

  1. [ 723278000 | Not semantically equivalent component (foundation metadata concept)|](http://snomed.info/id/723278000 "723278000 | Not semantically equivalent component \(foundation metadata concept\) |")
  2. [ 900000000000483008 | Outdated component (foundation metadata concept)|](http://snomed.info/id/900000000000483008 "900000000000483008 | Outdated component \(foundation metadata concept\) |")
  3. [ 1217318005 | Grammatical description error (foundation metadata concept)|](http://snomed.info/id/1217318005 "1217318005 | Grammatical description error \(foundation metadata concept\) |")
  4. [ 723277005 | Nonconformance to editorial policy component (foundation metadata concept)|](http://snomed.info/id/723277005 "723277005 | Nonconformance to editorial policy component \(foundation metadata concept\) |")

## Corresponding association type

Only the description inactivation value of _Not semantically equivalent_ _component_ requires an association type; the association type is _Refers to_ and necessitates the reference to at least one active SNOMED CT concept. It is possible that the description is ambiguous and may relate to more than one concept.

The other three description inactivation values (outdated, grammatical error, nonconformance) do not require an associated concept. 

  

See also, _Changes in FSN_ , on the [Fully Specified Name](?section=fully-specified-name#fully-specified-name) page. 

  

