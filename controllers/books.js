import  express  from "express";
import { createBook, findBookById } from "../services/books.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js";
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postCreateBook = async (request, response) => {
    const { title, releaseYear } = request.body;
    const book = await createBook(title, releaseYear);

    
  response.json({
    data: book,
    message: httpStatusMesage[response.status],
  });
};
