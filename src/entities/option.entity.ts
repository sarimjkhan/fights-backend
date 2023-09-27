import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Fight } from './fight.entity';

@Entity('options')
export class Option {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    title: string;

    @Column({type: 'int'})
    hits: number;

    @ManyToOne(() => Fight, fight => fight.options)
    fight: Fight;
}