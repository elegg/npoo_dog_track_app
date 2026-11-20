import { useStore } from '@nanostores/react'

import { $router } from '../api/routes/route'
import { Login } from './login'
import { Dashboard } from './dash'
import { ExperimentDashboard } from './experiments/experimentDash'
import { $currentExperiment, $selectedExperimentID } from '../api/experiments/fetcher'
import { MessageDashboard } from './messages/messagesDash'
import { $selectedMessageID } from '../api/messages/fetch'
import { $me , jwt} from '../api/me/store'
import { openPage } from '@nanostores/router'
import { $selectedThreadID } from '../api/threads/fetch_one'
import { OutcomeDashboard } from './outcomes/dash'

export const Pages = () => {
  const page = useStore($router)
  const isLoggedIn = useStore(jwt)

  

  switch(true){

    case !isLoggedIn:
        openPage($router, "home")
        return <Login></Login>

    
    case !page:
        return <p>Error</p>


    case page.route === 'home':
        return <Login></Login>

    case page.route==="dashboard":
       return <Dashboard />

    case page.route ==="experiment":
            $selectedExperimentID.set(page.params.id)
        return <ExperimentDashboard version={"experiment"} id={page.params.id}/>

    case page.route ==="experimentList":
        return <ExperimentDashboard version={"experiment.list"}/>

    case page.route ==="messages":
        if(page.params.id){
            $selectedThreadID.set(page.params.id)
        }
        return <MessageDashboard/>

    case page.route ==="outcomes":
        return <OutcomeDashboard/>





    default:
        return <p>Error</p>
  }

}