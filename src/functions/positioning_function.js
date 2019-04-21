"use strict";

export var positioning = function(...args){
    var position = args[0];
    var layout_design_canvas_width = args[1];
    var layout_design_canvas_height = args[2];
    var width = args[3];
    var height = args[4];
    var left = args[5];
    var top = args[6];
    width = (width / layout_design_canvas_width) * 100;
    height = (height / layout_design_canvas_height) * 100;

    // if(position === 'relative'){
    //     console.log(position);
    // }else if(position==='absolute'){
    //     console.log(position);
    // }

    return{
        position: position,
        left: left + 'px',
        top: top + 'px',
        width: width + 'vw',
        height: height + 'vh'
    };

};



// //plugin test
// var absurd = require("absurd");
//
// // plugin declaration
// // absurd().plugin('positioning', pos())
//
// var component_name = 'positioning';
// // component
// var component = function() {
//     return {
//         css:{
//             '#positioning':[
//                 positioning('relative', 600, 400, 600, 400, 0, 0),
//             ],
//             '.positioning': {
//                 'background-color': 'black'
//             }
//         },
//         html:{
//             'div.positioning#positioning': {
//
//             }
//         }
//     };
// };
//
// // component html page layout
//
// var component_layout = function(){
//     return {
//         _:"<!DOCTYPE html>",
//         html: {
//             head: {
//                 _include: [
//                     '<link rel="stylesheet" type="text/css" href="' + component_name + '.css"/>'
//                 ],
//                 title: component_name 
//             },
//             body: {
//                 _include: component().html
//             }
//         }
//     };
// };
//
// absurd(function(api) {
//     // print to file
//     var css_file = "./" + component_name + ".css";
//     var html_file = "./" + component_name + ".html";
//     api.morph("html").add(component_layout()).compileFile(html_file);
//     api.morph("component").add(component()).compileFile(css_file);
//
//    // print to console
//     api.morph("component").add(component()).compile(function(err, css, html) {
//         console.log(css);
//         console.log(html);
//     });
// });
//
