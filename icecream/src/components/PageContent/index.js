import React from 'react';
//passes props in and organizes child elements into the page
const PageContent = (props) => {

  return (
    <div>
      {props.children}
    </div>
  );
};

export default PageContent;