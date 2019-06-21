"use strict";

// imports


// functions
export function fontsize(...args){
    var identifier = args[0]; 
	var canvas_width = args[1];
    var canvas_height = args[2];
    var fontsize_landscape = args[3] || 16;
    var fontsize_portrait = args[4] || 16;
    var fontsize_landscape_small = args[5] || 16;
    var fontsize_portrait_small = args[6] || 16;

    fontsize_landscape = ((fontsize_landscape / canvas_height) * 100)/(canvas_width/canvas_height);
    fontsize_portrait = ((fontsize_portrait / canvas_width) * 100)/(canvas_height/canvas_width);
    fontsize_landscape_small = ((fontsize_landscape_small / canvas_height) * 100)/(canvas_width/canvas_height);
    fontsize_portrait_small = ((fontsize_portrait_small / canvas_width) * 100)/(canvas_height/canvas_width);
    

	return `
        @element html and (min-width: 769px) and (orientation: landscape){
	    	` + identifier + ` {
                font-size: eval("` + fontsize_landscape + ` * (window.innerWidth/window.innerHeight)")vh;
	    	}
        }
        @element html and (min-width: 769px) and (orientation: portrait){
	    	` + identifier + ` {
                font-size: eval("` + fontsize_portrait + ` * (window.innerWidth/window.innerHeight)")vh;
	    	}
        }
        @element html and (max-width: 768px) and (orientation: landscape){
	    	` + identifier + ` {
                font-size: eval("` + fontsize_landscape_small + ` * (window.innerWidth/window.innerHeight)")vh;
			}
        }
        @element html and (max-width: 768px) and (orientation: portrait){
	    	` + identifier + ` {
                font-size: eval("` + fontsize_portrait_small + ` * (window.innerWidth/window.innerHeight)")vh;
	    	}
        }
	`;
}


// // css variables
//
//
// // element queries
//
//
// // html variables
// var p_1 = {
//     'p.text': 'this is a test'
// };
//
// //internal css styles
// var style = {
//     style:{
//         _include:[
//             fontsize('.text', 1366, 768, 100, 70, 50, 30),
//         ]
//     }
// };
//
// // font_size_func html object
// export var font_size_func_html = {
//     _include:[
//         style,
//         p_1
//     ]
// };
//
// //// font_size_func css object
// //export var font_size_func_css = {
// //	
// //};
//
// // font_size_func component
// export function font_size_func(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(font_size_func_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '#font_size_func': {
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                 }
//             },
//             '.font_size_func': {
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                 }
//             },
//             '.text': {
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     color: 'red'
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                     color: 'green'
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                     color: 'orange'
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                     color: 'blue'
//                 }
//             }
//         },
//         html:{
//             'div#font_size_func.font_size_func': [
//                 nested_html_components
//             ]
//         }
//     };
// }
//
//
// export var font_size_func_nested_layout = function(){
// 	return font_size_func();
// };
//
//
// // font_size_func html page layout
// var component_name = 'font_size_func';
// //var page_title = '';
//
//
// export var font_size_func_page_layout = function(){
// 	return {
// 		_:"<!DOCTYPE html>",
// 		html: {
// 			_attrs:{
// 				style: "width:100%;height:100%;"
// 			},
// 			head: {
// 				_include: [
// 					'<link rel="stylesheet" type="text/css" href="' + component_name + '.css"/>',
// 					'<script src="./assets/scripts/eqcss/EQCSS.min.js"></script>'
// 				],
// 				title: component_name 
// 			},
// 			body: {
// 				_attrs:{
// 					style: "margin:0;padding:0;"
// 				},
// 				_include: font_size_func_nested_layout()
// 			}
// 		}
// 	};
// };
//
// // font_size_func component test code
// var absurd = require("absurd");
//
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(font_size_func_page_layout()).compileFile(html_file);
// 	api.morph("component").add(font_size_func_page_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(font_size_func()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(font_size_func_page_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(font_size_func_page_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
