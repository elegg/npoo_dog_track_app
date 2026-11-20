'use client'


import { AppShell,  Burger, Stack , rem} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';



export default function Layout({Nav, Main}) {
      
  const [opened, { toggle }] = useDisclosure();

  return <AppShell  h="100vh" w="100vw" 
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}>
        <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <AppShell.Navbar p="lg">
            {Nav}

        </AppShell.Navbar>
        </AppShell.Header>
        <AppShell.Main   pt={`calc(${rem(60)})`} >
            
            {Main}


  
  </AppShell.Main>


  </AppShell>
  
}
