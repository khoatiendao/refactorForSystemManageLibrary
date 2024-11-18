import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const jwtKey = process.env.SECRET_JWT_KEY;

const jwtToken = {
  generatedToken(_id, role) {
    const createToken = jwt.sign(
      {
        _id: _id,
        role: role,
      },
      process.env.SECRET_JWT_KEY,
      { algorithm: 'HS256', expiresIn: process.env.JWT_KEY_EXPIRES_IN }
    );
    return createToken;
  },

  checkTokenVerify(req, res, next) {
    const tokenVerify = req.headers['auth-token-bearer'];
    if (tokenVerify) {
      jwt.verify(
        tokenVerify,
        jwtKey,
        { algorithms: ['HS256'] },
        (err, decoded) => {
          if (err) {
            return res.json({
              success: false,
              message: 'Something wrong about verify token',
            });
          } else {
            req.decoded = decoded;
            next();
          }
        }
      );
    } else {
      return res.json({
        success: false,
        message: 'Somthing wrong about headers',
      });
    }
  },

  generatedTokenMail(email) {
    const createTokenMail = jwt.sign(
      {
        email: email,
      },
      process.env.SECRET_MAIL_JWT_KEY,
      { algorithm: 'HS256', expiresIn: process.env.EXPIRES_MAIL_IN }
    );
    return createTokenMail;
  },

  checkTokenMailVerify(req, res, next) {
    const tokenEmail = req.params.tokenEmail;
    if (tokenEmail) {
      jwt.verify(
        tokenEmail,
        jwtKey,
        { algorithms: ['HS256'] },
        (err, decoded) => {
          if (err) {
            return res.status(400).json({ success: false, message: err });
          } else {
            req.decoded = decoded;
            next();
          }
        }
      );
    } else {
      return res
        .status(400)
        .json({ success: false, message: 'Something wrong about token' });
    }
  },
};

export default jwtToken;
