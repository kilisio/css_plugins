"use strict";

// // IMPORTS
// import * as html_partials from "html_partials_lib";
// import { pos } from "./pos_func.js";
//
//
// // SCRIPTS
// var eqcss = {
// 	script:{
// 		_attrs:{
// 			src: './assets/scripts/eqcss/EQCSS.min.js'
// 		}
// 	}
// };


// FUNCTIONS
export function scale(identifier, devices){
    var scales = [];
    for(let i in devices){
        if(devices.hasOwnProperty(i)){
            let device_scaling = `
                @element html and (orientation: landscape) and (max-width: ` + devices[i].max_width + `px) and (min-width: ` + devices[i].min_width + `px){
                    ` + identifier + ` {
                            transform: scaleX(eval('window.innerWidth / ` + devices[i].width + `')) scaleY(eval("window.innerHeight / ` + devices[i].height + `"));
                            transform-origin: left top;
                    }
                }
                @element html and (orientation: portrait) and (max-width: ` + devices[i].max_width + `px) and (min-width: ` + devices[i].min_width + `px){
                    ` + identifier + ` {
                            transform: scaleX(eval('window.innerWidth / ` + devices[i].width + `')) scaleY(eval("window.innerHeight / ` + devices[i].height + `"));
                            transform-origin: left top;
                    }
                }
            `;

            scales.push(device_scaling);
        }
    }

    return scales.join('');

}


// // CSS VARIABLES
//
//
//
// // HTML INLINE SCRIPT VARIABLES
//
//
//
// // HTML ATTRIBUTE OBJECT
// var responsive = {
//     laptop:{
//         width: 1366,
//         height: 768,
//         max_width: 1366,
//         min_width: 769
//     },
//     phablet:{
//         width: 768,
//         height: 432,
//         max_width: 768,
//         min_width: 320
//     }
// };	
//
//
//
//
// // HTML VARIABLES
// var inline_script = {
//     'script[type="text/javascript"]':{
//         _:[
//
//         ]
//     }	
// };
//
// var inline_style = {
//     style:{
//         _include:[
//             scale('.scale_func', responsive),
//         ]
//     }
// };
//
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
// // HTML OBJECT
// export var scale_func_html = {
//     _include:[
//         inline_style,
//         inline_script,
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
//
//
// //// CSS OBJECT
// //export var scale_func_base_css = {
// //};
// //export var scale_func_component_css = {
//     //'@media (min-width: 769px) and (orientation: landscape)':{
//     //	margin: 0,
//     //	padding: 0
//     //},
//     //'@media (min-width: 769px) and (orientation: portrait)':{
//     //	margin: 0,
//     //	padding: 0
//     //},
//     //'@media (max-width: 768px) and (orientation: landscape)':{
//     //	margin: 0,
//     //	padding: 0
//     //},
//     //'@media (max-width: 768px) and (orientation: portrait)':{
//     //	margin: 0,
//     //	padding: 0
//     //}
// //};
//
// // COMPONENT
// export function scale_func(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(scale_func_html);
//     }else{
//         nested_html_components._include.push(scale_func_html);
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
//             '%base%': [
//             ],
//             '%component%.scale_func': [
//             ],
//             '%%.scale_func': {
//                 '@media (min-width: 769px) and (orientation: landscape)':[
// 					pos('landscape', 1366, 768, 20, 108, 0, 0),
//                 ],
//                 '@media (min-width: 769px) and (orientation: portrait)':[
//                 ],
//                 '@media (max-width: 768px) and (orientation: landscape)':[
// 					pos('landscape', 768, 432, 12, 76, 0, 0),
//                 ],
//                 '@media (max-width: 768px) and (orientation: portrait)':[
//                 ]
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
//                     margin: 0,
//                     padding: 0
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     width: '243px',
//                     height: '309px',
//                     'background-color': '#1a0a00'
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                     margin: 0,
//                     padding: 0
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
//                     margin: 0,
//                     padding: 0,
//                     'margin-top': '5px',
//                     'margin-left': '5px',
//                     'font-size': '40px',
//                     'font-family': 'forced_squaremedium',
//                     color: '#ff6600'
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
//                     margin: 0,
//                     padding: 0,
//                     'margin-top': '5px',
//                     'margin-left': '5px',
//                     'font-size': '28px',
//                     'font-family': 'forced_squaremedium',
//                     color: '#fff0e6'
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
//                     margin: 0,
//                     padding: 0,
//                     'margin-top': '5px',
//                     'margin-left': '20px',
//                     'font-family': 'felona_stmedium',
//                     'font-size': '14px',
//                     color: '#fff0e6',
//                     ':hover':{
//                         color: '#ff6600'
//                     }
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
//                     margin: 0,
//                     padding: 0,
//                     'list-style': 'none'
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
//                         margin: 0,
//                         padding: 0,
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
//                                 margin: 0,
//                                 padding: 0,
//                                 'vertical-align': 'middle',
//                                 display: 'inline-block'
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
//
//         }
//
//     };
// }
//
//
// // HTML PAGE LAYOUT
//
// export var scale_func_nested_layout = function(){
// 	return scale_func();
// };
//
// var component_name = 'scale_func';
// //var page_title = '';
//
//
// export function scale_func_page_layout(){
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
// 					scale_func_nested_layout(),
// 					eqcss
// 				]
// 			}
// 		}
// 	};
// }
//
//
// // ABSURD JS CONSOLE AND FILE TEST CODE
// var absurd = require("absurd");
//
//
// absurd(function(api) {
// 	// // print to file
// 	// var css_file = "./" + component_name + ".css";
// 	// var html_file = "./" + component_name + ".html";
// 	// api.morph("html").add(scale_func_page_layout()).compileFile(html_file);
// 	// api.morph("component").add(scale_func_page_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// // component
// 	// api.morph("component").add(scale_func()).compile(function(err, css, html) {
// 	//		console.log(css);
// 	//		console.log(html);
// 	// });
// 	// component layout
// 	api.morph("component").add(scale_func_page_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(scale_func_page_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
//
//
//
// // EXPRESS MIDDLEWARES
// var scale_func_page_css, scale_func_page_html;
//
// absurd().morph("component").add(scale_func_page_layout()).compile(function(err, css) {
// 	   scale_func_page_css = css;
// });
//
// absurd().morph("html").add(scale_func_page_layout()).compile(function(err, html) {
// 	   scale_func_page_html = html;
// });
//
// export function scale_func_css_mid(req, res){
// 	res.send(scale_func_page_css);
// } 
//
// export function scale_func_html_mid(req, res){
// 	res.send(scale_func_page_html);
// } 
//
//
//
// // EXPRESS TEST SERVER
//
// // server imports
// var express = require('express');
// var helmet = require('helmet');
// var path = require('path');
//
//
// // global express server variables
// var app = express();
//
// var setContentType = function(type) {
// 	   return function(req, res, next) {
// 		   res.setHeader('Content-Type', 'text/' + type);
// 		   next();
// 	   };
// };
//
// // execute helmet before responding to requests
// app.use(helmet());
//
// //set default path to web app resources
// app.use('/assets',  express.static(path.join( __dirname, 'assets' )));
// app.use('/db',  express.static(path.join( __dirname, 'db' )));
// app.use('/log',	express.static(path.join( __dirname, 'log' )));
//
// // web application routes
// app.get('/', setContentType("html"), scale_func_html_mid);
//
// // scale_func component specific routes
// app.get('/scale_func.css', setContentType("css"), scale_func_css_mid);
// app.get('/scale_func.html', setContentType("html"), scale_func_html_mid);
//
//
// // start server
// var port = process.env.PORT || 8080;
// app.listen(port);
// console.log('listening on port ' + port);
//
//
// // open in browser
// const open_browser = require('open');
//
// (async () => {
// 	await open_browser('http://127.0.0.1:8080', {app: ['firefox', '-new-tab']});
// })();
