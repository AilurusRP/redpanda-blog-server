import { Controller, Get, Post, Request, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { FileInterceptor } from "@nestjs/platform-express";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    // form-data type doesn't work here.
    @UseGuards(AuthGuard("local"))
    @Post("auth/login")
    async login(@Request() req) {
        console.log("jjjjjjjjjj")
        return req.user;
    }
}
