import './featuredInfo.css';
import { ArrowDownward, ArrowUpward} from '@mui/icons-material';


export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featureTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1200</span>
                <span className="featuredMoneyRate">-4.99 <ArrowDownward className='featuredIcon negative'/> </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featureTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2134</span>
                <span className="featuredMoneyRate">-2.19 <ArrowDownward className='featuredIcon negative'/> </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featureTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2030</span>
                <span className="featuredMoneyRate">+2.99 <ArrowUpward className='featuredIcon'/> </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
    </div>
  )
}
