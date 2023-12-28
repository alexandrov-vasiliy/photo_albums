import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {PhotoService} from "src/photo/photo.service";
import {Photo} from "src/photo/photo.entity";

@Controller('/photos')
export class PhotoController {
    public constructor(private readonly photoService: PhotoService) {
    }
    @Get()
    findAll(): Promise<Photo[]> {
        return this.photoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Photo> {
        return this.photoService.findOne(+id);
    }

    @Post()
    create(@Body() photoData: Partial<Photo>): Promise<Photo> {
        return this.photoService.create(photoData);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() photoData: Partial<Photo>): Promise<Photo> {
        return this.photoService.update(+id, photoData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.photoService.remove(+id);
    }
}
