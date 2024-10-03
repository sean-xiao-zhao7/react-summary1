import Stack from "@mui/material/Stack";

import { PostType } from "../../types/PostType";
import SinglePostPreview from "./SinglePostPreview";

export default function PostsList({ posts }: { posts: PostType[] }) {
    return (
        <Stack spacing={2}>
            {posts.map((post) => (
                <SinglePostPreview post={post} key={post.id} />
            ))}
        </Stack>
    );
}
