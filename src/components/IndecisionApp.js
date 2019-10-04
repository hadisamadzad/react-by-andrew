import React from 'react';
import Header from './Header';
import Options from './Options';
import AddOption from './AddOption';
import Action from './Action';

class IndecisionApp extends React.Component {

    state = {
        options: []
    };

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

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }));
    }
    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => {
                return item !== option
            })
        }));
    }
    handlePick = () => {
        const count = this.state.options.length;
        const picked = Math.floor(Math.random() * count);
        alert(this.state.options[picked]);
        return picked;
    }
    handleAddOption = (option) => {
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

export default IndecisionApp;