const db = require("../util/database");

module.exports = class Post {
  constructor(id, title, category, date, article) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.date = date;
    this.article = article;
  }

  // CREATE
  static add(req, res) {
    return db.execute(
      "INSERT INTO post (title, category, date, article) VALUES (?, ?, ?, ?)",
      [req.body.title, req.body.category, req.body.date, req.body.editor1]
    );
  }

  // READ
  static fetchAll() {
    return db.execute("SELECT * FROM post");
  }

  static findById(id) {
    return db.execute("SELECT * FROM post where id = ?", [id]);
  }

  // UPDATE
  static updateById(req, res) {
    const id = req.body.id;
    const title = req.body.title;
    const category = req.body.category;
    const date = req.body.date;
    //const date = new Date();
    const article = req.body.editor1;
    console.log("model:updateById()", id, title, category, date, article);
    return db.execute(
      "UPDATE post SET title = ?, category = ?, date = ?, article = ? WHERE id = ?",
      [title, category, date, article, id]
    );
  }

  // DELETE
  static deleteById(id) {
    return db.execute("DELETE FROM post WHERE id = ?", [id]);
  }

  static getCount() {
    return db.execute("SELECT COUNT(*) as count FROM post");
  }
};
