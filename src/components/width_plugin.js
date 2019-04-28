"use strict";

// imports

// width plugin function
export function width(...args){
    var canvas_width = args[0];
    var width = args[1];

    width = (width / canvas_width) * 100;

    return width + 'vw';
}

// // width_plugin html object
// export var width_plugin_html = {
//     _include:[
//
//     ]
// };
//
// // width_plugin component
// export function width_plugin(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(width_plugin_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '#width_plugin':[
//
//             ],
//             '.width_plugin': {
//                 margin: 0,
//                 padding: 0,
//                 width: width(1366, 67)
//
//             }
//         },
//         html:{
//             'div#width_plugin.width_plugin': [
//                 nested_html_components
//             ]
//
//         }
//
//     };
// }
//
// // width_plugin html page layout
// var absurd = require("absurd");
// var component_name = 'width_plugin';
//
// //component imports
//
// export var width_plugin_layout = function(){
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
// 				_include: width_plugin()
// 			}
// 		}
// 	};
// };
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(width_plugin_layout()).compileFile(html_file);
// 	api.morph("component").add(width_plugin_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(width_plugin()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(width_plugin_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(width_plugin_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
