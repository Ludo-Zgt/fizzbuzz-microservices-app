import { AppService } from './app.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('FizzbuzzService', () => {
  let service: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('prepare', () => {
    it('should return array of numbers from 1 to limit', () => {
      expect(
        service.toFizzBuzz({
          int1: null,
          int2: null,
          limit: 10,
          str1: null,
          str2: null,
        }),
      ).toEqual('1,2,3,4,5,6,7,8,9,10');
    });
    it('should replace int1 by str1', () => {
      expect(
        service.toFizzBuzz({
          int1: 3,
          int2: null,
          limit: 5,
          str1: 'Fizz',
          str2: null,
        }),
      ).toEqual('1,2,Fizz,4,5');
    });
    it('should replace int2 by str2', () => {
      expect(
        service.toFizzBuzz({
          int1: null,
          int2: 5,
          limit: 5,
          str1: null,
          str2: 'Buzz',
        }),
      ).toEqual('1,2,3,4,Buzz');
    });
    it('should replace int1 multiples by str1', () => {
      expect(
        service.toFizzBuzz({
          int1: 3,
          int2: null,
          limit: 10,
          str1: 'Fizz',
          str2: null,
        }),
      ).toEqual('1,2,Fizz,4,5,Fizz,7,8,Fizz,10');
    });
    it('should replace int2 multiples by str2', () => {
      expect(
        service.toFizzBuzz({
          int1: null,
          int2: 5,
          limit: 10,
          str1: null,
          str2: 'Buzz',
        }),
      ).toEqual('1,2,3,4,Buzz,6,7,8,9,Buzz');
    });
    it('should replace both', () => {
      expect(
        service.toFizzBuzz({
          int1: 3,
          int2: 5,
          limit: 15,
          str1: 'Fizz',
          str2: 'Buzz',
        }),
      ).toEqual('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz');
    });
  });
});
