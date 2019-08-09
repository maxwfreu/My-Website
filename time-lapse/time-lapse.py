from time import sleep
from git import Repo
import picamera
import os

WAIT_TIME = 30 # In Seconds
GIT_ADD = 'git add . '
GIT_COMMIT = "git commit -m 'Terrarium Image Upload'"
GIT_PUSH = 'git push'
PATH_OF_GIT_REPO = '/home/pi/projects/My-Website/.git'
COMMIT_MSG = 'Terrarium Image Upload'

with picamera.PiCamera() as camera:
    camera.resolution = (1024, 768)
    camera.capture(
        '../static/images/time-lapse/terrarium.jpeg',
        format='jpeg',
        quality=100,
    )
    try:
        repo = Repo(PATH_OF_GIT_REPO)
        repo.git.add(update=True)
        repo.index.commit(COMMIT_MSG)
        origin = repo.remote(name='origin')
        origin.push()
    except:
        print('Big yikes. I bet future you wishes this was a helpful error message. Too bad.')
    #for filename in camera.capture_continuous('/home/pi/projects/time-lapse/img{timestamp:%H-%M-%S-%f}.jpg'):
     #   sleep(WAIT_TIME)
