
// This is a higher-order function that returns a middleware function and with permission argument frozen-in in the closure
const authorize = async (req, res, next) => {
    const id = req.cookies.id;
    if (!id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    const user = rows[0];
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    next();
}


export default authorize;