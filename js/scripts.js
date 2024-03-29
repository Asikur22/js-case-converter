String.prototype.toCapitalizeCase = function() {
	return this.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
		console.log(a);
		return a.toUpperCase();
	});
};

jQuery(document).ready(function($) {
	$("#btn-convert").on("click", function(event) {
		event.preventDefault();

		var text = $("#textarea").val();
		var type = $("#select").val();

		var newText = "";
		switch (type) {
			case "uppercase":
				newText = $("<div/>")
					.html(text)
					.text()
					.toUpperCase();
				break;
			case "lowercase":
				newText = text.toLowerCase();
				break;
			case "capitalize":
				newText = text.toCapitalizeCase();
				break;
			case "normalize":
				newText = text
					.replace(/(\r\n|\n|\r)/gm, " ")
					.replace(/\s+/g, " ");
				break;
		}

		if ($("#checkbox").is(":checked")) {
			newText = newText
				.replace(/(\r\n|\n|\r)/gm, " ")
				.replace(/\s+/g, " ");
		}

		if (newText !== "") {
			$("#result").html(
				'<div class="form-item"><textarea class="form-control">' +
					newText +
					"</textarea></div>"
			);

			$(this)
				.addClass("success")
				.text("Text Converted");

			$("#result textarea").select();
			document.execCommand("copy");
			$("#alert").fadeIn();

			setTimeout(function() {
				$("#alert").fadeOut("fast");
				$("#result textarea").focus();
			}, 3000);
		}
	});

	// Change Text
	$("#select").on("change", function() {
		if (this.value == "normalize") {
			$("#checkbox")
				.attr("checked", true)
				.attr("disabled", true);
		} else {
			$("#checkbox").attr("disabled", false);
		}
	});

	// Change Text
	$("#select, #textarea, #checkbox").on("change", function() {
		$("#btn-convert")
			.removeClass("success")
			.text("Convert");
	});

	// Show clear button
	$(document).on("focus", "textarea", function() {
		var button = $("<button/>", {
			text: "Clear",
			type: "button",
			id: "btn-clear",
			class: "btn",
			click: function() {
				$(this)
					.siblings("textarea")
					.val("")
					.focus();
			}
		});

		$(this).after(button);
	});

	// Close Alert
	$("#alert-close").on("click", function(event) {
		event.preventDefault();

		$("#alert").fadeOut("fast");
		$("#result textarea").focus();
	});
});
