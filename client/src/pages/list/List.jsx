import "./list.css";
import Header from "../../constant/Header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  //const [destination, setDestination] = useState(location.state.destination);
  const [destination, setDestination] = useState("Dehradun");
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleDestination =(e)=>{
    setDestination(e.target.value)
  }
  const handleFilter = (e)=>{
    if(e.target.checked === true){
      let query = `&${e.target.id}=${e.target.checked}`;
      if(searchQuery.includes(`&${e.target.id}=${e.target.checked}`)){
        return
      }
      setSearchQuery(searchQuery + query)
    }
    else if(e.target.checked === false){
      let newQuery = searchQuery.replace(`&${e.target.id}=true`, "")
      setSearchQuery(newQuery)
    }
  }

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0 }&max=${max || 30000}${searchQuery}`
  );
  const handleClick = () => {
    reFetch();
  };
  

  return (
    <div>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input onKeyUp={handleDestination} placeholder={destination} type="text" />
            </div>
            <div className="lsItem hidden">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Rent<small> min</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Rent<small> max</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem hidden">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem hidden">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem hidden">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <div className="lsItem">
              <label>Amedities</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Air Conditioner
                  </span>
                  <input type="checkbox" onChange={handleFilter} id="airConditioner" className="lsOptionInput"  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Wifi
                  </span>
                  <input type="checkbox" onChange={handleFilter} id="wifi" className="lsOptionInput"  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Geaser
                  </span>
                  <input type="checkbox" onChange={handleFilter} id="geaser" className="lsOptionInput"  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Parking
                  </span>
                  <input type="checkbox" onChange={handleFilter} id="parking" className="lsOptionInput"  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
