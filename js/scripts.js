String.prototype.toCapitalizeCase = function() {
	return this.replace(/(?:^|\s)\S/g, function(a) {
		return a.toUpperCase();
	});
};

function fadeOut(el, el2) {
	el.style.opacity = 1;

	(function fade() {
		if ((el.style.opacity -= 0.1) < 0) {
			el.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}

		el2 && el2.focus();
	})();
}

function fadeIn(el, display) {
	el.style.opacity = 0;
	el.style.display = display || "block";

	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += 0.1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
}

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".btn").addEventListener(
		"click",
		function() {
			var text = document.getElementById("textarea").value;
			var type = document.querySelector("#select").value;

			var newText = "";
			switch (type) {
				case "uppercase":
					newText = text.toUpperCase();
					break;
				case "lowercase":
					newText = text.toLowerCase();
					break;
				case "capitalize":
					newText = text.toCapitalizeCase();
					break;
			}

			if (newText !== "") {
				var resultText = document.querySelector("#result textarea");
				if (resultText) {
					resultText.textContent = newText;
				} else {
					var element = document.createElement("textarea");
					element.classList.add("form-control");
					element.textContent = newText;
					document.getElementById("result").appendChild(element);
				}

				this.classList.add("success");
				this.textContent = "Converted";

				document.querySelector("#result textarea").select();
				document.execCommand("copy");
				fadeIn(document.getElementById("alert"));

				setTimeout(function() {
					fadeOut(
						document.getElementById("alert"),
						document.querySelector("#result textarea")
					);
				}, 3000);
			}
		},
		false
	);

	// Change Text
	document.getElementById("select").addEventListener("change", function() {
		var btn = document.querySelector(".btn");
		btn.classList.remove("success");
		btn.textContent = "Convert";
	});

	// Close Alert
	document
		.getElementById("alert-close")
		.addEventListener("click", function(event) {
			event.preventDefault();

			fadeOut(
				document.getElementById("alert"),
				document.querySelector("#result textarea")
			);
		});
});
