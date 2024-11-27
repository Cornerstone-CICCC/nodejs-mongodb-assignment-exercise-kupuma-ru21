"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("../model/product.model");
const queryProducts = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield product_model_1.Product.find());
});
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.create(req.body);
    res.json(product.id);
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_model_1.Product.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.status(200).json("Product updated successfully");
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_model_1.Product.deleteOne({ _id: req.params.id });
        res.status(200).json("Product deleted successfully");
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.default = { queryProducts, createProduct, updateProduct, deleteProduct };
