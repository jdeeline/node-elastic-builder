'use strict';

const ValueTermQueryBase = require('./value-term-query-base');
const { validateRewiteMethod } = require('../helper');

const ES_REF_URL = 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-wildcard-query.html';

/**
 * Matches documents that have fields matching a wildcard expression (*not analyzed*).
 *
 * [Elasticsearch reference](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-wildcard-query.html)
 *
 * @extends ValueTermQueryBase
 */
class WildcardQuery extends ValueTermQueryBase {

    /**
     * Creates an instance of `WildcardQuery`.
     *
     * @param {string=} field
     * @param {string=} value
     */
    constructor(field, value) {
        super('wildcard', field, value);
    }

    /**
     * Sets the rewrite method. Valid values are:
     * - `constant_score` - tries to pick the best constant-score rewrite
     *  method based on term and document counts from the query.
     *  Synonyms - `constant_score_auto`, `constant_score_filter`
     *
     * - `scoring_boolean` - translates each term into boolean should and
     *  keeps the scores as computed by the query
     *
     * - `constant_score_boolean` - same as scoring_boolean, expect no scores
     *  are computed.
     *
     * - `constant_score_filter` - first creates a private Filter, by visiting
     *  each term in sequence and marking all docs for that term
     *
     * - `top_terms_boost_N` - first translates each term into boolean should
     *  and scores are only computed as the boost using the top N
     *  scoring terms. Replace N with an integer value.
     *
     * `top_terms_N` - first translates each term into boolean should
     *  and keeps the scores as computed by the query. Only the top N
     *  scoring terms are used. Replace N with an integer value.
     *
     * Default is `constant_score`.
     *
     * This is an advanced option, use with care.
     *
     * @param {string} method The rewrite method as a string.
     * @returns {WildcardQuery} returns `this` so that calls can be chained.
     * @throws {Error} If the given `rewrite` method is not valid.
     */
    rewrite(method) {
        const methodLower = method;
        validateRewiteMethod(methodLower, 'rewrite', ES_REF_URL);

        this._queryOpts.rewrite = methodLower;
        return this;
    }
}

module.exports = WildcardQuery;