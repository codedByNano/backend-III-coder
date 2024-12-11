import { expect } from "chai";
import request from "supertest";
import app from "../src/app.js";


describe("Adoptions API", () => {
  it("Debería hacer un GET de todas las adopciones", async () => {
    const res = await request(app).get("/api/adoptions");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("payload");
  });

  it("Debería hacer un GET de una adopción por ID", async () => {
    const adoptionId = "6758ea3ced459c36f4dc8751";
    const res = await request(app).get(`/api/adoptions/${adoptionId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("payload");
  });

  it("Debería hacer un POST de una nueva adopción", async () => {
    const userId = "673260f1ac528beed379eb18";
    const petId = "6758ec39ed459c36f4dc8753";
    const res = await request(app).post(`/api/adoptions/${userId}/${petId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("message", "Pet adopted");
  });
});
