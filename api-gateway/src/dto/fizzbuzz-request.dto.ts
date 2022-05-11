import { FizzBuzzRequest } from './../interfaces/fizzbuzz-request.interface';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FizzBuzzRequestDto implements FizzBuzzRequest {
  @IsNumber()
  int1: number;

  @IsNumber()
  int2: number;

  @IsNumber()
  @IsNotEmpty()
  limit: number;

  @IsString()
  str1: string;

  @IsString()
  str2: string;
}
