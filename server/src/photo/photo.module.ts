import {Module} from "@nestjs/common";
import {PhotoController} from "src/photo/photo.controller";
import {PhotoService} from "src/photo/photo.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Photo} from "src/photo/photo.entity";
import {Album} from "src/album/album.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Photo, Album])],
    controllers: [PhotoController],
    providers: [PhotoService]
})
export class PhotoModule {

}
