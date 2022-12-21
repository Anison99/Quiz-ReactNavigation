import SQLite from 'react-native-sqlite-storage';


const db = SQLite.openDatabase({ name: 'mydb.db' });
import axios from 'axios';

async function downloadTests() {
    try {
        const response = await axios.get('https://tgryl.pl/quiz/tests');
        const tests = response.data;
        // store the tests in the database
    } catch (error) {
        console.error(error);
    }
}

db.transaction(tx => {
    tx.executeSql(
        'INSERT INTO tests (id, name, description, level, tasks, answers) VALUES (?, ?, ?, ?, ?, ?)',
        [test.id, test.name, test.description, test.level, JSON.stringify(test.tasks), JSON.stringify(test.answers)],
        (tx, results) => {
            try {
                // Check if the test already exists in the database
                const queryResult = await database.executeSql(
                    'SELECT * FROM tests WHERE link = ?',
                    [selectedTestLink]
                );
                if (queryResult[0].rows.length > 0) {
                    // Test exists in the database, set selectedTest to the test data from the database
                    const test = queryResult[0].rows.item(0);
                    setSelectedTest(test);
                } else {
                    // Test does not exist in the database, fetch test data from the server and store it in the database
                    const response = await axios.get(selectedTestLink);
                    const test = response.data;
                    const name = test.name;
                    const description = test.description;
                    const level = test.level;
                    const tasks = test.tasks;
                    const answer = test.answers;
                    const selectedTest = { test, name, description, level, tasks, answer };
                    setSelectedTest(selectedTest);
                    // Store the test data in the database
                    await database.executeSql(
                        `INSERT INTO tests (link, name, description, level, tasks, answer) VALUES (?, ?, ?, ?, ?, ?)`,
                        [selectedTestLink, name, description, level, tasks, answer]
                    );
                }
            } catch (error) {
                console.error(error);
            }
        }
        }
    );
