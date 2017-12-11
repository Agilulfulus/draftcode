(function() {
	var inner = ``;
	for (i in lessons){
		var lesson = lessons[i];
		var score = localStorage.getItem(lesson.id);
		var available = (i == 0 || localStorage.getItem(lessons[i - 1].id) > 0.75);
		inner+=`<${(available ? `a href="${lesson.id}.html"` : "div")} class="tree-box" style="opacity:${(available ? "1" : "0.2")}">
					<div class="progress" style="width:${score * 100}%"></div>
					<div class="tree-label">${lesson.title}</div>
					${lesson.teachingWords.join(", ")}
				</${(available ? "a" : "div")}>`
	}

	document.getElementById("tree").innerHTML = inner;
})();