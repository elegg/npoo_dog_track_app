import { useStore } from '@nanostores/react'
import DashboardLayout from './dashboardLayout'
import { NavbarSimple } from './navbar'
import { $currentExperiment } from '../api/experiments/fetcher'
import { FocusedExperiment } from './experiments/experimentFocus'
import { ExperimentList } from './experiments/experimentList'
import { Button } from '@mantine/core'
import { notify } from '../api/notifications/notifications'
export function Dashboard({version, id}){

    return <DashboardLayout Nav={<NavbarSimple/>} Main={
    <>
    <p>Welcome</p>
    <Button onClick={()=>notify()}>Notify</Button>
</>


    }></DashboardLayout>
}