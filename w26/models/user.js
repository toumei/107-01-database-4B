const db = require("../util/database");

module.exports = class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  // CREATE
  static add(req, res) {
    return db.execute(
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
      [req.body.name, req.body.email, req.body.password]
    );
  }
  // READ
  static fetchAll() {
    return db.execute("SELECT * FROM user");
  }
  static findById(id) {
    return db.execute("SELECT * FROM user where id = ?", [id]);
  }

  // UPDATE
  static updateById(req, res) {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    return db.execute(
      "UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?",
      [name, email, password, id]
    );
  }

  // DELETE
  static deleteById(id) {
    return db.execute("DELETE FROM user WHERE id = ?", [id]);
  }

  static getCount() {
    return db.execute("SELECT COUNT(*) as count FROM user");
  }
};
