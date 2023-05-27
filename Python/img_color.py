import cv2
import numpy as np

lr= {'red':(246, 15, 15),'green':(201,230,200),'blue':(97,100,117),'yellow':(23,59,119),'orange':(255,243,224),'pink':(248, 187, 208),'skin':(255,195,170)}

ur={'red':(183, 28, 28 ),'green':(32,94,27),'blue':(117,255,255),'yellow':(54,255,255),'orange':(230, 81, 0),'pink':(136, 14, 79),'skin':(45,34,30)}

color_names={'red':(0,0,255 ),'green':(32,94,27),'blue':(255,0,0),'yellow':(0,255,217),'orange':(239, 108, 0 ),'pink':(236, 64, 122),'skin':(255,206,180)}

img = cv2.imread('123.png')

# Hue Saturation Value  
hsv = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)

for color_name , (lr,ur) in zip(color_names.keys(),zip(lr.values(),ur.values())):
    mask = cv2.inRange(hsv,np.array(lr),np.array(ur))
    kernel = np.ones((5,5),np.uint8)
    opening= cv2.morphologyEx(mask,cv2.MORPH_OPEN,kernel)

    c , hierarchy=cv2.findContours(
        opening,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)
    
    for cnt in c :
        area = cv2.contourArea(cnt)
        if area > 1000:
            x,y,a,b = cv2.boundingRect(cnt)
            cv2.rectangle(img,(x,y),(x+a , y+b),color_names[color_name],2)
            cv2.putText(img , color_name , (x,y+20),
                        cv2.FONT_HERSHEY_SIMPLEX , 0.75, color_names[color_name],2)
            
cv2.imshow("Image",img)
cv2.waitKey(0)
cv2.destroyAllWindows()
            
            


    