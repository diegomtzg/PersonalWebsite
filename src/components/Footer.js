import React from "react";
import Typography from "@material-ui/core/Typography";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="section footer fp-auto-height">
      <footer className="footer-div">
        <Socials />
        <div className="footer-text">
          <Typography component="h6" variant="h6">
            {`© ${new Date().getFullYear()} Diego Martinez`}
          </Typography>
        </div>
      </footer>
    </div>
  );
}
