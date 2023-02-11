module.exports = {
    plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
    pluginSearchDirs: false,
    printWidth: 100,
    tabWidth: 4,
    "importOrder": ["<THIRD_PARTY_MODULES>", "^[./]"],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    proseWrap: "always",
};

