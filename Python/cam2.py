import cv2 

cap = cv2.VideoCapture(0)

while True :

    r ,f = cap.read()

    cv2.imshow("Photo",f)

    if cv2.waitKey(1) == ord('q'):
     break
cap.release()
cv2.destroyAllWindows()