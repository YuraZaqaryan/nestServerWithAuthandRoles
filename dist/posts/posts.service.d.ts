import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./posts.model";
import { FilesService } from "../files/files.service";
export declare class PostsService {
    private useRepository;
    private fileService;
    constructor(useRepository: typeof Post, fileService: FilesService);
    create(dto: CreatePostDto, image: any): Promise<Post>;
}
