/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

class Constants {
  static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://localhost:27017/smirnova23"
  static TOKEN: string  = 'N5Bmc#$q?|vhg#}zJg3r6rIo';
}
Object.seal(Constants);
export = Constants;