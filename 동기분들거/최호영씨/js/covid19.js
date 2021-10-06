const COVID_KEY =
    'cbpUBUIpaYGJSDhKIo%2Fph5JDJUwxx5B5%2F76fSUGqF3C5TCnAjd0zgXsojBXxc%2BfqxY5vF%2Bs1juv0uUjycQbF8Q%3D%3D';

const url = `https://api.odcloud.kr/api/apnmOrg/v1/list?page=1&perPage=10&serviceKey=${COVID_KEY}`;

async function getHospital() {
    try {
        const a = await fetch(url);
        const b = await a.json();
        return b;
    } catch (error) {}
}

console.log(getHospital());
