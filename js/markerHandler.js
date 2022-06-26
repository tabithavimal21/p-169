AFRAME.registerComponent("marker-handler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker found")
            var buttonDiv=document.getElementById("button-div")
            buttonDiv.style.display="flex"
            var orderButton=document.getElementById("order-button")
            var orderSummaryButton=document.getElementById("order-summary-button")
            ratingButton.addEventListener("click",()=>{
                swal({
                    icon:"warning",
                    title:"Order Summary",
                    text:"Work In Progress",
                })

            })
            orderButton.addEventListener("click",()=>{
                swal({
                    icon:"https://i.imgur.com/4NZ6uLY.jpg",
                    title:"Order Summary",
                    text:"Work In Progress",

                })
            })

        })

        this.el.addEventListener("markerLost",()=>{
            console.log("marker lost")
            var buttonDiv=document.getElementById("button-div")
            buttonDiv.style.display="none"
            
        })
    }
})
