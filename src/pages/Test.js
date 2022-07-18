import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../BG1.svg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Topbar from "../templates/Topbar";
export default function Test() {
  const navigate = useNavigate();
  return (
    <>
      <h3 class="text-dark p-3">RESPONSIVE SIDEBAR NAV 💻 📱</h3>
      <p class="px-3">
        Responsive navigation sidebar built using{" "}
        <a class="text-dark" href="https://getbootstrap.com/">
          Bootstrap 5
        </a>
        .
      </p>
      <p class="px-3">
        <a href="https://github.com/harshitjain-hj" class="text-dark">
          Checkout my Github
        </a>
      </p>
    </>
  );
}
