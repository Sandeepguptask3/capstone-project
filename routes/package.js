import express from 'express';

import {
    createPackage,
    deletePackage,
    getAllPackage
} from "../controllers/packageController.js";

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//create new tour
router.post('/', createPackage);

//delete tour
router.delete('/:id' , deletePackage);

//get All tour
router.get('/', getAllPackage);

export default router;