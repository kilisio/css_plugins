"use strict";

// imports

// width plugin function
export function width(...args){
    var canvas_width = args[0];
    var width = args[1];

    width = (width / canvas_width) * 100;

    return width + 'vw';
}

// // x_func html object
// export var x_func_html = {
//     _include:[
//
//     ]
// };
//
// // x_func component
// export function x_func(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(x_func_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '#x_func':[
//
//             ],
//             '.x_func': {
//                 margin: 0,
//                 padding: 0,
//                 width: x(1366, 67)
//
//             }
//         },
//         html:{
//             'div#x_func.x_func': [
//                 nested_html_components
//             ]
//
//         }
//
//     };
// }
//
// // x_func html page layout
// var absurd = require("absurd");
// var component_name = 'x_func';
//
// //component imports
//
// export var x_func_layout = function(){
// 	return {
// 		_:"<!DOCTYPE html>",
// 		html: {
// 			head: {
// 				_include: [
// 					'<link rel="stylesheet" type="text/css" href="' + component_name + '.css"/>'
// 				],
// 				title: component_name 
// 			},
// 			body: {
// 				_attrs:{
// 					style: "margin:0;padding:0;"
// 				},
// 				_include: x_func()
// 			}
// 		}
// 	};
// };
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(x_func_layout()).compileFile(html_file);
// 	api.morph("component").add(x_func_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(x_func()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(x_func_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(x_func_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
