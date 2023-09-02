const express = require('express')
const router = express.Router()

const blogController = require("../controllers/blogController.js");
const blogDetailsController = require("../controllers/blogDetailsController.js");
const commentController = require("../controllers/commentController.js");
const messageController = require("../controllers/messageController.js");
const portfolioController = require("../controllers/portfolioController.js");
const productController = require("../controllers/productController.js");
const profitController = require("../controllers/profitController.js");
const projectController = require("../controllers/projectController.js");
const serviceController = require("../controllers/serviceController.js");
const tittleController = require("../controllers/titleController.js")






router.get('/blog/create',blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/delete', blogController.delete)
router.get('/blog/update', blogController.update);
router.get('/blogdetails/create',blogDetailsController.create);
router.get('/blogdetails/read', blogDetailsController.read);
router.get('/blogdetails/delete', blogDetailsController.delete)
router.get('/blogdetails/update', blogDetailsController.update);
router.get('/comment/create', commentController.create);
router.get('/comment/read', commentController.read);
router.get('/comment/delete', commentController.delete)
router.get('/comment/update', commentController.update);
router.get('/message/create',messageController.create);
router.get('/message/read', messageController.read);
router.get('/message/delete', messageController.delete)
router.get('/message/update', messageController.update);
router.get('/portfolio/create', portfolioController.create);
router.get('/portfolio/read', portfolioController.read);
router.get('/portfolio/delete', portfolioController.delete)
router.get('/portfolio/update', portfolioController.update);
router.get('/product/create', productController.create);
router.get('/product/read', productController.read);
router.get('/product/delete', productController.delete)
router.get('/product/update', productController.update);
router.get('/profit/create', profitController.create);
router.get('/profit/read', profitController.read);
router.get('/profit/delete', profitController.delete)
router.get('/profit/update', profitController.update);
router.get('/project/create', projectController.create);
router.get('/project/read', projectController.read);
router.get('/project/delete', projectController.delete)
router.get('/project/update', projectController.update);
router.get('/service/create', serviceController.create);
router.get('/service/read', serviceController.read);
router.get('/service/delete', serviceController.delete)
router.get('/service/update', serviceController.update);
router.get('/tittle/create', tittleController.create);
router.get('/tittle/read', tittleController.read);
router.get('/tittle/delete', tittleController.delete)
router.get('/tittle/update', tittleController.update);










module.exports = router;
