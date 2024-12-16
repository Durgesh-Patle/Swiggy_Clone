let express = require('express');
const User = require('../models/userModel');
let router = express.Router();
let bcrypt = require('bcryptjs');

router.post('/sign', async (req, res) => {
    let signData = req.body;
    // console.log(signData);
    let user = await User.findOne({ email: signData.email });
    // console.log(user);
    if (user) {
        res.status(401).json({ msg: "User Allready Exists!!!!" })
    } else {
        // Hashh Password..
        let bcryptPass = await bcrypt.hash(signData.password, 10);

        // new User Created..
        let newUser = new User({
            name: signData.name,
            email: signData.email,
            password: bcryptPass,
            referral: signData.referral
        })

        // Save DataBase..
        await newUser.save();
        res.status(200).json({ msg: "User Account SuccesFully Created..!!!!" });
    }
})

module.exports = router;