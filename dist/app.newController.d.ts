import { AppService } from "./app.service";
export declare class NewAppController {
    private appService;
    constructor(appService: AppService);
    getPosts(): {
        id: number;
        name: string;
    }[];
}
