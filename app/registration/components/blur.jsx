export function applyBlur() {
    var document = new Document;
    document.body.style.filter = "blur(5px)"; // Adjust the blur amount as needed
    document.body.style.pointerEvents = "none"; // Prevent interaction with blurred elements
  }