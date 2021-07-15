"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_1 = require("./src/schema");
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection({
        type: "mysql",
        database: "graphql-crud",
        username: "root",
        password: "password",
        logging: true,
        synchronize: false,
        entities: [],
    });
    const app = express_1.default();
    const PORT = process.env.PORT || 5000;
    app.use(cors_1.default());
    app.use(express_1.default.json());
    app.use("/graphql", express_graphql_1.graphqlHTTP({
        schema: schema_1.schema,
        graphiql: true,
    }));
    app.listen(PORT, () => {
        console.log("Server running:", PORT);
    });
});
main().catch((error) => {
    console.log(error);
});
