import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Router from "next/router";
import { supabase } from "../utils/supabase";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  }

  function goUser(location: string) {
    Router.push(location);
  }

  return (
    <div>
      <button
        className="text-black text-[16px] capitalize border-[1px] bg-white rounded-[30px] px-3 py-1 font-bold hover:bg-white"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Conta
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a onClick={() => goUser("user")}>Minha Conta</a>
        </MenuItem>
        <MenuItem onClick={signOut}>
          <a>Sair</a>
        </MenuItem>
      </Menu>
    </div>
  );
}
