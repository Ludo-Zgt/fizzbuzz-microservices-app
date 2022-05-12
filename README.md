# FizzBuzz App in Microservices

### API Gateway

The Api Gateway will be the only HTTP entrypoint on port 3000.
| Endpoint | Verb | Params | Body | Result |
| ----------- | ---- | ------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/fizzbuzz` | GET | | { int1: 3, int2: 5, str1: "fizz", limit: 100, str2: "buzz" } | Return a list of strings with numbers from 1 to limit, where: all multiples of int1 are replaced by str1, all multiples of int2 are replaced by str2, all multiples of int1 and int2 are replaced by str1str2. |
| `/statistics/fizzbuzz` | GET | | | Return the parameters corresponding to the most used request, as well as the number of hits for this request |

Communication between microservices use TCP trannsport.

### Fizzbuzz MS

This microservice is responsible for the fizzbuzz computing.

### Statistics MS

This microservice is responsible for the statistics computing and the connection to the redis.

### Redis

Redis is use as a in-memory database store resquests scores and perform fast researches in a sorted set.
