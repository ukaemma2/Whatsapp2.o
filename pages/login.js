import Head from 'next/head'
import styled from 'styled-components'
function login() {
    return (
        <Container>
            <Head>
                <title>login</title>
            </Head>
            <LoginContainer>
                <Logo
                 src='' />
            </LoginContainer>
            
        </Container>
    )
}

export default login
const Container = styled.div`

`;
const Logo = styled.img`

`;
const LoginContainer = styled.div`

`;
