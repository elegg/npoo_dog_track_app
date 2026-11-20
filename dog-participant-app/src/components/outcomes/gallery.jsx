import { Carousel } from '@mantine/carousel';
import {  Group , Image, Center} from '@mantine/core';
export function Gallery({data}) {
    console.log(data)
  return (
    <Group align='center' justify='center' p="lg">
    <Carousel withIndicators  w="50%">
        {data?.image.map(img=><Carousel.Slide ><Center>
            <Image fit="contain"  h={340} w={"auto"} src={"http://localhost:3000"+img.url}/>
            </Center></Carousel.Slide>)}
     
    </Carousel>
    </Group>
  );
}