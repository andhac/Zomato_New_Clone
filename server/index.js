require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());