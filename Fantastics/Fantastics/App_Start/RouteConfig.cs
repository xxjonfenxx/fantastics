using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Fantastics
{
	public class RouteConfig
	{
		public static void RegisterRoutes(RouteCollection routes)
		{
			routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

			routes.MapRoute(
				name: "Admin_Default",
				url: "Admin/{controller}/{action}/{id}",
				defaults: new { controller = "Dashboard", action = "Index", id = UrlParameter.Optional },
				namespaces: new[] { "Fantastics.Areas.Admin.Controllers" }
			);

			routes.MapRoute(
				name: "Default",
				url: "{controller}/{action}/{id}",
				defaults: new { controller = "Dashboard", action = "Index", id = UrlParameter.Optional },
				namespaces: new[] { "Fantastics.Areas.Admin.Controllers" }
			);
		}
	}
}
