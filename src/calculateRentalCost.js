/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const totalPrice = days * 40;

  if (days >= 7) {
    return totalPrice - 50;
  }

  if (days >= 3) {
    return totalPrice - 20;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
