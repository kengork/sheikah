<template>
  <NavigationCard title="Hey, listen!" previousText="Back" nextText="Start">
    <div class="content">
      <p class="subtitle">
        This assistant will guide you through the process of creating your own Witnet wallet.
      </p>
      <p class="text-welcome">
        A wallet is an app that keeps your credentials safe and lets you interface with the
        Witnet blockchain in many ways: from transferring Wit to someone else to creating
        smart contracts.
      </p>
    </div>
  </NavigationCard>
</template>
<script>
import NavigationCard from '@/components/NavigationCard'
export default {
  name: 'WelcomeForm',
  components: {
    NavigationCard,
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/theme.scss';

.content {
  padding: 30px;
}

.subtitle {
  color: $font-color-dark;
}

.text-welcome {
  color: $font-color-light;
  margin-top: 30px;

}
</style>
