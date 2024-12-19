import * as React from "react";

function Icon(props) {
  return (    
<svg version="1.1" viewBox="0 0 2048 2048" width="513" height="513" xmlns="http://www.w3.org/2000/svg"
{...props}>
<path transform="translate(634,19)" d="m0 0h826l7 2 16 12 14 14 6 11 1 5-1 4 3 5 1 1v18l3 5 1 1v18l3 5 1 1 1 25 3 3v18l3 5 1 1v18l3 5 1 1v22l3 5 1 1v18l3 5 1 1v18l3 5 1 1v22l3 5 1 1v21l3 1 1 2v21l3 1 1 2v25l3 1 1 2v21l3 1 1 2v18l4 6v22l4 6v18l4 6v18l4 6v21l4 7v18l4 6v18l4 5v22l4 7v18l4 6v18l4 5v23l4 5v20l4 4v28l4 4v32l4 3v73l-4 4v32l-4 4v24l-4 4v12l-4 4v15l-4 5v12l-4 3 1 8-5 4 1 8-5 5 1 7-5 5 1 7-4 2-1 4 1 5-2 3h-2l-2 8-2 2-3 7-12 24-1 1-1 9-3 1-2 4-2 2-2 6-4 8h-2l-2 4-2 2-2 6-2 2-2 6h-2l-2 4-2 2-2 6-6 6-2 6h-2l-2 4-4 2-3 9-3 1-2 4-10 9-1 6-71 71-8 4-8 8-8 4-8 8-8 4-8 8-17 9-5 4-15 8-5 4-34 17-8 2-20 10-8 2-13 6-9 3-11 3-7 2-8 2-7 2-7 1-9 3-8 3-15 2-6 2-20 2-7 2-13 1v571l194-1h74l13 1 16 6 9 6 11 11 10 19 1 5v7l3 4 1 6-5 7 1 12-6 11-9 10-4 4h-747l-7-8-6-6-3-7-2-4v-14l-3-2-1-8 4-5v-11l8-16 7-9 7-7 8-5 16-6 20-1h261v-569l-31-5-32-6-32-9-19-5-19-7-13-5-24-11-9-3-32-16-4-4-16-8-5-4-16-9-7-7-8-4-7-7-10-6-8-7-9-6-21-21-8-4-2-6-38-38-2-6-14-14-2-6-10-10-2-6-6-6-2-6-6-6-2-6-2-2-2-6-6-6-2-6-2-2-2-6-2-4-4-2-1-3v-6l-3-2-1-6-3-3-1-5-3-3-1-5-3-2-1-6-3-2-1-6-3-3-1-4 1-4-4-3-1-5 1-4-4-3-1-5 1-4-4-3-1-5 1-4-4-3-1-5 1-4-4-3-1-9 1-4-4-3v-17l-4-3v-13l-4-3-1-26-3-2-1-5v-29l-3-2v-74l3-2 1-34 3-2v-28l4-4v-20l4-4v-24l4-4v-19l1-3 3-2v-19l1-3 3-2v-24l4-4v-19l1-3 3-2v-19l1-3 3-2v-24l4-4v-19l4-5v-19l4-5v-24l4-4v-19l4-5v-19l4-5v-24l4-4v-19l4-5v-19l4-5v-24l4-2v-21l2-3h2v-21l2-3h2v-25l2-3h2v-21l4-4v-20l4-4v-24l4-4v-20l4-4v-20l4-4v-11l3-4 3-8 16-16 13-8 2-3zm77 124-5 3-2 9v20l-3 1-1 4v19l-4 2v22l-4 2v24l-4 4v20l-4 4v20l-4 4v23l-4 5v20l-4 4v20l-4 4v23l-4 5v19l-4 5v20l-3 3-1 22 47 1h734l2-1v-14l1-6-4-4-1-22-3-1v-21l-2-3h-2l-1-27-3-2v-20l-4-4v-20l-4-4-1-26-3-2v-20l-4-4v-20l-4-4-1-26-3-2v-20l-4-4-1-22-3-3-1-23-3-6-2-1zm-71 455-5 2-2 3-1 25-4 5v21l-3 1-1 4v18l-4 4v25l-3 1-1 3v19l-4 4v27l-3 3v86l3 3v26l3 5 1 1v16l4 4v12l4 2v14l4 3v9l4 3v9l3 2 4 9 1 5 3 7 23 46 6 9 7 12 5 7 3 5 9 11 3 5 9 11 3 5 54 54 9 6 10 9 11 7 10 7 15 10 19 10 13 7 9 6 6 3 10 3 16 6 11 4 18 6 12 3 5 2 8 2 6 2 14 2 6 2 16 1 8 3h101l10-3 16-1 8-3 13-1 6-3 7-2 5-2 10-1 6-3 9-3 10-3 13-6 9-3 10-3 10-5 5-4 15-8 16-8 5-4 11-7 15-10 8-6 7-7 10-6 55-55 2-6 10-10 3-7 8-8 4-8 6-8 6-12 4-5 10-19 9-19 5-9 1-1 1-9 3-3 2-6 2-2v-7l4-5v-7l5-7-1-10 4-4v-12l4-4v-15l4-5v-27l4-4v-86l-3-2-1-4v-26l-3-2v-20l-4-4-1-26-3-2-1-21-3-3-1-21-3-3-1-23-2-5-4-3z" fill="#CC7825"/>
</svg>
  );
}

export default Icon;



