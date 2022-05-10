const d = document;
let cookie;
const $span = d.getElementById("cookies"),
	$acept = d.getElementById("acept"),
	$only = d.getElementById("no");

//si en el local hay una clave cookies
if (localStorage.getItem("cookies")) {
	cookie = localStorage.getItem("cookies");
}
//si no existe la clave (primera vez que entra a la pag)
else {
	cookie = "no";
}
//guarda en local
localStorage.setItem("cookies", cookie);

d.addEventListener("click", (e) => {
	if (e.target === $acept) {
		localStorage.setItem("cookies", "yes");
		$span.classList.add("displayNone");
		console.log($span.classList);
	}
});

if (localStorage.getItem("cookies") === "yes") {
	$span.classList.add("displayNone");
}
