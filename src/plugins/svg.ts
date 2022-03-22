import { createApp } from 'vue';
import SvgIcon from '@/components/SvgIcon/index.vue';

const svg = require.context('../assets/svg', false, /\.svg$/);
svg.keys().map(svg);
const colorful = require.context('../assets/colorful', false, /\.svg$/);
colorful.keys().map(colorful);

export default function loadComponents(app: ReturnType<typeof createApp>): void {
  // svg组件
  app.component('SvgIcon', SvgIcon);
}
