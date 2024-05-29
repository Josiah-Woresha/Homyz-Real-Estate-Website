import express from "express";
import { createUser } from "../controllers/userCont.js";

const router = express.Router()

router.post("/register", createUser);

export {router as userRoute}
