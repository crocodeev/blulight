import React from 'react';
import './App.css';
import { Button } from '../../shared/button';
import { BluetoothDevicesSelector } from '../../features/bltSelector';

function App() {
  return (
    <div className="App">
      <Button />
      <BluetoothDevicesSelector />
    </div>
  );
}

export  { App };
