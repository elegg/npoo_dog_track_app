import { useStore } from "@nanostores/react"
import {Stack} from '@mantine/core'
import { $allExperiment } from "../../api/experiments/fetcher_all"
import { SimpleExperimentCard } from "./simpleCard"

export let ExperimentList = ()=>{

        let experiment = useStore($allExperiment)
        return <Stack p="lg">
        
        {experiment && experiment?.data?.docs?.length ? 

            experiment.data.docs.map((exp,i)=><SimpleExperimentCard key={i} experiment={exp}/>) : JSON.stringify(experiment)
        

        }
         </Stack>
    
}