import React from 'react';
import type { SqueakyPage } from 'types/page';

const Ping: SqueakyPage = () => <p>PONG</p>;

Ping.getMetaData = () => ({
  title: 'PING',
  description: 'PING',
  index: false,
});

export default Ping;
