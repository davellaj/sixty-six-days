import React from 'react'

const images = [
  'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0hCinHGYyY6xo2azGQVC2udeCPFWcvCSnDteoJ15ifC3qcNOu',
  // 'https://ih1.redbubble.net/image.12893531.1313/sticker,220x200-pad,220x200,ffffff.u1.jpg',
  // 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRa1diPgUV58TD_nHuICVMAvpS3NWbQM-UamR_nTYSDETEjtErWGQ',
  'https://www.homecirclemedia.com/image/cache/data/Fairy_Tail_Happy_Sticker-500x500.jpg',
  'http://www.sticker-forever.com/image/en/don-t-worry-be-happy-sticker.jpg',
  'http://cdn3.volusion.com/sbcpn.tjpek/v/vspfiles/photos/MARK003A-2.jpg?1314150398',
  'https://ih0.redbubble.net/image.178351858.7426/sticker,375x360.u3.png',
  'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=0ahUKEwii_eGL3YjRAhUp64MKHfy9CGUQjRwIBw&url=http%3A%2F%2Fwww.zazzle.com%2Fgreat%2Bjob%2Bstickers&psig=AFQjCNHBi5m3UAVKpPzUB31XalJpr4whow&ust=1482527939456027',
  'https://pbs.twimg.com/profile_images/2240844153/001.png',
  'http://rlv.zcache.com/turtley_totally_awesome_classic_round_sticker-r69fb57977e254c67a58ef11d0989b407_v9waf_8byvr_324.jpg',
  'http://rlv.zcache.com/awesome_sauce_square_sticker-r4c90745dc2ab43eab48fe169744e92ba_v9wf3_8byvr_324.jpg',
  'https://ih0.redbubble.net/image.26116675.2219/sticker,375x360.u2.png',
  'http://www.bankokuponlar.org/Assets/Images/bazinga.png',
  'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=0ahUKEwjuibbz3YjRAhVD4IMKHY5VCSQQjRwIBw&url=http%3A%2F%2Fgogodragons.co.uk%2F&psig=AFQjCNElr16xTnDdE6sd8_BcIs4Zs_vUdA&ust=1482528154609029',
  'https://ih0.redbubble.net/image.192105858.1609/sticker,220x200-pad,220x200,ffffff.u1.jpg',
  'http://rlv.zcache.com/sticker_vintage_rosie_the_riveter_done_it_or-rf9bbb140a200471ca4bf7f8c8e050b73_v9waf_8byvr_630.jpg?view_padding=%5B285%2C0%2C285%2C0%5D',
  'http://rlv.zcache.com/jwd_job_well_done_wash_design_classic_round_sticker-rb98e008578474834bf419553bac305bf_v9waf_8byvr_324.jpg'

]

const feedback = [
    'Way to go!',
    'Keep up the good work!',
    'That\'s the way to do it!'
]

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
// console.log(images[randomize]);

function Sticker() {
  return (
    <div className="sticker-container">
      <img height={120} className='sticker' src={images[4]} />
      <p className="quote">{feedback[0]}</p>
      <img height={120} className='sticker' src={images[1]} />
      <p className="quote">{feedback[1]}</p>
      <img height={120} className='sticker' src={images[3]} />
      <p className="quote">{feedback[2]}</p>
    </div>
  )
}

export default Sticker

//eventually make this pull from users the array of images and
// quotes that user has earned. This will mapStateToProps and pull
// from the user collection


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
