import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="App">
    <button
        onClick={async () => {
            const fetchApi = async () => {
                console.log("You have clicked the button!");
                try {
                    const response = await fetch(
                        "http://localhost:8080/custom"
                    );
                    const text = await response.text();
                    console.log("Response: ", text);
                } catch (e) {
                    console.error(e);
                }
            };fetchApi()
        }}>Bottone</button>
</div>
  );
}

export default App;
