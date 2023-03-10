import { Injectable } from "@nestjs/common";
import { toHash } from "src/utils/to-hash";
import { AdminUserService } from "../admin-user/admin-user.service";

@Injectable()
export class AuthService {
    constructor(private readonly usersService: AdminUserService) {}

    async validateUser(uname: string, authKey: string): Promise<any> {
        const { uname: trueUname, authKeyHash: trueAuthKeyHash } = await this.usersService.getAdminUserAuthKeyHash();
        const receivedHash = toHash(authKey);
        if (uname === trueUname && receivedHash === trueAuthKeyHash) {
            return true;
        }
        return false;
    }
}
