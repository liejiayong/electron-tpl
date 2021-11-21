import Store from 'nedb';
import path from 'path';
import { remote } from 'electron';

export const elePathKey = 'userData';

export default new Store({ autoload: true, filename: path.join(remote.app.getPath(elePathKey), '/data.db') });
