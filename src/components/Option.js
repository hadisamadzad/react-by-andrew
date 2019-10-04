
import React from 'react';

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

export default Option;