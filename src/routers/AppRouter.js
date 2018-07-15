import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from '../components/Navigation';
import HowItWorks from '../components/HowItWorks';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

const AppRouter  = () =>{
    return(
<div>
        <div>
            <Navigation />
                <Switch>
                <Route path="/" component={Navigation} exact={true} />
                <Route path="/how-it-works" component={HowItWorks}/>
                <Route path="/faq" component={Faq}/>
                <Route path="/contact" component={Contact} />
                </Switch>
        </div>
</div>
    );
}


export default AppRouter;