Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
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