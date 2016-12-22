import React from 'react'

const quotes = [
  'Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.'+
  '-Thomas Jefferson',
  'You are never too old to set another goal or to dream a new dream.'+
  '-Les Brown',
  'Know what you want to do, hold the thought firmly, and do every day what should be done, and every sunset will see you that much nearer to your goal.'+
  '-Elbert Hubbard',
  'A dream becomes a goal when action is taken toward its achievement.'+
  '-Bo Bennett',
  'Obstacles are those frightful things you see when you take your eyes off your goal.'+
  '-Henry Ford',
  'A goal is not always meant to be reached, it often serves simply as something to aim at.'+
  '-Bruce Lee',
  'What you get by achieving your goals is not as important as what you become by achieving your goals.'+
  '-Zig Ziglar',
  'There\'s nothing better than achieving your goals, whatever they might be.'+
  '-Paloma Faith',
  'It always seems impossible until it\'s done.'+
  '-Nelson Mandela',
  'Quality is not an act, it is a habit.'+
  '-Aristotle',
  'If you can dream it, you can do it.'+
  '-Walt Disney',
  'The secret of getting ahead is getting started.'+
  '-Mark Twain',
  'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.'+
  '-Thomas A. Edison',
  'Accept the challenges so that you can feel the exhilaration of victory.'+
  '-George S. Patton',
  'This one step – choosing a goal and sticking to it – changes everything.'+
  '-Scott Reed'
];

const randomize = Math.floor(Math.random()*15);
// console.log(quotes[randomize()]);

function Sticker() {
  return (
    <div>
      <img height={100} className='sticker' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0hCinHGYyY6xo2azGQVC2udeCPFWcvCSnDteoJ15ifC3qcNOu' alt='dog' />
      <p>{quotes[randomize]}</p>
      <img height={100} className='sticker' src='https://ih1.redbubble.net/image.12893531.1313/sticker,220x200-pad,220x200,ffffff.u1.jpg' />
      <p>{quotes[randomize]}</p>
      <img height={100} className='sticker' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRa1diPgUV58TD_nHuICVMAvpS3NWbQM-UamR_nTYSDETEjtErWGQ' />
      <p>{quotes[randomize]}</p>
    </div>
  )
}

export default Sticker




// <div className='row'>
//    <div className='col-md-4'>
//        <div className='thumbnail'>
//            <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0hCinHGYyY6xo2azGQVC2udeCPFWcvCSnDteoJ15ifC3qcNOu' alt='Lights' style='width:100%'>
//            <div className='caption'>
//              <p>Lorem ipsum...</p>
//            </div>
//        </div>
//     </div>
//        <div className='col-md-4'>
//          <div className='thumbnail'>
//              <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0hCinHGYyY6xo2azGQVC2udeCPFWcvCSnDteoJ15ifC3qcNOu' alt='Nature' style='width:100%'>
//              <div className='caption'>
//                <p>Lorem ipsum...</p>
//              </div>
//          </div>
//        </div>
//      <div className='col-md-4'>
//        <div className='thumbnail'>
//            <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0hCinHGYyY6xo2azGQVC2udeCPFWcvCSnDteoJ15ifC3qcNOu' style='width:100%'>
//            <div className='caption'>
//              <p>Lorem ipsum...</p>
//            </div>
//        </div>
//    </div>
// </div>
