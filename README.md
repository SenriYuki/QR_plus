\#### 📖 Introduction / 简介



\*\*English:\*\*

As your playtime in SillyTavern increases, does your list of Quick Replies (QR) get longer and harder to manage? Is the default sorting confusing, forcing you to scroll endlessly to find the right preset?



To solve this, I developed a lightweight script specifically designed to optimize the QR selection experience. It is now a \*\*universal script\*\*, fully compatible with both PC browsers and Mobile (Termux/Android), featuring performance optimizations to prevent lag on mobile devices.



\*\*简体中文:\*\*

随着玩酒馆（SillyTavern）的时间增加，角色卡和 QR（快捷回复）预设是不是越来越多？酒馆默认的排序由于比较混乱，每次切换都要在下拉框里翻找半天？



为了解决这个问题，我搓了一个轻量级的脚本，专门用来优化 QR 的选择体验。目前版本已实现 \*\*双端通用\*\*，完美适配 PC 浏览器和手机端（Termux），并针对手机端进行了底层性能优化，拒绝卡顿。



---



\#### ✨ Features / 功能特点



\*\*English:\*\*



\* \*\*🔍 Keyword Search:\*\* Click the button, enter a keyword in the popup, and quickly filter the QR list. No more endless scrolling.

\* \*\*🕒 Smart History:\*\* Automatically records your most recent 15 usages. It tracks both \*\*newly imported files\*\* and \*\*manually selected presets\*\*.

\* \*\*🔄 One-Click Reset:\*\* Instantly clears filters and restores the full preset list.

\* \*\*⚡ Zero Lag:\*\* Uses high-performance native DOM rendering for the reset function, solving the "freeze" issue often seen on mobile devices with large lists.

\* \*\*🎨 Minimalist UI:\*\* Three compact buttons inject seamlessly below the QR dropdown, taking up minimal space.



\*\*简体中文:\*\*



\* \*\*🔍 关键词搜索：\*\* 点击按钮，在弹窗输入关键字即可快速筛选 QR，不用再滚列表滚到手酸。

\* \*\*🕒 智能历史记录：\*\* 自动记忆最近使用的 15 个 QR。不仅支持\*\*新导入的文件\*\*，也会记录你\*\*手动选择过\*\*的预设。

\* \*\*🔄 一键重置：\*\* 点击按钮，立刻恢复显示完整的预设列表。

\* \*\*⚡ 拒绝卡顿：\*\* 针对手机端优化的原生 DOM 渲染逻辑，解决了 QR 列表过长导致手机浏览器死锁或卡顿的问题。

\* \*\*🎨 无感植入：\*\* UI 极简，三个小按钮自动挂载在 QR 选择框下方，不占空间。



---



\#### 🛠️ Installation / 安装教程



\*\*English:\*\*

Save the code below as a file named `qr\_plus.js` and place it in the `public` folder of your SillyTavern directory. Then, modify `index.html` to load it.



\*\*简体中文:\*\*

将下方的代码保存为 `qr\_plus.js`，放入酒馆目录的 `public` 文件夹中，修改 `index.html` 刷新页面即可使用！



---



\*\*💻 PC / Windows / Mac / Linux\*\*



1\. Save the code as `qr\_plus.js`.

2\. Move the file to your SillyTavern `public` folder (e.g., `C:\\SillyTavern\\public`).

3\. Open `index.html` (in the `public` folder) with a text editor (like Notepad).

4\. Press `Ctrl+F` to search for `script.js`.

5\. Add the following line \*\*after\*\* the `<script src...` line you found:

```html

<script src="qr\_plus.js" defer></script>



```





6\. Save the file and refresh your browser (F5).



---



\*\*📱 Android (Termux)\*\*



\*\*English:\*\*

Download the code file (rename it to `qr\_plus.js` and put it in your phone's Download folder). Then run the following command in Termux to automatically install it:



\*\*简体中文:\*\*

请先将代码保存为 `qr\_plus.js` 并放在手机的“下载”文件夹中。然后在 Termux 里按顺序执行以下命令：



1\. \*\*Grant Permission (Run once): / 授予权限（仅需执行一次）：\*\*

```bash

termux-setup-storage



```





\*(Click "Allow" on the popup / 在弹出的窗口点击“允许”)\*

2\. \*\*One-click Install: / 一键安装：\*\*

\*(Copy and paste the entire block below / 复制下方整段命令执行)\*

```bash

cp /sdcard/Download/qr\_plus.js ~/SillyTavern/public/ \&\& \\

cd ~/SillyTavern/public \&\& \\

sed -i '/<script type="module" src="script.js"><\\/script>/i <script src="qr\_plus.js" defer></script>' index.html \&\& \\

echo "✅ Install Success! Please refresh the page. / 安装成功！请刷新网页。"



```









