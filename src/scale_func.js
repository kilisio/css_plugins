"use strict";

// // IMPORTS
// var absurd = require("absurd");
// import * as html_partials from "html_partials-0.6.18";
// import * as meld from "@kilisio/hypha_meld_lib-0.1.33";
// import { fonts } from "./fonts.js";
// import { xy } from "./xy_func.js";
//
// FUNCTION
export function scale(identifier, properties){
    let orientation,
        max_width,
        min_width,
        max_height,
        min_height,
        media_query;


    // media queries
    if((properties.orientation !== undefined) && (properties.orientation !== null)){
        orientation = '(orientation: ' + properties.orientation + ')';
        // console.log(orientation);
        media_query = orientation;
    }

    if((properties.max_width !== undefined) && (properties.max_width !== null)){
        max_width = ' and (max-width: ' + properties.max_width + 'px)';
        // console.log(max_width);
        media_query += max_width;
    }

    if((properties.min_width !== undefined) && (properties.min_width !== null)){
        min_width = ' and (min-width: ' + properties.min_width + 'px)';
        // console.log(min_width);
        media_query += min_width;
    }

    if((properties.max_height !== undefined) && (properties.max_height !== null)){
        max_height = ' and (max-height: ' + properties.max_height + 'px)';
        // console.log(max_height);
        media_query += max_height;
    }

    if((properties.min_height !== undefined) && (properties.min_height !== null)){
        min_height = ' and (min-height: ' + properties.min_height + 'px)';
        // console.log(min_height);
        media_query += min_height;
    }

    let scale = `
        @element html and ` + media_query + `{
            ` + identifier + ` {
                transform: scaleX(eval('window.innerWidth / ` + properties.width + `')) scaleY(eval("window.innerHeight / ` + properties.height + `"));
                    transform-origin: left top;
            }
        }
    `;

    return scale;

}

// // TEMPLATE CONFIGURATIONS
// // Template options 
// var options = {
//     default_template:{
//         name: 'default_template',
//         z_index: null
//     }
// };
//
// // page layout template configuration
// var config = {
//     settings: {
//         project_name: 'scale_func',
//         layout: 'default_layout'
//     },
//     default_template:{
//         template: {
//             laptop:{
//                 landscape: 'default_template',
//                 portrait: 'default_template'
//             },
//             phablet:{
//                 landscape: 'default_template',
//                 portrait: 'default_template'
//             }
//         },
//         components: [
//             scale_func_templates(options.default_template)
//         ]
//     }
// };
//
//
// // TEMPLATE FUNCTION
// export function scale_func_templates(options){
//     // devices component mockup design properties
//     let component_template_options = {...options}, comp_state;
//
//     if(component_template_options.scale_func === undefined){
//         comp_state = {
//         html: 'on',
//         styles: 'on',
//         scripts: 'on',
//         css: 'on',
//         fonts: 'on'
//         };
//     }else{
//         comp_state = {...component_template_options.scale_func};
//     }
//
//     let component_details = {
//         project: '.online_portfolio',
//         name: 'scale_func',
//         classifier: '.scale_func',
//         identifier: '#scale_func',
//         html: comp_state.html,
//         styles: comp_state.styles,
//         scripts: comp_state.scripts,
//         css: comp_state.css,
//         fonts: comp_state.fonts
//     };
//     let media = {
//         laptop:{
//             landscape:{
//                 orientation:'landscape',
//                 max_width: null,
//                 max_height: null,
//                 min_width: 769,
//                 min_height: null,
//                 width: 1366,
//                 height: 768
//             },
//             portrait:{
//                 orientation: 'portrait',
//                 max_width: null,
//                 max_height: null,
//                 min_width: 769,
//                 min_height: null,
//                 width: 768,
//                 height: 1366
//             }
//         },
//         phablet:{
//             landscape:{
//                 orientation:'landscape',
//                 max_width: 768,
//                 max_height: null,
//                 min_width: null,
//                 min_height: null,
//                 width: 768,
//                 height: 432
//             },
//             portrait:{
//                 orientation: 'portrait',
//                 max_width: 768,
//                 max_height: null,
//                 min_width: null,
//                 min_height: null,
//                 width: 432,
//                 height: 768
//             }
//         }
//     };
//
//     // inline scripts variables
//
//
//     // inline styles variables
//     let scaled = {
//         laptop_landscape: scale(component_details.project + component_details.classifier, media.laptop.landscape),
//         laptop_portrait: scale(component_details.project + component_details.classifier, media.laptop.portrait),
//         phablet_landscape: scale(component_details.project + component_details.classifier, media.phablet.landscape),
//         phablet_portrait: scale(component_details.project + component_details.classifier, media.phablet.portrait)
//     };
//
//
//     // html attributes
//     let skillset_link_attr = {
//         id: 'skillset_link',
//         'class': 'link_group',
//         href: '/prog_lang_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//     
//     let prog_lang_link_attr = {
//         id: 'prog_lang_link',
//         'class': 'sub_link',
//         href: '/prog_lang_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//     
//     let dev_env_link_attr = {
//         id: 'dev_env_link',
//         'class': 'sub_link',
//         href: '/dev_env_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//     
//     let lib_mod_link_attr = {
//         id: 'lib_mod_link',
//         'class': 'sub_link',
//         href: '/lib_mod_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//     
//     let gen_comp_link_attr = {
//         id: 'gen_comp_link',
//         'class': 'sub_link',
//         href: '/gen_comp_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//     
//     let projects_link_attr = {
//         id: 'projects_link',
//         'class': 'link_group',
//         href: '/web_app_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//     
//     let web_app_link_attr = {
//         id: 'web_app_link',
//         'class': 'sub_link',
//         href: '/web_app_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//     
//     let graphics_link_attr = {
//         id: 'graphics_link',
//         'class': 'sub_link',
//         href: '/graphics_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//     
//     let vim_plug_link_attr = {
//         id: 'vim_plug_link',
//         'class': 'sub_link',
//         href: '/vim_plug_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//     
//     let contrib_link_attr = {
//         id: 'contrib_link',
//         'class': 'sub_link',
//         href: '/contrib_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//     
//     let photo_link_attr = {
//         id: 'photo_link',
//         'class': 'sub_link',
//         href: '/photo_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//     
//     let elec_link_attr = {
//         id: 'elec_link',
//         'class': 'sub_link',
//         href: '/elec_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//     
//     let metal_fab_link_attr = {
//         id: 'metal_fab_link',
//         'class': 'sub_link',
//         href: '/metal_fab_page.html',
//         onclick: 'route(this.id);return false;'
//     };
//
//     let folio_nav_list_attr = {
//         id: 'folio_nav_list',
//         'class': 'folio_nav_list'
//     };
//
//     let skillset_hash = {
//         id: 'skillset_hash',
//         'class': 'link_group_hash'
//     };
//
//     let skillset_text = {
//         id: 'skillset_text',
//         'class': 'link_group_text'
//     };
//
//     let projects_hash = {
//         id: 'projects_hash',
//         'class': 'link_group_hash'
//     };
//
//     let projects_text = {
//         id: 'projects_text',
//         'class': 'link_group_text'
//     };
//
//     // html variables
//         let folio_nav_list = html_partials.ul_list( folio_nav_list_attr,
//             html_partials.link(skillset_link_attr, 
//                 html_partials.span(skillset_hash, '#'),
//                 html_partials.span(skillset_text, 'skill set')
//             ),
//             html_partials.link(prog_lang_link_attr, '- programming languages'),
//             html_partials.link(dev_env_link_attr, '- development environments'),
//             html_partials.link(lib_mod_link_attr, '- popular libraries and modules'),
//             html_partials.link(gen_comp_link_attr, '- general computer skills'),
//             html_partials.link(projects_link_attr, 
//                 html_partials.span(projects_hash, '#'),
//                 html_partials.span(projects_text, 'projects')
//             ),
//             html_partials.link(web_app_link_attr, '- web applications'),
//             html_partials.link(graphics_link_attr, '- graphics designs'),
//             html_partials.link(vim_plug_link_attr, '- vim plugins'),
//             html_partials.link(contrib_link_attr, '- open source contributions'),
//             html_partials.link(photo_link_attr, '- photography'),
//             html_partials.link(elec_link_attr, '- electronics'),
//             html_partials.link(metal_fab_link_attr, '- metal fabrication')
//         );
//
// let highlight = component_template_options.highlight, highlight_link = {};
// if(highlight === 'prog_lang'){
//     highlight_link = {
//         '#skillset_hash': {
//             color: '#fff0e6' 
//         },
//         '#skillset_text': {
//             color: '#ff6600'
//         },
//         '#prog_lang_link': {
//             color: '#ff6600'
//         }
//     };
// }else if(highlight === 'dev_env'){
//     highlight_link = {
//         '#skillset_hash': {
//             color: '#fff0e6' 
//         },
//         '#skillset_text': {
//             color: '#ff6600'
//         },
//         '#dev_env_link': {
//             color: '#ff6600'
//         }
//     };
// }else if(highlight === 'lib_mod'){
//     highlight_link = {
//         '#skillset_hash': {
//             color: '#fff0e6' 
//         },
//         '#skillset_text': {
//             color: '#ff6600'
//         },
//         '#lib_mod_link': {
//             color: '#ff6600'
//         }
//     };
// }else if(highlight === 'gen_comp'){
//     highlight_link = {
//         '#skillset_hash': {
//             color: '#fff0e6' 
//         },
//         '#skillset_text': {
//             color: '#ff6600'
//         },
//         '#gen_comp_link': {
//             color: '#ff6600'
//         }
//     };
// }else if(highlight === 'web_app'){
//     highlight_link = {
//         '#projects_hash': {
//             color: '#fff0e6' 
//         },
//         '#projects_text': {
//             color: '#ff6600'
//         },
//         '#web_app_link': {
//             color: '#ff6600'
//         }
//     };
// }else if(highlight === 'graphics'){
//     highlight_link = {
//         '#projects_hash': {
//             color: '#fff0e6' 
//         },
//         '#projects_text': {
//             color: '#ff6600'
//         },
//         '#graphics_link': {
//             color: '#ff6600'
//         }
//     };
// }else if(highlight === 'vim_plug'){
//     highlight_link = {
//         '#projects_hash': {
//             color: '#fff0e6' 
//         },
//         '#projects_text': {
//             color: '#ff6600'
//         },
//         '#vim_plug_link': {
//             color: '#ff6600'
//         }
//     };
// }else if(highlight === 'contrib'){
//     highlight_link = {
//         '#projects_hash': {
//             color: '#fff0e6' 
//         },
//         '#projects_text': {
//             color: '#ff6600'
//         },
//         '#contrib_link': {
//             color: '#ff6600'
//         }
//     };
// }else if(highlight === 'photo'){
//     highlight_link = {
//         '#projects_hash': {
//             color: '#fff0e6' 
//         },
//         '#projects_text': {
//             color: '#ff6600'
//         },
//         '#photo_link': {
//             color: '#ff6600'
//         }
//     };
// }else if(highlight === 'elec'){
//     highlight_link = {
//         '#projects_hash': {
//             color: '#fff0e6' 
//         },
//         '#projects_text': {
//             color: '#ff6600'
//         },
//         '#elec_link': {
//             color: '#ff6600'
//         }
//     };
// }else if(highlight === 'metal_fab'){
//     highlight_link = {
//         '#projects_hash': {
//             color: '#fff0e6' 
//         },
//         '#projects_text': {
//             color: '#ff6600'
//         },
//         '#metal_fab_link': {
//             color: '#ff6600'
//         }
//     };
// }
//
//     // css variables
//
//
//
//     // template config
//     let template = {
//         laptop:{
//             landscape:{
//                 fonts: [fonts.forced_squaremedium, fonts.felona_stmedium],
//                 styles: [scaled.laptop_landscape],
//                 scripts: [],
//                 html: [folio_nav_list],
//                 css:{
//                     [component_details.project + component_details.identifier]:[highlight_link],
//                     [component_details.project + component_details.classifier]:{
//                         'z-index': component_template_options.z_index || 'auto',
//                         margin: 0,
//                         padding: 0,
//                         position: 'absolute',
//                         top: xy(108, media.laptop.landscape).y,
//                         left: xy(20, media.laptop.landscape).x,
//                         width: '318.317px',
//                         height: '397.003px',
//                         'background-color': '#1a0a00',
//                         '.folio_nav_list': {
//                             margin: 0,
//                             padding: 0,
//                             'list-style': 'none'
//                         },
//                         '.link_group': {
//                             'text-decoration': 'none',
//                             display: 'inline-block',
//                             outline: 'none',
//                             ':active :focus': {
//                                 outline: 'none'
//                             },
//                             ':hover .link_group_hash': {
//                                 color: '#fff0e6'
//                             },
//                             ':hover .link_group_text':{
//                                 color: '#ff6600'
//                             }
//                         },
//                         '.link_group_hash':{
//                             margin: 0,
//                             padding: 0,
//                             'margin-top': '5px',
//                             'margin-left': '5px',
//                             'font-size': '48px',
//                             'font-family': 'forced_squaremedium',
//                             color: '#ff6600',
//                             display: 'inline-block'
//                         },
//                         '.link_group_text':{
//                             margin: 0,
//                             padding: 0,
//                             'margin-top': '5px',
//                             'margin-left': '5px',
//                             'font-size': '32px',
//                             'font-family': 'forced_squaremedium',
//                             color: '#fff0e6',
//                             display: 'inline-block'
//                         },
//                         '.sub_link': {
//                             margin: 0,
//                             padding: 0,
//                             'margin-top': '5px',
//                             'margin-left': '20px',
//                             'font-family': 'felona_stmedium',
//                             'font-size': '17.3333px',
//                             color: '#fff0e6',
//                             'text-decoration': 'none',
//                             display: 'inline-block',
//                             outline: 'none',
//                             ':active :focus': {
//                                 outline: 'none'
//                             },
//                             ':hover':{
//                                 color: '#ff6600'
//                             }
//                         },
//                     }
//                 }
//             },
//             portrait:{
//                 fonts: [],
//                 styles: [scaled.laptop_portrait],
//                 scripts: [],
//                 html: [],
//                 css:{
//                     [component_details.project + component_details.identifier]:[],
//                     [component_details.project + component_details.classifier]:{
//                         'z-index': component_template_options.z_index || 'auto',
//                         margin: 0,
//                         padding: 0,
//                         position: 'absolute',
//                         top: xy(107, media.laptop.portrait).y,
//                         left: xy(45, media.laptop.portrait).x,
//                         width: '318.317px',
//                         height: '397.003px',
//                         'background-color': '#1a0a00',
//                         '.folio_nav_list': {
//                             margin: 0,
//                             padding: 0,
//                             'list-style': 'none'
//                         },
//                         '.link_group': {
//                             'text-decoration': 'none',
//                             display: 'inline-block',
//                             outline: 'none',
//                             ':active :focus': {
//                                 outline: 'none'
//                             },
//                             ':hover .link_group_hash': {
//                                 color: '#fff0e6'
//                             },
//                             ':hover .link_group_text':{
//                                 color: '#ff6600'
//                             }
//                         },
//                         '.link_group_hash':{
//                             margin: 0,
//                             padding: 0,
//                             'margin-top': '5px',
//                             'margin-left': '5px',
//                             'font-size': '48px',
//                             'font-family': 'forced_squaremedium',
//                             color: '#ff6600',
//                             display: 'inline-block'
//                         },
//                         '.link_group_text':{
//                             margin: 0,
//                             padding: 0,
//                             'margin-top': '5px',
//                             'margin-left': '5px',
//                             'font-size': '32px',
//                             'font-family': 'forced_squaremedium',
//                             color: '#fff0e6',
//                             display: 'inline-block'
//                         },
//                         '.sub_link': {
//                             margin: 0,
//                             padding: 0,
//                             'margin-top': '5px',
//                             'margin-left': '20px',
//                             'font-family': 'felona_stmedium',
//                             'font-size': '17.3333px',
//                             color: '#fff0e6',
//                             'text-decoration': 'none',
//                             display: 'inline-block',
//                             outline: 'none',
//                             ':active :focus': {
//                                 outline: 'none'
//                             },
//                             ':hover':{
//                                 color: '#ff6600'
//                             }
//                         },
//                     }
//                 }
//             }
//         },
//         phablet:{
//             landscape:{
//                 fonts: [],
//                 styles: [scaled.phablet_landscape],
//                 scripts: [],
//                 html: [],
//                 css:{
//                     [component_details.project + component_details.identifier]:[],
//                     [component_details.project + component_details.classifier]:{
//                         'z-index': component_template_options.z_index || 'auto',
//                         margin: 0,
//                         padding: 0,
//                         position: 'absolute',
//                         top: xy(76, media.phablet.landscape).y,
//                         left: xy(12, media.phablet.landscape).x,
//                         width: '250px',
//                         height: '309px',
//                         'background-color': '#1a0a00',
//                         '.folio_nav_list': {
//                             margin: 0,
//                             padding: 0,
//                             'list-style': 'none'
//                         },
//                         '.link_group': {
//                             'text-decoration': 'none',
//                             display: 'inline-block',
//                             outline: 'none',
//                             ':active :focus': {
//                                 outline: 'none'
//                             },
//                             ':hover .link_group_hash': {
//                                 color: '#fff0e6'
//                             },
//                             ':hover .link_group_text':{
//                                 color: '#ff6600'
//                             }
//                         },
//                         '.link_group_hash':{
//                             margin: 0,
//                             padding: 0,
//                             'margin-top': '2px',
//                             'margin-left': '2px',
//                             'font-size': '40px',
//                             'font-family': 'forced_squaremedium',
//                             color: '#ff6600',
//                             display: 'inline-block'
//                         },
//                         '.link_group_text':{
//                             margin: 0,
//                             padding: 0,
//                             'margin-top': '2px',
//                             'margin-left': '2px',
//                             'font-size': '28px',
//                             'font-family': 'forced_squaremedium',
//                             color: '#fff0e6',
//                             display: 'inline-block'
//                         },
//                         '.sub_link': {
//                             margin: 0,
//                             padding: 0,
//                             'margin-top': '2px',
//                             'margin-left': '10px',
//                             'font-family': 'felona_stmedium',
//                             'font-size': '14px',
//                             color: '#fff0e6',
//                             'text-decoration': 'none',
//                             display: 'inline-block',
//                             outline: 'none',
//                             ':active :focus': {
//                                 outline: 'none'
//                             },
//                             ':hover':{
//                                 color: '#ff6600'
//                             }
//                         },
//                     }
//                 }
//             },
//             portrait:{
//                 fonts: [],
//                 styles: [scaled.phablet_portrait],
//                 scripts: [],
//                 html: [],
//                 css:{
//                     [component_details.project + component_details.identifier]:[],
//                     [component_details.project + component_details.classifier]:{
//                         'z-index': component_template_options.z_index || 'auto',
//                         margin: 0,
//                         padding: 0,
//                         position: 'absolute',
//                         top: xy(70, media.phablet.portrait).y,
//                         left: xy(18, media.phablet.portrait).x,
//                         width: '250px',
//                         height: '309px',
//                         'background-color': '#1a0a00',
//                         '.folio_nav_list': {
//                             margin: 0,
//                             padding: 0,
//                             'list-style': 'none'
//                         },
//                         '.link_group': {
//                             'text-decoration': 'none',
//                             display: 'inline-block',
//                             outline: 'none',
//                             ':active :focus': {
//                                 outline: 'none'
//                             },
//                             ':hover .link_group_hash': {
//                                 color: '#fff0e6'
//                             },
//                             ':hover .link_group_text':{
//                                 color: '#ff6600'
//                             }
//                         },
//                         '.link_group_hash':{
//                             margin: 0,
//                             padding: 0,
//                             'margin-top': '2px',
//                             'margin-left': '2px',
//                             'font-size': '40px',
//                             'font-family': 'forced_squaremedium',
//                             color: '#ff6600',
//                             display: 'inline-block'
//                         },
//                         '.link_group_text':{
//                             margin: 0,
//                             padding: 0,
//                             'margin-top': '2px',
//                             'margin-left': '2px',
//                             'font-size': '28px',
//                             'font-family': 'forced_squaremedium',
//                             color: '#fff0e6',
//                             display: 'inline-block'
//                         },
//                         '.sub_link': {
//                             margin: 0,
//                             padding: 0,
//                             'margin-top': '2px',
//                             'margin-left': '10px',
//                             'font-family': 'felona_stmedium',
//                             'font-size': '14px',
//                             color: '#fff0e6',
//                             'text-decoration': 'none',
//                             display: 'inline-block',
//                             outline: 'none',
//                             ':active :focus': {
//                                 outline: 'none'
//                             },
//                             ':hover':{
//                                 color: '#ff6600'
//                             }
//                         },
//                     }
//                 }
//             }
//         },
//     };
//
//
//     return {
//         details:{...component_details},
//         templates:{
//             default_template:{
//                 laptop:{
//                     landscape:{
//                         media: media.laptop.landscape,
//                         html:{
//                             scripts: [...template.laptop.landscape.scripts],
//                             styles: [...template.laptop.landscape.styles],
//                             base: [...template.laptop.landscape.html]
//                         },
//                         css:{
//                             fonts: [template.laptop.landscape.fonts],
//                             base: [template.laptop.landscape.css]
//                         }
//                     },
//                     portrait:{
//                         media: media.laptop.portrait,
//                         html:{
//                             scripts: [...template.laptop.portrait.scripts],
//                             styles: [...template.laptop.portrait.styles],
//                             base: [...template.laptop.portrait.html]
//                         },
//                         css:{
//                             fonts: [template.laptop.portrait.fonts],
//                             base: [template.laptop.portrait.css]
//                         }
//                     }
//                 },
//                 phablet:{
//                     landscape:{
//                         media: media.phablet.landscape,
//                         html:{
//                             scripts: [...template.phablet.landscape.scripts],
//                             styles: [...template.phablet.landscape.styles],
//                             base: [...template.phablet.landscape.html]
//                         },
//                         css:{
//                             fonts: [template.phablet.landscape.fonts],
//                             base: [template.phablet.landscape.css]
//                         }
//                     },
//                     portrait:{
//                         media: media.phablet.portrait,
//                         html:{
//                             scripts: [...template.phablet.portrait.scripts],
//                             styles: [...template.phablet.portrait.styles],
//                             base: [...template.phablet.portrait.html]
//                         },
//                         css:{
//                             fonts: [template.phablet.portrait.fonts],
//                             base: [template.phablet.portrait.css]
//                         }
//                     }
//                 }
//             }
//         }
//     };
// }
//
// export default scale_func_templates;
//
// // PARSE TEMPLATE
// var component_template = meld.template_parser(config);
//
// // PRINT TO CONSOLE
// absurd(function(api) {
//     api.morph("component").add(component_template).compile(function(err, css, html) {
//             console.log(css);
//             console.log(html);
//     });
// });
//
//
// // PAGE LAYOUT
// var page_details = {
// 	name: 'scale_func',
// 	page_title: null
// };
//
//
// // external script files
// var lib = {
// 	script:{
// 		_attrs:{
// 			src: './eqcss.js'
// 		}
// 	}
// };
//
//
// // component page layout
// function scale_func_layout(){
// 	return {
// 		_:"<!DOCTYPE html>",
// 		html: {
// 			_attrs:{
// 				   style: "width:100%;height:100%;overflow:hidden;"
// 			},
// 			head: {
// 				_include: [
// 					'<meta name="viewport" content="width=device-width,initial-scale=1.0">',
// 					'<link rel="stylesheet" type="text/css" href="' + page_details.name + '.css"/>'
// 				],
// 				title: page_details.page_title || page_details.name 
// 			},
// 			body: {
// 				_attrs:{
// 					style: "margin:0;padding:0;"
// 				},
// 				_include: [ 
// 					component_template,
// 					lib
// 				]
// 			}
// 		}
// 	};
// }
//
// // EXPRESS SERVER CONFIGURATIONS
// // express server middlewares
// var scale_func_css_express, scale_func_html_express;
//
// absurd().morph("component").add(scale_func_layout()).compile(function(err, css) {
// 	   scale_func_css_express = css;
// });
//
// absurd().morph("html").add(scale_func_layout()).compile(function(err, html) {
// 	   scale_func_html_express = html;
// });
//
// function scale_func_css_mid(req, res){
// 	res.send(scale_func_css_express);
// } 
//
// function scale_func_html_mid(req, res){
// 	res.send(scale_func_html_express);
// } 
//
//
//
// // express testing server
// // server imports
// import express from "express";
// import helmet from "helmet";
// import path from "path";
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
// app.use(express.static(path.join(__dirname, '/')));
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
// 	await open_browser('http://127.0.0.1:8080', {app: ['google-chrome', '-new-tab']});
// })();
