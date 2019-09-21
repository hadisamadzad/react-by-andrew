'use strict';

var app = {
    title: 'Going Again but ...',
    subtitle: 'This app is new edition of simple apps!'
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
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
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            { type: 'submit' },
            'Add Option'
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
