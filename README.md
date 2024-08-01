# Accordion

A lightweight and customizable JavaScript accordion to enhance your website's interactivity. 
Easily create collapsible content sections with smooth transitions for a user-friendly experience.

[![Accordion Preview](https://i.postimg.cc/5NW1jCFF/image.png)](https://postimg.cc/V5g2V5gY)

## Usage

1. **Include Styles and Fonts:**
    - Add the following stylesheet link to your HTML `<head>` to import the required font:
      ```html
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">
      <link href="path/to/your/css/style.css" rel="stylesheet">
      ```

2. **HTML Structure:**
    - Create an HTML structure for your accordion:
      ```html
      <div class="accordion">
          <div class="container">
              <ul>
                  <!-- Add accordion items as needed -->
                  <li class="accordion-question">
                      <div class="accordion-title">
                          <h3>Answer For Question 1</h3>
                          <span class="accordion-icon"></span>
                      </div>
                      <div class="accordion-content">
                          <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illum ad consequatur accusantium
                              ratione harum voluptates corrupti fuga nostrum quidem inventore laboriosam illo modi veritatis.
                              Et ea nam mollitia in?
                          </p>
                      </div>
                  </li>
                  <!-- Repeat the structure for other questions -->
              </ul>
          </div>
      </div>
      ```

3. **Include JavaScript:**
    - Import the JavaScript file at the end of your HTML file, just before the closing `</body>` tag:
      ```html
      <script src="path/to/your/js/script.js"></script>
      ```

4. **Customization:**
    - Customize the accordion styles in your `style.css` or `style.scss` file according to your project's design
      preferences.

## Styles and Variables

The component utilizes custom styles and CSS variables for easy customization. Here are key variables available in
the `style.css` and `style.scss`:

```css
:root {
    --black: #111111;
    --font: 'JetBrains Mono', monospace;
}
```

```scss
$black: #111111;
$font: 'JetBrains Mono', monospace;
```

## Additional Information

**License:**
This project is licensed under the MIT License.

Enjoy using the Accordion!
