import React, { Component } from 'react';
import './AddButton.css';

class AddButton extends Component {
    render() {
        return (
            <div>
            <br/>
            <br/>
                <div className="button_cont" align="left">
                    <button className="example_d" href="add-website-here" target="_blank" rel="nofollow noopener">
                        Add Restaurant
                    </button>
                </div>
    {/* <button class="button is-outlined">Why Not Try Clicking Me?</button> */}

{/* <div class="box-3">
  <div class="btn btn-three">
    <span>HOVER ME</span>
  </div>
</div> */}
        
        {/* <button class="button">

          <div class="bottom"></div>

          <div class="top">

          <div class="label">Add Restaurant</div>
            
        		<div class="button-border button-border-left"></div>
        	  <div class="button-border button-border-top"></div>
        	  <div class="button-border button-border-right"></div>
        		<div class="button-border button-border-bottom"></div>

          </div>

        	</button> */}


                {/* <button class="btn draw-border">Draw Border</button> */}
            </div>
        );
    }
}

export default AddButton;