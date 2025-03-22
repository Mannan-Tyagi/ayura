import { Plant } from '../types/plant';

export const PlantData: Plant = {
  commonName: "Tulsi",
  scientificName: "Ocimum sanctum",
  ayushClassifications: ["Ayurveda", "Siddha", "Unani"],
  shortDescription: "The Queen of Herbs for Immunity & Respiratory Health",
  imageUrl: "https://images.unsplash.com/photo-1593484812012-5a7e25d9a6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  
  history: [
    {
      period: "3000 BCE",
      description: "First mentioned in ancient Ayurvedic texts as a sacred plant with healing properties."
    },
    {
      period: "1500 BCE",
      description: "Incorporated into daily rituals in Indian households, considered sacred in Hindu tradition."
    },
    {
      period: "6th Century CE",
      description: "Documented in Charaka Samhita as a treatment for respiratory ailments and fever."
    },
    {
      period: "16th Century",
      description: "Introduced to European herbalists through trade routes, valued for its aromatic properties."
    },
    {
      period: "20th Century",
      description: "Scientific research begins to validate traditional uses, identifying key compounds like eugenol and ursolic acid."
    },
    {
      period: "Present Day",
      description: "Recognized globally for its adaptogenic and immunomodulatory properties, with ongoing clinical research."
    }
  ],
  
  benefits: [
    {
      title: "Respiratory Health",
      description: "Helps alleviate symptoms of common cold, bronchitis, and asthma due to its anti-inflammatory and bronchodilatory properties.",
      source: "Ayurveda"
    },
    {
      title: "Stress Reduction",
      description: "Acts as an adaptogen, helping the body adapt to stress and promoting mental clarity and relaxation.",
      source: "Ayurveda"
    },
    {
      title: "Immune Support",
      description: "Enhances immune function through antioxidant activity and modulation of immune cell response.",
      source: "Siddha"
    },
    {
      title: "Antimicrobial Action",
      description: "Exhibits potent antibacterial, antiviral, and antifungal properties against various pathogens.",
      source: "Unani"
    },
    {
      title: "Digestive Aid",
      description: "Promotes healthy digestion, reduces bloating, and helps in the management of gastric disorders.",
      source: "Ayurveda"
    },
    {
      title: "Anti-inflammatory",
      description: "Reduces inflammation through inhibition of inflammatory pathways and mediators.",
      source: "Siddha"
    }
  ],
  
  compounds: [
    {
      name: "Eugenol",
      effects: "Anti-inflammatory, analgesic, and antimicrobial properties; contributes to the characteristic aroma.",
      researchStatus: "Well-established"
    },
    {
      name: "Ursolic Acid",
      effects: "Hepatoprotective, anti-inflammatory, and anticancer activities; supports skin health.",
      researchStatus: "Well-established"
    },
    {
      name: "Rosmarinic Acid",
      effects: "Potent antioxidant; helps neutralize free radicals and reduce oxidative stress.",
      researchStatus: "Well-established"
    },
    {
      name: "Carvacrol",
      effects: "Antimicrobial and antifungal properties; effective against respiratory pathogens.",
      researchStatus: "Emerging"
    },
    {
      name: "Linalool",
      effects: "Anxiolytic and sedative effects; contributes to stress-reducing properties.",
      researchStatus: "Emerging"
    },
    {
      name: "Apigenin",
      effects: "Neuroprotective and anti-anxiety effects; potential benefits for cognitive health.",
      researchStatus: "Theoretical"
    }
  ],
  
  recipes: [
    {
      name: "Tulsi Tea for Immunity",
      description: "A warming, aromatic tea that boosts immunity and helps fight respiratory infections.",
      ingredients: [
        "15-20 fresh Tulsi leaves or 2 tsp dried Tulsi",
        "1 inch fresh ginger, grated",
        "1/2 tsp turmeric powder",
        "1 tsp honey (optional)",
        "1 cup water",
        "A squeeze of lemon juice"
      ],
      instructions: [
        "Bring water to a boil in a small saucepan.",
        "Add Tulsi leaves, grated ginger, and turmeric powder.",
        "Reduce heat and simmer for 5 minutes.",
        "Strain into a cup and add honey and lemon juice if desired.",
        "Drink while warm, preferably in the morning or when feeling under the weather."
      ]
    },
    {
      name: "Tulsi-Infused Honey",
      description: "A medicinal honey preparation that can be used for coughs, sore throats, or as a daily tonic.",
      ingredients: [
        "1 cup fresh Tulsi leaves, washed and patted dry",
        "2 cups raw, unfiltered honey",
        "A clean, dry glass jar with lid"
      ],
      instructions: [
        "Gently crush the Tulsi leaves to release their essential oils.",
        "Place the leaves in the glass jar.",
        "Pour honey over the leaves, ensuring they are completely submerged.",
        "Seal the jar and store in a cool, dark place for 2 weeks, turning the jar daily.",
        "After 2 weeks, strain out the leaves and transfer the infused honey to a clean jar.",
        "Take 1 teaspoon daily or use as needed for sore throat and cough."
      ]
    },
    {
      name: "Tulsi Face Pack for Clear Skin",
      description: "A natural face pack that helps clear acne, reduce inflammation, and promote healthy skin.",
      ingredients: [
        "2 tbsp fresh Tulsi paste (made by grinding leaves with a little water)",
        "1 tbsp sandalwood powder",
        "1 tsp turmeric powder",
        "1 tbsp plain yogurt",
        "1 tsp honey"
      ],
      instructions: [
        "Mix all ingredients in a small bowl to form a smooth paste.",
        "Cleanse your face and apply the pack evenly, avoiding the eye area.",
        "Leave on for 15-20 minutes until it begins to dry.",
        "Rinse off with lukewarm water, gently massaging in circular motions.",
        "Pat dry and follow with a moisturizer.",
        "Use once or twice a week for best results."
      ]
    }
  ],
  
  quiz: [
    {
      question: "What is the scientific name of Tulsi?",
      answers: [
        "Azadirachta indica",
        "Ocimum sanctum",
        "Withania somnifera",
        "Curcuma longa"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following is NOT a traditional use of Tulsi?",
      answers: [
        "Treating respiratory infections",
        "Reducing stress and anxiety",
        "Lowering blood sugar levels",
        "Treating bone fractures"
      ],
      correctAnswer: 3
    },
    {
      question: "Which active compound in Tulsi is primarily responsible for its antimicrobial properties?",
      answers: [
        "Ursolic acid",
        "Eugenol",
        "Rosmarinic acid",
        "Linalool"
      ],
      correctAnswer: 1
    },
    {
      question: "In which ancient medical system is Tulsi most prominently featured?",
      answers: [
        "Traditional Chinese Medicine",
        "Ayurveda",
        "Greek Medicine",
        "Egyptian Medicine"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the recommended way to preserve the medicinal properties of Tulsi when making tea?",
      answers: [
        "Boil the leaves for at least 10 minutes",
        "Add the leaves to boiling water and immediately remove from heat",
        "Dry the leaves before using them",
        "Mix with other herbs to enhance potency"
      ],
      correctAnswer: 1
    }
  ],
  
  communityDiscussions: [
    {
      user: "AyurvedaExplorer",
      date: "2 days ago",
      topic: "Respiratory Health",
      message: "I've been using Tulsi tea with ginger for my seasonal allergies and it's been a game-changer! Anyone else had similar experiences?"
    },
    {
      user: "HerbalHealer",
      date: "1 week ago",
      topic: "Growing Tips",
      message: "My Tulsi plant is thriving on my balcony! I've found that it needs at least 6 hours of sunlight and well-drained soil. Happy to share more tips!"
    },
    {
      user: "WellnessJourney",
      date: "2 weeks ago",
      topic: "Research",
      message: "Just read a fascinating study on Tulsi's effect on cortisol levels. Has anyone incorporated it into their stress management routine?"
    }
  ]
};