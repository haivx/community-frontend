
import ReactMarkdown from "react-markdown";
import { load } from "@common/utils"

import { Wrapper } from "./styles";

const PreviewPost = () => {
    const draftPost = load("draftpost");
    const  { title, category, content } = draftPost || {};

    return <Wrapper>
        <p>{title}</p>
        <p>{category}</p>
        <ReactMarkdown>{content}</ReactMarkdown>
    </Wrapper>
}

export default PreviewPost;