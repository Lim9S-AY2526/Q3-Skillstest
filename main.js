function calculateTotal() {
  let fullname = document.getElementById("fullname").value.trim();
  let memberid = document.getElementById("memberid").value.trim();
  let qty = (document.getElementById("quantity").value);

  const Ticketprice = 250;
  const adminFee = 50;

  if (fullname === "" || memberid === "") {
    document.getElementById("output").innerText = " Please enter your name and member ID.";
    return;
  }
  if (qty <= 0) {
    document.getElementById("output").innerText = " Please select at least 1 ticket.";
    return;
  }

  let subtotal = qty * Ticketprice;
  let total = subtotal + adminFee;

  document.getElementById("output").innerHTML =
    "<b>Member ID:</b> " + memberid + "<br>" +
    "Subtotal: ₱" + subtotal.toFixed(2) + "<br>" +
    "Admin Fee: ₱" + adminFee.toFixed(2) + "<br>" +
    "Total: ₱" + total.toFixed(2);
}

