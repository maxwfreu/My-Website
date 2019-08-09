from time import sleep
import picamera
import os

WAIT_TIME = 30 # In Seconds
GIT_ADD = 'git add . '
GIT_COMMIT = "git commit -m 'Terrarium Image Upload'"
GIT_PUSH = 'git push'

with picamera.PiCamera() as camera:
    camera.resolution = (1024, 768)
    camera.capture(
        '../static/images/time-lapse/terrarium.jpeg',
        format='jpeg',
        quality=100,
    )
    os.system(GIT_ADD)
    os.system(GIT_COMMIT)
    os.system(GIT_PUSH)
    #for filename in camera.capture_continuous('/home/pi/projects/time-lapse/img{timestamp:%H-%M-%S-%f}.jpg'):
     #   sleep(WAIT_TIME)
