import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {tasksReducer} from "../../redux/reducers/tasks-reducer";
import {todolistsReducer} from "../../redux/reducers/todolists-reducer";
import {ReactNode} from "react";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolist: todolistsReducer
});

export const storyBookStore = createStore(rootReducer, applyMiddleware(thunk));

export const AppDecoratorStories = (storyFn: () => any) => { //React.ReactNode - возвращает JSX
    return (
        <Provider store={storyBookStore}>
            {storyFn()}
        </Provider>
    );
};