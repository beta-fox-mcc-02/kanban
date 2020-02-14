const { User } = require('../models');
const { OAuth2Client } = require('google-auth-library');
const { createToken } = require('../helpers/jwt');

class GoogleSignInController{
  static signIn(req, res, next){
    console.log('masuk sini');
    const { id_token } = req.body;
    const client = new OAuth2Client(process.env.CLIENT_ID);
    let payloadGSignIn;
    client.verifyIdToken({
      idToken: id_token,
      audience: process.env.CLIENT_ID
    })
      .then(ticket => {
        const payload = ticket.getPayload();
        payloadGSignIn = payload;
        const { email } = payload;
        return User.findOne({
          where: {email}
        })
      })
      .then(user => {
        if(user){
          return user;
        }else{
          const data = {
            username: payloadGSignIn.name,
            email: payloadGSignIn.email,
            password: process.env.SECRET_PASSWORD
          }
          console.log('INI DATA =>>', data);
          return User.create(data)
        }
      })
      .then(user => {
        const payload = {id: user.id};
        const access_token = createToken(payload);
        res.status(201).json({access_token});
      })
      .catch(next)
}

}

module.exports = GoogleSignInController;