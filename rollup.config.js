import cleanup from 'rollup-plugin-cleanup';

export default {
    input: 'src/lib.js',
    output: {
        file: 'lib/lib.js',
        format: 'esm'
    },
    plugins: [
        cleanup()
    ]
};
