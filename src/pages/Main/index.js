import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Repository from '~/components/Repository';
import {
  Container, Form, Input, Submit, Title, List,
} from './styles';

export default function Main() {

  const [input, setInput] = useState('');

  function handleAddRepository(){
    console.
  }

  return (
    <Container>
    <Title>Repositories</Title>
      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
      />
      <Submit onPress={handleAddRepository}>
<Icon name="add" size={22} color="#FFF" />
      </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'wendreof',
            description: 'wendreof repository',
            stars: 1234,
            forks: 199,
          },
        ]}
        KeyExtractpr={item => String(item.id)}
        renderItem={({item}) => (
        <Repository data={item}/>
        )}
        />
    </Container>
  );
}
