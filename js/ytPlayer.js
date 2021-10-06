const div = document.getElementById('ytPlayer');
const iframe = document.createElement('iframe');
const p = document.createElement('p');

p.innerText = '유튜브 재생목록 보여주기..였던 것';
iframe.allowFullscreen;
iframe.allow =
    'accelerometer; autoplay; encrypted-media; gyroscope';
iframe.width = 427;
iframe.height = 240;
iframe.src =
    'https://www.youtube.com/embed/_1Y1wC1RsY?list=PLC3gwD8GRIsyt_OU6fPpNpiTFjG_qMHly';
div.appendChild(p);
div.appendChild(iframe);

// 유튜브 재생목록 보여주기...였던 것
//https://www.youtube.com/embed/ZdSMYw-oju0?list=PLC3gwD8GRIsyt_OU6fPpNpiTFjG_qMHly
{
    /* <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/siNFnlqtd8M?list=PLUQKJP1sVuNMvxOYqmdyOkE8Ryd_AWbQT"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>; */
}
{
    /* <iframe
    width="2280"
    height="380"
    src="https://www.youtube.com/embed/ENcnYh79dUY?list=RDsiNFnlqtd8M"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>; */
}
