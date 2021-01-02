const model = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const hashPass = (user) => {
    bcrypt.hash(user.password, 5, (error, newHash) => {
        if (error) {
            console.log(error);
            return error
        }
        user.password = newHash
        user.save()
        return user
    })
}


const findUser = (email) => {
    return model.findOne({ email })
}


const generateToken = (user) => {
    // Gets expiration time
    const expiration =
        Math.floor(Date.now() / 1000) + 60 * 10

    // returns signed and encrypted token
    return jwt.sign(
        {
            data: {
                _id: user
            },
            exp: expiration
        },
        'llave-secreta-123'
    )
}

exports.login = async (req, res) => {
    const body = req.body;
    const user = await findUser(body.email)

    bcrypt.compare(body.password, user.password, function (err, result) {
        if (result) {
            res.send({ data: user })
        } else {
            res.send({ data: 'Incorrect' })
        }
    });
}

exports.register = async (req, res) => {
    const body = req.body;
    const newUser = await model.create(body)
    newUser.password = body.password
    hashPass(newUser)
    res.send({
        user: newUser
    })
    // console.log(newUser);

}
