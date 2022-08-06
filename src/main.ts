import { NestFactory } from "@nestjs/core";
import { AppModule } from "./apis/app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3088);
}
bootstrap();
