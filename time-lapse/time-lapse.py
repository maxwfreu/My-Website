from time import sleep
from git import Repo
import picamera
import os

PATH_OF_GIT_REPO = '/home/pi/projects/My-Website/.git'
COMMIT_MSG = 'Terrarium Image Upload'

def takePicture():
  with picamera.PiCamera() as camera:
      camera.resolution = (1024, 768)
      camera.capture(
          '../static/images/time-lapse/terrarium.jpeg',
          format='jpeg',
          quality=100,
      )

def push():
  try:
      repo = Repo(PATH_OF_GIT_REPO)
      repo.git.add(A=True)
      repo.index.commit(COMMIT_MSG)
      origin = repo.remote(name='origin')
      origin.push()
  except:
      print('Yikes.')

takePicture()
push()
