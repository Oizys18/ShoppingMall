const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        // as you know, CRA doesn't allow to modify tsconfig's compilerOptions
        // so you should create a separate JSON file and extend tsconfig.json from it
        // and then just specify its path here:
        jsConfigPath: "jsconfig.json",
      },
    },
  ],
};
