# ♟️ Round Robin Pairing System
**By John LeTard**  
_A complete USCF-compliant tournament pairing engine for Round Robin chess events._

---

## 📜 Project Purpose

This project is a tool for tournament directors and organizers to automatically generate, manage, and export **round robin pairings** using the **Crenshaw-Berger pairing tables** and **USCF rules**.

It supports player lookup via USCF ID or name, automated pairings up to 24 players, score tracking, color balancing, and USCF export preparation. Ideal for quads, club events, and official USCF round robins.

---

## 📚 Official Rules Referenced

1. **US Chess Federation’s Official Rules of Chess (7th Edition, 2020)**  
   _Section 30: Round Robin Tournaments_  
   [USCF Rulebook PDF](https://new.uschess.org/sites/default/files/media/documents/US-Chess-Rules-7th-edition-Updated-2020.pdf)

2. **USCF "Thin" API Access Points**  
   US Chess Federation. (n.d.). *Thin client access to MSA data*. Retrieved from:  
   https://msa.uschess.org

---

## 🧩 Core Features

| Feature                    | Status        | Notes                                                                 |
|---------------------------|---------------|-----------------------------------------------------------------------|
| Player class              | ✅ Done        | Includes name, ratings, expiration, USCF ID                          |
| Crenshaw pairing tables   | ⏳ In progress | Tables 3–14 present, 15–24 planned                                  |
| Round robin pairing engine| ⏳ In progress | Pulls from table, assigns names, colors                              |
| TimeControl logic         | ✅ Done        | Base + delay + increment, classifies rating type                     |
| USCF ID Lookup            | 🔜 Planned     | Uses `thin3.php` via local Node proxy                                |
| Name search (Last/First)  | 🔜 Planned     | Uses `thin2.php`, returns candidates with USCF IDs                   |
| Color tracking & fairness | 🔜 Planned     | Auto-detect imbalance, rebalance where possible                      |
| Score entry system        | 🔜 Planned     | Manual entry UI or CLI, with handling of drops                       |
| USCF export format        | 🔜 Planned     | Structure output for upload to USCF rating system                    |

---

## 🔄 Architecture Overview

```
📁 public/
  └── index.html               → Minimal UI
📁 src/
  ├── RoundRobin.js           → Core logic and models
  ├── pairingTables.js        → JSON pairing tables (Crenshaw format)
  └── proxy.js                → Node server to fetch USCF data
📁 data/
  └── players.json            → Optional: saved entries or CSV export
README.md
```

---

## 📌 Upcoming Tasks (Summer 2025 To-Do List)

### 🔨 MVP: Basic Round Robin Pairing Generator
- [ ] ✅ Refactor pairing tables into `pairingTables.js`
- [ ] ✅ Build `generatePairings(players)` using table + color output
- [ ] ✅ Add color tracking (`W/B`) and count per player
- [ ] ✅ Fix all known bugs (`assignPairing`, `section.name`, etc.)

### 🌐 USCF Integration
- [ ] 🔧 Create `proxy.js` to relay `thin3.php` and `thin2.php` data
- [ ] 🔧 Add `Player.fromUSCF(uscfID)` to fetch ratings on registration
- [ ] 🔧 Add name search via `thin2.php` and return structured list

### 🧠 Tournament Management Logic
- [ ] ⚖️ Add player withdrawal logic (invalidates prizes, tracks rated games)
- [ ] ⚖️ Handle color balance issues due to drops (per Rule 30E)
- [ ] 📋 Create `Section.scoreGame(round, result)` and auto-tally

### 📤 Output & Export
- [ ] 📄 Format USCF-compatible output (pairings + results)
- [ ] 📄 Export CSV or JSON for printing or upload

### 🎨 Optional UI
- [ ] 🖥️ Browser interface to input players, assign pairing numbers, and see tables
- [ ] 🖥️ Interface to track results per round with visual history

---

## 🌟 Author's Note

This project is being revived as part of the **"I'm Going to Be a Real Coder When I Grow Up" Summer Plan**. It started with a dream, a round robin, and a laptop that drowned in lemonade — but we’re bringing it back stronger, smarter, and CORS-free.

---

## 📬 Contact

For questions or tournament nerd-talk, reach out to **John LeTard**.
