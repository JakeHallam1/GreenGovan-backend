const database = require("../database");

test("Test running", () => {
  var data = [
    {
      // Filter user documents by object ID
      filter: { username: "testClient" },
    },
  ];
  expect(database.query("Clients", "findOne", data)).toBe("something");
});
