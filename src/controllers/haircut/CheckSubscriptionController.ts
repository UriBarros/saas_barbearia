import { Request, Response } from 'express'
import { CheckSubscriptionSevice } from '../../services/haircut/CheckSubscriptionService'


class CheckSubscriptionController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const checkSubscription = new CheckSubscriptionSevice();
    const status = await checkSubscription.execute({ user_id });

    return res.json(status);
  }
}

export { CheckSubscriptionController }  