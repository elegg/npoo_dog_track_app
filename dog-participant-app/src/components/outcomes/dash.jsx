import { useStore } from '@nanostores/react'
import DashboardLayout from '../dashboardLayout'
import { NavbarSimple } from '../navbar'
import { Gallery } from './gallery'
import { useOutcomesApi } from '../../api/outcomes/fetch'
import { HTMLTextElement } from './richtext'
import { Stack, Title, Paper } from '@mantine/core'

function PolyMorphicOutcomes({data}){

    return <Paper shadow='md'><Stack w={"100%"} p="xl"><Title order={2} c="cyan.6">{data.title || "NO TITLE"}</Title>{data.elements.map(d=><PolyMorphicOutcome data={d}/>)}</Stack></Paper>
}
function PolyMorphicOutcome({data}){

    return <>{data.blockType ==="rt-block" ? <HTMLTextElement data={data.html}/> : <Gallery data = {data}></Gallery>}</>
}

export function OutcomeDashboard({version, id}){
    let outcomes = useOutcomesApi()

    return <DashboardLayout Nav={<NavbarSimple/>} Main={
    <>
    <Stack bg="gray.1" p="xl" mih={"100vh"}>
    {outcomes.map(d=><PolyMorphicOutcomes data={d}/>)}
    </Stack>

</>


    }></DashboardLayout>
}