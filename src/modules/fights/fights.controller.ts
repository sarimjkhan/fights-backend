import { Body, Controller, Get, Header, Param, Post } from "@nestjs/common";
import { FightsService } from "./fights.service";
import { Fight } from "../../entities/fight.entity";
import { FightDTO } from "src/dtos/fight.dto";

@Controller('api/fights')
export class FightsController {
    constructor(private fightsService: FightsService){}
    
    @Get()
    async getFights(): Promise<Fight[]> {
        return await this.fightsService.getAllFights();
    }

    @Get(':id')
    async getFightById(@Param('id') id:number): Promise<Fight> {
        return await this.fightsService.getFightById(id);
    }

    @Post()
    async createFight(@Body() fightDto: FightDTO): Promise<Fight> {
        return await this.fightsService.createFight(fightDto);
    }

}