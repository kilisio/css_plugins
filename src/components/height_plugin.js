"use strict";

// imports

// height plugin function
export function height(...args){
    var canvas_height = args[0];
    var height = args[1];

    height = (height / canvas_height) * 100;

    return height + 'vh';
}


