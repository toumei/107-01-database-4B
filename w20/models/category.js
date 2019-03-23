const db = require("../util/database");

module.exports = class Category {
  constructor(id, title, date) {
    this.id = id;
    this.title = title;
    this.date = date;
  }
  // CREATE
  static add(req, res) {
    console.log(req.body);
    return db.execute("INSERT INTO category (title, date) VALUES (?, ?)", [
      req.body.title,
      new Date().toLocaleString()
    ]);
  }
  // READ
  static fetchAll() {
    return db.execute("SELECT * FROM category");
  }

  static findById(id) {
    return db.execute("SELECT * FROM category where id = ?", [id]);
  }

  // UPDATE
  static updateById(req, res) {
    const id = req.body.id;
    const title = req.body.title;
    const date = req.body.date;
    return db.execute("UPDATE category SET title = ?, date = ? WHERE id = ?", [
      title,
      date,
      id
    ]);
  }

  // DELETE
  static deleteById(id) {
    return db.execute("DELETE FROM category WHERE id = ?", [id]);
  }

  static getCount() {
    return db.execute("SELECT COUNT(*) as count FROM category");
  }
};
