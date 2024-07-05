export class CreateLogDto {
    readonly method: string;
    readonly url: string;
    readonly statusCode: number;
    readonly responseTime: number;
}