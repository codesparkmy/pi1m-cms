using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace ControlBotManagement.Model
{
    public class ControlBotProcess
    {
        //ProcessControlBot of controlbot Date: 24/07/2021 Name: Navaneethakrishnan
        public async Task<string> ProcessControlBot(ControlBotDetails objControlBotRequestJSON)
        {
            string message = null;
            string StatusType = string.Empty;
            Dictionary<string, string> dicPayload = new Dictionary<string, string>();
            Thread trSendMessage;
            IPAddress ipAddress;
            string strHostName = Dns.GetHostName();
            IPHostEntry ipEntry = Dns.GetHostByName(strHostName);
            IPAddress[] addr = ipEntry.AddressList;
            ipAddress = addr.First<IPAddress>();

            //notifyIcon1.Icon = this.Icon;
            // lblMYIP.Text = ipAddress.ToString();
            // string host = txtClientIP.Text;
            int port = 63000;
            try
            {
                TcpClient tcpCli = new TcpClient(objControlBotRequestJSON.ipaddress, port);
                NetworkStream ns = tcpCli.GetStream();
                // Send data to the server.
                StreamWriter sw = new StreamWriter(ns);
                if (objControlBotRequestJSON.option == "Shutdown")
                {
                    sw.WriteLine("###SHUTDOWN###");
                }
                if (objControlBotRequestJSON.option == "Reboot")
                {
                    sw.WriteLine("###REBOOT###");
                }
                if (objControlBotRequestJSON.option == "Logoff")
                {
                    sw.WriteLine("###LOGOFF###");
                }
                if (objControlBotRequestJSON.option == "Send Message")
                {
                    sw.WriteLine("###SENDMESSAGE###");
                }
                if (objControlBotRequestJSON.option == "Nothing")
                {
                    sw.WriteLine("to");
                }
                sw.Flush();

                // Receive and display data.
                StreamReader sr = new StreamReader(ns);
                string result = sr.ReadLine();
                if (result == "###OK###")
                {
                    //  MessageBox.Show("Operation Performed!!!");
                    message = "Operation Performed!!!";
                    StatusType = "Success";
                }
                //MsgBox(result)
                sr.Close();
                sw.Close();
                ns.Close();
            }
            catch (Exception ex)
            {
                message = ex.Message;
                StatusType = "Failed";
            }

            dicPayload.Add("StatusType", StatusType);
            dicPayload.Add("Message", message);
            return JsonConvert.SerializeObject(dicPayload, Formatting.Indented);
        }
    }
}
