# Knowledge Representation

Knowledge representation __ in SNOMED CT involves modeling what we know about concepts to be necessarily true. Concepts are logically defined by their relationships to each other. Some knowledge provides valuable clues to the diagnostician, while not necessarily always present, i.e. it is uncertain or probabilistic knowledge. Attempts to capture probabilistic or uncertain knowledge are out of the scope of SNOMED CT.

For example, 

  *     * [ 22298006 | Myocardial infarction (disorder)|](http://snomed.info/id/22298006 "22298006 | Myocardial infarction \(disorder\) |")

Its terminological knowledge includes the following:

  *     *       * IS A: [ 64572001 | Disease (disorder)|](http://snomed.info/id/64572001 "64572001 | Disease \(disorder\) |")
      * Finding site: [ 74281007 | Myocardium structure (body structure)|](http://snomed.info/id/74281007 "74281007 | Myocardium structure \(body structure\) |")
      * Associated morphology: [ 55641003 | Infarct (morphologic abnormality)|](http://snomed.info/id/55641003 "55641003 | Infarct \(morphologic abnormality\) |")

These additional pieces of knowledge are variably present and therefore represent uncertain or probabilistic knowledge about myocardial infarction:

  *     *       * Crushing substernal chest pain
      * Diaphoresis
      * Arrhythmia
      * ST-segment elevation on EKG
      * Elevated cardiac enzymes

For example,

  *     * [ 74400008 | Appendicitis (disorder)|](http://snomed.info/id/74400008 "74400008 | Appendicitis \(disorder\) |")

Its terminological knowledge includes the following:

  *     *       * IS A: [ 64572001 | Disease (disorder)|](http://snomed.info/id/64572001 "64572001 | Disease \(disorder\) |")

      * Finding site: [ 66754008 | Appendix structure (body structure)|](http://snomed.info/id/66754008 "66754008 | Appendix structure \(body structure\) |")

      * Associated morphology: [ 23583003 | Inflammation (morphologic abnormality)|](http://snomed.info/id/23583003 "23583003 | Inflammation \(morphologic abnormality\) |")

These additional pieces of knowledge are variably present and therefore represent uncertain or probabilistic knowledge about appendicitis:

      * Central abdominal pain that migrates to the right lower quadrant
      * Rebound tenderness over McBurneys point
      * Anorexia
      * Nausea
      * Elevated white blood count

