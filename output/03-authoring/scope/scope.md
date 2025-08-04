# Scope

International release criteria include affirmative answers to the following:

  * Does it need to be understandable in electronic health applications in more than one national healthcare system?
  * Can it be used in electronic health applications beyond a patient's national healthcare system, i.e. if a patient were to travel or relocate to a different country?
  * Is it useful in more than one national healthcare system?

The guiding principle underlying the creation of a clinical reference terminology is the facilitation of semantic interoperability. To this end, content in SNOMED CT must represent unambiguous, clinically relevant information which can be exchanged and understood internationally. A reproducible and consistent approach to incorporating terminology into electronic health applications is, therefore, mandatory.

The International Release includes content necessary for international conformance and interoperability (the International Release was formerly and is colloquially known as _the core_). The range of concepts, attributes, qualifiers, and other components of SNOMED CT is comprehensive compared to classification systems. This supports the terminological needs of those using SNOMED CT within electronic health applications.

## Requests for Inclusion

Addition of new content to SNOMED CT requires careful consideration. Changes and additions to the International Release of SNOMED CT follow a formal process executed by SNOMED CT authors. For content to be included in the International Release, the following criteria must be met.

### References

Content must be submitted with:

  * Submissions for a change to the international release of SNOMED CT must be supported by at least one reference that is of international relevance. Please remember that requests for change need to be of international application and not confined to one member country. We may require more than one reference to assess the validity and international applicability for some areas of content.
  * Definitions and literature references. All reference material must be publicly available. Wiki references are unacceptable.
  * Evidence of international applicability. Without international applicability, a concept should, instead, be added to the submitter's extension.

For details on SNOMED International Content Request Service (CRS) Customer Guidance, see our [website](https://www.snomed.org/change-or-add) or the [Confluence site](https://confluence.ihtsdotools.org/display/SCTCR/CRS+User+Guide). 

### Broad use

It must be applicable within and across healthcare disciplines internationally.

### Provision of use case

Changes and additions must follow SNOMED CT Content Request Service (CRS) Guidelines. It is very important to incorporate a clear justification for any change or addition request for the International Edition of SNOMED CT.

### Principle of URU

**Understandable** : The terminology must be able to communicate to recipients the intended meaning of the healthcare provider in terms that are unambiguous and comprehensible without reference to inaccessible, hidden, or private meanings. 

**Reproducible** :**** Concepts should be names that are human-understandable representations of the codes. It is not enough for an individual to say they think they understand a meaning. It must be shown that multiple people interpret and use the meaning in the same way. Can it be used in electronic health applications beyond a patient's national healthcare system, i.e. if a patient were to travel or relocate to a different country?

**Useful** : The meaning must have demonstrable use or applicability to health or healthcare. Content submitted for inclusion in the International Release shall be required to pass a test for usefulness. The usefulness test can be passed in more than one way. At least one of the following must be satisfied:

  1. Content that is used by more than one major user (a  _National Release Center_ such as NHS, a vendor/supplier of clinical information systems with international scope, or a large intra-national system user such as VA or Kaiser) will be considered to have passed the "usefulness" criterion.
  2. Data demonstrating significant frequency of use, or frequency of need, by a single user (single national center, or single vendor, or single health care system) can also be used as evidence in support of usefulness.

Additional means of passing the usefulness test may be added in the future. Submissions that pass the usefulness criterion must also pass understandability and reproducibility tests, and conform to style rules.

## Naming of classes of things rather than instances

SNOMED CT concepts should name _classes of things_. Concepts that refer to a particular instance are unacceptable.

For example, 

  *     * _Doctor Jones pre-operative order set_ should not be included because it is an individual instance, not a class.

## Negation

Negation in SNOMED CT is generally out of scope for the terminology. However, SNOMED CT currently has content which incorporates negation in several hierarchies. This is due to the amalgamation of legacy content from Read Codes and SNOMED RT in 2002 when the two terminologies formed SNOMED CT. The description logic approach to negation comes with a high machine processing cost, and so the decision was to deal with all negation via the _Situation with explicit context_ hierarchy. The consequence of this approach is that the representation of negation within SNOMED CT that arises from restrictions imposed by the existing description logics results in the hierarchy being inverted, e.g., _Coronary heart disease not present_ is not properly a subtype of _Heart disease not present_. 

For these reasons, software vendors are encouraged to store negation in the electronic health record rather than looking for a concept which encapsulates its meaning. Storing negated findings in a separate field in the EHR, for example, would simplify querying data. 

## Representation of patterns and trends in SNOMED CT

Including patterns and trends in SNOMED CT, such as ‘weight increasing’ or ‘weight decreasing,’ is not advisable for several reasons:

  1. **Purpose of SNOMED CT** : SNOMED CT is designed to provide a comprehensive set of clinical terms for supporting clinical care and consistent data exchange. Patterns and trends pertain more to data interpretation and analysis, which is outside the scope of clinical terminology. However, summary statements relating to patterns can be clinically relevant and should be represented in SNOMED, e.g. 422868009 |Unexplained weight loss (finding)|
  2. **Appropriate Tools** : Patterns and trends are better managed by the information model or statistical and analytical tools, not terminology. Including them in SNOMED CT could confuse the distinction between data capture and data analytics. Trend data can be captured using additional metadata such as timestamps. Clinical decision support systems can also interpret and act on trends.

(See also Appendix: _Principles for Accepting Content in the International Release_)
