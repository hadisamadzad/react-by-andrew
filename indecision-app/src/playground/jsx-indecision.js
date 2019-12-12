
let app = {
    title: 'Indecision ...',
    subtitle: 'This app is new edition of simple apps!',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onMakeDecision = () => {
    
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];    
    alert(option);
    render();
};

const onRemoveAll = () => {
    app.options = [];    
    render();  
};


const appRoot = document.getElementById('app');
const render = () => {
    let template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options:" : "No Options"}</p>
            <button disabled={app.options.length > 0 ? false : true} onClick={onMakeDecision}>Make Decision</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }    
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button type="submit">Add Option</button>
            </form>
    
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();