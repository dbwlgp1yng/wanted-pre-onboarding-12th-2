import { StyledIssuesList } from './IssuesList.styled';
import useOctokit from '../hooks/useOctokit';
import img from "../images/optimize.webp";

export interface Issue {
  id: number;
  number: number;
  title: string;
  user: { login: string };
  created_at: string;
  comments: number;
  state: string;
}
function IssuesList() {
  const { code }: any = useOctokit(); 

  return (
    <>
      {
        code && code.map((issue: Issue, idx: number) => (
          <>
            <StyledIssuesList key={issue.id}>
              <div className='list_item'>
                <h2 className='list_title'>{issue.title}</h2>
                <div className='list_info'>
                  <span>#{issue.number}</span>
                  <span>{issue.state}</span>
                  <span>by {issue.user.login}</span>
                  <p>{issue.created_at}</p>
                </div>
              </div><p>{issue.comments}</p>
            </StyledIssuesList>
            {idx % 4 === 3 && 
              <StyledIssuesList>
                <img src={img} alt="원티드" />
              </StyledIssuesList>
            }
          </>
        ))
      }
    </>
  );
}

export default IssuesList;