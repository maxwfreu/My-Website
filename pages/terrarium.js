import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import '../static/styles/index.scss';

export default class Terrarium extends React.Component {
  render() {
    return(
      <div className="terrarium-wrapper">
        <div className="terrarium">
          <h1> Project: Terrarium </h1>
          <p>
            I setup a small terrarium in my living room and connected it to a rasperry pi. It features a moss garden with a neat rock I found.
            <div className="break" />
            It houses to shade loving plants I found at lowes: Heuchera Americana and New Guinea impatiens.
          </p>
          <h3>Latest Image</h3> 
          <img src="/static/images/time-lapse/terrarium.jpeg" alt="terrarium"/>
          <h3> Monitoring the Terrarium</h3>
          <p>
            I setup a raspery pi with a Pi Camera 2 attached. I wrote a couple lines of code to take a picture of the terrarium every 12 hours, save the image within this repository, and then commit/push the image to github. 
          </p>
          <div className="code-wrapper">
            <div className="code">
              <code>
                from time import sleep<br/>
                from git import Repo<br/>
                import picamera<br/>
                import os<br/>
                <br/>
                PATH_OF_GIT_REPO = '/home/pi/projects/My-Website/.git'<br/>
                COMMIT_MSG = 'Terrarium Image Upload'<br/>
                <br/>
                def takePicture:<br/>
                &nbsp;&nbsp;with picamera.PiCamera() as camera:<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;camera.resolution = (1024, 768)<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;camera.capture(<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'../static/images/time-lapse/terrarium.jpeg',<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;format='jpeg',<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quality=100,<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;)<br/>
                <br/>
                def push():<br/>
                  &nbsp;&nbsp;try:<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;repo = Repo(PATH_OF_GIT_REPO)<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;repo.git.add(A=True)<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;repo.index.commit(COMMIT_MSG)<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;origin = repo.remote(name='origin')<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;origin.push()<br/>
                  &nbsp;&nbsp;except:<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;print('Yikes.')<br/>
                <br/>
                takePicture()<br/>
                push()<br/>
              </code>
            </div>
          </div>
          <p>
            Looking forward, I'll update this to send the image to an s3 bucket. I'm not a fan of cluttering the git history with 'Terrarium Upload' commits.
          </p>
          <h3>Building the Terrarium</h3>
          <p>
            Starting from the bottom there is a false bottom containing small rocks meant for an aquarium. On top of that is a filter I made out of some plastic sheet that I poked a bunch of holes into. Above that is layer of activated charcoal, and then the substrate layer
            <div className="break" />
            From what I can tell, this is the most typical Terrarium setup. The thought here is that the water will make its way through the substrate, be filtered by the activated substrate, and settle in the rocks below. The rocks allow the water to evaporate to the top and the cycle continuous. The rock bottom is critical as having water sitting in the substrate can quickly ruin a terrarium.
            <div className="break" />
            Next up, we have the plants. Lowes at a bunch of plants on sale and I went with two that I knew would do well in shade as I knew this terrarium wouldn't be getting a ton of sunlight. The plants are Heuchera Americana and New Guinea impatiens. I also put some moss in there to absorb some of the water and also because I just thought it looked nice. 
            <div className="break" />
            Finally, we have the clean up crew. These are the spring tails and the isopods - my favorite part of the build! These little dudes crawl around and eat up any of the bacteria forming and kill off any mold growth.
          </p>
        </div>
      </div>
    )
  }
}
