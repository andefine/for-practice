Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

new Vue({
  el: '#example',
  data: {
    posts: [
      { id: 1, title: 'my journey with vue' },
      { id: 2, title: 'blogging with vue' },
      { id: 3, title: 'why vue is so fun' }
    ]
  }
})