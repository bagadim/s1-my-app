import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

const App = () => {
    const buttonText = { text: 'Click me' };
    const btnStyle = {
        backgroundColor: 'blue',
        color: 'white',
        border: '1px solid red',
    };
    const labelText = 'Enter name';
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input type="text" id="name" />
            <button style={btnStyle}>{buttonText.text}</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
