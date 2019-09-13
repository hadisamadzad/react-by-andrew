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