"use strict";

document.documentElement.classList.add("has-js");

const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

function setTheme(theme, persist = true) {
  const isDark = theme === "dark";
  root.dataset.theme = isDark ? "dark" : "light";
  if (themeButton) {
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.setAttribute("aria-label", isDark ? "Açık temayı aç" : "Koyu temayı aç");
    const label = themeButton.querySelector(".theme-label");
    if (label) label.textContent = isDark ? "Koyu" : "Açık";
  }
  if (persist) {
    try {
      localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    } catch (error) {
      console.warn("Tema tercihi bu tarayıcıda kaydedilemedi.", error);
    }
  }
}

if (themeButton) {
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("portfolio-theme");
  } catch (error) {
    console.warn("Kaydedilmiş tema tercihi okunamadı.", error);
  }
  const preferredTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(preferredTheme, false);
  themeButton.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("menu-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("menu-open", !isOpen);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

const searchInput = document.querySelector("#project-search");
const categoryFilter = document.querySelector("#project-filter");
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const resultCount = document.querySelector("[data-result-count]");
const emptyState = document.querySelector("[data-empty-state]");

function filterProjects() {
  if (!searchInput || !categoryFilter || projectCards.length === 0) return;
  const query = searchInput.value.trim().toLocaleLowerCase("tr");
  const category = categoryFilter.value;
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const matchesText = (card.dataset.search || card.textContent).toLocaleLowerCase("tr").includes(query);
    const matchesCategory = category === "all" || card.dataset.category === category;
    const isVisible = matchesText && matchesCategory;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  if (resultCount) resultCount.textContent = `${visibleCount} çalışma kartı`;
  if (emptyState) emptyState.hidden = visibleCount > 0;
}

if (searchInput && categoryFilter) {
  searchInput.addEventListener("input", filterProjects);
  categoryFilter.addEventListener("change", filterProjects);
}

const budgetForm = document.querySelector("[data-budget-form]");
const budgetRows = document.querySelector("[data-budget-rows]");
const budgetTable = document.querySelector("[data-budget-table]");
const budgetEmpty = document.querySelector("[data-budget-empty]");
const budgetStatus = document.querySelector("[data-budget-status]");
const clearBudgetButton = document.querySelector("[data-clear-budget]");
if (
  budgetForm instanceof HTMLFormElement &&
  budgetRows instanceof HTMLTableSectionElement &&
  budgetTable instanceof HTMLTableElement &&
  budgetEmpty &&
  budgetStatus &&
  clearBudgetButton
) {
  const entries = [];
  const formatCurrency = (amount) => new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 2,
  }).format(amount);

  const renderBudget = () => {
    const income = entries.reduce((sum, entry) => sum + (entry.type === "income" ? entry.amount : 0), 0);
    const expense = entries.reduce((sum, entry) => sum + (entry.type === "expense" ? entry.amount : 0), 0);
    const incomeOutput = document.querySelector("[data-total-income]");
    const expenseOutput = document.querySelector("[data-total-expense]");
    const balanceOutput = document.querySelector("[data-balance]");
    if (incomeOutput) incomeOutput.textContent = formatCurrency(income);
    if (expenseOutput) expenseOutput.textContent = formatCurrency(expense);
    if (balanceOutput) balanceOutput.textContent = formatCurrency(income - expense);

    budgetRows.replaceChildren();
    entries.forEach((entry) => {
      const row = document.createElement("tr");
      [entry.type === "income" ? "Gelir" : "Gider", entry.description, formatCurrency(entry.amount)].forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.append(cell);
      });
      budgetRows.append(row);
    });
    budgetTable.hidden = entries.length === 0;
    budgetEmpty.hidden = entries.length > 0;
    clearBudgetButton.disabled = entries.length === 0;
  };

  budgetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!budgetForm.reportValidity()) {
      budgetStatus.textContent = "Lütfen açıklama ve geçerli bir tutar gir.";
      return;
    }

    const formData = new FormData(budgetForm);
    const description = String(formData.get("description") || "").trim();
    const amount = Number(formData.get("amount"));
    if (!description || !Number.isFinite(amount) || amount <= 0) {
      budgetStatus.textContent = "Açıklama ve sıfırdan büyük geçerli bir tutar gerekli.";
      return;
    }

    entries.unshift({
      type: String(formData.get("type")),
      description,
      amount,
    });
    renderBudget();
    budgetForm.reset();
    budgetStatus.textContent = "Kayıt bu oturum için eklendi; sayfayı yenileyince silinecek.";
  });

  clearBudgetButton.addEventListener("click", () => {
    entries.length = 0;
    renderBudget();
    budgetStatus.textContent = "Bu oturumdaki kayıtlar temizlendi.";
  });
}

const boatTypeFilter = document.querySelector("#boat-type-filter");
const boatPriceFilter = document.querySelector("#boat-price-filter");
const boatCards = Array.from(document.querySelectorAll(".boat-card"));
const boatCount = document.querySelector("[data-boat-count]");
const boatsEmpty = document.querySelector("[data-boats-empty]");
function filterBoats() {
  if (!boatTypeFilter || !boatPriceFilter || boatCards.length === 0) return;
  const selectedType = boatTypeFilter.value;
  const maxPrice = boatPriceFilter.value === "all" ? Infinity : Number(boatPriceFilter.value);
  let visibleCount = 0;

  boatCards.forEach((card) => {
    const matchesType = selectedType === "all" || card.dataset.boatType === selectedType;
    const matchesPrice = Number(card.dataset.boatPrice) <= maxPrice;
    card.hidden = !(matchesType && matchesPrice);
    if (!card.hidden) visibleCount += 1;
  });

  if (boatCount) boatCount.textContent = `${visibleCount} örnek ilan`;
  if (boatsEmpty) boatsEmpty.hidden = visibleCount > 0;
}
if (boatTypeFilter && boatPriceFilter) {
  boatTypeFilter.addEventListener("change", filterBoats);
  boatPriceFilter.addEventListener("change", filterBoats);
}

const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
if (contactForm instanceof HTMLFormElement && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = contactForm.elements.namedItem("name");
    const messageInput = contactForm.elements.namedItem("message");
    if (nameInput instanceof HTMLInputElement && nameInput.value.trim().length < 2) {
      formStatus.textContent = "Ad en az 2 karakter olmalıdır.";
      nameInput.focus();
      return;
    }
    if (messageInput instanceof HTMLTextAreaElement && messageInput.value.trim().length < 10) {
      formStatus.textContent = "Mesaj en az 10 karakter olmalıdır.";
      messageInput.focus();
      return;
    }
    if (!contactForm.reportValidity()) {
      formStatus.textContent = "Lütfen işaretli alanları kontrol edip tekrar dene.";
      return;
    }
    formStatus.textContent = "Alanlar doğrulandı. Bu demo form mesajı göndermedi ve herhangi bir veri kaydetmedi.";
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
