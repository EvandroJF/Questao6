import React, { useEffect, useState } from "react";
import "./index.css";
import {
  Card,
  Row,
  Col,
  Dropdown,
  Table,
  ListGroup,
  Modal,
  Alert,
  Container,
} from "react-bootstrap";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Home() {
  const [dataCategorias, setCategorias] = useState([]);
  const [dataResumos, setResumos] = useState([]);

  const [show, setShow] = useState(false);
  const [seeAlert, setAlert] = useState(false);
  const [index, setIndex] = useState();

  useEffect(() => {
    async function getUser() {
      try {
        fetch("https://niketeste.herokuapp.com/categorias")
          .then((response) => response.json())
          .then((result) => setCategorias(result))
          .catch((error) => console.log("error", error));
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    async function getUser() {
      try {
        fetch("https://niketeste.herokuapp.com/resumo")
          .then((response) => response.json())
          .then((result) => setResumos(result))
          .catch((error) => console.log("error", error));
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);

  const ButtonRemover = async (index) => {
    const Items = data.filter((item, i) => i !== index);
    setCategorias([...Items]);
  };

  const handleClose = () => setShow(false);

  const showModal = (index) => {
    setShow(true);
    setIndex(index);
  };
  const handleDelete = (index) => {
    handleClose();
    ButtonRemover(index);
  };

  const data = [
    {
      title: "Alimentação",
      defaultValue: "Mensal",
      valor: 752.25,
      total: 248242.5,
    },
    {
      title: "Combustível",
      defaultValue: "Mensal",
      valor: 100,
      total: 6600,
    },
    {
      title: "Cultura",
      defaultValue: "Mensal",
      valor: 100,
      total: 33000,
    },

    {
      title: "Educação",
      defaultValue: "anual",
      valor: 1000,
      total: 330000,
    },
    {
      title: "Flexivel",
      defaultValue: "Mensal",
      valor: 120,
      total: 0,
    },
  ];

  const dataResumo = [
    {
      title: "Alimentação",
      defaultValue: "Díario",
    },
    {
      title: "Cultura",
      defaultValue: "Mensal",
    },
    {
      title: "Flexivel",
      defaultValue: "Quinzenal",
    },
    {
      title: "Home Office",
      defaultValue: "Mensal",
    },
    {
      title: "Mobilidade",
      defaultValue: "Mensal",
    },
    {
      title: "Saúde",
      defaultValue: "Mensal",
    },
  ];

  const colorsResumo = (item) => {
    switch (item) {
      case "Alimentação":
        return "#172643";
        break;
      case "Cultura":
        return "#1D335B";
        break;
      case "Flexivel":
        return "#005D80";
        break;
      case "Home Office":
        return "#00979B";
        break;
      case "Mobilidade":
        return "#59D091";
        break;
      case "Saúde":
        return "#E7FD7F";
        break;

      default:
        break;
    }
  };

  const colorsResumoIcon = (item) => {
    switch (item) {
      case "Alimentação":
        return "#E7FD7F";
        break;
      case "Cultura":
        return "#E7FD7F";
        break;
      case "Flexivel":
        return "#E7FD7F";
        break;
      case "Home Office":
        return "#E7FD7F";
        break;
      case "Mobilidade":
        return "#1D335B";
        break;
      case "Saúde":
        return "#1D335B";
        break;

      default:
        break;
    }
  };

  const colorsResumoText = (item) => {
    switch (item) {
      case "Alimentação":
        return "#fff";
        break;
      case "Cultura":
        return "#fff";
        break;
      case "Flexivel":
        return "#fff";
        break;
      case "Home Office":
        return "#fff";
        break;
      case "Mobilidade":
        return "#1D335B";
        break;
      case "Saúde":
        return "#1D335B";
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      {/* INICIO MODAL */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>“Deseja excluir essa categoria?"</Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              marginRight: 20,
              backgroundColor: "red",
              color: "#fff",
            }}
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button
            style={{
              marginRight: 20,
              backgroundColor: "#30D89D",
              borderColor: "#30D89D",
              color: "#fff",
            }}
            onClick={() => handleDelete(index)}
            variant="primary"
          >
            Remover
          </Button>
        </Modal.Footer>
      </Modal>

      {/* FINAL MODAL */}
      <Container fluid>
        <Row style={{ margin: 20 }}>
          {/* INICIO CATEGORIAS */}
          <Col xs={7} md={7}>
            <Card
              style={{
                overflow: "hidden",
                borderRadius: 8,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#FCFCFD",
                backgroundColor: "#FCFCFD",
              }}
            >
              <Row xs={5} md={7} style={{ alignItems: "center" }}>
                <Col xs={5} md={6}>
                  <p
                    className="ms-2 me-auto"
                    style={{
                      paddingLeft: 10,
                      paddingTop: 10,
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    <h3 className="h3">Categorias</h3>
                  </p>
                </Col>
                <Col
                  xs={5}
                  md={6}
                  style={{ justifyContent: "flex-end" }}
                  className="d-flex align-items-left"
                >
                  <Dropdown variant="bg-white" style={{ right: 0, width: 205 }}>
                    <Dropdown.Toggle
                      style={{
                        backgroundColor: "#ddd",
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "#000000",
                        textAlign: "left",
                      }}
                      variant="light"
                    >
                      Selecione um grupo
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Díario</Dropdown.Item>
                      <Dropdown.Item href="#">Mensal</Dropdown.Item>
                      <Dropdown.Item href="#">Quinzenal</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
              <Card.Body>
                <Table hover responsive="sm" borderless>
                  <thead
                    style={{
                      backgroundColor: "#EAECF0",
                      textAlign: "center",
                    }}
                  >
                    <tr>
                      <th className="thLeft">Categoria</th>
                      <th>Frequência</th>
                      <th>Valor</th>
                      <th className="thRight">Valor total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.defaultValue}</td>
                        <td>
                          {item.valor.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                        <td>
                          {item.total.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          {/* FINAL CATEGORIAS */}

          {/* INICIO RESUMO */}
          <Col xs={5} md={5}>
            {/* colar alert */}
            <Card className="cardStyleCol">
              <Card.Body>
                <h3 className="h3">Resumo</h3>
                <h6 className="h6">Gestores de área</h6>
                {seeAlert ? (
                  <>
                    <div class="alert alert-danger" role="alert">
                      <a>Erro ao excluir essa categoria</a>
                    </div>
                  </>
                ) : null}
                <ListGroup as="ol">
                  <>
                    {dataResumo.map((item, index) => (
                      <ListGroup.Item
                        key={index}
                        as="li"
                        className="d-flex justify-content-between align-items-center"
                        style={{
                          backgroundColor: colorsResumo(item.title),
                          borderColor: "#ffffff",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "left",
                            color: colorsResumoText(item.title),
                            width: "20%",
                          }}
                          className="ms-2 me-auto"
                        >
                          {item.title}
                        </div>
                        <Dropdown variant="bg-white" className="ms-2 me-auto">
                          <Dropdown.Toggle
                            style={{ width: 120 }}
                            variant="light"
                            id="dropdown-basic"
                          >
                            {item.defaultValue}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Díario
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Mensal
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Quinzenal
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <Button
                          onClick={() =>
                            item.defaultValue === "Mensal"
                              ? setAlert(true)
                              : showModal(index)
                          }
                          variant="link"
                        >
                          <DeleteIcon
                            size="24"
                            style={{ color: colorsResumoIcon(item.title) }}
                            color={"red"}
                          />
                        </Button>
                      </ListGroup.Item>
                    ))}
                  </>
                </ListGroup>

                {/* BUTTONS FINAL */}
                <Row xs={12} md={8} style={{ marginTop: 10 }}>
                  <Col xs={4} md={6}>
                    <Button
                      style={{
                        width: "100%",
                        padding: 13,
                        backgroundColor: "#172643",
                        color: "white",
                      }}
                      variant="primary"
                    >
                      ATIVAR CATEGORIA
                    </Button>
                  </Col>
                  <Col xs={4} md={6}>
                    <Button
                      style={{
                        width: "100%",
                        borderColor: "#98A2B3",
                        backgroundColor: "#98A2B3",
                        padding: 13,
                        color: "#ddd",
                      }}
                      disabled
                      variant="primary"
                    >
                      SALVAR ALTERAÇÕES
                    </Button>
                  </Col>
                </Row>
                {/* BUTTONS FINAL */}
              </Card.Body>
            </Card>
          </Col>
          {/* FINAL RESUMO */}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
