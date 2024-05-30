const axios = require('axios');

exports.graphQLQuery = (query, variables) =>
    axios({
        url: 'https://hw4fir4a55dvjhyvhntr5m2rfm.appsync-api.us-east-1.amazonaws.com/graphql',
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": 'da2-osjqt5bqcnajblkq4massdlyyq',
        },
        data: {
            query, variables
        },
    });