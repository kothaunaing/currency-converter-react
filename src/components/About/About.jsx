/** @format */

import { useEffect, useState } from 'react';
import prettyDate from '../../assets/utils/prettyDate';

const About = ({ data }) => {
  const { getText, getNumber } = data;

  return (
    <div className='About '>
      <div className='bg-slate-50 p-3 border border-slate-300 rounded-lg text-blue-500'>
        <div>
          {getText('version')} - {getNumber('1.2.2')}
        </div>
        <div>
          {getText('author')} - {getText('author-name')}
        </div>
        <div>
          Give feedback at{' '}
          <a href='mailto:aungnaingthan22@gmail.com'>
            aungnaingthan22@gmail.com
          </a>
          .
        </div>
        <div>Last updated: {prettyDate(1706894234373)}</div>
      </div>
    </div>
  );
};

export default About;
