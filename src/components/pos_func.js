"use strict";

//imports


//functions
export function pos(...args){
    var identifier = args[0];
    var orientation = args[1];
    var position = args[2];
    var canvas_width = args[3];
    var canvas_height = args[4];
    var left = args[5];
    var top = args[6];
    var parent_left = args[7];
    var parent_top = args[8];

    if(position === 'relative'){
        top = ((top / canvas_height) * 100)/canvas_width;
        left = ((left / canvas_width) * 100)/canvas_height;
    }else if(position === 'absolute'){
        top = (((top - parent_top) / canvas_height) * 100)/canvas_width;
        left = (((left - parent_left) / canvas_width) * 100)/canvas_height;
    }

    if(orientation === 'landscape'){
        return `
            @element html and (min-width: 769px) and (orientation: landscape){
                ` + identifier + ` {
                    position: ` + position + `;
                    top: eval("` + top + ` * window.innerWidth")vh;
                    left: eval("` + left + ` * window.innerHeight")vw;
                }
            }
        `;
    }else if(orientation === 'portrait'){
        return `
            @element html and (min-width: 769px) and (orientation: portrait){
                ` + identifier + ` {
                    position: ` + position + `;
                    top: eval("` + top + ` * window.innerWidth")vh;
                    left: eval("` + left + ` * window.innerHeight")vw;
                }
            }
        `;
    }else if(orientation === 'landscape_small'){
        return `
            @element html and (max-width: 768px) and (orientation: landscape){
                ` + identifier + ` {
                    position: ` + position + `;
                    top: eval("` + top + ` * window.innerWidth")vh;
                    left: eval("` + left + ` * window.innerHeight")vw;
                }
            }
        `;
    }else if(orientation === 'portrait_small'){
        return `
            @element html and (max-width: 768px) and (orientation: portrait){
                ` + identifier + ` {
                    position: ` + position + `;
                    top: eval("` + top + ` * window.innerWidth")vh;
                    left: eval("` + left + ` * window.innerHeight")vw;
                }
            }
        `;
    }
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
//             pos('.pos_func', 'landscape', 'absolute', 1366, 768, 50, 50, 0, 0),
//             pos('.pos_func', 'portrait', 'absolute', 1366, 768, 50, 50, 0, 0),
//             pos('.pos_func', 'landscape_small', 'absolute', 1366, 768, 50, 50, 0, 0),
//             pos('.pos_func', 'portrait_small', 'absolute', 1366, 768, 50, 50, 0, 0)
//         ]
//     }
// };
//
// // pos_func html object
// export var pos_func_html = {
//     _include:[
//         style,
//         script
//     ]
// };
//
// //// pos_func css object
// //export var pos_func_css = {
// //	
// //};
//
// // pos_func component
// export function pos_func(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(pos_func_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '#pos_func': {
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                 }
//             },
//             '.pos_func': {
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     width: '20vw',
//                     height: '20vh',
//                     'background-color': 'red'
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                     margin: 0,
//                     padding: 0,
//                     width: '20vw',
//                     height: '20vh',
//                     'background-color': 'green'
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     width: '20vw',
//                     height: '20vh',
//                     'background-color': 'orange'
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                     margin: 0,
//                     padding: 0,
//                     width: '20vw',
//                     height: '20vh',
//                     'background-color': 'blue'
//                 }
//             }
//         },
//         html:{
//             'div#pos_func.pos_func': [
//                 nested_html_components
//             ]
//
//         }
//         
//     };
// }
//     
//
// export var pos_func_nested_layout = function(){
// 	return pos_func();
// };
//
//
// // pos_func html page layout
// var component_name = 'pos_func';
// //var page_title = '';
//
//
// export var pos_func_page_layout = function(){
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
// 				_include: pos_func_nested_layout()
// 			}
// 		}
// 	};
// };
//
// // pos_func component test code
// var absurd = require("absurd");
//
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(pos_func_page_layout()).compileFile(html_file);
// 	api.morph("component").add(pos_func_page_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(pos_func()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(pos_func_page_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(pos_func_page_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
