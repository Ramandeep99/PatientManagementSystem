import './featuredInfo.css';
import { ArrowDownward, ArrowUpward} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './../../pages/product/product.css';


export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <Link to="/newproduct">
                <button className="productAddButton">Add Patient</button>
            </Link>
        </div>
        
    </div>
  )
}
