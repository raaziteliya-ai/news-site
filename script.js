// ========== NEWS DATA ==========
// Har din alag news dikhegi automatically
const allNews = [
    { cat: 'मुख्य खबर', title: 'लोकसभा में बड़ा फैसला: नई आर्थिक नीति पर मुहर', img: 'https://picsum.photos/700/350?random=1', time: '2 घंटे पहले', desc: 'संसद के बजट सत्र में आज सरकार ने ऐतिहासिक आर्थिक सुधार विधेयक पास किया। वित्त मंत्री ने कहा कि इससे 2 करोड़ नए रोज़गार पैदा होंगे और देश की GDP 8% तक पहुंचेगी। छोटे व्यापारियों को टैक्स में राहत दी जाएगी।' },
    { cat: 'राजनीति', title: 'चुनाव आयोग का बड़ा फैसला, 3 राज्यों में होंगे उपचुनाव', img: 'https://picsum.photos/700/350?random=2', time: '3 घंटे पहले', desc: 'चुनाव आयोग ने तीन राज्यों में उपचुनाव की तारीखों का ऐलान किया। उत्तर प्रदेश, बिहार और राजस्थान में कुल 12 सीटों पर चुनाव होंगे।' },
    { cat: 'खेल', title: 'भारत ने ऑस्ट्रेलिया को टेस्ट में 8 विकेट से रौंदा', img: 'https://picsum.photos/700/350?random=3', time: '4 घंटे पहले', desc: 'भारतीय क्रिकेट टीम ने ऑस्ट्रेलिया को उनके घर में 8 विकेट से हराकर ऐतिहासिक जीत दर्ज की। रोहित शर्मा ने 150 रन की पारी खेली।' },
    { cat: 'मनोरंजन', title: 'बॉलीवुड की बड़ी फिल्म का ट्रेलर रिलीज, 5 करोड़ व्यूज़', img: 'https://picsum.photos/700/350?random=4', time: '5 घंटे पहले', desc: 'बॉलीवुड की सबसे बड़ी फिल्म का ट्रेलर आज रिलीज हुआ। पहले 2 घंटे में ही 5 करोड़ व्यूज़ मिले। फिल्म अगले महीने सिनेमाघरों में आएगी।' },
    { cat: 'व्यापार', title: 'शेयर बाज़ार में उछाल, सेंसेक्स 800 अंक चढ़ा', img: 'https://picsum.photos/700/350?random=5', time: '6 घंटे पहले', desc: 'आज शेयर बाज़ार में जबरदस्त तेजी देखी गई। सेंसेक्स 800 अंक चढ़कर 75,000 के पार पहुंच गया।' },
    { cat: 'देश', title: 'दिल्ली में भारी बारिश की चेतावनी, अलर्ट जारी', img: 'https://picsum.photos/700/350?random=6', time: '4 घंटे पहले', desc: 'मौसम विभाग ने दिल्ली और NCR में अगले 48 घंटों में भारी बारिश की चेतावनी जारी की। स्कूल बंद रहेंगे।' },
    { cat: 'टेक्नोलॉजी', title: 'भारत ने बनाया सबसे सस्ता 5G फोन, कीमत ₹3,999', img: 'https://picsum.photos/700/350?random=7', time: '5 घंटे पहले', desc: 'भारतीय कंपनी ने दुनिया का सबसे सस्ता 5G स्मार्टफोन लॉन्च किया। मात्र ₹3,999 में 5000mAh बैटरी और 50MP कैमरा।' },
    { cat: 'स्वास्थ्य', title: 'AIIMS ने नई कैंसर दवा खोजी, दुनियाभर में सराहना', img: 'https://picsum.photos/700/350?random=8', time: '6 घंटे पहले', desc: 'AIIMS दिल्ली के वैज्ञानिकों ने एक नई कैंसर दवा खोजी है जो स्तन कैंसर को 90% तक ठीक कर सकती है।' },
    { cat: 'विदेश', title: 'अमेरिका-चीन व्यापार युद्ध में नया मोड़, भारत को फायदा', img: 'https://picsum.photos/700/350?random=9', time: '7 घंटे पहले', desc: 'अमेरिका ने चीन पर नए टैरिफ लगाए। इससे भारत को बड़ा फायदा मिलने की उम्मीद है क्योंकि कई कंपनियां भारत आ सकती हैं।' },
    { cat: 'खेल', title: 'IPL 2026: मुंबई इंडियंस ने फाइनल जीता', img: 'https://picsum.photos/700/350?random=10', time: '8 घंटे पहले', desc: 'मुंबई इंडियंस ने IPL 2026 का खिताब जीत लिया। फाइनल में चेन्नई सुपर किंग्स को 20 रनों से हराया।' },
    { cat: 'ऑटो', title: 'Tata की नई Electric SUV, एक चार्ज में 500 KM', img: 'https://picsum.photos/700/350?random=11', time: '9 घंटे पहले', desc: 'Tata Motors ने नई इलेक्ट्रिक SUV लॉन्च की जो एक बार चार्ज पर 500 किलोमीटर चलती है। कीमत ₹18 लाख से शुरू।' },
    { cat: 'देश', title: 'UP में 10 नए एक्सप्रेसवे का ऐलान, 50,000 करोड़ की योजना', img: 'https://picsum.photos/700/350?random=12', time: '10 घंटे पहले', desc: 'उत्तर प्रदेश सरकार ने 10 नए एक्सप्रेसवे बनाने का ऐलान किया। इससे 5 लाख लोगों को रोज़गार मिलेगा।' },
    { cat: 'विदेश', title: 'पाकिस्तान में बड़ा भूकंप, 100 से ज़्यादा लोग प्रभावित', img: 'https://picsum.photos/700/350?random=13', time: '11 घंटे पहले', desc: 'पाकिस्तान के बलूचिस्तान में 6.2 तीव्रता का भूकंप आया। राहत और बचाव कार्य जारी है।' },
    { cat: 'टेक्नोलॉजी', title: 'ISRO का नया मिशन सफल, चांद पर पानी की खोज', img: 'https://picsum.photos/700/350?random=14', time: '1 घंटे पहले', desc: 'भारत के अंतरिक्ष संगठन ISRO ने चंद्रमा पर पानी के नए स्रोत खोजने का दावा किया। यह खोज ऐतिहासिक मानी जा रही है।' },
    { cat: 'स्वास्थ्य', title: 'डेंगू का प्रकोप: 5 राज्यों में अलर्ट जारी', img: 'https://picsum.photos/700/350?random=15', time: '3 घंटे पहले', desc: 'स्वास्थ्य मंत्रालय ने डेंगू के बढ़ते मामलों को लेकर 5 राज्यों में अलर्ट जारी किया। लोगों से सावधानी बरतने की अपील की गई।' }
];

// ========== DAILY ROTATION ==========
// Har din alag news dikhegi
var today = new Date();
var dayNum = today.getDate() + today.getMonth() * 31;
var startIndex = dayNum % allNews.length;

function getTodayNews() {
    var news = [];
    for (var i = 0; i < allNews.length; i++) {
        news.push(allNews[(startIndex + i) % allNews.length]);
    }
    return news;
}

var currentNews = getTodayNews();
var currentFilter = 'होम';

// ========== DATE TIME ==========
function showDateTime() {
    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var el = document.getElementById('date-time');
    if (el) el.innerHTML = now.toLocaleDateString('hi-IN', options) + '<br><span style="color:#b22222">' + now.toLocaleTimeString('hi-IN') + '</span>';
}
showDateTime();
setInterval(showDateTime, 1000);

// ========== BREAKING TICKER ==========
var breakingNews = [
    'सरकार का बड़ा फैसला — नई नीति लागू',
    'IPL 2026 का फाइनल आज मुंबई में',
    'शेयर बाज़ार में उछाल, सेंसेक्स 75,000 पार',
    'ISRO का नया मिशन सफल',
    'भारत-ऑस्ट्रेलिया टेस्ट में भारत जीता'
];
var tickerIndex = 0;
function updateTicker() {
    var el = document.getElementById('breaking-ticker');
    if (el) el.textContent = breakingNews[tickerIndex % breakingNews.length];
    tickerIndex++;
}
updateTicker();
setInterval(updateTicker, 4000);

// ========== RENDER NEWS ==========
function renderNews(newsArr) {
    // Hero
    var h = newsArr[0];
    document.getElementById('hero-img').src = h.img;
    document.getElementById('hero-cat').textContent = h.cat;
    document.getElementById('hero-title').textContent = h.title;
    document.getElementById('hero-desc').textContent = h.desc.substring(0, 120) + '...';
    document.getElementById('hero-time').textContent = '⏰ ' + h.time;

    // Sidebar (news 1-4)
    var sidebar = document.getElementById('sidebar-news');
    sidebar.innerHTML = '';
    for (var i = 1; i <= 4 && i < newsArr.length; i++) {
        var n = newsArr[i];
        sidebar.innerHTML += '<div class="side-card" onclick="openModal(' + i + ')" style="cursor:pointer">' +
            '<img src="' + n.img + '" alt="" style="width:90px;height:75px;object-fit:cover;flex-shrink:0">' +
            '<div class="side-info"><span class="side-cat">' + n.cat + '</span><p>' + n.title + '</p></div></div>';
    }

    // News Grid (news 5+)
    var grid = document.getElementById('news-grid');
    grid.innerHTML = '';
    for (var j = 5; j < newsArr.length; j++) {
        var m = newsArr[j];
        grid.innerHTML += '<div class="news-card" onclick="openModal(' + j + ')" style="cursor:pointer">' +
            '<img src="' + m.img + '" alt="" style="width:100%;height:150px;object-fit:cover;display:block">' +
            '<div class="news-info"><span class="news-cat">' + m.cat + '</span>' +
            '<h3>' + m.title + '</h3>' +
            '<span class="news-time">⏰ ' + m.time + '</span></div></div>';
    }
}

// ========== FILTER BY CATEGORY ==========
function filterNews(category, el) {
    currentFilter = category;
    // Nav active
    var links = document.querySelectorAll('.nav-inner a');
    links.forEach(function(l) { l.classList.remove('active'); });
    if (el) el.classList.add('active');

    document.getElementById('section-title').textContent = category === 'होम' ? 'ताज़ा खबरें' : category + ' की खबरें';

    if (category === 'होम') {
        renderNews(currentNews);
    } else {
        var filtered = allNews.filter(function(n) { return n.cat === category; });
        if (filtered.length === 0) {
            document.getElementById('news-grid').innerHTML = '<p style="color:#999;padding:20px;grid-column:1/-1">इस श्रेणी में अभी कोई खबर नहीं है।</p>';
            document.getElementById('sidebar-news').innerHTML = '';
        } else {
            renderNews(filtered.concat(currentNews).slice(0, 15));
        }
    }
    return false;
}

// ========== MODAL ==========
function openModal(index) {
    var news = currentFilter === 'होम' ? currentNews[index] : allNews.filter(function(n){ return n.cat === currentFilter; })[index] || currentNews[index];
    if (!news) news = currentNews[0];
    document.getElementById('modal-category').textContent = news.cat;
    document.getElementById('modal-title').textContent = news.title;
    document.getElementById('modal-img').src = news.img;
    document.getElementById('modal-time').textContent = '⏰ ' + news.time;
    document.getElementById('modal-desc').textContent = news.desc;
    document.getElementById('news-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('news-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Modal background click se band ho
document.getElementById('news-modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// ========== INIT ==========
renderNews(currentNews);
