import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminUserData, AdminUserDataDocument } from 'src/schemas/admin-user.schema';

@Injectable()
export class AdminUserService {

  constructor(@InjectModel("admin_user") private adminUserDataModel: Model<AdminUserDataDocument>) {   
  }

  async getAdminUserAuthKeyHash(): Promise<AdminUserData | undefined> {
    const data = await this.adminUserDataModel.findOne();
    return data;
  }
}
