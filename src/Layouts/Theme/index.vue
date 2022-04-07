<template>
  <el-icon @click="onOpen" :size="24" title="主题配置">
    <MagicStick />
  </el-icon>
  <el-drawer v-model="isOpen" direction="rtl" :show-close="true" :close-on-click-modal="true" append-to-body>
    <template #title>
      <div>主题配置</div>
    </template>
    <template #default>
      <el-scrollbar height="100%">
        <el-form :model="themeModal">
          <template v-for="opt in themeModal" :key="opt.label">
            <el-form-item :label="opt.label" :prop="opt.key">
              <el-radio-group v-if="opt.type === 'radioButton'" v-model="opt.value">
                <el-radio-button v-for="(radio, index) in opt.options" :label="radio.value" :key="index">
                  {{ radio.label }}
                </el-radio-button>
              </el-radio-group>
              <el-color-picker
                v-if="opt.type === 'colorPicker'"
                v-model="opt.value"
                show-alpha
                :predefine="opt.options"
              />
            </el-form-item>
          </template>
        </el-form>
      </el-scrollbar>
      <div></div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="onCancel">恢复默认</el-button>
        <el-button type="primary" @click="onConfirm">确认</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
const appInstance = getCurrentInstance();
const { MagicStick } = appInstance?.appContext.config.globalProperties.$icon;

const isOpen = ref<boolean>(false);

interface ITheme {
  layout: 'vertical' | 'horizontal';
  header: 'fixed' | 'noFixed';
  tabsBar: boolean;
  menuBackground: string;
  menuBackgroundActive: string;
  menuColor: string;
  tagBackgroundActive: string;
  buttonBackground: string;
  paginationBackgroundActive: string;
}

type IThemeModalBase = {
  type: string;
  label: string;
  key: keyof ITheme;
  value: ITheme[keyof ITheme];
};
type IStr = string;
type IObj = { label: string; value: string | boolean };

type IThemeModal = (IThemeModalBase & { options: IObj[] }) | (IThemeModalBase & { options: IStr[] });

const themeModal = reactive<IThemeModal[]>([
  {
    type: 'radioButton',
    label: '布局',
    options: [
      { label: '纵向布局', value: 'vertical' },
      { label: '横向布局', value: 'horizontal' },
    ],
    key: 'layout',
    value: 'vertical',
  },
  {
    type: 'radioButton',
    label: '头部',
    options: [
      { label: '固定头部', value: 'fixed' },
      { label: '不固定头部', value: 'noFixed' },
    ],
    key: 'header',
    value: 'fixed',
  },
  {
    type: 'radioButton',
    label: '多标签',
    options: [
      { label: '开启', value: true },
      { label: '不开启', value: false },
    ],
    key: 'tabsBar',
    value: true,
  },
  {
    type: 'colorPicker',
    label: '菜单背景色',
    options: ['#2a58ad', '#001529', '#f56c6c', '#0fd59d', '#3fb884', '#ff7a47', '#a80505'],
    key: 'menuBackground',
    value: '',
  },
  {
    type: 'colorPicker',
    label: '菜单选中色',
    options: ['#22468a', '#1890ff', '#21e6af', '#f57e6c'],
    key: 'menuBackgroundActive',
    value: '',
  },
  {
    type: 'colorPicker',
    label: '菜单文字色',
    options: ['#000', '#fff'],
    key: 'menuColor',
    value: '',
  },
  {
    type: 'colorPicker',
    label: '标签主题色',
    options: ['#1890ff', '#0fd59d', '#f56c6c'],
    key: 'tagBackgroundActive',
    value: '',
  },
  {
    type: 'colorPicker',
    label: '默认按钮主题色',
    options: ['#1890ff', '#0fd59d', '#f56c6c'],
    key: 'buttonBackground',
    value: '',
  },
  {
    type: 'colorPicker',
    label: '分页选中色',
    options: ['#1890ff', '#0fd59d', '#f56c6c'],
    key: 'paginationBackgroundActive',
    value: '',
  },
]);

const themeStorage = reactive<ITheme>({
  layout: 'vertical',
  header: 'fixed',
  tabsBar: true,
  menuBackground: '',
  menuBackgroundActive: '',
  menuColor: '',
  tagBackgroundActive: '',
  buttonBackground: '',
  paginationBackgroundActive: '',
});

function onOpen() {
  isOpen.value = true;
}
function onCancel() {
  isOpen.value = false;
}
function onConfirm() {
  isOpen.value = false;
  themeModal.forEach((val: IThemeModal) => {
    type ikey = keyof ITheme;
    const key: ikey = val.key;
    (themeStorage[key] as typeof themeStorage[keyof ITheme]) = val.value;
    // setProp(themeStorage, key, val.value);
    // console.log('theme', val.key, val.value, themeStorage);
  });
}

// function setProp(foo: ITheme, key: keyof ITheme, val: ITheme[keyof ITheme]) {
//   (foo[key] as typeof val) = val;
// }
</script>
