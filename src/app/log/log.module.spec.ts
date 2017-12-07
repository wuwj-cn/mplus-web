import { LogModule } from './log.module';

describe('LogModule', () => {
  let logModule: LogModule;

  beforeEach(() => {
    logModule = new LogModule();
  });

  it('should create an instance', () => {
    expect(logModule).toBeTruthy();
  });
});
