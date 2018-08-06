var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    
  },
  methods: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('-')
    }
  }
})