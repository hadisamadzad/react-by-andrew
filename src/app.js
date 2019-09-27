class IndecisionApp extends React.Component {
    constructor(props) {
        // Props
        super(props);

        // Method binding
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        // State
        this.state = {
            options: []
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const count = this.state.options.length;
        const picked = Math.floor(Math.random() * count);
        alert(this.state.options[picked]);
        return picked;
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value to add an item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item is already exists';
        }

        this.setState(() => {
            return {
                options: this.state.options.concat(option)
            }
        })
    }

    render() {
        const title = "Indecision ...";
        const subtitle = "Put your life in the hands of a computer!";
        return (
            <div>
                <Header
                    title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption
                    handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What should I do?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map(x => <Option key={x} title={x} />)
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <p>{props.title}</p>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleSubmit(e) {
        e.preventDefault();

        const newOption = e.target.elements.newOption.value;
        const error = this.props.handleAddOption(newOption);

        this.setState(() => {
            return { error }
        })

        if (!error) {
            e.target.elements.newOption.value = "";
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="newOption" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));