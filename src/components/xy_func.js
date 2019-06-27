"use strict";

// imports


// functions
export function xy(...args){
    var orientation = args[0];
    var canvas_width_landscape = args[1];
    var canvas_height_landscape = args[2];
    var canvas_width_portrait = args[2];
    var canvas_height_portrait = args[1];
    var width = args[3];
    var height = args[4];

	if(orientation === 'landscape'){
		width = (width / canvas_width_landscape) * 100;
        height = (height / canvas_height_landscape) * 100;
	}else if(orientation === 'portrait'){
		width = (width / canvas_width_portrait) * 100;
        height = (height / canvas_height_portrait) * 100;
	}
	
	return {
		width: '' + width + 'vw',
        height: '' + height + 'vh'
	};
}


// // css variables
//
//
// // element queries
//
//
// // html variables
//
//
// //inline script
// var script = {
//     script:{
//         _include:[
//
//         ]
//     }
// };
//
// //inline css styles
// var style = {
//     style:{
//         _include:[
//
//         ]
//     }
// };
//
// // xy_func html object
// export var xy_func_html = {
//     _include:[
//         style,
//         script
//     ]
// };
//
// //// xy_func css object
// //export var xy_func_css = {
// //	
// //};
//
// // xy_func component
// export function xy_func(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(xy_func_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '%%#xy_func': {
//                 '@media (min-width: 769px) and (orientation: landscape)':[
//                     xy('landscape', 1366, 768, 318.317, 397.003)
//                 ],
//                 '@media (min-width: 769px) and (orientation: portrait)':[
//                 ],
//                 '@media (max-width: 768px) and (orientation: landscape)':[
//                 ],
//                 '@media (max-width: 768px) and (orientation: portrait)':[
//                 ]
//             },
//             '#xy_func': {
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                 }
//             },
//             '.xy_func': {
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     'transform-origin': 'left top',
//                     'background-color': 'brown',
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                     margin: 0,
//                     padding: 0,
//                     'transform-origin': 'left top'
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     'transform-origin': 'left top'
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                     margin: 0,
//                     padding: 0,
//                     'transform-origin': 'left top'
//                 }
//             }
//         },
//         html:{
//             'div#xy_func.xy_func': [
//                 nested_html_components
//             ]
//
//         }
//         
//     };
// }
//     
//
// export var xy_func_nested_layout = function(){
// 	return xy_func();
// };
//
//
// // xy_func html page layout
// var component_name = 'xy_func';
// //var page_title = '';
//
//
// export var xy_func_page_layout = function(){
// 	return {
// 		_:"<!DOCTYPE html>",
// 		html: {
// 			_attrs:{
// 				style: "width:100%;height:100%;"
// 			},
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
// 				_include: [ 
// 					xy_func_nested_layout(),
// 					'<script src="./assets/scripts/eqcss/EQCSS.min.js"></script>'
// 				]
// 			}
// 		}
// 	};
// };
//
// // xy_func component test code
// var absurd = require("absurd");
//
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(xy_func_page_layout()).compileFile(html_file);
// 	api.morph("component").add(xy_func_page_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(xy_func()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(xy_func_page_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(xy_func_page_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
