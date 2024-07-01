# ReacrJS and Redux toolkit

![img](https://rof1yev-blog.vercel.app/_next/static/media/react-redux.82c8ff3a.jpg)

In this project, we will make money transfers with the frontend through ReactJS and Redux toolkit

## To set up the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Rofiyev/React-Redux-Toolkit_Transfer-of-money.git
   cd React-Redux-Toolkit_Transfer-of-money
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```
   
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br/>
<hr/>

# Configuring the programming environment

## Step 1: How to set up the project

Create a new React project by running the following command in your terminal. Replace "your-project-name" with the name of your project.

`npm create vite@latest your-project-name -- --template react`

`cd your-project-name`

`npm install`

The above command sequence will create a new React project using the Vite build tool and install all necessary dependencies.

## Step 3: How to set up reducers

Now let's create the reducer for our application.

In the `src` directory, create a new folder called `reducers`, and inside that folder, create two new files: `index.js` and `taskReducer.js`

The `index.js` file represents the root reducer, which combines all the individual reducers in the application. In contrast, the `taskReducer.js` file is one of the individual reducers that will be combined in the root reducer.

```javascript
import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
```

<p align="center">index.js</p>

In the above `index.js` file, we use the `combineReducers` function to combine all the individual reducers into a single root reducer. In this case, we only have one reducer (`taskReducer`), so we pass it in as an argument to `combineReducers`.

The resulting combined reducer is then exported so that other files in the application can import and use it to create the store.

Here's the code for `taskReducer`:

```javascript
const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

export default rootReducer;
```

<p align="center">taskReducer.js</p>

Inside the above `taskReducer.js` file, we define a reducer function that takes two arguments: `state` and `action`. The `state` argument represents the current state of the application, while the `action` argument represents the action being dispatched to update the state.

The `switch` statement inside the reducer handles different cases based on the "type" of the action. For example, if the action type is `ADD_TASK`, the reducer returns a new state object with a new `task` added to the tasks array. And if the action type is `DELETE_TASK`, the reducer returns a new state object with the current tasks filtered to remove the task with the specified `id`.

## Step 4: How to create the Redux store

Now that we have our basic setup ready, let's create a new file called `store.js` in the `src` directory. This is where you'll define your Redux store:


```javascript
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import taskReducer from "./reducers/taskReducer";

const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
```

The code above sets up a Redux store by creating a new instance of the store using the `createStore` function. Then, the rootReducer – which combines all the application's reducers into a single reducer – is passed as an argument to `createStore`.

In addition, the code also uses two other libraries: `redux-thunk` and `redux-devtools-extension`.

The `redux-thunk` library allows you to write asynchronous actions, while the `redux-devtools-extension` library enables you to use the Redux DevTools browser extension to debug and inspect the state and actions in the store.

Finally, we export the store so we can use it in our application. We use the `composeWithDevTools` function to enhance the store with the ability to use the Redux DevTools extension, and the `applyMiddleware` function to apply the thunk middleware to the store."

## Step 5: How to connect the Redux Store to the application
To connect the Redux store to the ToDo application, we need to use the `Provider` component from the `react-redux` library.

First, we import the `Provider` function and the Redux store we created into our `main.jsx`. Then, we wrap our `App` component with the `Provider` function and pass the `store` as a prop. This makes the Redux store available to all the components inside the `App`.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```
## Step 6: How to use Redux DevTools
Once you've set up the Redux `<Provider>` in your application, you can start using the Redux DevTools extension. To get started with it, you'll need to download the Redux DevTools Extension for your browser.

After installation, the DevTools will add a new tab to your browser's Developer Tools specifically for Redux.

![redux devtools](https://i.imgur.com/QPPsZDT.gif)

Clicking on the "State" tab within the Redux DevTools will show you the entire state of your Redux store and any actions that have been dispatched and their payloads.

This can be incredibly useful when debugging your application, as you can inspect the state and actions in real-time.

## Step 7: How to set up Redux Actions
Now that we have everything set up, let's create our actions. As I mentioned before, actions represent something that happened in the application. For example, when a user adds a new task, it triggers an "add task" action. Similarly, when a user deletes a task, it triggers a "delete task" action.

To create the actions, create a new folder called "actions" in the `src` directory and then create a new file called `index.js`. This file will contain all of the action creators for our application.

```javascript
export const addTodo = (text) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: new Date().getTime(),
      text: text,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};
```

The above code exports two action creators: `addTodo` and `deleteTodo`. These functions return an object with a `type` property that describes the action that has occurred.

In the case of `addTodo`, the `type` property is set to `"ADD_TASK"`, indicating that a new task has been added. The `payload` property contains an object with the new task's `id` and `text` values. The `id` is generated using the `new Date().getTime()` method creates a unique identifier based on the current timestamp.

In the case of `deleteTodo`, the type property is set to `"DELETE_TASK"`, indicating that a task has been deleted. The `payload` property contains the `id` of the task to be deleted.

These action creators can be dispatched to the Redux store using the `dispatch()` method, which will trigger the corresponding reducer function to update the application state accordingly.

## Step 8: How to dispatch actions

Now that we have created the necessary actions, we can move on to creating the components that will dispatch these actions.

Let's create a new folder named "components" inside the src directory. Inside this folder, we will create two new files: `Task.jsx` and `TaskList.jsx`.

The `Task.jsx` component will be responsible for adding tasks. But before we proceed, we need to import the following into the file:

- <em>addTodo action</em>: To add new tasks to the state.

- <em>useDispatch hook</em>: To dispatch the `addTodo` action.

- <em>useRef</em>: Allows us to obtain a reference to HTML elements.

```javascript
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
```

Once we have imported these necessary components, we can proceed to write code for `Task.jsx`.

```javascript
const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function addNewTask() {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  }

  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="taskInput"
        />
        <button onClick={addNewTask}>Add task</button>
      </div>
    </div>
  );
};

export default Task;
```

In the code above, we created a component consisting of an input field and a button. When a user clicks on the "Add task" button, the `addNewTask` function is executed. This function uses the `useRef` hook to obtain the input field's value, removes any leading or trailing whitespaces, and then dispatches the `addTodo` action with the new task as the payload.

Now, let's move on to the `TaskList.jsx` component, responsible for rendering the list of tasks and handling task deletions. To achieve this, we need to import the following:

- The **useSelector** hook provides access to the state from the Redux store.
- The **deleteTodo action**, is responsible for removing a task from the list of tasks in the Redux store.

```javascript
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions";
```

We will now write code for `TaskList.jsx` that maps over the tasks array and renders each task:

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3>Your tasks:</h3>
        <ul className="tasks">
          {tasks.map((task) => (
            <li className="task" key={task.id}>
              {task.text}
              <button
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
```

Here, the component loops over each task in the tasks array and displays text and a delete button. When the user clicks the delete button, the `handleDelete` function is called, dispatching the `deleteTodo` action with the task's `id` as the payload.

Finally, import the components into your `App.jsx` file and render them.

```javascript
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Task />
      <TaskList />
    </div>
  );
}

export default App;
```

## Step 9: Styling
For styling, copy the contents of this gist and paste it into your `index.css` file. The focus of this guide is only on functionality and not on styling. Therefore, only basic styles were included to ensure the application looked presentable.

## Final Result
After implementing everything, the final result of our ToDo List application should look something like this:

![finish](https://i.imgur.com/AACNPOW.gif)

As shown above, we can add tasks by entering texts in the input field and clicking the "Add task" button. We can also delete tasks by clicking the "delete" button next to each task.

The state and actions of the application can also be easily tracked and inspected using Redux DevTools. This feature helps debug and understand how the app works under the hood.

# How to Use Redux Toolkit

Writing Redux code can become complex and verbose, particularly as the size of an application grows. As the number of reducers and actions increase, it can become challenging to manage the different pieces and keep track of everything.

Fortunately, Redux Toolkit provides a solution to this problem. It gives a more streamlined and efficient way to manage the state of your application by abstracting away some of the more complex and repetitive aspects of Redux, such as creating reducers and actions.

# Advantages of Redux Toolkit

Redux Toolkit provides several advantages over traditional Redux:

- It is easier to set up and requires fewer dependencies.
- 
- Reduces boilerplate code by allowing the creation of a single file known as "slice" that combines actions and reducers.
- 
- Provides sensible defaults for commonly used features, such as Redux Thunk and Redux DevTools. This means that you don't have to spend time configuring these features yourself, as they are already built into Redux Toolkit.
- 
- It uses the immer library under the hood, which enables direct state mutation and eliminates the need for manually copying the state `{...state}` with every reducer.

In the next sections, we will explore how to use Redux Toolkit to simplify the Redux code for the ToDo application we built earlier.

## How to set up Redux Toolkit

To use Redux Toolkit in your React application, you need to install two dependencies: `@reduxjs/toolkit` and `react-redux`.

The `@reduxjs/toolkit` package provides the necessary tools to simplify Redux development, while `react-redux` is needed to connect your Redux store to your React components.

`npm install @reduxjs/toolkit react-redux`

## How to create a slice

Once you have installed the needed dependencies, create a new "slice" using the `createSlice` function. A slice is a portion of the Redux store that is responsible for managing a specific piece of state.

Think of the Redux store as a cake, where each slice represents a specific piece of data in the store. By creating a slice, you can define the behaviour of the state in response to particular actions using reducer functions.

To create a slice to manage our ToDo application, create a new file named `src/features/todo/todoSlice.js` and add the following code.

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
```

The above code defines a slice named `todoSlice`, with an `initialState` object that contains an empty array of tasks.

The `reducers` object defines two reducer functions: `addTask` and `deleteTask`. `addTask` pushes a new task object into the tasks array, and `deleteTask` removes a `task` from the tasks array based on its `id` property.

The `createSlice` function automatically generates action creators and action types based on the names of the reducer functions you provide. So you don't have to define the action creators yourself manually.

The `export` statement exports the generated action creators, which can be used in other parts of your app to dispatch actions to the slice.

And finally, the `todoSlice.reducer` function handles all actions automatically generated based on the reducer objects provided to the `createSlice` function. By exporting it as the default, you can combine it with other reducers in your application to create a complete Redux store.

## How to set up Redux Store

Creating a Redux store is much simpler with Redux Toolkit.

The most basic way to create a store is to use the `configureStore()` function, which automatically generates a root reducer for you by combining all the reducers defined in your application.

To create a store for the application, add a file named `src/store.js` and add the following code:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
```

In this example, we first import the `configureStore` function from the `@reduxjs/toolkit` package, and the  `todoReducer` function from a separate file.

Then, we create a `store` object by calling `configureStore` and passing it an object with a `reducer` property. The `reducer` property is an object that maps reducer slice names to their corresponding reducer functions. In this case, we have one reducer slice called `todo`, and its corresponding reducer function is `todoReducer`.

Finally, we export the `store` object so that it can be imported and used in other parts of the application.

## How to provide the Redux store to React

To make your Redux store available to the React components in your application, import the Provider component from the `react-redux` library and wrap your root component (usually `<App>`) with it.

The Provider component takes in the store as a prop and passes it down to all the child components that need access to it.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import store from "./store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## Create components

You can now create React components such as `Task.jsx` and `TaskList.jsx` that use the `useSelector` hook to access the current state from the store. Similarly, you can use the `useDispatch` hook to dispatch actions to update the store, just as you did in plain Redux.

You should now have the same app as before with a few updates from Redux Toolkit and a lot less code to maintain.

## Conclusion

If you've followed along with this tutorial, you should now have a solid understanding of Redux, both the traditional approach and the simplified version using Redux Toolkit.


