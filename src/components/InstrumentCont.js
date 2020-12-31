import React, { useContext } from 'react';
import Drums from './Instruments/Drums';
import { Context } from '../Context';
import Guitars from './Instruments/Guitars';
import Pianos from './Instruments/Pianos';
import Trumpets from './Instruments/Trumpets';

function InstrumentCont() {
  const { storedata } = useContext(Context);

  const renderComp = id => {
    switch (id) {
      case 0:
        return <Drums id={id} />;
      case 1:
        return <Guitars id={id} />;
      case 2:
        return <Pianos id={id} />;
      case 3:
        return <Trumpets id={id} />;
      default:
        return <Drums id={id} />;
    }
  };

  const lists = storedata.map(el => (
    <React.Fragment key={el.id}>
      <div className="d-flex align-items-baseline m-0">
        <h4 className="mt4 dark font-weight-bold fs3 title">
          <i className={el.icon} />
          {storedata[el.id].name}
        </h4>
        <p className="mt4 ml-4 grey font-weight-bold m-0 fs2">
          {storedata[el.id].description}
        </p>
      </div>
      <hr className="bg-grey mt-0" />
      <ul className="products">
        {renderComp(el.id)}
      </ul>

    </React.Fragment>

  ));
  return (
    [lists]
  );
}

export default InstrumentCont;
