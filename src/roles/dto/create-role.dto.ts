import { IsBoolean, IsString } from "class-validator";

export class CreateRoleDto {
    @IsString()
    name: string;
    @IsBoolean()
    is_active: boolean;
}
