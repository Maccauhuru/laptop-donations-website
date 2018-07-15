import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import UsageSection from './components/Usage-Section';
import PreviousDonations from './components/PreviousDonations';
import SignUpSection from './components/SignUpSection';
import Footer from './components/Footer';
import AppRouter from './routers/AppRouter';


const App = ()=>{
return(
    <div>
        <Navigation />
        <Hero />
        <UsageSection />
        <PreviousDonations />
        <SignUpSection />
        <Footer />
    </div>
        )
    }

const jsx = (
    <BrowserRouter >
    <App />
    </BrowserRouter>
);


let appRoot = document.getElementById("app-info");
ReactDOM.render(jsx,appRoot);

