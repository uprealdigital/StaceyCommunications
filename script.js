document.addEventListener("DOMContentLoaded", function() {
	
  const sceneEl = document.querySelector('a-scene');
  

  
	const page1_entity = document.querySelector('#page1_entity');
  const page2_entity = document.querySelector('#page2_entity');
  const page3_entity = document.querySelector('#page3_entity');
  const page4_entity = document.querySelector('#page4_entity');
  const page5_entity = document.querySelector('#page5_entity');
  const page6_entity = document.querySelector('#page6_entity');

  const page1_touchtoplay = document.querySelector('#page1_touchtoplay');

	//const examplePlane = document.querySelector('#example-plane');
  
	// arReady event triggered when ready
	sceneEl.addEventListener("arReady", (event) => {
	  console.log("AR is ready")
	});
  
	// arError event triggered when something went wrong. Mostly browser compatbility issue
	sceneEl.addEventListener("arError", (event) => {
	  console.log("AR failed to start")
	});
  

  window.addEventListener('click', function () { 
    document.querySelector('#page1_Video').get(0).currentTime = 0;
    document.querySelector('#page1_Video').play();
  });

  	//let arSystem;
	sceneEl.addEventListener('loaded', function () {
	  //arSystem = sceneEl.systems["mindar-image-system"];    
    
    /*
    videoEl.setAttribute('a-video', {
      width: '1',
      height: '0.6666666',
    });
    */
    //<a-video src="#page1_Video" width="1" height="0.6666666" position="0 0 0"></a-video>

    var videoEl = null;

    // detect click event
    page1_touchtoplay.addEventListener("click", event => {
      console.log("Touched page1_Video");

      // video
      if (videoEl === null) {
        console.log("Creating video 1");
        videoEl = document.createElement('a-video'); 
        videoEl.setAttribute('id', 'videoElement');
        videoEl.setAttribute('src', '#page1_Video');
        videoEl.setAttribute('width', '1');
        videoEl.setAttribute('height', '0.6666666');
        videoEl.setAttribute('position', '0 0 0');  
        videoEl.setAttribute('play', 'true');  
        page1_entity.appendChild(videoEl);
      }
      //videoEl.play();
      document.querySelector('#page1_Video').get(0).currentTime = 0;
      document.querySelector('#page1_Video').get(0).play();
      console.log("Playing video 1");
    });    

    // page 1
    page1_entity.addEventListener("targetFound", event => {
      console.log('Found Target 1');      
    });
    page1_entity.addEventListener("targetLost", event => {
      console.log('Lost Target 1');
      if (videoEl !== null) {
        page1_entity.removeChild(videoEl);
        videoEl = null;
      }
    });

    // page 2
    page2_entity.addEventListener("targetFound", event => {
      console.log('Found Target 2');
      videoEl.setAttribute('src', '#page2_Video');
      page2_entity.appendChild(videoEl);
    });
    page2_entity.addEventListener("targetLost", event => {
      console.log('Lost Target 2');
      page2_entity.removeChild(videoEl);
    });

    // page 3
    page3_entity.addEventListener("targetFound", event => {
      console.log('Found Target 3');
      videoEl.setAttribute('src', '#page3_Video');
      page3_entity.appendChild(videoEl);
    });
    page3_entity.addEventListener("targetLost", event => {
      console.log('Lost Target 3');
      page3_entity.removeChild(videoEl);
    });

    // page 4
    page4_entity.addEventListener("targetFound", event => {
      console.log('Found Target 4');
      videoEl.setAttribute('src', '#page4_Video');
      page4_entity.appendChild(videoEl);
    });
    page4_entity.addEventListener("targetLost", event => {
      console.log('Lost Target 4');
      page4_entity.removeChild(videoEl);
    });

    // page 5
    page5_entity.addEventListener("targetFound", event => {
      console.log('Found Target 5');
      videoEl.setAttribute('src', '#page5_Video');
      page5_entity.appendChild(videoEl);
    });
    page5_entity.addEventListener("targetLost", event => {
      console.log('Lost Target 5');
      page5_entity.removeChild(videoEl);
    });

    // page 6
    page6_entity.addEventListener("targetFound", event => {
      console.log('Found Target 6');
      videoEl.setAttribute('src', '#page6_Video');
      page6_entity.appendChild(videoEl);
    });
    page6_entity.addEventListener("targetLost", event => {
      console.log('Lost Target 6');
      page6_entity.removeChild(videoEl);
    });


    // detect click event
    //examplePlane.addEventListener("click", event => {
    //  console.log("plane click");
    //});
    
	});
  
  
  
  
});