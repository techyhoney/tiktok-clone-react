import React, { useState } from 'react';
import Video from './components/Video';
import './css/App.css';

function App() {
  const [videos] = useState(
    [ 
          { "description" : "Big Buck Bunny Trailer",
            "sources" : [ "http://dl5.webmfiles.org/big-buck-bunny_trailer.webm" ],
           
          },
          { "description" : "Pair of Lionesses Walking Together",
            "sources" : [ "https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/190301_1_25_11_preview.webm" ],
            
          },
          { "description" : "Trailing Hand Through Grass at Dusk",
            "sources" : [ "https://cdn.videvo.net/videvo_files/video/free/2018-01/small_watermarked/171124_G1_013_preview.webm" ],
            
          },
          { "description" : "Tropical Fish Banner Fish on Coral Reef",
            "sources" : [ "https://cdn.videvo.net/videvo_files/video/free/2018-05/small_watermarked/bannerg004_preview.webm" ],
            
          }
    
    ]
  );

  return (
    <div className="app">
      <div class="app__videos">
        {videos.map(({ sources, description}) => (
          <Video
            url={sources}
            description={description}
           />
        )
        )}
      </div>
    </div>
  );
}

export default App;





 