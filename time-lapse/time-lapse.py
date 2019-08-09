from time import sleep
import picamera


WAIT_TIME = 30 # In Seconds

with picamera.PiCamera() as camera:
    camera.resolution = (1024, 768)
    camera.capture(
        '../static/images/time-lapse/img{timestamp:%H-%M-%S-%f}.jpeg',
        format='jpeg',
        quality=100,
    )
    #for filename in camera.capture_continuous('/home/pi/projects/time-lapse/img{timestamp:%H-%M-%S-%f}.jpg'):
     #   sleep(WAIT_TIME)
