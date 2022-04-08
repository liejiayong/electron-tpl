<template>
  <el-dropdown @command="onSelect">
    <span class="el-dropdown-link">
      {{ props.label }}{{ props.symbol }}{{ langLabel }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in langMap" :command="item.value" :key="`locale-${item.value}`">
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons';
import { changeLang, langMap, LangMap } from '@/i18n/index';

const props = defineProps({
  label: { type: String, default: '' },
  symbol: { type: String, default: '' },
});

const langLabel = ref(langMap['zh'].label);
function onSelect(key: keyof LangMap) {
  const cur = changeLang(key);
  langLabel.value = cur.label;
}
</script>
