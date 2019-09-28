"use strict";

// var media = {
//     laptop:{
//         landscape:{
//             orientation:'landscape',
//             max_width: null,
//             max_height: null,
//             min_width: 769,
//             min_height: null,
//             width: 1366,
//             height: 768
//         },
//         portrait:{
//             orientation: 'portrait',
//             max_width: null,
//             max_height: null,
//             min_width: 769,
//             min_height: null,
//             width: 768,
//             height: 1366
//         }
//     },
// };

// functions
export function xy(xy, media){
    let canvas = {...media},
        canvas_width = canvas.width,
        canvas_height = canvas.height,
        width,
        height;

    width = (xy / canvas_width) * 100;
    height = (xy / canvas_height) * 100;
	
	return {
		x: '' + width + 'vw',
        y: '' + height + 'vh'
	};
}



// // xy_func html object
// export var xy_func_html = {
//     _include:[
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
//             '.xy_func': {
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     'background-color': 'brown',
//                     width: xy(318.317, media.laptop.landscape).width,
//                     height: xy(397.003, media.laptop.landscape).height
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                     margin: 0,
//                     padding: 0,
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                     margin: 0,
//                     padding: 0,
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
//
// // xy_func component test code
// var absurd = require("absurd");
//
//
// absurd(function(api) {
// 	 // print to console
// 	// component
// 	api.morph("component").add(xy_func()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// });
