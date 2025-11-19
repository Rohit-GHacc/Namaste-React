import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constant";
const Restaurant = () => {
  const [items, setItems] = useState(null);
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  console.log(RESTAURANT_API + id);
  const fetchMenu = async () => {
    // console.log("abdcd")
    try {
      const response = await fetch(RESTAURANT_API + id);
      console.log("data : " + response);
      console.log("fetch response", response);
      console.log("status", response.status, "ok", response.ok);
      const ct = response.headers.get("content-type") || "";
      console.log("content-type:", ct);

      if (!response.ok) {
        // non-2xx (e.g. 202, 404, 500) — read text to debug
        const text = await response.text();
        console.error("Non-OK response body:", text);
        setResInfo(null);
        setItems([]);
        return;
      }

      if (!ct.includes("application/json")) {
        // server returned something else (HTML / empty)
        const text = await response.text();
        console.error("Not JSON response body:", text);
        setResInfo(null);
        setItems([]);
        return;
      }
      const json = await response.json();
      console.log("JSON : " + json);
      setResInfo(json);
      const itemList =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards;
      console.log(itemList || []);
      setItems(itemList);
    } catch (error) {
      console.error("Error fetching menu:", error);
      setResInfo(null);
      setItems([]);
    }
  };
  if (resInfo === null) return <Shimmer />;
  const { name, areaName } = resInfo?.data?.cards[2]?.card?.card?.info;
  return (
    <div>
      <h1>{name}</h1>
      <h2> {areaName}</h2>
      <h2> Dishes</h2>
      <ul>
        {items.map((item) => {
          return <li>{item?.card?.info?.name}</li>;
        })}{" "}
      </ul>
    </div>
  );
};

export default Restaurant;
