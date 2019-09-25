class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    handleAddOne() {
        this.setState((state) => {
            return {
                count: state.count + 1
            };
        })
    }
    handleMinusOne() {
        this.setState((state) => {
            return {
                count: state.count - 1
            };
        })
    }
    handleReset() {
        this.setState((state) => {
            return {
                count: 0
            };
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+</button>
                <button onClick={this.handleMinusOne}>-</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

//let count = 0;
//
//const addOne = () => {
//    count++;
//    render();
//};
//const setZero = () => {
//
//};
//const minusOne = () => {
//
//};
//
//let appRoot = document.getElementById('app');
//
//const render = () => {
//    const counter = (
//        <div>
//        <h2>Count: {count}</h2>
//        <button id="btnAdd" onClick={addOne}>+1</button>
//        <button id="btnZero" className="button">0</button>
//        <button id="btnMinus" className="button">-1</button>
//        </div>
//    );
//    
//    ReactDOM.render(counter, appRoot);
//};
//
//render();