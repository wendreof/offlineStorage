import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, Form, Input, Submit, Title
} from './styles';

export default function Main() {
  return (
    <Container>
    <Title>Repositories</Title>
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
      />
      <Submit onPress={() => {}}>
<Icon name="add" size={22} color="#FFF" />
      </Submit>
      </Form>
    </Container>
  );
}
