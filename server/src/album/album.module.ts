import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Photo} from "src/photo/photo.entity";
import {Album} from "src/album/album.entity";
import {AlbumController} from "src/album/album.controller";
import {AlbumService} from "src/album/album.service";

@Module({
    imports: [TypeOrmModule.forFeature([Photo, Album])],
    controllers: [AlbumController],
    providers: [AlbumService]
})
export class AlbumModule {}
