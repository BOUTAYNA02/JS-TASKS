console.log("Task 1: Analyze a Library Collection");

const bookTitles = ["Learn JavaScript", "The Road", "JavaScript for Beginners", "The Beginning"];

let totalBooks = bookTitles.length;
let booksAboutJavaScript = 0;

for (let i = 0; i < bookTitles.length; i++) {
    console.log(bookTitles[i]);
    if (bookTitles[i].includes("JavaScript")) {
        console.log(`${bookTitles[i]} is about JavaScript.`);
        booksAboutJavaScript++;
    }
}

const librarySummary = {
    totalBooks: totalBooks,
    booksAboutJavaScript: booksAboutJavaScript,
};

console.log("Library Summary:", librarySummary);

console.log("\nTask 2: Grade Analyzer");

const grades = [85, 92, 78, 90];
let totalGrades = grades.length;
let excellentGrades = 0;
let sumGrades = 0;

for (let i = 0; i < grades.length; i++) {
    console.log(`Grade: ${grades[i]}`);
    sumGrades += grades[i];
    if (grades[i] >= 90) {
        console.log(`Grade ${grades[i]} is excellent.`);
        excellentGrades++;
    }
}

const averageGrade = sumGrades / totalGrades;

const gradeSummary = {
    totalGrades: totalGrades,
    excellentGrades: excellentGrades,
    averageGrade: averageGrade,
};

console.log("Grade Summary:", gradeSummary);

console.log("\nTask 3: Inventory Tracker");

const inventory = [
    { name: "Apples", quantity: 10 },
    { name: "Oranges", quantity: 3 },
    { name: "Bananas", quantity: 7 },

];

let totalItems = inventory.length;
let itemsToRestock = 0;

for (let i = 0; i < inventory.length; i++) {
    console.log(`${inventory[i].name}: ${inventory[i].quantity}`);
    if (inventory[i].quantity < 5) {
        console.log(`${inventory[i].name} needs restocking.`);
        itemsToRestock++;
    }
}

const inventorySummary = {
    totalItems: totalItems,
    itemsToRestock: itemsToRestock,
};

console.log("Inventory Summary:", inventorySummary);
