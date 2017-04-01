'use strict';

// Used in Fiversified Sampler aggrenation
exports.EXECUTION_HINT_SET = new Set(
    ['map', 'global_ordinals', 'global_ordinals_hash', 'global_ordinals_low_cardinalit']
);

// Used in Geo Point Aggregation
exports.UNIT_SET = new Set(
    [
        'in', 'inch',
        'yd', 'yards',
        'ft', 'feet',
        'km', 'kilometers',
        'NM', 'nmi', 'nauticalmiles',
        'mm', 'millimeters',
        'cm', 'centimeters',
        'mi', 'miles',
        'm', 'meters'
    ]
);