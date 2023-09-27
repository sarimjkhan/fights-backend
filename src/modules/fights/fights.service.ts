import { Injectable } from "@nestjs/common";
import { FightModel } from "./fight.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Fight } from "../../entities/fight.entity";
import { Option } from "../../entities/option.entity";
import { FightDTO } from "src/dtos/fight.dto";

@Injectable()
export class FightsService {
    
    constructor(
        @InjectRepository(Fight) 
        private fightsRepo: Repository<Fight>
    ) {}

    async getAllFights(): Promise<Fight[]> {
        return await this.fightsRepo.find({relations: ['options']});
    }

    async createFight({title, options}: FightDTO): Promise<Fight> {
        const fight = new Fight();
        fight.title = title;
        fight.options = options.map((optTitle) => {
            const option = new Option();
            option.title = optTitle;
            option.hits = 0;
            return option;
        })

        return await this.fightsRepo.save(fight);
    }

    async getFightById(id: number): Promise<Fight> {
        return await this.fightsRepo.findOne({where: {id: id}, relations: ['options']})
    }
 
    getFights(): any[] {

        const fights: FightModel[] = [
            {
                title: "Shahrukh vs Salmna",
                options: [
                    { optionTitle: "Shahrukh khan", optionId: "1", optionHits: 23},
                    { optionTitle: "Salman khan", optionId: "2", optionHits: 10}
                ],
                mySelectedOptionId: "1",
                id: "1"
            },
            {
                title: "Karachi vs Lahore",
                options: [
                    { optionTitle: "Karachi", optionId: "3", optionHits: 23},
                    { optionTitle: "Lahore", optionId: "4", optionHits: 10}
                ],
                mySelectedOptionId: "4",
                id: "2"
            },
            {
                title: "Imran vs All",
                options: [
                    { optionTitle: "Imran", optionId: "5", optionHits: 100000},
                    { optionTitle: "All", optionId: "6", optionHits: 100}
                ],
                mySelectedOptionId: "5",
                id: "3"
            }
        ]

        return fights;
    }
}