import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import img from "../pages/images/no-profile.jpg";

function Chatbot(){
const steps = [
    {
        id: '0',
        message: 'Hey! Do you need help?',
        trigger: '1',
    }, {
        id: '1',
  
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
  
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'Order Status' },
            { value: 2, label: 'Speak to a representative' }
  
        ],
        end: true
    }
  ];
  const theme = {
    background: '#a2faf4',
    headerBgColor: '#0F3789',
    headerFontSize: '20px',
    botBubbleColor: '#7e8584',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#0f74d9',
    userFontColor: 'white',
  };
  
  
  
  // Set some properties of the bot
  const config = {
    botAvatar: img,
    floating: true,
  };
  return(
    <div>
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Contuso Bot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
    
    </div>
  );
}
export default Chatbot;