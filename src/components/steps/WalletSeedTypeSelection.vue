<template>
  <BaseCard class="card" title="Create your wallet">
    <p class="text">
      We will now help you create a new local wallet.
    </p>
    <ul class="options">
      <li>
        <!-- TODO: Onclick + SECONDARY TEXT -->
        <Button class="option create-wallet-option">
          Create new seed phrase
          <p class="recommended-text">
            RECOMMENDED
          </p>
        </Button>
      </li>
      <li>
        <!-- TODO: Onclick + SECONDARY TEXT -->
        <Button class="option create-wallet-option">
          Create a wallet prefilled with sample data
          <p class="recommended-text">
            RECOMMENDED
          </p>
        </Button>

      </li>
      <li>
        <!-- TODO: Onclick -->
        <Button class="option create-wallet-option">
          Import and advanced options
        </Button>
      </li>
      <li>
        <Button class="option create-wallet-option">
          Cancel
        </Button>
      </li>
    </ul>
  </BaseCard>
</template>

<script>
import Button from '@/components/Button'
import BaseCard from '@/components/BaseCard'
export default {
  name: 'WalletSeedTypeSelection',
  components: {
    Button,
    BaseCard,
  },
}
</script>

<style lang="scss">
@import '@/styles/theme.scss';
@import '@/styles/_colors.scss';

.card {
  border-radius: 2px;
  border: 1px solid #EEE;
  height: 520px;
  max-width: 530px;
}

.card>.title {
  align-items: center;
  background: $sheikah-gradient;
  border-bottom: solid 1px $grey-4;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  font-size: 19px;
  height: 100px;
  padding: 30px;
}

.card>.title>h5 {
  margin-left: 8px;
}

.text {
  align-items: center;
  color: $font-color-dark;
  display: flex;
  flex-flow: row nowrap;
  height: 80px;
  padding: 40px;
}

.options {
  li {
    margin-bottom: 10px;
  }
}

.create-wallet-option {
  margin: 0 auto;
}

.recommended-text {
  color: $grey-7;
}
</style>
