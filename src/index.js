import "bootstrap";
import "regenerator-runtime";
import "./assets/scss/style.scss";

import "./script/component/page-loader.js";
import "./script/component/page-header.js";
import "./script/component/page-footer.js";
import main from "./script/main.js";

document.addEventListener("DOMContentLoaded", main);
