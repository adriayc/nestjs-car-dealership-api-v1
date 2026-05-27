import { IsString } from 'class-validator';

// DTO - Data Transfer Object
export class CreateCarDto {
  // @IsString({ message: 'The brand most be a cool string' })
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
}
