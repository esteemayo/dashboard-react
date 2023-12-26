import BarChartBox from '../../components/barChartBox/BarChartBox';
import TopBox from '../../components/topBox/TopBox';
import PieChartBox from '../../components/pieChartBox/PieChartBox';
import ChartBox from '../../components/chartBox/ChartBox';
import AreaChartBox from '../../components/areaChartBox/AreaChartBox';

import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from '../../data';

import './home.scss';

const Home = () => {
  return (
    <section className='home'>
      <div className='box box-1'>
        <TopBox />
      </div>
      <div className='box box-2'>
        <ChartBox {...chartBoxUser} />
      </div>
      <div className='box box-3'>
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className='box box-4'>
        <PieChartBox />
      </div>
      <div className='box box-5'>
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className='box box-6'>
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className='box box-7'>
        <AreaChartBox />
      </div>
      <div className='box box-8'>
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className='box box-9'>
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </section>
  );
};

export default Home;
