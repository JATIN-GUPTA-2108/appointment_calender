import express from 'express';

// const router = express.Router();
// router.get('/' ,  (req,res)=>{
// res.send("this works");
// })
import { getAppointments , createAppointment} from '../controllers/cont.js';
// import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getAppointments);
router.post('/', createAppointment);
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;