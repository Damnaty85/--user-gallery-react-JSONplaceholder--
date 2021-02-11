import React from "react";
import "./style/index.scss"
import Users from "./pages/Users";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import { Provider } from "react-redux"
import store from "./redux/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Users}/>
                        <Route path="/albums/:id" component={Albums}/>
                        <Route path="/photos/:id" component={Photos}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
