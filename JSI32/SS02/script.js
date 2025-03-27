const students = [
    {
        name: "An",
        scores: {
            Toan: { score: 7.4, evaluation: "D" },
            NguVan: { score: 8.9, evaluation: "H" },
            NgoaiNgu: { score: 8.5, evaluation: "H" },
            VatLy: { score: 9.0, evaluation: "H" },
            HoaHoc: { score: 3.9, evaluation: "K" },
            SinhHoc: { score: 5.0, evaluation: "D" },
            LichSu: { score: 8.3, evaluation: "H" },
            DiaLy: { score: 9.4, evaluation: "H" },
            GDCD: { score: 6.6, evaluation: "D" }
        }
    }, {
        name: "Binh",
        scores: {
            Toan: { score: 3.4, evaluation: "K" },
            NguVan: { score: 5.9, evaluation: "D" },
            NgoaiNgu: { score: 5.4, evaluation: "D" },
            VatLy: { score: 7.4, evaluation: "D" },
            HoaHoc: { score: 9.3, evaluation: "H" },
            SinhHoc: { score: 8.6, evaluation: "H" },
            LichSu: { score: 5.2, evaluation: "D" },
            DiaLy: { score: 7.1, evaluation: "D" },
            GDCD: { score: 6.7, evaluation: "D" }
        }
    }, {
        name: "Chau",
        scores: {
            Toan: { score: 5.7, evaluation: "D" },
            NguVan: { score: 6.0, evaluation: "D" },
            NgoaiNgu: { score: 9.2, evaluation: "H" },
            VatLy: { score: 2.3, evaluation: "K" },
            HoaHoc: { score: 1.9, evaluation: "K" },
            SinhHoc: { score: 7.4, evaluation: "D" },
            LichSu: { score: 2.2, evaluation: "K" },
            DiaLy: { score: 10.0, evaluation: "H" },
            GDCD: { score: 9.9, evaluation: "H" }
        }
    }, {
        name: "Duc",
        scores: {
            Toan: { score: 6.5, evaluation: "D" },
            NguVan: { score: 7.0, evaluation: "D" },
            NgoaiNgu: { score: 8.0, evaluation: "H" },
            VatLy: { score: 6.0, evaluation: "D" },
            HoaHoc: { score: 7.5, evaluation: "D" },
            SinhHoc: { score: 8.0, evaluation: "H" },
            LichSu: { score: 6.5, evaluation: "D" },
            DiaLy: { score: 7.0, evaluation: "D" },
            GDCD: { score: 8.5, evaluation: "H" }
        }
    }, {
        name: "Em",
        scores: {
            Toan: { score: 9.0, evaluation: "H" },
            NguVan: { score: 8.5, evaluation: "H" },
            NgoaiNgu: { score: 9.5, evaluation: "H" },
            VatLy: { score: 8.0, evaluation: "H" },
            HoaHoc: { score: 7.0, evaluation: "D" },
            SinhHoc: { score: 8.5, evaluation: "H" },
            LichSu: { score: 9.0, evaluation: "H" },
            DiaLy: { score: 8.5, evaluation: "H" },
            GDCD: { score: 9.0, evaluation: "H" }
        }
    }, {
        name: "Phuong",
        scores: {
            Toan: { score: 7.0, evaluation: "D" },
            NguVan: { score: 6.5, evaluation: "D" },
            NgoaiNgu: { score: 8.0, evaluation: "H" },
            VatLy: { score: 7.5, evaluation: "D" },
            HoaHoc: { score: 6.0, evaluation: "D" },
            SinhHoc: { score: 7.0, evaluation: "D" },
            LichSu: { score: 8.0, evaluation: "H" },
            DiaLy: { score: 7.5, evaluation: "D" },
            GDCD: { score: 8.0, evaluation: "H" }
        }
    }, {
        name: "Quang",
        scores: {
            Toan: { score: 5.0, evaluation: "D" },
            NguVan: { score: 6.0, evaluation: "D" },
            NgoaiNgu: { score: 7.0, evaluation: "D" },
            VatLy: { score: 6.5, evaluation: "D" },
            HoaHoc: { score: 5.5, evaluation: "D" },
            SinhHoc: { score: 6.0, evaluation: "D" },
            LichSu: { score: 7.0, evaluation: "D" },
            DiaLy: { score: 6.5, evaluation: "D" },
            GDCD: { score: 7.0, evaluation: "D" }
        }
    }, {
        name: "Trang",
        scores: {
            Toan: { score: 8.0, evaluation: "H" },
            NguVan: { score: 7.5, evaluation: "D" },
            NgoaiNgu: { score: 9.0, evaluation: "H" },
            VatLy: { score: 8.5, evaluation: "H" },
            HoaHoc: { score: 7.0, evaluation: "D" },
            SinhHoc: { score: 8.0, evaluation: "H" },
            LichSu: { score: 9.0, evaluation: "H" },
            DiaLy: { score: 8.5, evaluation: "H" },
            GDCD: { score: 9.0, evaluation: "H" }
        }
    }, {
        name: "Viet",
        scores: {
            Toan: { score: 6.0, evaluation: "D" },
            NguVan: { score: 5.5, evaluation: "D" },
            NgoaiNgu: { score: 7.0, evaluation: "D" },
            VatLy: { score: 6.5, evaluation: "D" },
            HoaHoc: { score: 5.0, evaluation: "D" },
            SinhHoc: { score: 6.0, evaluation: "D" },
            LichSu: { score: 7.0, evaluation: "D" },
            DiaLy: { score: 6.5, evaluation: "D" },
            GDCD: { score: 7.0, evaluation: "D" }
        }
    }, {
        name: "Yen",
        scores: {
            Toan: { score: 9.0, evaluation: "H" },
            NguVan: { score: 8.5, evaluation: "H" },
            NgoaiNgu: { score: 9.5, evaluation: "H" },
            VatLy: { score: 8.0, evaluation: "H" },
            HoaHoc: { score: 7.0, evaluation: "D" },
            SinhHoc: { score: 8.5, evaluation: "H" },
            LichSu: { score: 9.0, evaluation: "H" },
            DiaLy: { score: 8.5, evaluation: "H" },
            GDCD: { score: 9.0, evaluation: "H" }
        }
    }
]

const summary = students.map(student => {
    let sum = 0;
    const scores = Object.values(student.scores);

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i].score;
    }

    const evaluations = Object.values(student.scores).map(score => score.evaluation);
    const rating = evaluations.filter(evaluation => evaluation === "H").length >= 5 ? "H" :
                   evaluations.filter(evaluation => evaluation === "D").length >= 5 ? "D" : "K";

    return {
        name: student.name,
        average: sum / scores.length,
        rating: rating
    }
});

const top3 = summary.sort((a, b) => b.average - a.average).slice(0, 3);

const lowest = summary[summary.length - 1].average;


console.log("Top 3 học sinh có điểm trung bình cao nhất:")
top3.forEach((student) => {
    console.log(`${student.name}: ${student.average}`);
});
console.log("");

console.log(`Điểm TBHK thấp nhất: ${lowest}`);
console.log("");

console.log("Danh sách học sinh:")
console.log(summary);
console.log("");

console.log("Danh sách HS giỏi:")
const excellent = summary.filter(student => student.rating === "H");
console.log(excellent);

console.log("Danh sách HS khá:")
const good = summary.filter(student => student.rating === "D");
console.log(good);

console.log("Danh sách HS kém:")
const bad = summary.filter(student => student.rating === "K");
console.log(bad);
console.log("");

console.log("Danh sách HS theo điểm TBHK > 7:")
const above7 = summary.filter(student => student.average > 7);
console.log(above7);