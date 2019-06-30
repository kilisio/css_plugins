"use strict";

// imports
// import * as html_partials from "html_partials_lib";
// import { pos } from "./pos_func.js";

// functions
export function scale(...args){
    var identifier = args[0]; 
    var orientation = args[1];
	var canvas_width_landscape = args[2];
    var canvas_height_landscape = args[3];
	var canvas_width_portrait = args[3];
    var canvas_height_portrait = args[2];
	
	if(orientation === 'landscape'){
    	return `
    	    @element html and (orientation: landscape){
    	        ` + identifier + ` {
    	                transform: scaleX(eval("window.innerWidth / ` + canvas_width_landscape + `")) scaleY(eval("window.innerHeight / ` + canvas_height_landscape + `"));
						transform-origin: left top;
    	        }
    	    }
    	`;
	}else if(orientation === 'portrait'){
    	return `
    	    @element html and (orientation: portrait){
    	        ` + identifier + ` {
    	                transform: scaleX(eval("window.innerWidth / ` + canvas_width_portrait + `")) scaleY(eval("window.innerHeight / ` + canvas_height_portrait + `"));
						transform-origin: left top;
    	        }
    	    }
    	`;
	}
}

// // html variables
// var skillset = [
//     html_partials.span('#', 'skillset_hash', 'hash'), 
//     html_partials.span('skill set', 'skillset', 'link_group')
// ];
//
// var projects = [
//     html_partials.span('#', 'projects_hash', 'hash'), 
//     html_partials.span('projects', 'projects', 'link_group')
// ];
//
//
//
// //inline scripts
// var script = {
//     script:{
//         _:[
//         ]
//     }
// };
//
// //inline css styles
// var style = {
//     style:{
//         _:[
//             scale('.scale_func', 'landscape', 1366, 768),
//             scale('.scale_func', 'portrait', 1366, 768)
//         ]
//     }
// };
//
// // scale_func html object
// export var scale_func_html = {
//     _include:[
//         style,
//         script,
//         html_partials.lists(
//             html_partials.links('./folio_view.html', skillset.join('')),
//             html_partials.links('./folio_view.html', '- Programming Languages', 'prog_lang_link', 'sub_link'),
//             html_partials.links('./development_environments_view.html', '- Development Environments', 'dev_env_link', 'sub_link'),
//             html_partials.links('./popular_libraries_modules_view.html', '- Popular Libraries and Modules', 'lib_mod_link', 'sub_link'),
//             html_partials.links('./general_computer_skills_view.html', '- General Computer Skills', 'gen_comp_link', 'sub_link'),
//             html_partials.links('./web_apps.html', projects.join('')),
//             html_partials.links('./web_apps.html', '- web applications', 'web_app_link', 'sub_link'),
//             html_partials.links('./graphics.html', '- graphics designs', 'graphic_design_link', 'sub_link'),
//             html_partials.links('./vim_plugins.html', '- vim plugins', 'vim_plug_link', 'sub_link'),
//             html_partials.links('./contributions.html', '- open source contributions', 'contrib_link', 'sub_link'),
//             html_partials.links('./photography.html', '- photography', 'photo_link', 'sub_link'),
//             html_partials.links('./electronics.html', '- electronics', 'elec_link', 'sub_link'),
//             html_partials.links('./metal_fabrication.html', '- metal fabrication', 'metal_fab_link', 'sub_link')
//         )
//     ]
// };
//
// // scale_func component
// export function scale_func(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(scale_func_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '@font-face': {
//                 'font-family': 'forced_squaremedium',
//                 'src': "url('./assets/fonts/forced_squaremedium/forced_square-webfont.eot?#iefix') format('embedded-opentype'), url('./assets/fonts/forced_squaremedium/forced_square-webfont.woff2') format('woff2'), url('./assets/fonts/forced_squaremedium/forced_square-webfont.woff') format('woff'), url('./assets/fonts/forced_squaremedium/forced_square-webfont.ttf') format('truetype'), url('./assets/fonts/forced_squaremedium/forced_square-webfont.svg#forced_squaremedium') format('svg')",
//                 'font-weight': 'normal',
//                 'font-style': 'normal',
//             },
//             '%%@font-face': {
//                 'font-family': 'felona_stmedium',
//                 'src': "url('./assets/fonts/felona_stmedium/felonast-medium-webfont.eot?#iefix') format('embedded-opentype'), url('./assets/fonts/felona_stmedium/felonast-medium-webfont.woff2') format('woff2'), url('./assets/fonts/felona_stmedium/felonast-medium-webfont.woff') format('woff'), url('./assets/fonts/felona_stmedium/felonast-medium-webfont.ttf') format('truetype'), url('./assets/fonts/felona_stmedium/felonast-medium-webfont.svg#felona_stmedium') format('svg')",
//                 'font-weight': 'normal',
//                 'font-style': 'normal'
//             },
// 			'%%.scale_func': {
// 				'@media (min-width: 769px) and (orientation: landscape)':[
// 					pos('landscape', 1366, 768, 20, 108, 0, 0),
// 				],
// 				'@media (min-width: 769px) and (orientation: portrait)':[
// 				],
// 				'@media (max-width: 768px) and (orientation: landscape)':[
// 				],
// 				'@media (max-width: 768px) and (orientation: portrait)':[
// 				]
// 			},
//             '#scale_func': {
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
//             '.scale_func': {
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     width: '318.317px',
//                     height: '397.003px',
//                     'background-color': '#1a0a00'
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                 }
//             },
//             '.hash':{
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     'margin-top': '5px',
//                     'margin-left': '5px',
//                     'font-size': '48px',
//                     'font-family': 'forced_squaremedium',
//                     color: '#ff6600'
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                 }
//             },
//             '.link_group':{
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     'margin-top': '5px',
//                     'margin-left': '5px',
//                     'font-size': '32px',
//                     'font-family': 'forced_squaremedium',
//                     color: '#fff0e6'
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                 }
//             },
//             '.sub_link': {
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     'margin-top': '5px',
//                     'margin-left': '20px',
//                     'font-family': 'felona_stmedium',
//                     'font-size': '17.3333px',
//                     color: '#fff0e6',
//                     ':hover':{
//                         color: '#ff6600'
//                     }
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                 }
//             },
//             ul:{
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     'list-style': 'none'
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                 },
//                 li:{
//                     '@media (min-width: 769px) and (orientation: landscape)':{
//                         margin: 0,
//                         padding: 0,
//                     },
//                     '@media (min-width: 769px) and (orientation: portrait)':{
//                     },
//                     '@media (max-width: 768px) and (orientation: landscape)':{
//                     },
//                     '@media (max-width: 768px) and (orientation: portrait)':{
//                     },
//                     a:{
//                         '@media (min-width: 769px) and (orientation: landscape)':{
//                             margin: 0,
//                             padding: 0,
//                             'text-decoration': 'none',
//                             display: 'inline-block',
//                             ':hover .hash': {
//                                 color: '#fff0e6'
//                             },
//                             ':hover .link_group':{
//                                 color: '#ff6600'
//                             }
//                         },
//                         '@media (min-width: 769px) and (orientation: portrait)':{
//                         },
//                         '@media (max-width: 768px) and (orientation: landscape)':{
//                         },
//                         '@media (max-width: 768px) and (orientation: portrait)':{
//                         },
//                         span: {
//                             '@media (min-width: 769px) and (orientation: landscape)':{
//                                 margin: 0,
//                                 padding: 0,
//                                 'vertical-align': 'middle',
//                                 display: 'inline-block'
//                             },
//                             '@media (min-width: 769px) and (orientation: portrait)':{
//                             },
//                             '@media (max-width: 768px) and (orientation: landscape)':{
//                             },
//                             '@media (max-width: 768px) and (orientation: portrait)':{
//                             }
//                         }
//                     }
//                 }
//             }
//         },
//         html:{
//             'div#scale_func.scale_func': [
//                 nested_html_components
//             ]
//         }
//     };
// }
//
// // scale_func html page layout
// var absurd = require("absurd");
// var component_name = 'scale_func';
//
// //component imports
//
// export var scale_func_layout = function(){
// 	return {
// 		_:"<!DOCTYPE html>",
// 		html: {
//             _attrs:{
//                 style: "width:100%;height:100%;"
//             },
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
//                     scale_func(), 
//                     '<script src="./assets/scripts/eqcss/EQCSS.min.js"></script>'
//                 ]
// 			},
// 		}
// 	};
// };
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(scale_func_layout()).compileFile(html_file);
// 	api.morph("component").add(scale_func_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(scale_func()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(scale_func_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(scale_func_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
