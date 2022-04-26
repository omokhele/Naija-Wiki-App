
const Body = () => {
    // let selection = ["book", "author"];

    return(
        <div>
        
        
        <div className="col-3"> 
        <div>
            <h4 className="filter">Filter</h4>
            <div className="text-center text-decoration-underline">Clear Filter</div>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Selection
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
          {/* {selection.map((select, index) => select)} */}
        </div>

        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="btn btn-outline-primary" for="flexRadioDefault1">Single toggle</label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
        <label class="btn btn-outline-primary" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
        </div>
        </div>
    </div>
  </div>
      </div>
      </div>
   
    )
}

export default Body