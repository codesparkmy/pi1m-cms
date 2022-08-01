using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace ControlBotManagement.Model
{
    public static class Utils
    {
        //Handle Error Date: 24/07/2021 Name: Navaneethakrishnan
        public static string HandleUnhandledError(Exception ex)
        {
            string errorMessage = ex.Message;
            string StatusType = "Fail";

            if (ex.Message.Contains("An error occurred while sending the request."))
            {
                StatusType = "RetryError";
                errorMessage = "Network Error. Please try again later.";
            }

            Dictionary<string, string> dicPayload = new Dictionary<string, string>();
            dicPayload.Add("StatusType", StatusType);
            dicPayload.Add("Message", errorMessage);
            return JsonConvert.SerializeObject(dicPayload, Formatting.Indented);
        }
    }
}
