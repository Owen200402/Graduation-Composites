from PIL import Image, ImageEnhance
import imageio

# Load the image
image_path = "assets/C.R.Taylor_1937.jpg"
image = Image.open(image_path)

# Create a list to store the frames
frames = []

# Generate frames by adjusting brightness to simulate animation
for i in range(10):
    enhancer = ImageEnhance.Brightness(image)
    frame = enhancer.enhance(1 + i * 0.1)  # Increase brightness for each frame
    frames.append(frame)

# Save the frames as a GIF
imageio.mimsave('animated_face.gif', frames, duration=0.1)
