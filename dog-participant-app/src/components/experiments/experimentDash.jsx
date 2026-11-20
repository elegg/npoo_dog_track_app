import { useStore } from '@nanostores/react'
import DashboardLayout from '../dashboardLayout'
import { NavbarSimple } from '../navbar'
import { $currentExperiment } from '../../api/experiments/fetcher'
import { FocusedExperiment } from './experimentFocus'
import { ExperimentList } from './experimentList'

export function ExperimentDashboard({version, id}){

    return <DashboardLayout Nav={<NavbarSimple/>} Main={version ==="experiment" ? <FocusedExperiment/> : <ExperimentList/>}></DashboardLayout>
}