import Router from 'express';
const router=Router();
import * as elementController from '../controllers/element.controller';

router.get('/', elementController.getElements);
router.get('/:idElement', elementController.getElementBy);
router.post('/', elementController.createElement);
router.put('/:idElement', elementController.editElement);
router.delete('/:idElement', elementController.deleteElement);
export default router;
