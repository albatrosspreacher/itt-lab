var data = {
    "item1": {
        "itemName": "Nitrile Gloves",
        "itemQty": "100",
        "itemStatus": "Available"
    },
    "item2": {
        "itemName": "N95 Masks",
        "itemQty": "0",
        "itemStatus": "Out of Stock"
    }
}

$("#addEntry").click(function () {
    var itemName = $("#itemName").val();
    var itemQty = $("#itemQty").val();
    var itemStatus;
    if (itemQty > 0) {
        itemStatus = "Available"
    }
    else {
        itemStatus = "Out of Stock"
    }
    var obj = {
        item3: {
            "itemName": `${itemName}`,
            "itemQty": `${itemQty}`,
            "itemStatus": `${itemStatus}`
        }
    }
    $.extend(data, obj);
    console.log(data);
});

$("#loadEntry").click(function () {
  for (var i=0;i<5;i++){
    $("#displayTable").html(`<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Item Name</th>
        <th scope="col">Item Quantity</th>
        <th scope="col">Item Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>${data.item1.itemName}</td>
        <td>${data.item1.itemQty}</td>
        <td>${data.item1.itemStatus}</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>${data.item2.itemName}</td>
        <td>${data.item2.itemQty}</td>
        <td>${data.item2.itemStatus}</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>${data.item3.itemName}</td>
        <td>${data.item3.itemQty}</td>
        <td>${data.item3.itemStatus}</td>
      </tr>
    </tbody>
  </table>`);
  }
});
