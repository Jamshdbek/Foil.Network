import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import './scss/main.scss'
function Layout() {
  return (
    <div>
      <div className="header">
        <ul>
          <ol>

      <Link className="link" to={'/'}>Foil</Link>
          </ol>
          <ol>
      <Link className="link" to={'blog'}>Blog</Link>

          </ol>
          <ol>
      <Link className="link" to={'contactus'}>ContactUs</Link>

          </ol>

        </ul>
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
