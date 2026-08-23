# External Player for MPVBridge

由 [LibertyPrime6](https://github.com/LibertyPrime6) 维护的 External Player 修改版，
用于通过 `mpvbridge://` 协议把网页视频交给
[MPVBridge](https://github.com/LibertyPrime6/MPVBridge) 和 mpv 播放。
有问题可以把log打开发到issue里，我会定期查看。
MPV播放器推荐到[MPV整合包](https://github.com/yosh-wang/MPV-Resource-Index)下载。

## 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/)。
2. 安装并配置 [MPVBridge](https://github.com/LibertyPrime6/MPVBridge)。
3. 选择一个更新源安装油猴脚本：
   - [Greasy Fork 更新源](https://greasyfork.org/zh-CN/scripts/592362-external-player-for-mpvbridge)
     （推荐，后续从 Greasy Fork 自动更新）。
   - [GitHub 更新源](https://raw.githubusercontent.com/LibertyPrime6/external-player-mpvbridge/main/release/external-player-mpvbridge.github.user.js)
     （后续从 GitHub `main` 分支自动更新）。

## 第一次使用（详细步骤）

### 1. 准备运行环境

开始前请确认已经具备以下组件：

- Windows 10/11 x64。
- Chrome、Edge 或 Firefox，以及已启用的 Tampermonkey。
- 一套可以正常播放网络视频的 mpv。MPVBridge 只负责选择和启动 Profile，
  不包含 `mpv.exe`；`mpv.exe` 仍需用户自行准备并配置为 Profile。
- MPVBridge v1.4.0 或更高版本。它可以检测系统中的 yt-dlp、FFmpeg 和 Node.js，
  并在缺失时把便携环境一键安装到自身同目录的 `Tools` 文件夹。优先从
  [Releases](https://github.com/LibertyPrime6/MPVBridge/releases) 下载 Windows x64
  版本；如果暂时没有成品，也可以按照其 README 使用 Visual Studio 2026 构建。

播放 YouTube 需要较新的 yt-dlp 和 Node.js JavaScript runtime。脚本和 MPVBridge
都会显式传入 `--js-runtimes=node`；Node.js 可以来自系统 `PATH`，也可以由
MPVBridge 安装到相对的 `Tools\node` 目录，不需要手动修改系统环境变量。

### 2. 第一次配置 MPVBridge

1. 将 MPVBridge 完整解压到一个固定、可写的目录。注册协议后不要随意移动
   `MPVBridge.exe`，否则浏览器仍会调用旧路径。
2. 双击 `MPVBridge.exe`，进入 **Profile 管理**窗口。
3. 新建一个 Profile，填写容易识别的名称，并选择实际使用的 `mpv.exe`。
4. 保存 Profile；如只有一套 mpv，建议将它设为默认 Profile。
5. 在 **系统集成**区域点击 **运行环境检测…**。窗口会分别检测 yt-dlp、FFmpeg
   （含 ffprobe）和 Node.js，并显示版本以及“系统”或“便携”的来源。
6. 系统已有受支持版本时无需安装。缺少某项时，点击该项自己的 **安装便携版**；
   下载期间会在该项下方显示独立的平滑进度条，按钮会变为 **取消下载**。取消或
   安装完成后，进度条会隐藏；下载超时也会显示具体提示。
7. 点击 **重新检测**，确认所需环境均为可用。便携组件保存在 MPVBridge 同目录的
   `Tools` 中，可以随整个文件夹复制到其他电脑，且不会修改系统 `PATH`。
8. 返回 Profile 管理，在 **系统集成**区域点击注册 `mpvbridge://` 网页调用协议。
   该操作写入当前用户配置，通常不需要管理员权限。
9. 如需确认路径是否正确，可先用 MPVBridge 打开一个本地视频。能够出现 Profile
   选择窗口并正常启动 mpv，说明基础配置有效。

如果默认 Profile 有效，外部调用会在倒计时结束后自动进入该 Profile。倒计时期间
点击、滚动或按键会取消自动进入，仍可手动选择其他 Profile。

### 3. MPVBridge 单独使用与参数透传

MPVBridge 不依赖本油猴脚本也能作为 mpv 的 Profile 选择器使用。外部程序传入
本地媒体路径、媒体 URL 或 mpv 参数后，MPVBridge 会先让你选择 Profile，再把原始
媒体参数交给该 Profile 对应的 `mpv.exe`。

#### 把媒体文件拖到 MPVBridge 快捷方式

1. 右键 `MPVBridge.exe`，选择 **发送到 > 桌面快捷方式**；也可以手动创建快捷方式。
2. 把一个或多个本地视频、音频或播放列表文件拖到该快捷方式上。
3. 在弹出的 Profile 选择窗口中选择播放器配置，MPVBridge 随即使用该配置打开文件。

这个桌面快捷方式可以作为通用的媒体入口。直接双击快捷方式且没有给它媒体参数时，
打开的是 Profile 管理窗口，不会启动空白 mpv。

如果想为某个固定媒体制作单独的快捷方式，可以复制一份 MPVBridge 快捷方式，在
**属性 > 目标**中将媒体路径追加到 `MPVBridge.exe` 后，例如：

```text
"D:\Apps\MPVBridge\MPVBridge.exe" "D:\Video\movie.mkv"
```

以后双击这个媒体快捷方式，就会先经过 MPVBridge 选择 Profile，再打开对应文件。
移动 MPVBridge 或媒体文件后，需要同步修改快捷方式中的路径。

#### 将 MPVBridge 关联为媒体文件的打开方式

1. 双击 `MPVBridge.exe` 进入 Profile 管理，在 **系统集成 > 媒体文件关联**中选择
   需要交给 MPVBridge 的视频、音频或播放列表扩展名并保存。
2. 按照随后打开的 Windows **默认应用**页面完成最终确认。Windows 10/11 不允许
   普通桌面程序静默替换受保护的默认应用，因此这一步需要手动选择 MPVBridge。
3. 以后双击已关联的媒体文件，就会打开 Profile 选择窗口并透传给选中的 mpv。

#### 从命令行透传文件、URL 和 mpv 参数

```text
MPVBridge.exe "D:\Video\ep01.mkv" --fs
MPVBridge.exe "https://example.com/video"
```

除 `--bridge-profile=<ProfileID>` 等 Bridge 自有参数外，其余文件路径、URL 和 mpv
选项会保持原始命令行形式传给目标 `mpv.exe`。使用 `--bridge-profile` 可以跳过
选择窗口，直接锁定指定 Profile。

这里保留的是完成首次使用所需的简明说明。Profile 配置、文件关联、协议、日志和
完整命令行规则以 [MPVBridge 仓库 README](https://github.com/LibertyPrime6/MPVBridge#readme)
为准，避免两份完整文档在后续版本中失去同步。

### 4. 安装油猴脚本

1. 选择 [Greasy Fork 更新源](https://greasyfork.org/zh-CN/scripts/592362-external-player-for-mpvbridge)
   或 [GitHub 更新源](https://raw.githubusercontent.com/LibertyPrime6/external-player-mpvbridge/main/release/external-player-mpvbridge.github.user.js)，
   并按上方“安装来源与自动更新”的说明打开对应链接。
2. Tampermonkey 出现安装页面后，确认脚本名称为 **External Player for MPVBridge**，
   然后点击安装。
3. 保留脚本需要的 `GM_cookie`、`GM.xmlHttpRequest` 和站点连接权限；这些权限用于
   读取目标站点认证状态、调用站点接口以及与本机 `127.0.0.1` 上的 MPVBridge
   会话通信。
4. 回到已经打开的视频页面并刷新一次，确保新脚本已注入页面。

安装后可在 Tampermonkey 管理面板中检查版本。从 Greasy Fork 安装的副本会通过
Greasy Fork 更新；从 GitHub Raw 安装的副本会通过 GitHub `main` 分支更新。

### 5. 完成第一次网页播放

1. 打开一个受支持的视频页面，例如 Bilibili 或 YouTube 的单个视频页面。
2. 等待网页自身播放器和视频信息加载完成。
3. 点击脚本加入页面的 External Player/外部播放器按钮。按钮位置会随站点和页面
   布局变化；保持默认 MPVBridge 播放器配置即可完成第一次测试。
4. 浏览器首次调用 `mpvbridge://` 时会询问是否打开外部应用。确认目标是
   `MPVBridge.exe` 后允许打开；浏览器提供“始终允许”选项时可以勾选，避免以后
   每次确认。
5. 在 MPVBridge 中选择 Profile；如果设置了默认 Profile，也可以等待倒计时结束。
6. mpv 启动并开始播放后，保留原网页标签。脚本会通过本机回传会话同步必要的
   播放状态，关闭网页可能会中断部分状态更新。

第一次测试建议先选择无需登录的公开视频。这样可以把“播放器路径或协议问题”和
“Cookie、会员权限或地区限制问题”分开排查。

### 6. 播放进度回传

每次从网页启动 MPV 时，脚本都会为本次播放创建带随机令牌的临时回传会话。
MPVBridge 只有在同时收到合法的会话令牌、本机端口和网页集成标记后才会启用回传；
它通过随机命名的 MPV JSON IPC 管道，每约 10 秒读取一次播放位置、总时长、暂停状态、
播放列表位置和媒体标题。脚本再从 `127.0.0.1` 获取快照，整个过程不会把播放状态发送到
外部服务器。

在 Bilibili 或 YouTube 页面中，只要原标签页仍然打开且没有切换到另一个视频，脚本会把
MPV 的播放位置同步到该网页播放器。两边相差不足 2 秒时不会反复跳转；使用播放列表时，
脚本仍会公布每个条目的位置，但只会修改最初从网页启动的那个条目的网页进度。由于
MPVBridge 按约 10 秒的周期采样，这不是逐秒实时同步。

回传只负责当前标签页内的播放位置衔接，不会控制网页播放器的播放/暂停状态，也不保证
网站会把该位置记入账号观看历史、云端进度或跨设备续播。关闭或刷新原标签页、跳转到其他
视频、浏览器或 Tampermonkey 阻止本机请求，都会中断当前会话的网页同步。

页面脚本如需读取回传结果，可以使用以下两个标签页内接口：

- `sessionStorage['external-player-mpvbridge-progress']`：保存最近一次进度快照的 JSON。
- `external-player-mpvbridge:mpv-progress`：每次收到新快照时在 `document` 上触发的
  `CustomEvent`；数据位于 `event.detail`，包含 `time`、`duration`、
  `playlistPosition`、`paused`、`title` 和 `phase`。

如果网页进度没有变化，请先等待 10 秒以上，并确认原视频标签页仍保持打开、MPVBridge
与脚本均为最新版本，以及安全软件没有拦截 MPVBridge 的 MPV JSON IPC 或
`127.0.0.1` 本机回传端口。

### 7. Cookie 认证（按需配置）

公开媒体通常不需要额外配置。对于登录可见、会员、年龄限制或需要账号状态的内容：

1. 在视频页面点击脚本设置按钮，或按 `Ctrl + Alt + E` 打开设置。
2. 进入 **Cookie 认证**，先点击刷新认证状态。
3. 优先使用 **网页登录**或**自动 Cookie**。Bilibili 当前视频与直播会依次尝试
   网页登录状态、自动 Cookie、已保存 Cookie 和匿名；Bilibili 播放列表与
   YouTube 会从自动 Cookie 开始尝试。
4. 只有自动方式不可用时，再导入 Netscape 格式的 `cookies.txt`。推荐使用开源扩展
   [Get cookies.txt LOCALLY](https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc)
   获取：
   1. 在 Chrome、Edge 等 Chromium 浏览器中安装该扩展。
   2. 使用同一浏览器登录 Bilibili 或 YouTube，并打开需要认证的对应站点页面。
   3. 点击浏览器工具栏中的扩展图标，将导出格式选择为 **Netscape**，然后导出并保存
      为 `cookies.txt`。只需要对应站点的 Cookie 时，优先按当前站点或域名导出。
   4. 回到脚本的 **Cookie 认证**设置，选择刚导出的文件并执行验证。脚本会检查站点
      登录状态和 yt-dlp 可用性，两项都成功后才保存。

   扩展的源代码和版本信息可在
   [kairi003/Get-cookies.txt-LOCALLY](https://github.com/kairi003/Get-cookies.txt-LOCALLY)
   查看。请核对扩展名称与开发者，避免安装名称相似的未知扩展。
5. 导入的 Cookie 保存在 Tampermonkey 的脚本存储中，可在同一页面删除。Cookie
   文件等同于登录凭据，只应在受信任的 Bilibili 或 YouTube 页面中导入，不要上传、
   分享或提交到 GitHub。

播放时，yt-dlp 所需的 Cookie 会通过带随机会话令牌的 `127.0.0.1` 请求临时交给
MPVBridge。MPVBridge 使用临时 Cookie 文件启动 mpv/yt-dlp，并在正常结束后删除。

### 8. 可选设置

- **网络代理**：按 `Ctrl + Alt + E` 打开设置，在全局设置中填写代理，例如
  `http://127.0.0.1:7890`。留空表示不使用代理。
- **画质和字幕**：可分别调整 Bilibili、YouTube 及通用 yt-dlp 解析器的画质、
  字幕和格式选项。第一次测试建议先保留默认值。
- **多个 mpv 配置**：在 MPVBridge 中建立多个 Profile，例如原生、补帧或高画质
  配置；每次网页调用都可以选择本次使用的 Profile。

### 第一次使用常见问题

#### 点击外部播放器按钮后没有反应

- 重新打开 MPVBridge，在 **系统集成**中注销后再次注册 `mpvbridge://` 协议。
- 确认浏览器没有阻止“打开外部应用”提示。
- 确认 Tampermonkey 中脚本已启用，并刷新当前视频页面。

#### MPVBridge 已打开，但 mpv 没有启动

- 在 Profile 管理中重新浏览并选择正确的 `mpv.exe`，不要只填写包含 mpv 的目录。
- 确认 MPVBridge 所在目录可写，且 Profile 已保存。
- 先用相同 Profile 打开一个本地媒体文件，排除 mpv 本身无法启动的问题。

#### mpv 已启动，但网络视频解析失败

- 打开 MPVBridge 的 **系统集成 > 运行环境检测…** 并点击 **重新检测**。缺少
  yt-dlp、FFmpeg 或 Node.js 时，可直接点击对应的 **安装便携版**。
- YouTube 解析需要 Node.js；确认检测窗口显示的是受支持版本，并让 MPVBridge 与
  脚本保持最新。
- 先测试无需登录的公开视频，再检查 Cookie 认证状态。
- 如果浏览器能访问但 mpv 无法访问，可在脚本设置中填写与浏览器环境一致的代理。

#### 自动 Cookie 显示不可用

- 确认已经在目标站点登录，并允许 Tampermonkey 的 Cookie 权限。
- 在目标站点页面刷新后重新检查认证状态。
- 仍不可用时再考虑导入 `cookies.txt`，并在导入后删除本地导出文件或妥善保管。

#### 需要进一步诊断

在 MPVBridge 的 **诊断与日志**区域启用日志并重现问题。日志记录启动阶段、Profile、
进程 ID 和错误，但不会记录完整 URL、原始命令行或 Cookie。提交问题时可以附上错误
描述和脱敏后的日志，不要上传 Cookie 文件、账号信息或带签名的媒体地址。

## 主要改动

- 使用 MPVBridge 自有协议启动播放器并透传 mpv 参数。
- 配合 MPVBridge v1.4.0 检测并便携安装 yt-dlp、FFmpeg 和 Node.js，YouTube 播放
  显式启用 Node.js JavaScript runtime。
- 支持 MPVBridge 播放状态反馈、yt-dlp 预检及 Cookie 传递流程。
- 增加适用于 Bilibili、YouTube 等来源的认证状态管理。
- 使用独立的脚本命名空间、配置键和页面元素标识，避免与原版配置互相覆盖。

## 上游引用与许可

本项目是 [LuckyPuppy514/external-player](https://github.com/LuckyPuppy514/external-player)
的修改作品。原项目作者及 2024 年版权归 LuckyPuppy514 所有，并以 MIT
许可证发布。本项目保留原版权和许可声明，同时标注了 LibertyPrime6 对修改部分
的维护信息。

脚本还内嵌了 [pako 2.0.4](https://github.com/nodeca/pako)，其原始许可证声明已
保留在脚本中。完整归属说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 许可证

[MIT](LICENSE)
