import bcrypt from "bcrypt";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { faker } from "@faker-js/faker";

export const createHash = async (password) => {
  const salts = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salts);
};

export const passwordValidation = async (user, password) =>
  bcrypt.compare(password, user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const generatePets = (count) => {
  const amount = Number(count);
  const pets = [];
  for (let i = 0; i < amount; i++) {
    const pet = {
      name: faker.person.firstName(),
      specie: faker.helpers.arrayElement(["dog", "cat", "bird", "rabbit", "fish"]),
      birthDate: faker.date.past(),
      adopted: false,
      owner: null,
      image: "",
    };
    pets.push(pet);
  }
  return pets;
};

export const generateUsers = (count) => {
  const amount = Number(count);
  const users = [];
  for (let i = 0; i < amount; i++) {
    const user = {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: "coder123",
      role: faker.helpers.arrayElement(["user", "admin"]),
      pets: [],
    };
    users.push(user);
  }
  return users;
};

export default __dirname;
