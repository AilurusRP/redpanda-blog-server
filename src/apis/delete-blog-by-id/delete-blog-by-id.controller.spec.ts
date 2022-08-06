import { Test, TestingModule } from "@nestjs/testing";
import { DeleteBlogByIdController } from "./delete-blog-by-id.controller";

describe("DeleteBlogByIdController", () => {
    let controller: DeleteBlogByIdController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DeleteBlogByIdController],
        }).compile();

        controller = module.get<DeleteBlogByIdController>(DeleteBlogByIdController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
