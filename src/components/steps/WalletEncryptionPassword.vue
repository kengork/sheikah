<template>
  <NavigationCard class="wallet-encryption" title="Encrypt your wallet with a password" previousText="Back"
    nextText="Next">
    <div class="content">
      <p class="paragraph">
        <strong>PLEASE NOTE:</strong> this password encrypts your Witnet wallet only on this
        computer. This is not your backup and you cannot restore your wallet with this password.
        Your seed phrase is still your ultimate backup.
      </p>
      <div class="form-row">
        <label class="label">Password</label>
        <!-- <InputUnderlined className={`${stepStyles.input} ${stepStyles["password-input"]}`} type="password"
          onChange={this.props.onChangePassword} value={this.props.password} /> -->
        <input type="text">
      </div>
      <div class="form-row">
        <label class="label">
          Confirm password
        </label>
        <!-- <InputUnderlined className={`${stepStyles.input} stepStyles["confirm-password-input"]`} type="password"
            onChange={this.props.onChangeRepeatPassword} value={this.props.repeatPassword} /> -->
        <input type="text">
      </div>
    </div>
  </NavigationCard>
</template>

<script>
import NavigationCard from '@/components/NavigationCard'
export default {
  name: 'WalletEncryptionPassword',
  components: {
    NavigationCard,
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/theme.scss';

.content {
  padding: 30px 40px;
}

.paragraph {
  margin-top: 10px;
  margin-bottom: 30px;
}

.form-row {
  display: flex;
  max-width: 400px;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 30px;
}

.label {
  color: $font-color-light;
}

</style>
