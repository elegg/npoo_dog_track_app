import { Card, Group, Avatar, Stack , Text, ScrollArea, Typography} from "@mantine/core";
//import { useMessagesApi } from "../../api/messages/fetch";
import { useThreadApi } from "../../api/threads/fetch_one";

export const EmailBody=({message, member})=>{

    console.log(message, member)
    let sender = member.filter(m=>m.id===message.sender)

    return <Card w="600px" withBorder p="lg">
            <Card.Section withBorder p="lg"   pb="2px" >
                        <Group>
                        <Avatar.Group>
                            <Avatar size="md" c="blue"/><Avatar c="teal"/>
                            </Avatar.Group >
                            <Stack gap="0px">
                                <Text fw="600" c="gray.6">
                                    {sender ? sender[0].email : "..."}
                                </Text>
                                 


                            
                                            <Text  m="0" p="0" fz="sm">26/11/2025</Text>
                             </Stack>
                             </Group>
            
        </Card.Section>
        <Card.Section p="lg">
            <Text>{message.content}</Text>
            {/*

            If message format is changed to rich text then can always add in the text in html form
             (although adds extra challenge becase user text would need to be escaped before being displayed like this 
             to prevent any possible XSS issues )
            <Typography>{
            typeof(message.content)==="string" && <div dangerouslySetInnerHTML={{ __html: message.content }}/> 
            }
            </Typography>*/}
        </Card.Section>
    </Card>
}

export function EmailList(){

   let msgs =  useThreadApi()
   console.log(msgs, msgs?.data?.message)
   
    return <>{msgs?.data?.message?.docs && <ScrollArea h="50vh">
        <Stack >
       {msgs?.data?.message?.docs.map(e=> <EmailBody message={e} member={msgs?.data?.member}/>)}
       </Stack>
    </ScrollArea>}</>
}