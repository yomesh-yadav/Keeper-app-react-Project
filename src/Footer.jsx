import React from "react";

const val = new Date();
const year = val.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright @ {year}</p>
    </footer>
  );
}

export default Footer;
