<template>
  <div class="navigation-card">
    <BaseCard :title="title" class="shadow">
      <div class="content">
        <slot></slot>
      </div>
      <div class="button-group">
        <Button class="navigation" @click="previousStep">{{ previousText }}</Button>
        <Button class="navigation" @click="nextStep">{{ nextText }}</Button>
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

.navigation-card>.title {
  background: $sheikah-gradient;
  color: $grey-2;
  font-size: $loading-modal-title-font-size;
  font-weight: 100;
}

.button-group {
  align-items: flex-end;
  display: flex;
  flex-flow: row nowrap;
  height: auto;
}
</style>
