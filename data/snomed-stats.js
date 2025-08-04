// SNOMED CT Release Statistics (July 2025) - Updated from Google Sheets
const snomedStats = {
    totalActive: 374846,
    totalConcepts: 524399,
    hierarchies: [
        { id: '123037004', name: 'Body structure (body structure)', semTag: '(body structure)', active: 42775, total: 47968, new: 29, changed: 0, inactivated: 6, reactivated: 0, newSD: 2, newP: 27 },
        { id: '404684003', name: 'Clinical finding (finding)', semTag: '(finding)', active: 126809, total: 184236, new: 656, changed: 39, inactivated: 41, reactivated: 1, newSD: 555, newP: 101 },
        { id: '308916002', name: 'Environment or geographical location (environment / location)', semTag: '(environment / location)', active: 1876, total: 2117, new: 1, changed: 0, inactivated: 0, reactivated: 0, newSD: 0, newP: 1 },
        { id: '272379006', name: 'Event (event)', semTag: '(event)', active: 3315, total: 8519, new: 1, changed: 0, inactivated: 0, reactivated: 0, newSD: 0, newP: 1 },
        { id: '363787002', name: 'Observable entity (observable entity)', semTag: '(observable entity)', active: 10950, total: 12235, new: 6, changed: 0, inactivated: 2, reactivated: 0, newSD: 1, newP: 5 },
        { id: '410607006', name: 'Organism (organism)', semTag: '(organism)', active: 34495, total: 41880, new: 48, changed: 0, inactivated: 2, reactivated: 0, newSD: 0, newP: 48 },
        { id: '373873005', name: 'Pharmaceutical / biologic product (product)', semTag: '(product)', active: 25695, total: 43316, new: 3, changed: 0, inactivated: 9, reactivated: 0, newSD: 3, newP: 0 },
        { id: '78621006', name: 'Physical force (physical force)', semTag: '(physical force)', active: 172, total: 182, new: 0, changed: 0, inactivated: 0, reactivated: 0, newSD: 0, newP: 0 },
        { id: '260787004', name: 'Physical object (physical object)', semTag: '(physical object)', active: 14006, total: 17810, new: 10, changed: 0, inactivated: 0, reactivated: 0, newSD: 0, newP: 10 },
        { id: '71388002', name: 'Procedure (procedure)', semTag: '(procedure)', active: 59650, total: 90916, new: 94, changed: 34, inactivated: 45, reactivated: 0, newSD: 70, newP: 24 },
        { id: '362981000', name: 'Qualifier value (qualifier value)', semTag: '(qualifier value)', active: 12191, total: 15018, new: 18, changed: 1, inactivated: 0, reactivated: 0, newSD: 0, newP: 18 },
        { id: '419891008', name: 'Record artifact (record artifact)', semTag: '(record artifact)', active: 520, total: 702, new: 0, changed: 0, inactivated: 0, reactivated: 0, newSD: 0, newP: 0 },
        { id: '138875005', name: 'SNOMED CT Concept (SNOMED RT+CTV3)', semTag: '(SNOMED RT+CTV3)', active: 1, total: 9, new: 0, changed: 0, inactivated: 0, reactivated: 0, newSD: 0, newP: 0 },
        { id: '900000000000441003', name: 'SNOMED CT Model Component (metadata)', semTag: '(metadata)', active: 1900, total: 1964, new: 2, changed: 0, inactivated: 0, reactivated: 0, newSD: 0, newP: 2 },
        { id: '243796009', name: 'Situation with explicit context (situation)', semTag: '(situation)', active: 5053, total: 11828, new: 2, changed: 0, inactivated: 1, reactivated: 0, newSD: 1, newP: 1 },
        { id: '48176007', name: 'Social context (social concept)', semTag: '(social concept)', active: 4180, total: 7996, new: 2, changed: 0, inactivated: 1, reactivated: 0, newSD: 0, newP: 2 },
        { id: '370115009', name: 'Special concept (special concept)', semTag: '(special concept)', active: 2, total: 1965, new: 0, changed: 0, inactivated: 616, reactivated: 0, newSD: 0, newP: 0 },
        { id: '123038009', name: 'Specimen (specimen)', semTag: '(specimen)', active: 1823, total: 1972, new: 2, changed: 0, inactivated: 1, reactivated: 0, newSD: 2, newP: 0 },
        { id: '254291000', name: 'Staging and scales (staging scale)', semTag: '(staging scale)', active: 1665, total: 1911, new: 2, changed: 0, inactivated: 0, reactivated: 0, newSD: 0, newP: 2 },
        { id: '105590001', name: 'Substance (substance)', semTag: '(substance)', active: 27768, total: 31650, new: 21, changed: 0, inactivated: 0, reactivated: 0, newSD: 0, newP: 21 }
    ],
    summary: {
        totalNew: 897,
        totalChanged: 74,
        totalInactivated: 724,
        totalReactivated: 1,
        newSD: 634,
        newP: 263
    }
};

// Cross-reference data
const crossReferences = {
    'introduction': ['concept-model', 'authoring-philosophy'],
    'concept-model': ['body-structure', 'clinical-finding', 'procedure'],
    'clinical-finding': ['body-structure', 'organism', 'procedure'],
    'procedure': ['clinical-finding', 'body-structure', 'pharmaceutical'],
    'pharmaceutical': ['substance', 'clinical-finding'],
    'body-structure': ['clinical-finding', 'procedure'],
    'organism': ['clinical-finding', 'substance'],
    'substance': ['pharmaceutical', 'organism'],
    'situation-context': ['clinical-finding', 'procedure'],
    'specimen': ['observable-entity', 'substance']
};

// Concept ID to section mapping for cross-references
const conceptMap = {
    '138875005': 'concept-model',
    '123037004': 'body-structure',
    '404684003': 'clinical-finding',
    '71388002': 'procedure',
    '373873005': 'pharmaceutical',
    '363787002': 'observable-entity',
    '410607006': 'organism',
    '105590001': 'substance',
    '48176007': 'situation-context',
    '123038009': 'specimen',
    '57054005': 'clinical-finding',
    '80146002': 'procedure',
    '27658006': 'pharmaceutical',
    '96367001': 'pharmaceutical',
    '112283007': 'organism',
    '840539006': 'organism'
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { snomedStats, crossReferences, conceptMap };
} 