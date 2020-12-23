import React from "react";
import Typography from "@material-ui/core/Typography";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="section fp-auto-height">
      <footer className="footer">
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
