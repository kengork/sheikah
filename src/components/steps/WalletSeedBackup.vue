<template>
  <NavigationCard class="wallet-seed-backup" title="Wallet seed phrase backup" previousText="Back" nextText="Next">
    <p class="paragraph-seed">Your 12 word seed phrase:</p>
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
  </NavigationCard>
</template>

<script>
import NavigationCard from '@/components/NavigationCard'
export default {
  name: 'WalletSeedBackup',
  props: {
    mnemonics: Array
  },
  components: {
    NavigationCard
  },
  methods: {
    calculateFirstSentence: () => mnemonics.split(" ").slice(0, 6).join(" "),
    calculateSecondSentence: () => mnemonics.split(" ").slice(6).join(" ")
  }
}
</script>
<style lang="scss">
@import '@/styles/theme.scss';

.wallet-seed-backup .shadow {
  height: 500px;
}

.wallet-seed-backup .shadow .content {
  height: 340px;
  padding: 30px;
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
  margin: 15px 0;
  padding: 20px 25px;
  width: 100%;
}

.paragraph-seed {
  margin-top: 16px;
}

</style>
