import { PostType } from "../../types/PostType";
import { StyledPaper } from "../containers/StyledPaper";

export default function SinglePostPreview({ post }: { post: PostType }) {
    return <StyledPaper>{post.title}</StyledPaper>;
}
