import React from "react";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.instagram.com/s_h_a_n_n____1/"
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
       <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/shanmugaraj-durairajan/"
        className="home_social-icon"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/shanmugarajshan/"
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
