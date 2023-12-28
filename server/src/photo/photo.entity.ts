import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import {Album} from "src/album/album.entity";
import {AbstractEntity} from "src/database/abstract.entity";

@Entity()
export class Photo extends AbstractEntity<Photo>{

    @Column()
    title: string;

    @Column({nullable: true})
    description?: string;

    @Column({nullable: true})
    filePath?: string;

    @Column()
    albumId: number;


    @Column({nullable: true})
    meta_info?: string;

    @ManyToOne(() => Album, album => album.photos)
    @JoinColumn({ name: 'albumId' })
    album: Album;
}
