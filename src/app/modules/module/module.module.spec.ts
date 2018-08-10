import { ModuleModule } from './module.module';

describe('ModuleModule', () => {
  let moduleModule: ModuleModule;

  beforeEach(() => {
    moduleModule = new ModuleModule();
  });

  it('should create an instance', () => {
    expect(moduleModule).toBeTruthy();
  });
});
