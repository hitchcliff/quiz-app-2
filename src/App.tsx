import React from 'react';
import './App.scss'
import { Startpage, QuestionsPage } from './components/index'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootStore } from './Store';
import { getQuestionInSession } from './util';
import Finished from './components/Finished/Finished';
import NotAvailable from './components/NotAvailable/NotAvailable';

const App = () => {
  const isSelectionSuccedded = useSelector((state: RootStore)=> state.isSelectionSuccess.success)
  const data = getQuestionInSession(); // use this to check whether we have answered questions
  const {currentIndex} = useSelector((state: RootStore) => state.currentIndexAtQuestion);
  const {amount} = useSelector((state: RootStore) => state.selection);

  const renderFinishOnceDone = () => {
    if(!data) return null;   
    else if (amount === (currentIndex + 1)) return <Finished/>
  }

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route exact path={["/", "/quiz-app-2", "/selection"]} component={Startpage}/>
            <Route exact path={["/", "/quiz-app-2"]}>
              {isSelectionSuccedded ? <Redirect to="/question"/>
              : <Startpage/>}
            </Route>
            {renderFinishOnceDone()}
            <Route path={["/questions", "/quiz-app-2"]} component={QuestionsPage}/>
            <Route path={["/404", "/quiz-app-2"]} component={NotAvailable} />
            
          </Switch>  
        </Router>
      </div>
    </div>
  );
}

export default App;
