import React from 'react';

class AddOption extends React.Component {

    state = {
        error: undefined
    };

    handleAddOption = (e) => {
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
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="newOption" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;