var data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' }
  ]
}

Vue.component('item', {
  template: "#item-template", 
  props: {
    model: Object
  },
  data: function() {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle: function() {
      if(this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function() {
      Vue.set(this.model, 'children', [])
      this.addChild()
      this.open = true
    },
    addChild: function() {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
});

var demo = new Vue({
  el: '#demo',
  data: {
    treeData: data
  }
})