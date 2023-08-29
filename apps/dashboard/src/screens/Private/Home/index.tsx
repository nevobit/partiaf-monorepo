import Button from '@/components/Shared/Button';
import { Card } from '@/components/UI/Home';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/constant-definitions';


const Home = () => {
  return (
    <div>
      <Button>Partiaf Button</Button>
      <Card />
    </div>
  );
};

export default Home;
