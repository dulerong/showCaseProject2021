<template lang="pug">
div(class="d-flex justify-center align-center" style="width: 100%; height: 100%")
  div
    h1 Home Page
    h2 {{ headerTwo }}
    ChildComponent(:message="headerThree")
</template>

<script>
export default {
  components: {
    ChildComponent: require('~/js/vue/components/crm/ChildComponent').default
  },
  data: () => ({
    headerTwo: 'My name is h2',
    headerThree: 'This should be headerThree'
  }),
};
</script>