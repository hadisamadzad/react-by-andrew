
let app = {
    title: 'Going Again but ...',
    subtitle: 'This app is new edition of simple apps!'
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
};

let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button type="submit">Add Option</button>
        </form>

    </div>
);

let appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);