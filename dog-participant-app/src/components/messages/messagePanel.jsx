
import { useRouter } from "../../api/routes/route";
import { MessageEditor } from "./messageComposer";
import { EmailBody, EmailList } from "./messagePaper";

import { MiniMessageList } from "./miniMessageList";
import { Group, Stack} from "@mantine/core";
export default function MessagePanel({messages}){


    
    return <Group h="100%" align="top" p="0"  >
        <MiniMessageList messages={messages} />
        <Stack p="md" gap="sm">
            <MessageEditor/>
       <EmailList/>
       </Stack>
    </Group>
}