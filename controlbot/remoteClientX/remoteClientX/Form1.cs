using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Net;
using System.Threading;
using System.IO;
using System.Net.Sockets;
using System.Management;

namespace remoteClientX
{
    public partial class Form1 : Form
    {
        public enum ShutDown
        {
            LogOff = 0,
            Shutdown = 1,
            Reboot = 2,
            ForcedLogOff = 4,
            ForcedShutdown = 5,
            ForcedReboot = 6,
            PowerOff = 8,
            ForcedPowerOff = 12
        }

        public Form1()
        {
            InitializeComponent();
        }

        private void btnHide_Click(object sender, EventArgs e)
        {
            notifyIcon1.Visible = true;
            this.Hide();
        }

        private void btnClose_Click(object sender, EventArgs e)
        {
            notifyIcon1.Visible = false;
            try
            {
                trlisten.Abort();
            }
            catch { }
            Application.Exit();
        }


        Thread trlisten;
        IPAddress ipAddress;

        private void Form1_Load(object sender, EventArgs e)
        {
            string strHostName = Dns.GetHostName();
            IPHostEntry ipEntry = Dns.GetHostByName(strHostName);
            IPAddress[] addr = ipEntry.AddressList;
            ipAddress = addr.First<IPAddress>();

            notifyIcon1.Icon = this.Icon;
            lblMYIP.Text = ipAddress.ToString();
            trlisten = new Thread(ListenToServer);
            trlisten.Start();
        }

        private void ListenToServer()
        {
            bool LISTENING = false;
            IPAddress localhostAddress = ipAddress;
            int port = 63000;
            //' PORT ADDRESS
            ///'''''''' making socket tcpList ''''''''''''''''
            TcpListener tcpList = new TcpListener(localhostAddress, port);
            try
            {
                tcpList.Start();
                LISTENING = true;
                
                while (LISTENING)
                {
                    while (tcpList.Pending() == false & LISTENING == true)
                    {
                        // Yield the CPU for a while.
                        Thread.Sleep(10);
                    }
                    if (!LISTENING)
                        break; // TODO: might not be correct. Was : Exit Do

                    TcpClient tcpCli = tcpList.AcceptTcpClient();
                    //ListBox1.Items.Add("Data from " & "128.10.20.63")
                    NetworkStream ns = tcpCli.GetStream();
                    StreamReader sr = new StreamReader(ns);
                    ///'''''' get data from client '''''''''''''''
                    string receivedData = sr.ReadLine();

                    if (receivedData == "###SHUTDOWN###")
                    {
                        shutDown(ShutDown.ForcedShutdown);
                    }
                    if (receivedData == "###REBOOT###")
                    {
                        shutDown(ShutDown.ForcedReboot);
                    }
                    if (receivedData == "###LOGOFF###")
                    {
                        shutDown(ShutDown.ForcedLogOff);
                    }
                    if (receivedData == "###SENDMESSAGE###")
                    {
                        //PopupNotifier popup = new PopupNotifier();
                        //popup.TitleText = "BE HAPPY";
                        //popup.ContentText = "Thank you";
                        //popup.Popup();// show  
                    }
                    if (receivedData != null)
                    {
                        Console.WriteLine(receivedData);
                     //   Console.ReadLine();
                    }

                    string returnedData = "###OK###";
                    //& " From Server"
                    StreamWriter sw = new StreamWriter(ns);
                    sw.WriteLine(returnedData);
                    sw.Flush();
                    sr.Close();
                    sw.Close();
                    ns.Close();
                    tcpCli.Close();
                }
                tcpList.Stop();
            }
            catch (Exception ex)
            {
                //error
                LISTENING = false;
            }
        }
        
        public void shutDown(ShutDown flag)
        {
            ManagementBaseObject outParam = null;
            ManagementClass sysOS = new ManagementClass("Win32_OperatingSystem");
            sysOS.Get();
            // enables required security privilege.
            sysOS.Scope.Options.EnablePrivileges = true;
            // get our in parameters
            ManagementBaseObject inParams = sysOS.GetMethodParameters("Win32Shutdown");
            // pass the flag of 0 = System Shutdown
            inParams["Flags"] = flag;
            inParams["Reserved"] = "0";
            foreach (ManagementObject manObj in sysOS.GetInstances())
            {
                outParam = manObj.InvokeMethod("Win32Shutdown", inParams, null);
            }
        }

        private void notifyIcon1_MouseDoubleClick(object sender, MouseEventArgs e)
        {
            this.Show();
        }

        private void Label4_Click(object sender, EventArgs e)
        {

        }

        private void Label1_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
