<template>
  <NavigationCard class="wallet-seed-validation" title="Confirm your seed phrase" previousText="Back" nextText="Next">
    <div class="content">
      <p>
        Please type your 12 word seed phrase exactly as it was shown to you on the previous screen.
        This step is to confirm that you have copied your seed phrase correctly.
      </p>
      <InputBig class="seed" :value="inputValue" :onChange="onChangeInput" />
      <p>
        Please ensure you do not add any extra spaces between words or at the beginning or end
        of the phrase.
      </p>
    </div>
  </NavigationCard>
</template>

<script>
import NavigationCard from '@/components/NavigationCard'
export default {
  name: 'WalletSeedValidation',
  components: {
    NavigationCard,
  },
  props: {
    value: String,
    onChangeInput: String,
    inputValue: String,
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/theme.scss';

.content {
  padding: 30px;
}

.seed {
  align-items: center;
  border: $input_big-border;
  border-radius: $input_big-border-radius;
  box-sizing: border-box;
  color: $input_big-color;
  display: inline-flex;
  font-size: 16px;
  line-break: auto;
  line-height: 1.5em;
  margin: 30px 0;
  padding: 40px;
  width: 100%;
  margin-top: 40px;
}


</style>
