import { Test, TestingModule } from '@nestjs/testing';
import { CreateBlogController } from './create-blog.controller';

describe('CreateBlogController', () => {
  let controller: CreateBlogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateBlogController],
    }).compile();

    controller = module.get<CreateBlogController>(CreateBlogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
