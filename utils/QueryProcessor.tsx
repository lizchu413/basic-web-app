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

  return "";
}
