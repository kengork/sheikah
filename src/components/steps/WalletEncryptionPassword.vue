<template>
  <NavigationCard 
    class="wallet-encryption"
    title="Encrypt your wallet with a password"
    previousText="Back"
    nextText="Next"
  >
    <p class="text">
      <strong>PLEASE NOTE:</strong> this password encrypts your Witnet wallet only on this
      computer. This is not your backup and you cannot restore your wallet with this password.
      Your seed phrase is still your ultimate backup.
    </p>
    <div class="field">
      <label class="label">Password</label>
      <!-- <InputUnderlined className={`${stepStyles.input} ${stepStyles["password-input"]}`} type="password"
         onChange={this.props.onChangePassword} value={this.props.password} /> -->
      <input type="text">
    </div>
    <div class="field">
      <label class="label">
        Confirm password
      </label>
      <!-- <InputUnderlined className={`${stepStyles.input} stepStyles["confirm-password-input"]`} type="password"
         onChange={this.props.onChangeRepeatPassword} value={this.props.repeatPassword} /> -->
      <input type="text">
    </div>
  </NavigationCard>
</template>

<script>
  import NavigationCard from '@/components/NavigationCard'
  export default {
    name: 'WalletEncryptionPassword',
    props: {

    },
    components: {
      NavigationCard
    }
  }
</script>
<style lang="scss" >
@import '@/styles/theme.scss';

.wallet-encryption .shadow {
  height: 420px;
}

.wallet-encryption .shadow .content {
  height: 260px;
  padding: 30px;
}

.text {
  color: $font-color-dark;
  margin-bottom: 35px;

  strong {
    color: $form_wallet-alert_color;
    font-weight: $form_wallet-alert-font_weight;
  }
}

.field {
  margin-bottom: 20px;
  width: 100%;
}

.label {
  color: $font-color-light;
  display: inline-block;
  padding-right: 20px;
  text-align: right;
  width: 30%;
}
</style>
