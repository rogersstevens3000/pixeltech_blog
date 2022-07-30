import React,{useState,useEffect} from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts , getSimilarPosts } from '../services';
// import { graphCMSImageLoader } from '../util';
const PostWidget = ({categories,slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories,slug).then((result) => {
        setRelatedPosts(result);
      })
    }if(!slug) {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      })
    }
  }, [slug]);
  
  // console.log(relatedPosts);
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <div>
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex rounded-xl items-center w-full mb-4 hover:text-indigo-500 ">
          <div className="w-16 flex-none">
            <img
              //loader={graphCMSImageLoader}
              alt={post.title}
              height="90px"
              width="90px"
              unoptimized
              className="align-middle rounded-xl "
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4 ">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default PostWidget