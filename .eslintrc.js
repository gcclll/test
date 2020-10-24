module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/standard", "@vue/typescript"],
  rules: {
    "no-console":
      process.env.NODE_ENV === "production"
        ? ["error", { allow: ["warn", "error"] }]
        : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": "off",
    "comma-dangle": ["error", "always-multiline"],
    camelcase: "off",
    eqeqeq: ["error", "smart"],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
