/* Fictional notice examples only. These are not official community announcements. */
const sampleNotices = [
  {id:'notice-01',category:'Vivah Parichay',title:'Vivah Parichay gathering',date:'SAMPLE EDITION',text:'Example copy for a future, organizer-confirmed matrimonial introduction gathering. No event is scheduled from this sample notice.',image:'photo-1757598080328-f72ffa0d4605'},
  {id:'notice-02',category:'Guidance',title:'Conversations before marriage',date:'SAMPLE EDITION',text:'Example copy for a practical session about communication, shared expectations and questions families may want to discuss before marriage.',image:'photo-1722953544956-192125062800'},
  {id:'notice-03',category:'Gallery',title:'Share a wedding memory',date:'SAMPLE EDITION',text:'Example copy inviting families to contribute wedding photographs, with the rights and consent of every recognizable person confirmed first.',image:'photo-1677691257363-eebd2abeafec'}
];
const noticeImage = (id,width=1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`;
const noticeEscape = value => String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function noticeCard(notice) {
  return `<article class="col-md-6 col-lg-4"><div class="notice-sample-card"><div class="notice-sample-cover"><img loading="lazy" src="${noticeImage(notice.image,720)}" alt="Indian wedding stock photography used as an illustration, representative wedding photo"></div><div class="notice-sample-body"><span class="notice-sample-badge"><i class="bi bi-stars"></i> SAMPLE NOTICE</span><p class="data-source mt-3 mb-1">${notice.date}</p><h2>${noticeEscape(notice.title)}</h2><p>${noticeEscape(notice.text)}</p><a href="announcement-details.html?id=${encodeURIComponent(notice.id)}">View sample details <i class="bi bi-arrow-up-right"></i></a></div></div></article>`;
}
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('[data-notices]');
  const renderList = () => {
    if (!list) return;
    const search = document.querySelector('[data-notice-search]');
    const category = document.querySelector('[data-notice-category]');
    const term = search?.value.trim().toLocaleLowerCase() || '';
    const selected = category?.value || '';
    const matches = sampleNotices.filter(notice => (!term || `${notice.title} ${notice.text} ${notice.category}`.toLocaleLowerCase().includes(term)) && (!selected || notice.category===selected));
    list.innerHTML = matches.length ? matches.map(noticeCard).join('') : '<div class="col-12"><div class="notice-empty-state"><span><i class="bi bi-search"></i></span><h2>Try another search phrase</h2><p>Choose a different category or search term to explore the notice examples.</p></div></div>';
  };
  document.querySelector('[data-notice-search]')?.addEventListener('input',renderList);
  document.querySelector('[data-notice-category]')?.addEventListener('change',renderList);
  renderList();

  const detail = document.querySelector('[data-announcement-detail]');
  if (detail) {
    const notice = sampleNotices.find(item=>item.id===new URLSearchParams(location.search).get('id'));
    if (!notice) {
      detail.innerHTML='<section class="profile-unavailable"><div class="profile-unavailable-mark"><i class="bi bi-megaphone"></i></div><span class="section-overline">COMMUNITY BULLETIN</span><h1>Explore community announcements</h1><p>Browse the notice examples and community updates on the announcements page.</p><a class="btn btn-brand" href="samaj-news.html">Browse sample notices <i class="bi bi-arrow-right ms-2"></i></a></section>';
      return;
    }
    document.title=`${notice.title} · Sample notice | Vaishnav Samaj`;
    detail.innerHTML=`<article class="notice-detail-sample"><img src="${noticeImage(notice.image,1200)}" alt="Illustrative Indian wedding stock photo"><span class="notice-sample-badge"><i class="bi bi-stars"></i> SAMPLE NOTICE</span><p class="data-source mt-3">${notice.date} · ${noticeEscape(notice.category)}</p><h1>${noticeEscape(notice.title)}</h1><p>${noticeEscape(notice.text)}</p><p>A sample layout for community announcements and wedding updates.</p><a href="samaj-news.html" class="text-arrow d-inline-block mt-4">Back to announcements <i class="bi bi-arrow-left"></i></a></article>`;
  }
});
