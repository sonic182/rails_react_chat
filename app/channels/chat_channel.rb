class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_from 'global_chat' # this is a name for the data structure in the pub/sub backend
    # something like "the queue to use"
    # ActionCable.server.broadcast('global_chat', {message: 'welcome to the chat'})
  end

  def receive data
    ActionCable.server.broadcast('global_chat', data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
