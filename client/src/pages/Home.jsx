import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
        console.log(posts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div>
      <div className="job-listing-area pt-60 justify-content-center pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-9 col-md-8">
                        <section className="featured-job-area">
                            <div className="container">
                                {posts.map((post) => (
                                  <div className="single-job-items mb-30" key={post.id}>
                                  <div className="job-items">
                                      <div className="company-img">
                                          <a href="#"><img height={100} width={100} src={`../upload/${post.img}`} alt=""/></a>
                                      </div>
                                      <div className="job-tittle job-tittle2">
                                        <Link className="link" to={`/post/${post.id}`}>
                                          <h1>{post.title}</h1>
                                        </Link>
                                        <ul>
                                            <li>{post.cat}</li>
                                            <li><i className="fas fa-map-marker-alt"></i>Unknown, India</li>
                                            <li>Salary Negotiable</li>
                                        </ul>
                                      </div>
                                  </div>
                                  <div className="items-link items-link2 f-right">
                                    <Link to={`/post/${post.id}`}>
                                      Apply Now
                                    </Link>
                                    <p>Posted {moment(post.date).fromNow()}</p>
                                  </div>
                              </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Home;
