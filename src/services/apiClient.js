import { ChallengerService, ChallengesService, TodosService, HeartbeatService } from './index';

export class ApiClient {
    constructor (options) {
        const defaultOptions = {
            URL: "https://apichallenges.herokuapp.com/",
        }
        const mergeOptions = {
            ...defaultOptions,
            ...options,
        }
        this.challenger = new ChallengerService(mergeOptions);
        this.challenges = new ChallengesService(mergeOptions);
        this.todos = new TodosService(mergeOptions);
        this.heartbeat = new HeartbeatService(mergeOptions);
    };
    
    //метод, который выдергивает авторизационный токен из запроса challenger
    //и подставляет ко всем остальным запросам
    static async loginAs(){
        const client = this.unauthorized();    
        const { headers } = await client.challenger.post();
        const token = headers["x-challenger"]


        return new ApiClient({token});
    }
    //метод, если хотим дернуть запрос без авторизации
    static unauthorized(){
        return new ApiClient();
    }
};