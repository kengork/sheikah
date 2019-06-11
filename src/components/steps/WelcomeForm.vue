<template>
  <NavigationCard title="Hey, listen!" nextText="Start">
    <p class="subtitle">
      This assistant will guide you through the process of creating your own Witnet wallet.
    </p>
    <p class="text-welcome">
      A wallet is an app that keeps your credentials safe and lets you interface with the
      Witnet blockchain in many ways: from transferring Wit to someone else to creating
      smart contracts.
    </p>
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
<style lang="scss" >
@import '@/styles/theme.scss';

.subtitle {
  color: $font-color-dark;
  margin-bottom: 30px;
}

.text-welcome {
  color: $font-color-light;
  margin-bottom: 20px;
}
</style>
