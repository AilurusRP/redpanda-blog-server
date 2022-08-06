import { Test, TestingModule } from '@nestjs/testing';
import { UpdateBlogByIdController } from './update-blog-by-id.controller';

describe('UpdateBlogByIdController', () => {
  let controller: UpdateBlogByIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateBlogByIdController],
    }).compile();

    controller = module.get<UpdateBlogByIdController>(UpdateBlogByIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
