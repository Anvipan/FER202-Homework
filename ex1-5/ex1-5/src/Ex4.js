import React, { useEffect } from 'react';

class Shape {
  constructor(color = 'red') {
    this.color = color;
  }
  getArea() {
    return 0;
  }
  toString() {
    return `Shape color: ${this.color}`;
  }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  toString() {
    return `Rectangle [color=${this.color}, length=${this.length}, width=${this.width}, area=${this.getArea()}]`;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }
  getArea() {
    return 0.5 * this.base * this.height;
  }
  toString() {
    return `Triangle [color=${this.color}, base=${this.base}, height=${this.height}, area=${this.getArea()}]`;
  }
}

export default function Exercise4() {
  const people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
  ];

  const array = [1, 2, 3, 4];

  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };

  const retailCompanies = companies
    .filter(c => c.category === "Retail")
    .map(c => ({ ...c, start: c.start + 1 }));

  useEffect(() => {
    console.log("=== 1. PEOPLE EXERCISES ===");
    const firstTeen = people.find(p => p.age >= 10 && p.age <= 20);
    console.log("First teenager:", firstTeen);

    const allTeens = people.filter(p => p.age >= 10 && p.age <= 20);
    console.log("All teenagers:", allTeens);

    const isEveryTeen = people.every(p => p.age >= 10 && p.age <= 20);
    console.log("Is every person a teenager?:", isEveryTeen);

    const isAnyTeen = people.some(p => p.age >= 10 && p.age <= 20);
    console.log("Is any person a teenager?:", isAnyTeen);

    console.log("\n=== 2. ARRAY REDUCE EXERCISES ===");
    const sumArray = array.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum of array [1,2,3,4]:", sumArray);

    console.log("\n=== 3. COMPANIES & AGES EXERCISES ===");
    companies.forEach(c => console.log("Company:", c.name));

    console.log("Companies started after 1987:");
    companies.filter(c => c.start > 1987).forEach(c => console.log(c.name));

    const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);
    console.log("Companies sorted by end date asc:", sortedCompanies);

    const sortedAges = [...ages].sort((a, b) => b - a);
    console.log("Ages sorted desc:", sortedAges);

    const totalAges = ages.reduce((sum, age) => sum + age, 0);
    console.log("Sum of all ages:", totalAges);

    const { name: compName, category: compCat } = companies[0];
    const newCompObj = {
      name: compName,
      category: compCat,
      print() {
        console.log(`Company Name: ${this.name}, Category: ${this.category}`);
      }
    };
    newCompObj.print();

    const sumUnknownArgs = (...nums) => nums.reduce((s, n) => s + n, 0);
    console.log("Sum unknown args (1, 2, 3, 4, 5):", sumUnknownArgs(1, 2, 3, 4, 5));

    const collectAndFlatten = (...args) => {
      return args.reduce((acc, item) => {
        return Array.isArray(item) ? [...acc, ...item] : [...acc, item];
      }, []);
    };
    console.log("Collect & Flatten args:", collectAndFlatten(1, [2, 3], "An", [4, 5]));

    const { address: { street } } = person;
    console.log("Destructured street:", street);

    const createCounter = () => {
      let count = 0;
      return () => count++;
    };
    const counter = createCounter();
    console.log("Counter call 1:", counter());
    console.log("Counter call 2:", counter());

    const parseQueryParams = (url) => {
      const queryString = url.split('?')[1] || '';
      const params = new URLSearchParams(queryString);
      return Object.fromEntries(params.entries());
    };
    console.log("Parsed URL params:", parseQueryParams("https://example.com/page?name=An&age=20"));

    console.log("\n=== 4. OOP CLASSES TEST ===");
    const rect = new Rectangle('blue', 10, 5);
    console.log(rect.toString());

    const tri = new Triangle('red', 6, 8);
    console.log(tri.toString());

    console.log("\n=== 5. PROMISE EXERCISE ===");
    const checkRandomNumber = () => {
      return new Promise((resolve, reject) => {
        const rand = Math.floor(Math.random() * 10) + 1;
        if (rand > 5) {
          resolve(`Random Number Success: ${rand}`);
        } else {
          reject("Error: Number is small than or equal to 5");
        }
      });
    };

    checkRandomNumber()
      .then(res => console.log(res))
      .catch(err => console.error(err));

  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      
      <nav style={{ backgroundColor: '#4d4d4d', padding: '0px', display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <span style={{ backgroundColor: '#28a745', color: '#fff', padding: '12px 24px', fontSize: '18px' }}>Home</span>
        <span style={{ color: '#fff', padding: '12px 20px', fontSize: '18px' }}>Search</span>
        <span style={{ color: '#fff', padding: '12px 20px', fontSize: '18px' }}>Contact</span>
        <span style={{ backgroundColor: '#000', color: '#fff', padding: '12px 24px', fontSize: '18px' }}>Login</span>
      </nav>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'normal', margin: '10px 0' }}>
          Hello <span style={{ color: 'blue', fontWeight: 'bold' }}>React</span>
        </h1>
        
        <div style={{ display: 'inline-block', textAlign: 'center', marginTop: '10px' }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
            alt="React Logo" 
            style={{ width: '200px', height: '200px' }}
          />
          <hr style={{ borderColor: '#005b82', borderWidth: '1px', width: '300px', margin: '15px auto 5px' }} />
          <p style={{ fontStyle: 'italic', color: '#005b82', margin: '5px 0 2px', fontFamily: 'cursive' }}>
            This is the React logo!
          </p>
          <p style={{ fontStyle: 'italic', color: '#888', margin: '0', fontSize: '12px' }}>
            (I don't know why it is here either)
          </p>
        </div>

        <p style={{ fontSize: '18px', marginTop: '20px' }}>
          The library for web and native user interfaces
        </p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: 'blue', fontSize: '42px', fontWeight: 'bold' }}>This is JSX</h2>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px' }}>Course names</h2>
        <ul style={{ fontSize: '22px', lineHeight: '1.8' }}>
          <li>React</li>
          <li>ReactNative</li>
          <li>NodeJs</li>
        </ul>
      </div>

      <div>
        <h3 style={{ marginBottom: '10px' }}>Retail Companies (Start Year Increment)</h3>
        <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '800px', textAlign: 'center' }}>
          <tbody>
            {retailCompanies.map((comp, index) => (
              <tr key={index}>
                <td style={{ border: '2px solid #ddd', padding: '10px', fontWeight: 'bold', fontSize: '18px', width: '50%' }}>
                  {comp.name}
                </td>
                <td style={{ border: '2px solid #ddd', padding: '10px', fontWeight: 'bold', fontSize: '18px', width: '25%' }}>
                  {comp.start}
                </td>
                <td style={{ border: '2px solid #ddd', padding: '10px', fontWeight: 'bold', fontSize: '18px', width: '25%' }}>
                  {comp.end}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}