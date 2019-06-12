<template>
  <div class="navigation-card">
    <BaseCard :title="title" class="shadow">
      <div class="content">
        <slot></slot>
      </div>
        <div class="button-group">
          <Button class="navigation button-nav-card" @click="previousStep">{{ previousText }}</Button>
          <Button class="navigation button-nav-card" @click="nextStep">{{ nextText }}</Button>
      </div>
    </BaseCard>
  </div>
</template>

<script>
import Button from '@/components/Button'
import BaseCard from '@/components/BaseCard'

export default {
  name: 'NavigationCard',
  props: {
    title: String,
    previousStep: Function,
    nextStep: Function,
    nextText: String,
    previousText: String,
  },
  components: {
    Button,
    BaseCard,
  },
  methods: {
    handleKeyUp: event => {
      if (event.keyCode === 13) {
        this.props.nextStep()
      }
    },
  },
}
</script>

<style lang='scss'>
@import '@/styles/app.global.scss';
@import '@/styles/_colors.scss';

.navigation-card .title {
  font-size: 19px;
  flex-flow: row nowrap;
  display: flex;
  align-items: center;
  height: 100px;
  background: $sheikah-gradient;
  color: $grey-2;
  font-size: $loading-modal-title-font-size;
  font-weight: 100;
}

.navigation-card  .title .card-title{
  margin-left: 40px;
}

.content {
  height: 375px;
}

.button-group {
  width: 100%;
  display: flex;
  height: 75px;
}

.button-nav-card {
  align-self: flex-end;
}
</style>
