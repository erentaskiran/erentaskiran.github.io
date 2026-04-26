const temaButonu = document.getElementById("temaButonu");
const basvuruFormu = document.getElementById("basvuruFormu");
const uyariAlani = document.getElementById("uyariAlani");
const sonucAlani = document.getElementById("sonucAlani");

if (temaButonu) {
    temaButonu.addEventListener("click", () => {
        const html = document.documentElement;
        const suankiTema = html.getAttribute("data-theme");
        const yeniTema = suankiTema === "dark" ? "light" : "dark";

        html.setAttribute("data-theme", yeniTema);
        temaButonu.textContent = yeniTema === "dark" ? "Acik Temaya Gec" : "Koyu Temaya Gec";
    });
}

if (basvuruFormu) {
    basvuruFormu.addEventListener("submit", (event) => {
        event.preventDefault();

        const adSoyad = document.getElementById("adSoyad").value.trim();
        const eposta = document.getElementById("eposta").value.trim();
        const bolum = document.getElementById("bolum").value.trim();
        const sinif = document.getElementById("sinif").value;
        const oturum = document.getElementById("oturum").value;
        const katilimTuru = document.getElementById("katilimTuru").value;
        const mesaj = document.getElementById("mesaj").value.trim();
        const onay = document.getElementById("onay").checked;

        if (!adSoyad || !eposta || !bolum || !sinif || !oturum || !katilimTuru || !mesaj || !onay) {
            uyariAlani.classList.remove("d-none");
            uyariAlani.textContent = "Lutfen tum alanlari doldurun ve onay kutusunu isaretleyin.";
            sonucAlani.innerHTML = "<div class=\"alert alert-info mb-0\">Henuz basvuru ozeti olusturulmadi. Formu doldurduktan sonra sonuc burada gorunecek.</div>";
            return;
        }

        uyariAlani.classList.add("d-none");
        uyariAlani.textContent = "";

        sonucAlani.innerHTML = `
            <div class="card border-success shadow-sm rounded-4">
                <div class="card-body p-4">
                    <h3 class="h4 text-success mb-3">Basvuru Ozeti Hazirlandi</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Ad Soyad:</strong> ${adSoyad}</li>
                        <li class="list-group-item"><strong>E-posta:</strong> ${eposta}</li>
                        <li class="list-group-item"><strong>Bolum:</strong> ${bolum}</li>
                        <li class="list-group-item"><strong>Sinif:</strong> ${sinif}</li>
                        <li class="list-group-item"><strong>Oturum:</strong> ${oturum}</li>
                        <li class="list-group-item"><strong>Katilim Turu:</strong> ${katilimTuru}</li>
                        <li class="list-group-item"><strong>Mesaj:</strong> ${mesaj}</li>
                    </ul>
                </div>
            </div>
        `;
    });

    basvuruFormu.addEventListener("reset", () => {
        uyariAlani.classList.add("d-none");
        uyariAlani.textContent = "";
        sonucAlani.innerHTML = "<div class=\"alert alert-info mb-0\">Henuz basvuru ozeti olusturulmadi. Formu doldurduktan sonra sonuc burada gorunecek.</div>";
    });
}
