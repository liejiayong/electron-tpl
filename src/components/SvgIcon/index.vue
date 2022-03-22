<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" />
  <svg v-else :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
const tools = {
  isExternal: function isExternal(path: string): boolean {
    return /^(https?:|mailto:|tel:)/.test(path);
  },
};
const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
});

const isExternal = computed(() => {
  return tools.isExternal(props.iconClass);
});
const iconName = computed(() => {
  return `#svg-icon-${props.iconClass}`;
});
const svgClass = computed(() => {
  if (props.className) {
    return 'svg-icon ' + props.className;
  } else {
    return 'svg-icon';
  }
});
const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.iconClass}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`,
  };
});
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1.25em;
  height: 1.25em;
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;

  &:hover {
    opacity: 0.8;
  }
}

.svg-external-icon {
  display: inline-block;
  background-color: currentColor;
  mask-size: cover !important;
}
</style>
