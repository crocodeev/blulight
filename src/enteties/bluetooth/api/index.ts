export async function getDevices() {
    
    const devices = await window.navigator.bluetooth.getDevices()

    return devices
}

