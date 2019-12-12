class IndecisionApp extends React.Component {
    constructor(props) {
        // Props
        super(props);

        // Method binding
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        // State
        this.state = {
            options: props.options
        };
    }
    componentDidMount() {
        const json = localStorage.getItem('options');
        if (json) {
            const options = JSON.parse(json);
            this.setState(() => ({
                options
            }))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
    }
    componentWillUnmount() {
        console.log("Unmount");
    }

    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }));
    }
    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => {
                return item !== option
            })
        }));
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

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
    }

    render() {
        const subtitle = "Put your life in the hands of a computer!";
        return (
            <div>
                <Header
                    subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption
                    handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
    );
}

Header.defaultProps = {
    title: "Indecision ..."
};

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
            {props.options.length === 0 && <p>Add an options to get started!</p>}
            {
                props.options.map(x => (
                    <Option
                        key={x}
                        title={x}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

//class Option extends React.Component {
//    constructor(props) {
//        super(props);
//        this.handleDeleteOption = this.handleDeleteOption.bind(this);
//    }
//    handleDeleteOption(e) {
//        e.preventDefault();
//
//    }
//}

const Option = (props) => {
    return (
        <div>
            <p>
                {props.title}
                <button
                    onClick={(e) => {
                        props.handleDeleteOption(props.title)
                    }}>
                    remove
                </button>
            </p>
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

        this.setState(() => ({
            error
        }))

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