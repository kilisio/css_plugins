"use strict";

export function scale(identifier, properties){
    let orientation,
        max_width,
        min_width,
        max_height,
        min_height,
        media_query = '';


    // media queries
    if((properties.orientation !== undefined) && (properties.orientation !== null)){
        orientation = ' and (orientation: ' + properties.orientation + ')';
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
        @element html` + media_query + `{
            ` + identifier + ` {
                transform: scaleX(eval('window.innerWidth / ` + properties.width + `')) scaleY(eval("window.innerHeight / ` + properties.height + `"));
                    transform-origin: left top;
            }
        }
    `;

    return scale;

}


var props = {
    orientation: null,
    // max_width: '1366px',
    max_height: null,
    min_height: null,
    min_width: null,
    width: '1366px',
    height: '768px'
};

console.log(scale('#scale', props));
