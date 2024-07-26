import { IsBoolean, IsNumber, IsString } from "class-validator"

export class CreateUserOpinionDto {
    @IsString()
    description: string
    @IsNumber()
    star: number
    @IsBoolean()
    is_active: boolean
}
