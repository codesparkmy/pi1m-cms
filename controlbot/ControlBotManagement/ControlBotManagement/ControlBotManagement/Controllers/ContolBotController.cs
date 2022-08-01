using ControlBotManagement.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ControlBotManagement.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    //[Microsoft.AspNetCore.Cors.EnableCors("AllowOrigin")]
    public class ContolBotController : ControllerBase
    {
        //ControlBot process endpoint Date: 24/07/2021 Name: Navaneethakrishnan
        //[HttpPost("ControlBot")]
        [HttpPost]
        [Route("api/ControlBot")]
        public async Task<string> ControlBot([FromBody] ControlBotDetails objControlBotRequestJSON)
        {
            try
            {
                ControlBotProcess objOrderRequest = new ControlBotProcess();
                return await objOrderRequest.ProcessControlBot(objControlBotRequestJSON);
            }
            catch (Exception ex)
            {
                return Utils.HandleUnhandledError(ex);
            }
        }
    }
}
