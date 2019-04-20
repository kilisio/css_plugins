"use strict";
//plugin test
var absurd = require("absurd");

// plugin declaration
// absurd().plugin('positioning', pos())

var component_name = 'positioning';
// component
var component = function() {
    return {
        css:{
            '#positioning':[
                pos('relative', 600, 400, 600, 400, 0, 0),
            ],
            '.positioning': {
                'background-color': 'black'
            }
        },
        html:{
            'div.positioning#positioning': {

            }
        }
    };
};

// component html page layout

var component_layout = function(){
    return {
        _:"<!DOCTYPE html>",
        html: {
            head: {
                _include: [
                    '<link rel="stylesheet" type="text/css" href="' + component_name + '.css"/>'
                ],
                title: component_name 
            },
            body: {
                _include: component().html
            }
        }
    };
};

absurd(function(api) {
    // print to file
    var css_file = "./" + component_name + ".css";
    var html_file = "./" + component_name + ".html";
    api.morph("html").add(component_layout()).compileFile(html_file);
    api.morph("component").add(component()).compileFile(css_file);

   // print to console
    api.morph("component").add(component()).compile(function(err, css, html) {
        console.log(css);
        console.log(html);
    });
});
