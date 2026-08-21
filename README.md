# External Player for MPVBridge

由 [LibertyPrime6](https://github.com/LibertyPrime6) 维护的 External Player 修改版，
用于通过 `mpvbridge://` 协议把网页视频交给
[MPVBridge](https://github.com/LibertyPrime6/MPVBridge) 和 mpv 播放。

## 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/)。
2. 安装并配置 [MPVBridge](https://github.com/LibertyPrime6/MPVBridge)。
3. 点击[安装油猴脚本](https://raw.githubusercontent.com/LibertyPrime6/external-player-mpvbridge/main/external-player-mpvbridge.user.js)。

脚本的 `@downloadURL` 与 `@updateURL` 均指向本仓库的 `main` 分支，后续版本可由
油猴扩展自动检查更新。

## 主要改动

- 使用 MPVBridge 自有协议启动播放器并透传 mpv 参数。
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
