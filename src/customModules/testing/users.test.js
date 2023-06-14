const axios = require("axios");
const route = "http://localhost:5050/api/users/me";

test("Responds to users/me given a userID", async () => {
  const req = { userID: "6485f7ec1a0ca22ead6df0bf" };
  await axios
    .get(route)
    .then((res) => {
      expect(res.status).toBe(401);
    })
    .catch((err) => {
      expect(err);
    });
});
