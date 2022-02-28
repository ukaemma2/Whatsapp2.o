import { Avatar, IconButton, Button  } from '@material-ui/core';
import styled from 'styled-components';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator'

function Sidebar() {
  const createChat = () => {
    const input = prompt(
      'Please enter an email address for a user you want to chat with'
    )
    if(!input) return null;
    if(EmailValidator.validate(input)) {
      //This is where we push chat to the dataBase if the email is valid
    }
  }
  return (
  <Container>
    <Header>
      <UserAvata />
      <IconContainer>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </IconContainer>
    </Header>
    <Search>
      <SearchIcon />
      <SearchInput placeholder="Search in chat ..." />
    </Search>
    <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>
  </Container>
  );
}
export default  Sidebar
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 2px;
`;
const SearchInput = styled.input `
  outline-width: 0;
  border: none; 
  flex: 1; 
`;

const Container = styled.div ``;
const SidebarButton = styled(Button)`
  width:100%;
  &&&{
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke
  }
`;
const Header = styled.div `
  display: flex;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height:88px;
  border-bottom: 1px solid whitesmoke;
`;
const UserAvata = styled(Avatar)`
  cursor: pointer;
  :hover{
      opacity: 0.8;
  }
`;
const IconContainer =styled.div ``;