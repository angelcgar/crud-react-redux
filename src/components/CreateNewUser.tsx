import { Badge, Button, Card, TextInput, Title } from '@tremor/react';
import { useUserActions } from '../hooks/useUsers';
import { useState } from 'react';

export function CreateNewUser() {
  const { addUser } = useUserActions();
  const [result, setResult] = useState<'ok' | 'ko' | null>(null);

  const handleSumit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult(null);

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const github = formData.get('github') as string;

    if (!name || !email || !github) {
      return setResult('ko');
    }

    addUser({ name, github, email });
    setResult('ok');
    form.reset();
  };

  return (
    <Card className="mt-2 flex flex-col items-center">
      <Title>Crear nuevo usuario</Title>

      <form action="" onSubmit={handleSumit}>
        <TextInput name="name" placeholder="Nombre" />
        <TextInput name="email" placeholder="email" />
        <TextInput name="github" placeholder="Github" />

        <div>
          <Button className="mt-3" type="submit">
            Crear
          </Button>
          <span>
            {result === 'ok' && <Badge color="green">User created</Badge>}
          </span>
          <span>
            {result === 'ko' && <Badge color="red">Error al crear</Badge>}
          </span>
        </div>
      </form>
    </Card>
  );
}
