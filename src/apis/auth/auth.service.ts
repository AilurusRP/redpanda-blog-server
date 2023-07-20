import { Injectable } from "@nestjs/common";
import { toHash } from "src/utils/to-hash";
import { AdminUserService } from "../admin-user/admin-user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly usersService: AdminUserService, private readonly jwtService: JwtService) {}

    async validateUser(uname: string, authKey: string): Promise<any> {
        const { uname: trueUname, authKeyHash: trueAuthKeyHash } = await this.usersService.getAdminUserAuthKeyHash();
        const receivedHash = toHash(authKey);
        if (uname === trueUname && receivedHash === trueAuthKeyHash) {
            return true;
        }
        return false;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
