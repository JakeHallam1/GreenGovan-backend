const axios = require("axios");
const route = "http://localhost:5050/api/users/me";

test("Responds to users/me given a userID", async () => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RDbGllbnQiLCJhY2Nlc3NMZXZlbCI6Miwib3JnYW5pc2F0aW9uTmFtZSI6IlRlc3QgT3JnYW5pc2F0aW9uIiwic2Nhbm5lckJ1ZmZlciI6IjY0ODM0Y2ZmZmNhYTg5YjFhNTNhNmJhNiIsInVzZXJJRCI6IjY0N2YyNjM2NzhhZDZkMDdkNmVlZDE4MCIsImlhdCI6MTY4NjgyMDI3MX0.AXjgUMY_rZwro2Dz1EUH3APZmBjq9f0nSfMJcMccjyQ",
    },
  };
  await axios.get(route, config).then((res) => {
    expect(res.status).toBe(200);
  });
});
