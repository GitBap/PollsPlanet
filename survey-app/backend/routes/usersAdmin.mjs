import express from "express";
import authorize  from "../middleware/auth.mjs";

const router = express.Router();

router.get("/", (req, res) => {
    const administrators = {'users': [{'id': 1, 'name': 'json', 'email': 'json@gmail.com'}, 
        {'id': 2, 'name': 'David', 'email': 'david@gmail.com'}]}
    res.json(administrators.users);
});


router.put("/:id",(req, res) => {
    const { id } = req.params;
    const administratorsUpdate = req.body;

    res.json(administratorsUpdate);

});

export default router;