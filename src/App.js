import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
      </Switch>
    </Router>
    </>
  );
}
