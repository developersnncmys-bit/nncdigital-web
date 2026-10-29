// Indian-rupee formatter (en-IN grouping).
export const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN')
