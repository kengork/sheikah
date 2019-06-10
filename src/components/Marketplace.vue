<template>
  <div>
    <div class="container">
      <WalletDisclaimer />
    </div>
    <br>
    <div class="container">
      <WalletEncryptionPassword />
    </div>
    <br>
    <div class="container">
      <WalletSeedBackup />
    </div>
    <br>
    <div class="container">
      <WalletSeedTypeSelection />
    </div>
    <br>
    <div class="container">
      <WalletSeedValidation />
    </div>
    <br>
    <div class="container">
      <WelcomeForm />
    </div>
    <br>
    <div class="container">
      
    </div>
  </div>
</template>

<script>
  import WalletDisclaimer from '@/components/steps/WalletDisclaimer'
  import WalletEncryptionPassword from '@/components/steps/WalletEncryptionPassword'
  import WalletSeedBackup from '@/components/steps/WalletSeedBackup'
  import WalletSeedTypeSelection from '@/components/steps/WalletSeedTypeSelection'
  import WalletSeedValidation from '@/components/steps/WalletSeedValidation'
  import WelcomeForm from '@/components/steps/WelcomeForm'

  export default {
    name: 'marketplace',
    components: {
      WalletDisclaimer,
      WalletEncryptionPassword,
      WalletSeedBackup,
      WalletSeedTypeSelection,
      WalletSeedValidation,
      WelcomeForm,
    }
  }

</script>
<style lang="scss" scoped>
  .container {
    margin: 200px;
  }

</style>
