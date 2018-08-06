var data = { a: 1 }

var vm = new Vue({
  data: data
})

console.log(vm.a == data.a)