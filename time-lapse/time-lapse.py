from time import sleep
from git import Repo
import picamera
import os

PATH_OF_GIT_REPO = '/home/pi/projects/My-Website/.git'
COMMIT_MSG = 'Terrarium Image Upload'

class TimeLapse:
  def __init__(self):
    self.repo = Repo(PATH_OF_GIT_REPO)
    self.origin = self.repo.remote(name='origin')

  def takePicture(self):
    with picamera.PiCamera() as camera:
        camera.resolution = (1024, 768)
        camera.capture(
            '/home/pi/projects/My-Website/static/images/time-lapse/terrarium.jpeg',
            format='jpeg',
            quality=100,
        )

  def pull(self):
    try:
        self.origin.pull()
    except:
        print('Yikes.')

  def push(self):
    try:
        self.repo.git.add(A=True)
        self.repo.index.commit(COMMIT_MSG)
        self.origin.push()
    except:
        print('Yikes.')

  def run(self):
    self.pull()
    self.takePicture()
    self.push()

time_lapse = TimeLapse()
time_lapse.run()
