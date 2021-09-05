import Product from "../models/products"

export const createProducts = async (req, res) => {
    const { name, category, price, imgURL } = req.body;
    const newProduct = new Product({name, category, price, imgURL});
    const productSaved = await newProduct.save();
    
    res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
    const products = await Product.find();
    return res.json(products);
  };

export const getProductById = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);
  res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  };

  export const deleteProductById = async (req, res) => {
    const { productId } = req.params;
  
    await Product.findByIdAndDelete(productId);
  
    // code 200 is ok too
    res.status(204).json();
  };