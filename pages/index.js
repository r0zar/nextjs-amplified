import * as React from "react";
import reducer from './reducer'
import { nanoid } from 'nanoid'
import { API, graphqlOperation } from "aws-amplify";
import config from "../src/aws-exports";
import { createTodo } from "../src/graphql/mutations";
import { listTodos } from "../src/graphql/queries";
import { onCreateTodo } from "../src/graphql/subscriptions";

API.configure(config);
// Should be a device id or a cognito user id but this will do
const MY_ID = nanoid();

const App = ({todos}) => {
  // The reducer defined before
  const [state, dispatch] = React.useReducer(reducer, {
    currentTodo: "",
    todos
  });
  React.useEffect(() => {
    const listener = API.graphql(graphqlOperation(onCreateTodo));
    console.log('LISTENER', listener)
    const subscription = listener.subscribe(v => {
      console.log('V', v)
      dispatch({ type: "add", payload: v.value.data.onCreateTodo });
    });
    console.log(subscription)
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  const add = async () => {
    const todo = {
      id: nanoid(),
      name: state.currentTodo
    };
    dispatch({
      type: "add",
      payload: todo
    });
    // Optimistic update
    dispatch({ type: "set-current", payload: "" });
    try {
      await API.graphql(
        graphqlOperation(createTodo, {
          input: { ...todo }
        })
      );
    } catch (err) {
      // With revert on error
      dispatch({ type: "set-current", payload: todo.name });
    }
  };
  const edit = (todo /*:Todo*/) => {
    dispatch({ type: "update", payload: todo });
  };
  const del = (todo /*:Todo*/) => {
    dispatch({ type: "delete", payload: todo });
  };
  return (
    <>
      <header>
        <h2>To Do List</h2>
      </header>
      <main>
        <form
          onSubmit={event => {
            event.preventDefault();
            add(state.currentTodo);
          }}
        >
          <input
            type="text"
            value={state.currentTodo}
            onChange={event => {
              dispatch({ type: "set-current", payload: event.target.value });
            }}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {state.todos.map(todo => {
            return (
              <li key={todo.id}>
                <input
                  type={"text"}
                  value={todo.name}
                  onChange={event => {
                    edit({ ...todo, name: event.target.value });
                  }}
                />
                <button
                  onClick={() => {
                    del(todo);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  let result;
  try {
    // Fetch our list from the server
    result = await API.graphql(graphqlOperation(listTodos));
  } catch (err) {
    console.warn('ERR', err);
    return { props: { todos: [] }};
  }
  if (result.errors) {
    console.warn("Failed to fetch listTodos. ", result.errors);
    return { props: { todos: [] }};
  }
  if (result.data.getTodoList !== null) {
    return { props: { todos: result.data.listTodos.items }};
  }
};

export default App;
