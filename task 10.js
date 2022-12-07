function f(template, ...values) {
    return template.replace(/%(\d+)/g, (str, num) => [...values][num - 1]);
  }
  console.log(f("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020));
