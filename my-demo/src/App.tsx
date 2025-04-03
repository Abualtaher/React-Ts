import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import FormPage from "./pages/FormPage";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            React TS Demo{" "}
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
