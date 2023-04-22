const User = require('../store/User');

const UserModule = {
  async create(data) {
    const { email, password, name, contactPhone } = data;

    console.log('email ', email);

    const createdUser = await User.register(
      new User({
        email,
        passwordHash: password,
        name,
        contactPhone,
        username: email,
      }),
      password
    );

    return createdUser;
  },
  async findByEmail(email) {
    const user = await User.findOne({ email });

    return user;
  },
};

module.exports = UserModule;
