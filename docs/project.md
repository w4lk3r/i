---
sidebar_position: 3
---

# Project

## ➤ Sep 2020 - Sep 2022
**Laiyin Music Learning Platform**
- **Intro**: The platform covers over 10 specialized music learning apps including KonwRhythm, Laiyin AI Practice, and various instrument-focused applications. The **Smart Music Score** is the foundational module across these apps. As the technical partner, I led the module's design and developed 90% of the code.
- **Platform**: Android, iOS, Web
- **Challenges**:
  - **Cross-Platform Consistency**: Ensuring a highly consistent business presentation and interactive logic across platforms.
  - **Performance**: Providing a smooth and responsive practice experience.
  - **Interactivity**: Allowing users to view, play, and edit music scores.
  - **Multi-App Adaptability**: Adapting to the sound playback and music score display for various instruments.
- **Solutions**:
  - Adopted **Flutter** to guarantee consistency and performance across platforms.
  - Reused a **Instrument Practice Module** for efficient multi-app development.
  - Implemented the **MusicScoreWidget** based on the **canvas** for score rendering.
  - Integrated customized **Soundfont** for varied instrument sounds.

## ➤ Jun 2016 - Mar 2020
**Meituan App Dine-In Business**
- **Intro**: My team was responsible for the food channel in Meituan and Dianping. Given our monthly active users and order volume exceeding hundreds of millions, optimizing the performance and reliability of our channel was crucial.
- **Platform**: Android, iOS, Web
- **Challenges**:
  - **Regional differences**: Performance or availability issues may suddenly occur for some users due to differences in regions, networks, or phone models. 
  - **Business loss**: Performance or availability issues during peak business periods can lead to significant revenue loss.
- **Solutions**:
  - **Monitoring Capabilities**: Implemented module-level and page-level data loading monitoring to collect information and provide early warnings for performance and availability issues.
  - **Degradation Capabilities**: Developed module-level and page-level functional degradation mechanisms to ensure high availability of services.

## ➤ Dec 2012 - May 2016
**Meituan Instant Messaging Platform**
- **Intro**: Developed the core module for an internal OA app, enabling instant messaging and integration with all internal systems. This module was later evolved into a communication SDK to facilitate direct user-customer service and user-merchant communication across company apps.
- **Platform**: Android, iOS
- **Challenges**:
  - **System Integration**: Integrating all internal company systems to support seamless business process handling within the platform.
  - **Message Management**: Handling real-time, offline, and historical messages.
  - **Network Reliability**: Ensuring message reliability in complex and unstable network environments. display for various instruments.
- **Solutions**:
  - Implemented 10+ preset message formats. Supported for **custom messages**.
  - Researched and utilized best practices from **well-known open-source projects**(e.g., XMPP, ZeroMQ) to ensure solution reliability.
  - Optimized **data packet size** by serializing messages into a binary format.
  - Defined a **network state machine** model to handle different network states and transitions, ensuring stability and reliability.