using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Fantastics.Areas.Dashboard.Controllers
{
    public class IndexController : Controller
    {
        // GET: Dashboard/Index
        public ActionResult Index()
        {
            return View();
        }
    }
}