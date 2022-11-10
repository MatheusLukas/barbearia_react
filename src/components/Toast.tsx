import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toast() {
  const senhaErrada = () => toast("Senha Errada!");

  return (
    <div>
      <ToastContainer />
    </div>
  );
}
