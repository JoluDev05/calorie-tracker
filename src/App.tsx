import { useReducer } from "react";
import Form from "./components/Form";
import { activityReducer, initialState } from "./reducers/activity-reducer";
import ActivityList from "./components/ActivityList";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  console.log(state);

  return (
    <>
      <header>
        <div className="bg-lime-600 py-3">
          <h1 className="max-w-4xl mx-auto flex justify-between">
            Contador de calorias
          </h1>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>
    </>
  );
}

export default App;
