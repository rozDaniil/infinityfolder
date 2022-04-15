export type TreeType = Array<TreeNode>;

export type TreeNode = {
  key: string;
  title: string;
  children?: Array<TreeNode>;
};
