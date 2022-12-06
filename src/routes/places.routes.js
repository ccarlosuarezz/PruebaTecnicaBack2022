import Router from 'express';
const router=Router();
import * as placesController from '../controllers/places.controller';

router.get('/', placesController.getPlaces);
router.get('/:idPlace', placesController.getPlacesById);
router.post('/', placesController.createPlace);
router.put('/:idPLace', placesController.editPlace);
router.delete('/:idPLace', placesController.deletePlace);
export default router;
