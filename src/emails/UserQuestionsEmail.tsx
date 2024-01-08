import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text
} from '@react-email/components'

interface UserQuestionsEmailProps {
  userFirstname: string
  userEmail: string
  userMessage: string
  userPhone: string
  year: string
}

export const UserQuestionsEmail = ({
  userFirstname = 'Zeno',
  userEmail = 'Email',
  userMessage = 'mensaje',
  year = '2024',
  userPhone = ''
}: UserQuestionsEmailProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src='https://learnastro.dev/_astro/astro-course-icon.a90ae131_Z2s6xiC.webp'
          width='181'
          height='200'
          alt='Astro Course'
          style={logo}
        />
        <Text style={paragraph}>Hola soy {userFirstname},</Text>
        <Text style={paragraph}>Mi Email es: {userEmail}</Text>
        <Text style={paragraph}>Mi teléfono: {userPhone}</Text>
        <Text style={paragraph}>{userMessage}</Text>

        <Hr style={hr} />
        <Text style={footer}>Dermia Arequipa {year}</Text>
      </Container>
    </Body>
  </Html>
)

export default UserQuestionsEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px'
}

const logo = {
  margin: '0 auto'
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px'
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0'
}

const footer = {
  color: '#8898aa',
  fontSize: '12px'
}
