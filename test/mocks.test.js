import { expect } from "chai";
import request from "supertest";
import app from "../src/app.js";

describe("Mocks API", () => {
  it("Debería hacer un GET de macotas mockeadas", async () => {
    const res = await request(app).get("/api/mocks/mockingpets?count=5");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("message", "done");
    expect(res.body).to.have.property("payload");
  });

  it("Debería hacer un GET de usuarios mockeados", async () => {
    const res = await request(app).get("/api/mocks/mockingusers?count=5");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("message", "done");
    expect(res.body).to.have.property("payload");
  });

  it("Debería generar data", async () => {
    const generateData = {
      countUsers: 5,
      countPets: 5,
    };
    const res = await request(app)
      .post("/api/mocks/generatedata")
      .send(generateData);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("message", "done");
    expect(res.body).to.have.property("payload");
  });
});
