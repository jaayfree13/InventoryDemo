# Inventory Demo

## Overview

A UI system prototype inspired by Minecraft’s Ore UI, focused on building a **modular, state-driven, and game-oriented interface** using React and TypeScript.

The goal is to demonstrate strong **design system thinking**, **keyboard interaction**, and **scalable UI architecture**.

---

## Components

* **Inventory Grid**

* **Context-Based Right Panel**

  * Item Details
  * Crafting
  * Storage
  * Smelting

* **Keyboard Controls**

  * `Esc` → Pause
  * `E` / `C` / `V` / `F` → Switch panel
  * `Z` / `X` → Switch tabs
  * `Arrow keys` or `WASD` → Navigate
  * `Tab` → Switch focus

---

## Architecture

* Centralized `ui` state controls:

  * panel mode
  * focus
  * selection

* Reusable components:

  * `InventoryGrid`, `InventorySlot`, `Button`, panels

* Layered styling:

  * design tokens
  * shared components
  * panel layouts

---

## Design Principles

* **System over screens** – reusable components, not one-off views
* **State-driven UI** – logic flows through state, not DOM
* **Consistency** – fixed layouts and predictable behavior
* **Context clarity** – UI adapts to player actions
* **Game-like interaction** – keyboard-first navigation
