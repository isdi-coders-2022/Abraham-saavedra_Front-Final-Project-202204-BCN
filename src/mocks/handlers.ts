// src/mocks/handlers.js
import { rest } from "msw";
import { singleUser } from "./userMocks";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}user/register`,
    (req, res, ctx) => {
      debugger;
      if (req.body !== singleUser) {
        return res(ctx.status(409), ctx.json("This username already exists"));
      } else {
        return res(ctx.status(201), ctx.json("Usuario creado"));
      }
    }
  ),
];
