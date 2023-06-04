import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Content from '~/components/Content';

import video1 from '~/assets/video/video1.mp4';
import video2 from '~/assets/video/video2.mp4';
import video3 from '~/assets/video/video3.mp4';

const cx = classNames.bind(styles);

const LIST_VIEW = [
    {
        id: 1,
        last_name: 'pusheen',
        full_name: 'pusheen',
        nickname: 'pusheen',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a2d5c180525501da02423d9ed46d5da1~c5_100x100.jpeg?x-expires=1686045600&x-signature=sWwCMu4hYMP1rcC56wNeb8NBX%2BU%3D',
        tick: false,
        capyion: '',
        hastags: ['#Pusheen', '#pusheenthecat', '#toebeans🐾', '#fyp'],
        music: 'original sound - Pusheen',
        like: '6M',
        comment: '39.5K',
        share: '844.2k',
        src: video1,
    },
    {
        id: 2,
        last_name: 'funny_pets_36',
        full_name: 'Funny Pets',
        nickname: 'funny_pets_36',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b4206ab0d365062f661d335eb698516f~c5_100x100.jpeg?x-expires=1686045600&x-signature=k01JmCpx86N8z976iNsHmPOg%2BVc%3D',
        tick: false,
        capyion: 'Cho ăn ik ở đấy mà quay kao nữa , đói sắp ngất rồi này',
        hastags: [
            '#animals',
            '#pet',
            '#dog',
            '#fyp',
            '#foryou',
            '#xuhuong',
            '#thinhhanh',
        ],
        music: 'nhạc nền - chây chô sóp pe:) - Jay JoHuyn',
        like: 175,
        comment: 2,
        share: 5,
        src: video2,
    },
    {
        id: 3,
        last_name: 'funny_pets_36',
        full_name: 'Funny Pets',
        nickname: 'anythingfortoji',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/de3d42378f1147ef2bc4ccac98797adc~c5_100x100.jpeg?x-expires=1686045600&x-signature=OMj5FXrHFDmrOW%2F4sYqPR27xWaA%3D',
        tick: false,
        capyion: '🦋🦋🦋',
        hastags: ['#zootopia'],
        music: 'Not Around - Nova',
        like: '273.6K',
        comment: 4277,
        share: '16.4K',
        src: video3,
    },
];

function Home() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                {LIST_VIEW.map((list, i) => (
                    <Content data={list} key={i} />
                ))}
            </div>
        </div>
    );
}

export default Home;
