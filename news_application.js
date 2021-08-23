intent('What does this app do?','What can I do here?','Tell me about this app.',
      reply('This is an news reading application.'));
// intent('Start a command',(p)=>{
//     p.play({command:'testCommand'});
// })
const API_KEY='a085a9957ef1464694a33ae75ea90212';

intent('Give me the news from $(source* (.*))',(p)=>{
    let NEWS_API_URL=`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    
    
    if(p.source.value){
        NEWS_API_URL=`${NEWS_API_URL}&source=${p.source.value.toLowercase().split(" ").join('-')}`
    }

})