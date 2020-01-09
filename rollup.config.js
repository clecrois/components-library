import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: "src/components/index.ts",
    external: ['styled-components'],
    globals: { 'styled-components': 'styled' },
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
          exclude: ["src/**/*.stories.tsx", "src/**/*.test.tsx"]
        }
      })
    ],
    output: [
      {
        file: "dist/index.js",
        format: "es",
        banner: "/* eslint-disable */"
      }
    ]
  }
];
