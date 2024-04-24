const User = require('../models/User');
const Sensor = require('../models/sensor');

//Get all Method
const get = async (req, res) => {
  try{
      const data = await Sensor.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

// Register a new user
const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();
    res.json({ message: 'Registration successful' });
  } catch (error) {
    next(error);
  }
};

//  add data to sensor
const Add_Data = async (req, res, next) => {
  const { temperature, humidity,id} = req.body;

  try {
    const data = new Sensor({ temperature, humidity,id });
    await data.save();
    res.json({ message: 'data saved' });
  } catch (error) {
    next(error);
  }
};


// Login with an existing user
const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    if (password!=user.password) {
      return res.status(404).json({ message: 'password is invalid' });
    }
    res.json({ message: 'login successful' });

  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, Add_Data,get};