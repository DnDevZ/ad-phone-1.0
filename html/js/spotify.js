const _0x3814ac=_0x32fa;(function(_0xaa6a5a,_0xcc741c){const _0x39fb8a=_0x32fa,_0x32c584=_0xaa6a5a();while(!![]){try{const _0x1cbab4=parseInt(_0x39fb8a(0xc9))/0x1+parseInt(_0x39fb8a(0xfd))/0x2+parseInt(_0x39fb8a(0xdb))/0x3*(parseInt(_0x39fb8a(0xbf))/0x4)+parseInt(_0x39fb8a(0x11b))/0x5*(-parseInt(_0x39fb8a(0xf1))/0x6)+-parseInt(_0x39fb8a(0xdd))/0x7+parseInt(_0x39fb8a(0xd8))/0x8+-parseInt(_0x39fb8a(0xf8))/0x9;if(_0x1cbab4===_0xcc741c)break;else _0x32c584['push'](_0x32c584['shift']());}catch(_0x3a7c40){_0x32c584['push'](_0x32c584['shift']());}}}(_0x1d0c,0x8cb7d));const musicInfo=[],musicPlaylist=document[_0x3814ac(0x110)](_0x3814ac(0x10f)),musicPlayer=document['querySelector']('.music-player'),playlistOpenBtn=document[_0x3814ac(0x110)](_0x3814ac(0xde)),playlistCloseBtn=document[_0x3814ac(0x110)](_0x3814ac(0x105)),playlistHomeBtn=document[_0x3814ac(0x110)]('.playlist-menu-btn'),playlist=document[_0x3814ac(0x110)](_0x3814ac(0x104)),openPlaylist=()=>{const _0x4581b8=_0x3814ac;musicPlayer[_0x4581b8(0x113)][_0x4581b8(0xbb)]('open'),musicPlaylist[_0x4581b8(0x113)][_0x4581b8(0xbb)](_0x4581b8(0xf7));},closePlaylist=()=>{const _0x220363=_0x3814ac;musicPlayer['classList'][_0x220363(0xf2)](_0x220363(0xf7)),musicPlaylist['classList'][_0x220363(0xf2)](_0x220363(0xf7));},backHome=()=>{const _0xee138e=_0x3814ac;$(_0xee138e(0x115))['animate']({'left':-0x23+'vh'},0xc8,function(){const _0x381872=_0xee138e;$(_0x381872(0x115))[_0x381872(0x101)]({'display':_0x381872(0x109)});});};playlistOpenBtn[_0x3814ac(0x10e)]=()=>{openPlaylist();},playlistCloseBtn[_0x3814ac(0x10e)]=()=>{closePlaylist();},playlistHomeBtn[_0x3814ac(0x10e)]=()=>{backHome();};let manager1=new Hammer[(_0x3814ac(0x116))](musicPlayer),Swipe1=new Hammer[(_0x3814ac(0xca))](),audioVolume=0x1;manager1[_0x3814ac(0xbb)](Swipe1),manager1['on']('swipe',function(_0x2ff94e){let _0x45c532=_0x2ff94e['offsetDirection'];_0x45c532==0x10&&openPlaylist(),_0x45c532==0x8&&closePlaylist();});const playerCenter=document[_0x3814ac(0x110)]('.player-center');let manager=new Hammer[(_0x3814ac(0x116))](playerCenter),Swipe=new Hammer[(_0x3814ac(0xca))]();manager[_0x3814ac(0xbb)](Swipe),manager['on'](_0x3814ac(0xcb),function(_0x234115){const _0x2287a0=_0x3814ac;let _0x3fed96=_0x234115[_0x2287a0(0xbe)];if(_0x3fed96==0x4)musicIndex=musicIndex-0x1,currentMusic(musicIndex),playMusic();else _0x3fed96==0x2&&(musicIndex=musicIndex+0x1,currentMusic(musicIndex),playMusic());});function musicInfoAdd(_0x5f0a4c){const _0x212d9c=_0x3814ac;$(_0x212d9c(0x104))[_0x212d9c(0xe6)](''),musicInfo['forEach']((_0x4d7330,_0x1e039f)=>{const _0x5ecf4b=_0x212d9c;let _0x57592f=document[_0x5ecf4b(0xd7)](_0x5ecf4b(0x10d));_0x57592f[_0x5ecf4b(0x113)][_0x5ecf4b(0xbb)](_0x5ecf4b(0xb8));let _0x11d292=document[_0x5ecf4b(0xd7)](_0x5ecf4b(0x10d));_0x11d292[_0x5ecf4b(0x113)][_0x5ecf4b(0xbb)](_0x5ecf4b(0xc1)),_0x57592f[_0x5ecf4b(0xbc)](_0x11d292);let _0x58604f=document[_0x5ecf4b(0xd7)]('img');_0x58604f[_0x5ecf4b(0xc7)]=_0x4d7330[_0x5ecf4b(0xcf)],_0x11d292['appendChild'](_0x58604f);let _0x4f8baf=document[_0x5ecf4b(0xd7)](_0x5ecf4b(0x10d));_0x4f8baf[_0x5ecf4b(0x113)][_0x5ecf4b(0xbb)](_0x5ecf4b(0xfb)),_0x57592f[_0x5ecf4b(0xbc)](_0x4f8baf);let _0x1ffea2=document[_0x5ecf4b(0xd7)]('p');_0x1ffea2[_0x5ecf4b(0x113)][_0x5ecf4b(0xbb)](_0x5ecf4b(0xd6)),_0x1ffea2[_0x5ecf4b(0xea)]=_0x4d7330[_0x5ecf4b(0xd2)],_0x4f8baf[_0x5ecf4b(0xbc)](_0x1ffea2);let _0x821b67=document['createElement']('p');_0x821b67[_0x5ecf4b(0x113)][_0x5ecf4b(0xbb)](_0x5ecf4b(0xcc)),_0x821b67['innerText']=_0x4d7330[_0x5ecf4b(0xc8)],_0x4f8baf[_0x5ecf4b(0xbc)](_0x821b67),playlist[_0x5ecf4b(0xbc)](_0x57592f);});const _0x3bad3a=document[_0x212d9c(0xec)](_0x212d9c(0x117));_0x3bad3a[_0x212d9c(0xdf)]((_0xba900,_0x2a54de)=>{const _0x5d3b0e=_0x212d9c;_0xba900[_0x5d3b0e(0x10e)]=()=>{currentMusic(_0x2a54de),closePlaylist(),playMusic();};});}const posterContainer=document['querySelector'](_0x3814ac(0x10a));function musicInfoPoster(_0x1f1620){const _0x658b8=_0x3814ac;musicInfo[_0x658b8(0xdf)]((_0x26f886,_0x577dca)=>{const _0x5ca005=_0x658b8;let _0x50357f=document['createElement'](_0x5ca005(0xc5));_0x50357f['classList'][_0x5ca005(0xbb)](_0x5ca005(0x107)),_0x50357f['src']=_0x26f886[_0x5ca005(0xcf)],_0x50357f[_0x5ca005(0xd3)]=_0x26f886[_0x5ca005(0xd2)],posterContainer[_0x5ca005(0xbc)](_0x50357f);});}function _0x1d0c(){const _0x20381d=['playlist-item-poster','.loop-btn','.shuffle-btn','floor','img','NaN:0NaN','src','artistName','697991XnLENE','Swipe','swipe','playlist-artist-name','keyCode','genre','musicPoster','stream','width','musicName','alt','keydown','/tracks/','playlist-item-name','createElement','4246352mLQkjp','.play-btn','style','49038kAmWCi','pop','7730415Yrcvar','.playlist-open-btn','forEach','.music-name','.music-duration-time','click','protocols','.music-timebar','push','html','get','title','active','innerText','.back-btn','querySelectorAll','then','.spotify-app','user','.bg','6ETwleH','remove','replace','block','setVolume','currentTime','open','2355858WNpVid','left','.box-item','playlist-item-info','seek','1269082JqggPE',':visible','0:00','duration','css','.music-current-length','fa-play-circle','.playlist','.playlist-close-btn','options','poster','.music-current-length-circle','none','.poster-container','addEventListener','rtmp','div','onclick','.music-playlist','querySelector','avatar_url','val','classList','.audio','.spotify-player','Manager','.playlist-item','animate','.search\x20input','splice','4507990iSRmPQ','artwork_url','.music-current-time','/tracks','playlist-item','attr','fa-pause-circle','add','appendChild','musicSrc','offsetDirection','240wrIQkr','length'];_0x1d0c=function(){return _0x20381d;};return _0x1d0c();}const audio=document[_0x3814ac(0x110)](_0x3814ac(0x114)),bg=document[_0x3814ac(0x110)](_0x3814ac(0xf0));let musicName=document[_0x3814ac(0x110)](_0x3814ac(0xe0)),artistName=document[_0x3814ac(0x110)]('.artist-name'),musicIndex=0x0;const currentMusic=_0x2fda16=>{const _0x17d8c2=_0x3814ac;let _0x12c2df=_0x2fda16%musicInfo[_0x17d8c2(0xc0)];SC[_0x17d8c2(0xd0)](_0x17d8c2(0xd5)+musicInfo[_0x12c2df][_0x17d8c2(0xbd)])[_0x17d8c2(0xed)](function(_0x1e310f){const _0xc7568c=_0x17d8c2;bg[_0xc7568c(0xc7)]=musicInfo[_0x12c2df]['musicPoster'],posterContainer[_0xc7568c(0xda)][_0xc7568c(0xf9)]=-(_0x2fda16*0x64)+'%',musicName[_0xc7568c(0xea)]=musicInfo[_0x12c2df][_0xc7568c(0xd2)],artistName[_0xc7568c(0xea)]=musicInfo[_0x12c2df][_0xc7568c(0xc8)],_0x1e310f['options'][_0xc7568c(0xe3)][0x0]===_0xc7568c(0x10c)&&_0x1e310f[_0xc7568c(0x106)][_0xc7568c(0xe3)][_0xc7568c(0x11a)](0x0,0x1),scPlayer=_0x1e310f;});},prevBtn=document[_0x3814ac(0x110)](_0x3814ac(0xeb)),playBtn=document[_0x3814ac(0x110)](_0x3814ac(0xd9)),nextBtn=document[_0x3814ac(0x110)]('.forward-btn'),loopBtn=document[_0x3814ac(0x110)](_0x3814ac(0xc2)),shuffleBtn=document[_0x3814ac(0x110)](_0x3814ac(0xc3));let isPlaying=![],isShuffle=![],isLoop=![];playBtn[_0x3814ac(0x10e)]=()=>{startMusic();};const startMusic=()=>{isPlaying?pauseMusic():playMusic();};loopBtn[_0x3814ac(0x10e)]=()=>{const _0x4aa4b4=_0x3814ac;isLoop=!isLoop,isLoop==!![]?loopBtn[_0x4aa4b4(0x113)][_0x4aa4b4(0xbb)](_0x4aa4b4(0xe9)):loopBtn[_0x4aa4b4(0x113)][_0x4aa4b4(0xf2)](_0x4aa4b4(0xe9));},shuffleBtn[_0x3814ac(0x10e)]=()=>{const _0x44f66b=_0x3814ac;isShuffle=!isShuffle,isShuffle==!![]?shuffleBtn['classList']['add'](_0x44f66b(0xe9)):shuffleBtn['classList'][_0x44f66b(0xf2)](_0x44f66b(0xe9));},nextBtn[_0x3814ac(0x10e)]=()=>{nextMusic();};const nextMusic=()=>{musicIndex=musicIndex+0x1,currentMusic(musicIndex),playMusic();};prevBtn[_0x3814ac(0x10e)]=()=>{prevMusic();};const prevMusic=()=>{musicIndex=musicIndex-0x1,currentMusic(musicIndex),playMusic();},playMusic=()=>{const _0x49c442=_0x3814ac;isPlaying=!![],scPlayer['play'](),playBtn[_0x49c442(0x113)]['replace']('fa-play-circle',_0x49c442(0xba)),scPlayer['on']('time',function(){updateDragger();}),audioVolume=scPlayer['getVolume']();},searchMusics=()=>{const _0x2ef13f=_0x3814ac;while(musicInfo['length']>0x0){musicInfo[_0x2ef13f(0xdc)]();}var _0x1904c6=$(_0x2ef13f(0x119))[_0x2ef13f(0x112)]();_0x1904c6['length']>0x0&&(SC['get'](_0x2ef13f(0xb7),{'q':_0x1904c6,'limit':0x64})[_0x2ef13f(0xed)](function(_0x3c7ef9){const _0x22c071=_0x2ef13f;for(var _0xfda6e8=0x0;_0xfda6e8<_0x3c7ef9[_0x22c071(0xc0)];_0xfda6e8++){var _0x3c4a5b='';_0x3c7ef9[_0xfda6e8]['artwork_url']?_0x3c4a5b=_0x3c7ef9[_0xfda6e8][_0x22c071(0x11c)]:_0x3c4a5b=_0x3c7ef9[_0xfda6e8][_0x22c071(0xef)][_0x22c071(0x111)];var _0x2dae56={'musicName':_0x3c7ef9[_0xfda6e8][_0x22c071(0xe8)],'artistName':_0x3c7ef9[_0xfda6e8][_0x22c071(0xce)],'musicSrc':_0x3c7ef9[_0xfda6e8]['id'],'musicPoster':_0x3c4a5b,'liked':![]};musicInfo['push'](_0x2dae56);}musicInfoAdd(),musicInfoPoster(),currentMusic(0x0),openPlaylist(),$(_0x22c071(0x115))[_0x22c071(0x101)]({'display':_0x22c071(0xf4)}),$(_0x22c071(0x115))[_0x22c071(0x118)]({'left':0x0+'vh'},0xc8);}),$('.search\x20input')[_0x2ef13f(0x112)](''));};$(document)['on'](_0x3814ac(0xe2),_0x3814ac(0xfa),function(_0x38942d){const _0x1b7c9a=_0x3814ac;var _0x3d2ba2=$(this)[_0x1b7c9a(0xb9)]('data-gender');searchGender(_0x3d2ba2);});function searchGender(_0x3facb2){const _0x422aa5=_0x3814ac;while(musicInfo[_0x422aa5(0xc0)]>0x0){musicInfo[_0x422aa5(0x11a)](0x0,musicInfo[_0x422aa5(0xc0)]);}_0x3facb2[_0x422aa5(0xc0)]>0x0&&(SC[_0x422aa5(0xe7)]('/tracks',{'q':_0x3facb2,'limit':0x64})['then'](function(_0x3c8e65){const _0x5d88ab=_0x422aa5;for(var _0x4b1d7b=0x0;_0x4b1d7b<_0x3c8e65[_0x5d88ab(0xc0)];_0x4b1d7b++){var _0x2babe2='';_0x3c8e65[_0x4b1d7b]['artwork_url']?_0x2babe2=_0x3c8e65[_0x4b1d7b]['artwork_url']:_0x2babe2=_0x3c8e65[_0x4b1d7b]['user'][_0x5d88ab(0x111)];var _0xea088a={'musicName':_0x3c8e65[_0x4b1d7b][_0x5d88ab(0xe8)],'artistName':_0x3c8e65[_0x4b1d7b][_0x5d88ab(0xce)],'musicSrc':_0x3c8e65[_0x4b1d7b]['id'],'musicPoster':_0x2babe2,'liked':![]};musicInfo[_0x5d88ab(0xe5)](_0xea088a);}musicInfoAdd(),musicInfoPoster(),currentMusic(0x0),openPlaylist(),$('.spotify-player')[_0x5d88ab(0x101)]({'display':_0x5d88ab(0xf4)}),$(_0x5d88ab(0x115))['animate']({'left':0x0+'vh'},0xc8);}),$(_0x422aa5(0x119))[_0x422aa5(0x112)](''));}function pauseMusic(){const _0x513c47=_0x3814ac;isPlaying=![],scPlayer['pause'](),playBtn[_0x513c47(0x113)][_0x513c47(0xf3)](_0x513c47(0xba),_0x513c47(0x103));}function _0x32fa(_0x2a089b,_0x492f0d){const _0x1d0ca0=_0x1d0c();return _0x32fa=function(_0x32fa72,_0x2a3eae){_0x32fa72=_0x32fa72-0xb7;let _0xc4a17d=_0x1d0ca0[_0x32fa72];return _0xc4a17d;},_0x32fa(_0x2a089b,_0x492f0d);}const current=document[_0x3814ac(0x110)](_0x3814ac(0x11d)),duration=document[_0x3814ac(0x110)](_0x3814ac(0xe1));duration[_0x3814ac(0xea)]==_0x3814ac(0xc6)&&(duration[_0x3814ac(0xea)]=_0x3814ac(0xff));function updateDragger(){const _0x3a51c5=_0x3814ac;var _0x280fb5=scPlayer[_0x3a51c5(0xf6)]()/scPlayer[_0x3a51c5(0x106)][_0x3a51c5(0x100)];let _0x1a05f2=scPlayer[_0x3a51c5(0xf6)]()/0x3e8,_0x331904=Math['floor'](_0x1a05f2%0x3c),_0x15bc0e=Math[_0x3a51c5(0xc4)](_0x1a05f2/0x3c);if(_0x331904<0xa)current[_0x3a51c5(0xea)]=_0x15bc0e+':0'+_0x331904;else _0x15bc0e>=0x0&&_0x331904>=0x0?current[_0x3a51c5(0xea)]=_0x15bc0e+':'+_0x331904:current['innerText']=_0x15bc0e+':0'+_0x331904;_0x1a05f2=scPlayer[_0x3a51c5(0x106)][_0x3a51c5(0x100)]/0x3e8,_0x331904=Math[_0x3a51c5(0xc4)](_0x1a05f2%0x3c),_0x15bc0e=Math['floor'](_0x1a05f2/0x3c);if(_0x331904<0xa)duration[_0x3a51c5(0xea)]=_0x15bc0e+':0'+_0x331904;else _0x15bc0e>=0x0&&_0x331904>=0x0?duration[_0x3a51c5(0xea)]=_0x15bc0e+':'+_0x331904:duration[_0x3a51c5(0xea)]=_0x3a51c5(0xff);const _0x44d49d=document[_0x3a51c5(0x110)](_0x3a51c5(0x108)),_0x42b524=document[_0x3a51c5(0x110)](_0x3a51c5(0x102));_0x42b524['style'][_0x3a51c5(0xd1)]=_0x280fb5*0x64+'%',_0x44d49d[_0x3a51c5(0xda)][_0x3a51c5(0xf9)]=_0x280fb5*0x64+'%';}const musicTimebar=document[_0x3814ac(0x110)](_0x3814ac(0xe4));window[_0x3814ac(0x10b)](_0x3814ac(0xd4),_0x2a7bca=>{const _0x115b1b=_0x3814ac;var _0x23a99f=$(_0x115b1b(0xee))['is'](_0x115b1b(0xfe));if(_0x23a99f){let _0x1396ee=_0x2a7bca[_0x115b1b(0xcd)];_0x1396ee==0x20&&startMusic();if(_0x1396ee==0x25){var _0x107890=scPlayer[_0x115b1b(0xf6)]()-0x1388;scPlayer[_0x115b1b(0xfc)](_0x107890);}if(_0x1396ee==0x27){var _0x107890=scPlayer[_0x115b1b(0xf6)]()+0x1388;scPlayer['seek'](_0x107890);}_0x1396ee==0x26&&(audioVolume<0x1&&(audioVolume=audioVolume+0.1),scPlayer[_0x115b1b(0xf5)](audioVolume)),_0x1396ee==0x28&&(audioVolume>0x0&&(audioVolume=audioVolume-0.1),scPlayer['setVolume'](audioVolume)),_0x1396ee==0xd&&searchMusics();}});