import styled from 'styled-components'
import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import ChatScreen from '../../components/ChatScreen'
import { auth, db } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import getRecipientEmail from '../../utils/getRecipientEmail'


function Chats({chat, messages}) {
  const [user] = useAuthState(auth)
  return (
    <Container>
      <Head>
        <title>Chat with {getRecipientEmail(chat.users, user)}</title>
      </Head>
      <Sidebar />

      <ChatContainer>
        <ChatScreen /> 
      </ChatContainer>
    </Container>
  )
}
export default Chats

const Container = styled.div`
  display: flex;
`
const ChatContainer = styled.div`
flex:1;
overflow: scroll;
height: 100vh;
:: -webkit-scrollbar {
  display: none
}
-as-overflow-styled: none;
scrollbar-width: none;
`
export async function getServerSideProps(context) {
  const ref = db.collection('chats').doc(context.query.id);
  // PREP  the message on the server
  const messageRes = await ref 
    .collection('message')
    .orderBy('timestamp', 'asc')
    .get()

    const messages = messageRes.docs
      .map((doc) => ({
        id: doc.id,
        ...data(),
      }))
      .map((messages) => ({
        ...messages,
        timestamp: messages.timestamp.toDate().getTime()
      }));
      //PREP the chats

      const chatRes = await ref.get();
      const chat = {
        id: chatRes,
        ...chatRes.data()
      };

      return {
        props: {
          messages: JSON.stringify(messages),
          chat: JSON.stringify(chat)
        }
      }
}
