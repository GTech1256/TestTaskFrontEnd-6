import express, { Request, Response} from 'express';
import weatherRoutes from './city.routes';


const router = express.Router();

/**
 * GET api/v1/status
 */
router.get('/status', (req: Request, res: Response) => res.send('OK'));

/**
 * GET api/v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/weather', weatherRoutes);


export default router;
