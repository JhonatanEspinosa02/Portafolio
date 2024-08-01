import { Router } from "express";
import { clientData } from "./handlers/Data";
import { body } from "express-validator";
import { handleError } from "./middleware/InputError";

//Create Express Router
const router = Router();

//EndPoints
router.post(
  "/client",
  body("fullname")
    .notEmpty()
    .withMessage("This field cannot to be empty"),
  body("email").notEmpty().withMessage("This field cannot to be empty"),
  body("message").notEmpty().withMessage("This field cannot to be empty"),
  handleError,
  clientData
);

export default router;
