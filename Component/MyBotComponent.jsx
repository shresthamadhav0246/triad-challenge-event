// import React, { useEffect } from 'react';
// import { Bot } from '@botpress/sdk';

// const MyBotComponent = () => {
//   useEffect(() => {
//     const bot = new Bot({});

//     bot.message('', async ({ message, client, ctx }) => {
//       console.log('Received message', message);

//       await client.createMessage({
//         conversationId: message.conversationId,
//         userId: ctx.botId,
//         tags: {},
//         type: 'text',
//         payload: {
//           text: `I'm a stub bot. You said: ${message.payload.text}`,
//         },
//       });
//       console.log('Text message sent');
//     });

//     return () => {
//       // Cleanup logic if necessary
//     };
//   }, []);

//   return <></>; // This component doesn't render anything visible
// };

// export default MyBotComponent;
