/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  process(src, filename, _config, _options) {
    return "module.exports = " + JSON.stringify(path.basename(filename)) + ";";
  },
};