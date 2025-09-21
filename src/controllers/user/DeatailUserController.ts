import { Request, Response } from 'express';
import { UserDetailService } from '../../services/users/DetailUserService';

class UserDetailController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;


    const userDetailService = new UserDetailService();

    const detailuser = await userDetailService.execute(user_id);

    return res.json(detailuser);
  }

}

export { UserDetailController };