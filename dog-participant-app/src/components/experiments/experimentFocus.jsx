import { useStore } from "@nanostores/react"
import { $currentExperiment } from "../../api/experiments/fetcher"
export let FocusedExperiment = ()=>{
        let experiment = useStore($currentExperiment)
        return <>{experiment ? JSON.stringify(experiment) :"No Experiment"} </>
    
}