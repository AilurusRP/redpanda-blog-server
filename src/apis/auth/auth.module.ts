import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport/dist";
import { AdminUserModule } from "../admin-user/admin-user.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports: [AdminUserModule, PassportModule],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
