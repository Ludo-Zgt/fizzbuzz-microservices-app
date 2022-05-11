import { Injectable } from '@nestjs/common';
import { FizzBuzzRequest } from './interfaces/fizzbuzz-request.interface';

@Injectable()
export class AppService {
  toFizzBuzz(request: FizzBuzzRequest) {
    const { int1, int2, limit, str1, str2 } = request;
    const numbers = this.generateNumbersArray(limit);
    const output = numbers.map((value) => {
      return this.fizzbuzz(value, int1, int2, str1, str2);
    });
    return output.join();
  }

  private generateNumbersArray(limit: number): number[] {
    return Array.from({ length: limit }, (_, i) => i + 1);
  }

  private fizzbuzz(
    number: number,
    int1: number,
    int2: number,
    str1: string,
    str2: string,
  ): string {
    if (number % (int1 * int2) == 0) {
      return str1.concat(str2);
    } else if (number % int1 == 0) {
      return str1;
    } else if (number % int2 == 0) {
      return str2;
    } else {
      return `${number}`;
    }
  }
}
