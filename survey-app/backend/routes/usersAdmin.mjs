import express from "express";
import authorize  from "../middleware/auth.mjs";
import {
    getAllUsers,
    login,
    deleteUser,
    updateUser,
    createUser,
} from '../services/usersService.mjs'



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

router.post("/register", async(req, res) => {
    const user = req.body;
    const newUser = await createUser(user);
    res.status(201).json(newUser);
});

router.post('/login', async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      // Fetch the user with the provided email
      const userResult = await db.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
      );
      
      const user = userResult.rows[0];
  
      // If no such user exists, or the password is incorrect, send an error
      if (!user || !(await bcrypt.compare(password, user.password_hash))) {
        res.status(401).json({ message: 'Invalid email or password' });
        return;
      }
 
      // Send a response indicating successful login
      res.status(200).json({ message: 'User logged in successfully' });
    } catch (err) {
      next(err);
    }
  });

export default router;