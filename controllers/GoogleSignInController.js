const { User } = require('../models');
const { OAuth2Client } = require('google-auth-library');

class GoogleSignInController{
  static signIn(req, res, next){
    console.log('masuk sini');
    const { id_token } = req.body;
    const client = new OAuth2Client(process.env.CLIENT_ID);
    client.verifyIdToken({
      idToken: id_token,
      audience: process.env.CLIENT_ID
    })
      .then(ticket => {
        const payload = ticket.getPayload();
        console.log(payload);
        res.status(200).json(payload);
        // ambil email lalu register jika belum ada email.
        // berikan jwt ke client jika berhasil

      })
      .catch(next)
}

}

module.exports = GoogleSignInController;