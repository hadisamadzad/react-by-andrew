
let app = {
title:'Going Again but ...',
subtitle: 'This app is new edition of simple apps!'
};

let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>    
);

let count = 0;

const addOne = () => {
    count++;
};
const setZero = () => {

};
const minusOne = () => {

};

const counter = (
    <div>
    <h2>Count: {count}</h2>
    <button id="btnAdd" onClick={addOne}>+1</button>
    <button id="btnZero" className="button">0</button>
    <button id="btnMinus" className="button">-1</button>
    </div>
);

let appRoot = document.getElementById('app');
ReactDOM.render(counter, appRoot);