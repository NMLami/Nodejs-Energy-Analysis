import { Router } from "@awaitjs/express";


const router = Router();


import homepageRouter from "./homepage-routes";



router.use("/api/v1/homepage", homepageRouter);


router.getAsync("/", async (req, res, next) => {
    res.send("backend health is ok");
});

router.route("*").all(async (req, res, next) => {
    res.send("404 Not Found!");
});

export default router;