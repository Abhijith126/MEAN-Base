import contactRoutes from './modules/contacts/contactsRoutes';

const routes = app => {
    /**
     * @swagger
     * /:
     *    get:
     *      description: Status of the app
     *      produces:
     *       - application/json
     */
    app.get('/', (req, res) => res.status(200).json({ status: 'Active' }));
    app.use('/contacts', contactRoutes);
};

export default routes;
