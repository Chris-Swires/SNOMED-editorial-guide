# Anatomy relating to the spine

The terms 'spine' and 'vertebral column' in descriptions of conditions or procedures are often used loosely in clinical discourse but can relate to three different general anatomical concepts:

421060004 |Structure of **vertebral column** (body structure)| (synonym: Spinal column, ‘Backbone’, Spine)

  * includes the bones of the spine and associated joints and ligaments

289959001 |**_Musculoskeletal structure of spine_** (body structure)|

  * includes the vertebral column plus muscles and tendons associated with the spine

1141981001 |Structure of **vertebral column region** (body structure)|

  * includes the musculoskeletal structure of spine plus spinal canal, meninges, spinal cord, roots and ganglia and immediate soft tissue including adjacent vascular structures where specified.

The last concept has been allocated the following definition: This volume includes the spinal column, its spaces and contents, notably the spinal canal, spinal meninges and spinal cord. It also includes the muscles associated with the spine within (and including) the anterior and posterior thoracolumbar fascia and its equivalent nuchal fascia in the neck. This region also includes the spinal ventral (anterior) and dorsal (posterior) roots, the dorsal root (spinal) ganglions and the spinal nerve trunks.

  

To emphasize the different volumes, cross-sections are shown below of (Figure 1) the vertebral column in yellow, and (Figure 2) the larger vertebral column region in amber color.

<figure><img src="images/174690302.jpg" alt="" title=""><figcaption><p>Figure 1, Vertebral column</p></figcaption></figure>

  

<figure><img src="images/174690303.jpg" alt="" title=""><figcaption><p>Figure 2, Vertebral column region</p></figcaption></figure>

  

From the preceding descriptions, it is clear that _Vertebral column region_ is a broader concept for 'spine', and it should be used when a procedure or condition could involve not only the bony component of the vertebral column, but also the spinal cord, nerve root, muscle, bone, or joint of spine. 

For example,

  * MRI of thoracic spine (procedure) is modeled with 1141986006 |Structure of thoracic vertebral column region (body structure)|.
  * Pain in sacrum (finding) is interpreted as being related to the more general notion of 1144746008 |Structure of sacral vertebral column region (body structure)|.

When a procedure or disorder is exclusively related to musculoskeletal structures of the spine, the 'musculoskeletal structure of spine' should be used.

For example,

  * Cervical traction (procedure), Manipulation of the cervical spine (procedure), and Rotational deformity of cervical spine (finding) are all modeled with 297166009 |Structure of musculoskeletal system of cervical spine (body structure)|.

Where a procedure or condition only effects the bone, joint, or ligament component (and not the muscles or tendons directly) the ‘vertebral column variant’ is used for modeling.

For example,

  * Benign neoplasm of lumbar vertebral column (disorder) and Kyphoplasty of fracture of lumbar spine using fluoroscopic guidance (procedure) are both modeled with 122496007 |Structure of lumbar vertebral column (body structure)|.

  

The sacrum is considered equivalent to the sacral vertebral column, as it is composed of the bone structure of the sacrum plus the joint structure of sacrococcygeal junction of spine.

  

## Junctional and combined segments of spine

The spine is traditionally divided into the following regions:

  * Cervical
  * Thoracic
  * Lumbar
  * Sacral
  * Coccyx

The anatomy of these individual segments are structured in accordance with the description above.

The regions and joints between these identified segments are referred to as _cervicothoracic, thoracolumbar, lumbosacral_ and _sacrococcygeal_. The meaning of these words are subject in common parlance and some literature to be ambiguous.

For example,

  * ‘Thoracolumbar’ sometimes refers to the thoracic spine _and_ lumbar spine, or alternatively, it is used to express the junction _between_ the thoracic spine and lumbar spine.

To avoid false assumptions, the junction of spinal segments in SNOMED CT have been made explicit by including the word _junction_ in descriptions. This avoids potential misinterpretation as to whether a word such as ‘thoracolumbar' relates to both spinal segments or just the adjacent volume. 

For example,

  * The notion of 1145014005 |Structure of thoracolumbar junction of vertebral column (body structure)| is only used for modeling when it is explicitly stated in the target concept e.g. 281907005 |Fracture dislocation of thoracolumbar junction (disorder)|.

By contrast, in the circumstance where a dependent concept relates to the combination of two segments, e.g. 702487007 |CT of thoracolumbar spine (procedure), (FSN Computed tomography of thoracic and lumbar spine), the concept is modeled with two axioms, namely Structure of lumbar vertebral column region and Structure of thoracic vertebral column region.

The volume or extent of the junctional zones themselves are not defined consistently in the literature but most commonly relate to the junction between two segments and one vertebra above and below. So the convention used in the SNOMED CT anatomy hierarchy follows this guidance.

For example,

1145014005 |Structure of thoracolumbar junction of vertebral column (body structure)| includes the following concepts in its class:

  * 66794005 |Bone structure of L1 (body structure)|
  * 23215003 |Bone structure of T12 (body structure)|
  * 714833001 |Structure of intervertebral syndesmosis of T12 and L1 (body structure)|
  * 181879009 |T12/L1 facet joint (body structure)|

In addition, a further convention is required as to where segmental junctional joints belong, i.e. either to the cephalic or caudal segment. For instance, does the T12/L1 facet joint relate to the Thoracic spine joint structure or/and Lumbar spine joint structure?

The convention used (based on common criteria of spinal injuries) is that the junctional joints are included with the cephalic segment. So, in the case of the T12/L1 facet joint, it is included in the class of Thoracic spine joint structure (body structure).

Similarly, 8454000 |Lumbar spine joint structure (body structure)| subsumes:

  * Intervertebral L5-S1 disc
  * Structure of lumbosacral joint
  * Structure of facet joint between L5 and S1

  

