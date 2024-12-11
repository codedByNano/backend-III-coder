import { expect } from "chai";
import request from "supertest";
import app from "../src/app.js";

describe("Users API", () => {
  it("Debería hacer un GET de todos los usuarios", async () => {
    const res = await request(app).get("/api/users");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("payload");
  });

  it("Debería hacer un GET filtrado de un usuario específico", async () => {
    const userId = "67326117b860e7021331567c";
    const res = await request(app).get(`/api/users/${userId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("payload");
  });

  it("Debería hacer un PUT para actualizar un usuario existente", async () => {
    const userId = "673d1ff590b8e7ba1aab5246";
    const updatedUser = {
      first_name: "Updated",
      last_name: "User",
      email: "updated@example.com"
    };
    const res = await request(app).put(`/api/users/${userId}`).send(updatedUser);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("message", "User updated");
  });

  it("Debería hacer un DELETE de un usuario específico", async () => {
    const userId = "673d20dbca8a0f237461f4ac";
    const res = await request(app).delete(`/api/users/${userId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("message", "User deleted");
  });
});
