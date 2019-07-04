import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/index.js',
    format: 'cjs',
  },
  external: ['react', 'prop-types'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
