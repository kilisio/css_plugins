"use strict";

// imports

// height plugin function
export function y(...args){
    var canvas_height = args[0];
    var height = args[1];

    height = (height / canvas_height) * 100;

    return height + 'vh';
}


// // y_func html object
// export var y_func_html = {
//     _include:[
//
//     ]
// };
//
// // y_func component
// export function y_func(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(y_func_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '#y_func':[
//
//             ],
//             '.y_func': {
//                 margin: 0,
//                 padding: 0,
//                 height: y(768, 670)
//             }
//         },
//         html:{
//             'div#y_func.y_func': [
//                 nested_html_components
//             ]
//
//         }
//
//     };
// }
//
// // y_func html page layout
// var absurd = require("absurd");
// var component_name = 'y_func';
//
// //component imports
//
// export var y_func_layout = function(){
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
// 				_include: y_func()
// 			}
// 		}
// 	};
// };
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(y_func_layout()).compileFile(html_file);
// 	api.morph("component").add(y_func_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(y_func()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(y_func_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(y_func_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
