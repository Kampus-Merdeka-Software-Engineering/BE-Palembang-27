import { Router } from "express";
import { postCreateBook } from "../controllers/books.js";

const booksRouter = Router();

booksRouter.get("/", (request, response) => 
response.json({
    message: "book",
})
);

booksRouter.post("/", postCreateBook);

export default booksRouter;