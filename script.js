// データサンプル
const texts = [
{"name":"イルミネイト","types":["エンジェルハィロゥ","メジャー",""],"text":"EA21｜対象が次に行なうメジャーアクションのダイスを + LV個する。","copyText":"名称：イルミネイト (3) タイミング：メジャー 技能：〈RC〉 難易度：自動成功 対象：― 射程：視界 侵蝕値：2 制限：― 効果：EA21｜対象が次に行なうメジャーアクションのダイスを + LV個する。"},
{"name":"エフェクトレンズ","types":["エンジェルハィロゥ","マイナー",""],"text":"EA21｜そのメインプロセスの間、あなたが行なう攻撃の攻撃力を + [LV+2] する。ただし、その攻撃でエンジェルハィロゥのエフェクトで作成した武器を使用していない場合、この効果は受けられない。","copyText":"名称：エフェクトレンズ (3) タイミング：マイナー 技能：― 難易度：自動成功 対象：自身 射程：至近 侵蝕値：1 制限：― 効果：EA21｜そのメインプロセスの間、あなたが行なう攻撃の攻撃力を + [LV+2] する。ただし、その攻撃でエンジェルハィロゥのエフェクトで作成した武器を使用していない場合、この効果は受けられない。"},
{"name":"オプティカルレンズ","types":["エンジェルハィロゥ","マイナー",""],"text":"EA21｜そのメインプロセスの間、あなたが行なう、エンジェルハィロゥのエフェクトを組み合わせた攻撃の攻撃力を +【感覚】する。ただし、その攻撃の対象は単体でなければならない。このエフェクトは1シーンにLV回まで使用できる。","copyText":"名称：オプティカルレンズ (3) タイミング：マイナー 技能：― 難易度：自動成功 対象：自身 射程：至近 侵蝕値：3 制限：― 効果：EA21｜そのメインプロセスの間、あなたが行なう、エンジェルハィロゥのエフェクトを組み合わせた攻撃の攻撃力を +【感覚】する。ただし、その攻撃の対象は単体でなければならない。このエフェクトは1シーンにLV回まで使用できる。"},
{"name":"ヘヴンアイズ","types":["エンジェルハィロゥ","オート",""],"text":"EA25｜対象が判定を行なう直前に使用する。その判定の達成値を + 10する。ただし、あなたは5点のHPを消費する。このエフェクトはあなたを対象にできず、1シーンに1回まで使用できる。","copyText":"名称：ヘヴンアイズ (1) タイミング：オート 技能：― 難易度：自動成功 対象：単体 射程：視界 侵蝕値：4 制限：0.8 効果：EA25｜対象が判定を行なう直前に使用する。その判定の達成値を + 10する。ただし、あなたは5点のHPを消費する。このエフェクトはあなたを対象にできず、1シーンに1回まで使用できる。"},
{"name":"フラッシュゲイズ","types":["エンジェルハィロゥ","オート",""],"text":"EA25｜対象が判定を行なう直前に使用する。その判定のダイスを ー [LV×2] 個する。このエフェクトは1ラウンドに1回まで使用できる。","copyText":"名称：フラッシュゲイズ (3) タイミング：オート 技能：― 難易度：自動成功 対象：単体 射程：視界 侵蝕値：3 制限：0.8 効果：EA25｜対象が判定を行なう直前に使用する。その判定のダイスを ー [LV×2] 個する。このエフェクトは1ラウンドに1回まで使用できる。"},
{"name":"ウサギの耳","types":["エンジェルハィロゥ","メジャー","イージー"],"text":"EA27｜聴覚の指向性を高めるエフェクト。たとえ雑踏の中であっても、遠く離れた場所にいる人物のささやき声を聞くことができる。また、特定の音のみを聞き分けることも、10キロ以上離れた場所で落ちた針の音を聞くことも可能。GMは必要と感じたなら、〈知覚〉による判定を行なわせてもよい。","copyText":"名称：ウサギの耳 (1) 種別：イージー タイミング：メジャー 技能：― 難易度：自動成功 対象：自身 射程：至近 侵蝕値：― 制限：― 効果：EA27｜聴覚の指向性を高めるエフェクト。たとえ雑踏の中であっても、遠く離れた場所にいる人物のささやき声を聞くことができる。また、特定の音のみを聞き分けることも、10キロ以上離れた場所で落ちた針の音を聞くことも可能。GMは必要と感じたなら、〈知覚〉による判定を行なわせてもよい。"},
{"name":"暗黒の槍","types":["バロール","メジャー",""],"text":"EA29｜このエフェクトを組み合わせた攻撃では、対象の装甲値を無視してダメージを与える。ただし、あなたは5点のHPを消費する。このエフェクトは1シナリオにLV回まで使用できる。","copyText":"名称：暗黒の槍 (3) タイミング：メジャー 技能：シンドローム 難易度：対決 対象：― 射程：― 侵蝕値：3 制限：― 効果：EA29｜このエフェクトを組み合わせた攻撃では、対象の装甲値を無視してダメージを与える。ただし、あなたは5点のHPを消費する。このエフェクトは1シナリオにLV回まで使用できる。"},
{"name":"吸着","types":["バロール","常時","イージー"],"text":"EA35｜重力方向を操作し、手に持っているすべての物体を“落ちない”ようにするエフェクト。たとえ宙に逆さになっても、手にしたシャンパングラスの酒はこぼれない。また、自分の髪の毛や服の裾を任意の方向になびかせることができる。戦闘中にこのエフェクトは効果を持たない。","copyText":"名称：吸着 (1) 種別：イージー タイミング：常時 技能：― 難易度：自動成功 対象：自身 射程：至近 侵蝕値：― 制限：― 効果：EA35｜重力方向を操作し、手に持っているすべての物体を“落ちない”ようにするエフェクト。たとえ宙に逆さになっても、手にしたシャンパングラスの酒はこぼれない。また、自分の髪の毛や服の裾を任意の方向になびかせることができる。戦闘中にこのエフェクトは効果を持たない。"},
{"name":"アルゴスの眼","types":["キュマイラ","メジャー／リア",""],"text":"EA57｜このエフェクトを組み合わせた判定のダイスを + LV個する。","copyText":"名称：アルゴスの眼 (3) タイミング：メジャー／リア 技能：〈知覚〉 難易度：― 対象：― 射程：― 侵蝕値：1 制限：― 効果：EA57｜このエフェクトを組み合わせた判定のダイスを + LV個する。"}
];


const list = document.getElementById("list");
const searchBox = document.getElementById("searchBox");
const typeFilter1 = document.getElementById("typeFilter1");
const typeFilter2 = document.getElementById("typeFilter2");
const typeFilter3 = document.getElementById("typeFilter3");

// プルダウン自動生成
function populateTypeFilters() {
  const filters = [typeFilter1, typeFilter2, typeFilter3];
  const labels = ["シンドローム", "タイミング", "―"]; // デフォルト表示ラベル

  filters.forEach((filterEl, index) => {

    // types配列のindex番目の値のユニーク一覧を取得
    const uniqueTypes = [...new Set(texts.map(t => t.types[index]).filter(x => x))];

    // 既存のオプションをクリア
    filterEl.innerHTML = "";

    // 空欄オプション（ラベル付き）を作成
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = labels[index]; // ラベルを設定
    emptyOption.className = "defaultOption"; // ←クラスを追加
    filterEl.appendChild(emptyOption);

    // 実際のタイプをオプションとして追加
    uniqueTypes.forEach(type => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      filterEl.appendChild(option);
    });
  });
}

const filters = [typeFilter1, typeFilter2, typeFilter3];

filters.forEach(filterEl => {
  // 初期表示を灰色に
  filterEl.style.color = "#888";

  filterEl.addEventListener("change", () => {
    if (filterEl.value === "") {
      filterEl.style.color = "#888"; // デフォルトラベルは灰色
    } else {
      filterEl.style.color = "#000"; // 選択されたら黒
    }
  });
});

// リスト描画
function renderList(filter = "") {
  const t1 = typeFilter1.value;
  const t2 = typeFilter2.value;
  const t3 = typeFilter3.value;

  list.innerHTML = "";

  texts
    .filter(t =>
      (t.name.includes(filter) || t.text.includes(filter)) &&
      (t1 === "" || t.types[0] === t1) &&
      (t2 === "" || t.types[1] === t2) &&
      (t3 === "" || t.types[2] === t3)
    )
    .forEach(t => {
      const div = document.createElement("div");
      div.className = "item";

      const info = document.createElement("div");
      info.className = "info";

      const nameSpan = document.createElement("span");
      nameSpan.className = "name";
      nameSpan.textContent = t.name;
      info.appendChild(nameSpan);

      const typesSpan = document.createElement("span");
      typesSpan.className = "types";
      typesSpan.textContent = " [" + t.types.filter(x=>x).join("] [") + "]";
      info.appendChild(typesSpan);

      div.appendChild(info);

      const copy = document.createElement("div");
      copy.textContent = t.text;  // 表示はそのまま
      copy.className = "copyable";
      copy.onclick = () => {
        navigator.clipboard.writeText(t.copyText); // copyTextをコピー
        alert("コピーしました:\n" + t.copyText);
      };
      div.appendChild(copy);

      list.appendChild(div);
    });
}

// 初期化
populateTypeFilters();
searchBox.addEventListener("input", () => renderList(searchBox.value));
[typeFilter1,typeFilter2,typeFilter3].forEach(sel => sel.addEventListener("change", () => renderList(searchBox.value)));

renderList();
