import { Router } from "express";
import { login, registerUser, userTest } from "../controllers/user.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/usertest").get(userTest);

export default router;
