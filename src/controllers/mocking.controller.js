import { generateUsers } from "../utils/index.js";

const getUserMocking = (req, res) => {
  const { count } = req.query;
  console.log(count);
  if (!count)
    return res.status(404).send({ message: "Error: Cantidad no especificada" });

  generateUsers(count);
  res.send({ message: "done" });
};

export default {
  getUserMocking,
};
