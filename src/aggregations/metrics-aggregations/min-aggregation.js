'use strict';

const MetricsAggregationBase = require('./metrics-aggregation-base');

/**
 * A single-value metrics aggregation that keeps track and returns the
 * minimum value among the numeric values extracted from the aggregated
 * documents. These values can be extracted either from specific numeric fields
 * in the documents, or be generated by a provided script.
 *
 * [Elasticsearch reference](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-min-aggregation.html)
 *
 * Aggregation that keeps track and returns the minimum value among numeric
 * values extracted from the aggregated documents.
 *
 * @extends MetricsAggregationBase
 */
class MinAggregation extends MetricsAggregationBase {

    /**
     * Creates an instance of MinAggregation
     *
     * @param {string} name The name which will be used to refer to this aggregation.
     * @param {string=} field The field to aggregate on
     * @returns {MinAggregation} returns `this` so that calls can be chained
     */
    constructor(name, field) {
        super(name, 'min', field);

        return this;
    }
}

module.exports = MinAggregation;