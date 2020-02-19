"use strict";
export var media = {
    default: {
        all: {
            orientation: null,
            max_width: 1366,
            max_height: null,
            min_width: null,
            min_height: null,
            width: 1366,
            height: 768
        }
    },
    laptop:{
        landscape:{
            orientation:'landscape',
            max_width: null,
            max_height: null,
            min_width: 769,
            min_height: null,
            width: 1366,
            height: 768
        },
        portrait:{
            orientation: 'portrait',
            max_width: null,
            max_height: null,
            min_width: 769,
            min_height: null,
            width: 768,
            height: 1366
        }
    },
    phablet:{
        landscape:{
            orientation:'landscape',
            max_width: 768,
            max_height: null,
            min_width: null,
            min_height: null,
            width: 768,
            height: 432
        },
        portrait:{
            orientation: 'portrait',
            max_width: 768,
            max_height: null,
            min_width: null,
            min_height: null,
            width: 432,
            height: 768
        }
    }
};

export default media;
