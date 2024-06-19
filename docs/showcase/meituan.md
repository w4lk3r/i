---
sidebar_position: 4
---

# Apps & Modules in Meituan

## Daxiang App

| Item | Content |
|----------|----------|
| Name | Daxiang<br/>大象 |
| Category | Enterprise Communication and Collaboration Platform |
| Screenshot | ![screenshot](/img/apps_31_01.webp) ![screenshot](/img/apps_31_02.webp) ![screenshot](/img/apps_31_03.webp) ![screenshot](/img/apps_31_04.webp) |
| Platform | [Android](https://apkpure.com/da-xiang/com.sankuai.xmpp)<br/>[iOS/iPadOS](https://apps.apple.com/us/app/%E5%A4%A7%E8%B1%A1-%E4%BC%81%E4%B8%9A%E7%A7%BB%E5%8A%A8%E5%8A%9E%E5%85%AC%E5%B9%B3%E5%8F%B0/id824691094)<br/>[Web](https://neixin.cn/) |
| Challenges | • **System Integration**: Integrating all internal company systems to support seamless business process handling within the platform.<br/>• **Message Management**: Handling real-time, offline, and historical messages.<br/>• **Network Reliability**: Ensuring message reliability in complex and unstable network environments. display for various instruments. |
| Solutions | • Implemented 10+ preset message formats. Supported for **custom messages**.<br/>• Researched and utilized best practices from **well-known open-source projects**(e.g., XMPP, ZeroMQ) to ensure solution reliability.<br/>• Optimized **data packet size** by serializing messages into a binary format.<br/>• Defined a **network state machine** model to handle different network states and transitions, ensuring stability and reliability. |

## Dining Business

| Item | Content |
|----------|----------|
| Name | Meituan & Dianping<br/>美团 & 大众点评 |
| Category | Local Life Service Platforms |
| Business | Dining |
| Screenshot | ![screenshot](/img/apps_32_01.webp) ![screenshot](/img/apps_32_02.webp) ![screenshot](/img/apps_32_03.webp) ![screenshot](/img/apps_32_04.webp) |
| Platform | [Meituan Android](https://play.google.com/store/apps/details?id=com.sankuai.meituan),&nbsp;[Meituan iOS/iPadOS](https://apps.apple.com/us/app/%E7%BE%8E%E5%9B%A2-%E7%BE%8E%E5%A5%BD%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%B8%AE%E6%89%8B/id423084029)<br/>[Dianping Android](https://play.google.com/store/apps/details?id=com.dianping.v1),&nbsp;[Dianping iOS/iPadOS](https://apps.apple.com/us/app/%E5%A4%A7%E4%BC%97%E7%82%B9%E8%AF%84-%E6%B0%91%E5%AE%BF%E9%85%92%E5%BA%97%E9%A2%84%E8%AE%A2-%E6%99%AF%E7%82%B9%E7%BE%8E%E9%A3%9F%E6%8E%A8%E8%8D%90/id351091731) |
| Challenges | • **Regional differences**: Performance or availability issues may suddenly occur for some users due to differences in regions, networks, or phone models.<br/>• **Business loss**: Performance or availability issues during peak business periods can lead to significant revenue loss. |
| Solutions | • **Monitoring Capabilities**: Implemented module-level and page-level data loading monitoring to collect information and provide early warnings for performance and availability issues.<br/>• **Degradation Capabilities**: Developed module-level and page-level functional degradation mechanisms to ensure high availability of services. |