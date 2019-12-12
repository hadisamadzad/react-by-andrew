
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

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.title}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.title)
            }}>
            remove
        </button>
    </div>
);

export default Option;