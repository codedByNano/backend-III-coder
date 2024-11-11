import { petsService, usersService } from "../services/index.js";
import { generatePets, generateUsers } from "../utils/index.js";

const getPetsMocking = (req, res) => {
  const { count } = req.query;
  if (!count || !Number(count))
    return res
      .status(404)
      .send({ message: "Error al momento de recibir cantidad" });

  const pets = generatePets(count);
  res.send({ message: "done", payload: pets });
};

const getUserMocking = (req, res) => {
  const { count } = req.query;
  if (!count || !Number(count))
    return res
      .status(404)
      .send({ message: "Error al momento de recibir cantidad" });

  const users = generateUsers(count);
  res.send({ message: "done", payload: users });
};

const generateData = async (req, res) => {
  const { countUsers, countPets } = req.body;
  if (!countUsers || !Number(countUsers) || !countPets || !Number(countPets))
    return res
      .status(404)
      .send({ message: "Error al momento de recibir cantidad" });

  const users = generateUsers(countUsers);
  try {
    for (const user of users) {
      await usersService.create(user);
    }
  } catch (error) {
    return res.status(500).send({ message: "Error al crear usuarios" });
  }

  const pets = generatePets(countPets);
  try {
    for (const pet of pets) {
      await petsService.create(pet);
    }
  } catch (error) {
    return res.status(500).send({ message: "Error al crear mascotas" });
  }

  res.send({ message: "done", payload: { users, pets } });
};

export default {
  getUserMocking,
  getPetsMocking,
  generateData,
};
