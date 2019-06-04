<template>
  <div>
    <div class="top-bar">
      <div class="tab">
        <router-link to="/wallet/transaction">Transaction</router-link>
      </div>
      <div class="tab">
        <router-link to="/wallet/receive">Receive</router-link>
      </div>
      <div class="tab">
        <router-link to="/wallet/send">Send</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/_colors.scss';
@import '@/styles/theme.scss';

.top-bar {
  border-bottom: $top_bar-border;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 13px;
  .tab {
    align-items: center;
    border-bottom: $top_bar-link-inactive-border;
    font-weight: bold;
    text-decoration: none;
    padding: 15px 8px;
  }
  .tab a {
    padding: 24px;
    align-items: center;
    border-bottom: $top_bar-link-inactive-border;
    color: $sidebar-link-color;
    font-weight: bold;
    text-decoration: none;
    &.router-link-active{
      border-bottom: 3px solid $blue-6;
      color: $sidebar-active-color;
    }
  }
}
</style>
