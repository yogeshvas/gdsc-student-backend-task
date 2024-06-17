import { Router } from "express";
import { getData, login, registerUser } from "../controllers/user.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/getdata").get(getData);

export default router;
