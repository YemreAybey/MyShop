// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = callback => {
//   MongoClient.connect('mongodb+srv://yemre:1720aybey@cluster0-8z0vq.mongodb.net/shop?retryWrites=true&w=majority', { useUnifiedTopology: true })
//     .then(client => {
//       console.log('connected');
//       _db = client.db()
//       callback();
//     }).catch(e => {
//       console.log(e)
//       throw e;
//     });
// }

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw 'No database found'
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
