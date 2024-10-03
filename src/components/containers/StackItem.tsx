import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const StackItem = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    paddingVertical: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));
