document.getElementById('filter').onclick = function filterTypeCategory(){

  document.querySelectorAll('#results div').forEach(el => el.style.display = 'none')

  const filter_category = document.querySelector('select[name="filter_category"]').value
  const filter_type = document.querySelector('select[name="filter_type"]').value

  document.querySelectorAll(`[data-category="${filter_category}"][data-type="${filter_type}"]`).forEach(el => el.style.display = 'block')
}