import { IsBoolean, IsNotEmpty, IsUUID } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
    @ApiProperty({ example: 'Milk', required: true })
    @IsNotEmpty()
    name: string

    // @IsUUID()
    // user_id?: string;

    @ApiProperty({ default: false, required: false })
    @IsBoolean()
    purchased?: boolean
}
