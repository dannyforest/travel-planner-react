const asyncHandler = require("express-async-handler");
const {graphQLQuery} = require("../helpers/graphQLQuery");

const executeQuery = async (query, dataObject, variables, req, res) => {
    console.log(req.query)
    const response = await graphQLQuery(
        query, variables,
        );


    if (response.data.errors) {
        console.log(response.data.errors);

        return res.json({
            errors: response.data.errors
        })
    }
    console.log(response.data.data)
    res.json({
        data: response.data.data[dataObject],
        body: req.body
    });
}

exports.trip_detail = asyncHandler(async (req, res, next) => {
    await executeQuery(
        `query GetUserTrip($id: ID!) {
            getUserTrip(id: $id) {
                date
                description
                id
                image
                location
                name
            }
        }`,
        "getUserTrip",
        {id: req.params.id},
        req, res);
});


// Handle book create on POST.
exports.trip_create = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation MyMutation($name: String) {
      createUserTrip(input: {name: $name}) {
        date
        description
        id
        image
        location
        name
      }
    }

    `,  "listUserTrips", {name: req.body.name}, req, res)
});

exports.trip_list = asyncHandler(async (req, res, next) => {
    await executeQuery(`query MyQuery($location: String){
              listUserTrips(filter: {location: {contains: $location}}) {
                items {
                  id
                  image
                  location
                  name
                  description
                  date
                }
              }
            }
    `,  "listUserTrips", {location: req.query.location}, req, res)
})

exports.trip_update = asyncHandler(async (req, res, next) => {
    res.json({});
})

exports.trip_delete = asyncHandler(async (req, res, next) => {
    await executeQuery(
        `mutation MyMutation($id: ID!) {
            deleteUserTrip(input: {id: $id}) {
                date
                description
                id
                image
                location
                name
            }
        }`,
        "deleteUserTrip",
        {id: req.params.id},
        req, res);
})