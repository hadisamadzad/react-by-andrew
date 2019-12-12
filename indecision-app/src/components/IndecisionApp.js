import React from 'react';
import Header from './Header';
import Options from './Options';
import AddOption from './AddOption';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
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

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
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
        this.setState(() => ({
            selectedOption: this.state.options[picked]
        }));
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
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption} />
                        <AddOption
                            handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp;