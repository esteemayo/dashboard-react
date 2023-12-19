import TopBox from '../../components/topBox/TopBox';
import ChartBox from '../../components/chartBox/ChartBox';

import './home.scss';

const Home = () => {
  return (
    <section className='home'>
      <div className='box box-1'>
        <TopBox />
      </div>
      <div className='box box-2'>
        <ChartBox />
      </div>
      <div className='box box-3'>
        <ChartBox />
      </div>
      <div className='box box-4'>Box 4</div>
      <div className='box box-5'>
        <ChartBox />
      </div>
      <div className='box box-6'>
        <ChartBox />
      </div>
      <div className='box box-7'>Box 7</div>
      <div className='box box-8'>Box 8</div>
      <div className='box box-9'>Box 9</div>
    </section>
  );
};

export default Home;
