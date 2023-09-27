import { Module } from "@nestjs/common";
import { FightsController } from "./fights.controller";
import { FightsService } from "./fights.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Fight } from "src/entities/fight.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Fight])],
    controllers: [FightsController],
    providers: [FightsService]
})
export class FightsModule {

}