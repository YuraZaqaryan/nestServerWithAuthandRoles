import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: "user@gmail.com", description: "Email Address"})
    // @IsString({message: "Must be String"})
    // @Length(6, 22, {message: "Not less than 6 and not more than 22"})
    // @IsEmail({},{message: "Not valid e-mail"})
    readonly email: string;

    @ApiProperty({example: "batut2023", description: "Password"})
    // @IsString({message: "Must be String"})
    // @Length(8, 16, {message: "Not less than 8 and not more than 16"})
    readonly password: string;
}