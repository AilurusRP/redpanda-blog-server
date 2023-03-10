import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminUserDataSchema } from "src/schemas/admin-user.schema";
import { AdminUserService } from "./admin-user.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: "admin_user", schema: AdminUserDataSchema, collection: "admin_user" }]),
    ],
    providers: [AdminUserService],
    exports: [AdminUserService],
})
export class AdminUserModule {}
