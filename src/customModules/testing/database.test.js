const database = require("../database");

test("Test running", async () => {
  var data = [
    {
      // Filter user documents by object ID
      filter: { username: "douglas-backend-user" },
    },
  ];
  await database.query("Clients", "findOne", data).then((document) => {
    expect(JSON.stringify(document)).toBe(
      JSON.stringify({
        _id: "6485f7ec1a0ca22ead6df0bf",
        username: "douglas-backend-user",
        password: "123",
        points: 0,
        accessLevel: 1,
      })
    );
  });
});
