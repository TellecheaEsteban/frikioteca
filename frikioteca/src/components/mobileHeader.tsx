import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Image from "next/image";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex">
      <div>
        <IconButton
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <a href="/#events">
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-frikiWhite transition-all ease-in-out group-hover:w-full`}
              ></span>
              EVENTOS
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <a href="/#games">
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-frikiWhite transition-all ease-in-out group-hover:w-full`}
              ></span>
              LUDOTECA
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <a href="/#us">
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-frikiWhite transition-all ease-in-out group-hover:w-full`}
              ></span>
              NOSOTROS
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <a href="/#contact">
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-frikiWhite transition-all ease-in-out group-hover:w-full`}
              ></span>
              CONTACTO
            </a>
          </MenuItem>
        </StyledMenu>
      </div>
      <div className="w-full items-center flex justify-center">
        <a href="/">
          <Image
            src="/images/FKTlogo.svg"
            alt="Logo"
            width={60}
            height={60}
            priority
          />
        </a>
      </div>
    </div>
  );
}
