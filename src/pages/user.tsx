import { useEffect } from "react";
import Router from "next/router";
import { useAuth } from "../hooks/useAuth";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const UserAdm = dynamic(() => import("../components/UserAdm"), { ssr: false });
export default function App() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  }, [user]);

  return (
    <>
      <div className="bg-gradient-to-tr from-basicLight via-basic to-basicDark bg-no-repeat bg-cover min-h-screen min-w-screen">
        <Navbar />
        <UserAdm />
      </div>
    </>
  );
}
