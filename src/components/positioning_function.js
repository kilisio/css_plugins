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
// // absurd().plugin('positioning_function', pos())
//
// var component_name = 'positioning_function';
// // component
// var component = function() {
//     return {
//         css:{
//             '#positioning_function':[
//                 positioning_function('absolute', 1366, 768, 600, 400, 50, 50, null, 50),
//             ],
//             '.positioning_function': {
//                 'background-color': 'black',
// 				margin: 0,
// 				paddin: 0
//             },
//             '#div_body': [
//                 positioning_function('relative', 1366, 768, 1366, 768, 0, 0, 0, 0)
//             ],
//             '.div_body':{
//                 'background-color': 'yellow',
// 				margin: 0,
// 				padding: 0
//             }
//         },
//         html:{
//             'div.positioning_function#positioning_function': {
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
// 				_attrs:{
// 					style: "margin:0;padding:0;"
// 				},
//                 'div#div_body.div_body':{
//                     _include: component().html
//                 }
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
