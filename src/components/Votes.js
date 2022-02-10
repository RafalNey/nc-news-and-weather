import { useState } from 'react';
import { patchArticle } from "../utils/api";

const Votes = ({ votes, article_id }) => {
    const [voteChange, setVoteChange] = useState(0);

    // PATCH request, update state => votes = votes + 1

    const giveVote = (currChange) => {
        setVoteChange(currChange = currChange + 1);
        patchArticle(article_id)
        .catch(err => {
            setVoteChange(currChange = currChange - 1);
        });
    }

    return <button onClick={() => giveVote()}>👍 { votes + voteChange }</button>
}
export default Votes;