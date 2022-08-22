import './App.css';
import Card from "./Card";

function App() {
    const toRenderProps = [
        {
            title: 'hi'
        },
        {
            text: 'how are you?'
        },
        {
            title: 'hi',
            text: 'how are you?'
        }
    ]
    return (
        <div className="app">
            {toRenderProps.map(prop => <Card title={prop.title} text={prop.text}/>)}
        </div>
    );
}

export default App;
