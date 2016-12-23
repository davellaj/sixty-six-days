import React from 'react'

const quotes = [
  'Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.'+
  "\n"+'-Thomas Jefferson',
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
// console.log(images[randomize]);

function Quotes() {
  return (
    <div className="quotes">
      <p className="quote">{quotes[randomize]}</p>
    </div>
  )
}

export default Quotes
