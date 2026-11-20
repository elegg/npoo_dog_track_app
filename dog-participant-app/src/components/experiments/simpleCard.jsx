import { Card, Image, Text, Badge, Button, Group, Box } from '@mantine/core';
import { $router } from '../../api/routes/route';
import {useStore} from '@nanostores/react'
export let SimpleExperimentCard = ({experiment})=>{
   let page =  useStore($router)
   console.log({page})
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section>
        <Box c="blue"></Box>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{experiment.title}</Text>
        <Badge color="cyan.2" c="black">Otvoren</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {experiment.description}
      </Text>

      <Button component="a" href={`${page.path}/${experiment.id}`} w="max-content" mt="md">
        Više detalja
      </Button>
    </Card>
  );
}