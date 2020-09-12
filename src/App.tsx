import React from 'react';
import './App.scss'
import { Startpage, QuestionsPage } from './components/index'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootStore } from './Store';
import { getAmountEnteredInSession, getQuestionInSession } from './util';

import Finished from './components/Finished/Finished';
import NotAvailable from './components/NotAvailable/NotAvailable';

const App = () => {
  // const isSelectionSuccedded = useSelector((state: RootStore)=> state.isSelectionSuccess.success)
  //const data = getQuestionInSession(); // use this to check whether we have answered questions
  // const {currentIndex} = useSelector((state: RootStore) => state.currentIndexAtQuestion);
  // const amount = getAmountEnteredInSession();

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route exact path={["/quiz-app-2", "/quiz-app-2/selection"]} component={Startpage}/>
            <Route exact path="/quiz-app-2/questions" component={QuestionsPage}/>
            
          </Switch>  
        </Router>
      </div>
    </div>
  );
}

export default App;
