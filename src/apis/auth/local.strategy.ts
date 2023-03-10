import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            usernameField: "",
            passwordField: "authKey"
        });
    }

    async validate(authKey: string): Promise<any> {
        console.log("egthtrryjtu")
        const user = await this.authService.validateUser(authKey);
        console.log(user)
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
