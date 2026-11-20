import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { useState } from 'react';
import { Button, ScrollArea, Stack } from '@mantine/core';
import { atom } from 'nanostores';

import { useAddMessage } from '../../api/messages/add';

let $draftText = atom("")


$draftText.listen(text=>console.log(text))
export function MessageWriter() {
  const [isSourceCodeModeActive, onSourceCodeTextSwitch] = useState(false)

  const editor = useEditor({
    extensions: [StarterKit],
    shouldRerenderOnTransaction: true,
    content: 'Enter text here...',
    onUpdate: ({ editor }) => {
      $draftText.set(editor.getText());
    },
  });


  

  return (
    
    <RichTextEditor editor={editor} onSourceCodeTextSwitch={onSourceCodeTextSwitch} w="100%">
   
<ScrollArea h="140px" w="100%" bg="white">
      <RichTextEditor.Content />
      </ScrollArea>
    </RichTextEditor>
  );
}


export function MessageEditor(){

    let {mutate} = useAddMessage()

    return <Stack bg="gray.1" p="md" bdrs="4px" gap="xs"align='end' >
        <MessageWriter/>
        <Button align='end'w="max-content" onClick={async ()=>{
            let m = mutate({content:$draftText.get()})            
        
        }} >Send</Button>

    </Stack>

}