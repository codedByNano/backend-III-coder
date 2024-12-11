import { expect } from "chai";
import request from "supertest";
import app from "../src/app.js";

describe("Pets API", () => {
  it("Debería hacer un GET de todas las mascotas", async () => {
    const res = await request(app).get("/api/pets");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("payload");
  });

  it("Debería crear una nueva mascota", async () => {
    const newPet = {
      name: "Test Pet",
      specie: "dog",
      birthDate: "2020-01-01"
    };
    const res = await request(app).post("/api/pets").send(newPet);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("payload");
  });

  it("Debería hacer un PUT para actualizar una mascota existente", async () => {
    const petId = "673d20dbca8a0f237461f4a9";
    const updatedPet = {
      name: "Updated Pet",
      specie: "cat",
      birthDate: "2021-01-01"
    };
    const res = await request(app).put(`/api/pets/${petId}`).send(updatedPet);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("message", "pet updated");
  });

  it("Debería hacer un DELETE de la mascota especificada por ID", async () => {
    const petId = "673d200090b8e7ba1aab5249";
    const res = await request(app).delete(`/api/pets/${petId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("message", "pet deleted");
  });
});
