<template>
  <NavigationCard class="wallet-seed-backup" title="Wallet seed phrase backup" previousText="Back" nextText="Next">
    <div class="content">
      <p class="paragraph-seed-title">Your 12 word seed phrase:</p>
      <pre class="seed">
        <!-- {{ calculateSecondSentence() }} -->
      </pre>
        <p class="paragraph-seed">
          Please copy these 12 words onto a piece of paper which you will be able to safely store
          and secure. You must write the complete words in the exact order they are presented to
          you.
        </p>
        <p class="paragraph-seed">
          We do not store your seed phrase - if you exit this setup or fail to write down your
          seed phrase, we cannot help you access your wallet.
        </p>
    </div>
  </NavigationCard>
</template>

<script>
import NavigationCard from '@/components/NavigationCard'
export default {
  name: 'WalletSeedBackup',
  props: {
    mnemonics: Array,
  },
  components: {
    NavigationCard,
  },
  methods: {
    calculateFirstSentence: () => mnemonics.split(' ').slice(0, 6).join(' '),
    calculateSecondSentence: () => mnemonics.split(' ').slice(6).join(' '),
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/theme.scss';

.content {
  padding: 30px 40px;
}

.seed {
  align-items: center;
  border-radius: $input_big-border-radius;
  border: $input_big-border;
  box-sizing: border-box;
  color: $input_big-color;
  display: inline-flex;
  font-size: 16px;
  line-break: auto;
  line-height: 1.5em;
  padding: 40px;
  width: 100%;
}

.paragraph-seed-title {
  margin-bottom: 30px;
}

.paragraph-seed {
  margin-top: 30px;
}

</style>
