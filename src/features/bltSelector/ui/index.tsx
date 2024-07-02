import React, { useEffect, useState } from 'react';
import { getDevices } from "../../../enteties/bluetooth";
import { Selector } from "../../../shared/selector";


function BluetoothDevicesSelector() {

    const [devices, setDevices] = useState<BluetoothDevice[]>([]);

    useEffect(() => {

        getDevices()
        .then((dev) => setDevices(dev) )

    }, [])

    return (
        devices.length !== 0 ? <Selector devices={devices} /> : <h1>DEVICES NOT FOUND</h1>
    )
    
}

export { BluetoothDevicesSelector }

