import * as React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import logo from "../images/dcslogo.png";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = [
  "Inicio",
  "¿Quienes Somos?",
  "Voluntarios",
  "Novedades",
  "Capacitaciones",
  "Clima",
];
const BoxHeader = styled(
  styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }))
)`
  display: flex;
  flex-direction: row;
  height: 130px;
  position: fixed;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 1;
  width: 100%;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > div > img {
    width: 110px;
    height: 110px;
    margin: 0.6rem;
  }
  > div > h1 {
    color: #f2f2f2;
    font-size: 2rem;
    width: 350px;
    font-weight: bold;
    text-align: start;
    text-transform: uppercase;
    margin-left: 0.5rem;
    line-height: 1.2;
  }
  nav {
    box-shadow: none;
    outline: none;
    border: none;
    justify-content: flex-end;
    z-index: -1;
  }
  nav > div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: -1;
  }
  nav button {
    font-size: 0.8rem;
  }
  nav button:hover {
    color: #63a1f2;
  }
  @media (max-width: 750px) {
    align-items: center;
  }

  @media (max-width: 450px) {
    > div > h1 {
      width: unset;
      font-size: 1.5rem;
      flex-wrap: nowrap;
    }
    > div > img {
      width: 80px;
      height: 80px;
    }
    > div {
      width: auto;
      justify-content: flex-start;
    }
    > nav {
      position: static;
    }
    justify-content: space-around;
  }
`;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} component="header">
      <BoxHeader>
        <div>
          <img src={logo} alt="ada" /> <h1>Defensa Civil Saladillo</h1>
        </div>
        <AppBar
          component="nav"
          sx={{ position: "inherit", width: "auto", top: "inherit" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </BoxHeader>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
