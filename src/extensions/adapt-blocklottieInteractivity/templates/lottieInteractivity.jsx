import React from 'react';
import { html, templates } from 'core/js/reactHelpers';

export default function LottieInteractivity(props) {
  const { lottieplayer} = props;
    return <div dangerouslySetInnerHTML={{ __html: lottieplayer }} />
   
 
}
