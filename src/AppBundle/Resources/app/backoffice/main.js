'use strict'

Vue.component('toolbar-title', {
  template:`
    <q-toolbar-title>
      Vinty
      <div slot="subtitle">Running on Quasar v {[{ $q.version }]}</div>
    </q-toolbar-title>`
})

Vue.component('my-page', {
  template: '#my-page',
  props: ['editorModel','ratingModel', 'progressBuffer', 'buffer', 'visible', 'simple', 'stars']
})


new Vue({
  el: '#q-app',
  data: function () {
    return {
      drawerState: false,
      editorModel: 'Hello',
      ratingModel: 4,
      progressBuffer: 50,
      buffer: 60,
      visible: true,
      stars: 4,
      simple: [
        {
          label: 'Satisfied customers',
          children: [
            {
              label: 'Good food',
              children: [
                { label: 'Quality ingredients' },
                { label: 'Good recipe' }
              ]
            },
            {
              label: 'Good service (disabled node)',
              disabled: true,
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: 'Pleasant surroundings',
              children: [
                { label: 'Happy atmosphere' },
                { label: 'Good table presentation' },
                { label: 'Pleasing decor' }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    launch: function (url) {
      Quasar.utils.openURL(url)
    }
  }
})




console.log(Quasar);
Quasar.plugins.Notify.create('hello, how are you?');
console.log(Quasar.plugins.Platform.is);