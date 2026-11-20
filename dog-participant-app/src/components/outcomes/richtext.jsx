import { Typography , Stack} from "@mantine/core";


export function HTMLTextElement({data}){


    return <Stack fz="1.3em" maw={600}><Typography fw="lighter"> <div dangerouslySetInnerHTML={{ __html: data }}></div></Typography></Stack>
}