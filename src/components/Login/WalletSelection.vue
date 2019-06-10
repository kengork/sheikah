<template>
  <div class="content">
    <p class="text">
      Select which wallet you want to unlock:
    </p>
    <!-- <div class="links" :v-for="walletInfo in walletInfos">
      <Button key="walletInfo.id" secondaryText=">" onClick="this.nextStep(walletInfo.id)">
        {{ walletInfo.caption }}
      </Button>)
    </div> -->
    <Button class="link" secondaryText=">" @onClick="this.wallet">
      Create, import or recover a wallet
    </Button>
  </div>
</template>

<script>
export default {
  name: 'WalletSelection',
  props: {
    wallet: Function,
    nextStep: Function,
    // walletInfos: Object,
  },
}
</script>

<style lang="scss">
@import '@/styles/_colors.scss';
@import '@/styles/theme.scss';

.content {
  padding: $card_default-padding;
}

.text {
  color: $form_login-text-color;
  padding: 5px 0 5px 0;
}

.links {
  height: $form_login-links-height;
  margin: 20px 0 15px 0;
  overflow: auto;
  padding-right: 10px;
}

/* width */
::-webkit-scrollbar {
  width: $form_login-scrollbar-width;
}

/* Track */
::-webkit-scrollbar-track {
  background: $form_login-scrollbar-track-background;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $form_login-scrollbar-thumb-background;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $form_login-scrollbar-thumb_hover-background;
}

.link {
  height: $form_login-link-height;
}

.listItem {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}

</style>
