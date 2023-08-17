import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Abd from "../Components/Abd";
import Profilepage from "../Components/ProfilePage";
import Panel from "../Components/Panel";
import CardPage from "../Components/CardPage";
import Overview from "../Components/Overview";
import OrderOnline from "../Components/OrderOnline";
import HomePage from "../Components/HomePage";

export default function BrowserRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ahmedabad" element={<Abd />} />
          <Route
            path="/profile"
            element={
              <Profilepage
                component={
                  <Panel
                    title="Reviews"
                    url="https://b.zmtcdn.com/webFrontend/691ad4ad27a5804a3033977d45390c811584432410.png"
                  />
                }
              />
            }
          />
          <Route
            path="/profile/reviews"
            element={
              <Profilepage
                component={
                  <Panel
                    title="Reviews"
                    url="https://b.zmtcdn.com/webFrontend/691ad4ad27a5804a3033977d45390c811584432410.png"
                    text="Nothing yet here..."
                  />
                }
              />
            }
          />
          <Route
            path="/profile/photos"
            element={
              <Profilepage
                component={
                  <Panel
                    title="Photos"
                    url="https://b.zmtcdn.com/webFrontend/1a33af2333871e0c1222a3ee21ea697f1581070577.png"
                    text="Nothing yet here..."
                  />
                }
              />
            }
          />
          <Route
            path="/profile/followers"
            element={
              <Profilepage
                component={
                  <Panel
                    title="Followers"
                    url="https://b.zmtcdn.com/webFrontend/c33e5cd0b755a03f9b2f374b1b8271a91581004801.png"
                    text="You are not followed by any users yet..."
                  />
                }
              />
            }
          />
          <Route
            path="/profile/recently viewed"
            element={
              <Profilepage
                component={
                  <Panel
                    title="Recently Viewed"
                    url="https://b.zmtcdn.com/webFrontend/691ad4ad27a5804a3033977d45390c811584432410.png"
                    text="Nothing yet here..."
                  />
                }
              />
            }
          />
          <Route
            path="/profile/bookmarks"
            element={
              <Profilepage
                component={
                  <Panel
                    title="Bookmarks"
                    url="https://b.zmtcdn.com/webFrontend/e8dbf3973a8918dcdf9e7e61daae70f71581003303.png"
                    text="Nothing in your Bookmarks yet..."
                  />
                }
              />
            }
          />
          <Route
            path="/profile/blog posts"
            element={
              <Profilepage
                component={
                  <Panel
                    title="Blog Posts"
                    url="https://b.zmtcdn.com/webFrontend/1a33af2333871e0c1222a3ee21ea697f1581070577.png"
                    text="Nothing yet here..."
                  />
                }
              />
            }
          />
          <Route
            path="/profile/order history"
            element={
              <Profilepage
                component={
                  <Panel
                    title="Order History"
                    url="https://b.zmtcdn.com/webFrontend/96a9a259cfa3dd8e260d65d1f135ab941581004545.png"
                    text="Nothing yet here..."
                  />
                }
              />
            }
          />
          <Route
            path="/profile/my addresses"
            element={
              <Profilepage
                component={
                  <Panel
                    title="My Addresses"
                    url="https://b.zmtcdn.com/webFrontend/0fe9c098c4a1284e04065bd13bc1dd911581004318.png"
                    text="You haven't added any address yet..."
                  />
                }
              />
            }
          />
          <Route
            path="/profile/favorite orders"
            element={
              <Profilepage
                component={
                  <Panel
                    title="Favorite Orders"
                    url="https://b.zmtcdn.com/webFrontend/96a9a259cfa3dd8e260d65d1f135ab941581004545.png"
                    text="Nothing yet here..."
                  />
                }
              />
            }
          />{" "}
          <Route
            path="/ahmedabad/product details/:id"
            element={<CardPage component={<Overview />} />}
          />
          <Route
            path="/ahmedabad/product details/overview/:id"
            element={<CardPage component={<Overview />} />}
          />
          <Route
            path="/ahmedabad/product details/order online/:id"
            element={<CardPage component={<OrderOnline />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
