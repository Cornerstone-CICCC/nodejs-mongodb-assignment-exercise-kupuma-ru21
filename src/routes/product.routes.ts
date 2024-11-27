import { Router } from "express";
import productController from "../controllers/product.controller";

const userRouter = Router();

userRouter.get("/", productController.queryProducts);
userRouter.post("/create", productController.createProduct);
userRouter.put("/:id", productController.updateProduct);
userRouter.delete("/:id", productController.deleteProduct);

export default userRouter;
