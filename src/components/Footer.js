import React from "react";

import { FiGithub, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container ">
        <div className="row p-3">
          <div className="col-1">
            <i>
              <FiFacebook />
            </i>
          </div>
          <div className="col-1">
            <i>
              <FiGithub />
            </i>
          </div>
          <div className="col-1">
            <i>
              <FiInstagram />
            </i>
          </div>
          <div className="col-1">
            <i>
              <FiTwitter />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
