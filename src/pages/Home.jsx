import React, { useEffect, useState } from 'react'
import './Home.css';
import Spinner from '../components/Spinner';
import Product from '../components/Product'

const Home = (props) => {
  const searchItem = props.searchItem;
  const API_URL = "https://fakestoreapi.com/products"
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  function filterData(data) {
    return data.filter((item) => item.title.toLowerCase().includes(searchItem.toLowerCase()));
  }

  async function fetchData() {
    setLoading(true)
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      const filter_data=searchItem ? filterData(data):data
      setPosts(filter_data)
    }
    catch (err) {
      console.log("Error aa gya ji");
      console.log("ab mai kaise sambhalu api to thik kam kar rha hai");
      setPosts([]);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [searchItem]);
  return (
    <div>
      {
        loading ? <div className='spinner_container'><Spinner /></div> :
          posts.length > 0 ?
            (
              <div className='Product_container'>
                {
                  posts.map((post) => (
                    <Product key={post.id} post={post} />
                  ))
                }
              </div>
            ) :
            (<div className='home_data_not_found'>
              <p className='noDataText'>
                No Data Found
              </p>
            </div>)
      }
    </div>
  )
}

export default Home
