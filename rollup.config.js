import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: "src/components/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "es",
        banner: "/* eslint-disable */"
      }
    ],
    plugins: [
      typescript({
        typescript: require("typescript"),
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            allowJs: false,
            isolatedModules: false
          },
          include: ["src/components"],
        }
      })
    ],
    external: ['styled-components'],
    globals: { 'styled-components': 'styled' },
  }
];
