let express = require('express');
const User = require('../models/userModel');
let router = express.Router();
let bcrypt = require('bcryptjs');

router.post('/login', async (req, res) => {
    let loginData = req.body;
    
    try {
        let user = await User.findOne({ email: loginData.email });
        // console.log(user);

        if (user) {
            let validPass = await bcrypt.compare(loginData.password, user.password);

            if (validPass) {
                res.status(200).json({ msg: "Login Successfully!" });
            } else {
                res.status(401).json({ msg: "Invalid Password!" });
            }
        } else {
            res.status(401).json({ msg: "Account does not exist. Please create an account first!" });
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ msg: "Internal Server Error", error: err.message });
    }
});

module.exports = router;
