import jwt from "jsonwebtoken";


const generateToken = (id) => {
    const Secret = "thisissecretsshhhh"
    return jwt.sign({id}, Secret, {
    // return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

export default generateToken;