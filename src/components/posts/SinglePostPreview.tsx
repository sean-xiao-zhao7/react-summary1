import { PostType } from "../../types/PostType";
import { StackItem } from "../containers/StackItem";

export default function SinglePostPreview({ post }: { post: PostType }) {
    return (
        <StackItem>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </StackItem>
    );
}
