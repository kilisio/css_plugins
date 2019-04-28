"use strict";

// imports

// width plugin function
export function width(...args){
    var canvas_width = args[0];
    var width = args[1];

    width = (width / canvas_width) * 100;

    return width + 'vw';
}

