Vue.component('blog-post', {
  props: ['value'],
  template: `
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  `
})

new Vue({
  el: '#example',
  data: {
    searchText: 'vue'
  }
})