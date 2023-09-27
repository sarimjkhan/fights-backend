export class Option {
    constructor(
        public optionTitle: string,
        public optionId: string,
        public optionHits: number
    ){}
}

export class FightModel {
    constructor(
            public title: string,
            public options: Option[],
            public mySelectedOptionId: string,
            public id: string
    ){}    
}