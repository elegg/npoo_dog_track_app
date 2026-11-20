import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
  Schedule
} from '@tauri-apps/plugin-notification';
// when using `"withGlobalTauri": true`, you may use
// const { isPermissionGranted, requestPermission, sendNotification, } = window.__TAURI__.notification;

// Do you have permission to send a notification?

export let notify = async ()=>{
let permissionGranted = await isPermissionGranted();

// If not we need to request it
if (!permissionGranted) {
  const permission = await requestPermission();
  permissionGranted = permission === 'granted';
}

// Once permission has been granted we can send the notification
if (permissionGranted) {
   
    const schedule = Schedule.at(new Date(Date.now() + 100 * 1000));
   let x= await sendNotification({ title: 'Tauri', body: 'One minute later',  schedule});

   console.log({x})
}
}