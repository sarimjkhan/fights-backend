import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Option } from './option.entity';


@Entity('fights')
export class Fight {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    title: string;

    @OneToMany(() => Option, option => option.fight, {cascade: true})
    options: Option[];
}