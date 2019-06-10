<template>
  <div>
    <div class="sidebar">
      <p class="titleText">
        {{ title }}
      </p>
      <el-dropdown class="el-dropdown">
        <span class="el-dropdown-link">
        <i class="el-icon-s-tools el-icon--right icon"></i>
          Settings
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="label">{{ menuText }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InitialSidebar',
  props: {
    title: String,
    // menuIcon: String,
    menuText: String,
    // collapseSidebar: Boolean,
  },
}
</script>

<style lang='scss' scoped>
@import '@/styles/_colors.scss';
@import '@/styles/theme.scss';

.grid {
  box-shadow: $default-box-shadow;
  display: grid;
  grid-template-columns: 30% 1fr;
  height: 100%;
}

.collapse {
  // To add transition for grid items read #302
  grid-template-columns: 10px 1fr;
}

.sidebar {
  display: flex;
  flex-direction: column;
  grid-column: 1;
  justify-content: space-between;
  background: $sheikah-gradient;

  .collapsed {
    width: $sidebar_layout-collapsed-width;
  }
}

.titleText {
  color: $sidebar_layout-color;
  font-size: $sidebar_layout-font_size;
  padding: 20px;
}

.el-dropdown {
  align-items: center;
  color: $sidebar_layout-icon_label-color;
  display: flex;
  flex-flow: row nowrap;
  font-size: 18px;
  height: 32px;
  justify-content: left;
  width: 100px;
  cursor: pointer;

  .icon {
    color: $sidebar_layout-icon-color;
    margin-left: 10px;
  }

  .label {
    color: $sidebar_layout-icon_label-color;
  }
}

.content {
  background: $sidebar_layout-content-background;
  grid-column: 2;
}

</style>
