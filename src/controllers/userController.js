import validator from 'validator';
import userService from '../services/userService.js';
import createMail from '../configs/mail.js';
import bcrypt from 'bcrypt'
import errorResponse from '../helper/classError.js';
import jwtToken from '../middlewares/auth/authJwt.js';


export const userRegister = async (req, res) => {
  const { email, password, fullName, phone, address, ward, district, city } = req.body;
  const checkEmail = await userService.findEmailUser(email);
  if (
    !email ||
    !password ||
    !fullName ||
    !phone ||
    !address ||
    !ward ||
    !district ||
    !city
  ) {
    throw new errorResponse(400, 'Please fill all information');
  } else if (!validator.isEmail(email)) {
    throw new errorResponse(400, 'Email must be a valid email');
  } else if (!validator.isStrongPassword(password)) {
    throw new errorResponse(400, 'Password must be strong');
  } else if (checkEmail) {
    throw new errorResponse(400, 'This email already exists');
  } else {
    const saltRound = 12;
    const salt = await bcrypt.genSalt(saltRound);
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = {
        email: email,
        password: passwordHash,
        fullName: fullName,
        phone: phone,
        address: address,
        ward: ward,
        district: district,
        city: city
    }
    const sendEmail = createMail.send(email, fullName);
    if(sendEmail) {
        const result = await userService.createUser(newUser);
        if(result) {
            return res.status(201).json({message: 'Register Successfull - Please check your mail to verify', user: newUser});
        } else {
            throw new errorResponse(400, 'Register Failed')
        }
    } else {
        throw new errorResponse(400, 'Email must be valid')
    }
  }
};

export const userLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const findUser = await userService.findEmailUser(email);
  if (!email || !password) {
    throw new errorResponse(400, "Please type email and password")
  } else if (!validator.isEmail(email)) {
    throw new errorResponse(400, "Email must be a valid email")
  } else if (!validator.isStrongPassword(password)) {
    throw new errorResponse(400, "Password must be strong")
  } else if (!findUser) {
    throw new errorResponse(400, "This email is not exist")
  } else {
    const _id = findUser._id;
    const role = findUser.role;
    const matchPassword = await bcrypt.compare(password, findUser.password);
    if (matchPassword) {
      const token = jwtToken.generatedToken(_id, role);
      res.status(200).json({success: true, message: 'Login Successfull', token: token })      
    } else {
      throw new errorResponse(400, "Wrong Password")
    }
  }
};
