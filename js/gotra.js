const vaishnavGotraNames = [
  'अग्रावत', 'अनन्तानन्दी', 'अनुभवानन्दी', 'अलखानन्दी', 'कर्मचन्दी', 'कालू जी',
  'कीलावत', 'कुबावत', 'खोजी जी', 'जंगीजी', 'लाहारामी', 'टीलावत', 'तनतुलसी',
  'दिवाकर', 'देवमुरारी', 'धूंध्यानन्दी', 'नरहर्यानन्दी', 'नाभाजी', 'पीपावत',
  'पूर्ण बैराठी', 'भगवन्ननारायणी', 'भड़गी (भृंगी)', 'भावानन्दी', 'मलूकिया',
  'योगानन्दी', 'रामकबीर', 'राधवचेतनी', 'रामथंमणा', 'रामरामायणी', 'रामरावली',
  'रामरंगी', 'लालतुरंगी', 'सुखानन्दी', 'सुरसुरानन्दी', 'हठीनारायणी', 'हनुमानी',
  'केशवव्याणी', 'घमंडी', 'चित्रानागा', 'चर्तुभुजी', 'तत्ववेदी', 'परशुरामी',
  'मधवकाणी', 'राधावल्लभी', 'लपरागोपाली', 'वीरमत्यागी', 'शोभावत', 'ऋषिकेषवी',
  'गोकुलानन्दी', 'विट्ठलानन्दी', 'नित्यानन्दी', 'श्यामानन्दी'
];

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('[data-gotra-search]');
  const list = document.querySelector('[data-gotra-list]');
  const count = document.querySelector('[data-gotra-count]');
  const empty = document.querySelector('[data-gotra-empty]');
  if (!list) return;

  const render = () => {
    const term = input?.value.trim().toLocaleLowerCase() || '';
    const filtered = vaishnavGotraNames.filter(name => name.toLocaleLowerCase().includes(term));
    list.innerHTML = filtered.map(name => `
      <article class="gotra-card">
        <span class="gotra-card-number">${String(vaishnavGotraNames.indexOf(name) + 1).padStart(2, '0')}</span>
        <h3 lang="hi">${name}</h3>
        <span class="gotra-card-mark" aria-hidden="true"><i class="bi bi-flower1"></i></span>
      </article>`).join('');
    if (count) count.textContent = `${filtered.length} of ${vaishnavGotraNames.length} names`;
    if (empty) empty.hidden = filtered.length > 0;
  };

  input?.addEventListener('input', render);
  render();
});
