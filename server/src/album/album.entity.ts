import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import {Photo} from "src/photo/photo.entity";
import {AbstractEntity} from "src/database/abstract.entity";


@Entity()
export class Album extends AbstractEntity<Album>{
    @Column()
    name: string;

    @Column({nullable: true, default: null})
    preview?: string;

    @OneToMany(() => Photo, photo => photo.album)
    photos?: Photo[];
}
