const newsItems = document.querySelectorAll(".news-list > .news-item");
const newsToggle = document.querySelector(".news-toggle");
const visibleNewsCount = 5;
const hiddenNewsItems = Array.from(newsItems).slice(visibleNewsCount);

if (hiddenNewsItems.length > 0) {
	hiddenNewsItems.forEach((item) => {
		item.hidden = true;
	});
	newsToggle.hidden = false;
	newsToggle.textContent = `過去のお知らせを表示（${hiddenNewsItems.length}件）`;

	newsToggle.addEventListener("click", () => {
		const isExpanded = newsToggle.getAttribute("aria-expanded") === "true";
		hiddenNewsItems.forEach((item) => {
			item.hidden = isExpanded;
		});
		newsToggle.setAttribute("aria-expanded", String(!isExpanded));
		newsToggle.textContent = isExpanded
			? `過去のお知らせを表示（${hiddenNewsItems.length}件）`
			: "新着情報を閉じる";
	});
}