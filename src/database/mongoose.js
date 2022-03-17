const mongoose = require("mongoose");
const { env } = require("../config");

const { DDBB } = env;

const connection = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(DDBB, options);
    console.log("Database is now connected");
  } catch (error) {
    console.error(error);
    throw new Error("Error connecting with database");
  }
};

module.exports = {
  connection,
};
