"use strict";

// imports


// functions
export function xy(...args){
    var identifier = args[0]; 
    var attr_name = args[1];  
	var canvas_width = args[2];
    var canvas_height = args[3];
    var xy_landscape = args[4];
    var xy_portrait = args[5];
    var xy_landscape_small = args[6];
    var xy_portrait_small = args[7];
    var units;

    if ((attr_name === 'height') || (attr_name === 'padding-top') || (attr_name === 'padding-bottom') || (attr_name === 'margin-top') || (attr_name === 'margin-bottom') || (attr_name === 'border-top') || (attr_name === 'border-bottom')){
        units = 'vh';
        xy_landscape = ((xy_landscape / canvas_height) * 100)/(canvas_width/canvas_height);
        xy_portrait = ((xy_portrait / canvas_width) * 100)/(canvas_height/canvas_width);
        xy_landscape_small = ((xy_landscape_small / canvas_height) * 100)/(canvas_width/canvas_height);
        xy_portrait_small = ((xy_portrait_small / canvas_width) * 100)/(canvas_height/canvas_width);
    }else {
        units = 'vw';
        xy_landscape = ((xy_landscape / canvas_width) * 100)/(canvas_width/canvas_height);
        xy_portrait = ((xy_portrait / canvas_height) * 100)/(canvas_height/canvas_width);
        xy_landscape_small = ((xy_landscape_small / canvas_width) * 100)/(canvas_width/canvas_height);
        xy_portrait_small = ((xy_portrait_small / canvas_height) * 100)/(canvas_height/canvas_width);
    }

    

	return `
        @element html and (min-width: 769px) and (orientation: landscape){
	    	` + identifier + ` {
                ` + attr_name + `: eval("` + xy_landscape + ` * (window.innerWidth/window.innerHeight)")` + units +`;
	    	}
        }
        @element html and (min-width: 769px) and (orientation: portrait){
	    	` + identifier + ` {
                ` + attr_name + `: eval("` + xy_portrait + ` * (window.innerWidth/window.innerHeight)")` + units +`;
	    	}
        }
        @element html and (max-width: 768px) and (orientation: landscape){
	    	` + identifier + ` {
                ` + attr_name + `: eval("` + xy_landscape_small + ` * (window.innerWidth/window.innerHeight)")` + units +`;
			}
        }
        @element html and (max-width: 768px) and (orientation: portrait){
	    	` + identifier + ` {
                ` + attr_name + `: eval("` + xy_portrait_small + ` * (window.innerWidth/window.innerHeight)")` + units +`;
	    	}
        }
	`;
}


// css variables


// element queries


// html variables


//inline script
var script = {
    script:{
        _include:[

        ]
    }
};

//inline css styles
var style = {
    style:{
        _include:[
            xy('.xy_func', 'margin-top', 1366, 768, 200, 150, 100, 50),
            xy('.xy_func', 'height', 1366, 768, 200, 150, 100, 50),
        ]
    }
};

// xy_func html object
export var xy_func_html = {
    _include:[
        style,
        script
    ]
};

//// xy_func css object
//export var xy_func_css = {
//	
//};

// xy_func component
export function xy_func(...args) {
    var nested_html_components = { _include: [] };
    if(args.length === 0){
            nested_html_components._include.push(xy_func_html);
    }else{
        for(var i=0; i<args.length; i++) {
            nested_html_components._include.push(args[i]);
        }
    }

    return {
        css:{
            '#xy_func': {
                '@media (min-width: 769px) and (orientation: landscape)':{
                },
                '@media (min-width: 769px) and (orientation: portrait)':{
                },
                '@media (max-width: 768px) and (orientation: landscape)':{
                },
                '@media (max-width: 768px) and (orientation: portrait)':{
                }
            },
            '.xy_func': {
                '@media (min-width: 769px) and (orientation: landscape)':{
                    margin: 0,
                    padding: 0,
                    'background-color': 'red'
                },
                '@media (min-width: 769px) and (orientation: portrait)':{
                    'background-color': 'green'
                },
                '@media (max-width: 768px) and (orientation: landscape)':{
                    'background-color': 'orange'
                },
                '@media (max-width: 768px) and (orientation: portrait)':{
                    'background-color': 'blue'
                }
            }
        },
        html:{
            'div#xy_func.xy_func': [
                nested_html_components
            ]

        }

    };
}


export var xy_func_nested_layout = function(){
	return xy_func();
};


// xy_func html page layout
var component_name = 'xy_func';
//var page_title = '';


export var xy_func_page_layout = function(){
	return {
		_:"<!DOCTYPE html>",
		html: {
			_attrs:{
				style: "width:100%;height:100%;"
			},
			head: {
				_include: [
					'<link rel="stylesheet" type="text/css" href="' + component_name + '.css"/>',
					'<script src="./assets/scripts/eqcss/EQCSS.min.js"></script>'
				],
				title: component_name 
			},
			body: {
				_attrs:{
					style: "margin:0;padding:0;"
				},
				_include: xy_func_nested_layout()
			}
		}
	};
};

// xy_func component test code
var absurd = require("absurd");


absurd(function(api) {
	// print to file
	var css_file = "./" + component_name + ".css";
	var html_file = "./" + component_name + ".html";
	api.morph("html").add(xy_func_page_layout()).compileFile(html_file);
	api.morph("component").add(xy_func_page_layout()).compileFile(css_file);

	 // print to console
	// component
	api.morph("component").add(xy_func()).compile(function(err, css, html) {
		console.log(css);
		console.log(html);
	});
	// component layout
	api.morph("component").add(xy_func_page_layout()).compile(function(err, css) {
		console.log(css);
	});
	api.morph("html").add(xy_func_page_layout()).compile(function(err, html) {
		console.log(html);
	});
});
