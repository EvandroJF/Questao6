import * as React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SearchIcon from "@mui/icons-material/Search";
import { Navbar, Form, Button, InputGroup } from "react-bootstrap";

import Home from "../pages/home";
import "./../components/index.css";

const drawerWidth = 250;

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  // alterar o styles por index.css
  return (
    <Box
      className="Box"
      sx={{ display: "flex", backgroundColor: "#eee", height: "100vh" }}
    >
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Navbar style={{ paddingBottom: 180, backgroundColor: "#162542" }}>
          <Form
            style={{
              width: 400,
              marginLeft: 40,
              marginTop: 10,
            }}
            className="d-flex"
          >
            <InputGroup className="d-flex">
              <Form.Control
                style={{
                  backgroundColor: "#2A457A",
                  borderColor: "#2A457A",
                  color: "#fff",
                }}
                placeholder="Pesquisar"
              />
              <Button
                style={{
                  backgroundColor: "#2A457A",
                  borderColor: "#2A457A",
                  border: "none",
                }}
              >
                <SearchIcon style={{ marginTop: -5 }} color="primary" />
              </Button>
            </InputGroup>
          </Form>
        </Navbar>

        <Home />
      </Box>
    </Box>
  );
}
