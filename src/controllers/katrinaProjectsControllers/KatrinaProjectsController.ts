import { KATRINA_PROJECTS } from "../../services/config";
import { HttpRequest } from "../../services/HttpRequest";

export class KatrinaProjectsController {
    private httpRequest: HttpRequest;
    private paths: any;

    constructor() {
        this.httpRequest = new HttpRequest(KATRINA_PROJECTS.hostname, KATRINA_PROJECTS.port);
        this.paths = KATRINA_PROJECTS.paths;
    }

    public async getProjects() {
        const response = await this.httpRequest.get(this.paths.PROJECTS, {});
        return response.data;
    }
    public async getProjectById(id: string) {
        const response = await this.httpRequest.get(this.paths.PROJECTS, {
            params: id
        })
        return response
    }
}