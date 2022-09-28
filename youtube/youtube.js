// const url='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=ironman&key=[YOUR_API_KEY]'

const apikey= 'AIzaSyB24mHEmUcoBpIvovSU9Tlpo-NdwrjYZjI';

let search= async () => {
    try {
        let q=document.getElementById('qry').value ;

    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&key=${apikey}`
    let res =await fetch(url);

    let data= await res.json();
    append(data.items)

    // console.log(data)
 
    } catch (err){
        console.log(err)
    }

}

let append= (data)=> {

    let box=document.getElementById('result')
    box.innerHTML=null;


    data.forEach(({id: {videoId}, snippet:{title,thumbnails} }) => {
        let card=document.createElement('div')
        // let img= document.createElement('img')
        // img.src=thumbnails.default.url
        let iframe=document.createElement('iframe')
        iframe.src=`https://www.youtube.com/embed/${videoId}`;
        iframe.allow='fullscreen'
        let h3=document.createElement('h3');
        h3.innerText=title;
        
        card.append(iframe,h3);

        let vid={
            title,
            videoId
        }

        card.onclick=()=>{
            playvideo(vid);
        }
        box.append(card)

        
    });


};

let playvideo = (video)=>{
    
    
    localStorage.setItem('video', JSON.stringify(video))
    window.location.href='video.html'
    // console.log(video)
}

