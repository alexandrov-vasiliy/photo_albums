import {Injectable, NotFoundException} from "@nestjs/common";
import {Album} from "src/album/album.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class AlbumService {
    constructor(
        @InjectRepository(Album)
        private readonly _albumRepository: Repository<Album>,
    ) {}

    async findAll(): Promise<Album[]> {
        return await this._albumRepository.find();
    }

    async findOne(id: number): Promise<Album> {
        const album = await this._albumRepository.findOne({ where: {id} });
        if (!album) {
            throw new NotFoundException(`Album with ID ${id} not found`);
        }
        return album;
    }

    async create(albumData: Partial<Album>): Promise<Album> {
        const album = this._albumRepository.create(albumData);
        return await this._albumRepository.save(album);
    }

    async update(id: number, albumData: Partial<Album>): Promise<Album> {
        await this.findOne(id); // Проверка, существует ли альбом с данным ID
        await this._albumRepository.update(id, albumData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        const album = await this.findOne(id);
        await this._albumRepository.remove(album);
    }
}
