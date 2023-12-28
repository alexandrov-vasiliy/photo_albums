import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AlbumService} from './album.service';
import {Album} from './album.entity';

@Controller('albums')
export class AlbumController {
    constructor(private readonly albumService: AlbumService) {
    }

    @Get()
    findAll(): Promise<Album[]> {
        return this.albumService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Album> {
        return this.albumService.findOne(+id);
    }

    @Post()
    create(@Body() albumData: Partial<Album>): Promise<Album> {
        return this.albumService.create(albumData);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() albumData: Partial<Album>): Promise<Album> {
        return this.albumService.update(+id, albumData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.albumService.remove(+id);
    }
}
