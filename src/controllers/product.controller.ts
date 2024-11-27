import { Request, Response } from "express";
import { Product } from "../model/product.model";

const queryProducts = async (_: Request, res: Response) => {
  res.json(await Product.find());
};

const createProduct = async (
  req: Request<{}, {}, { productName: string; productPrice: number }>,
  res: Response
) => {
  const product = await Product.create(req.body);
  res.json(product.id);
};

const updateProduct = async (
  req: Request<
    { id: string },
    {},
    { productName: string; productPrice: number }
  >,
  res: Response
) => {
  try {
    await Product.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).json("Product updated successfully");
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteProduct = async (req: Request<{ id: string }>, res: Response) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json("Product deleted successfully");
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default { queryProducts, createProduct, updateProduct, deleteProduct };
