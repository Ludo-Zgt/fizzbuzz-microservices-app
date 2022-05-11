import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/fizzbuzz (POST)', () => {
    describe('when params are not valid', () => {
      it('should return an error', () => {
        return request(app.getHttpServer())
          .post('/fizzbuzz')
          .send({ str1: 'Fizz' })
          .expect(400);
      });
    });
    describe('when params are valid', () => {
      it('should return code 200 with result', () => {
        return request(app.getHttpServer())
          .post('/fizzbuzz')
          .send({ int1: 3, int2: 5, limit: 15, str1: 'Fizz', str2: 'Buzz' })
          .expect(201);
      });
    });
  });

  describe('/statistics/fizzbuzz (GET)', () => {
    describe('when there is data or not', () => {
      it('should return an array', () => {
        return request(app.getHttpServer())
          .get('/statistics/fizzbuzz')
          .expect(200)
          .expect((res) => {
            Array.isArray(res.body);
          });
      });
    });
  });
});
