Website link: https://jinheeyi.github.io/workshop_1/

## Introduction

- I successfully completed Workshop 0 and was inspired to create another animation using similar techniques for the workshop 1. For my next project, I decided to develop an abstract animation, focusing primarily on changing its colors dynamically. I referred to the p5.js tutorial on variables and change (https://p5js.org/tutorials/variables-and-change/) and explored various online resources for creating abstract animations. There were numerous exemplars and projects related to popping colourful animations, many of which were highly engaging and provided valuable inspiration.
- There was an reference on google doodles called https://www.google.com/logos/doodles/2017/fischinger/fischinger17.9.html?hl=en 'Fischinger' when I was in my college days and remembered if I could make a similar version to this but quite different. I was quite obsessed on the shapes, but even more, the colours. They were light colours, and beautiful at the same time, too.  
![Screenshot 2025-01-16 164842](https://github.com/user-attachments/assets/21a01a77-4ee1-44fd-a4fa-cc907f1ffecf)
![Screenshot 2025-01-16 164857](https://github.com/user-attachments/assets/b8923388-b9ce-4994-b9b9-c158b87c5ba5)
https://cratecode.com/info/creative-coding-tools-and-platforms
(these are the links to the research on the instructions on assembling abstract shapes
- https://www.youtube.com/watch?v=9gXN1UYlOFU
- https://northcoders.com/company/blog/esoteric-programming-languages-program-code-in-the-form-of-abstract-art/ an exemplar on the construct abstract shape.

## Notes(working progress)
- I began to research from the p5js references, google and youtube, on how abstract shapes were made through coding, and they weren't what i expected. There were many unusual codings that were never mentioned, but I tried to look into pj5s to see if there's any codes referred. 
![Screenshot 2025-01-21 132041](https://github.com/user-attachments/assets/5ee0ed73-aace-439b-8712-41cc96b68d31)
![Screenshot 2025-01-21 132333](https://github.com/user-attachments/assets/c8272035-93fe-4c4d-bc29-2dbed688d6cd)
**(this is one of the examples of making the abstract shapes, but somehow this one is colourful, with different shapes added and scribbles.)**
**p5js references**
![Screenshot 2025-01-21 132843](https://github.com/user-attachments/assets/ed18f992-c038-4a5f-9698-0105004d13d0)
![Screenshot 2025-01-21 133334](https://github.com/user-attachments/assets/338a6688-818e-493a-81f3-f59dde32d432)
![Screenshot 2025-01-21 133441](https://github.com/user-attachments/assets/0071c1c5-30e0-4dee-9fbf-e72b0d92f6bb)
![Screenshot 2025-01-21 133523](https://github.com/user-attachments/assets/ba6c9cce-0fce-4588-ba88-4109b97570f3)
- Using these codes, I began to track and document the process as a personal coding exploration. I also revisited workshops 1 and 2, focusing on multiplying shapes and exploring additional concepts.
- My first attempt at coding, where I used vibrant light colors on a black screen, didn’t turn out as expected — the shapes unexpectedly merged together and displayed as one.
![Screenshot 2025-01-16 174514](https://github.com/user-attachments/assets/9a2ff89a-a41a-4634-a80b-0baf037729a1)
- I decided to take another look and add some new codes to see what else I could create and fix. It felt like a good way to build on what I’d already explored while pushing things a little further. Revisiting the earlier work also helped me see it and giving new ideas to try out. 

**colour blending**
```ruby
  fill(random(255), random(255), random(255), 150); 
    if (random() < 0.5) {
      ellipse(x, y, size, size);
    } else {
      rect(x, y, size, size); 
    }
```
**drawing random shapes at random positions**
```ruby
    let size = random(20, 100);
    let x = random(width);
    let y = random(height);
```
**adding a bit of fun**
```ruby
 if (mouseIsPressed) {
    fill(random(255), random(255), random(255), 200); // Bright random color
    ellipse(mouseX + random(-10, 10), mouseY + random(-10, 10), 10, 10); // Small particle
  }
}
```

## Conclusion(+ further improvement)
