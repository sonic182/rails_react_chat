App.chat = function(opts) {
	return App.cable.subscriptions.create('ChatChannel', opts)
}
// App.cable.subscriptions.create("ChatChannel", {
//   connected: function(data) {
//     console.log('connected')
//     console.log('data connected')
//     console.log(data)
//     // Called when the subscription is ready for use on the server
//   },
//
//   disconnected: function() {
//     console.log('disconnected')
//     // Called when the subscription has been terminated by the server
//   },
//
//   received: function(data) {
//     // Called when there's incoming data on the websocket for this channel
//     console.log('received')
//     console.log('data')
//     console.log(data)
//   }
// });
