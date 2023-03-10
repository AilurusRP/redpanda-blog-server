import { Injectable } from "@nestjs/common";
import { toHash } from "src/utils/to-hash";
import { AdminUserService } from "../admin-user/admin-user.service";

@Injectable()
export class AuthService {
    constructor(private readonly usersService: AdminUserService) {}

    async validateUser(authKey: string): Promise<any> {
        const trueHash = await this.usersService.getAdminUserAuthKeyHash();
        const receivedHash = toHash(authKey)
        if (receivedHash === trueHash) {
            return true;
        }
        return false;
    }
}
