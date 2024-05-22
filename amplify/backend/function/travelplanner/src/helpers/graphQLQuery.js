const axios = require('axios');

exports.graphQLQuery = (query, variables) =>
    axios({
        url: 'https://cfnc7u4h5fbevgec7ifaz2vjzq.appsync-api.us-east-1.amazonaws.com/graphql',
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": 'da2-wjdshw3n75fctosmsa24yfqupm',
        },
        data: {
            query, variables
        },
    });
