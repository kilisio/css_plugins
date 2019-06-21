"use strict";

export function pos(...args){
    var position = args[0];
    var canvas_width = args[1];
    var canvas_height = args[2];
    var left = args[3];
    var top = args[4];
    var parent_left = args[5];
    var parent_top = args[6];

    if(position === 'relative'){
        top = (top / canvas_width) * 100;
        left = (left / canvas_height) * 100;
    }else if(position === 'absolute'){
        top = ((top - parent_top) / canvas_height) * 100;
        left = ((left - parent_left) / canvas_width) * 100;
    }


    return{
        position: position,
        left: left + 'vw',
        top: top + 'vh',
    };

}



// //plugin test
// var absurd = require("absurd");
//
// // plugin declaration
// // absurd().plugin('pos_func', pos())
//
// var component_name = 'pos_func';
// // component
// var component = function() {
//     return {
//         css:{
//             '#pos_func':[
//                 positioning('absolute', 1366, 768, 600, 400, 50, 50, null, 50),
//             ],
//             '.pos_func': {
//                 'background-color': 'black',
// 				margin: 0,
// 				paddin: 0
//             },
//             '#div_body': [
//                 positioning('relative', 1366, 768, 1366, 768, 0, 0, 0, 0)
//             ],
//             '.div_body':{
//                 'background-color': 'yellow',
// 				margin: 0,
// 				padding: 0
//             }
//         },
//         html:{
//             'div.pos_func#pos_func': {
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