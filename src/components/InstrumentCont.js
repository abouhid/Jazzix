import React, { useState, useContext } from 'react';
import Instruments from './Instruments';
import { Context } from '../Context';

const InstrumentCont = () => {
  const { allInstruments } = useContext(Context);
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);
  const lists = allInstruments.map(el => (
    <React.Fragment key={el.id}>

      <div className="d-flex align-items-baseline m-0 px-3">
        <h4 className="mt4 dark font-weight-bold fs3 title">
          <i className={el.icon} />
          {' '}
          {allInstruments[el.id].name}
        </h4>
        <p className="mt4 ml-4 grey font-weight-bold m-0 fs2">
          {allInstruments[el.id].description}
        </p>
      </div>
      <hr className="bg-grey mt-0" />
      <ul className="products px-3">
        <Instruments id={el.id} scrollTop={scrollTop} />
      </ul>

    </React.Fragment>

  ));
  return (
    [lists]
  );
};

export default InstrumentCont;
