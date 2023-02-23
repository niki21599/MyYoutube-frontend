import React from "react";
import "./Navbar.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: "16px",
  width: "calc(100% - 50px)",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "-moz-available",
    maxWidth: "450px",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `1em`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "inherit",
    },
  },
}));

export default function Navbar({ search }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const searchVideos = () => {
    search(searchQuery);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/videoflix_frontend/impressum" className="noDecoration">
        <MenuItem onClick={handleMenuClose}>Impressum</MenuItem>
      </Link>
      <Link to="/videoflix_frontend/datenschutz" className="noDecoration">
        <MenuItem onClick={handleMenuClose}> Datenschutz</MenuItem>
      </Link>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "green" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link to="/videoflix_frontend/" c>
            <img
              src="/videoflix_frontend/img/logo.png"
              alt="logo"
              className="logo-img"
            />
          </Link>

          <Search className="space-between">
            <StyledInputBase
              className="inherit"
              placeholder="Search Videos"
              value={searchQuery}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <IconButton
              sx={{
                color: "white",
                borderLeft: "1px solid lightgray",
                borderRadius: "0",
                paddingLeft: "8px",
                paddingRight: "8px",
                width: "60px",
              }}
              onClick={() => searchVideos()}
            >
              <SearchIcon sx={{ paddingLeft: "8px", paddingRight: "8px" }} />
            </IconButton>
          </Search>

          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
