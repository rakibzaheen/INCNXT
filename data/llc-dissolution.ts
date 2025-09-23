// data/llc-dissolution.ts

export interface DissolutionStep {
  id: number;
  title: string;
  accordionItems: string[];
  image: string;
  imageAlt: string;
}

export const dissolutionSteps: DissolutionStep[] = [
  {
    id: 1,
    title: "Internal Agreement and Decision-Making",
    accordionItems: [
      "Member voting",
      "Operating agreement provisions",
      "Document the decision",
    ],
    // Replace with your own image
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "A professional man in an office setting",
  },
  {
    id: 2,
    title: "Filing the Articles of Dissolution",
    accordionItems: [
      "Prepare the document",
      "Submit the document to the state",
      "Typical fees",
    ],
    // Replace with your own image
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    imageAlt: "A woman looking at a laptop screen",
  },
  {
    id: 3,
    title: "Winding Up the LLC",
    accordionItems: [
      "Settling debts and obligations",
      "Distributing remaining assets",
      "Final accounting",
    ],
    // Replace with your own image
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    imageAlt: "A man outdoors",
  },
];