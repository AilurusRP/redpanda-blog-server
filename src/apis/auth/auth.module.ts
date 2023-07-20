import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport/dist";
import { AdminUserModule } from "../admin-user/admin-user.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        AdminUserModule,
        PassportModule,
        JwtModule.register({
            secret: "jbwfeuegtrh",
            signOptions: { expiresIn: "60s" },
        }),
    ],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService],
})
export class AuthModule {}
