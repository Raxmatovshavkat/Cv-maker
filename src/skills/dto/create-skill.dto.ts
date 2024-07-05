import { ArrayMinSize, IsArray} from "class-validator";

export class CreateSkillDto {
    @IsArray()
    @ArrayMinSize(1, { message: 'relationId must contain at least 1 element' })
    hardSkills:Array<string>;
    @IsArray()
    @ArrayMinSize(1, { message: 'relationId must contain at least 1 element' })
    softSkills:Array<string>;
    @IsArray()
    @ArrayMinSize(1, { message: 'relationId must contain at least 1 element' })
    language: Array<string>;
}
