import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<div className="app__body">
							<Sidebar />
							<Switch>
								<Route path="/room/:roomId">
									<Chat />
								</Route>
								<Route path="/">
									<h1>welcome</h1>
								</Route>
							</Switch>
							{/*React-router -> Chat screen */}
						</div>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
