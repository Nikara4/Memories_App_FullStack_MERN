import express from "express";

import { getPosts, createPost } from "../controller/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(createPost);

export default router;

// router.route("/").post(createPerson);
// router.route("/postman").post(createPersonPostman);
// router.route("/:id").put(updatePerson);
// router.route("/:id").delete(deletePerson);
