import { Test, TestingModule } from '@nestjs/testing';
import { GetAllBlogsController } from './get-all-blogs.controller';

describe('GetAllBlogsController', () => {
  let controller: GetAllBlogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAllBlogsController],
    }).compile();

    controller = module.get<GetAllBlogsController>(GetAllBlogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
