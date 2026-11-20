import { useStore } from '@nanostores/react'
import DashboardLayout from '../dashboardLayout'
import { NavbarSimple } from '../navbar'

import { MiniMessage } from './miniMessage'
import { MiniMessageList } from './miniMessageList'
import MessagePanel from './messagePanel'
import { useMessagesApi } from '../../api/messages/fetch_all'
import { useThreadsApi } from '../../api/threads/fetch_all'
export function MessageDashboard({version, id}){

        let messages = useThreadsApi()

        console.log({messages, "THREAD":"from threads"})

    return <DashboardLayout Nav={<NavbarSimple/>} Main={<MessagePanel messages = {messages?.data?.docs ? messages.data.docs : []}/>}></DashboardLayout>
}