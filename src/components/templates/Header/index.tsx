import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row } from '../../atoms';
import { HeaderLayout } from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <HeaderLayout isCenter>
      <Button
        size={'H_56'}
        label="LOGO"
        type={'solid-gray'}
        onPress={() => navigate('/')}
      />
      <Row>
        <Button
          size={'H_32'}
          label="북마크"
          type={'outline-gray'}
          onPress={() => navigate('/bookmark')}
        />
      </Row>
    </HeaderLayout>
  );
};

export default Header;
