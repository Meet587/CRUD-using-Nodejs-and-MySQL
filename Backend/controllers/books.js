const db = require("../db/connect.js");

const getbooks = (req, res) => {
  const q = "SELECT * FROM ca.books";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json(data);
    }
  });
};
const postbooks = (req, res) => {
  const q = "INSERT INTO ca.books (`title`,`decs`,`cover`) VALUE (?)";
  const value = [req.body.title, req.body.decs, req.body.cover];
  db.query(q, [value], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json(data);
    }
  });
};

const deleteBooks = (req, res) => {
  const bookID = req.params.id;
  const q = "DELETE FROM ca.books WHERE id = ?";
  db.query(q, [bookID], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json("delete book succesully");
    }
  });
};

const updateBooks = (req, res) => {
  const bookID = req.params.id;
  const q =
    "UPDATE ca.books SET `title` = ?, `decs` = ?, `cover` = ? WHERE id = ?";

  const q1 =
    "UPDATE ca.books SET `title` = ?, `decs` = ?, `cover` = ? WHERE `id` = ?";
  const value = [req.body.title, req.body.decs, req.body.cover];
  db.query(q1, [...value, bookID], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json(data);
    }
  });
};

module.exports = { getbooks, postbooks, deleteBooks, updateBooks };
