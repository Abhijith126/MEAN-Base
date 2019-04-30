import express from 'express';
import contactsController from './contactsController';

const router = express.Router();

/**
 * @swagger
 * /:
 *    get:
 *      description: gets all contacts
 *      produces:
 *       - application/json
 */
router.get('/', contactsController);
/**
 * @swagger
 * /:
 *    post:
 *      description: create a contact
 *      produces:
 *       - application/json
 */
router.post('/', contactsController);

module.exports = router;
