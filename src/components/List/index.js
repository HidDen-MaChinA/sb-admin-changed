import { useState } from "react";
import { Modal ,Button_modal} from "../modal";
import { Field } from "../modal";
import "./style.css";

export function EmployeeList(props) {
  const { items } = props;
  const [isHere,setIsHere]=useState(false)
  const [item,setItem]=useState("")
  function handleclickk(e){
    setItem(e)
    setIsHere(!isHere);
  }
  function handleChange(e){
    setItem(e)
  }
  return (<>
    <Modal 
    ih={isHere} 
    onTik={handleclickk} 
    top="Update" 
    office={item.office}
    name={item.name}
    age={item.age}
    position={item.position}
    salary={item.salary}
    startDay={item.startDate}
    />
    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
      <div className="dataTable-top">
        <div className="dataTable-dropdown">
          <label>
            <select className="dataTable-selector">
              <option value="5">5</option>
              <option value="10" selected="">
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>{" "}
            entries per page
          </label>
        </div>
        <div className="dataTable-search">
          <Button_modal />
        </div>
      </div>
      <div className="dataTable-container">
        <table className="table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </tfoot>
          <tbody>
            {(items || []).map((item) => {return (<>
            {}
              <tr key={item.name} className="table-ligne" onClick={()=>{handleclickk(item)}}>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.office}</td>
                <td>{item.age}</td>
                <td>{item.startDate}</td>
                <td>{item.salary}</td>
              </tr>
              </>
            )})}
          </tbody>
        </table>
      </div>
      <div className="dataTable-bottom">
        <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
        <nav className="dataTable-pagination">
          <ul className="dataTable-pagination-list">
            <li className="active">
              <a href="#" data-page="1">
                1
              </a>
            </li>
            <li className="">
              <a href="#" data-page="2">
                2
              </a>
            </li>
            <li className="">
              <a href="#" data-page="3">
                3
              </a>
            </li>
            <li className="">
              <a href="#" data-page="4">
                4
              </a>
            </li>
            <li className="">
              <a href="#" data-page="5">
                5
              </a>
            </li>
            <li className="">
              <a href="#" data-page="6">
                6
              </a>
            </li>
            <li className="pager">
              <a href="#" data-page="2">
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
}
