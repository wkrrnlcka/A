async function saveSolve() {
    const data = {
        user: "seungjin",
        bojId: document.getElementById("bojId").value,
        title: document.getElementById("title").value,
        difficulty: document.getElementById("difficulty").value,
        memo: document.getElementById("memo").value,
        date: new Date().toISOString().slice(0, 10)
    };

    const res = await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    alert("저장 완료!");
    loadList();
}

async function loadList() {
    const res = await fetch("http://localhost:3000/list");
    const list = await res.json();

    let html = "";
    list.forEach(item => {
        html += `
        <p>
            <b>${item.date}</b>  
            [${item.difficulty}]  
            ${item.title} (${item.bojId})<br>
            ${item.memo}
        </p>`;
    });

    document.getElementById("result").innerHTML = html;
}

loadList();
