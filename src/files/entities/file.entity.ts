import { Prop } from "@nestjs/mongoose";

export class File {
    @Prop()
    url:string

    @Prop()
    table_name:string

    @Prop()
    is_active:boolean

}
