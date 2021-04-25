<h1>SVG Compiler</h1>
<p>The compiler takes in simple code describing different shapes, and generates corresponding SVG code and image. The SVG Code can then be downloaded for further use.</p>
<br />
<br />
<h4>How does the compiler work?</h4>
<p>The SVG compiler has 4 phases</p>
<p>1. Lexer - This function is used to generate tokens from the input file</p>
<p>2. Parser - Parser parses the generated tokens and creates an Abstract Syntax Tree (AST)</p>
<p>3. Transformer - This function transforms the AST to get it into SVG format</p>
<p>4. Generator - This function is used to generate the SVG code from the SVG tree created by Transformer function</p>
<br />
<br />
<h4>Different SVG Shapes Supported</h4>
<p>Line, Rectangle, Circle and Ellipse<p>
<br />
<br />
<h4>Getting Started</h4>
<p>Clone this repository: git clone https://github.com/riyasavant/DBN-Compiler.git</p>  
<p>Install all dependencies: yarn add</p>  
<p>Run the application: yarn start</p>
<br/>
<br/>
<h6>Project Created by<h6>
<a href="https://github.com/riyasavant">Riya Savant</a>
<a href="https://github.com/San411">Sandesh Bhat</a>
<a href="https://github.com/rahulnoronha">Rahul Noronha</a>