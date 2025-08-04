# Endoscopy and endoscopic procedures

There is no need to distinguish between _endoscopy_ and _endoscopic procedure,_ as the procedure always includes inspection and may require minor incisions to allow the endoscope and other instruments to be inserted, or insertion may be via an existing orifice.   

In all endoscopic procedures, a role group with Method of Inspection - action (qualifier value) + Using Device is mandatory. For endoscopies that require an incision, the role group to represent the incision is required. Where an additional action is performed during an endoscopy, a third role group is modeled with the applicable action.

## Endoscopy/Endoscopic procedure modeling

  

**Inspection only via natural orifice**

**= 1 role group with Inspection**

Role group:

  *     *       * Method = Inspection
      * <<Procedure site = <body structure>
      * Using device = <physical object>

For example, 

  * Stated view of |Endoscopy of stomach (procedure)|

<figure><img src="images/229114166.png" alt="" title=""><figcaption><p>There can be more than 1 role group if there is more than one site. So Esophagogastroduodenoscopy (procedure) has 3 inspection role groups; one each for esophagus, stomach, and duodenum.</p></figcaption></figure>

  

**Inspection + action via natural orifice**

**= 2 role groups of Inspection and Action**

Role group 1:

  *     *       * Method = Inspection
      * <<Procedure site = <body structure>
      * Using device = <physical object>

Role group 2:

  *     *       * Method = <action qualifier value>
      * <<Procedure site = <body structure>

For example,

  * Stated view of |Endoscopic brush biopsy of stomach (procedure)|

<figure><img src="images/225051467.png" alt="" title=""><figcaption><p><strong>Inspection via skin incision</strong></p></figcaption></figure>

  

**= 2 role groups of Inspection and Incision**

Role group 1:

  *     *       * Method = Inspection
      * <<Procedure site = <body structure>
      * Using device = <physical object>

Role group 2:

  *     *       * Method = Incision
      * Procedure site - Direct = <body structure>

For example, 

  * Stated view of |Thoracoscopy (procedure)|

<figure><img src="images/225051466.png" alt="" title=""><figcaption><p><strong>Inspection + action via skin incision</strong></p></figcaption></figure>

  

**= 3 role groups of Inspection and Incision and Action**

Role group 1:

  *     *       * Method = Inspection
      * <<Procedure site = <body structure>
      * Using device = <physical object>

Role group 2:

  *     *       * Method = Incision
      * Procedure site - Direct = <body structure>

Role group 3:

  *     *       * Method = <action qualifier value>
      * <<Procedure site = <body structure>

For example,

  * Stated view of |Thoracoscopy with biopsy (procedure)|

<figure><img src="images/225051465.png" alt="" title=""></figure>

## Devices

Endoscopes are complex pieces of equipment that support much more than just the act of visualization. However, one does not usually use the scope to access the site of the intended inspection or therapeutic procedure. 

USING DEVICE: When an incision RG is included in the concept model then the correct attribute for the device is USING DEVICE. For example, access to the abdominal cavity, or a joint capsule, is achieved by an ordinary incision using a scalpel blade. The laparoscope or arthroscope is then introduced into the cavity through the incision i.e. the endoscope is not the access device.

USING ACCESS DEVICE: Many procedures can be carried out using tools attached to or operated via channels within the endoscope. In some cases the device IS used for access (such as endoscopy of the GI tract), e.g. ERCP in particular allows you to both visualize and operate upon the sphincter of Oddi/ampulla of Vater using cutting devices (knives or wires etc.) and then passing a basket up into the CBD to remove stones. The correct attribute for the device is USING ACCESS DEVICE.

Naming individual scopes for procedures involving multiple body sites leads to inconsistent inferences. For procedures involving multiples sites or where it is known there are a number of appropriate scopes that could be employed, use 37270008 |Endoscope, device (physical object)| e.g. see 76009000 |Esophagogastroduodenoscopy (procedure)|

## Laparoscopy

 _Laparoscopy_ and _laparoscopic procedure_ are synonymous. These procedures are modeled with at least two role groups:

Role group: 

Method = Incision - action (qualifier value)

Procedure site - Direct = Anterior abdominal wall structure (body structure)

Role group:

Method = Inspection - action (qualifier value)

<<Procedure site = Structure of abdominopelvic cavity and/or content of abdominopelvic cavity and/or anterior abdominal wall (body structure)

Using device = Laparoscope, device (physical object)

  

<figure><img src="images/229114165.png" alt="" title=""><figcaption><p>Figure 1: Stated view of 73632009 |Laparoscopy (procedure)|</p></figcaption></figure>

