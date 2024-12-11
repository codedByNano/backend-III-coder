import { expect } from "chai";
import request from "supertest";
import app from "../src/app.js";

describe("Sessions API", () => {
  it("Debería hacer un POST de un usuario nuevo", async () => {
    const newUser = {
      first_name: "Test",
      last_name: "User",
      email: "test@example.com",
      password: "test123"
    };
    const res = await request(app).post("/api/sessions/register").send(newUser);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("payload");
  });

  it("Debería hacer un POST y logear al usuario existente", async () => {
    const loginUser = {
      email: "test@example.com",
      password: "test123"
    };
    const res = await request(app).post("/api/sessions/login").send(loginUser);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("message", "Logged in");
  });

  it("Debería hacer un GET de la sessión de usuario actual", async () => {
    const res = await request(app).get("/api/sessions/current");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("payload");
  });
});
