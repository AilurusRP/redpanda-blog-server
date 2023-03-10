import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminUserDataDocument } from 'src/schemas/user.schema';

@Injectable()
export class AdminUserService {

  constructor(@InjectModel("admin_user") private adminUserDataModel: Model<AdminUserDataDocument>) {   
  }

  async getAdminUserAuthKeyHash(): Promise<string | undefined> {
    console.log(122222222)
    const data = await this.adminUserDataModel.find();
    console.log(data)
    return "kkkk"
  }
}
