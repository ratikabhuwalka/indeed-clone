import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/components/common/MenuTheme";
import Main from "./Main.js";
import Header from "./components/common/Header";
import { useSelector } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	//To extract isAuth data from redux store
	//const isAuth = useSelector((state) => state.login.isAuth);
	return (
		<ThemeProvider theme={theme}>
			{/* <div className="App">
        {isAuth ? <Header /> : <></>}
        <Main />
      </div> */}
			<Main />
		</ThemeProvider>
	);
}

export default App;
