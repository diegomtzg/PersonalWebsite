import React from "react";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="section footer fp-auto-height">
      <footer className="footer-div">
        <Socials />
        <h6 className="footer-text">{`© ${new Date().getFullYear()} Diego Martinez`}</h6>
      </footer>
    </div>
  );
}
