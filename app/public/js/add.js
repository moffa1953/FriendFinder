    $("#buttonsubmit").on("click", function(event) {

              event.preventDefault();

              var pointSum = 0;
            
              for(var x=1; x<11; x++) {
                  var IDQ = "#Q"+x+":checked";
                  if($(IDQ).val() == null) {
                    alert("All questions must be answered")
                    return
                  }
         
                var point = $(IDQ).val().trim();

                pointSum = Number($(IDQ).val().trim()) + Number(pointSum);

              }

              var newFriend = {
                    name: $("#personname").val().trim(),
                    pix: $("#pix").val().trim(),
                    ans: [
                            $("#Q1:checked").val().trim(),
                            $("#Q2:checked").val().trim(),
                            $("#Q3:checked").val().trim(),
                            $("#Q4:checked").val().trim(),
                            $("#Q5:checked").val().trim(),
                            $("#Q6:checked").val().trim(),
                            $("#Q7:checked").val().trim(),
                            $("#Q8:checked").val().trim(),
                            $("#Q9:checked").val().trim(),
                            $("#Q10:checked").val().trim()
                       ],
                    points: pointSum
              };
            
            //newFriend = JSON.stringify(newFriend)

              $.post("/api/friends", newFriend) 
 
  

        .done(function(data) {

          $("#match-name").text(data.name);
          $("#match-img").attr("src", data.pix);

          // Show the modal with the best match
          $("#results-modal").modal("toggle");


        })


    });

