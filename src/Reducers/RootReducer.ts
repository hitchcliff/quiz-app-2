import { combineReducers } from 'redux';
import testReducer from './test/test.reducer';
import QuestionsReducer from './questions/questions.reducer';
import { SelectionReducer } from './questions/selections.reducer';
import { isSelectionSuccessReducer } from './questions/isSelectionSuccess.reducer';
import { scoreReducer } from './questions/score.reducer';
import { currentReducer } from './questions/current.reducer';

const RootReducer = combineReducers({
    test: testReducer,
    questions: QuestionsReducer,
    selection: SelectionReducer,
    isSelectionSuccess: isSelectionSuccessReducer,
    currentScore: scoreReducer,
    currentIndexAtQuestion: currentReducer
})

export default RootReducer  