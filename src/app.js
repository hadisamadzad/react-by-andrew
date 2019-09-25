class IndecisionApp extends React.Component {
render() {
    const title = "Indecision ...";
    const subtitle = "Put your life in the hands of a computer!";
    const options = ["Option One", "Option Two", "Option Three"];
    return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options={options} />
            <AddOption />
        </div>
    );
}
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("Picked.");
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
        alert("Remove All Clicked.");
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map(x =>
                        <Option key={x} title={x} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        
        const newOption = e.target.elements.newOption.value;
        if(newOption){
            alert(newOption);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="newOption"/>
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));