import { useState } from 'react';
import { patchArticle } from "../utils/api";

const Votes = ({ votes, article_id }) => {
    const [voteChange, setVoteChange] = useState(votes);

    // PATCH request, update state => votes = votes + 1

    const giveVote = (voteChange) => {
        setVoteChange(voteChange = voteChange + 1);
        patchArticle(article_id)
        .catch(err => { 
            setVoteChange(voteChange = voteChange - 1);
        });
    }

    return (
    <button onClick={() => giveVote()}>👍 { votes + voteChange }</button>
    )
}
export default Votes;