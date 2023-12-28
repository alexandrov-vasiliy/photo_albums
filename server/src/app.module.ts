import {Module} from '@nestjs/common';
import {PhotoModule} from "src/photo/photo.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import typeorm from "src/config/typeorm";
import {AllExceptionFilter} from "src/filters/all-exception.filter";
import {APP_FILTER} from "@nestjs/core";
import {AlbumModule} from "src/album/album.module";


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [typeorm]
        }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
        }),
        AlbumModule,
        PhotoModule
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AllExceptionFilter,
        },
    ]
})
export class AppModule {
}
