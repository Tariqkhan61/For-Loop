
import chalk from "chalk";

// LOOPS
for (let i = 0; i <= 5; ++i) {
  console.log(
    chalk.yellowBright.bold("Welcome to My new assignment Loops" + " " + i)
  );
}

for (let a = 1; a <= 3; a++) {
  // INITIALIZE VARIABLE
  //"a" with a value of "1"
  console.log("Welcome Governor Sind");
  console.log(a);
}

const cars = ["Mehran", "Cultus", "Honda", "Toyota", "Ford"];
for (let i = 0; i <= 2; i++) {
  console.log(cars[1]);
  console.log(cars[3]);
  console.log(chalk.yellowBright.bold("I love toyota"));
}

for (let a = 0; a <= 1; ++a);
console.log(chalk.greenBright.italic("Thank You Governor Sindh Mr Kamran Tessori"));

//This syntax for table of 5

let n1: number = 5;
for (let i: number = 1; i <= 10; i++) {
  console.log(chalk.redBright.bold(`${n1}* ${i}=${n1 * i}`));
}
// ab hum is mn if ki condition b apply kr saktay
let n2: number = 3;
for (let i: number = 1; i <= 10; i++) {
  // 3 expreesion separated with ;
  // ist expression declare a variable.
  // 2nd expression declare Condition.
  // 3rd expression Increment or Derement.
  console.log(chalk.yellowBright.bold(`${n2}* ${i}=${n2 * i}`));
  if (n1 * i == 10) {
  }
}

// Now we have to create table of 4 in aproper way
for (let i = 1; i <= 10; i++) {
  // i= 1 to 10
  // ab hum ko 10 times 4 chahiye tu
  //hum aik variable banaen gay.
  let p1 = 4;
  let ans = p1 * i;
  // hum ko 4 k sath multiply(x)
  //ka sign space k liye
  //" " lgaen gy. aur (i) 1 to 10 hy
  console.log(chalk.greenBright.bold(p1 + " " + "x" + " " + i + " =" + ans));
}

//  25 Prophets Names in AL-QURAN & BIBLE.
// These Holy Names are written in "FOR LOOP".

const prophetNames: string[] = [
  "Adam(Adam) Aleh Salam",
  "Idrees(Enoch) Aleh Salam",
  "Noh(Noah) Aleh Salam",
  "Hood(Heber) Aleh Salam",
  "Saleh(Methusaleh) Aleh Salam",
  "Ibrahim(Abraham) Aleh Salam",
  "lut(Lot) Aleh",
  "Ismail(Ishmael) Aleh Salam",
  "Ishaq(Isaac) Aleh Salam",
  "Yaqoob(Jacob) Aleh Salam",
  "Yousuf(Joseph) Aleh Salam",
  "Shoaib(Jethro) Aleh Salam",
  "Ayyob(Job) Aleh Salam",
  "Zulkifl(Ezikiel) Aleh Salam",
  "Musa(Moses) Aleh Salam",
  "Haroon(Aaron) Aleh Salam",
  "Dawood(David) Aleh Salam",
  "Suleman(Solomon) Aleh Salam",
  "Ilyas(Elias) Aleh Salam",
  "Alyasa(Elisha) Aleh Salam",
  "Younus(Jonah) Aleh Salam",
  "Zakarya(Zachariah) Aleh Salam",
  "Yahya(John The Baptist) Aleh Salam",
  "Isa(Jesus) Aleh Salam",
  "The Last Prophet Muhammad(P.B.U.H)",
];

for (let i = 0; i < prophetNames.length; i++) {
  console.log(`${chalk.redBright.bold(i + 1)}
  -${chalk.yellowBright.bold(prophetNames[i])}`);
}

// Al-Sihah al-Sitta (6 HADEES BOOKS)
// HADITH BOOKS.

const hadithBooks = [
  {
    name: "SAHI AL BUKHARI",
    author: "Imam Muhammad Al Bukhari",
    hadithCount: 7275,
    description:
      "It is widely regarded as the most authentic book after the Quran. Sahih al-Bukhari covers various aspects of life, including faith, rituals, ethics, and legal matters. ",
  },

  {
    name: "Sahih Muslim",
    author: "Imam Muslim ibn al-Hajjaj",
    hadithCount: 7190,
    description:
      "Like Sahih al-Bukhari, it covers a wide range of topics and is highly respected among Sunni Muslims.",
  },
  {
    name: "Sunan Abu Dawood",
    author: "Imam Abu Dawood",
    hadithCount: 4800,
    description:
      "It focuses on practical aspects of daily life, including family, social interactions, and legal rulings.",
  },
  {
    name: "Sunan at-Tirmidhi",
    author: "Imam al-Tirmidhi",
    hadithCount: 3956,
    description:
      "It emphasizes the virtues and character of the Prophet Muhammad, as well as legal matters.",
  },
  {
    name: "Sunan an-Nasa'i",
    author: "Imam Ahmad ibn Shu’ayb an-Nasa’i",
    hadithCount: 5761,
    description:
      "It covers various topics, including rituals, ethics, and legal issues.",
  },
  {
    name: "Sunan Ibn Majah",
    author: "Imam Ibn Majah",
    hadithCount: 4341,
    description:
      "It covers a wide range of subjects, including faith, rituals, and social matters.",
  },
];

// Description using FOR LOOP
for (let i = 0; i < hadithBooks.length; i++) {
  const book = hadithBooks[i];
  console.log(chalk.yellowBright.bold(`${book.name}:`));
  console.log(
    chalk.greenBright.italic(
      `compiled by${book.author},this collection contains around ${book.hadithCount} hadiths.`
    )
  );
  console.log(chalk.blueBright.bold(book.description));
  console.log("\n");
}
