import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box h="100%" w="100%" alignItems="center" justifyContent="center">
        Hello world
      </Box>
    </NativeBaseProvider>
  );
}
