import cv2
import dlib
import numpy as np
from PIL import Image
import imageio

# Initialize dlib's face detector and facial landmark predictor
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor('shape_predictor_68_face_landmarks.dat')

def get_landmarks(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    faces = detector(gray)
    if len(faces) == 0:
        return None
    landmarks = predictor(gray, faces[0])
    return np.array([(landmarks.part(n).x, landmarks.part(n).y) for n in range(68)])

def apply_morphing(image, original_points, transformed_points):
    img = np.array(image)
    # Find the transformation matrix
    M, _ = cv2.findHomography(original_points, transformed_points)
    # Warp the image using the transformation matrix
    warped_image = cv2.warpPerspective(img, M, (img.shape[1], img.shape[0]))
    return Image.fromarray(warped_image)

def animate_face(image_path, num_frames=10):
    image = Image.open(image_path)
    img_array = np.array(image.convert('RGB'))
    original_points = get_landmarks(img_array)
    if original_points is None:
        raise Exception("No face detected in the image")

    frames = []
    for _ in range(num_frames):
        noise = np.random.uniform(-10, 10, (68, 2))  # Adjust noise level if needed
        transformed_points = original_points + noise
        frame = apply_morphing(image, original_points, transformed_points)
        frames.append(frame)

    frames[0].save('animated_face.gif', save_all=True, append_images=frames[1:], duration=100, loop=0)

if __name__ == "__main__":
    animate_face('./public/assets/Edward_Hay_1930.jpg')
