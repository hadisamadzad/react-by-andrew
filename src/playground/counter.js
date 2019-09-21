let count = 0;

const addOne = () => {
    count++;
    render();
};
const setZero = () => {

};
const minusOne = () => {

};

let appRoot = document.getElementById('app');

const render = () => {
    const counter = (
        <div>
        <h2>Count: {count}</h2>
        <button id="btnAdd" onClick={addOne}>+1</button>
        <button id="btnZero" className="button">0</button>
        <button id="btnMinus" className="button">-1</button>
        </div>
    );
    
    ReactDOM.render(counter, appRoot);
};

render();