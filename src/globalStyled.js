import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* {
  box-sizing: border-box;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
}

html {
  height: 100%;
}

body {
  font-family: Inter, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(27, 33, 43, 0.9);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: normal;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

strong {
  font-weight: bold;
}

input {
  outline: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  background: none;
  border: none;
  padding: 0;
}

img {
  border: 0;
  max-width: 100%;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;

}
`;

export default GlobalStyle;
