import React from 'react';

export function RenderHtml(props) {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.htmlContent }}></div>
  );
}
