import { useState } from 'react';
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
  IconCalendarClock,
  IconCircleCheck,
  IconTriangleSquareCircle,
  IconDog,
  IconDogBowl

} from '@tabler/icons-react';
import { useColorScheme } from '@mantine/hooks';

import { Code, Group , Button} from '@mantine/core';

import classes from '../styles/navbarSimple.module.css'
import { $me } from '../api/me/store';
const data = [
      { link: '../../dashboard/experiments', label: 'Eksperimenti', icon: IconDog },
  { link: '../../dashboard/messages', label: 'Poruke', icon: IconBellRinging },
  { link: '../../dashboard/outcomes', label: 'Dovršen', icon: IconDogBowl},

];

export function NavbarSimple({onSelect, selected}) {
  const [active, setActive] = useState(selected);

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
  
   <>
   
        <Group className={classes.header} justify="space-between">
        </Group>
        {links}

      <div className={classes.footer}>
      

        <Button component="a" href="./../" bg="cyan.6" onClick={
          (event) => {
          
        $me.set({})
         }}>
          <IconLogout  className={classes.buttonIcon} stroke={1.5} />
          <span>Logout</span>
        </Button>
      </div> 
    {/*</nav>*/}
    </>
  );
}