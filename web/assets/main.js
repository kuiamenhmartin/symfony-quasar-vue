
(function(window, Vue, Quasar) {
class Main {

  constructor(repLogs) {
        Vue.component('my-page', {
          template: '#my-page',
          data : function(){
            return {
              model: "",
              url: 'https://preprod.wylog.com',
              opened: true,
              search: ''
            };
          }

        })

        new Vue({
          el: '#q-app',
          data: function () {
            return {
              version: Quasar.version,
              drawerState: false,
              model : "",
            }
          },
          methods: {
            launch: function (url) {
              Quasar.utils.openURL(url)
            }
          }
        })

        console.log(Quasar);
        
        console.log(Quasar.plugins.Notify.create('hello, how are you?'));
        console.log(Quasar.plugins.Platform.is);
    }

}

module.exports = Main;

})(window, Vue, Quasar);




    