/**
 * @name SillyTavern QR Controller v6.5
 * @author SenriYuki
 * @version 6.5
 * @description Enhanced Quick Reply management: Search, Recent Items, and High-Performance Reset.
 * @description 强化快速回复管理：支持搜索、最新项及列表重置。
 */
(function() {
    // Prevent duplicate loading / 防止重复加载
    if (window.st_qr_v65_loaded) return;
    window.st_qr_v65_loaded = true;

    const historyKey = 'st_qr_history_v6';

    // History Manager: Capture display names to ensure matching / 历史记录管理：抓取显示名称以确匹配
    const saveToHistory = (name) => {
        if (!name || name.trim() === "" || name.includes("Select a preset") || name.includes("选择预设")) return;
        let recent = JSON.parse(localStorage.getItem(historyKey)) || [];
        recent = [name, ...recent.filter(n => n !== name)].slice(0, 15);
        localStorage.setItem(historyKey, JSON.stringify(recent));
    };

    // Event: Manual Selection / 事件：手动选择
    $(document).on('change', '#qr--set', function() {
        const val = $(this).find('option:selected').text();
        saveToHistory(val);
    });

    // Event: File Import (Delayed capture) / 事件：文件导入（延时抓取）
    $(document).on('change', 'input[type="file"]', function(e) {
        setTimeout(() => {
            const $qrSelect = $('#qr--set');
            const currentName = $qrSelect.find('option:selected').text();
            if (currentName) saveToHistory(currentName);
        }, 1500);
    });

    // UI Injection: Create vertical layout / UI 注入：创建垂直布局
    const injectUI = ($el) => {
        if ($el.attr('data-v65-patched') === 'true') return;
        
        const $wrapper = $(`<div class="st-qr-v65-container" style="display: flex; flex-direction: column; width: 100%; gap: 5px; margin-bottom: 8px;"></div>`);
        
        const $ui = $(`
            <div class="st-qr-v65-ui" style="display:inline-flex;align-items:center;gap:5px;vertical-align:middle;">
                <button class="v65-search" title="Search / 搜索" style="background:#111;border:1px solid #0cf;color:#0cf;cursor:pointer;padding:3px 8px;border-radius:4px;font-size:12px;">🔍</button>
                <button class="v65-time" title="Recent / 最新" style="background:#111;border:1px solid #ff7e33;color:#ff7e33;cursor:pointer;padding:3px 8px;border-radius:4px;font-size:12px;">🕒</button>
                <button class="v65-reset" title="Reset / 复归" style="background:#111;border:1px solid #28a745;color:#28a745;cursor:pointer;padding:3px 8px;border-radius:4px;font-size:12px;">🔄</button>
            </div>
        `);
        
        $el.before($wrapper);
        $wrapper.append($el);
        $wrapper.append($ui);
        $el.css('width', '100%').attr('data-v65-patched', 'true');

        // Event Handler: Reset List / 事件处理：重置列表
        $ui.find('.v65-reset').on('click', function(e) {
            e.preventDefault();
            requestAnimationFrame(() => {
                const options = $el[0].options;
                for (let i = 0; i < options.length; i++) {
                    options[i].style.display = '';
                }
            });
        });

        // Event Handler: Search Function / 事件处理：搜索功能
        $ui.find('.v65-search').on('click', function(e) {
            e.preventDefault();
            const term = prompt("Search QR / 搜索关键词");
            if (!term) return;

            const $options = $el.find('option');
            let matchCount = 0;
            
            $options.show(); 
            $options.each(function() {
                const text = $(this).text().toLowerCase();
                const isMatch = text.includes(term.toLowerCase());
                $(this).toggle(isMatch);
                if(isMatch) matchCount++;
            });

            // Safety Net: Prevent empty list lock-up / 保底机制：防止空列表死锁
            if (matchCount === 0) {
                $options.show();
                alert("No matches found / 未找到结果");
            }
        });

        // Event Handler: Recent Items / 事件处理：显示最新项
        $ui.find('.v65-time').on('click', function(e) {
            e.preventDefault();
            const history = JSON.parse(localStorage.getItem(historyKey)) || [];
            
            if (history.length === 0) {
                return alert("No history yet. Select a QR preset to start recording.\n暂无历史，请先手动选择一个QR以开始记录。");
            }

            const $options = $el.find('option');
            const matchedElements = [];

            // Filter logic: Check validity before hiding / 筛选逻辑：隐藏前校验有效性
            $options.each(function() {
                if (history.includes($(this).text())) {
                    matchedElements.push($(this));
                }
            });

            if (matchedElements.length > 0) {
                $options.hide();
                matchedElements.forEach(el => el.show());
            } else {
                alert("Saved items not found in list (Names may have changed).\n历史项在当前列表中未找到。");
                $options.show();
            }
        });
    };

    // DOM Scanner / DOM 扫描
    const scan = () => {
        $('select').each(function() {
            const $t = $(this);
            const isQR = $t.attr('id') === 'qr--set' || 
                         $t.closest('.qr-usage-panel, #quick-reply-drawer').length > 0 ||
                         $t.hasClass('qr--set');
            
            if (isQR) injectUI($t);
        });
    };

    const obs = new MutationObserver(scan);
    obs.observe(document.body, { childList: true, subtree: true });
    setInterval(scan, 2000);

    console.log("🚀 SenriYuki QR助手已啟動！ 🚀 SenriYuki QR Controller Ready!");
})();