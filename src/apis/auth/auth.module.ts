import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport/dist";
import { AdminUserModule } from "../admin-user/admin-user.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import config from "src/privConfig";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [
        AdminUserModule,
        PassportModule,
        JwtModule.register({
            secret: config.secret,
            signOptions: { expiresIn: "7d" },
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
