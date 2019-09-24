import clear from 'rollup-plugin-clear';
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

export default {
    input: 'src/lib.js',
    output: {
        file: 'lib/lib.js',
        format: 'esm'
    },
    plugins: [
        clear({
            targets: ['rls'],
        }),
        resolve(),
        commonJS({
              include: 'node_modules/**'
        }),
        cleanup(),
        copy({
            targets: [
                {
                    src: [
                        'src/assets',
                        'src/db',
                        'src/templates',
                        'src/log',
                        'src/api.js'
                    ], 
                    dest: 'lib'
                }
            ]
        })
    ]
};
