import {Injectable, NotFoundException} from "@nestjs/common";
import {Repository} from "typeorm";
import {Photo} from "src/photo/photo.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class PhotoService {

    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>,
    ) {}

    async findAll(): Promise<Photo[]> {
        return await this.photoRepository.find();
    }

    async findOne(id: number): Promise<Photo> {
        const photo = await this.photoRepository.findOne({ where: {id}});
        if (!photo) {
            throw new NotFoundException(`Photo with ID ${id} not found`);
        }
        return photo;
    }

    async create(photoData: Partial<Photo>): Promise<Photo> {
        const photo = this.photoRepository.create(photoData);
        return await this.photoRepository.save(photo);
    }

    async update(id: number, photoData: Partial<Photo>): Promise<Photo> {
        await this.findOne(id); // Проверка, существует ли фото с данным ID
        await this.photoRepository.update(id, photoData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        const photo = await this.findOne(id);
        await this.photoRepository.remove(photo);
    }
}
