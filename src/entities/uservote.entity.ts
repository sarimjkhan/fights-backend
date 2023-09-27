import {
    Entity,
    Column,
    ManyToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Option } from './option.entity';
import { User } from './user.entity';

@Entity('user_votes')
export class UserVote{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user: User;


    @ManyToOne(() => Option)
    @JoinColumn({name: 'option_id'})
    option: Option;
}