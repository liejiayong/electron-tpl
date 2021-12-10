import { ipcRenderer } from 'electron';

export default {
  send(name:string, data:object = {}) {
    return new Promise((resolve, reject) => {
      ipcRenderer
        .invoke(name, data)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  remove(data:string) {
    ipcRenderer.removeAllListeners(data);
  },
};