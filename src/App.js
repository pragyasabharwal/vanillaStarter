import _ from "lodash";
import "./App.css";

const App = ({ name }) => {
    console.log("you can see my source because of sourcemap")
	return `
    <h2> ${_.join(["Welcome,", name], " ")} </h2>
    <p> Build apps with plain JS but with modern tooling  </p>
    `;
};

export default App;