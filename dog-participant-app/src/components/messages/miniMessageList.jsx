import { MiniMessage } from "./miniMessage";
import { Stack , Box, Text, ScrollArea} from "@mantine/core";


export function MiniMessageList({messages, path}) {


    console.log({messages})

    return <ScrollArea  bd="1px lightgrey solid" h="90vh" c="white" gap="0">
        <Box c="black" bg="white" mb="4px" p="md"><Text fw="600">Messages</Text></Box>
                {messages && messages.map((msg, i)=><MiniMessage  message={msg} key={msg} path={path} thread={msg.id} key={i}/>)}
        </ScrollArea>
}