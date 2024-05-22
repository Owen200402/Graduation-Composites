import dlib
import numpy as np
from PIL import Image, ImageDraw
import imageio
import cv2

# Initialize dlib's face detector and facial landmark predictor
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor('shape_predictor_68_face_landmarks.dat')  # Download from http://dlib.net/files/shape_predictor_68_face_landmarks.dat.bz2

def get_landmarks(image):
    gray = cv2.cvtColor(np.array(image), cv2.COLOR_BGR2GRAY)
    faces = detector(gray)
    if len(faces) == 0:
        return None
    landmarks = predictor(gray, faces[0])
    points = [(landmarks.part(n).x, landmarks.part(n).y) for n in range(68)]
    return points

def create_random_transform(points):
    noise = np.random.uniform(-5, 5, (68, 2))
    transformed_points = points + noise
    return transformed_points

def apply_transform(image, original_points, transformed_points):
    img = np.array(image)
    overlay = img.copy()
    alpha = 0.6

    for (start, end) in zip(original_points, transformed_points):
        start = tuple(map(int, start))  # Convert to integer and then to tuple
        end = tuple(map(int, end))  # Convert to integer and then to tuple
        cv2.line(overlay, start, end, (0, 0, 255), 2)

    cv2.addWeighted(overlay, alpha, img, 1 - alpha, 0, img)
    return Image.fromarray(img)


def animate_face(image_path, num_frames=10):
    image = Image.open(image_path)
    original_points = np.array(get_landmarks(image))
    if original_points is None:
        raise Exception("No face detected in the image")

    frames = []
    for _ in range(num_frames):
        transformed_points = create_random_transform(original_points)
        frame = apply_transform(image, original_points, transformed_points)
        frames.append(frame)

    frames[0].save('animated_face.gif', save_all=True, append_images=frames[1:], duration=100, loop=0)

if __name__ == "__main__":
    animate_face('./public/assets/Edward_Hay_1930.jpg')
