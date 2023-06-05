import Button from '@/components/Shared/Button';
import { Card } from '@/components/UI/Home';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/constant-definitions';
import Login from '../Login';

const Home = () => {
  return (
    <div>
      <Login/>
      <Button>Partiaf Button</Button>
      <Card />
    </div>
  );
};

export default Home;
