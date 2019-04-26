"use strict";

export function positioning_plugin(...args){
    var position = args[0];
    var layout_design_canvas_width = args[1];
    var layout_design_canvas_height = args[2];
    var width = args[3];
    var height = args[4];
    var left = args[5];
    var top = args[6];
    var parent_top = args[7];
    var parent_left = args[8];
    width = (width / layout_design_canvas_width) * 100;
    height = (height / layout_design_canvas_height) * 100;

    if(position === 'relative'){
        top = (top / layout_design_canvas_width) * 100;
        left = (left / layout_design_canvas_height) * 100;
    }else if(position === 'absolute'){
        // top -= parent_top;
        // left -= parent_left;
        top = ((top - parent_top) / layout_design_canvas_height) * 100;
        left = ((left - parent_left) / layout_design_canvas_width) * 100;
    }


    return{
        position: position,
        left: left + 'vw',
        top: top + 'vh',
        width: width + 'vw',
        height: height + 'vh'
    };

};



// //plugin test
// var absurd = require("absurd");
//
// // plugin declaration
// // absurd().plugin('positioning_plugin', pos())
//
// var component_name = 'positioning_plugin';
// // component
// var component = function() {
//     return {
//         css:{
//             '#positioning_plugin':[
//                 positioning_plugin('absolute', 1366, 768, 600, 400, 50, 50, null, 50),
//             ],
//             '.positioning_plugin': {
//                 'background-color': 'black',
// 				margin: 0,
// 				paddin: 0
//             },
//             '#div_body': [
//                 positioning_plugin('relative', 1366, 768, 1366, 768, 0, 0, 0, 0)
//             ],
//             '.div_body':{
//                 'background-color': 'yellow',
// 				margin: 0,
// 				padding: 0
//             }
//         },
//         html:{
//             'div.positioning_plugin#positioning_plugin': {
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
