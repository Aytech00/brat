
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";


export default function DefaltLayout() {
  return (
    <div>
      <div>
        <Nav />
      </div>
   
      <main className="min-h-screen">
        <Outlet />
      </main>

      <div>
      <Footer />
      </div>

      <ScrollRestoration />
    </div>
  );
}
