"use strict";

// IMPORTS
import preprocess from "@kilisio/preprocess-0.3.10";
import * as meld from "@kilisio/meld-0.1.45";
import scale_func from "./func_scale.js";
import * as html_partials from "@kilisio/html_partials-0.8.9";
import media from "./media.js";
// import project_fonts from "./fonts";

// Template config 
var options = {
    temp_scale:{
        z_index: null,
        parse: {
            html: 'on',
            styles: 'on',
            scripts: 'on',
            css: 'on',
            fonts: 'on'
        }
    },
};

var settings = {
    layout: 'default',
    responsive: {
        default: [
            'all'
        ],
        // laptop: [
        //     'landscape',
        //     'portrait'
        // ],
        // phablet: [
        //     'landscape',
        //     'portrait'
        // ]
    },
    components: {
        default: [
            temp_scale(options.temp_scale),
        ],
    }
};


// Template
export function temp_scale(options){
    let component_options = {...options}, comp_parse;

    if(component_options.parse === undefined){
        comp_parse = {
            html: 'on',
            styles: 'on',
            scripts: 'on',
            css: 'on',
            fonts: 'on'
        };
    }else{
        comp_parse = {...component_options.parse};
    }

    let component_details = {
        project: 'project',
        name: 'temp_scale',
        html: comp_parse.html,
        styles: comp_parse.styles,
        scripts: comp_parse.scripts,
        css: comp_parse.css,
        fonts: comp_parse.fonts
    };

    // inline scripts variables
    let temp_scale_scripts = `
        function temp_scale(){
        }
        temp_scale();
    `;

    // inline styles variables
    let scale = [
        scale_func('.' + component_details.project + '.' + component_details.name, media.default.all),
        // scale_func('.' + component_details.project + '.' + component_details.name, media.laptop.landscape),
        // scale_func('.' + component_details.project + '.' + component_details.name, media.laptop.portrait),
        // scale_func('.' + component_details.project + '.' + component_details.name, media.phablet.landscape),
        // scale_func('.' + component_details.project + '.' + component_details.name, media.phablet.portrait)
    ];


    // html variables


    // css variables


    // template config
    let html = [
        html_partials.div({id:'layer1'}),
        html_partials.div({id:'layer2'}),
        html_partials.div({id:'layer3'}),
    ];
    let scripts = [temp_scale_scripts];
    let styles = [...scale];
    let fonts = [];
    let components = [];

    let template = {
        default:{
            all:{
                ['.' + component_details.project + '.' + component_details.name]:[],
                ['.' + component_details.project + '.' + component_details.name]:{
                    'z-index': component_options.z_index || 'auto',
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    '#layer1': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '1366px',
                        height: '256px',
                        'box-sizing': 'border-box',
                        'background-color': '#fff'
                    },
                    '#layer2': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '1366px',
                        height: '256px',
                        'box-sizing': 'border-box',
                        'background-color': '#ff9900'
                    },
                    '#layer3': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '1366px',
                        height: '256px',
                        'box-sizing': 'border-box',
                        'background-color': '#ff66cc'
                    },
                }
            }
        },
        laptop:{
            landscape:{
                ['.' + component_details.project + '.' + component_details.name]:[],
                ['.' + component_details.project + '.' + component_details.name]:{
                    'z-index': component_options.z_index || 'auto',
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    '#layer1': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '1366px',
                        height: '256px',
                        'box-sizing': 'border-box',
                        'background-color': '#fff'
                    },
                    '#layer2': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '1366px',
                        height: '256px',
                        'box-sizing': 'border-box',
                        'background-color': '#ff9900'
                    },
                    '#layer3': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '1366px',
                        height: '256px',
                        'box-sizing': 'border-box',
                        'background-color': '#ff66cc'
                    },
                }
            },
            portrait:{
                ['.' + component_details.project + '.' + component_details.name]:[],
                ['.' + component_details.project + '.' + component_details.name]:{
                    'z-index': component_options.z_index || 'auto',
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    '#layer1': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '768px',
                        height: '455.33px',
                        'box-sizing': 'border-box',
                        'background-color': 'red'
                    },
                    '#layer2': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '768px',
                        height: '455.33px',
                        'box-sizing': 'border-box',
                        'background-color': '#000'
                    },
                    '#layer3': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '768px',
                        height: '455.33px',
                        'box-sizing': 'border-box',
                        'background-color': 'grey'
                    },
                }
            }
        },
        phablet:{
            landscape:{
                ['.' + component_details.project + '.' + component_details.name]:[],
                ['.' + component_details.project + '.' + component_details.name]:{
                    'z-index': component_options.z_index || 'auto',
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    '#layer1': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '768px',
                        height: '144px',
                        'box-sizing': 'border-box',
                        'background-color': 'lime'
                    },
                    '#layer2': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '768px',
                        height: '144px',
                        'box-sizing': 'border-box',
                        'background-color': 'blue'
                    },
                    '#layer3': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '768px',
                        height: '144px',
                        'box-sizing': 'border-box',
                        'background-color': 'orange'
                    },
                }
            },
            portrait:{
                ['.' + component_details.project + '.' + component_details.name]:[],
                ['.' + component_details.project + '.' + component_details.name]:{
                    'z-index': component_options.z_index || 'auto',
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    '#layer1': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '432px',
                        height: '256px',
                        'box-sizing': 'border-box',
                        'background-color': 'pink'
                    },
                    '#layer2': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '432px',
                        height: '256px',
                        'box-sizing': 'border-box',
                        'background-color': '#fff'
                    },
                    '#layer3': {
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        width: '432px',
                        height: '256px',
                        'box-sizing': 'border-box',
                        'background-color': '#000'
                    },
                }
            }
        },
    };

    if(component_details.html === 'off'){
        html = [];
    }
    if(component_details.styles === 'off'){
        styles = [];
    }
    if(component_details.scripts === 'off'){
        scripts = [];
    }
    if(component_details.fonts === 'off'){
        fonts = [];
    }
    if(component_details.css === 'off'){
        template = {
            laptop: {
                landscape: {},
                portrait: {}
            },
            phablet: {
                landscape: {},
                portrait: {}
            },
        };
    }


    return {
        details:{...component_details},
        html: [...html],
        scripts: [...scripts],
        styles: [...styles],
        fonts: [...fonts],
        media,
        template,
        components
    };
}


export default temp_scale;

// PARSE TEMPLATE
var component_template = meld.parse(settings);

// PRINT TO CONSOLE
preprocess(function(api) {
    api.add(component_template.css).compile(function(err, css) {
            console.log(css);
    });
    api.morph("html").add(component_template.html).compile(function(err, html) {
            console.log(html);
    });
});


// PAGE LAYOUT

// component page layout
function temp_scale_layout(){

     let eqcss = {
        script:{
            _attrs:{
                src: './scripts/eqcss/eqcss.js'
            }
        }
     };

    return {
        _:"<!DOCTYPE html>",
        html: {
            _attrs:{
                   style: "width:100%;height:100%;"
            },
            head: {
                _include: [
                    '<meta name="viewport" content="width=device-width,initial-scale=1.0">',
                    '<link rel="stylesheet" type="text/css" href="temp_scale.css"/>'
                ]
            },
            body: {
                _attrs:{
                    style: "margin:0;padding:0;"
                },
                _include: [ 
                    component_template,
                    eqcss
                ]
            }
        }
    };
}

// EXPRESS SERVER CONFIGURATIONS
// express server middlewares
var temp_scale_css, temp_scale_html;

preprocess().add(component_template.css).compile(function(err, css) {
    temp_scale_css = css;
});

preprocess().morph("html").add(temp_scale_layout()).compile(function(err, html) {
    temp_scale_html = html;
});

function temp_scale_css_mid(req, res){
 res.send(temp_scale_css);
} 

function temp_scale_html_mid(req, res){
 res.send(temp_scale_html);
} 



// express testing server
// server imports
import express from "express";
import helmet from "helmet";
import path from "path";


// global express server variables
var app = express();

var setContentType = function(type) {
    return function(req, res, next) {
       res.setHeader('Content-Type', 'text/' + type);
       next();
    };
};

// execute helmet before responding to requests
app.use(helmet());

//set default path to web app resources
app.use(express.static(path.join(__dirname, '/')));

// routes
app.get('/', setContentType("html"), temp_scale_html_mid);
app.get('/temp_scale.css', setContentType("css"), temp_scale_css_mid);

// start server
var port = process.env.PORT || 8080;
app.listen(port);
console.log('listening on port ' + port);


// // open in browser
// const open_browser = require('open');
// 
// (async () => {
//	  await open_browser('http://127.0.0.1:8080', {app: ['google-chrome', '-new-tab']});
// })();
