## Install Jest, via Vue CLI
```
vue add unit-jest
```

## Install Vue Test Utils
```
npm install --save-dev @vue/test-utils
```

## Configure jest.config.js 

location: root directory

### Locating proper test folder with test files

Add following into module.exports in jest.config.js
```
testMatch: [
  '**/tests/WhereYouWantToPutYourTests/**/*.spec.[jt]s?(x)',
]
```

### Using alias

Add following into module.exports in jest.config.js
```
moduleNameMapper: {
  "^@/(.+)$": "<rootDir>/resources/js/vue/$1",  // @ = rootFolder/resources/js/vue/
  "^~/(.+)$": "<rootDir>/resources/$1"          // ~ = rootFolder/resources/
},
```

## Run Jest

### Using Jest Cli

Install cli
```
npm install --save-dev jest
```

Run
```
jest                   // run all tests
jest testFile.spec.js  // run one single file
```

### Using NPM

add following to package.json script section
```
"test": "jest"
```

Run
```
npm run test // run all tests
```

## Utilize Vuetify in Jest

### create setup file (setup.js)

location tests/
```
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
```

### config jest to use setup file

Add following to jest.config.js
```
setupFiles: ['./tests/setup.js']
```

### Example of running vuetify in jest

```
import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/app'
import Vuetify from 'vuetify'

describe('First Test', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('renders properly', () => {
    const wrapper = shallowMount(App, {
      localVue,
      vuetify
    })

    console.log('hello')

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
```

## Axios with Jest

### set up axios in test file for example component

Example component: ChildComponent
```
<template lang="pug">
div
  button(@click="makeRequest")
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    requestData: ''
  }),
  methods: {
    async makeRequest() {
      await axios.get('exampleAPI')
        .then(res => this.requestData = res.data)
    }
  }
}
</script>

```

Test file
```
import { mount } from '@vue/test-utils'
import ChildComponent from '@/components/ChildComponent'
import axios from 'axios'

jest.mock('axios')

describe('Example test', () => {
  const localVue = createLocalVue()

  it('ChildComponent axios test', async () => {
    const wrapper = mount(ChildComponent, {

    })

    const response = {
      data: 'responseData'
    }

    axios.get.mockResolvedValue(response)

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.vm.requestData).toBe('responseData')
  })
})
```