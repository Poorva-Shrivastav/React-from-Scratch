import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenuCategory = ({ cardCaterogyTitle }) => {
  const slicedCard = cardCaterogyTitle?.slice(1);

  return (
    <>
      {slicedCard &&
        slicedCard?.map((item) => (
          <>
            <h4 className="rest-  -category-title">
              {item?.card?.card?.title} (
              {item?.card?.card?.itemCards?.length > 0
                ? item?.card?.card?.itemCards?.length
                : 0}
              )
            </h4>
            <div>
              {item.card.card?.itemCards &&
                item.card.card?.itemCards.map((items) => (
                  <RestaurantMenuItem items={items} />
                ))}
            </div>
          </>
        ))}
    </>
  );
};

export default RestaurantMenuCategory;
