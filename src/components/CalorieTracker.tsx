import CalorieDisplay from "./CalorieDisplay";
import { useActivity } from "../hooks/useActivity";



export default function CalorieTracker() {

    const activity = useActivity();

    if (!activity) return null;

    const {caloriesConsumed, caloriesBurned, netCalories} = activity;


    
  return (
    <>
        
        <h2 className="text-4xl font-black text-white text-center "> Resumen de calorías</h2>

        <div className="flex flex-center items-center md:flex-row md:justify-between gap-5 mt-10">
            <CalorieDisplay
                calories={caloriesConsumed}
                text="Consumidas"
             />

            <CalorieDisplay
                calories={caloriesBurned}
                text="Ejercicio"
             />
             <CalorieDisplay
                calories={netCalories}
                text="Diferencia"
             />
        </div>
    </>
  )
}
