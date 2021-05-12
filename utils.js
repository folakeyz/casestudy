const jwt  = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
  }, process.env.JWT_SECRET || 'daisy', {
      expiresIn: '30d',
  });
}

module.exports = generateToken;