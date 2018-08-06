var example = new Vue({
  el: '#example',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function (event) {
      alert('hello' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})