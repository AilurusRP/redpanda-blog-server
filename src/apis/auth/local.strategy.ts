import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            usernameField: "uname",
            passwordField: "authKey",
        });
    }

    async validate(uname: string, authKey: string): Promise<any> {
        const user = await this.authService.validateUser(uname, authKey);
        if (!user) throw new UnauthorizedException();

        return user;
    }
}
