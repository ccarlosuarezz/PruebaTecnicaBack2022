import Router from 'express';
const router=Router();
import * as usersController from '../controllers/users.controller';

router.get('/', usersController.getUsers);
router.get('/:nickname', usersController.getUserByNickName);
router.post('/', usersController.createUser);
router.put('/:nicknamet', usersController.editUser);
router.delete('/:nickname', usersController.deleteUser);
export default router;
