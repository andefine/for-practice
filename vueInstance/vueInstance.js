Vue.component('blog-post', {
  props: ['post'],
  methods: {
    enlargeText: function () {
      this.$emit('enlarge-text', 0.1)
    }
  },
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="enlargeText">enlarge text</button>
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
    ],
    postFontSize: 1
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
})