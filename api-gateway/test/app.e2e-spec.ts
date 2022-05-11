import * as request from 'supertest';

describe('AppController (e2e)', () => {
  const url = 'http://fizz-gateway:3000';

  describe('/fizzbuzz (POST)', () => {
    describe('when params are not valid', () => {
      it('should return an error', () => {
        return request(url)
          .post('/fizzbuzz')
          .send({ str1: 'Fizz' })
          .expect(400);
      });
    });
    describe('when params are valid', () => {
      it('should return code 201 with result', () => {
        return request(url)
          .post('/fizzbuzz')
          .send({ int1: 3, int2: 5, limit: 15, str1: 'Fizz', str2: 'Buzz' })
          .expect(201)
          .expect('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz');
      });
    });
  });

  describe('/statistics/fizzbuzz (GET)', () => {
    describe('when there is data or not', () => {
      it('should return an array', () => {
        return request(url)
          .get('/statistics/fizzbuzz')
          .expect(200)
          .expect((res) => {
            Array.isArray(res.body);
          });
      });
    });
  });
});
