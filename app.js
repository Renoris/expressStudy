const express = require('express');

const app = express();

const membersRouter = require('./router/api/members');
app.use(express.json());
app.use('/api/members', membersRouter);

// app.listen(3000, () => {
//     console.log('Server is listening...');
// });

//헤로쿠에선 포트를 환경변수로 넘겨주기때문에 환경변수로 포트번호를 받아와야함
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening');
});