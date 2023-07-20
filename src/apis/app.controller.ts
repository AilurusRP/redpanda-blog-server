import { Controller, Get, Post, Request, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { FileInterceptor } from "@nestjs/platform-express";
import { AppService } from "./app.service";
import { AuthService } from "./auth/auth.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    // form-data type doesn't work here.
    @UseGuards(AuthGuard("local"))
    @Post("login")
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
