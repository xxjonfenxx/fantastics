using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Fantastics.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        [HttpGet]
        public ActionResult product(int? id)
        {
            using (FantasticsEntities entities = new FantasticsEntities())
            {

                var getProduct = from product in entities.products
                                 join meta in entities.product_meta
                                 on product.ID equals meta.product_id
                                 where product.ID.Equals(id)
                                 select product;
                ViewBag.productInfo = getProduct;
                if( !getProduct.Any() )
                { 
                    return View();
                }
                else
                {
                    return View("index");
                }
            }
        }
    }
}