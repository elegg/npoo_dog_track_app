import { Avatar, AvatarGroup, Box, Card, Text, Title, Group, Stack } from "@mantine/core";

export function MiniMessage({message, selected, unread , path, thread}){


    
    return <Card component="a" href={"/dashboard/messages/"+thread}  withBorder  w="340px" bd = {selected && "solid purple 1px"} bg={selected ?  "grape.0" : "gray.1"}>
        <Card.Section  p="sm" pl="sm" pb="2px" >
            <Group>
            <Avatar.Group>
                <Avatar size="md" color="cyan"/><Avatar color="gray"/>
                </Avatar.Group >
                <Stack gap="0px">
                <Text m="0" p="0" fw="600" c={unread && "cyan.8"}>{"Ivan Horvat"}</Text>
                                <Text  m="0" p="0" fz="sm">26/11/2025</Text>
                 </Stack>

                </Group>
                </Card.Section >
                <Card.Section p="sm" pt="2px">
                <Text fw="700" c="gray.8">{message?.experiment?.title}</Text>
                <Text>{message.content}</Text>
                </Card.Section>
                </Card>

}