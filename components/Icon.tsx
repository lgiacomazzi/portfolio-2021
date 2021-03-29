const { readdirSync } = require("fs");

// some helpful functions
const isSVG = (file) => /.svg$/.test(file);
const removeExtension = (file) => file.split(".")[0];
const toPascalCase = (string) =>
  string
    .match(/[a-z]+/gi)
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join("");

// getting all the icons
const icons = readdirSync("../svg/icons").filter(isSVG).map(removeExtension);

const indexContent = [
  "import React from 'react';",
  "import Icon from './Icon';",
  "",
  icons
    .map(
      (icon) =>
        `export const ${toPascalCase(
          icon
        )} = props => <Icon {...props} name="${icon}" />;`
    )
    .join("\n"),
].join("\n");

writeFileSync(`src/components/Icon/index.js`, indexContent);
console.log("Icon component file created! ✅");

export {};
