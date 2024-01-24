
export const getComicById = (id) => {
  return comics.find((comic) => comic.id === parseInt(id));
};


export const comics = [
    {
      id: 0,
      title: 'BRACU Onnesha',
      coverimg: 'https://i.ibb.co/zVk88pM/5-min-1024x683.jpg',
      web: 'https://www.facebook.com/BRACONNESHA/',
    },
    {
      id: 1,
      title: 'BRACU Chondrobot',
      coverimg: 'https://i.ibb.co/s1QMfQY/333791459-1318907302025422-2506720706285446916-n.jpg',
      web: 'https://www.facebook.com/ChondroBot/',
    },
    {
      id: 2,
      title: 'Mongol Tori',
      coverimg: 'https://i.ibb.co/6R8w083/DSC03237.jpg',
      web: 'http://www.bracu-mongoltori.com/',
    },
    {
      id: 3,
      title: 'BRACU Duburi',
      coverimg: 'https://i.ibb.co/vHSSpnX/384277071-796371039163820-4390214270762896747-n.jpg',
      web: 'https://bracu-duburi.com/',
      
    },
    {
      id: 4,
      title: 'BRACU Ognibir',
      coverimg: 'https://i.ibb.co/B2q6bkY/358259181-1640517639776694-1115641415820396610-n.jpg',
      web: 'https://www.facebook.com/profile.php?id=100095654190483',
    }

  ]
  


