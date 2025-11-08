# Comparaison des Patterns de Gestion d'État dans Svelte 5

Ce projet démontre **9 approches différentes** pour gérer l'état et le filtrage de données dans Svelte 5.

## 📁 Dossiers et Patterns

### Three - Store avec Runes Svelte 5
**Fichier clé** : `store.svelte.ts`

```typescript
function createThreeStore() {
  let items = $state<Item[]>([...]);
  let selectedCategory = $state<string | null>(null);
  
  let filteredItems = $derived.by(() => ...);
  
  return { get items(), get filteredItems(), ... };
}
export const threeStore = createThreeStore();
```

**Avantages** :
- ✅ État global partagé
- ✅ Pas de prop drilling
- ✅ Réactivité automatique avec runes

**Inconvénients** :
- ❌ Singleton (une seule instance)
- ❌ Couplage entre composants

---

### Four - Props Descendantes + Callbacks
**Fichier clé** : `Four.svelte`

```typescript
// Parent gère l'état
let items = $state<Item[]>([...]);
let selectedCategory = $state<string | null>(null);

function handleCategoryChange(category: string | null) {
  selectedCategory = category;
}

// Passe aux enfants
<Filters onCategoryChange={handleCategoryChange} />
<Items items={filteredItems} />
```

**Avantages** :
- ✅ Simple et explicite
- ✅ Pas de dépendances externes
- ✅ Facile à comprendre

**Inconvénients** :
- ❌ Prop drilling si nombreux niveaux
- ❌ Verbeux pour grandes apps

---

### Five - Classe .svelte.ts
**Fichier clé** : `FilterManager.svelte.ts`

```typescript
export class FilterManager {
  items = $state<Item[]>([...]);
  selectedCategory = $state<string | null>(null);
  
  filteredItems = $derived.by(() => ...);
  
  setCategory(category: string | null) { ... }
}

// Usage
const manager = new FilterManager();
<Filters {manager} />
```

**Avantages** :
- ✅ Encapsulation complète
- ✅ Réutilisable (plusieurs instances)
- ✅ Testable indépendamment
- ✅ Orienté objet

**Inconvénients** :
- ❌ Plus de code (classe)
- ❌ Besoin de passer l'instance

---

### Six - Context API
**Fichier clé** : `Six.svelte`

```typescript
// Parent
const filterContext = {
  get items() { return items; },
  setCategory: (cat) => { selectedCategory = cat; }
};
setContext("filterContext", filterContext);

// Enfant
const context = getContext("filterContext");
```

**Avantages** :
- ✅ Pas de prop drilling
- ✅ Contexte automatique pour enfants
- ✅ Découplage visuel

**Inconvénients** :
- ❌ Couplage implicite (clé magique)
- ❌ Difficile à tracer
- ❌ Limité à l'arbre de composants

---

### Seven - Composable/Hook Pattern
**Fichier clé** : `useFilters.svelte.ts`

```typescript
export function useFilters(initialData: Item[]) {
  let items = $state(initialData);
  let selectedCategory = $state<string | null>(null);
  
  let filteredItems = $derived.by(() => ...);
  
  return {
    get items() { return items; },
    setCategory: (cat) => { selectedCategory = cat; }
  };
}

// Usage
const filters = useFilters(data);
<Filters {filters} />
```

**Avantages** :
- ✅ Très réutilisable
- ✅ Composable (peut combiner plusieurs hooks)
- ✅ Pattern populaire (React/Vue)
- ✅ Testable

**Inconvénients** :
- ❌ Moins orienté objet que classe
- ❌ Besoin de passer l'objet retourné

---

### Eight - Derived Store (Svelte classique)
**Fichier clé** : `stores.ts`

```typescript
export const items = writable<Item[]>([...]);
export const selectedCategory = writable<string | null>(null);

export const filteredItems = derived(
  [items, selectedCategory],
  ([$items, $selectedCategory]) => ...
);

// Usage dans composants
{#each $filteredItems as item}
```

**Avantages** :
- ✅ Pattern Svelte classique (éprouvé)
- ✅ Auto-subscription avec `$`
- ✅ Stores dérivés puissants
- ✅ Compatible Svelte 3/4

**Inconvénients** :
- ❌ Syntaxe `$` (moins moderne)
- ❌ Store global (singleton)
- ❌ Moins de contrôle que runes

---

### Nine - Render Props / Slots
**Fichier clé** : `FilterProvider.svelte`

```typescript
// Provider
type Props = {
  children: Snippet<[{ items, filteredItems, setCategory }]>;
};

{@render children({ items, filteredItems, setCategory })}

// Usage
<FilterProvider>
  {#snippet children({ filteredItems, setCategory })}
    <Filters {setCategory} />
    <Items items={filteredItems} />
  {/snippet}
</FilterProvider>
```

**Avantages** :
- ✅ Flexibilité maximale
- ✅ Inversion de contrôle
- ✅ Composants très découplés

**Inconvénients** :
- ❌ Syntaxe lourde
- ❌ Moins intuitif
- ❌ Peut devenir verbeux

---

## 📊 Tableau Comparatif

| Pattern | Complexité | Réutilisabilité | Testabilité | Performance | Idéal pour |
|---------|-----------|----------------|-------------|-------------|-----------|
| **Store (Three)** | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | État global app |
| **Props (Four)** | ⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | Apps simples |
| **Classe (Five)** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Logique complexe |
| **Context (Six)** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | Arbre de composants |
| **Hook (Seven)** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Logique réutilisable |
| **Derived (Eight)** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | Migration Svelte 3/4 |
| **Slots (Nine)** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | Composants flexibles |

---

## 🎯 Recommandations par Cas d'Usage

### 🟢 App simple, peu de composants
→ **Four (Props)** : Simple, direct, performant

### 🟡 App moyenne, logique métier
→ **Five (Classe)** ou **Seven (Hook)** : Réutilisable, testable

### 🔴 Grande app, état global
→ **Three (Store)** ou **Eight (Derived)** : Centralisé, découplé

### 🔵 Éviter prop drilling
→ **Six (Context)** : Transparent pour les enfants

### 🟣 Maximum de flexibilité
→ **Nine (Slots)** : Inversion de contrôle totale

---

## 🚀 Pages de Test

- `/poc/poc-three` - Store avec Runes
- `/poc/poc-four` - Props + Callbacks
- `/poc/poc-five` - Classe .svelte.ts
- `/poc/poc-six` - Context API
- `/poc/poc-seven` - Composable/Hook
- `/poc/poc-eight` - Derived Store
- `/poc/poc-nine` - Render Props/Slots

---

## 💡 Conclusion

**Il n'y a pas de "meilleure" approche universelle.**

Choisissez selon :
- La taille de votre app
- La complexité de la logique
- Le niveau de réutilisabilité souhaité
- Les préférences de votre équipe

Pour la plupart des cas : **Classe (Five)** ou **Hook (Seven)** offrent le meilleur équilibre entre flexibilité et simplicité.
