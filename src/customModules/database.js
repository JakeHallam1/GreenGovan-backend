var axios = require("axios");

async function query(collection, action, args) {
  // Guard Clauses
  if (!Array.isArray(args)) {
    throw new Error("Args not passes as Array.");
  }

  // Database call config
  var config = {
    method: "POST",
    url: `https://eu-west-2.aws.data.mongodb-api.com/app/data-inait/endpoint/data/v1/action/${action}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
        "TnjmvpIUN2AZvsAAstxaDmG5X93ay6PlZ74eSaZHub5ACPeSmAxSdLwaIHw1uiBd",
    },
    data: {
      collection: collection,
      database: "GreenGovanDatabase",
      dataSource: "GreenGovanCluster",
    },
  };

  // Add arguments to database call
  args.forEach((element) => {
    Object.assign(config.data, element);
  });

  // Execute database call
  return await axios(config)
    .then(function (response) {
      return response.data.document;
    })
    .catch(function (error) {
      console.warn(error);
      return null;
    });
}

module.exports = { query: query };
