const loginRegisterUser = require("../model/userSchema")

const register = (req, res) => {
    console.log(req.body)
    const {
        userName,
        userEmail,
        userPassword,
        userCnfPassword
    } = req.body


    try {

        loginRegisterUser.findOne({ userEmail: userEmail })
            .then((user) => {
                if (user) {
                    return res.status(400).json({
                        Message: 'This Email Already Exists',
                        alert: false
                    })
                } else {
                    const usersRegister = new loginRegisterUser(req.body);
                    usersRegister.save()
                    return res.status(200).json({
                        Message: "Registration Successfully",
                        alert: true
                    })
                }
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).json({
                    Message: "Something went Wrong"
                })
            })

    } catch (error) {
        console.log(error)
    }
    // res.send('I love india')
}

module.exports = { register }