# Flap procedures

The concept model for flap procedures is based on three attributes in a role group as outlined below:

## 363701004 |Direct substance (attribute)|

  * 363701004 |Direct substance (attribute)| must have a value from the 256683004 |Flap (substance)| subhierarchy, and indicate the direct flap substance composition, and its blood supply.
  * 363701004 |Direct substance (attribute)| must be used for flap procedures (and **not** 424361007 |Using substance (attribute)|).
  * Flap substances exist for free flaps and pedicle flaps (<<261238005 |Free flap (substance)| and << 261235008 |Pedicle flap (substance)|) and reflect the fact that whether a flap is free or pedicle is also a function of its blood supply (i.e. completely unattached from its original blood supply, or still attached via a vascular pedicle).
  * Also see Flap (substance) editorial guidance.

## 260686004 |Method (attribute)|

  * For flap reconstruction procedure, 260686004 |Method (attribute)| must have a value from the 360032005 |Flap reconstruction - action (qualifier value)| subhierarchy and indicate the flap procedure technique, for example, advancement or rotation of flap.
  * For free flap procedures, the method is 1193839003 |Distant flap reconstruction - action (qualifier value)|
  * The proximity of the flap donor site to the flap recipient site (local flap/distant flap) must be modeled as part of the methodology of the procedure (and is no longer a characteristic of the flap substance).

For example,

1193839003 |Distant flap reconstruction - action (qualifier value)| relates to the remote distance between the donor site and the recipient site.

  * When the donor site is indicated in the FSN, for a flap reconstruction procedure for example, then an additional role group is added including the 260686004 |Method (attribute)| with a value of 1193917004 |Flap creation - action (qualifier value)|. The donor site may be stated by the use of 'from x body structure' in the FSN, or if the donor site is indicated by the flap substance (See Example 2 below).

## 405813007 |Procedure site - Direct (attribute)|

  * If it is known where on the body the procedure to perform the flap reconstruction, or flap creation, or other flap procedure is performed, then 405813007 |Procedure site - Direct (attribute)| is used (do not use 405814001 |Procedure site - Indirect (attribute)|).
  * Do not include 405813007 |Procedure site - Direct (attribute)| if no location on the body is specified.
  * Do not include general value 442083009 |Anatomical or acquired body structure (body structure)| if no body site is stated.

#### Example 1: 304093002 |Reconstruction using local subcutaneous pedicle osteomyocutaneous flap (procedure)|

<figure><img src="images/174691303.png" alt="" title=""><figcaption><p>Figure 1: Stated diagrammatic view of 304093002 |Reconstruction using local subcutaneous pedicle osteomyocutaneous flap (procedure)|</p></figcaption></figure>

  

<figure><img src="images/174691306.png" alt="" title=""><figcaption><p>Figure 2: Inferred browser view of 304093002 |Reconstruction using local subcutaneous pedicle osteomyocutaneous flap (procedure)|</p></figcaption></figure>

  

#### Example 2: 14390001000004103 |Reconstruction of mouth using pectoralis major myocutaneous flap (procedure)|

<figure><img src="images/174691305.png" alt="" title=""><figcaption><p>Figure 3: Stated diagrammatic view of 14390001000004103 |Reconstruction of mouth using pectoralis major myocutaneous flap (procedure)|</p></figcaption></figure>

  

<figure><img src="images/174691304.png" alt="" title=""><figcaption><p>Figure 4: Inferred browser view of 14390001000004103 |Reconstruction of mouth using pectoralis major myocutaneous flap (procedure)|</p></figcaption></figure>

  

## Flap procedure naming

### Simple procedure terming

FSN: Reconstruction using flap (procedure) 

PT: Reconstruction using flap 

SYN: Reconstruction with flap

SYN: Flap reconstruction [optional] 

For example, 

FSN: Reconstruction using free flap (procedure) 

PT: Reconstruction using free flap 

SYN: Reconstruction with free flap

SYN: Free flap reconstruction [optional] 

  

### Flap reconstruction 2

FSN: Reconstruction of x body structure using y flap (procedure) 

PT: Reconstruction of x body structure using y flap 

SYN: Reconstruction of x body structure with y flap

SYN: y flap reconstruction of x body structure [optional] 

For example,

FSN: Reconstruction of breast using pedicle transverse rectus abdominis myocutaneous flap (procedure) 

PT: Reconstruction of breast using pedicle transverse rectus abdominis myocutaneous flap 

SYN: Reconstruction of breast with pedicle transverse rectus abdominis myocutaneous flap 

SYN: Breast reconstruction using pedicle transverse rectus abdominis myocutaneous flap [optional] 

  

Existing flap procedure concepts may not align with this new terming. No new ‘flap graft’ procedures should be added going forward.
