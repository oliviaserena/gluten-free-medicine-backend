const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// const prod_url = 'mongodb+srv://user:2WerclebxnbZNTEm@gfd-cluster-3vcwm.mongodb.net/test?retryWrites=true&w=majority';
const url = 'mongodb://localhost:27017/graphqldb';

mongoose.connect(url, {  useCreateIndex: true, useFindAndModify: false , useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));
