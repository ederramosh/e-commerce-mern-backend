// Import Mongoose, Crypto and jsonwebtoken
const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const uniqueValidator = require("mongoose-unique-validator");

//Creating and Schema
const ClientSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid Email"],
  },
  rol: {
    type: String,
    enum: ["client", "admin"],
    default: "client",
  },
  password: {
    type: String,
  },
  salt: {
    type: String,
  },
});

ClientSchema.plugin(uniqueValidator);

ClientSchema.methods.encryptString = function (stringToEncrypt, salt) {
  return crypto
    .pbkdf2Sync(stringToEncrypt, salt, 10000, 512, "sha512")
    .toString("hex");
};

ClientSchema.methods.hashPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.password = this.encryptString(password, this.salt);
};

ClientSchema.methods.verifyPassword = function (password) {
  return this.password === this.encryptString(password, this.salt);
};

//aqui seria de evaluar si se amplia con el nombre, apellido
ClientSchema.methods.generateJWT = function () {
  return jwt.sign({ idClient: this._id, rol: this.rol }, process.env.SECRET);
};

ClientSchema.methods.onSingGenerateJWT = function () {
  return {
    idClient: this._id,
    rol: this.rol,
    token: this.generateJWT(),
  };
};

// Export Module
mongoose.model('Client', ClientSchema, 'collectionClient');
