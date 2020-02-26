exports.getDate = function() {
  const today = new Date();
  // Date options
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  // Display date, given options
  return today.toLocaleDateString("en-US", options);
};

exports.getDateConcise = function() {
  const today = new Date();
  // Date options
  const options = {
    day: "numeric",
    month: "long",
  };
  // Display date, given options
  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function(){
  const today = new Date();
  // Date options
  const options = {
    weekday: "long"
  };
  // Display date, given options
  return today.toLocaleDateString("en-US", options);
};

exports.getMonth = function(){
  const today = new Date();
  // Date options
  const options = {
    month: "numeric"
  };
  return today.toLocaleDateString("en-US",options);
}

exports.getYear = function(){
  const today = new Date();
  // Date Options
  const options = {
    year: "numeric"
  };
  return today.toLocaleDateString("en-US",options);
}
