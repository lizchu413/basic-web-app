export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrewid")) {
    return ("My AndrewID is echu2. Nice to meet you!")
  }

  if (query.toLowerCase().includes("name")) {
    return ("lizard")
  }

  if (query.toLowerCase().includes("plus")) {
    var arr = query.split("?").join(" ").split(" ");
    var first = parseInt(arr[2]);
    var second = parseInt(arr[4]);
    return ((first + second).toString());
  }

  if (query.toLowerCase().includes("multiplied")) {
    var arr = query.split("?").join(" ").split(" ");
    var first = parseInt(arr[2]);
    var second = parseInt(arr[5]);
    return ((first * second).toString());
  }

  if (query.toLowerCase().includes("largest")) {
    var arr = query.split("?").join(":").split(":").join(",").split(",").join(" ").split(" ");
    var first = parseInt(arr[9]);
    var second = parseInt(arr[11]);
    var third = parseInt(arr[13]);
    return ((Math.max(first, Math.max(second, third))).toString());
  }

  var is_square = function (n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};

    var is_cube = function (n) {
        return Math.cbrt(n) % 1 === 0;
    };

  if (query.toLowerCase().includes("square and a")) {
    var arr = query.split("?").join(":").split(":").join(",").split(",").join(" ").split(" ");
    var first = parseInt(arr[13]);
    var second = parseInt(arr[15]);
    var third = parseInt(arr[17]);
    var fourth = parseInt(arr[19]);
    var fifth = parseInt(arr[21]);
    var sixth = parseInt(arr[23]);
    var seventh = parseInt(arr[25]);
    if (is_square(first) && is_cube(first)) return (first.toString());
    if (is_square(second) && is_cube(second)) return (second.toString());
    if (is_square(third) && is_cube(third)) return (third.toString());
    if (is_square(fourth) && is_cube(fourth)) return (fourth.toString());
    if (is_square(fifth) && is_cube(fifth)) return (fifth.toString());
    if (is_square(sixth) && is_cube(sixth)) return (sixth.toString());
    return (seventh.toString());
  }


  if (query.toLowerCase().includes("minus")) {
    var arr = query.split("?").join(" ").split(" ");
    var first = parseInt(arr[2]);
    var second = parseInt(arr[4]);
    return ((first - second).toString());
  }
  return "";
}
