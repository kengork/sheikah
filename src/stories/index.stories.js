/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import BaseCard from '@/components/BaseCard'
import NavigationCard from '@/components/NavigationCard'
import Button from '@/components/Button.vue'

storiesOf('BaseCard', module)
  .add('Simple', () => ({
    components: { BaseCard },
    template: '<BaseCard>Hello Card!</BaseCard>',
  }))
  .add('Title', () => ({
    components: { BaseCard },
    template: '<BaseCard title="This is a Card with Title">Hello Card!</BaseCard>',
  }))
  .add('Navigation Card', () => ({
    components: { NavigationCard },
    template: '<NavigationCard title="This is a Card with Title" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit." previousText="previous text <NavigationCard
    className={this.cardStyle}
    title="IMPORTANT"
    previousStep={this.props.previousStep}
    nextStep={this.props.nextStep}
    nextText="I will be careful, I promise!"
  >
    <p>
      You will be shown a 12 word seed phrase. This seed phrase is very important. If you are
      ever locked out of your wallet or lose access for any reason, you can regain access to
      your wallet again from any computer using your seed phrase.
    </p>
    <p>
      You should never share your seed phrase with anyone. We at Witnet do not store your seed
      phrase and will never ask you to share it with us. If you lose your seed phrase, you will
      permanently lose access to your wallet and your funds.
    </p>
    <p>
      If someone finds or sees your seed phrase, they will have access to your wallet and all
      of your funds.
    </p>
    <p>
      We recommend storing your seed phrase on paper somewhere safe. Do not store it in a file
      on your computer or anywhere electronically.
    </p>
  </NavigationCard>" nextText="Next">Hello Card!</NavigationCard>',
  }))

storiesOf('Button', module)
  .add('Default', () => ({
    components: { Button },
    template: '<Button type="default" @click="action">Hello Button</Button>',
    methods: { action: action('clicked') },
  }))
  .add('Primary', () => ({
    components: { Button },
    template: '<Button type="primary" @click="action">Hello Button</Button>',
    methods: { action: action('clicked') },
  }))
  .add('Danger', () => ({
    components: { Button },
    template: '<Button type="danger" @click="action">Hello Button</Button>',
    methods: { action: action('clicked') },
  }))
  .add('Dashed', () => ({
    components: { Button },
    template: '<Button type="dashed" @click="action">Hello Button</Button>',
    methods: { action: action('clicked') },
  }))
  .add('Positive', () => ({
    components: { Button },
    template: '<Button type="positive" @click="action">Hello Button</Button>',
    methods: { action: action('clicked') },
  }))
