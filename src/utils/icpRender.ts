import { ipcRenderer } from 'electron';

interface IcpData {
  [key: string]: string | number | boolean;
}

export default {
  send(name: string, data: IcpData): Promise<IcpData> {
    return new Promise((resolve, reject) => {
      ipcRenderer
        .invoke(name, data)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  remove(data: string): void {
    ipcRenderer.removeAllListeners(data);
  },
};
