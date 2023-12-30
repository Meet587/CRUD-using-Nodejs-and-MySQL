import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
} from "reactstrap";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [book, setBook] = useState({
    title: "",
    decs: "",
    cover: "",
  });

  const handleChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;

    setBook((prev) => ({ ...prev, [name]: value }));
  });
  const handleDelete = useCallback(async (id) => {
    try {
      await axios.delete("http://localhost:3456/books/" + id);
      await fetcjhAllBooks();
    } catch (error) {
      console.log(error);
    }
  });

  const handleSubmit = useCallback(async (e, flag) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3456/books", book);
      await fetcjhAllBooks();
      setModal(false);
      setBook({
        title: "",
        decs: "",
        cover: "",
      });
    } catch (error) {
      console.log(error);
    }
  });

  const openUpdateModal = (id) => {
    const current = books.filter((val, i) => val.id === id);
    console.log(current);
    setBook(current[0]);
    setUpdateModal(!updateModal);
  };
  const handleUpdate = useCallback(async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        "http://localhost:3456/books/" + book.id,
        book
      );
      console.log(result);
      await fetcjhAllBooks();
      setUpdateModal(false);
      setBook({
        title: "",
        decs: "",
        cover: "",
      });
    } catch (error) {
      console.log(error);
    }
  });
  const fetcjhAllBooks = async () => {
    try {
      axios
        .get("http://localhost:3456/books")
        .then((res) => setBooks(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetcjhAllBooks();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between my-2 px-3">
        <h2>MySQL CRUD opration</h2>
        <Button color="primary" onClick={() => setModal(true)}>
          Add Book
        </Button>
      </div>
      <Card outline>
        <CardBody>
          <Table hover striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Book</th>
                <th>desciption</th>
                <th>Cover</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {books.length > 0 &&
                books.map((obj, i) => {
                  return (
                    <tr key={obj.id}>
                      <td>{i + 1}</td>
                      <td>{obj.title}</td>
                      <td>{obj.decs}</td>
                      <td>{obj.cover}</td>
                      <td>
                        <span
                          style={{ cursor: "pointer" }}
                          className="text-primary"
                          onClick={() => openUpdateModal(obj.id)}
                        >
                          Update
                        </span>
                      </td>
                      <td>
                        <span
                          className="text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDelete(obj.id)}
                        >
                          Del
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <Modal isOpen={modal} centered>
        <ModalHeader toggle={() => setModal(!modal)}></ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="title">Book Name</Label>
              <Input
                id="title"
                name="title"
                value={book.title}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="desc">Book discription</Label>
              <Input
                id="desc"
                name="decs"
                value={book.decs}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="cover">Book Cover page</Label>
              <Input
                id="cover"
                name="cover"
                value={book.cover}
                onChange={handleChange}
              />
            </FormGroup>
            <div className="d-flex justify-content-end">
              <Button type="submit" color="primary">
                Add
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
      <Modal isOpen={updateModal} centered>
        <ModalHeader toggle={openUpdateModal}></ModalHeader>
        <ModalBody>
          <Form onSubmit={handleUpdate}>
            <FormGroup>
              <Label htmlFor="title">Book Name</Label>
              <Input
                id="title"
                name="title"
                value={book.title}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="desc">Book discription</Label>
              <Input
                id="desc"
                name="decs"
                value={book.decs}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="cover">Book Cover page</Label>
              <Input
                id="cover"
                name="cover"
                value={book.cover}
                onChange={handleChange}
              />
            </FormGroup>
            <div className="d-flex justify-content-end">
              <Button type="submit" color="primary">
                Add
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Books;
