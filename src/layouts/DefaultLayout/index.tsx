import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header";
import { LayoutContainer } from "./styles";


// wrapper to all pages/router 

export function DefaultLayout() {
    return (
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    );
}