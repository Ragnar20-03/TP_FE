const rewardsModel = {
  level: "string", //String
  badge: "string", //String
  points: "number", //Number
  rewards: "array", //Array of rewardModel
};

const rewardModel = {
  plantationId: "string", //String
  treesPlanted: "number", //Number
  images: "array", //Array of Strings (Image links)
  date: "timestamp", //Date
  ngoId: "string", //String
  isCampaign: "boolean", //Boolean
  campaignId: "string", //String (If isCampaign is true)
};
export { rewardsModel, rewardModel };
