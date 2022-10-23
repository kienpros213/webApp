package data.data.Controller;

import data.data.Entity.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/product")
public class ProductController {
    @Autowired
    private data.data.Repository.ProductRepository ProductRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewProduct (@RequestParam String productName, Integer amount, String description){
        Products product = new Products();
        product.setProductName(productName);
        product.setAmount(amount);
        product.setDescription(description);
        ProductRepository.save(product);
        return "Product Saved!";
    }
    @CrossOrigin
    @GetMapping(path = "allProducts")
    public @ResponseBody Iterable<Products> getAllProducts(){
        return ProductRepository.findAll();
    }
}
