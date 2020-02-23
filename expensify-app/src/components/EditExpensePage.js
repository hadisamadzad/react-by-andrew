import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Here is edit expense with id:{props.match.params.id}
        </div>
    );
};

export default EditExpensePage;