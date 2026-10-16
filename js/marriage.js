/* Fictional UI examples only. Portraits are Unsplash stock photos, never member photos. */
const fictionalProfileSamples = [
  {id:'bride-01',gender:'Bride',name:'Aanya Vaishnav',gotra:'अग्रावत',age:27,city:'Ahmedabad',education:'MBA',profession:'Product Designer',initials:'AM',height:'5 ft 4 in',about:'Enjoys thoughtful conversations, design, weekend walks and time with family. Looking for a kind and grounded partner who values mutual respect.',family:'Close-knit family · Ahmedabad',values:'Curiosity · Family · Balance',image:'https://images.pexels.com/photos/31832651/pexels-photo-31832651.jpeg'},
  {id:'bride-02',gender:'Bride',name:'Kavya Vaishnav',gotra:'अनन्तानन्दी',age:25,city:'Jaipur',education:'M.Sc.',profession:'Research Analyst',initials:'KD',height:'5 ft 3 in',about:'A curious learner who loves books, art and exploring new places. Hopes to build a partnership rooted in friendship and shared growth.',family:'Family-oriented · Jaipur',values:'Learning · Warmth · Growth',image:'photo-1742891602157-68b91c4d4355'},
  {id:'bride-03',gender:'Bride',name:'Riya Vaishnav',gotra:'अनुभवानन्दी',age:29,city:'Mumbai',education:'B.Arch.',profession:'Architect',initials:'RT',height:'5 ft 5 in',about:'Finds inspiration in architecture, food and culture. Values kindness, openness and a life with room for both ambition and family.',family:'Supportive family · Mumbai',values:'Creativity · Openness · Care',image:'photo-1770747874421-b3d03becec39'},
  {id:'bride-04',gender:'Bride',name:'Nisha Vaishnav',gotra:'अलखानन्दी',age:26,city:'Vadodara',education:'M.Com.',profession:'Finance Professional',initials:'NS',height:'5 ft 2 in',about:'Practical, cheerful and close to family. Enjoys music, cooking with relatives and building a meaningful career.',family:'Warm family · Vadodara',values:'Kindness · Stability · Family',image:'https://images.pexels.com/photos/31832651/pexels-photo-31832651.jpeg'},
  {id:'groom-01',gender:'Groom',name:'Aarav Vaishnav',gotra:'कर्मचन्दी',age:29,city:'Pune',education:'B.Tech.',profession:'Software Engineer',initials:'AS',height:'5 ft 10 in',about:'Enjoys building things, exploring local cafés and spending time outdoors. Believes partnership means listening, growing and showing up for each other.',family:'Close-knit family · Pune',values:'Respect · Curiosity · Partnership',image:'https://images.pexels.com/photos/32152727/pexels-photo-32152727.jpeg'},
  {id:'groom-02',gender:'Groom',name:'Dhruv Vaishnav',gotra:'कालू जी',age:31,city:'Surat',education:'CA',profession:'Chartered Accountant',initials:'DM',height:'5 ft 9 in',about:'Values a thoughtful, balanced life. In his free time he enjoys sport, travel and family gatherings.',family:'Supportive family · Surat',values:'Balance · Honesty · Family',image:'photo-1744804298366-ba49571f5022'},
  {id:'groom-03',gender:'Groom',name:'Rohan Vaishnav',gotra:'कीलावत',age:27,city:'Indore',education:'M.Des.',profession:'UX Designer',initials:'RD',height:'5 ft 11 in',about:'Creative and easy-going, with a love for visual storytelling, music and discovering new food spots.',family:'Family-oriented · Indore',values:'Creativity · Empathy · Joy',image:'photo-1759906766080-82b785c61f51'},
  {id:'groom-04',gender:'Groom',name:'Vivaan Vaishnav',gotra:'कुबावत',age:30,city:'Rajkot',education:'MBA',profession:'Entrepreneur',initials:'VJ',height:'5 ft 8 in',about:'Passionate about learning and building a thoughtful future. Enjoys cricket, road trips and time with extended family.',family:'Warm family · Rajkot',values:'Ambition · Humility · Family',image:'https://images.pexels.com/photos/32152727/pexels-photo-32152727.jpeg'}
];
const imageUrl = (source, width=720) => source.startsWith('http') ? `${source}?auto=compress&cs=tinysrgb&w=${width}` : `https://images.unsplash.com/${source}?auto=format&fit=crop&w=${width}&q=78`;
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function profileCard(profile, compact=false) {
  const imageAlt = `Representative stock portrait of an Indian ${profile.gender==='Bride'?'bride':'groom'}; not the sample profile subject.`;
  return `<article class="profile-card sample-profile-card ${compact?'sample-profile-card-compact':''}">
    <div class="profile-portrait sample-profile-photo ${profile.gender==='Bride'?'portrait-bride':'portrait-groom'}">
      <img src="${imageUrl(profile.image,compact?620:760)}" alt="${imageAlt}" loading="lazy">
      <span class="fictional-stamp"><i class="bi bi-stars"></i> SAMPLE PROFILE</span>
      <span class="profile-photo-caption">INDIAN WEDDING PORTRAIT</span>
    </div>
    <div class="profile-card-body"><div class="profile-card-heading"><div><span class="profile-gender">${profile.gender.toUpperCase()} · SAMPLE PROFILE</span><h3>${escapeHTML(profile.name)}</h3></div><span class="profile-age">${profile.age}</span></div>
      <p class="profile-meta"><i class="bi bi-geo-alt"></i>${escapeHTML(profile.city)} <span>·</span> ${escapeHTML(profile.education)}</p><p class="profile-profession">${escapeHTML(profile.profession)}</p><p class="profile-gotra" lang="hi"><i class="bi bi-diagram-3"></i> Gotra: ${escapeHTML(profile.gotra)}</p>
      <div class="profile-tags"><span><i class="bi bi-rulers"></i>${escapeHTML(profile.height)}</span><span><i class="bi bi-heart"></i>${escapeHTML(profile.values.split(' · ')[0])}</span></div>
      <a class="profile-view-link" href="marriage-profile.html?id=${encodeURIComponent(profile.id)}">View sample profile <i class="bi bi-arrow-up-right"></i></a>
    </div></article>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('[data-profile-list]');
  const featured = document.querySelector('[data-featured-profiles]');
  if (featured) featured.innerHTML = fictionalProfileSamples.filter(profile => ['bride-01','groom-01','bride-02','groom-02'].includes(profile.id)).map(profile => `<div class="col-sm-6 col-xl-3">${profileCard(profile,true)}</div>`).join('');

  if (grid) {
    const query = document.querySelector('[data-profile-search]');
    const gender = document.querySelector('[data-profile-gender]');
    const city = document.querySelector('[data-profile-city]');
    const age = document.querySelector('[data-profile-age]');
    const education = document.querySelector('[data-profile-education]');
    const profession = document.querySelector('[data-profile-profession]');
    const sort = document.querySelector('[data-profile-sort]');
    const groups = ['All','Bride','Groom'];
    const tabForGroup = group => document.querySelector(`#${group.toLowerCase()}-profiles-tab`);
    const paneForGroup = group => document.querySelector(`#${group.toLowerCase()}ProfilePane`);
    const showGroup = group => {
      if (gender) gender.value = group;
      const tab = tabForGroup(group);
      if (tab && window.bootstrap?.Tab) window.bootstrap.Tab.getOrCreateInstance(tab).show();
    };
    const filter = () => {
      const term = query?.value.trim().toLocaleLowerCase() || '';
      const cityTerm = city?.value.trim().toLocaleLowerCase() || '';
      const ageBounds = age?.value ? age.value.split('-').map(Number) : null;
      const matchingProfiles = fictionalProfileSamples.filter(profile =>
        (!cityTerm || profile.city.toLocaleLowerCase().includes(cityTerm)) &&
        (!term || `${profile.name} ${profile.city} ${profile.profession} ${profile.education}`.toLocaleLowerCase().includes(term)) &&
        (!ageBounds || (profile.age>=ageBounds[0] && profile.age<=ageBounds[1])) &&
        (!education?.value || profile.education===education.value) &&
        (!profession?.value || profile.profession===profession.value));
      let total = 0;
      groups.forEach(group => {
        let results = group === 'All' ? [...matchingProfiles] : matchingProfiles.filter(profile => profile.gender === group);
        if (sort?.value==='age') results.sort((a,b)=>a.age-b.age);
        if (sort?.value==='city') results.sort((a,b)=>a.city.localeCompare(b.city));
        const list = paneForGroup(group)?.querySelector('[data-profile-list]');
        const count = paneForGroup(group)?.querySelector('[data-profile-count]');
        const empty = paneForGroup(group)?.querySelector('[data-profile-empty]');
        if (list) list.innerHTML = results.map(profile=>`<div>${profileCard(profile)}</div>`).join('');
        if (count) count.textContent = `${results.length} ${group === 'All' ? 'profile' : group.toLowerCase() + ' profile'} example${results.length===1?'':'s'}`;
        if (empty) empty.hidden = results.length > 0;
        if (group !== 'All') total += results.length;
      });
      document.querySelectorAll('[data-filter-summary]').forEach(label => label.textContent = `${total} ${total===1?'profile':'profiles'}`);
    };
    [query,city,age,education,profession,sort].forEach(control => control?.addEventListener(control.type==='search'?'input':'change',filter));
    gender?.addEventListener('change', () => showGroup(gender.value || 'All'));
    document.querySelectorAll('[data-bs-toggle="pill"][aria-controls$="ProfilePane"]').forEach(tab => {
      tab.addEventListener('shown.bs.tab', () => {
        if (gender) gender.value = tab.id === 'bride-profiles-tab' ? 'Bride' : tab.id === 'groom-profiles-tab' ? 'Groom' : 'All';
      });
    });
    document.querySelectorAll('[data-gender-shortcut]').forEach(link => link.addEventListener('click', () => {
      const selectedGender = link.dataset.genderShortcut || 'All';
      showGroup(selectedGender);
    }));
    document.querySelector('[data-profile-reset]')?.addEventListener('click', () => {
      [query,city,age,education,profession].forEach(control=>{if(control)control.value='';});
      if (sort) sort.value='recommended';
      showGroup('All');
      filter();
    });
    const requestedGender = new URLSearchParams(location.search).get('gender');
    if (['Bride','Groom'].includes(requestedGender)) showGroup(requestedGender);
    filter();
  }

  const detail = document.querySelector('[data-profile-detail]');
  if (detail) {
    const id = new URLSearchParams(location.search).get('id');
    const profile = fictionalProfileSamples.find(item=>item.id===id);
    if (!profile) {
      detail.innerHTML='<section class="profile-unavailable"><div class="profile-unavailable-mark"><i class="bi bi-person-vcard"></i></div><span class="section-overline">PROFILE EXAMPLES</span><h1>Explore the profile examples</h1><p>Choose a profile from the directory to view its details.</p><a class="btn btn-brand" href="marriage.html">Browse sample profiles <i class="bi bi-arrow-right ms-2"></i></a></section>';
    } else {
      document.title=`${profile.name} · Sample profile | Vaishnav Samaj`;
      detail.innerHTML=`<section class="sample-detail-hero"><div class="sample-detail-image"><img src="${imageUrl(profile.image,1200)}" alt="Representative stock portrait of an Indian ${profile.gender==='Bride'?'bride':'groom'}; not ${escapeHTML(profile.name)}" fetchpriority="high"><span class="fictional-stamp"><i class="bi bi-stars"></i> PROFILE EXAMPLE</span><span class="profile-photo-caption">WEDDING PROFILE</span></div></section><div class="container sample-detail-wrap"><a href="marriage.html" class="detail-back"><i class="bi bi-arrow-left"></i> Back to examples</a><div class="sample-detail-layout"><article class="sample-detail-copy"><span class="profile-gender">${profile.gender.toUpperCase()} · SAMPLE PROFILE</span><h1>${escapeHTML(profile.name)}</h1><p class="detail-location"><i class="bi bi-geo-alt"></i> ${escapeHTML(profile.city)} <span>·</span> ${profile.age} years</p><div class="detail-pills"><span>${escapeHTML(profile.education)}</span><span>${escapeHTML(profile.profession)}</span></div><span class="section-overline d-block mt-4">A LITTLE ABOUT THIS SAMPLE</span><h2>Looking for a connection built on <em>understanding.</em></h2><p>${escapeHTML(profile.about)}</p><div class="detail-facts"><div><span>AGE</span><b>${profile.age} years</b></div><div><span>HEIGHT</span><b>${escapeHTML(profile.height)}</b></div><div><span>EDUCATION</span><b>${escapeHTML(profile.education)}</b></div><div><span>WORK</span><b>${escapeHTML(profile.profession)}</b></div><div><span>BASED IN</span><b>${escapeHTML(profile.city)}</b></div><div><span>GOTRA</span><b lang="hi">${escapeHTML(profile.gotra)}</b></div><div><span>FAMILY</span><b>${escapeHTML(profile.family)}</b></div></div><h3>Values and interests</h3><div class="detail-value-tags">${profile.values.split(' · ').map(value=>`<span>${escapeHTML(value)}</span>`).join('')}</div></article><aside class="detail-contact-card"><span class="contact-lock"><i class="bi bi-shield-lock"></i></span><span class="section-overline">ILLUSTRATIVE PROFILE</span><h2>Thoughtful details, with privacy in mind</h2><p>This fictional example shows the profile format. Real listings should appear only with consent and after moderation.</p><a class="btn btn-brand w-100" href="marriage.html">Explore profile examples</a><small><i class="bi bi-lock-fill"></i> No real member or contact details are shown.</small></aside></div></div>`;
    }
  }
});
