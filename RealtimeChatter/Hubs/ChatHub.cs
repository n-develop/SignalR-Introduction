using Microsoft.AspNetCore.SignalR;

namespace RealtimeChatter.Hubs;

public class ChatHub : Hub
{
    public async Task SendMessage(string message)
    {
        await Clients.Others.SendAsync("ReceiveMessage", message, Context.Items["username"]);
    }

    public void RegisterUser(string username)
    {
        Context.Items.Add("username", username);
    }
}