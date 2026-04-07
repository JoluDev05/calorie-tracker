import { createContext, useMemo, useReducer } from "react";
import type { ReactNode, Dispatch } from "react";
import { activityReducer, initialState, type ActivityActions, type ActivityState } from "../reducers/activity-reducer";
import { categories } from "../data/categories";
import type { Activity } from "../types";

type ActivityProviderProps = {
  children: ReactNode;
};

export type ActivityContextProps = {
    state: ActivityState,
    dispatch: Dispatch<ActivityActions>
    caloriesConsumed: number,
    caloriesBurned: number,
    netCalories: number,
    categoryName: (category : Activity['category']) => string
    isEmptyActivities: boolean
}

export const ActivityContext = createContext<ActivityContextProps | undefined>(undefined);

export const ActivityProvider = ({ children }: ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState);

    //Contador de calorias
    
  const caloriesConsumed = useMemo(
    () => state.activities.reduce((total, activity) => (activity.category === 1 ? total + activity.calories : total), 0),
    [state.activities]
  );

  const caloriesBurned = useMemo(
    () => state.activities.reduce((total, activity) => (activity.category === 2 ? total + activity.calories : total), 0),
    [state.activities]
  );

  const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [caloriesConsumed, caloriesBurned]);

            
  const categoryName = useMemo(
    () => (category: Activity["category"]) => {
      const cat = categories.find((c) => c.id === category);
      return cat ? cat.name : "";
    },
    [state.activities]
  );

  const isEmptyActivities = useMemo(() => state.activities.length === 0, [state.activities]);
    
    return (
    <ActivityContext.Provider value={{
        state,
        dispatch,
        caloriesConsumed,
        caloriesBurned,
        netCalories,
        categoryName,
        isEmptyActivities

    }}
        >{children}
    </ActivityContext.Provider>
  );
};