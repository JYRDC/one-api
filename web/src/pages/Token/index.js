import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import TokensTable from '../../components/TokensTable';

const Token = () => (
  <>
    <Segment>
      <Header as='h3'>我的密钥</Header>
      <TokensTable/>
    </Segment>
  </>
);

export default Token;
