import { useReducer } from "react"
import Form from "./components/Form"
import  { activityReducer, initialState } from "./reducers/activity-reducer"



function App() {

     const [state, dispatch] = useReducer(activityReducer, initialState)
  
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
                  <Form 
                    dispatch={dispatch} 
                    
                  />
              </div>
          </section>
    </>
  )
}

export default App
