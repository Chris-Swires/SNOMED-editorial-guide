# Duplex ultrasonography, Doppler ultrasound, and Doppler ultrasonography

Duplex ultrasonography, Doppler ultrasound, and Doppler ultrasonography procedures were previously modeled with the Using device (attribute) with a value of 43770009 |Doppler device (physical object)| and a Method (attribute) of 278292003 |Ultrasound imaging - action (qualifier value)| or 302204005 |Ultrasound - action (qualifier value)|. It was not possible to sufficiently model duplex procedures to make them distinct from Doppler scans, and modeling of Doppler procedures was inconsistent with other imaging procedures where the modality was represented in the Method. 

The concept model is now updated to be consistent with other imaging procedures. The Using device (attribute) has been removed, and the respective imaging modality has been added as a value for the Method (attribute), i.e. |Doppler ultrasound imaging - action (qualifier value)| and |Duplex ultrasound (qualifier value)|. 

Doppler ultrasonography of x (procedure)

For example,

  * 713683001 |Doppler ultrasonography of subclavian vein (procedure)|
    * Method (attribute) = |Doppler ultrasound imaging - action (qualifier value)|
    * Procedure site - Direct (attribute) = |Structure of subclavian vein (body structure)|

Duplex ultrasonography of X (procedure)

For example,

  * 1178980000 |Duplex ultrasonography of carotid artery (procedure)|
  *     * Method (attribute) = |Duplex ultrasound (qualifier value)|
    * Procedure site - Direct (attribute) = |Carotid artery structure (body structure)|

  

