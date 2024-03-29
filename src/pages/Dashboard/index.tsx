import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Button title="sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
