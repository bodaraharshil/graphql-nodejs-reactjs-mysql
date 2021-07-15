import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./src/schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./src/entits/Users";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "Graphql-crud",
    username: "root",
    password: "",
    logging: true,
    synchronize: false,
    entities: [Users],
  })
    .then(() => {
      console.log("Database connected!");
    })
    .catch((error) => {
      console.log("Error", error);
    });

  const app = express();
  const PORT = process.env.PORT || 5000;
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.listen(PORT, () => {
    console.log("Server running:", PORT);
  });
};

main().catch((error) => {
  console.log(error);
});
