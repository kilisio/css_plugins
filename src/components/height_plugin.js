"use strict";

// imports

// height plugin function
export function height(...args){
    var canvas_height = args[0];
    var height = args[1];

    height = (height / canvas_height) * 100;

    return height + 'vh';
}


// // heigt_plugin html object
// export var heigt_plugin_html = {
//     _include:[
//
//     ]
// };
//
// // heigt_plugin component
// export function heigt_plugin(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(heigt_plugin_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '#heigt_plugin':[
//
//             ],
//             '.heigt_plugin': {
//                 margin: 0,
//                 padding: 0,
//                 height: height(768, 670)
//             }
//         },
//         html:{
//             'div#heigt_plugin.heigt_plugin': [
//                 nested_html_components
//             ]
//
//         }
//         
//     };
// }
//
// // heigt_plugin html page layout
// var absurd = require("absurd");
// var component_name = 'heigt_plugin';
//
// //component imports
//
// export var heigt_plugin_layout = function(){
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
// 				_include: heigt_plugin()
// 			}
// 		}
// 	};
// };
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(heigt_plugin_layout()).compileFile(html_file);
// 	api.morph("component").add(heigt_plugin_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(heigt_plugin()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(heigt_plugin_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(heigt_plugin_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
