'use strict';

var app = {
    title: 'Going Again but ...',
    subtitle: 'This app is new edition of simple apps!'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        ),
        React.createElement(
            'li',
            null,
            'Item 3'
        )
    )
);

var count = 0;

var addOne = function addOne() {
    count++;
};
var setZero = function setZero() {};
var minusOne = function minusOne() {};

var counter = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { id: 'btnAdd', onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { id: 'btnZero', className: 'button' },
        '0'
    ),
    React.createElement(
        'button',
        { id: 'btnMinus', className: 'button' },
        '-1'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(counter, appRoot);
