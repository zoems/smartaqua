import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sidebar"
export default class extends Controller {
  static targets = ["nav", "main"]
  connect() {
    console.log("Hello from our first Stimulus controller");
    console.log("hovering", this.navTarget);
  }

  maximise(){
    this.navTarget.style.width = "250px";
    this.mainTarget.style.marginLeft = "250px"

  }

  minimise(event){
    this.mainTarget.style.marginLeft = "50px"
    this.navTarget.style.width = "50px";
  }
}

// if the sidebar is in mini mode, hovering the "mouse over" the sidebar will "expand" the sidebar (and set the variable mini to false).
// If the sidebar is in full mode, hovering the "mouse out" of the sidebar will collapse it into mini mode (and set the variable mini to true).
// style.marginLeft = “250px”;
// style.width = “250px”
